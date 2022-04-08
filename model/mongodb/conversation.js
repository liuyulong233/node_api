var mongoose = require('./db');
var Schema = mongoose.Schema;
const dayjs = require('dayjs')
var schema = new Schema({
    uid: { type: Number },//会话所有者
    type: { type: String },//GROUP SINGLE 会话类型
    touid:{type:Number},
    accounts: { type: Array },//单聊双方UID 从小到大存储
    group_id: { type: Schema.Types.ObjectId },// 
    last_id:{ type: Schema.Types.ObjectId },
   
    create_at: { type: String, default:()=> dayjs().format('YYYY-MM-DD HH:mm:ss') }
}, { versionKey: false });
//查询个人的群聊会话 ｛type:GROUP,uid:uid｝ 退群删除
//单聊产生两条会话
//db.user.find({accounts:{$elemMatch:{$eq:"123"}}})
module.exports = mongoose.model('conversation', schema);