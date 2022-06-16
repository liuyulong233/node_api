const Router = require("koa-router");
const router = new Router();
const music = require("./music.js");
const admin = require("./social/admin.js");
const app = require("./social/app.js");
const codeController = require("@c/social/admin/code.js");
const Auth = require("@/middleware/auth.js");
const adminApiAuth = require("@/middleware/api-auth.js");
const {login,register} = require("@c/social/admin/user.js");
const test = require("./test.js");
router.use("/music", music.routes());
router.post("/login",login);
router.post("/register",register);
router.get('/verifyCode', codeController.add);
router.use("/admin",Auth('admin'),adminApiAuth, admin.routes());
router.use("/app",Auth('app'), app.routes());
router.use("/err", test.routes());
module.exports=router
