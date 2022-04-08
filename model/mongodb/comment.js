var mongoose = require('./db');
var Schema = mongoose.Schema;
const dayjs = require('dayjs')
// console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'))
var schema = new Schema({
    uid: { type: Number }, //评论人uid
    topic_id: { type: Schema.Types.ObjectId },// 动态或文章 id
    pid: { type: Schema.Types.ObjectId }, // 父级评论id
    reply_id: { type: Schema.Types.ObjectId }, //回复的评论的id
    content: { type: String }, // 评论内容
    status: { type: Number }, // 评论状态，评论被删除了  都是 逻辑删除，不会真实删除
    type: { type: Number },//评论类型 1 动态 2文章 3评论
    // like:{ type: Number }, // 评论的点赞数量
    top: { type: Number, default: 1 }, // 评论置顶,置顶top为9999
    reply_count: { type: Number },//记录该评论的回复数 只有一级评论才有
    create_at: {
        type: String,
        default: function () {
            return dayjs().format('YYYY-MM-DD HH:mm:ss')
        }
    }
}, { versionKey: false });
module.exports = mongoose.model('comment', schema);;