e = [];
function t(t) {
  for (var n, a, f = t[0], i = t[1], d = t[2], l = 0, s = []; l < f.length; l++)
    (a = f[l]),
      Object.prototype.hasOwnProperty.call(o, a) && o[a] && s.push(o[a][0]),
      (o[a] = 0);
  for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
  for (u && u(t); s.length; ) s.shift()();
  return c.push.apply(c, d || []), r();
}
function r() {
  for (var e, t = 0; t < c.length; t++) {
    for (var r = c[t], n = !0, a = 1; a < r.length; a++) {
      var i = r[a];
      0 !== o[i] && (n = !1);
    }
    n && (c.splice(t--, 1), (e = f((f.s = r[0]))));
  }
  return e;
}
var n = {},
  a = {
    18: 0,
  },
  o = {
    18: 0,
  },
  c = [];
function f(t) {
  if (n[t]) return n[t].exports;
  var r = (n[t] = {
    i: t,
    l: !1,
    exports: {},
  });
  return e[t].call(r.exports, r, r.exports, f), (r.l = !0), r.exports;
}
(f.e = function (e) {
  var t = [];
  a[e]
    ? t.push(a[e])
    : 0 !== a[e] &&
      {
        1: 1,
        3: 1,
        4: 1,
        5: 1,
        6: 1,
        7: 1,
        8: 1,
        9: 1,
        10: 1,
        11: 1,
        12: 1,
        13: 1,
        14: 1,
        15: 1,
        16: 1,
        17: 1,
        19: 1,
        20: 1,
        21: 1,
        22: 1,
        23: 1,
      }[e] &&
      t.push(
        (a[e] = new Promise(function (t, r) {
          for (
            var n =
                "css/" +
                ({
                  1: "common",
                  3: "album",
                  4: "albumDetail",
                  5: "album_mall",
                  6: "category",
                  7: "cmtpage",
                  8: "index",
                  9: "mv",
                  10: "mvList",
                  11: "mv_toplist",
                  12: "notfound",
                  13: "player",
                  14: "playlist",
                  15: "playlist_edit",
                  16: "profile",
                  17: "radio",
                  19: "search",
                  20: "singer",
                  21: "singer_list",
                  22: "songDetail",
                  23: "toplist",
                }[e] || e) +
                "." +
                {
                  1: "6ff702cf15da08d18639",
                  3: "5cf0d69eaf29bcab23d2",
                  4: "798353db5b0eb05d5358",
                  5: "df4c243f917604263e58",
                  6: "20d532d798099a44bc88",
                  7: "e3bedf2b5810f8db0684",
                  8: "ea0adb959fef9011fc25",
                  9: "8bdb1df6c5436b790baa",
                  10: "47ce9300786df1b70584",
                  11: "4aee33230ba2d6b81dce",
                  12: "e6f63b0cf57dd029fbd6",
                  13: "1d2dbefbea113438324a",
                  14: "9484fde660fe93d9f9f0",
                  15: "67fb85e7f96455763c83",
                  16: "5e8c651e74b13244f7cf",
                  17: "3befd83c10b19893ec66",
                  19: "b2d11f89ea6a512a2302",
                  20: "c7a38353c5f4ebb47491",
                  21: "df0961952a2d3f022894",
                  22: "4c080567e394fd45608b",
                  23: "8edb142553f97482e00f",
                }[e] +
                ".chunk.css?max_age=2592000",
              o = f.p + n,
              c = document.getElementsByTagName("link"),
              i = 0;
            i < c.length;
            i++
          ) {
            var d =
              (u = c[i]).getAttribute("data-href") || u.getAttribute("href");
            if ("stylesheet" === u.rel && (d === n || d === o)) return t();
          }
          var l = document.getElementsByTagName("style");
          for (i = 0; i < l.length; i++) {
            var u;
            if ((d = (u = l[i]).getAttribute("data-href")) === n || d === o)
              return t();
          }
          var s = document.createElement("link");
          (s.rel = "stylesheet"),
            (s.type = "text/css"),
            (s.onload = t),
            (s.onerror = function (t) {
              var n = (t && t.target && t.target.src) || o,
                c = new Error(
                  "Loading CSS chunk " + e + " failed.\n(" + n + ")"
                );
              (c.code = "CSS_CHUNK_LOAD_FAILED"),
                (c.request = n),
                delete a[e],
                s.parentNode.removeChild(s),
                r(c);
            }),
            (s.href = o),
            0 !== s.href.indexOf(window.location.origin + "/") &&
              (s.crossOrigin = "anonymous"),
            document.getElementsByTagName("head")[0].appendChild(s);
        }).then(function () {
          a[e] = 0;
        }))
      );
  var r = o[e];
  if (0 !== r)
    if (r) t.push(r[2]);
    else {
      var n = new Promise(function (t, n) {
        r = o[e] = [t, n];
      });
      t.push((r[2] = n));
      var c,
        i = document.createElement("script");
      (i.charset = "utf-8"),
        (i.timeout = 120),
        f.nc && i.setAttribute("nonce", f.nc),
        (i.src = (function (e) {
          return (
            f.p +
            "js/" +
            ({
              1: "common",
              3: "album",
              4: "albumDetail",
              5: "album_mall",
              6: "category",
              7: "cmtpage",
              8: "index",
              9: "mv",
              10: "mvList",
              11: "mv_toplist",
              12: "notfound",
              13: "player",
              14: "playlist",
              15: "playlist_edit",
              16: "profile",
              17: "radio",
              19: "search",
              20: "singer",
              21: "singer_list",
              22: "songDetail",
              23: "toplist",
            }[e] || e) +
            ".chunk." +
            {
              1: "ca3ae45a6a99b218de29",
              3: "313e5ada0818a904ac31",
              4: "031809cbb09f3ce785c2",
              5: "2ad4ccd3e17c85d9c848",
              6: "d7a1317ce0fa8e5992fd",
              7: "5f1575b515a149bc5ad2",
              8: "eeb9e10faa47aa0f9390",
              9: "25c570a456f0900c7182",
              10: "6f5ec0c318d553430d46",
              11: "600f6afb540f7b0de8e9",
              12: "0c8ee909e54228520f7e",
              13: "865c2bbc5b72a2ef6cc1",
              14: "5014897954073a5cc3d4",
              15: "13b5ecf30d0e84f384f8",
              16: "fc6e4e434949b1ff852a",
              17: "183f352cc4eb565187d9",
              19: "3904ee240fd63bb0e682",
              20: "4c15696667b0641e4858",
              21: "d5050c28074190ed89d0",
              22: "1fab709fbb7fd533a62b",
              23: "2d60a93760814c7c84d8",
            }[e] +
            ".js?max_age=2592000"
          );
        })(e)),
        0 !== i.src.indexOf(window.location.origin + "/") &&
          (i.crossOrigin = "anonymous");
      var d = new Error();
      c = function (t) {
        (i.onerror = i.onload = null), clearTimeout(l);
        var r = o[e];
        if (0 !== r) {
          if (r) {
            var n = t && ("load" === t.type ? "missing" : t.type),
              a = t && t.target && t.target.src;
            (d.message =
              "Loading chunk " + e + " failed.\n(" + n + ": " + a + ")"),
              (d.name = "ChunkLoadError"),
              (d.type = n),
              (d.request = a),
              r[1](d);
          }
          o[e] = void 0;
        }
      };
      var l = setTimeout(function () {
        c({
          type: "timeout",
          target: i,
        });
      }, 12e4);
      (i.onerror = i.onload = c), document.head.appendChild(i);
    }
  return Promise.all(t);
}),
  (f.m = e),
  (f.c = n),
  (f.d = function (e, t, r) {
    f.o(e, t) ||
      Object.defineProperty(e, t, {
        enumerable: !0,
        get: r,
      });
  }),
  (f.r = function (e) {
    "undefined" !== typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module",
      }),
      Object.defineProperty(e, "__esModule", {
        value: !0,
      });
  }),
  (f.t = function (e, t) {
    if ((1 & t && (e = f(e)), 8 & t)) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var r = Object.create(null);
    if (
      (f.r(r),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e,
      }),
      2 & t && "string" != typeof e)
    )
      for (var n in e)
        f.d(
          r,
          n,
          function (t) {
            return e[t];
          }.bind(null, n)
        );
    return r;
  }),
  (f.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return f.d(t, "a", t), t;
  }),
  (f.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }),
  (f.p = "/ryqq/"),
  (f.oe = function (e) {
    throw e;
  });
