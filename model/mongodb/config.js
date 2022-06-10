var mongoose = require('./db');
var Schema = mongoose.Schema;
const dayjs = require('dayjs')
// console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'))
var schema = new Schema({
    name: { type: String },//系统名称
    platform: { type: String },//平台配置，app || mp-weixin
    default_avatar:{type:String},//系统默认头像
    is_closeChat:{type:Boolean,default:false},//是否关闭聊天功能
    is_closeComment:{type:Boolean,default:false},//是否关闭评论功能
    create_at: { type: String, default:()=> dayjs().format('YYYY-MM-DD HH:mm:ss') }
},{versionKey:false});
module.exports=mongoose.model('config', schema);