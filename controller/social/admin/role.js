//对于没有归属者的数据（分类，菜单等）管理端页面有新增按钮
// require("module-alias/register");
const assert = require("http-assert");
const filename = __filename.slice(__dirname.length + 1, -3);
const { adminSchema } = require("@j/" + filename);
const { permission: permissionModel } = require("@m/mongodb/index.js");
const Base = require("../baseApiFuc");
const admin = new Base(filename);

async function add(ctx) {
  let { value, error } = adminSchema.add.validate(ctx.request.body);
  assert(!error, 405, error);
  const obj = await admin._create(value);
  ctx.body = obj;
}

async function list(ctx) {
  let { value, error } = adminSchema.page.validate(ctx.query);
  assert(!error, 405, error);
  let { page, page_size } = value;

  let _filter = {};
  for (let key in _filter) {
    if (_filter[key] == null || _filter[key] === "") {
      delete _filter[key];
    }
  }

  const obj = await admin._list(_filter, page, page_size,'-permission');
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
async function getPermissionByRole(role) {
  if (role == "superAdmin") {
    let obj = {
      permission: {},
      name: "超级管理员",
      role_id: "superAdmin",
      comment: "超级管理员权限最高者",
    };
    let permission = await permissionModel.find({});
    for (let i of permission) {
      if (!obj["permission"].hasOwnProperty(i.resource_id)) {
        obj["permission"][i.resource_id] = [];
      }
      obj["permission"][i.resource_id].push(i.operation);
    }

    return obj;
  }
  let res = await admin.Model.aggregate([
    {
      $lookup: {
        from: "permissions",
        localField: "permission",
        foreignField: "_id",
        as: "permission",
      },
    },
    // { $project: {  } },
    {
      $match: {
        role_id: role,
      },
    },
  ]);
  let roleInfo = res[0];
  let obj = {};

  if (roleInfo && roleInfo.permission) {
    for (let i of roleInfo.permission) {
      if (!obj.hasOwnProperty(i.resource_id)) {
        obj[i.resource_id] = [];
      }
      obj[i.resource_id].push(i.operation);
    }
    roleInfo.permission = obj;
    // console.log(roleInfo);
    return roleInfo;
  }
  return obj;
}
let o = {
  add,
  list,
  edit,
  detail,
  remove,
  getPermissionByRole
};

module.exports = o;
// getPermissionByRole("superAdmin");
