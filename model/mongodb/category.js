var mongoose = require('./db');
var Schema = mongoose.Schema;
const dayjs = require('dayjs')
// console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'))
var schema = new Schema({
    pid:{type:Schema.Types.ObjectId},//上级分类
    cid:{type:String},//唯一标识	
    name:{type:String},//名称
    status:{type:Number},//禁用
    describe:{type:String},//描述
    create_at: { type: String, default:()=> dayjs().format('YYYY-MM-DD HH:mm:ss') }
},{versionKey:false});
module.exports=mongoose.model('category', schema);;