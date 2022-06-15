//配置
const multer = require("@koa/multer");
const path = require("path");
let mimetypes = [
  "image/png",
  "image/jpg",
  "image/jpeg",
  "image/webp",
  "application/vnd.android.package-archive",
  "application/widget",
];
var storage = multer.diskStorage({
  //文件保存路径
  destination: function (ctx, file, cb) {
    // console.log('filename',ctx)
    //获取后缀名
    const extname = path.extname(file.originalname); // .jpg
    if (extname == ".apk" || extname == ".wgt") {
      cb(null, "public/apk/");
    } else {
      cb(null, "public/upload/");
    }
  },
  //修改文件名称
  filename: function (ctx, file, cb) {
    console.log("filename", ctx.file);
    //获取后缀名
    const extname = path.extname(file.originalname);
    cb(null, Date.now() + extname);
  },
  fileFilter: function (req, file, cb) {
    // 限制文件上传类型，仅可上传png格式图片

    if (mimetypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
});
//如果你未创建文件上传需要保存的文件夹或文件，使用dest时，会根据dest配置的路径自动创建，但是如果使用storage，必须确保文件夹或文件是否存在，否则会报错！
//加载配置
const limit = {
  fileSize: 30 * 1024 * 1024, //b 30M
};
var upload = multer({ storage, limit });
module.exports = upload;
