module.exports = (socket) => {
    console.log(socket.id, "聊天服务 链接成功 ");
  //接受客户端的消息
  socket.on("message", function (msg) {
    console.log(socket.id, "客户端发送数据给服务端了: ");
  });
  //连接断开 解除uid socketid的相互映射
  socket.on("disconnect", function () {
    console.log(`socket 聊天服务 已断开连接`);
  });
  //连接错误
  socket.on("error", (error) => {
    console.log(error);
  });
};
