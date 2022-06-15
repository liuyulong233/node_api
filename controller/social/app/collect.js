const assert = require("http-assert");
const { collect: Model, dynamic, article } = require("@m/mongodb/index.js");
const { appSchema } = require("@j/collect.js");

//用户添加/取消收藏
const add = async (ctx) => {
  ctx.request.body.uid = ctx.state.uid;
  //校验参数
  let { value, error } = appSchema.add.validate(ctx.request.body);
  assert(!error, 405, error);
  let { uid, topic_id, type } = value;
  //查询是否收藏记录
  let data = await Model.findOne({ uid, topic_id });
  //没有，新增记录
  if (!data) {
    //保存数据
    try {
      let data = await Model.create(value);
      if (type == 1) {
        dynamic.findByIdAndUpdate(data.topic_id, { $inc: { collect: 1 } });
      }
      if (type == 2) {
        article.findByIdAndUpdate(data.topic_id, { $inc: { collect: 1 } });
      }
      ctx.body = {
        code: 200,
        data: {
          isCollect: true,
        },
        message: "收藏成功",
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
      let obj = Model.findByIdAndUpdate(data._id, {
        status: data.status == 0 ? 1 : 0,
      });
      let num = data.status == 0 ? 1 : -1;
      if (type == 1) {
        dynamic.findByIdAndUpdate(data.topic_id, { $inc: { collect: num } });
      }
      if (type == 2) {
        article.findByIdAndUpdate(data.topic_id, { $inc: { collect: num } });
      }
      ctx.body = {
        code: 200,
        data: {
          isCollect: data.status == 0,
        },
        message: data.status == 0 ? "收藏成功" : "取消收藏",
      };
    } catch (error) {
      ctx.body = {
        code: 500,
        message: "操作失败" + error,
      };
    }
  }
};

//查询个人收藏列表
const query = async (ctx) => {
  ctx.query.uid = ctx.state.uid;
  let { value, error } = appSchema.page.validate(ctx.query);
  assert(!error, 405, error);

  let { page, page_size, uid, type } = value;
  let offset = (page - 1) * page_size;
  let _filter = {
    type,
    uid,
    status: 1,
  };
  for (let key in _filter) {
    if (_filter[key] == null || _filter[key] === "") {
      delete _filter[key];
    }
  }
  let tableMap = { 1: "dynamics", 2: "articles" };
  try {
    let data = await Model.aggregate([
      {
        $match: {
          ..._filter,
        },
      },
      {
        $lookup: {
          from: tableMap[type],
          localField: "topic_id",
          foreignField: "_id",
          as: "topic",
        },
      },
      { $unwind: "$topic" },
      // {
      //   $lookup: {
      //     from: "articles",
      //     localField: "topic_id",
      //     foreignField: "_id",
      //     as: "article",
      //   },
      // },
      // {
      //   $lookup: {
      //     from: "dynamics",
      //     localField: "topic_id",
      //     foreignField: "_id",
      //     as: "dynamic",
      //   },
      // },
      // { $unwind: "$dynamic" },
      // { $unwind: "$article" },
     
    ])
      .skip(offset)
      .limit(page_size);
    const count = await Model.find(_filter).countDocuments();
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
//获取收藏数量

module.exports = {
  add,
  query,
};
