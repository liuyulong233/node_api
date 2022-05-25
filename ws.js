const Koa = require("koa");
const path = require("path");
const koaSend = require("koa-send");
const statics = require("koa-static");
const fs = require("fs");
const socket = require("socket.io");
const { getWlanIP } = require("./lib/util");
const http = require("http");
const https = require("https");
const ws = require("./socket/index");
const port = 3000;
const ip =getWlanIP();
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
const httpServer = http.createServer(app.callback());
// const httpServer = https.createServer(credentials,app.callback());
httpServer.listen(port, ip,() => {
  console.log("ws-server is running on ws://%s:%s", ip, port);
});
const options = {
  cors: true,
};
const io = socket(httpServer, options);
ws.listen(io);
