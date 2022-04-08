var mongoose = require('./db');
var Schema = mongoose.Schema;
const dayjs = require('dayjs')
var schema = new Schema({
    type:{type:String},//消息类型 TXET
    content:{type:String},//消息内容
    timestamp:{type:Number},
    group_id:{type:Schema.Types.ObjectId},//群ID
    uid:{type:Number},//发送者uid
    status:{type:Number},
    create_at: { type: String, default:()=>dayjs().format('YYYY-MM-DD HH:mm:ss') }
},{versionKey:false});
module.exports=mongoose.model('groupMessage', schema);;