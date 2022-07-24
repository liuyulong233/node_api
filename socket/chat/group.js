const { member: memberModel } = require("@m/mongodb/index.js");
const {
  _editGroup: updateLastMsg,
  _add: conversation_add,
} = require("@c/social/chat/conversation");
const { _add: member_add } = require("@c/social/chat/member");
const { _add: saveMsg } = require("@c/social/chat/groupMessage");
const {
  _add: notice_create,
  _edit: notice_agree,
} = require("@c/social/chat/notice");
const mongoose = require("../model/db");
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
        toAccount:'toAccount',//消息接收群
        message:'消息具体内容',
     }
 */
module.exports = {
  initGroup: async function (io, socket, user) {
    let users = global.users;
    console.log("group", users);
    // return ;
    //1.查询该用户加入的群
    let list = await memberModel.find({
      status: 1,
      uid: user.uid,
    });
    //2 将该用户加入群房间中 循环调用joinRoom方法
    console.log(list);
    list.map((item) => {
      // console.log(typeof item.group_id) object group_id不是字符串 巨坑
      joinRoom(item.group_id);
    });

    //3 监听并转发每个房间的群消息
    onGroupMessage();
    //4 监听申请加群，同意加群，加群事件
    //监听加群通知
    /*
        obj={
            operate:'notice',//notice-加群通知 agree-同意加群 join-加群
            group_id: null,//群ID
            group_uid:null,//群主uid
            uid: null,//加群人uid
        }*/
    //数据唯一未保证
    socket.on("joinGroup", async function (obj) {
      console.log("joinGroup=>", obj);
      if (obj.operate == "notice") {
        //群主在线：即时收到加群申请通知
        let socketid = users.get(obj.group_uid);

        //创建加群申请记录
        const res = await notice_create({
          group_id: obj.group_id, //群ID
          uid: obj.uid, //
          group_uid: obj.group_uid, //群主uid
        });
        obj._id = res._id;
        io.to(socketid).emit("onJoinGroup", obj);
      }
      if (obj.operate == "join") {
        joinRoom(obj.group_id);
        onGroupMessage();
        //通知群内其他成员有人加群
        // socket.to(msg.toGroupId).emit('joinGroup', msg);
        //增加群成员记录
        member_add({
          group_id: obj.group_id, //群ID
          uid: obj.uid, //群员uid
        });
        //创建群会话
        conversation_add({
          uid: obj.uid, //会话所有者
          type: "GROUP", //GROUP SINGLE 会话类型
          group_id: obj.group_id, //发送者id
        });
        updateLastMsg(obj.group_id);
      }
      if (obj.operate == "agree") {
        //通知uid加群,触发joinRoom事件
        let socketid = users.get(obj.uid);
        //告知加群者已同意加群，前端则触发主动加群事件
        io.to(socketid).emit("onJoinGroup", obj);
        ////找出加群人的socket 执行加群（保存了每个用户的socket）
        //修改加群申请记录为同意
        //加群记录多条时会有错误
        notice_agree(
          {
            group_id: ObjectId(obj.group_id),
            uid: obj.uid,
            confirm: null,
          },
          { confirm: 1 }
        );
      }
    });

    //5 退群离开房间取消监听
    socket.on("leaveRoom", function (groupId) {
      socket.removeAllListeners("groupMsg");
      socket.leave(groupId);
      //调用退群方法
    });
    //加入房间方法
    function joinRoom(groupId) {
      //1.身份校验 只有是群成员才能加入房间
      console.log(`${user.uid}=>${socket.id}->加入房间${groupId}`);
      socket.join(groupId + "");
    }
    //监听群消息 前端区分那个群的消息
    function onGroupMessage() {
      console.log("groupMsg");
      socket.removeAllListeners("groupMsg");
      socket.on("groupMsg", (msg) => {
        console.log(msg.toAccount);
        msg.timestamp = new Date().getTime();
        // msg.is_read = 1;
        // msg.is_reach = 0;
        socket.to(msg.toAccount + "").emit("onGroupMsg", msg);
        // io.in(msg.toAccount).emit('onGroupMsg', msg);//包括发送者
        //保存群消息
        saveMsg({
          type: msg.type, //消息类型 TXET
          content: msg.message, //消息内容
          timestamp: msg.timestamp,
          group_id: msg.toAccount, //群ID
          uid: msg.fromAccount.uid, //uid
        })
          .then((data) => {
            updateLastMsg(data.group_id, data._id);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
  },
};
