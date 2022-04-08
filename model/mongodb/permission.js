var mongoose = require('./db');
var Schema = mongoose.Schema;
const dayjs = require('dayjs')

// console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'))
var schema = new Schema({
    resource_id:{ type: String },//
    name: { type: String },
    comment:{type:String},
    operation:{ type: String,default:0 },//二进制 1111 -》 十进制 15
    create_at: { type: String, default:()=> dayjs().format('YYYY-MM-DD HH:mm:ss') }
},{versionKey:false});
module.exports=mongoose.model('permission', schema);
