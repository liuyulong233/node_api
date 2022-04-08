var mongoose = require('./db');
var Schema = mongoose.Schema;
const dayjs = require('dayjs')
// console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'))
var schema = new Schema({
    group_id:{type:Schema.Types.ObjectId},//群ID
    nickname:{type:String},//群中昵称
    name:{type:String},//群备注
    uid:{type:Number},//群员id
    status:{type:Number},
    create_at: { type: String, default:()=> dayjs().format('YYYY-MM-DD HH:mm:ss') }
},{versionKey:false});
module.exports=mongoose.model('member', schema);;