var mongoose = require('./db');
var Schema = mongoose.Schema;
const dayjs = require('dayjs')
// console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'))
var schema = new Schema({
    uid: { type: Number },
    mobile: { type: String }, //手机
    nickname: { type: String }, //昵称
    avatar: { type: String },//头像
    password: {
        type: String,
        select: false,
        set(val) {
            return require('bcryptjs').hashSync(val, 10)
        }
    }, //密码
    email: { type: String }, //邮箱
    realnameAuth: {//实名认证信息
        type: { type: Number },//用户类型：0 个人用户 1 企业用户,
        auth_status: { type: Number },//0 未认证 1 等待认证 2 认证通过 3 认证失败
        auth_date: { type: String },//认证通过时间
        real_name: { type: String },
        identity: { type: String },//身份证号码/营业执照号码
        id_card_front: { type: String },
        id_card_back: { type: String },
        id_card_in_hand: { type: String },
    },
    socket_id: { type: String },//
    address: { type: String },//地址
    create_at: { type: String, default:()=> dayjs().format('YYYY-MM-DD HH:mm:ss') },//账号创建时间
    login_at: { type: String },//登录时间
    login_ip: { type: String },//登录ip
    is_online: { type: Number },//0-不在线 1在线
    amount: { type: Number },//金币
    experience: { type: Number },//经验
    status: { type: Number, default: 1 },//0-注销 1正常使用 2禁用 
    desc: { type: String },//个人简介
    tag: { type: String },//标签
    role: { type: String,default:'user' },//关联角色表
    age: { type: String },//
    sex: { type: Number, default: 2 },//0 女 1 男 2未知
    birthday: { type: String },//
    photos: [{ type: String }],//照片墙
    wx_mp_openid: { type: String },
    wx_app_openid: { type: String },
    wx_unionid: { type: String },

}, { versionKey: false });
module.exports = mongoose.model('user', schema);;