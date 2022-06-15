const Router = require("koa-router");
const categoryController = require("@c/social/admin/category.js");
const codeController = require("@c/social/admin/code.js");
const userController = require("@c/social/admin/user.js");
const menuController = require("@c/social/admin/menu.js");
const roleController = require("@c/social/admin/role.js");
const permissionController = require("@c/social/admin/permission.js");
const upgradeController = require("@c/social/admin/upgrade.js");
const dynamicController = require("@c/social/admin/dynamic.js");
const articleController = require("@c/social/admin/article.js");
const commentController = require("@c/social/admin/comment.js");
const configController = require("@c/social/admin/config.js");
const reportController = require("@c/social/admin/report.js");
global.userMap = new Map();
let router = new Router();
router.post("/category/add", categoryController.add);
router.post("/category/edit", categoryController.edit);
router.get("/category/list", categoryController.list);
router.get("/category/remove", categoryController.remove);
router.get("/category/detail", categoryController.detail);

router.post("/code/add", codeController.add);
router.post("/code/edit", codeController.edit);
router.get("/code/list", codeController.list);
router.get("/code/remove", codeController.remove);
router.get("/code/detail", codeController.detail);

router.post("/role/add", roleController.add);
router.post("/role/edit", roleController.edit);
router.get("/role/list", roleController.list);
router.get("/role/remove", roleController.remove);
router.get("/role/detail", roleController.detail);

router.post("/menu/add", menuController.add);
router.post("/menu/edit", menuController.edit);
router.get("/menu/list", menuController.list);
router.get("/menu/remove", menuController.remove);
router.get("/menu/detail", menuController.detail);

router.get("/rightMenu", menuController.getRightMenuList);
router.get("/permissionByRole", permissionByRole);

router.post("/permission/add", permissionController.add);
router.post("/permission/edit", permissionController.edit);
router.get("/permission/list", permissionController.list);
router.get("/permission/remove", permissionController.remove);
router.get("/permission/detail", permissionController.detail);

router.post("/upgrade/add", upgradeController.add);
router.post("/upgrade/edit", upgradeController.edit);
router.get("/upgrade/list", upgradeController.list);
router.get("/upgrade/remove", upgradeController.remove);
router.get("/upgrade/detail", upgradeController.detail);

router.post("/dynamic/add", dynamicController.add);
router.post("/dynamic/edit", dynamicController.edit);
router.get("/dynamic/list", dynamicController.list);
router.get("/dynamic/remove", dynamicController.remove);
router.get("/dynamic/detail", dynamicController.detail);

router.post("/article/add", articleController.add);
router.post("/article/edit", articleController.edit);
router.get("/article/list", articleController.list);
router.get("/article/remove", articleController.remove);
router.get("/article/detail", articleController.detail);
router.post("/article/check", articleController.check);

router.post("/comment/add", commentController.add);
router.post("/comment/edit", commentController.edit);
router.get("/comment/list", commentController.list);
router.get("/comment/remove", commentController.remove);
router.get("/comment/detail", commentController.detail);

router.post("/report/add", reportController.add);
router.post("/report/edit", reportController.edit);
router.get("/report/list", reportController.list);
router.get("/report/remove", reportController.remove);
router.get("/report/detail", reportController.detail);

router.post("/config/add", configController.add);
router.post("/config/edit", configController.edit);
router.get("/config/list", configController.list);
router.get("/config/remove", configController.remove);
router.get("/config/detail", configController.detail);

// router.post("/code/add",codeController.add);
router.post("/user/edit", userController.edit);
router.get("/user/list", userController.list);
// router.get("/user/remove",userController.remove);
router.get("/user/detail", userController.detail);

async function permissionByRole(ctx) {
  let data = await roleController.getPermissionByRole(
    ctx.query.role || ctx.state.user.role
  );
  ctx.body = {
    code: 200,
    data,
    message: "ok",
  };
}

module.exports = router;
