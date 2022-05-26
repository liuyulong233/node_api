var mongoose = require('./db.js');
var Schema = mongoose.Schema;
const dayjs = require('dayjs')
// console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'))
var schema = new Schema({
    title:{type:String},//标题	
    author:{ type: Number },//作者 uid
    content:{type:String},//内容	
    keywords:{type:String},//关键字
    description:{type:String},//描述
    category:{type:String},//分类
    check_status:{type:Number,default:0},//0 未发布 1 审核中 2成功 3失败
    status:{type:Number,default:1},//删除 0 1未删除
    is_public:{type:Number,default:1},//公开 0 私密 1公开
    cover:[{type:String}],//封面
    like:{type:Number,default:0},//点赞数量
    comment:{type:Number,default:0},//评论数量
    type:{type:Number},//1 markdown 2 富文本
    create_at: { type: String, default:()=> dayjs().format('YYYY-MM-DD HH:mm:ss') },
    update_at: { type: String, default:()=> dayjs().format('YYYY-MM-DD HH:mm:ss') },
},{versionKey:false});
module.exports=mongoose.model('article', schema);;