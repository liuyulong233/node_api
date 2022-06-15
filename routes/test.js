const Router = require("koa-router");
const assert = require("http-assert");
let router = new Router();
router.get("/test", async (ctx, next) => {
  assert(false, 400, "没有登录");
  // throw new Error('没有登录')
});
module.exports = router;
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
updateMany( {}, {$rename : { right:'operation' } } ) 修改集合字段信息
update({'operation':1},{$set:{'operation':'R'}},{multi:true}) 修改集合字段内容
update({"name":{ $regex:/查看/ }},{$set:{'operation':'R'}},{multi:true})
update({},{$unset:{right:1}},{multi:true}) //删除集合字段内容
remove({'operation':32})
*/
arr = [
  {
    name: "参数配置",
    type: "user",
    uid: 100001,
    platform: "app",
    default_avatar: "https://www.thiswaifudoesnotexist.net/example-60248.jpg",
    is_closeChat: false,
    is_closeComment: false,
    create_at: "2022-06-11 21:23:36",
  },
  {
    name: "系统参数配置",
    type: "system",
    platform: "mp-weixin",
    default_avatar: "https://www.thiswaifudoesnotexist.net/example-60248.jpg",
    is_closeChat: false,
    is_closeComment: false,
    create_at: "2022-06-11 21:24:19",
  },
  {
    name: "系统参数配置",
    type: "system",
    platform: "app",
    default_avatar: "https://www.thiswaifudoesnotexist.net/example-60248.jpg",
    is_closeChat: false,
    is_closeComment: false,
    create_at: "2022-06-11 21:28:12",
  },
  {
    name: "系统参数配置",
    type: "system",
    platform: "web",
    default_avatar: "https://www.thiswaifudoesnotexist.net/example-60248.jpg",
    is_closeChat: false,
    is_closeComment: false,
    create_at: "2022-06-11 21:44:38",
  },
  {
    name: "参数配置",
    type: "user",
    uid: 100001,
    platform: "mp-weixin",
    default_avatar: "https://www.thiswaifudoesnotexist.net/example-60248.jpg",
    is_closeChat: false,
    is_closeComment: false,
    create_at: "2022-06-11 21:45:59",
  },
];
a=[
    {
        "appid" : "__UNI__B51A3ED",
        "name" : "应用名称",
        "title" : "更新标题2",
        "content" : "1.更新内容\n2.bug\n",
        "platform" : "Android",
        "type" : "native_app",
        "version" : "1.1.0",
        "url" : "http://192.168.0.107:3000/apk/android_debugv1.1.0.apk",
        "status" : 1,
        "is_silently" : false,
        "is_mandatory" : false,
        "create_at" : "2022-06-06 16:50:37"
    },
    {
        "appid" : "__UNI__B51A3ED",
        "name" : "应用名称",
        "title" : "版本1.2.0",
        "content" : "1.接口使用域名和https\n2.websocket使用wss\n",
        "platform" : "Android",
        "type" : "native_app",
        "version" : "1.2.0",
        "url" : "http://192.168.0.107:3000/apk/androidv1.2.0.apk",
        "status" : 1,
        "is_silently" : false,
        "is_mandatory" : true,
        "create_at" : "2022-06-12 16:50:37"
    }
]