var i = (window.webpackJsonp = window.webpackJsonp || []),
  d = i.push.bind(i);
(i.push = t), (i = i.slice());
for (var l = 0; l < i.length; l++) t(i[l]);
var u = d;
r();
// console.log("e", e);
//    let str= f(350).default(JSON.stringify({"comm":{"cv":4747474,"ct":24,"format":"json","inCharset":"utf-8","outCharset":"utf-8","notice":0,"platform":"yqq.json","needNewCode":1,"uin":0,"g_tk_new_20200303":864740811,"g_tk":864740811},"req_1":{"module":"vkey.GetVkeyServer","method":"CgiGetVkey","param":{"guid":"1146863969","songmid":["000ZQA872y8YGq","000UlP8N2Vzgji","000LGiaQ1W4Hry","0015AOH12eUYVf","003B65C74Jt5ke","0015on7n2PA2BK"],"songtype":[0,0,0,0,0,0],"uin":"0","loginflag":1,"platform":"20"}},"req_2":{"module":"music.musicasset.SongFavRead","method":"IsSongFanByMid","param":{"v_songMid":["000ZQA872y8YGq","000UlP8N2Vzgji","000LGiaQ1W4Hry","0015AOH12eUYVf","003B65C74Jt5ke","0015on7n2PA2BK"]}},"req_3":{"method":"GetCommentCount","module":"GlobalComment.GlobalCommentReadServer","param":{"request_list":[{"biz_type":1,"biz_id":"340355938","biz_sub_type":0}]}},"req_4":{"module":"music.musichallAlbum.AlbumInfoServer","method":"GetAlbumDetail","param":{"albumMid":"000frdTJ0I4nID"}},"req_5":{"module":"vkey.GetVkeyServer","method":"CgiGetVkey","param":{"guid":"7443917284","songmid":["000ZQA872y8YGq"],"songtype":[0],"uin":"0","loginflag":1,"platform":"20"}}}))
  var obj={
    exports: {},
    i: 350,
    l: false,
  }
