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
operation: 'CHECK' 对该模块有审核权限-- 页面删除按钮--删除功能 默认

operation: 'R_LIMIT' 只能查看自己的
operation: 'U_LIMIT' 
operation: 'D_LIMIT'
operation: 'C_LIMIT' 
operation: 'CHECK_LIMIT'   不能审核本人
operation:"LIMIT_R_C_U"
collect："C,C_LIMIT,R_LIMIT,CHECK,D_LIMIT"


{
        "_id" : ObjectId("6203c1b0067a221820e91c5e"),
    "operation" : "R",
    "name" : "系统管理查看",
    "resource_id" : "system",
    "create_at" : "2022-02-09 21:29:20"
}
{
        "_id" : ObjectId("6203c1b0067a221820e91c5e"),
    "operation" : "R_LIMIT",
    "name" : "系统管理查看-LIMIT",
    "resource_id" : "system",
    "create_at" : "2022-02-09 21:29:20"
}
update({'operation':1},{$set:{'operation':'R'}},{multi:true})
update({"name":{ $regex:/查看/ }},{$set:{'operation':'R'}},{multi:true})
update({},{$unset:{right:1}},{multi:true})
remove({'operation':32})
*/ 
