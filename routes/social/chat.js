const Router = require("koa-router");
let router = new Router();
const conversationController = require('@c/social/chat/conversation.js')
const groupController = require('@c/social/chat/group.js')
const memberController = require('@c/social/chat/member.js')
// const joinController = require('@c/social/chat/joinGroup.js')
// const groupmsgController = require('@c/social/chat/groupMessage.js')
// const singlemsgController = require('@c/social/chat/single_message.js')

// 建群接口
router.post('/group/add', groupController.add);
//修改群信息接口 
router.post('/group/edit', groupController.edit);
//查询群信息接口
router.get('/group/detail', groupController.detail);
//查询群列表接口
router.get('/group/list', groupController.query);
//查询加入群列表接口
router.get('/joingroup/list', memberController.queryJoin);
//查询最新会话列表
router.get('/conversation/list', conversationController.query);
//删除会话
router.get('/conversation/remove', conversationController.remove);
//查询群成员接口
router.get('/member/list', memberController.query);
//修改群昵称接口
router.post('/member/edit', memberController.edit);
router.get('/member/detail', memberController.detail);
// //同意/拒绝加群申请接口
// router.post('/group/join', joinController.edit);
// //加群通知列表
// router.get('/group/join/list', joinController.list);
// //群历史消息列表
// router.get('/groupMessage/list', groupmsgController.query);
// router.get('/singleMessage/list', singlemsgController.query);


module.exports= router