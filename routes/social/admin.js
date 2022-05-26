const Router = require("koa-router");
const categoryController = require("@c/social/admin/category.js")();
let router = new Router();
router.post("/category/add",categoryController.add);
router.post("/category/edit",categoryController.edit);
router.get("/category/list",categoryController.list);
router.get("/category/remove",categoryController.remove);
router.get("/category/detail",categoryController.detail);
module.exports=router