var mongoose = require('./db');
var Schema = mongoose.Schema;
const dayjs = require('dayjs')
// console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'))
var schema = new Schema({
    uid:{ type: Number },//
    tag:[{ type: String }],//学习 生活 日常
    content:{ type: String },//内容
    like:{ type: Number },//点赞数量
    comment:{ type: Number },//评论数量
    address:{ type: String },//地址
    album:[{ type: String }],//图片
    is_public:{ type: Number },//是否公开 1 公开 0 私密 
    is_delete:{ type: Number },//是否删除 对于uid用户
    status:{ type: Number },//是否有效 0 无效 1 
    create_at: { type: String, default:()=> dayjs().format('YYYY-MM-DD HH:mm:ss') }
},{versionKey:false});
module.exports=mongoose.model('dynamic', schema);;