//   console.log(e[350].call(obj.exports, obj, obj.exports, f));

// e[350].call(obj.exports, obj, obj.exports, f)
// console.log('i',str);

//    f(15)
// console.log("i", sign("230946775", ["001yqgQR44OZKA"], "001kw5754RD8HF"));
// sign('340355938',['000ZQA872y8YGq'],'000frdTJ0I4nID')
function sign(biz_id, songmid = [], albumMid) {
    let obj={}
   obj.data = {
    comm: {
      cv: 4747474,
      ct: 24,
      format: "json",
      inCharset: "utf-8",
      outCharset: "utf-8",
      notice: 0,
      platform: "yqq.json",
      needNewCode: 1,
      uin: 0,
      g_tk_new_20200303: 864740811,
      g_tk: 864740811,
    },
    req_1: {
      method: "GetCommentCount",
      module: "GlobalComment.GlobalCommentReadServer",
      param: {
        request_list: [{ biz_type: 1, biz_id: "336319085", biz_sub_type: 0 }],
      },
    },
    req_2: {
      module: "music.musichallAlbum.AlbumInfoServer",
      method: "GetAlbumDetail",
      param: { albumMid: "000epHqA0reuR3" },
    },
    req_3: {
      module: "vkey.GetVkeyServer",
      method: "CgiGetVkey",
      param: {
        guid: guid(),
        songmid: ["00181aBt4ZowXa"],
        songtype: [0],
        uin: "0",
        loginflag: 1,
        platform: "20",
      },
    },
  }
  obj.data=JSON.stringify(obj.data)
  console.log(obj.data);
  
  return f(350).default(obj.data);
}
function  guid (){
    let a = new Date().getUTCMilliseconds();
    a = String((Math.round(2147483647 * Math.random()) * a) % 1e10)
    return a
}
s=f(350).default('{"comm":{"cv":4747474,"ct":24,"format":"json","inCharset":"utf-8","outCharset":"utf-8","notice":0,"platform":"yqq.json","needNewCode":1,"uin":0,"g_tk_new_20200303":864740811,"g_tk":864740811},"req_1":{"method":"GetCommentCount","module":"GlobalComment.GlobalCommentReadServer","param":{"request_list":[{"biz_type":1,"biz_id":"229103825","biz_sub_type":0}]}},"req_2":{"module":"music.musichallAlbum.AlbumInfoServer","method":"GetAlbumDetail","param":{"albumMid":"000Vwygr4Y8BPi"}},"req_3":{"module":"vkey.GetVkeyServer","method":"CgiGetVkey","param":{"guid":"7044940405","songmid":["000DwlYJ09mLoO"],"songtype":[0],"uin":"0","loginflag":1,"platform":"20"}}}')
console.log('sign',s,encodeURIComponent(s));
