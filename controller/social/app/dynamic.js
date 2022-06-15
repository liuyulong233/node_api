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
const Base = require("../baseApiFuc");
const app = new Base(filename);
//用户添加动态
const add = async (ctx) => {
  ctx.request.body.uid = ctx.state.uid;
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
  // ctx.request.body.uid = ctx.state.uid;
  assert(ctx.request.body.uid == ctx.state.uid, 432, "无权修改动态！！！");
  //校验参数
  let { value, error } = appSchema.edit.validate(ctx.request.body);
  assert(!error, 422, error);
  const obj = await app._edit(
    {
      _id: value._id,
      uid: value.uid,
    },
    value
  );

  ctx.body = obj;
};
//查看动态列表
const query = async (ctx) => {
  let { value, error } = appSchema.page.validate(ctx.query);
  assert(!error, 405, error);

  let { page, page_size, uid } = value;

  let offset = (page - 1) * page_size;
  let _filter = {
    status: 1,
    uid,
    is_public: 1,
  };
  //uid 存在：查看用户空间的动态（公开）
  //uid与token一致即看自己的则可以看所有包括公开和私密
  if (uid && uid === ctx.state.uid) {
    delete _filter.is_public;
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
          localField: "uid",
          foreignField: "uid",
          as: "user",
        },
      },
      {
        $project: {
          uid: 1,
          tag: 1, //学习 生活 日常
          content: 1, //内容
          like: 1, //点赞数量
          comment: 1, //评论数量
          address: 1, //地址
          album: 1, //图片
          is_public: 1, //是否公开 1 公开 0 私密
          status: 1,
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
// 动态删除 逻辑删除
const remove = async (ctx) => {
  assert(ctx.query._id, 422, "_id参数缺失");
  const obj = await app._edit(
    {
      _id: ctx.query._id,
      uid: ctx.state.uid,
    },
    { status: 0 },
    false
  );

  ctx.body = obj;
};
const detail = async (ctx) => {
  assert(ctx.query._id, 422, "_id参数缺失");
  //校验参数
  let obj = {
    _id: mongoose.Types.ObjectId(ctx.query._id),
    status: 1,
  };

  try {
    //动态详情
    let data = await app.Model.aggregate([
      {
        $match: {
          ...obj,
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "uid",
          foreignField: "uid",
          as: "user",
        },
      },
      {
        $project: {
          uid: 1,
          tag: 1, //学习 生活 日常
          content: 1, //内容
          like: 1, //点赞数量
          comment: 1, //评论数量
          address: 1, //地址
          album: 1, //图片
          is_public: 1, //是否公开 1 公开 0 私密
          status: 1,
          topic: 1,
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
    //私人动态只能自己访问
    if (data && data.is_public === 0) {
      let isOwn = data.uid === ctx.state.uid;
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
const getCount = async (uid) => {
  return app.Model.find({
    uid,
    status: 1,
  }).countDocuments();
};
module.exports = {
  add,
  query,
  edit,
  remove,
  detail,
  getCount,
};
