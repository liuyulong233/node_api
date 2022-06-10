const webrtcIO = require("./webrtc/index");
const chatService = require("./chat/index");
const gameService = require("./game/index");
//https://zhuanlan.zhihu.com/p/29148869
//https://socket.io/docs/v4/client-api/#iourl
module.exports.listen = (io) => {
  let chatIO = io.of("/chat");
  chatIO.on("connection", function (socket) {
    chatService(socket,chatIO);
  });

  let gameIO = io.of("/game");
  gameIO.on("connection", function (socket) {
    gameService(socket,gameIO);
  });
};
