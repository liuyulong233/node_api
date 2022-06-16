const cheerio = require("cheerio");
const charset = require("superagent-charset");
const superagent = charset(require("superagent"));
var koa2Req = require('koa2-request');
//
async function getBannner(ctx){
  var res = await koa2Req('http://123.207.32.32:9001/banner');
  ctx.response.type = "application/json; charset=utf-8";
  ctx.body = res.body;
}
function getRecommendList() {
  return new Promise((resolve, reject) => {
    url = "https://y.qq.com/"; //target地址
    superagent
      .get(url)
      .charset("utf-8") // 当前页面编码格式
      .buffer(true)
      .end((err, data) => {
        //页面获取到的数据
        if (err) {
          // return next(err);
          reject();
          // console.log("页面不存在", err);
        }
        let html = data.text,
          $ = cheerio.load(html, {
            decodeEntities: false,
            ignoreWhitespace: false,
            xmlMode: false,
            lowerCaseTags: false,
          });
        //用cheerio解析页面数据
        //   $('script').map(function(i, el) {
        //     // 建议这里打印$(this) 因为this的对象可能不同
        //     //因为存在script标签为空的数据， 所以判断children长度是否大于0
        //     console.log(i,el,"ffffffffff", )
        //     //如果要获取script标签的属性， 例如 type
        //     });

        var str = $("script")[3].children[0].data;
        arr = "[" + str.split("window.__INITIAL_DATA__ =")[1] + "]";
        // console.log("----", typeof eval(arr));
        resolve();
        // cheerio的使用类似jquery的操作
        // $("table tbody").each((index, element) => {
        //   let $element = $(element);
        //   $element.find('#tctitle').next().find('a').addClass('link').attr('class', 'link').text('')
        //   arr.push({
        //     'title': $element.find('a.blue14b').text(),
        //     'image': $element.find('#bright img').attr('src'),
        //     'summary': $element.find('#tctitle').next().text(),
        //     'is_cgiia': $element.find('#tctitle font').attr('color') === 'green' ? 1 : 0
        //   })
        // })
      });
  });
}
function getRecommend(id) {
  return new Promise((resolve, reject) => {
    let url;
    if (id) {
      url = "https://y.qq.com/n/ryqq/playlist/" + id; //target地址
    } else {
      url = "https://y.qq.com/";
    }

    superagent
      .get(url)
      .charset("utf-8") // 当前页面编码格式
      .buffer(true)
      .end((err, data) => {
        //页面获取到的数据
        if (err) {
          // return next(err);
          reject();
          console.log("页面不存在", err);
        }
        let html = data.text,
          $ = cheerio.load(html, {
            decodeEntities: false,
            ignoreWhitespace: false,
            xmlMode: false,
            lowerCaseTags: false,
          });
        console.log($("script:not([src])[crossorigin!=anonymous] ").length);
        // var str = $("script")[5].children[0].data;
        var str=$("script[crossorigin!=anonymous]")[2].children[0].data
        var arr = "[" + str.split("window.__INITIAL_DATA__ =")[1] + "]";
        //
        resolve(arr);
      });
  });
}

function getSinger(id) {
  return new Promise((resolve, reject) => {
    if (id) {
      url = "https://y.qq.com/n/ryqq/singer/" + id; //target地址
    } else {
      url = "https://y.qq.com/n/ryqq/singer_list";
    }

    superagent
      .get(url)
      .charset("utf-8") // 当前页面编码格式
      .buffer(true)
      .end((err, data) => {
        //页面获取到的数据
        if (err) {
          // return next(err);
          reject();
          console.log("页面不存在", err);
        }
        let html = data.text,
          $ = cheerio.load(html, {
            decodeEntities: false,
            ignoreWhitespace: false,
            xmlMode: false,
            lowerCaseTags: false,
          });

        var str = $("script")[3].children[0].data;
        var arr = "[" + str.split("window.__INITIAL_DATA__ =")[1] + "]";
        console.log("----", typeof eval(arr));
        resolve(arr);
      });
  });
}
function getLyric(id) {
  return new Promise((resolve, reject) => {
    let url = `https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg?nobase64=0&musicid=${id}&format=json`;
    superagent
      //nobase64 0 base64 1 no; musicid songList id
      .get(url)

      .set("Content-Type", "application/json")
      .set("referer", "https://y.qq.com/")

      .set("Accept", "application/json")
      .end((err, data) => {
        if (err) {
          reject(err);
          return;
        }
        // console.log(data.text,url);
        resolve(data.text);
      });
  });
}
function getVkey(mid) {
  return new Promise((resolve, reject) => {
    let url = `https://u.y.qq.com/cgi-bin/musicu.fcg?sign=zzb5c8d1238erwvjruro3umcdspypwajwd8896ac6&data={"req":{"module":"vkey.GetVkeyServer","method":"CgiGetVkey","param":{"guid":"7469768631","songmid":["${mid}"],"songtype":[0],"uin":"1164153961","loginflag":1,"platform":"20"}}}`;
    superagent
      //nobase64 0 base64 1 no; musicid songList id
      .get(url)

      .set("Content-Type", "application/json")
      .set("referer", "https://y.qq.com/")

      .set("Accept", "application/json")
      .end((err, data) => {
        if (err) {
          reject(err);
          return;
        }
        // console.log(data.text,url);
        resolve(data.text);
      });
  });
}
module.exports = {
  getSinger,
  getRecommend,
  getLyric,
  getVkey,
  getBannner
};
