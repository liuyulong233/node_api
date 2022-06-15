const assert = require("http-assert");
const filename = __filename.slice(__dirname.length + 1, -3);
const { appSchema } = require("@j/" + filename);
const Base = require("../baseApiFuc");
const app = new Base(filename);
//举报
const add = async (ctx) => {
  ctx.request.body.uid = ctx.state.uid;
  //校验参数
  let { value, error } = appSchema.add.validate(ctx.request.body);
  assert(!error, 405, error);

    //保存数据
    try {
      let data = await app._create(value);
      ctx.body = {
        code: 200,
        message: "成功",
      };
    } catch (error) {
      ctx.body = {
        code: 500,
        message: "操作失败" + error,
      };
    }
  }  

module.exports = {
  add,

};
