//路径别名
require("module-alias/register")
const Koa = require("koa");
const {Server} = require("socket.io");
const config = require("./config/index.js");
const { getWlanIP } = require("./lib/util");
const http = require("http");
const ws = require("./socket/index");
const port = config.ws_port;
const ip =config.ip;
const app = new Koa();

const httpServer = http.createServer(app.callback());
httpServer.listen(port, ip,() => {
  console.log("ws-server is running on ws://%s:%s", ip, port);
});
const options = {
  cors: true,
};
const io =new Server(httpServer, options);
ws.listen(io);
