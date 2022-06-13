var mongoose = require('./db');
var Schema = mongoose.Schema;
const dayjs = require('dayjs')
// console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'))
var schema = new Schema({
    uid:{ type: Number },//
    title:{ type: String },//
    cover:{ type: String },//
    desc:{ type: String },//
    // count:{ type: Number },
    category:{type: String},
    status:{ type: Number },//是否有效 0 无效 1
    is_public:{ type: Number }, 
    create_at: { type: String, default:()=> dayjs().format('YYYY-MM-DD HH:mm:ss') }
},{versionKey:false});
module.exports=mongoose.model('topic', schema);;