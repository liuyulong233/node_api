var mongoose = require('./db');
var Schema = mongoose.Schema;
const dayjs = require('dayjs')
// console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'))
var schema = new Schema({
    appid:{ type: String },//应用的AppID
    name: { type: String },//应用名称
    title:{ type: String },//更新标题
    content:{type:String},//更新内容
    platform:{type:String},//更新平台，Android || iOS
    type:{type:String},//安装包类型，native_app || wgt
    version:{type:String},//当前包版本号，必须大于当前线上发行版本号
    url:{type:String},//可下载安装包地址
    status:{type:Number,default:1},
    is_silently:{type:Boolean,default:false},//是否静默更新
    is_mandatory:{type:Boolean,default:false},//是否强制更新
    create_at: { type: String, default:()=> dayjs().format('YYYY-MM-DD HH:mm:ss') }
},{versionKey:false});
module.exports=mongoose.model('upgrade', schema);