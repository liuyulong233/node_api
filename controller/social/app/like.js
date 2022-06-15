const assert = require("http-assert");
const filename = __filename.slice(__dirname.length + 1, -3);
const { dynamic, article } = require("@m/mongodb/index.js");
const mongoose = require("@m/mongodb/db.js");
const { appSchema } = require("@j/" + filename);
const Base = require("../baseApiFuc");
const app = new Base(filename);
//点赞
const add = async (ctx) => {
  ctx.request.body.uid = ctx.state.uid;
  //校验参数
  let { value, error } = appSchema.add.validate(ctx.request.body);
  assert(!error, 405, error);
  let { uid, topic_id, type } = value;
  let data = await app.Model.findOne({ uid, topic_id });
  //没有，新增记录
  if (!data) {
    //保存数据
    try {
      let data = await app.Model.create(value);
      data.status = 0;
      updateLikeCount(data, type);
      ctx.body = {
        code: 200,
        data: {
          isLike: true,
        },
        message: "成功",
      };
    } catch (error) {
      ctx.body = {
        code: 500,
        message: "操作失败" + error,
      };
    }
  } else {
    //有记录，则修改status

    try {
      let obj =await app._editById(data._id, {
        status: data.status == 0 ? 1 : 0,
      });
      updateLikeCount(data, type);

      ctx.body = {
        code: 200,
        data: {
          isLike: data.status == 0,
        },
        message: data.status == 0 ? "点赞成功" : "取消点赞",
      };
    } catch (error) {
      ctx.body = {
        code: 500,
        message: "操作失败" + error,
      };
    }
  }
};
function updateLikeCount(data, type) {
  let num = data.status == 0 ? 1 : -1;
  if (type == 1) {
    dynamic.findByIdAndUpdate(data.topic_id, { $inc: { collect: num } });
  }
  if (type == 2) {
    article.findByIdAndUpdate(data.topic_id, { $inc: { collect: num } });
  }
}
//查看点赞列表
//mongodb 一个字段关联多表??
//
const query = async (ctx) => {
  let { value, error } = appSchema.page.validate(ctx.query);
  assert(!error, 405, error);

  let { page, page_size, type, uid } = value;

  let offset = (page - 1) * page_size;
  let _filter = {
    status: 1,
  };
  if (type === 0) {
    //粉丝
    _filter.follower_id = uid;
  } else {
    _filter.user_id = uid;
  }
  for (let key in _filter) {
    if (_filter[key] == null || _filter[key] === "") {
      delete _filter[key];
    }
  }
  try {
    //topic_id 可关联dynamic article
    let data = await app.Model.aggregate([
      {
        //$match根据$project显示的字段进行筛选
        $match: {
          ..._filter,
        },
      },
      {
        $lookup: {
          from: "users",
          localField: 'topic_id',
          foreignField: "dynamic/'article'",//
          as: "topic",
        },
      },
      {
        $project: {
          user_id: 1, //关注用户id
          follower_id: 1, //被关注者用户ID
          status: 1,
          user: {
            nickname: 1,
            uid: 1,
            avatar: 1,
          },
        },
      },
      { $unwind: "$user" },
    ])
      // .sort("-top -create_at")
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
// 获取关注/粉丝数量
const getCount = async (uid, type) => {
  let _filter = {
    status: 1,
  };
  if (type === 0) {
    _filter.follower_id = uid;
  } else {
    _filter.user_id = uid;
  }
  return app.Model.find(_filter).countDocuments();
};
module.exports = {
  add,
  // query,
  // getCount,
};
