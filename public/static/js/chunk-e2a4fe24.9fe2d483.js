(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e2a4fe24"],{"06db":function(t,e,n){"use strict";var i=n("23c6"),a={};a[n("2b4c")("toStringTag")]="z",a+""!="[object z]"&&n("2aba")(Object.prototype,"toString",function(){return"[object "+i(this)+"]"},!0)},"0bfb":function(t,e,n){"use strict";var i=n("cb7c");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"14cc":function(t,e,n){},"1af6":function(t,e,n){var i=n("63b6");i(i.S,"Array",{isArray:n("9003")})},"20fd":function(t,e,n){"use strict";var i=n("d9f6"),a=n("aebd");t.exports=function(t,e,n){e in t?i.f(t,e,a(0,n)):t[e]=n}},"2fdb":function(t,e,n){"use strict";var i=n("5ca1"),a=n("d2c8"),s="includes";i(i.P+i.F*n("5147")(s),"String",{includes:function(t){return!!~a(this,t,s).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},3846:function(t,e,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"454f":function(t,e,n){n("46a7");var i=n("584a").Object;t.exports=function(t,e,n){return i.defineProperty(t,e,n)}},"46a7":function(t,e,n){var i=n("63b6");i(i.S+i.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},5147:function(t,e,n){var i=n("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[i]=!1,!"/./"[t](e)}catch(a){}}return!0}},"549b":function(t,e,n){"use strict";var i=n("d864"),a=n("63b6"),s=n("241e"),r=n("b0dc"),o=n("3702"),c=n("b447"),l=n("20fd"),h=n("7cd6");a(a.S+a.F*!n("4ee1")(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,a,u,p=s(t),d="function"==typeof this?this:Array,f=arguments.length,v=f>1?arguments[1]:void 0,g=void 0!==v,m=0,y=h(p);if(g&&(v=i(v,f>2?arguments[2]:void 0,2)),void 0==y||d==Array&&o(y))for(e=c(p.length),n=new d(e);e>m;m++)l(n,m,g?v(p[m],m):p[m]);else for(u=y.call(p),n=new d;!(a=u.next()).done;m++)l(n,m,g?r(u,v,[a.value,m],!0):a.value);return n.length=m,n}})},"54a1":function(t,e,n){n("6c1c"),n("1654"),t.exports=n("95d5")},6762:function(t,e,n){"use strict";var i=n("5ca1"),a=n("c366")(!0);i(i.P,"Array",{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"6b54":function(t,e,n){"use strict";n("3846");var i=n("cb7c"),a=n("0bfb"),s=n("9e1e"),r="toString",o=/./[r],c=function(t){n("2aba")(RegExp.prototype,r,t,!0)};n("79e5")(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?c(function(){var t=i(this);return"/".concat(t.source,"/","flags"in t?t.flags:!s&&t instanceof RegExp?a.call(t):void 0)}):o.name!=r&&c(function(){return o.call(this)})},"774e":function(t,e,n){t.exports=n("d2d5")},"85f2":function(t,e,n){t.exports=n("454f")},"85fd":function(t,e,n){"use strict";var i=n("14cc"),a=n.n(i);a.a},"866b":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"remote1",attrs:{"element-loading-text":t.loadingText,"element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[t.isJoin?t._e():n("div",{staticClass:"shade"},[n("div",{staticClass:"input-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],attrs:{type:"text",placeholder:"请输入你的昵称"},domProps:{value:t.account},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.join(e)},input:function(e){e.target.composing||(t.account=e.target.value)}}}),n("button",{on:{click:t.join}},[t._v("确定")])])]),n("div",{staticClass:"userList"},[n("h5",[t._v("在线用户："+t._s(t.userList.length))]),t._l(t.userList,function(e){return n("p",{key:e.account},[t._v("\n            "+t._s(e.account)+"\n            "),e.account===t.account||e.account===t.isCall?n("i",[t._v("\n            "+t._s(e.account===t.account?"me":"")+"\n            "+t._s(e.account===t.isCall?"calling":"")+"\n            ")]):t._e(),e.account!==t.account&&e.account!==t.isCall?n("span",{on:{click:function(n){return t.apply(e.account)}}},[t._v("呼叫 "+t._s(e.account))]):t._e()])})],2),n("div",{staticClass:"video-container"},[n("div",[n("ul",t._l(t.handleList,function(e){return n("li",{key:e.type},["color"===e.type?n("el-color-picker",{attrs:{"show-alpha":"",disabled:!t.isToPeer},on:{change:t.colorChange},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}}):t._e(),["color","lineWidth","polygon"].includes(e.type)?t._e():n("button",{class:{active:t.currHandle===e.type},attrs:{disabled:"cancel"===e.type?!t.isToPeer||t.allowCancel:"go"===e.type?!t.isToPeer||t.allowGo:!t.isToPeer},on:{click:function(n){return t.handleClick(e)}}},[t._v("\n                        "+t._s(e.name)+"\n                ")]),"polygon"===e.type?n("el-popover",{attrs:{placement:"top",width:"400",trigger:"click"}},[n("el-input-number",{attrs:{"controls-position":"right",min:3,max:10},on:{change:t.sidesChange},model:{value:t.sides,callback:function(e){t.sides=e},expression:"sides"}}),n("button",{class:{active:t.currHandle===e.type},attrs:{slot:"reference",disabled:!t.isToPeer},on:{click:function(n){return t.handleClick(e)}},slot:"reference"},[t._v(t._s(e.name))])],1):t._e(),"lineWidth"===e.type?n("el-popover",{attrs:{placement:"top",width:"400",trigger:"click"}},[n("el-slider",{attrs:{max:20},on:{change:t.lineWidthChange},model:{value:t.lineWidth,callback:function(e){t.lineWidth=e},expression:"lineWidth"}}),n("button",{attrs:{slot:"reference",disabled:!t.isToPeer},slot:"reference"},[t._v(t._s(e.name)+" "),n("i",[t._v(t._s(t.lineWidth+"px"))])])],1):t._e()],1)}),0),n("div",[n("h5",[t._v("画板")]),n("canvas",{ref:"canvas",attrs:{width:"400",height:"300"}})])]),n("div",[n("h5",[t._v("聊天")]),n("div",{staticClass:"chat"},t._l(t.messageList,function(e,i){return n("div",{key:i,staticClass:"message"},[n("p",[t._v("\n                        "+t._s(e.account)+" - "+t._s(e.time)+"\n                    ")]),n("p",{staticClass:"mes"},[t._v(t._s(e.mes))])])}),0),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.sendText,expression:"sendText"}],domProps:{value:t.sendText},on:{input:function(e){e.target.composing||(t.sendText=e.target.value)}}}),n("br"),n("button",{attrs:{disabled:!t.isToPeer},on:{click:function(e){return t.send(["text"])}}},[t._v("发送")])])])])},a=[],s=n("a745"),r=n.n(s);function o(t){if(r()(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var c=n("774e"),l=n.n(c),h=n("c8bb"),u=n.n(h);function p(t){if(u()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return l()(t)}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f(t){return o(t)||p(t)||d()}function v(t){if(r()(t))return t}function g(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function m(t){return v(t)||p(t)||g()}n("96cf");var y=n("3b8d"),b=(n("6762"),n("2fdb"),n("f499")),w=n.n(b),x=(n("6b54"),n("06db"),n("29b2")),k=n("ebd66"),C={name:"palette",data:function(){return{account:window.sessionStorage.account||"",isJoin:!1,userList:[],roomid:"palette",isCall:!1,loading:!1,loadingText:"呼叫中",isToPeer:!1,peer:null,offerOption:{offerToReceiveAudio:1,offerToReceiveVideo:1},handleList:[{name:"圆",type:"arc"},{name:"线条",type:"line"},{name:"矩形",type:"rect"},{name:"多边形",type:"polygon"},{name:"橡皮擦",type:"eraser"},{name:"撤回",type:"cancel"},{name:"前进",type:"go"},{name:"清屏",type:"clear"},{name:"线宽",type:"lineWidth"},{name:"颜色",type:"color"}],color:"rgba(19, 206, 102, 1)",currHandle:"line",lineWidth:5,palette:null,allowCancel:!0,allowGo:!0,sides:3,channel:null,messageList:[],sendText:""}},methods:{formatTime:function(t){var e=t.getHours(),n=t.getMinutes(),i=t.getSeconds();return[e,n,i].map(this.formatNumber).join(":")},formatNumber:function(t){return t=t.toString(),t[1]?t:"0"+t},send:function(t){if("text"===t[0]){var e={account:this.account,time:this.formatTime(new Date),mes:this.sendText,type:"text"};this.channel.send(w()(e)),this.messageList.push(e),this.sendText=""}else console.log("send",t),this.channel.send(w()(t))},initPalette:function(){this.palette=new k["a"](this.$refs["canvas"],{drawColor:this.color,drawType:this.currHandle,lineWidth:this.lineWidth,allowCallback:this.allowCallback,moveCallback:this.moveCallback})},moveCallback:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this.send(e)},allowCallback:function(t,e){this.allowCancel=!t,this.allowGo=!e},sidesChange:function(){this.palette.changeWay({sides:this.sides})},colorChange:function(){this.palette.changeWay({color:this.color})},lineWidthChange:function(){this.palette.changeWay({lineWidth:this.lineWidth})},handleClick:function(t){if(["cancel","go","clear"].includes(t.type))return this.moveCallback(t.type),void this.palette[t.type]();this.palette.changeWay({type:t.type}),["color","lineWidth"].includes(t.type)||(this.currHandle=t.type)},join:function(){this.account&&(this.isJoin=!0,window.sessionStorage.account=this.account,x["a"].emit("join",{roomid:this.roomid,account:this.account}))},initSocket:function(){var t=this;x["a"].on("joined",function(e){t.userList=e}),x["a"].on("reply",function(){var e=Object(y["a"])(regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t.loading=!1,e.t0=n.type,e.next="1"===e.t0?4:"2"===e.t0?11:"3"===e.t0?13:15;break;case 4:return t.isCall=n.self,e.next=7,t.createP2P(n);case 7:return e.next=9,t.createDataChannel();case 9:return t.createOffer(n),e.abrupt("break",15);case 11:return t.$message({message:"对方拒绝了你的请求！",type:"warning"}),e.abrupt("break",15);case 13:return t.$message({message:"对方正在通话中！",type:"warning"}),e.abrupt("break",15);case 15:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),x["a"].on("apply",function(e){t.isCall?t.reply(e.self,"3"):t.$confirm(e.self+" 向你请求视频通话, 是否同意?","提示",{confirmButtonText:"同意",cancelButtonText:"拒绝",type:"warning"}).then(Object(y["a"])(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.createP2P(e);case 2:return n.next=4,t.onDataChannel();case 4:t.isCall=e.self,t.reply(e.self,"1");case 6:case"end":return n.stop()}},n)}))).catch(function(){t.reply(e.self,"2")})}),x["a"].on("1v1answer",function(e){t.onAnswer(e)}),x["a"].on("1v1ICE",function(e){t.onIce(e)}),x["a"].on("1v1offer",function(e){t.onOffer(e)}),x["a"].on("1v1hangup",function(e){t.clearState(),t.$message({message:"对方已断开连接！",type:"warning"})})},hangup:function(){x["a"].emit("1v1hangup",{account:this.isCall,self:this.account}),this.clearState()},clearState:function(){this.peer.close(),this.channel.close(),this.palette.destroy(),this.peer=null,this.palette=null,this.channel=null,this.isToPeer=!1,this.isCall=!1},apply:function(t){this.loading=!0,this.loadingText="呼叫中",x["a"].emit("apply",{account:t,self:this.account})},reply:function(t,e){x["a"].emit("reply",{account:t,self:this.account,type:e})},createP2P:function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,this.loadingText="正在建立通话连接",t.next=4,this.initPeer(e);case 4:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),createDataChannel:function(){try{this.channel=this.peer.createDataChannel("messagechannel"),this.handleChannel(this.channel)}catch(t){console.log("createDataChannel:",t)}},onDataChannel:function(){var t=this;this.peer.ondatachannel=function(e){t.channel=e.channel,t.handleChannel(t.channel)}},handleChannel:function(t){var e=this;t.binaryType="arraybuffer",t.onopen=function(t){console.log("channel onopen",t),e.isToPeer=!0,e.loading=!1,e.initPalette()},t.onclose=function(t){console.log("channel onclose",t)},t.onmessage=function(t){if(r()(JSON.parse(t.data))){var n,i=JSON.parse(t.data),a=m(i),s=a[0],o=a.slice(1);(n=e.palette)[s].apply(n,f(o))}else e.messageList.push(JSON.parse(t.data))}},initPeer:function(t){var e=this,n=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection;this.peer=new n,this.peer.onicecandidate=function(n){n.candidate&&x["a"].emit("1v1ICE",{account:t.self,self:e.account,sdp:n.candidate})}},createOffer:function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.peer.createOffer(this.offerOption);case 3:return n=t.sent,t.next=6,this.peer.setLocalDescription(n);case 6:x["a"].emit("1v1offer",{account:e.self,self:this.account,sdp:n}),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log("createOffer: ",t.t0);case 12:case"end":return t.stop()}},t,this,[[0,9]])}));function e(e){return t.apply(this,arguments)}return e}(),onOffer:function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.peer.setRemoteDescription(e.sdp);case 3:return t.next=5,this.peer.createAnswer();case 5:return n=t.sent,t.next=8,this.peer.setLocalDescription(n);case 8:x["a"].emit("1v1answer",{account:e.self,self:this.account,sdp:n}),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),console.log("onOffer: ",t.t0);case 14:case"end":return t.stop()}},t,this,[[0,11]])}));function e(e){return t.apply(this,arguments)}return e}(),onAnswer:function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.peer.setRemoteDescription(e.sdp);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),console.log("onAnswer: ",t.t0);case 8:case"end":return t.stop()}},t,this,[[0,5]])}));function e(e){return t.apply(this,arguments)}return e}(),onIce:function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.peer.addIceCandidate(e.sdp);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),console.log("onAnswer: ",t.t0);case 8:case"end":return t.stop()}},t,this,[[0,5]])}));function e(e){return t.apply(this,arguments)}return e}()},mounted:function(){this.initSocket(),this.account&&this.join()}},T=C,P=(n("85fd"),n("2877")),_=Object(P["a"])(T,i,a,!1,null,"425f2e2b",null);e["default"]=_.exports},"95d5":function(t,e,n){var i=n("40c3"),a=n("5168")("iterator"),s=n("481b");t.exports=n("584a").isIterable=function(t){var e=Object(t);return void 0!==e[a]||"@@iterator"in e||s.hasOwnProperty(i(e))}},a21f:function(t,e,n){var i=n("584a"),a=i.JSON||(i.JSON={stringify:JSON.stringify});t.exports=function(t){return a.stringify.apply(a,arguments)}},a745:function(t,e,n){t.exports=n("f410")},aae3:function(t,e,n){var i=n("d3f4"),a=n("2d95"),s=n("2b4c")("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==a(t))}},b0b4:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n("85f2"),a=n.n(i);function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),a()(t,i.key,i)}}function r(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}},c8bb:function(t,e,n){t.exports=n("54a1")},d225:function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return i})},d2c8:function(t,e,n){var i=n("aae3"),a=n("be13");t.exports=function(t,e,n){if(i(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(t))}},d2d5:function(t,e,n){n("1654"),n("549b"),t.exports=n("584a").Array.from},ebd66:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var i=n("d225"),a=n("b0b4"),s=function(){function t(e,n){var a=n.drawType,s=void 0===a?"line":a,r=n.drawColor,o=void 0===r?"rgba(19, 206, 102, 1)":r,c=n.lineWidth,l=void 0===c?5:c,h=n.sides,u=void 0===h?3:h,p=n.allowCallback,d=n.moveCallback;Object(i["a"])(this,t),this.canvas=e,this.width=e.width,this.height=e.height,this.paint=e.getContext("2d"),this.isClickCanvas=!1,this.isMoveCanvas=!1,this.imgData=[],this.index=0,this.x=0,this.y=0,this.last=[this.x,this.y],this.drawType=s,this.drawColor=o,this.lineWidth=l,this.sides=u,this.allowCallback=p||function(){},this.moveCallback=d||function(){},this.bindMousemove=function(){},this.bindMousedown=function(){},this.bindMouseup=function(){},this.init()}return Object(a["a"])(t,[{key:"init",value:function(){this.paint.fillStyle="#fff",this.paint.fillRect(0,0,this.width,this.height),this.gatherImage(),this.bindMousemove=this.onmousemove.bind(this),this.bindMousedown=this.onmousedown.bind(this),this.bindMouseup=this.onmouseup.bind(this),this.canvas.addEventListener("mousedown",this.bindMousedown),document.addEventListener("mouseup",this.bindMouseup)}},{key:"onmousedown",value:function(t){this.isClickCanvas=!0,this.x=t.offsetX,this.y=t.offsetY,this.last=[this.x,this.y],this.canvas.addEventListener("mousemove",this.bindMousemove)}},{key:"gatherImage",value:function(){this.imgData=this.imgData.slice(0,this.index+1);var t=this.paint.getImageData(0,0,this.width,this.height);this.imgData.push(t),this.index=this.imgData.length-1,this.allowCallback(this.index>0,this.index<this.imgData.length-1)}},{key:"reSetImage",value:function(){this.paint.clearRect(0,0,this.width,this.height),this.imgData.length>=1&&this.paint.putImageData(this.imgData[this.index],0,0)}},{key:"onmousemove",value:function(t){this.isMoveCanvas=!0;var e=t.offsetX,n=t.offsetY,i=e-this.x,a=n-this.y,s=[e,n];switch(this.drawType){case"line":var r=[this.last,s,this.lineWidth,this.drawColor];this.moveCallback.apply(this,["line"].concat(r)),this.line.apply(this,r);break;case"rect":var o=[this.x,this.y,i,a,this.lineWidth,this.drawColor];this.moveCallback.apply(this,["rect"].concat(o)),this.rect.apply(this,o);break;case"polygon":var c=[this.x,this.y,this.sides,i,a,this.lineWidth,this.drawColor];this.moveCallback.apply(this,["polygon"].concat(c)),this.polygon.apply(this,c);break;case"arc":var l=[this.x,this.y,i,a,this.lineWidth,this.drawColor];this.moveCallback.apply(this,["arc"].concat(l)),this.arc.apply(this,l);break;case"eraser":var h=[e,n,this.width,this.height,this.lineWidth];this.moveCallback.apply(this,["eraser"].concat(h)),this.eraser.apply(this,h);break}}},{key:"onmouseup",value:function(){this.isClickCanvas&&(this.isClickCanvas=!1,this.canvas.removeEventListener("mousemove",this.bindMousemove),this.isMoveCanvas&&(this.isMoveCanvas=!1,this.moveCallback("gatherImage"),this.gatherImage()))}},{key:"line",value:function(t,e,n,i){this.paint.beginPath(),this.paint.lineCap="round",this.paint.lineJoin="round",this.paint.lineWidth=n,this.paint.strokeStyle=i,this.paint.moveTo(t[0],t[1]),this.paint.lineTo(e[0],e[1]),this.paint.closePath(),this.paint.stroke(),this.last=e}},{key:"rect",value:function(t,e,n,i,a,s){this.reSetImage(),this.paint.lineWidth=a,this.paint.strokeStyle=s,this.paint.strokeRect(t,e,n,i)}},{key:"polygon",value:function(t,e,n,i,a,s,r){this.reSetImage();var o=n,c=360/o,l=Math.sqrt(Math.pow(i,2)+Math.pow(a,2));this.paint.beginPath(),this.paint.strokeStyle=r,this.paint.lineWidth=s;for(var h=0;h<o;h++)this.paint.lineTo(t+Math.sin((h*c+45)*Math.PI/180)*l,e+Math.cos((h*c+45)*Math.PI/180)*l);this.paint.closePath(),this.paint.stroke()}},{key:"arc",value:function(t,e,n,i,a,s){this.reSetImage(),this.paint.beginPath(),this.paint.lineWidth=a;var r=Math.sqrt(Math.pow(n,2)+Math.pow(i,2));this.paint.arc(t,e,r,0,2*Math.PI,!1),this.paint.strokeStyle=s,this.paint.closePath(),this.paint.stroke()}},{key:"eraser",value:function(t,e,n,i,a){this.paint.save(),this.paint.beginPath(),this.paint.arc(t,e,a/2,0,2*Math.PI),this.paint.closePath(),this.paint.clip(),this.paint.clearRect(0,0,n,i),this.paint.fillStyle="#fff",this.paint.fillRect(0,0,n,i),this.paint.restore()}},{key:"cancel",value:function(){--this.index<0?this.index=0:(this.allowCallback(this.index>0,this.index<this.imgData.length-1),this.paint.putImageData(this.imgData[this.index],0,0))}},{key:"go",value:function(){++this.index>this.imgData.length-1?this.index=this.imgData.length-1:(this.allowCallback(this.index>0,this.index<this.imgData.length-1),this.paint.putImageData(this.imgData[this.index],0,0))}},{key:"clear",value:function(){this.imgData=[],this.paint.clearRect(0,0,this.width,this.height),this.paint.fillStyle="#fff",this.paint.fillRect(0,0,this.width,this.height),this.gatherImage()}},{key:"changeWay",value:function(t){var e=t.type,n=t.color,i=t.lineWidth,a=t.sides;this.drawType="color"!==e&&e||this.drawType,this.drawColor=n||this.drawColor,this.lineWidth=i||this.lineWidth,this.sides=a||this.sides}},{key:"destroy",value:function(){this.clear(),this.canvas.removeEventListener("mousedown",this.bindMousedown),document.removeEventListener("mouseup",this.bindMouseup),this.canvas=null,this.paint=null}}]),t}()},f410:function(t,e,n){n("1af6"),t.exports=n("584a").Array.isArray},f499:function(t,e,n){t.exports=n("a21f")}}]);