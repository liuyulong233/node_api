//对于没有归属者的数据（分类，菜单等）管理端页面有新增按钮
// require("module-alias/register");
const assert = require("http-assert");
const filename = __filename.slice(__dirname.length + 1, -3);
const { adminSchema } = require("@j/" + filename);
const { getPermissionByRole } = require("./role.js");
const Base = require("../baseApiFuc");
const admin = new Base(filename);

async function add(ctx) {
  let _id = await admin.Model.findOne({ menu_id: ctx.request.body.menu_id });
  assert(!_id, 422, "该菜单唯一标识已存在");

  let { value, error } = adminSchema.add.validate(ctx.request.body);
  assert(!error, 405, error);
  const obj = await admin._create(value);
  ctx.body = obj;
}

async function list(ctx) {
  let { value, error } = adminSchema.page.validate(ctx.query);
  assert(!error, 405, error);
  let { page, page_size, status, pid, isLeaf } = value;

  let _filter = {
    status,
    pid,
    isLeaf,
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
//获取权限菜单
async function getRightMenuList(ctx) {
  // console.log(1, req.user);
  // let permission = req.user.permission;
  // if (!permission) {
  //   console.log(2, permission);

  //   permission = obj.permission || {};
  // }
  let roleAndpermission = await getPermissionByRole(ctx.state.user.role);
  let permission = roleAndpermission.permission;
  let menuList = await admin.Model.find();
  let temp = Object.keys(permission);
  // console.log("getMenuList-2", temp, permission);
  menuList = menuList.filter((item) => {
    return temp.includes(item.menu_id);
  });
  ctx.body = {
    code: 200,
    data: menuList,
    message: "ok",
  };
// console.log(menuList)
}
let o = {
  add,
  list,
  edit,
  detail,
  remove,
  getRightMenuList,
};

module.exports = o;
// getRightMenuList({state:{user:{role:'superAdmin'}}})