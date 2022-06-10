const assert = require("http-assert");
const filename = __filename.slice(__dirname.length + 1, -3);
const { follow: followModel } = require("@m/mongodb/index.js");
const { appSchema } = require("@j/" + filename);
const Base = require("../baseApiFuc");
const user = new Base(filename);
//编辑个人信息
const edit = async (ctx) => {
  let { value, error } = appSchema.edit.validate(ctx.request.body);
  assert(!error, 405, error);
  const obj = await user._edit({ uid: ctx.state.uid }, value);
  ctx.body = obj;
};
//获取用户个人资料
const detail = async (ctx) => {
  let user_id = ctx.state.uid;
  let follower_id = ctx.query.uid;
  // console.log('获取用户个人资料',filename,user.Model)
  // console.dir(user.Model.findOne)
  try {
    const data =await user.Model.findOne({ uid: follower_id || user_id }).select(
      //字段
      `uid mobile nickname age avatar tag 
        sex birthday photos email address desc`
    );
    // console.log(data)
    //follower_id != user_id查看别人的个人空间， 查询user_id是否关注过follower_id
    if (follower_id&&(follower_id != user_id)) {
      let isFollow = await followModel.findOne({
        user_id,
        follower_id,
        status: 1,
      });
      data.isFollow = isFollow ? true : false;
    }
    ctx.body = {
      code: 200,
      data,
      message: "ok",
    };
  } catch (error) {
    ctx.body = {
      code: 500,
      message:"error:"+ error,
    };
  }
};
//修改用户密码 邮箱 手机
const bind = async (ctx) => {
  // console.log("xxxxxxxx", ctx.params.type);

  let { error, value } = appSchema.bindSchema.validate({
    type: ctx.params.type,
    value: ctx.request.body,
  });
  assert(!error, 442, error);
  try {
    const data = user.Model.findOneAndUpdate(
      {
        uid: ctx.state.uid,
      },
      {
        [value.type]: value.value,
      }
    );
    ctx.body = {
      code: 200,
      message: "操作成功",
    };
  } catch (error) {
    ctx.body = {
      code: 432,
      message: "操作失败" + error,
    };
  }
};

module.exports = {
  edit,
  detail,
  bind,
};
