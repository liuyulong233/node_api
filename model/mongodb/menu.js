var mongoose = require('./db');
var Schema = mongoose.Schema;
const dayjs = require('dayjs')
// console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'))
var MenuSchema = new Schema({
  menu_id:{ type: String },
  name: { type: String },
  icon:{type:String},
  pid:{type:String},
  path:{type:String},
  isLeaf:{type:Number},//0表示不是叶子，1表示是叶子
  comment:{type:String},
  component:{type:String},
  order:{ type: Number, default: 1 },//同级排序,数字越大越靠前
  status:{ type: Number, default: 1 },//0 禁用 1-启用
  create_at: { type: String, default:()=> dayjs().format('YYYY-MM-DD HH:mm:ss') }
},{versionKey:false});
const Menu=mongoose.model('Menu', MenuSchema);
module.exports=Menu;