global.users = new Map();
const { initGroup } = require('./group')
const  initSingle  = require('./single')
module.exports = (socket) => {
  const user = JSON.parse(socket.handshake.query.option);
  let users = global.users;
  users.set(user.uid, socket.id);
  console.log(
    `${user.uid}=>${socket.id}->socket已连接 ${
      user.hasLogin ? "已登录" : "未登录"
    }`
  );
  //接受客户端的消息
  socket.on("message", function (msg) {
    console.log(socket.id, "客户端发送数据给服务端了: ");
    msg.timestamp = new Date().getTime();
    socket.broadcast.emit("message", msg);
  });
  //连接断开 解除uid socketid的相互映射
  socket.on("disconnect", function () {
    console.log(`${user.uid}=>${socket.id}->socket已断开连接`);
    users.delete(user.uid);
  });
  //连接错误
  socket.on("error", (error) => {
    console.log(error);
  });
  if (user.hasLogin) {
    initGroup(io, socket, user);
    initSingle(io, socket, user);
  }
};
