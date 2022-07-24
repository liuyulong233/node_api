const assert = require("http-assert");
const filename = __filename.slice(__dirname.length + 1, -3);
const Base = require("../baseApiFuc");
const app = new Base(filename);
const Joi = require("joi");
const pageSchema = Joi.object({
    // type:Joi.string().valid('system','user').default('system'),//system系统配置 user 用户配置
    // uid: Joi.number().when('type', { is: 'user', then:  Joi.number().required() }),
    platform:Joi.string().valid('web','app','mp-weixin').default('app'),//平台配置，app || mp-weixin
  }).unknown();
const query = async (ctx) => {
  //校验参数
  let { value, error } = pageSchema.validate(ctx.query);
  assert(!error, 405, error);

    //保存数据
    try {
        
      let sys_config = await app.Model.findOne({type:'system',platform:value.platform});
      let user_config={};
      // console.log(ctx.state.uid)
      if(ctx.state&&ctx.state.uid){
        user_config = await app.Model.findOne({type:'user',platform:value.platform,uid:ctx.state.uid});
      }
      ctx.body = {
        code: 200,
        data:{
            sys_config,
            user_config
        },
        message: "ok",
      };
    } catch (error) {
      ctx.body = {
        code: 500,
        message: "操作失败" + error,
      };
    }
  }  

module.exports = {
  query,

};
