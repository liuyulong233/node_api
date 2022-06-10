const assert = require("http-assert");
const filename=__filename.slice(__dirname.length + 1, -3)
const { adminSchema } = require("@j/"+filename);
const Base = require("../baseApiFuc");
const admin = new Base(filename);

//分类
async function add(ctx) {
  //校验参数
  let { value, error } = adminSchema.add.validate(ctx.request.body);
  assert(!error, 405, error);
  const obj = await admin._create(value);
  ctx.body = obj;
}

//查询分类列表
async function list(ctx) {
  let { value, error } = adminSchema.page.validate(ctx.query);
  assert(!error, 405, error);
  let { page, page_size, status } = value;

  let _filter = {
    status,
  };
  for (let key in _filter) {
    if (_filter[key] == null || _filter[key] === "") {
      delete _filter[key];
    }
  }
  // console.log('this',this)

  const obj = await admin._list(_filter, page, page_size);
  // console.log("this", obj);
  ctx.body = obj;
}
async function edit(ctx) {
  let { value, error } = adminSchema.edit.validate(ctx.request.body);
  assert(!error, 405, error);
  // console.log(ctx.request.body,value)
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
  const obj = await admin._edit(ctx.query, { status: 0 }, false);
  ctx.body = obj;
}

module.exports = {
  add,
  list,
  edit,
  detail,
  remove,
};
