const Router = require("koa-router");
const { getSinger, getRecommend,getLyric,getVkey } = require("../controller/music");
let router = new Router();
var arr;
router.get("/recommendList", async (ctx, next) => {
  let res = await getRecommend();
  res = eval(res);
  ctx.body = {
    code: 200,
    data: res[0],
  };
  //
  //
});
router.get("/recommend/:id", async (ctx, next) => {
  let res = await getRecommend(ctx.params.id);
  res = eval(res);
  ctx.body = {
    code: 200,
    data: res[0],
  };
  //
  //
});
router.get("/singer/:id", async (ctx, next) => {
  let res = await getSinger(ctx.params.id);
  res = eval(res);
  res = res[0];
  delete res.singerDetail.shortdesc;
  delete res.singerDetail.descstr;
  ctx.body = {
    code: 200,
    data: res,
  };
  //
  //
});

router.get("/singerList", async (ctx, next) => {
  let res = await getSinger();
  res = eval(res);
  res = res[0];
  ctx.body = {
    code: 200,
    data: res,
  };
});
router.get("/lyric", async (ctx, next) => {
  let res = await getLyric(ctx.query.id);
  res = JSON.parse(res);
  // console.log(res,ctx.query);
  
  ctx.body = {
    code: 200,
    data: res,
  };
});
router.get("/getVkey", async (ctx, next) => {
  let res = await getVkey(ctx.query.mid);
  res = JSON.parse(res);
  // console.log(res,ctx.query);
  res=res.req&&res.req.data
  ctx.body = {
    code: 200,
    data: res||{},
  };
});
module.exports=router