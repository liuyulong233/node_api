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
  value.accounts = value.accounts.sort((a, b) => a - b).join(',');
  //保存信息
  await app.Model.create(value);
};
const query = async (ctx) => {
  let { value, error } = appSchema.page.validate(ctx.query);
  assert(!error, 405, error);
  let { page, page_size, accounts } = value;
  let _filter = {
    accounts: accounts.split(',').sort((a, b) => a - b).join(','),
  };
  let offset = (page - 1) * page_size;
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
          localField: "fromAccount",
          foreignField: "uid",
          as: "fromAccount",
        },
      },

      {
        $project: {
          type: 1, //消息类型 TXET
          timestamp: 1,
          create_at: 1,
          toAccount: 1,
          message: "$content",
          fromAccount: {
            nickname: 1,
            uid: 1,
            avatar: 1,
          },
        },
      },
      { $unwind: "$fromAccount" },
    ])
      .skip(offset)
      .limit(page_size)
      .sort("-create_at");
    const count = await app.Model.find(_filter).countDocuments();
    //data是倒序查询的，
    data.reverse();
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
      message: filename + " query::" + error,
    };
  }
};

module.exports = {
  _add,

  query,
};
