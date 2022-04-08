var mongoose = require('./db');
var Schema = mongoose.Schema;
const dayjs = require('dayjs')
// console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'))
var schema = new Schema({
    uid:{type:Number},//收藏者id,
    status:{type:Number},
    type:{type:Number},//1文章2动态3小应用
    topic_id:{type:Schema.Types.ObjectId},//文章动态小应用 id
    create_at: { type: String, default:()=> dayjs().format('YYYY-MM-DD HH:mm:ss') }
},{versionKey:false});
module.exports=mongoose.model('collect', schema);;