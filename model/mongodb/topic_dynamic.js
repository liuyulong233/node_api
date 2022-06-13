var mongoose = require('./db');
var Schema = mongoose.Schema;
const dayjs = require('dayjs')
// console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'))
var schema = new Schema({
    dynamic_id:{ type:Schema.Types.ObjectId },//
    topic_id:{ type:Schema.Types.ObjectId },//
    status:{ type: Number,default:1 },//
    create_at: { type: String, default:()=> dayjs().format('YYYY-MM-DD HH:mm:ss') }
},{versionKey:false});
module.exports=mongoose.model('topic_dynamic', schema);;