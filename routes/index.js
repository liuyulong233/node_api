const Router = require("koa-router");
const router = new Router();
const music = require("./music.js");
const test = require("./test.js");
router.use("/music", music.routes());
router.use("/err", test.routes());
module.exports=router
