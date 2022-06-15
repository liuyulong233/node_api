const assert = require("http-assert");
require("module-alias/register");
const { dynamic: dynamicModel } = require("@m/mongodb/index.js");
const filename = __filename.slice(__dirname.length + 1, -3);
const { appSchema } = require("@j/" + filename);
const mongoose = require("@m/mongodb/db.js");
const Base = require("../baseApiFuc");
const app = new Base(filename);
const Joi = require("joi");
const add = async (ctx) => {
  ctx.request.body.uid = ctx.state.uid;
  //校验参数
  let { value, error } = appSchema.add.validate(ctx.request.body);
  assert(!error, 405, error);

  //保存数据
  try {
    await app.Model.create(value);
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
const query = async (ctx) => {
  let { value, error } = appSchema.page.validate(ctx.query);
  assert(!error, 405, error);
  let { page, page_size, category } = value;

  let offset = (page - 1) * page_size;
  let _filter = {
    category,
    status: 1,
  };
  for (let key in _filter) {
    if (_filter[key] == null || _filter[key] === "") {
      delete _filter[key];
    }
  }
  try {
    let data = await app.Model.find(_filter)
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
const detail = async (ctx) => {
  assert(ctx.query._id, 405, "_id参数缺失");

  const obj = await app._detailById(ctx.query._id);
  ctx.body = obj;
};
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
const pageSchema = Joi.object({
  page: Joi.number().default(1).error(new Error("数字类型")),
  page_size: Joi.number().default(10).error(new Error("数字类型")),
  _id: Joi.string().required(),
}).unknown();
//聚合查询分页？？
const getDynamicByTopic = async (ctx) => {
  let { value, error } = pageSchema.validate(ctx.query);
  assert(!error, 405, error);
  let { page, page_size, _id } = value;
  let offset = (page - 1) * page_size;

  let _filter = {
    status: 1,
    topic: mongoose.Types.ObjectId(_id),
    is_public: 1,
  };
  try {
    let data = await dynamicModel
      .aggregate([
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
            topic: 1,
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
    const count = await dynamicModel.find(_filter).countDocuments();
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
      message: "失败::" + error,
    };
  }
};
module.exports = {
  add,
  query,
  detail,
  edit,
  getDynamicByTopic,
};
//查询不一致？？
async function test() {
  let _filter = {
    status: 1,
    topic:null ,
    is_public: 1,
  };
  const count = await dynamicModel.find(_filter).countDocuments();
  console.log(count)
}
test()
