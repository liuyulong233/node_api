const assert = require("http-assert");
const filename = __filename.slice(__dirname.length + 1, -3);
const mongoose = require("@m/mongodb/db.js");
const { appSchema } = require("@j/" + filename);
const Base = require("../baseApiFuc");
const app = new Base(filename);
//新增
const _add = async (obj) => {
  //校验参数
  let { value, error } = appSchema.add.validate(obj);
  // assert(!error, 405, error);
  //保存信息
  await app.Model.create(value);
};
const query = async (ctx) => {
  // let { value, error } = appSchema.page.validate(ctx.query);
  // assert(!error, 405, error);
  // let { page, page_size, group_id } = value;
  try {
    let data = await app.Model.aggregate([
      //先筛选
      {
        $match: {
          group_uid: ctx.state.uid,
          confirm: null,
        },
      },
      //在关联
      {
        $lookup: {
          from: "users",
          localField: "uid",
          foreignField: "uid",
          as: "user",
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
      {
        $project: {
          group: {
            name: 1, //群名称
            uid: 1, //群主id
            cover: 1, //群图片
          },
          // status: 1,
          group_id: 1,
          // nickname: 1,
          uid: 1,
          user: {
            nickname: 1,
            uid: 1,
            avatar: 1,
          },
        },
      },
      { $unwind: "$group" },
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
const _edit = async (obj, value) => {
  return app._edit(obj, value);
};
const edit = async (ctx) => {
  let { _id } = ctx.request.body;
  assert(_id, 420, "_id参数缺失");

  const obj = await app._editById(_id, { confirm: 0 });
  ctx.body = obj;
};
module.exports = {
  _add,
  _edit,
  edit,
  query,
};
