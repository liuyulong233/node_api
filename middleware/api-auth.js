const jwt = require("jsonwebtoken");
const assert = require("http-assert");
require("module-alias/register");
const { getPermissionByRole } = require("@c/social/admin/role.js");
const base = "/api/admin";
let whiteList = ["/rightMenu", "/permissionByRole"];
whiteList = whiteList.map((item) => base + item);

let rightMsg = {
  add: "无权增加",
  edit: "无权修改",
  remove: "无权删除",
  list: "无权查看其它",
  detail: "无权查看详情",
};
let rightMap = {
  add: "C",
  edit: "U",
  remove: "D",
  list: "R",
  detail: "R",
  check: "CHECK",
};
//接口权限访问校验
async function checkApiAuth(ctx, next) {
  // console.log("url", ctx.url, ctx.path, whiteList);

  // 如果是登陆页面和注册页面就不需要验证token了
  if (whiteList.includes(ctx.path)) {
    await next();
  } else {
    //知道接口访问的是那个模块，校验模块的那个权限
    // /api/admin/role/create role create
    // str = "/api/admin/role/create";
    let [, , , modlueName, right] = ctx.path.split("/");
    let roleAndpermission = await getPermissionByRole(ctx.state.user.role);
    let permissions = roleAndpermission.permission;
    let operation = rightMap[right];
    //[R,R_LIMIT] [[R_LIMIT] [R] 只要有R就无需在乎R_LIMIT
    // console.log("modlueName", modlueName, right, permissions, modlueName);
    if (!Array.isArray(permissions[modlueName])) {
      permissions[modlueName] = [];
    }
    //校验权限是否有限制
    if (permissions[modlueName].includes(operation + "_LIMIT")) {
      //校验通过
      ctx.state.limit = true; //标识不能横向越权访问数据
      if (permissions[modlueName].includes(operation)) {
        ctx.state.limit = false;
      }
      await next();
    } else {
      if (permissions[modlueName].includes(operation)) {
        await next();
      } else {
        assert(null, 423, rightMsg[right] || "无权访问该接口");
      }
    }

    // if (permissions[modlueName].includes(operation)) {
    //   //校验通过
    //   //校验权限是否有限制
    //   if (permissions[modlueName].includes(operation + "_LIMIT")) {
    //     ctx.state.all_auth = true;
    //   }
    //   await next();
    // } else {
    //   if (permissions[modlueName].includes(operation + "_LIMIT")) {
    //     ctx.state.all_auth = true;
    //     await next();
    //   } else {
    //     assert(null, 423, rightMsg[right] || "无权访问该接口");
    //   }
    // }
  }
}

module.exports = checkApiAuth;
