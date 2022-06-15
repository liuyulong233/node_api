//路径别名
require("module-alias/register")
const path = require("path");
const Koa = require("koa"),
  Router = require("koa-router"),
  cheerio = require("cheerio"),
  charset = require("superagent-charset"),
  superagent = charset(require("superagent")),
  app = new Koa(),
  router = new Router();
const config = require("@/config/index.js");
const cors = require("koa2-cors");
const bodyParser = require("koa-bodyparser"); //解析post参数
const statics = require("koa-static");
const mount = require("koa-mount");
//错误处理
app.use(async (ctx, next) => {
  return next().catch((err) => {
    // console.dir(err.__proto__);
    ctx.status = 200;
    ctx.body = {
      err,
      code: err.status,
      message: err.message || "错误",
    };
  });
  // try {
  //   await next();
  // } catch (err) {
  //   console.log("err",err);
  //   ctx.status = 200;
  //   ctx.body ={
  //     code:err.status,
  //     message:err.message||"错误"
  //   }
  // }
});
//使用中间件
app.use(cors());
app.use(bodyParser());
app.use(mount("/static", statics(path.join(__dirname, "./public"))));
let api = require("./routes/index.js");
router.use("/api", api.routes());
app.use(router.routes()).use(router.allowedMethods());
app.on("error", (err, next) => {
  console.error("server error", err);
});
app.listen(config.port,config.ip, () => {
  console.log(`[服务已开启,访问地址为：] http://${config.ip}:${config.port}/`);
});
