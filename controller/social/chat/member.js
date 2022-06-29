const assert = require("http-assert");
const filename = __filename.slice(__dirname.length + 1, -3);
const mongoose = require("@m/mongodb/db.js");
const { appSchema } = require("@j/" + filename);
const Base = require("../baseApiFuc");
const app = new Base(filename);
//新增群成员
const _add = async (obj) => {
  //校验参数
  let { value, error } = appSchema.add.validate(obj);
  // assert(!error, 405, error);
  //保存信息
  await app.Model.create(value);
};
//查询 当前群的群成员
const query = async (ctx) => {
  let { value, error } = appSchema.page.validate(ctx.query);
  assert(!error, 405, error);
  let { page, page_size, group_id } = value;

  let _filter = {
    status: 1,
    // group_id,
    group_id: mongoose.Types.ObjectId(group_id),
  };
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
          status: 1,
          group_id: 1,
          nickname: 1,
          uid: 1,
          user: {
            nickname: 1,
            uid: 1,
            avatar: 1,
          },
        },
      },
      { $unwind: "$user" },
    ]);
    ctx.body = {
      code: 200,
      data,

      message: "ok",
    };
  } catch (error) {
    ctx.body = {
      code: 500,
      message: filename + " query::" + error,
    };
  }
};
//查询加入的群 列表
const queryJoin = async (ctx) => {
  let _filter = {
    status: 1,
    uid: ctx.state.uid,
  };
  try {
    let data = await app.Model.aggregate([
      {
        $match: {
          ..._filter,
        },
      },
      {
        $lookup: {
          from: "groups",
          localField: "group_id",
          foreignField: "_id",
          as: "group",
        },
      },

      { $unwind: "$group" },
      {
        $project: {
          uid: 1,
          group_id: 1,
          group: {
            nickname: "$group.name",
            uid: 1,
            avatar: "$group.cover",
          },
        },
      },
    ]);
    ctx.body = {
      code: 200,
      data,
      message: "ok",
    };
  } catch (error) {
    ctx.body = {
      code: 500,
      message: filename + " query join::" + error,
    };
  }
};
//修改群员在群昵称接口
const edit = async (ctx) => {
  ctx.request.body.uid = ctx.state.uid;
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
async function detail(ctx) {
  assert(ctx.query.group_id, 422, "group_id参数缺失");
  const obj = await app._detail({
    group_id: ctx.query.group_id,
    uid: ctx.state.uid,
  });
  ctx.body = obj;
}
module.exports = {
  _add,
  edit,
  detail,
  query,
  queryJoin,
};
