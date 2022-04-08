var mongoose = require('./db');
var Schema = mongoose.Schema;
const dayjs = require('dayjs')
// console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'))
var schema = new Schema({
   
    user_id:{ type: Number },//关注用户id
    follower_id:{ type: Number }, //被关注者用户ID
	status:{type:Number},//关注状态 0 失效 1 启用
    create_at: { type: String, default:()=> dayjs().format('YYYY-MM-DD HH:mm:ss') }
},{versionKey:false});
module.exports=mongoose.model('follow', schema);;