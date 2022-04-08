var mongoose = require('./db');
var Schema = mongoose.Schema;
const dayjs = require('dayjs')
// console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'))
var schema = new Schema({
    uid:{type:Number}, //点赞人uid
    topic_id:{type:String},// 动态或文章 id
    type:{type:Number},
    status:{type:Number,default:1},
    create_at: { type: String, default:()=> dayjs().format('YYYY-MM-DD HH:mm:ss') }
},{versionKey:false});
module.exports=mongoose.model('like', schema);;