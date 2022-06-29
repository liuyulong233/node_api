const assert = require("http-assert");
const filename = __filename.slice(__dirname.length + 1, -3);
const { groupMessage } = require("@m/mongodb/index.js");
const { appSchema } = require("@j/" + filename);
const Base = require("../baseApiFuc");
const app = new Base(filename);
const conversation = require("./conversation.js");
const member = require("./member.js");
//新增群组
const add = async (ctx) => {
  ctx.request.body.uid = ctx.state.uid;
  //校验参数
  let { value, error } = appSchema.add.validate(ctx.request.body);
  assert(!error, 405, error);
  //保存群信息
 //应该用事务 执行下列数据库操作
  try { 
      
    let data = await app.Model.create(value);
    //增加群会话
    let obj = await groupMessage.findOne();
    conversation._add({
      group_id: data._id+'', //群ID
      type: "GROUP",
      uid: data.uid, //群员uid
      last_id: obj._id+'',
    });
    //添加群成员 将群主添加到群成员
    member._add({
      group_id: data._id + "", //群ID
      uid: data.uid, //群员uid
    });
    ctx.body = {
      code: 200,
      message: "成功",
    };
  } catch (error) {}
};
const query = async (ctx) => {
  let { value, error } = appSchema.page.validate(ctx.query||{});
  assert(!error, 405, error);
  let { page, page_size, uid } = value;
// console.log('111111111111')
  let offset = (page - 1) * page_size;
  let _filter = {
    status: 1,
    uid,
  };
  // console.log('22222222222')
  for (let key in _filter) {
    if (_filter[key] == null || _filter[key] === "") {
      delete _filter[key];
    }
  }
  try {
    let data = await app.Model.find(_filter)
      .ne("uid", ctx.state.uid)
      .skip(offset)
      .limit(page_size)
      .sort("-create_at");

    const count = await app.Model.find(_filter).ne("uid", ctx.state.uid).countDocuments();
    ctx.body = {
      code: 200,
      data,
      paging: {
        page,
        page_size,
        count,
      },
      message: "ok",
    };
  } catch (error) {
    ctx.body = {
      code: 500,
      message: "group query::" + error,
    };
  }
};
const edit = async (ctx) => {
  ctx.request.body.uid = ctx.state.uid;
  //校验参数
  let { value, error } = appSchema.edit.validate(ctx.request.body);
  assert(!error, 422, error);
  const obj = await app._edit(
    {
      _id: value._id,
      uid: value.uid,
    },
    value
  );

  ctx.body = obj;
};
async function detail(ctx) {
  assert(ctx.query._id, 422, "_id参数缺失");
  const obj = await app._detailById(ctx.query._id);
  ctx.body = obj;
}
module.exports = {
  add,
  edit,
  query,
  detail,
};
