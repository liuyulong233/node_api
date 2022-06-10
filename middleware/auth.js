const jwt = require("jsonwebtoken");
const assert = require("http-assert");
const { user: userModel } = require("@m/mongodb/index.js");
let base = "/api/admin";
let whiteList = [];
const config = require("@/config/index.js");
async function checkToken(ctx, next) {
  // console.log("url", url,ctx.url,ctx.path);

  // 如果是登陆页面和注册页面就不需要验证token了
  if (whiteList.includes(ctx.path)) {
    await next();
  } else {
    // 否则获取到token
    let token = String(ctx.request.headers["authorization"] || "").slice(7);
    if (token) {
      // 如果有token的话就开始解析
      let info = {};
      try {
        info = jwt.verify(token, config.tokenSecret);
      } catch (error) {
        //无效token
        assert(false, 400, "token无效，请重新登录！" + error);
      }
      // 判断token是否快过期，是则
  // 生成新的token
  // const newToken = genToken(user);
  //将新token放入Authorization中返回给前端
  
  // ctx.res.setHeader('Authorization', newToken);
      let user = await userModel.findOne({ uid: info.uid });
      assert(user, 400, "未知token，请先登录！");
      assert(user.status != 0, 400, "账号已注销");
      assert(user.status != 2, 400, "账号已封禁，请联系管理员！");
      ctx.state.uid = info.uid;
      ctx.state.user = user;
      await next();
    } else {
      assert(false, 400, "token无效，请重新登录！");
    }
  }
}

module.exports = function (model = "admin") {
  if (model === "admin") {
    base = "/api/admin";
    whiteList = [];
  } else {
    base = "/api/app";
    whiteList = [
      "/upgrade",
      "/dynamic",
      "/article",
      "/comment",
      "/dynamic/detail",
      "/article/detail",
      "/topics",
    ];
  }
  whiteList = whiteList.map((item) => base + item);
  return checkToken;
};
