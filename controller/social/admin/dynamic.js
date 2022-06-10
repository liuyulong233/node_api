//对于没有归属者的数据（分类，菜单等）管理端页面有新增按钮

const assert = require("http-assert");
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
  ctx.body = obj;
}

async function list(ctx) {
  let { value, error } = adminSchema.page.validate(ctx.query);
  assert(!error, 405, error);
  let { page, page_size, status, uid } = value;

  let _filter = {
    uid: ctx.state.limit ? ctx.state.uid : uid,
    is_public: 1,
    status,
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
  const obj = await admin._detailByAuth({
    _id: ctx.query._id,
    uid: ctx.state.limit ? ctx.state.uid : ctx.query.uid,
  },ctx.state.limit);
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
