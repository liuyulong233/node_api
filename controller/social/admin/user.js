const assert = require("http-assert");
const jwt = require("jsonwebtoken");
const filename = __filename.slice(__dirname.length + 1, -3);
const { random } = require("@/lib/util.js");
const { checkVerifCode, banVerifCode } = require("./code.js");
const { uid: uidModel, code: codeModel } = require("@m/mongodb/index.js");
const { adminSchema } = require("@j/" + filename);
const Base = require("../baseApiFuc");
const admin = new Base(filename);
const config = require("@/config/index.js");
async function login(ctx) {
  const body = ctx.request.body;
  const { username, password, code } = body;
  //验证码校验
  let result1 = await checkVerifCode(code, "login");
  let result2 = await codeModel.findOne({ code, status: 4 });
  console.log("22222", result1, result2);
  assert(result1 || result2, 405, "验证码错误");
  //uid,邮箱，手机号登录
  // 1.根据用户名找用户
  let userinfo = {};
  userinfo = await admin.Model.findOne()
    .or([{ uid: username }, { email: username }])
    .select("+password");
  assert(userinfo, 422, "用户不存在");
  // 2.校验密码
  const isValid = require("bcryptjs").compareSync(password, userinfo.password);
  assert(isValid, 422, "用户或密码错误");
  // 3.返回token
  const token = genToken({ uid: userinfo.uid });
  // userinfo.password = null//无效??
  // console.log(userinfo);
  //保存用户系信息到全局变量
  global.userMap.set(userinfo.uid, userinfo);
  banVerifCode(code, "login");

  ctx.body = {
    code: 200,
    data: userinfo,
    message: "登录成功",
    token,
  };
}
async function register(ctx) {
  //随机分配uid
  const uidArr = await uidModel.find({ status: 0 });
  assert(uidArr, 422, "uid生成错误");
  let uidObj = uidArr[random(0, uidArr.length - 1)];
  ctx.request.body.uid = uidObj.code;
  const body = ctx.request.body;
  //验证码校验
  //检测是否有注册类型验证码，且未被验证，未过期
  let result1 = await checkVerifCode(ctx.request.body.code, "register");
  //检测是否是万能验证码
  let result2 = await codeModel.findOne({
    code: ctx.request.body.code,
    status: 4,
  });
  // console.log("22222", result1 || result2);
  assert(result1 || result2, 405, "验证码错误");
  //校验参数
  let { value, error } = adminSchema.add.validate(ctx.request.body);
  assert(!error, 405, error);
  //修改 uid池号码已占用
  await uidModel.findByIdAndUpdate(uidObj._id, { status: 1 });
  banVerifCode(body.code, "register");
  //保存数据到数据库

  const obj = await admin._create(value);
  // console.log(obj)
  if (obj.code == 200) {
    let userinfo = await admin._detail({ uid: uidObj.code });
    let token = genToken({ uid: userinfo.uid });
    ctx.res.setHeader('Authorization', token);
    ctx.body = {
      code: 200,
      data:userinfo.data,
      token,
      message: "注册成功",
    };
  } else {
    obj.message = "注册失败";
    ctx.body = obj;
  }
}
function genToken(info, expiresIn = 60 * 60 * 24 * 3) {
  return jwt.sign(info, config.tokenSecret, {
    //参数 options
    algorithm: "HS256", // 加密算法   对称加密算法
    issuer: "lyl", // 签发人
    expiresIn: expiresIn, // 过期时间   单位：s
  });
}
async function list(ctx) {
  let { value, error } = adminSchema.page.validate(ctx.query);
  assert(!error, 405, error);
  let { page, page_size, status, sex, uid } = value;
  let _filter = {
    uid:ctx.state.limit?ctx.state.uid:uid,
    sex,
    status,
  };
  console.log('ctx.state.uid',ctx.state.uid,ctx.state.limit)
  for (let key in _filter) {
    if (_filter[key] == null || _filter[key] === "") {
      delete _filter[key];
    }
  }

  const obj = await admin._list(_filter, page, page_size);
  ctx.body = obj;
}
async function edit(ctx) {
  let { value, error } = adminSchema.edit.validate(ctx.request.body);
  assert(!error, 405, error);
  const obj = await admin._edit({uid:ctx.state.limit?ctx.state.uid:value.uid}, value);
  ctx.body = obj;
}

async function detail(ctx) {
  assert(ctx.query.uid, 422, "uid参数缺失");
  const obj = await admin._detail({ uid: ctx.state.limit?ctx.state.uid:ctx.query.uid });
  ctx.body = obj;
}
//修改status状态
const editStatus = async (uid, status) => {
  return Model.findOneAndUpdate({ uid }, { status });
};
//注销
async function loginOut(ctx) {
  assert(ctx.query.uid, 422, "uid参数缺失");
  if (ctx.state.uid != ctx.query.uid) {
    assert(null, 422, "无权注销");
  }
  try {
    await editStatus(ctx.query.uid, 0);
    ctx.body = {
      code: 200,
      message: "注销成功",
    };
  } catch (error) {
    ctx.body = {
      code: 500,
      error,
      message: "注销失败",
    };
  }
}

let o = {
  login,
  register,
  list,
  edit,
  detail,
  loginOut,
  genToken
};
module.exports = o;
