const Router = require("koa-router");
const assert = require("http-assert");
let router = new Router();
router.get("/test", async (ctx, next) => {
    assert(false,400,'没有登录')
// throw new Error('没有登录')
});
module.exports=router
/* 
operation: 'C' 对该模块有增加权限-- 页面创建按钮--创建功能
operation: 'R' 对该模块有查看权限-- 页面查看按钮--查看功能
operation: 'U' 对该模块有编辑权限-- 页面查看按钮--编辑功能
operation: 'D' 对该模块有删除权限-- 页面删除按钮--删除功能
operation: 'CHECK' 对该模块有删除权限-- 页面删除按钮--删除功能 默认

operation: 'R_LIMIT' 对该模块有查看权限-- 页面查看按钮--限制数据本人查看功能
operation: 'U_LIMIT'
operation: 'D_LIMIT'
operation: 'C_LIMIT'
operation: 'CHECK_LIMIT'   不能审核本人
*/ 