var mongoose = require('./db');
var Schema = mongoose.Schema;
const dayjs = require('dayjs')
// console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'))
var schema = new Schema({
    name:{type:String},//群名称
    uid:{type:Number},//群主id
    status:{type:Number},
    cover:{type:String},//群图片
    intro:{type:String},//群简介
    create_at: { type: String, default:()=> dayjs().format('YYYY-MM-DD HH:mm:ss') }
},{versionKey:false});
module.exports=mongoose.model('group', schema);;