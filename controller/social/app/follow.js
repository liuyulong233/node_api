const assert = require("http-assert");
const filename = __filename.slice(__dirname.length + 1, -3);
const mongoose = require("@m/mongodb/db.js");
const { appSchema } = require("@j/" + filename);
const Base = require("../baseApiFuc");
const app = new Base(filename);
//关注/取关
const add = async (ctx) => {
  ctx.request.body.user_id = ctx.state.uid;
  //校验参数
  let { value, error } = appSchema.add.validate(ctx.request.body);
  assert(!error, 405, error);
  let { user_id, follower_id } = value;
  //查看数据库是否有记录
  let data = await app.Model.findOne({ user_id, follower_id });
  if (!data) {
    //保存数据
    try {
      let data = await app._create(value);

      ctx.body = {
        code: 200,
        data: {
          isfollow: true,
        },
        message: "关注成功",
      };
    } catch (error) {
      ctx.body = {
        code: 500,
        message: "关注失败::" + error,
      };
    }
  } else {
    //有记录，则修改status

    try {
      let obj = app._editById(data._id, {
        status: data.status == 0 ? 1 : 0,
      });

      ctx.body = {
        code: 200,
        obj,
        data: {
          isFollow: data.status == 0,
        },
        message: data.status == 0 ? "关注成功" : "取关成功",
      };
    } catch (error) {
      ctx.body = {
        code: 500,
        message: "操作失败" + error,
      };
    }
  }
};

//查看关注/粉丝列表
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
          localField: type == 0 ? "user_id" : "follower_id",
          foreignField: "uid",
          as: "user",
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
  }
  if (type === 0) {
      _filter.follower_id = uid
  } else {
      _filter.user_id = uid
  }
  return app.Model.find(_filter).countDocuments()
}
module.exports = {
  add,
  query, 
  getCount
};
