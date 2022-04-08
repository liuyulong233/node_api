var mongoose = require('./db');
var Schema = mongoose.Schema;
const dayjs = require('dayjs')
var schema = new Schema({
    group_id:{type:Schema.Types.ObjectId},//群ID
    group_uid:{type:Number},//群主uid
    uid:{type:Number},//加群者uid
    confirm:{type:Number},//是否同意 
    status:{type:Number},
    create_at: { type: String, default:()=> dayjs().format('YYYY-MM-DD HH:mm:ss') }
},{versionKey:false});
module.exports=mongoose.model('join_notice', schema);;