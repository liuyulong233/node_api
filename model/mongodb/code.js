var mongoose = require('./db');
var Schema = mongoose.Schema;
const dayjs = require('dayjs')
// console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'))
var schema = new Schema({
    mobile:{type:String},//	手机号，和邮箱二选一
    email:{type:String},//	邮箱，和手机号二选一
    code:{type:String},//	验证码
    type:{type:String},//		验证类型：login登录、register注册、bind绑定手机或邮箱、unbind解绑手机或邮箱
    status:{type:Number,default:0},//		验证状态：0 未验证 1 已验证 2 已作废 4万能验证码
    ip:{type:String},//	请求时 IP 地址
    expired_at:{ type: Number, default:()=> dayjs().add(5, 'm').valueOf() },//	验证码过期时间
    create_at: { type: String, default:()=> dayjs().format('YYYY-MM-DD HH:mm:ss') }
},{versionKey:false});
module.exports=mongoose.model('code', schema);;
