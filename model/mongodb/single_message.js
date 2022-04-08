var mongoose = require('./db');
var Schema = mongoose.Schema;
const dayjs = require('dayjs')
var schema = new Schema({
    type:{type:String},//消息类型 TXET
    content:{type:String},//消息内容
    timestamp:{type:Number},
    fromAccount:{type:Number},
    toAccount:{type:Number},
    accounts: { type: Array },//单聊双方UID 从小到大存储
    status:{type:Number},
    create_at: { type: String, default:()=> dayjs().format('YYYY-MM-DD HH:mm:ss') }
},{versionKey:false});
//会有一默认数据{type:"TEXT",content:"暂无"}
module.exports=mongoose.model('single_message', schema);;