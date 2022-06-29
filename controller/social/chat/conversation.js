const assert = require("http-assert");
const filename = __filename.slice(__dirname.length + 1, -3);
const { groupMessage, single_message } = require("@m/mongodb/index.js");
const { appSchema } = require("@j/" + filename);
const Base = require("../baseApiFuc");
const app = new Base(filename);

//新增群聊会话
const _add = async (obj) => {
  try {
    let { value, error } = appSchema.add.validate(obj);
    assert(!error, 405, error);
    app._create(value);
  } catch (error) {
      console.log(filename,'_add',error)
  }
};
//新增单聊会话
const _addSingle = async (uid1, uid2) => {
  let accounts = [uid1, uid2].sort((a, b) => a - b);
  let data = await Model.find({
    accounts,
  });
  console.log("_create_single", data);
  if (data.length == 1) {
    _add({
      uid: data[0].touid,
      touid: data[0].uid,
      accounts,
      type: "SINGLE",
    });
  }
  //没有双方的会话
  if (data.length == 0) {
    app.Model.insertMany([
      {
        uid: uid1,
        touid: uid2,
        accounts,
        type: "SINGLE",
      },
      {
        uid: uid2,
        touid: uid1,
        accounts,
        type: "SINGLE",
      },
    ]);
  }
};
//更新聊天会话最新消息
const _update = async (ctx) => {};
//更新群会话最新消息
const _editGroup = async (group_id, last_id) => {
  if (!last_id) {
    let data = await groupMessage.findOne({ group_id }).sort("-timestamp");
    if (!data)
      data = await groupMessage.findOne({ uid: null }).sort("-timestamp");
    last_id = data._id;
  }

  return app.Model.updateMany({ group_id }, { last_id });
};
//更新单聊会话最新消息
const _editSingle = async (uid2, uid1, last_id) => {
  let accounts = [uid1, uid2].sort((a, b) => a - b);

  if (!last_id) {
    let data = await single_message
      .findOne({ accounts })
      .limit(1)
      .sort("-timestamp");
    last_id = data._id;
  }
  console.log("last_id", last_id, accounts);
  return app.Model.updateMany({ accounts }, { last_id });
};
//会话删除
const remove = async (ctx) => {
  assert(ctx.query._id, 422, "_id参数缺失");
  const obj = await app._remove({
    uid: ctx.this.state.uid,
    _id: ctx.query._id,
  });
  ctx.body = obj;
};
const query = async (ctx) => {
  let list1 = await singleList(ctx.state.uid);
  let list2 = await groupList(ctx.state.uid);
  ctx.body = {
    code: 200,
    data: [...list1, ...list2],
    message: "ok",
  };
};
//群聊会话列表接口
const groupList = async (uid) => {
  return app.Model.aggregate([
    {
      $match: {
        uid: uid,
        type: "GROUP",
      },
    },
    {
      $lookup: {
        from: "groups",
        localField: "group_id",
        foreignField: "_id",
        as: "account",
      },
    },
    {
      $lookup: {
        from: "groupmessages",
        localField: "last_id",
        foreignField: "_id",
        as: "lastMessage",
      },
    },
    { $unwind: "$account" },
    { $unwind: "$lastMessage" },
    {
      $project: {
        uid: 1, //会话所有者
        type: 1, //GROUP SINGLE 会话类型
        last_id: 1,
        account: {
          nickname: "$account.name", // { $unwind: "$account" }在前 $account.name 不是数组;在后是数组
          uid: 1,
          avatar: "$account.cover",
        },
        group_id: 1,
        lastMessage: {
          type: 1,
          content: 1,
          timestamp: 1,
          create_at: 1,
        },
      },
    },
  ]);
};
//单聊会话列表
const singleList = async (uid) => {
  return app.Model.aggregate([
    {
      $match: {
        uid: uid,
        type: "SINGLE",
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "touid",
        foreignField: "uid",
        as: "account",
      },
    },
    {
      $lookup: {
        from: "single_messages",
        localField: "last_id",
        foreignField: "_id",
        as: "lastMessage",
      },
    },
    { $unwind: "$account" },
    { $unwind: "$lastMessage" },
    {
      $project: {
        uid: 1, //会话所有者
        touid: 1,
        type: 1, //GROUP SINGLE 会话类型
        last_id: 1,
        account: {
          nickname: 1,
          uid: 1,
          avatar: 1,
        },
        accounts: 1,
        lastMessage: {
          type: 1,
          content: 1,
          timestamp: 1,
          create_at: 1,
        },
      },
    },
  ]);
};
module.exports = {
  query,
  remove,
  _add,
  _addSingle,
  _editGroup,
  _editSingle,
};
