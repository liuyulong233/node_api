const Koa = require("koa");
const path = require("path");
const fs = require("fs");
const https = require("https");
const statics = require("koa-static");
const mount = require("koa-mount");
// 创建koa实例
const app = new Koa();
// 根据项目的路径导入生成的证书文件
const privateKey = fs.readFileSync(
  path.join(__dirname, "./certificate/liuyulong.xyz.key"),
  "utf8"
);
const certificate = fs.readFileSync(
  path.join(__dirname, "./certificate/liuyulong.xyz_bundle.crt"),
  "utf8"
);
const credentials = {
  key: privateKey,
  cert: certificate,
};

app.use(mount("/", statics(path.join(__dirname, "./public"))));

// 创建https服务器实例
const httpsServer = https.createServer(credentials, app.callback());
const httpsServer2 = https.createServer(credentials, app.callback());
// 设置https的访问端口号
const SSLPORT = 443;

// 启动服务器，监听对应的端口
httpsServer.listen(SSLPORT, () => {
  console.log(`HTTPS Server is running on: https://localhost:${SSLPORT}`);
});
httpsServer2.listen(SSLPORT,'192.168.0.107', () => {
    console.log(`HTTPS Server is running on: https://192.168.0.107:${SSLPORT}`);
  });
