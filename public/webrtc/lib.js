// 判断是否有 navigator.mediaDevices，没有赋成空对象
if (navigator.mediaDevices === undefined) {
  navigator.mediaDevices = {};
}

// 继续判断是否有 navigator.mediaDevices.getUserMedia，没有就采用 navigator.getUserMedia
if (!navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia = function (prams) {
    let getUserMedia =
      navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    // 兼容获取
    if (!getUserMedia) {
      return Promise.reject(
        new Error("getUserMedia is not implemented in this browser")
      );
    }
    return new Promise(function (resolve, reject) {
      getUserMedia.call(navigator, prams, resolve, reject);
    });
  };
}
function getUserMedia(constraints={ audio: false, video: true }) {
  return navigator.mediaDevices
    .getUserMedia(constraints)
    // .then((stream) => {
    //   let video = document.querySelector("#Rtc");
    //   if ("srcObject" in video) {
    //     // 判断是否支持 srcObject 属性
    //     video.srcObject = stream;
    //   } else {
    //     video.src = window.URL.createObjectURL(stream);
    //   }
    //   video.onloadedmetadata = function (e) {
    //     video.play();
    //   };
    // })
    // .catch((err) => {
    //   // 捕获错误
    //   console.error(err.name + ": " + err.message);
    // });
}
