const assert = require("http-assert");
const {
  like: likeModel,
  follow: followModel,
  collect: collectModel,
} = require("@m/mongodb/index.js");
const filename = __filename.slice(__dirname.length + 1, -3);
const mongoose = require("@m/mongodb/db.js");
const { appSchema } = require("@j/" + filename);
const xss = require("xss");
const dayjs = require("dayjs");
const Base = require("../baseApiFuc");
const app = new Base(filename);
//用户添加文章
const add = async (ctx) => {
  ctx.request.body.author = ctx.state.uid;
  //校验参数
  let { value, error } = appSchema.add.validate(ctx.request.body);
  assert(!error, 405, error);
  value.content = xss(value.content);

  //保存数据
  try {
    let data = await app.Model.create(value);
    //如果动态是话题
    // if (value.topic) {
    //   _save(data._id, value.topic);
    // }
    ctx.body = {
      code: 200,
      message: "成功",
    };
  } catch (error) {
    ctx.body = {
      code: 500,
      message: "操作失败" + error,
    };
  }
};
//修改动态
const edit = async (ctx) => {
  ctx.request.body.author = ctx.state.uid;
  // assert(ctx.request.body.uid == ctx.state.uid, 432, "无权修改动态！！！");
  //校验参数
  let { value, error } = appSchema.edit.validate(ctx.request.body);

  assert(!error, 422, error);
  value.update_at = dayjs().format("YYYY-MM-DD HH:mm:ss");
  value.check_status = 1;
  const obj = await app._edit(
    {
      _id: value._id,
      author: value.author,
    },
    value
  );

  ctx.body = obj;
};
//查看文章列表
const query = async (ctx) => {
  let { value, error } = appSchema.page.validate(ctx.query);
  assert(!error, 405, error);

  let { page, page_size, uid } = value;

  let offset = (page - 1) * page_size;
  let _filter = {
    check_status: 2,
    status: 1,
    is_public: 1,
    author: uid,
  };
  //uid 存在：查看用户空间的动态（公开）
  //uid与token一致即看自己的则可以看所有包括公开和私密，未审核
  if (uid && uid == ctx.state.uid) {
    delete _filter.is_public;
    delete _filter.check_status;
  }
  for (let key in _filter) {
    if (_filter[key] == null || _filter[key] === "") {
      delete _filter[key];
    }
  }
  try {
    let data = await app.Model.aggregate([
      {
        $match: {
          ..._filter,
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "author",
          foreignField: "uid",
          as: "user",
        },
      },
      {
        $project: {
          title: 1, //标题
          author: 1, //作者 uid
          content: 1, //内容
          keywords: 1, //关键字
          description: 1, //描述
          category: 1, //分类
          check_status: 1, //0 未发布(草稿) 1 审核中 2成功 3失败
          status: 1, //删除 0 1
          is_public: 1, //公开 0 私密 1公开
          cover: 1, //封面
          like: 1, //点赞数量
          comment: 1, //评论数量
          type: 1,
          create_at: 1,
          user: {
            nickname: 1,
            uid: 1,
            avatar: 1,
          },
        },
      },
      { $unwind: "$user" },
    ])
      .sort("-create_at")
      .skip(offset)
      .limit(page_size);

    const count = await app.Model.find(_filter).countDocuments();
    ctx.body = {
      code: 200,
      data,
      paging: {
        page,
        page_size,
        count,
      },
      message: "ok",
    };
  } catch (error) {
    ctx.body = {
      code: 500,
      message: "操作失败" + error,
    };
  }
};
// 文章删除 逻辑删除
const remove = async (ctx) => {
  assert(ctx.query._id, 422, "_id参数缺失");
  const obj = await app._edit(
    {
      _id: ctx.query._id,
      author: ctx.state.uid,
    },
    { status: 0 },
    false
  );

  ctx.body = obj;
};
const detail = async (ctx) => {
  assert(ctx.query._id, 422, "_id参数缺失");
  //有效的文章
  let obj = {
    _id: mongoose.Types.ObjectId(ctx.query._id),
    status: 1,
  };

  try {
    //详情
    let data = await app.Model.aggregate([
      {
        $match: {
          ...obj,
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "author",
          foreignField: "uid",
          as: "user",
        },
      },
      {
        $project: {
          title: 1, //标题
          author: 1, //作者 uid
          content: 1, //内容
          keywords: 1, //关键字
          description: 1, //描述
          category: 1, //分类
          check_status: 1, //0 未发布(草稿) 1 审核中 2成功 3失败
          status: 1, //删除 0 1
          is_public: 1, //公开 0 私密 1公开
          cover: 1, //封面
          like: 1, //点赞数量
          comment: 1, //评论数量
          type: 1,
          create_at: 1,
          user: {
            nickname: 1,
            uid: 1,
            avatar: 1,
          },
        },
      },
      { $unwind: "$user" },
    ]);
    data = data[0];
    //登录用户查看动态详情，可看是否关注过，点赞，收藏
    if (ctx.state && ctx.state.uid) {
      let uid = ctx.state.uid;
      //动态点赞列表
      data.islike = await likeModel
        .findOne({ topic_id: data._id, uid, status: 1 })
        .select("uid");
      data.islike = data.islike ? true : false;
      //是否关注过动态发布者
      data.isfollow = await followModel.findOne({
        user_id: uid,
        follower_id: data.user.uid,
        status: 1,
      });
      data.isfollow = data.isfollow ? true : false;
      //是否收藏过该动态
      data.iscollect = await collectModel.findOne({
        uid: uid,
        topic_id: data._id,
        status: 1,
      });
      data.iscollect = data.iscollect ? true : false;
    }
    //未审核/私人文章只能自己访问
    if ((data && data.is_public === 0) || data.check_status != 2) {
      let isOwn = data.author === ctx.state.uid;
      ctx.body = {
        code: isOwn ? 200 : 410,
        data: isOwn ? data : {},
        message: isOwn ? "ok" : "无权访问",
      };
    } else {
      ctx.body = {
        code: 200,
        data,
        message: "ok",
      };
    }
  } catch (error) {
    ctx.body = {
      code: 500,
      message: "查看失败::" + error,
    };
  }
};
// 获取动态数量
const getCount = async (author) => {
  let _filter = {
    check_status: 2,
    status: 1,
    is_public: 1,
    author,
  };
  return app.Model.find(_filter).countDocuments();
};
module.exports = {
  add,
  query,
  edit,
  remove,
  detail,
  getCount,
};
