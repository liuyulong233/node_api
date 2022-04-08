var mongoose = require('./db');
var Schema = mongoose.Schema;
const dayjs = require('dayjs')
// console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'))
var schema = new Schema({
    role_id:{ type: String },//角色唯一标识
    name: { type: String },
    comment:{type:String},
   permission:[{type:Schema.Types.ObjectId}],//
    // permission:{type:Schema.Types.ObjectId},//
    create_at: { type: String, default:()=> dayjs().format('YYYY-MM-DD HH:mm:ss') }
},{versionKey:false});
module.exports=mongoose.model('role', schema);