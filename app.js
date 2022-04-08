const Koa = require("koa"),
  Router = require("koa-router"),
  cheerio = require("cheerio"),
  charset = require("superagent-charset"),
  superagent = charset(require("superagent")),
  app = new Koa(),
  router = new Router();
const cors = require("koa2-cors");
//错误处理
app.use(async (ctx, next) => {
  return next().catch((err) => {
    
    // console.dir(err.__proto__);
    ctx.status = 200;
    ctx.body ={
      err,
      code:err.status,
      message:err.message||"错误"
    } 
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

app.use(cors());
// let music = require("./routes/music.js");
// let test = require("./routes/test.js");
let api = require("./routes/index.js");
router.use("/api", api.routes());
// router.use("/err", test.routes());
app.use(router.routes()).use(router.allowedMethods());
app.on('error', (err, next) => {
  console.error('server error',err)
})
app.listen(3001, () => {
  console.log("[服务已开启,访问地址为：] http://127.0.0.1:3001/");
});
