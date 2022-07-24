const assert = require("http-assert");
const {
  dynamic,
  article,
  like: likeModel,
  // follow: followModel,
  // collect: collectModel,
} = require("@m/mongodb/index.js");
const filename = __filename.slice(__dirname.length + 1, -3);
const mongoose =require("@m/mongodb/db.js");
const { appSchema } = require("@j/" + filename);
const xss = require("xss");
const Base = require("../baseApiFuc");
const app = new Base(filename);
//用户发布评论
const add = async (ctx) => {
  ctx.request.body.uid = ctx.state.uid;
  //校验参数
  let { value, error } = appSchema.add.validate(ctx.request.body);
  assert(!error, 405, error);
  value.content = xss(value.content);

  //保存数据
  try {
    await app.Model.create(value);
    //如果动态是话题
    // if (value.topic) {
    //   _save(data._id, value.topic);
    // }
    updateComments(value);
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

function getTopicCommentCount(topic_id) {
  return app.Model.find({
    topic_id,
    status: 1,
  }).countDocuments();
}
function getReplyCommentCount(topic_id, pid) {
  return app.Model.find({
    topic_id,
    pid,
    status: 1,
  }).countDocuments();
}
async function updateComments(value) {
  //更新动态评论数
  if (value.type == 1) {
    //评论数量
    let count = await getTopicCommentCount(value.topic_id);
    console.log('动态评论数',count,value.topic_id)
    dynamic.findByIdAndUpdate(value.topic_id, { comment: count },function(err,doc){
      console.log(err,doc)
    })
    
    if (value.pid) {
      let reply_count = await getReplyCommentCount(value.topic_id, value.pid);
      console.log('评论回复数',reply_count,value.pid)
      app.Model.findByIdAndUpdate(value.pid, { reply_count }).exec((err,doc)=>{
        console.log(err)
      })
    }
  }
  if (value.type == 2) {
    let count = await getTopicCommentCount(value.topic_id);
    article.findByIdAndUpdate(value.topic_id, { comment: count }).exec((err,doc)=>{
      console.log(err)
    })
    if (value.pid) {
      let reply_count = await getReplyCommentCount(value.topic_id, value.pid);
      app.Model.findByIdAndUpdate(value.pid, { reply_count }).exec((err,doc)=>{
        console.log(err)
      });
    }
  }
}
//查看评论列表
const query = async (ctx) => {
  let { value, error } = appSchema.page.validate(ctx.query);
  assert(!error, 405, error);

  let { page, page_size, topic_id } = value;

  let offset = (page - 1) * page_size;
  let _filter = {
    topic_id: mongoose.Types.ObjectId(topic_id),
    status: 1,
  };

  for (let key in _filter) {
    if (_filter[key] == null || _filter[key] === "") {
      delete _filter[key];
    }
  }
  try {
    let data = await app.Model.aggregate([
      {
          $match: {
            pid: null,
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
          uid: 1, //评论人uid
          topic_id: 1, // 动态或文章 id
          pid: 1, // 父级评论id
          reply_id: 1, //回复的评论的id
          content: 1, // 评论内容
          type: 1, //评论类型 1 动态 2文章 3评论
          status: 1, // 评论状态，评论被删除了  都是 逻辑删除，不会真实删除
          top: 1, // 评论置顶,置顶top为9999
          reply_count: 1, //记录该评论的回复数 只有一级评论才有
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
      .sort("-top -create_at")
      .skip(offset)
      .limit(page_size);

    const count = await app.Model.find(_filter).countDocuments();
    const likeCount = await likeModel
      .find({ topic_id, status: 1 })
      .countDocuments();
    ctx.body = {
      code: 200,
      data,
      likeCount,
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
//
// 删除评论
//主题发布者和评论者可删除评论
const remove = async (ctx) => {
  let { value, error } = appSchema.commonSchema.validate(ctx.query);
  assert(!error, 422, error);
  let tableMap = { 1: "dynamics", 2: "articles" };
  let data = await app.Model.aggregate([
    {
      $match: {
        _id: mongoose.Types.ObjectId(value._id),
      },
    },
    {
      $lookup: {
        from: tableMap[value.type],
        localField: "topic_id",
        foreignField: "_id",
        as: "topic",
      },
    },
    { $unwind: "$topic" },
  ]);
  assert(data.length != 0, 412, "无效的_id");
  data = data[0];
  // assert(data.topic.length == 0, 412, "无效的评论");
  // data.topic = data.topic[0];
  if (value.type == 2) {
    data.topic.uid = data.topic.author;
  }
  //评论者//主题发布者
  if (data.uid === ctx.state.uid || data.topic.uid === ctx.state.uid) {
    let obj = await app._editById(value._id, { status: 0 },false);
    ctx.body = obj;
  } else {
    ctx.body = {
      code: 500,
      data,
      message: "无权删除",
    };
  }
};
//评论详情  uid,pid关联查询
const detail = async (ctx) => {
  // assert(req.query.pid, 423, "pid参数缺失");
  assert(ctx.query.topic_id, 423, "topic_id参数缺失");
  //校验参数
  let obj = {
    status: 1,
    topic_id: mongoose.Types.ObjectId(ctx.query.topic_id),
    pid: mongoose.Types.ObjectId(ctx.query.pid),
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
      // {
      //   $lookup: {
      //     from: "comments",
      //     localField: "reply_id",
      //     foreignField: "_id",
      //     as: "reply",
      //   },
      // },
      {
        $project: {
          uid: 1, //评论人uid
          topic_id: 1, // 动态或文章 id
          create_at: 1,
          pid: 1, // 父级评论id
          reply_id: 1, //回复的评论的id
          content: 1, // 评论内容
          type: 1, //评论类型 1 动态 2文章 3评论
          status: 1, // 评论状态，评论被删除了  都是 逻辑删除，不会真实删除
          top: 1, // 评论置顶,置顶top为9999
          reply_count: 1, //记录该评论的回复数 只有一级评论才有
          user: {
            nickname: 1,
            uid: 1,
            avatar: 1,
          },
          // reply: {
          //   uid: 1,
          //   nickname: 1,
          //   content: 1,
          // },
        },
      },

      { $unwind: "$user" },
      // { $unwind: "$reply" },
    ]);
    //reply_id 连表查出uid content 但查不到nickname,必须再次连表查询 uid
    // 因为要得到被回复人的nickname uid 
    let map = {};
    data = data.map((item) => {
      map[item._id] = item;
      return item;
    });
    data = data.map((item) => {
      item.reply = map[item.reply_id];
      return item;
    });
    ctx.body = {
      code: 200,
      data,
      message: "ok",
    };
  } catch (error) {
    ctx.body = {
      code: 500,
      message: "查看评论详情失败::" + error,
    };
  }
};
//一级评论置顶 主题发布者
const toTop = async (ctx) => {
  let { value, error } = appSchema.commonSchema.validate(ctx.request.body);
  assert(!error, 422, error);
  let tableMap = { 1: "dynamics", 2: "articles" };
  try {
    let data = await app.Model.aggregate([
      {
        $lookup: {
          from: tableMap[value.type],
          localField: "topic_id",
          foreignField: "_id",
          as: "topic",
        },
      },
      {
        $match: {
          _id: mongoose.Types.ObjectId(value._id),
        },
      },
    ]);
    assert(data.length != 0, 412, "无效的_id");
    data = data[0];
    assert(data.topic.length != 0, 412, "无效的评论");
    data.topic = data.topic[0];
    if (value.type == 2) {
      data.topic.uid = data.topic.author;
    }
    // console.log('评论',data)
    if (data.topic.uid == ctx.state.uid) {
      await app._edit(
        { _id: value._id, pid: null },
        { top: 9999 }
      )
      ctx.body = {
        code: 200,
        message: "置顶成功",
      };
    } else {
      ctx.body = {
        code: 500,
        message: "无权置顶",
      };
    }
  } catch (error) {
    ctx.body = {
      code: 500,
      message: "失败::" + error,
    };
  }
};
module.exports = {
  remove,
  add,
  query,
  toTop,
  detail,
};
