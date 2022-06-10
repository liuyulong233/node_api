//对于没有归属者的数据（分类，菜单等）管理端页面有新增按钮

const assert = require("http-assert");
const { dynamic, article } = require("@m/mongodb/index.js");
const filename = __filename.slice(__dirname.length + 1, -3);
const { adminSchema } = require("@j/" + filename);
const Base = require("../baseApiFuc");
const admin = new Base(filename);

async function add(ctx) {
  let { value, error } = adminSchema.add.validate(ctx.request.body);
  assert(!error, 405, error);
  if (ctx.state.limit) {
    value.uid = ctx.state.uid;
  }
  const obj = await admin._create(value);
  updateComments(value);
  ctx.body = obj;
}
function getTopicCommentCount(topic_id) {
  return admin.Model.find({
    topic_id,
    status: 1,
  }).countDocuments();
}
function getReplyCommentCount(topic_id, pid) {
  return admin.Model.find({
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
    dynamic.findByIdAndUpdate(value.topic_id, { comment: count });
    if (value.pid) {
      let reply_count = await getReplyCommentCount(value.topic_id, value.pid);
      admin.Model.findByIdAndUpdate(value.topic_id, { reply_count });
    }
  }
  if (value.type == 2) {
    let count = await getTopicCommentCount(value.topic_id);
    article.findByIdAndUpdate(value.topic_id, { comment: count });
    if (value.pid) {
      let reply_count = await getReplyCommentCount(value.topic_id, value.pid);
      admin.Model.findByIdAndUpdate(value.topic_id, { reply_count });
    }
  }
}
async function list(ctx) {
  let { value, error } = adminSchema.page.validate(ctx.query);
  assert(!error, 405, error);
  let { page, page_size, uid, type, status, topic_id, pid, reply_id } = value;

  let _filter = {
    uid: ctx.state.limit ? ctx.state.uid : uid,
    type,
    status,
    topic_id,
    pid,
    reply_id,
  };
  for (let key in _filter) {
    if (_filter[key] == null || _filter[key] === "") {
      delete _filter[key];
    }
  }

  const obj = await admin._list(_filter, page, page_size);
  ctx.body = obj;
}
async function edit(ctx) {
  let { value, error } = adminSchema.edit.validate(ctx.request.body);
  assert(!error, 405, error);
  const obj = await admin._editByAuth(
    {
      _id: value._id,
      uid: ctx.state.limit ? ctx.state.uid : value.uid,
    },
    value,
    ctx.state.limit
  );

  ctx.body = obj;
}

async function detail(ctx) {
  assert(ctx.query._id, 422, "_id参数缺失");
  const obj = await admin._detailById(ctx.query._id);
  ctx.body = obj;
}
async function remove(ctx) {
  assert(ctx.query._id, 422, "_id参数缺失");
  const obj = await admin._editByAuth(
    {
      _id: ctx.query._id,
      uid: ctx.state.limit ? ctx.state.uid : ctx.query.uid,
    },
    { status: 0 },
    ctx.state.limit,
    false
  );

  ctx.body = obj;
}
let o = {
  add,
  list,
  edit,
  detail,
  remove,
};

module.exports = o;
