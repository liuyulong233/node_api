//对于没有归属者的数据（分类，菜单等）管理端页面有新增按钮

const assert = require("http-assert");
const filename = __filename.slice(__dirname.length + 1, -3);
const { adminSchema } = require("@j/" + filename);
const Base = require("../baseApiFuc");
const admin = new Base(filename);

let module = {};
module.add = add;
module.list = list;
module.edit = edit;
module.detail = detail;
module.remove = remove;

async function add(ctx) {
  let { value, error } = adminSchema.add.validate(ctx.request.body);
  assert(!error, 405, error);
  const obj = await admin._create(value);
  ctx.body = obj;
}

async function list(ctx) {
  let { value, error } = adminSchema.page.validate(ctx.query);
  assert(!error, 405, error);
  let { page, page_size, status, type,uid } = value;

  let _filter = {
    uid:ctx.state.limit?ctx.state.uid:uid,
    type,
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
  const obj = await admin._editById(value._id, value);
  ctx.body = obj;
}

async function detail(ctx) {
  assert(ctx.query._id, 422, "_id参数缺失");
  const obj = await admin._detailById(ctx.query._id);
  ctx.body = obj;
}
async function remove(ctx) {
  assert(ctx.query._id, 422, "_id参数缺失");
  await admin.Model.findByIdAndDelete(ctx.query._id);
  ctx.body = {
    code: 200,
    message: "删除成功",
  };
}
let o = {
  add,
  list,
  edit,
  detail,
  remove,
};

module.exports = o;
