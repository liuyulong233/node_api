const Router = require("koa-router");
let router = new Router();
// const controller= require("@c/social/app/index.js")
const userController= require('@c/social/app/user.js')
const followController = require('@c/social/app/follow')
const likeController = require('@c/social/app/like')
const dynamicController= require('@c/social/app/dynamic')
const commentController= require('@c/social/app/comment')
const articleController= require('@c/social/app/article')
const reportController= require('@c/social/app/report')
const collectController= require('@c/social/app/collect')
const upgradeController= require('@c/social/app/upgrade')
const topicController= require('@c/social/app/topic')

//我的 mine
//获取我的 动态 文章 关注 粉丝 数量数据
router.get('/mine', getMine);
// //获取个人主页 动态列表数据
router.get('/mine/dynamic', dynamicController.query);
// //获取个人主页 文章列表数据
router.get('/mine/article', articleController.query);
//关注/粉丝列表数据
router.get('/mine/follow', followController.query);
// //关注/取关
router.post('/user/follow', followController.add);
//获取用户个人资料
router.get('/user/profile', userController.detail);
//修改个人资料
router.post('/user/edit', userController.edit);   
//获取动态详情数据
router.get('/dynamic/detail', dynamicController.detail);
//获取文章详情数据
router.get('/article/detail', articleController.detail);
//删除动态
router.get('/dynamic/remove', dynamicController.remove);
//删除文章
router.get('/article/remove', articleController.remove);
//发布动态
router.post('/dynamic/add', dynamicController.add);
//发布文章
router.post('/article/add', articleController.add);
//修改文章
router.post('/article/edit', articleController.edit);
// //修改动态
router.post('/dynamic/edit', dynamicController.edit);
//获取我的收藏列表
router.get('/collect/list', collectController.query);
router.get('/upgrade', upgradeController.queryUpgrade);
//修改密码 邮箱 手机
router.post('/bind/:type', userController.bind);
//home 首页
//获取首页 动态列表数据
router.get('/dynamic', dynamicController.query);
//获取首页 文章列表数据
router.get('/article', articleController.query);
//获取评论列表
router.get('/comment', commentController.query);
//发布评论
router.post('/comment/add', commentController.add);
router.get('/comment/detail', commentController.detail);
//删除评论
router.get('/comment/remove', commentController.remove);
//置顶
router.post('/comment/top', commentController.toTop);
// //举报
router.post('/report', reportController.add);
//收藏/取消
router.post('/collect', collectController.add);
//点赞/取消
router.post('/like', likeController.add);
//创建话题
router.post('/topic/add', topicController.add);
//编辑话题
router.post('/topic/edit', topicController.edit);
//话题列表
router.get('/topics', topicController.query);
//话题详情
router.get('/topic/detail', topicController.detail);
//话题下的动态
router.get('/topic/dynamic', topicController.getDynamicByTopic);
//根据动态id找话题id
// router.get('/topic_id', topicController.findTopicByDynamic);
//搜索 
// router.post('/search', loginController.edit);
async function getMine(ctx) {
    try {
      let data = {};
      let uid = ctx.state.uid;
      data.dynamic = await dynamicController.getCount(uid);
      data.article = await articleController.getCount(uid);
      data.follow = await followController.getCount(uid, 1);
      data.fans = await followController.getCount(uid, 0);
      ctx.body = {
        code: 200,
        data,
        message: "ok",
      };
    } catch (err) {
      console.log(err);
      ctx.body = {
        code: 200,
        message: "err::"+err,
      };
    }
  }
module.exports= router