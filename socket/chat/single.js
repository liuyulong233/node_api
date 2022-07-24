const { _addSingle, _editSingle } = require("@c/social/chat/conversation");

const { _add: saveMsg } = require("@c/social/chat/single_message");
const mongoose = require("@m/mongodb/db");
const ObjectId = mongoose.Types.ObjectId;
//是否可以将每个用户的io,socket对象进行保存？？？

/* 群消息格式
{  
        timestamp: 1516763973000, 
        type:'TEXT','IMG','VOICE','MAP'，'ENVELOPE',消息类型
        fromAccount:{
            uid:12,
            nickname:'',
            avatar:""
        };//消息发送方信息--方便其他用户展示其信息
        toAccount:'toAccount',//消息接收
        message:'消息具体内容',
        is_reach:消息是否送达到对方 后端接收成功生成
     }
 */
let arr = []; //批量保存
module.exports = async (io, socket, user) => {
  let users = global.users;
  socket.on("P2PMsg", async function (msg) {
    let socketid = users.get(msg.toAccount);
    msg.timestamp = Date.now();
    io.to(socketid).emit("onP2PMsg", msg);

    let str = [msg.toAccount, msg.fromAccount.uid].sort((a, b) => a - b).join();
    if (!arr.includes(str)) {
      await _addSingle(msg.toAccount, msg.fromAccount.uid);
      arr.push(str);
    }
    //保存消息
    saveMsg({
      timestamp: Date.now(),
      type: msg.type,
      fromAccount: msg.fromAccount.uid,
      toAccount: msg.toAccount, //消息接收
      content: msg.message,
      accounts: [msg.toAccount, msg.fromAccount.uid],
    })
      .then((data) => {
        _editSingle(msg.toAccount, msg.fromAccount.uid, data._id);
      })
      .catch((err) => {
        console.log(err);
      });
    //页面离开时，调用 创建单聊会话接口，更新会话最新消息接口
  });
};
