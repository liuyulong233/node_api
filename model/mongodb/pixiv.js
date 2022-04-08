var mongoose = require('./db');
var Schema = mongoose.Schema;
const dayjs = require('dayjs')
var schema = new Schema({
    id:{type:String},
    uid:{type:Number},
    type:{type:Number},
    num:{type:Number,default:1},
    create_at: { type: String, default: ()=>dayjs().format('YYYY-MM-DD HH:mm:ss') }
},{versionKey:false});
module.exports=mongoose.model('pixiv', schema);;