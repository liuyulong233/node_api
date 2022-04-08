var mongoose = require('./db');
var Schema = mongoose.Schema;
const dayjs = require('dayjs')
// console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'))
var schema = new Schema({
    report:{type:Schema.Types.ObjectId},//被举报评论文章动态小应用 id
    report_uid:{type:Number},//被举报者id
    type:{type:Number},//1评论2文章3动态4作品
    uid:{type:Number},//举报者
    reason:{type:String},//举报原因
    photo:[{type:String}],//举报图片
    create_at: { type: String, default: ()=>dayjs().format('YYYY-MM-DD HH:mm:ss') }
},{versionKey:false});
module.exports=mongoose.model('report', schema);;