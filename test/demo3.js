(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    390: function (e, t, n) {
      "use strict";
      var a = n(2),
        r = n.n(a),
        i = n(361),
        o = n.n(i),
        c = n(362),
        s = n.n(c),
        l = n(363),
        u = n.n(l),
        m = n(364),
        d = n.n(m),
        p = n(365),
        f = n.n(p),
        _ = n(3),
        h = n.n(_),
        g = n(109),
        v = n.n(g),
        y = n(366),
        b = n.n(y);
      n(492), n(473);
      function E(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? E(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : E(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function N(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = f()(e);
          if (t) {
            var r = f()(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return d()(this, n);
        };
      }
      var k = { time: 2e3, type: "success" },
        x = (function (e) {
          u()(n, e);
          var t = N(n);
          function n() {
            var e, a;
            o()(this, n);
            for (var r = arguments.length, i = new Array(r), c = 0; c < r; c++)
              i[c] = arguments[c];
            return d()(
              a,
              ((e = a = t.call.apply(t, [this].concat(i))),
              (a.state = {
                left: "-100%",
                top: "-100%",
                marginLeft: "0px",
                marginTop: "0px",
              }),
              e)
            );
          }
          return (
            s()(n, [
              {
                key: "componentDidMount",
                value: function () {
                  var e,
                    t,
                    n =
                      (null === (e = this.elment) || void 0 === e
                        ? void 0
                        : e.offsetHeight) || 0,
                    a =
                      (null === (t = this.elment) || void 0 === t
                        ? void 0
                        : t.offsetWidth) || 0;
                  this.setState({
                    left: null,
                    top: null,
                    marginTop: "-".concat(n / 2, "px"),
                    marginLeft: "-".concat(a / 2, "px"),
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state,
                    n = t.left,
                    a = t.top,
                    r = t.marginLeft,
                    i = t.marginTop,
                    o = this.props,
                    c = o.msg,
                    s = o.type;
                  return h.a.createElement(
                    "div",
                    {
                      ref: function (t) {
                        e.elment = t;
                      },
                      className: "mod_popup_tips",
                      id: "popup",
                      style: {
                        zIndex: 2147483647,
                        left: n,
                        top: a,
                        marginLeft: r,
                        marginTop: i,
                      },
                    },
                    h.a.createElement("i", {
                      className: b()({
                        popup_tips__icon: !0,
                        popup_tips__icon_success: "success" === s,
                        popup_tips__icon_warning: "warning" === s,
                      }),
                    }),
                    h.a.createElement("h2", { className: "popup_tips__tit" }, c)
                  );
                },
              },
            ]),
            n
          );
        })(_.Component);
      t.a = {
        show: function (e) {
          var t;
          t = w(w({}, k), "string" === typeof e ? { msg: e } : e);
          var n = document.createElement("div");
          document.body.appendChild(n),
            v.a.render(h.a.createElement(x, t), n),
            setTimeout(function () {
              n && (v.a.unmountComponentAtNode(n), n.parentNode.removeChild(n));
            }, t.time);
        },
      };
    },
    391: function (e, t, n) {
      "use strict";
      var a = n(2),
        r = n.n(a),
        i = n(15),
        o = n(426),
        c = n(108),
        s = n.n(c),
        l = n(76),
        u = n.n(l),
        m = n(428),
        d = n(449),
        p = {},
        f = (function () {
          var e = s()(
            u.a.mark(function e() {
              var t,
                n,
                a,
                r = arguments;
              return u.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((t = !(r.length > 0 && void 0 !== r[0]) || r[0]),
                        !((n = Object(m.a)()) < 1e4))
                      ) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        Promise.reject("\u672a\u767b\u5f55")
                      );
                    case 4:
                      if (!t) {
                        e.next = 8;
                        break;
                      }
                      if (!(a = p[n])) {
                        e.next = 8;
                        break;
                      }
                      return e.abrupt("return", a);
                    case 8:
                      return e.abrupt(
                        "return",
                        Object(i.h)({ data: {} })
                          .request([
                            {
                              module: "userInfo.VipQueryServer",
                              method: "SRFVipQuery_V2",
                              param: { uin_list: ["".concat(n)] },
                            },
                            {
                              module: "userInfo.BaseUserInfoServer",
                              method: "get_user_baseinfo_v2",
                              param: { vec_uin: ["".concat(n)] },
                            },
                          ])
                          .then(function (e) {
                            if (e[0] && e[1]) {
                              if (
                                ((p[n] = {}),
                                0 === e[0].code &&
                                  e[0].data &&
                                  e[0].data.infoMap)
                              )
                                p[n].vip = e[0].data.infoMap[n];
                              else if (1e3 === e[0].code)
                                return Object(d.a)(), void (p[n] = null);
                              return (
                                0 === e[1].code &&
                                  e[1].data &&
                                  e[1].data.map_userinfo &&
                                  (p[n].base = e[1].data.map_userinfo[n]),
                                p[n]
                              );
                            }
                            return null;
                          })
                          .catch(function (e) {
                            return null;
                          })
                      );
                    case 9:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        _ = function (e, t) {
          var n,
            a = "vip";
          switch (t) {
            case 1:
              (a = "pay"),
                (n = "sui".concat((e && e.FfbLevel) || "1")),
                e && 1 === e.ieight
                  ? ((n = "".concat(1 === e.itwelve ? "s" : "").concat(n)),
                    1 === e.Ffbyear &&
                      e.FfbLevel > 0 &&
                      (n = "".concat(1 === e.itwelve ? "y" : "n").concat(n)))
                  : (n = "d-".concat(n));
              break;
            default:
              (a = "vip"),
                (n = "vip".concat((e && e.iCurLevel) || "1")),
                (n =
                  e && 1 === e.iVipFlag
                    ? ""
                        .concat(
                          (1 === e.iYearFlag && e.iCurLevel > 0 ? "n" : "") +
                            (1 === e.iSuperVip ? "s" : "")
                        )
                        .concat(n)
                    : "d-".concat(n));
          }
          return "//y.qq.com/mediastyle/lv-icon/v10/"
            .concat(a, "/2x/")
            .concat(n, ".png?max_age=2592000");
        },
        h = n(471),
        g = function () {
          Object(d.a)(), window.location.reload();
        },
        v = n(421),
        y = n(437),
        b = n(472),
        E = n(468);
      function w(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? w(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : w(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var k = N(
        N({}, i.i),
        {},
        {
          isVip: function () {
            var e = Object(m.a)(),
              t = p[e],
              n = (null === t || void 0 === t ? void 0 : t.vip) || {},
              a = n.iVipFlag,
              r = n.iSuperVip,
              i = n.ieight,
              o = n.itwelve;
            return !!(a || r || i || o);
          },
          openLogin: o.a,
          getVipInfo: f,
          getVipLogo: _,
          verifyIp: h.a,
          loginOut: g,
          isWeiXin: v.a,
          getUin: m.a,
          isLogin: y.a,
          getMusickey: b.a,
          minipay: E,
        }
      );
      t.a = k;
    },
    392: function (e, t, n) {
      "use strict";
      var a = n(3),
        r = n.n(a),
        i = n(431),
        o =
          (n(490),
          function () {
            var e = function (e) {
              Object(i.b)(e);
            };
            return r.a.createElement(
              "div",
              { className: "footer", role: "footer" },
              r.a.createElement(
                "div",
                { className: "section_inner" },
                r.a.createElement(
                  "div",
                  { className: "footer_info" },
                  r.a.createElement(
                    "div",
                    { className: "footer_download" },
                    r.a.createElement(
                      "h3",
                      { className: "footer_tit" },
                      "\u4e0b\u8f7dQQ\u97f3\u4e50\u5ba2\u6237\u7aef"
                    ),
                    r.a.createElement(
                      "ul",
                      { className: "footer_download_list" },
                      r.a.createElement(
                        "li",
                        { className: "footer_download_list__item" },
                        r.a.createElement(
                          "a",
                          {
                            className: "js_footer_down",
                            "data-type": "pc",
                            "data-stat": "y_new.footer.download.pc",
                            onClick: e.bind(null, i.a.PC),
                          },
                          r.a.createElement(
                            "i",
                            { className: "icon_qm_pc" },
                            r.a.createElement(
                              "span",
                              { className: "icon_txt" },
                              "QQ\u97f3\u4e50"
                            )
                          ),
                          "PC\u7248"
                        )
                      ),
                      r.a.createElement(
                        "li",
                        { className: "footer_download_list__item" },
                        r.a.createElement(
                          "a",
                          {
                            className: "js_footer_down",
                            "data-type": "mac",
                            "data-stat": "y_new.footer.download.mac",
                            onClick: e.bind(null, i.a.MAC),
                          },
                          r.a.createElement(
                            "i",
                            { className: "icon_qm_mac" },
                            r.a.createElement(
                              "span",
                              { className: "icon_txt" },
                              "QQ\u97f3\u4e50"
                            )
                          ),
                          "Mac\u7248"
                        )
                      ),
                      r.a.createElement(
                        "li",
                        { className: "footer_download_list__item" },
                        r.a.createElement(
                          "a",
                          {
                            className: "js_footer_down",
                            "data-type": "andriod",
                            "data-stat": "y_new.footer.download.andriod",
                            onClick: e.bind(null, i.a.ANDROID),
                          },
                          r.a.createElement(
                            "i",
                            { className: "icon_qm_android" },
                            r.a.createElement(
                              "span",
                              { className: "icon_txt" },
                              "QQ\u97f3\u4e50"
                            )
                          ),
                          "Android\u7248"
                        )
                      ),
                      r.a.createElement(
                        "li",
                        { className: "footer_download_list__item" },
                        r.a.createElement(
                          "a",
                          {
                            className: "js_footer_down",
                            "data-type": "iphone",
                            "data-stat": "y_new.footer.download.iphone",
                            onClick: e.bind(null, i.a.IPHONE),
                          },
                          r.a.createElement(
                            "i",
                            { className: "icon_qm_iphone" },
                            r.a.createElement(
                              "span",
                              { className: "icon_txt" },
                              "QQ\u97f3\u4e50"
                            )
                          ),
                          "iPhone\u7248"
                        )
                      )
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "footer_product" },
                    r.a.createElement(
                      "h3",
                      { className: "footer_tit" },
                      "\u7279\u8272\u4ea7\u54c1"
                    ),
                    r.a.createElement(
                      "ul",
                      { className: "footer_product_list" },
                      r.a.createElement(
                        "li",
                        {
                          className:
                            "footer_product_list__item footer_product_list__item--pic",
                        },
                        r.a.createElement(
                          "a",
                          {
                            href: "http://kg.qq.com/?pgv_ref=qqmusic.y.topmenu",
                            rel: "noopener noreferrer",
                            target: "_blank",
                            className: "js_other_link",
                            "data-stat": "y_new.footer.other_music.k",
                          },
                          r.a.createElement("i", { className: "icon_qm_kg" }),
                          "\u5168\u6c11K\u6b4c"
                        )
                      ),
                      r.a.createElement(
                        "li",
                        {
                          className:
                            "footer_product_list__item footer_product_list__item--pic",
                        },
                        r.a.createElement(
                          "a",
                          {
                            href: "http://y.qq.com/vip/voice_intro/index.html",
                            rel: "noopener noreferrer",
                            target: "_blank",
                            className: "js_other_link",
                            "data-stat": "y_new.footer.other_music.supersound",
                          },
                          r.a.createElement("i", { className: "icon_qm_ss" }),
                          "\u94f6\u6cb3\u97f3\u6548"
                        )
                      ),
                      r.a.createElement(
                        "li",
                        {
                          className:
                            "footer_product_list__item footer_product_list__item--pic",
                        },
                        r.a.createElement(
                          "a",
                          {
                            href: "http://y.qq.com/y/static/down/qplay.html?pgv_ref=qqmusic.y.topmenu",
                            rel: "noopener noreferrer",
                            target: "_blank",
                            className: "js_other_link",
                            "data-stat": "y_new.footer.other_music.qplay",
                          },
                          r.a.createElement("i", { className: "icon_qm_qp" }),
                          "QPlay"
                        )
                      ),
                      r.a.createElement(
                        "li",
                        {
                          className:
                            "footer_product_list__item footer_product_list__item--pic",
                        },
                        r.a.createElement(
                          "a",
                          {
                            className: "js_footer_down",
                            "data-type": "fanlive",
                            "data-stat": "y_new.footer.download.fanlive",
                            onClick: e.bind(null, i.a.FANLIVE),
                          },
                          r.a.createElement("i", { className: "icon_qm_fan" }),
                          "Fan\u76f4\u64ad\u4f34\u4fa3"
                        )
                      ),
                      r.a.createElement(
                        "li",
                        { className: "footer_product_list__item" },
                        r.a.createElement(
                          "a",
                          {
                            href: "http://y.qq.com/y/static/down/car_introduce.html",
                            rel: "noopener noreferrer",
                            target: "_blank",
                            className: "js_other_link",
                            "data-stat": "y_new.footer.other_music.car_play",
                          },
                          "\u8f66\u8f7d\u4e92\u8054"
                        )
                      ),
                      r.a.createElement(
                        "li",
                        { className: "footer_product_list__item" },
                        r.a.createElement(
                          "a",
                          {
                            href: "http://y.qq.com/yanchu/?pgv_ref=qqmusic.y.topmenu",
                            rel: "noopener noreferrer",
                            target: "_blank",
                            className: "js_other_link",
                            "data-stat": "y_new.footer.other_music.yanchu",
                          },
                          "QQ\u6f14\u51fa"
                        )
                      )
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "footer_group" },
                    r.a.createElement(
                      "h3",
                      { className: "footer_tit" },
                      "TME\u96c6\u56e2\u5b98\u7f51"
                    ),
                    r.a.createElement(
                      "ul",
                      { className: "footer_group_list" },
                      r.a.createElement(
                        "li",
                        { className: "footer_platform_list__item" },
                        r.a.createElement(
                          "a",
                          {
                            href: "https://www.tencentmusic.com/",
                            target: "_blank",
                            className: "js_other_link",
                            rel: "noopener noreferrer",
                            "data-stat": "y_new.footer.other_music.thetme",
                          },
                          "\u817e\u8baf\u97f3\u4e50"
                        )
                      )
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "footer_link" },
                    r.a.createElement(
                      "h3",
                      { className: "footer_tit" },
                      "\u5408\u4f5c\u94fe\u63a5"
                    ),
                    r.a.createElement(
                      "ul",
                      { className: "footer_link_list" },
                      r.a.createElement(
                        "li",
                        { className: "footer_link_list__item" },
                        r.a.createElement(
                          "a",
                          {
                            href: "//y.qq.com/portal/company_detail.html?id=297",
                            rel: "noopener noreferrer",
                            target: "_blank",
                            className: "js_other_link",
                            "data-stat": "y_new.footer.other_link",
                          },
                          "CJ ENM"
                        )
                      ),
                      r.a.createElement(
                        "li",
                        { className: "footer_link_list__item" },
                        r.a.createElement(
                          "a",
                          {
                            href: "http://v.qq.com/",
                            rel: "noopener noreferrer",
                            target: "_blank",
                            className: "js_other_link",
                            "data-stat": "y_new.footer.other_link",
                          },
                          "\u817e\u8baf\u89c6\u9891"
                        )
                      ),
                      r.a.createElement(
                        "li",
                        { className: "footer_link_list__item" },
                        r.a.createElement(
                          "a",
                          {
                            href: "http://z.qzone.com/",
                            rel: "noopener noreferrer",
                            target: "_blank",
                            className: "js_other_link",
                            "data-stat": "y_new.footer.other_link",
                          },
                          "\u624b\u673aQQ\u7a7a\u95f4"
                        )
                      ),
                      r.a.createElement(
                        "li",
                        { className: "footer_link_list__item" },
                        r.a.createElement(
                          "a",
                          {
                            href: "http://im.qq.com/",
                            rel: "noopener noreferrer",
                            target: "_blank",
                            className: "js_other_link",
                            "data-stat": "y_new.footer.other_link",
                          },
                          "\u6700\u65b0\u7248QQ"
                        )
                      ),
                      r.a.createElement(
                        "li",
                        { className: "footer_link_list__item" },
                        r.a.createElement(
                          "a",
                          {
                            href: "http://e.qq.com/index.shtml",
                            rel: "noopener noreferrer",
                            target: "_blank",
                            className: "js_other_link",
                            "data-stat": "y_new.footer.other_link",
                          },
                          "\u817e\u8baf\u793e\u4ea4\u5e7f\u544a"
                        )
                      ),
                      r.a.createElement(
                        "li",
                        { className: "footer_link_list__item" },
                        r.a.createElement(
                          "a",
                          {
                            href: "http://guanjia.qq.com/",
                            rel: "noopener noreferrer",
                            target: "_blank",
                            className: "js_other_link",
                            "data-stat": "y_new.footer.other_link",
                          },
                          "\u7535\u8111\u7ba1\u5bb6"
                        )
                      ),
                      r.a.createElement(
                        "li",
                        { className: "footer_link_list__item" },
                        r.a.createElement(
                          "a",
                          {
                            href: "http://browser.qq.com/",
                            rel: "noopener noreferrer",
                            target: "_blank",
                            className: "js_other_link",
                            "data-stat": "y_new.footer.other_link",
                          },
                          "QQ\u6d4f\u89c8\u5668"
                        )
                      ),
                      r.a.createElement(
                        "li",
                        { className: "footer_link_list__item" },
                        r.a.createElement(
                          "a",
                          {
                            href: "http://www.weiyun.com/",
                            rel: "noopener noreferrer",
                            target: "_blank",
                            className: "js_other_link",
                            "data-stat": "y_new.footer.other_link",
                          },
                          "\u817e\u8baf\u5fae\u4e91"
                        )
                      ),
                      r.a.createElement(
                        "li",
                        { className: "footer_link_list__item" },
                        r.a.createElement(
                          "a",
                          {
                            href: "https://cloud.tencent.com/?fromSource=gwzcw.756433.756433.756433",
                            rel: "noopener noreferrer",
                            target: "_blank",
                            className: "js_other_link",
                            "data-stat": "y_new.footer.other_link",
                          },
                          "\u817e\u8baf\u4e91"
                        )
                      ),
                      r.a.createElement(
                        "li",
                        { className: "footer_link_list__item" },
                        r.a.createElement(
                          "a",
                          {
                            href: "http://fm.qq.com/",
                            rel: "noopener noreferrer",
                            target: "_blank",
                            className: "js_other_link",
                            "data-stat": "y_new.footer.other_link",
                          },
                          "\u4f01\u9e45FM"
                        )
                      ),
                      r.a.createElement(
                        "li",
                        { className: "footer_link_list__item" },
                        r.a.createElement(
                          "a",
                          {
                            href: "http://www.znds.com/",
                            rel: "noopener noreferrer",
                            target: "_blank",
                            className: "js_other_link",
                            "data-stat": "y_new.footer.other_link",
                          },
                          "\u667a\u80fd\u7535\u89c6\u7f51"
                        )
                      ),
                      r.a.createElement(
                        "li",
                        { className: "footer_link_list__item" },
                        r.a.createElement(
                          "a",
                          {
                            href: "http://www.dangbei.com/",
                            rel: "noopener noreferrer",
                            target: "_blank",
                            className: "js_other_link",
                            "data-stat": "y_new.footer.other_link",
                          },
                          "\u5f53\u8d1d\u5e02\u573a"
                        )
                      ),
                      r.a.createElement(
                        "li",
                        { className: "footer_link_list__item" },
                        r.a.createElement(
                          "a",
                          {
                            href: "https://www.kuwo.cn/",
                            rel: "noopener noreferrer",
                            target: "_blank",
                            className: "js_other_link",
                            "data-stat": "y_new.footer.other_link",
                          },
                          "\u9177\u6211\u97f3\u4e50"
                        )
                      ),
                      r.a.createElement(
                        "li",
                        { className: "footer_link_list__item" },
                        r.a.createElement(
                          "a",
                          {
                            href: "https://www.kugou.com/ts/",
                            rel: "noopener noreferrer",
                            target: "_blank",
                            className: "js_other_link",
                            "data-stat": "y_new.footer.other_link",
                          },
                          "\u9177\u72d7\u542c\u4e66"
                        )
                      )
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "footer_platform" },
                    r.a.createElement(
                      "h3",
                      { className: "footer_tit" },
                      "\u5f00\u653e\u5e73\u53f0"
                    ),
                    r.a.createElement(
                      "ul",
                      { className: "footer_platform_list" },
                      r.a.createElement(
                        "li",
                        { className: "footer_platform_list__item" },
                        r.a.createElement(
                          "a",
                          {
                            href: "//y.qq.com/artists",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "js_other_link",
                            "data-stat": "y_new.footer.other_music.artists",
                          },
                          "QQ\u97f3\u4e50\u5f00\u653e\u5e73\u53f0"
                        )
                      ),
                      r.a.createElement(
                        "li",
                        { className: "footer_platform_list__item" },
                        r.a.createElement(
                          "a",
                          {
                            href: "http://y.tencentmusic.com/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "js_other_link",
                            "data-stat": "y_new.footer.other_music.tme",
                          },
                          "\u817e\u8baf\u97f3\u4e50\u4eba"
                        )
                      ),
                      r.a.createElement(
                        "li",
                        { className: "footer_platform_list__item" },
                        r.a.createElement(
                          "a",
                          {
                            href: "https://y.qq.com/tmead/promotion-pc/?ad_tag=ad_musicpromotion_pc_qqwebsite",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "js_other_link",
                          },
                          "\u97f3\u4e50\u63a8"
                        )
                      )
                    )
                  )
                ),
                r.a.createElement(
                  "div",
                  { className: "footer_copyright" },
                  r.a.createElement(
                    "p",
                    null,
                    r.a.createElement(
                      "a",
                      {
                        href: "http://www.tencent.com/",
                        rel: "noopener noreferrer",
                        target: "_blank",
                        title: "\u5173\u4e8e\u817e\u8baf",
                      },
                      "\u5173\u4e8e\u817e\u8baf"
                    ),
                    " ",
                    "|",
                    r.a.createElement(
                      "a",
                      {
                        href: "http://www.tencent.com/index_e.shtml",
                        rel: "noopener noreferrer",
                        target: "_blank",
                        title: "About Tencent",
                      },
                      "About Tencent"
                    ),
                    " ",
                    "|",
                    r.a.createElement(
                      "a",
                      {
                        href: "http://www.qq.com/contract.shtml",
                        rel: "noopener noreferrer",
                        target: "_blank",
                        title: "\u670d\u52a1\u6761\u6b3e",
                      },
                      "\u670d\u52a1\u6761\u6b3e"
                    ),
                    " ",
                    "|",
                    r.a.createElement(
                      "a",
                      {
                        href: "http://y.qq.com/y/static/tips/service_tips.html",
                        rel: "noopener noreferrer",
                        target: "_blank",
                        title: "\u7528\u6237\u670d\u52a1\u534f\u8bae",
                      },
                      "\u7528\u6237\u670d\u52a1\u534f\u8bae"
                    ),
                    " ",
                    "|",
                    r.a.createElement(
                      "a",
                      {
                        href: "https://y.qq.com/m/client/intro/privacy.html",
                        rel: "noopener noreferrer",
                        target: "_blank",
                        title: "\u9690\u79c1\u653f\u7b56",
                      },
                      "\u9690\u79c1\u653f\u7b56"
                    ),
                    " ",
                    "|",
                    r.a.createElement(
                      "a",
                      {
                        href: "https://y.qq.com/vip/right_declare/index.html",
                        rel: "noopener noreferrer",
                        target: "_blank",
                        title: "\u6743\u5229\u58f0\u660e",
                      },
                      "\u6743\u5229\u58f0\u660e"
                    ),
                    " ",
                    "|",
                    r.a.createElement(
                      "a",
                      {
                        href: "http://www.tencentmind.com/",
                        rel: "noopener noreferrer",
                        target: "_blank",
                        title: "\u5e7f\u544a\u670d\u52a1",
                      },
                      "\u5e7f\u544a\u670d\u52a1"
                    ),
                    " ",
                    "|",
                    r.a.createElement(
                      "a",
                      {
                        href: "http://hr.tencent.com/",
                        rel: "noopener noreferrer",
                        target: "_blank",
                        title: "\u817e\u8baf\u62db\u8058",
                      },
                      "\u817e\u8baf\u62db\u8058"
                    ),
                    " ",
                    "|",
                    r.a.createElement(
                      "a",
                      {
                        href: "https://y.qq.com/m/client/helper/pc.html",
                        rel: "noopener noreferrer",
                        target: "_blank",
                        title: "\u5ba2\u670d\u4e2d\u5fc3",
                      },
                      "\u5ba2\u670d\u4e2d\u5fc3"
                    ),
                    " ",
                    "|",
                    r.a.createElement(
                      "a",
                      {
                        href: "http://www.qq.com/map/",
                        rel: "noopener noreferrer",
                        target: "_blank",
                        title: "\u7f51\u7ad9\u5bfc\u822a",
                      },
                      "\u7f51\u7ad9\u5bfc\u822a"
                    )
                  ),
                  r.a.createElement(
                    "p",
                    null,
                    "Copyright \xa9 1998 - ",
                    new Date().getFullYear(),
                    " Tencent.",
                    " ",
                    r.a.createElement(
                      "a",
                      {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: "http://www.tencent.com/en-us/le/copyrightstatement.shtml",
                        title: "All Rights Reserved.",
                      },
                      "All Rights Reserved."
                    )
                  ),
                  r.a.createElement(
                    "p",
                    null,
                    "\u817e\u8baf\u516c\u53f8",
                    " ",
                    r.a.createElement(
                      "a",
                      {
                        target: "_blank",
                        href: "http://www.tencent.com/zh-cn/le/copyrightstatement.shtml",
                        rel: "noopener noreferrer",
                        title: "\u7248\u6743\u6240\u6709",
                      },
                      "\u7248\u6743\u6240\u6709"
                    ),
                    "\uff5c",
                    r.a.createElement(
                      "a",
                      {
                        target: "_blank",
                        href: "https://y.qq.com/music/common/upload/t_cm3_photo_publish/4055034.jpg",
                        rel: "noopener noreferrer",
                        title: "\u8425\u4e1a\u6267\u7167",
                      },
                      "\u8425\u4e1a\u6267\u7167"
                    ),
                    "\uff5c",
                    "\u7f51\u7edc\u6587\u5316\u7ecf\u8425\u8bb8\u53ef\u8bc1\uff1a",
                    r.a.createElement(
                      "a",
                      {
                        target: "_blank",
                        href: "https://y.qq.com/music/common/upload/t_cm3_photo_publish/4043272.jpg",
                        rel: "noopener noreferrer",
                        title: "\u7ca4\u7f51\u6587[2020]3396-195\u53f7",
                      },
                      "\u7ca4\u7f51\u6587[2020]3396-195\u53f7"
                    ),
                    "\uff5c",
                    "\u5ba2\u670d\u7535\u8bdd\uff1a",
                    r.a.createElement(
                      "a",
                      {
                        href: "tel:4001699111",
                        title: "\u5ba2\u670d\u7535\u8bdd",
                      },
                      "4001699111"
                    )
                  )
                )
              )
            );
          });
      t.a = r.a.memo(o);
    },
    393: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return _;
      }),
        n.d(t, "a", function () {
          return p;
        }),
        n.d(t, "b", function () {
          return h;
        });
      var a = n(78),
        r = n.n(a),
        i = n(15),
        o = n(16),
        c = n(405),
        s = n(410),
        l = n(391),
        u = n(475),
        m = n(406),
        d = function () {
          var e = "",
            t = window.navigator.userAgent.match(
              /Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/
            );
          t
            ? (e =
                parseFloat(t[1] || "") > 11.999
                  ? "1.\u542f\u52a8Safari\u6d4f\u89c8\u5668\u540e\uff0c\u5355\u51fb\u300eSafari\u300f\u83dc\u5355\u4e2d\u7684\u300e\u504f\u597d\u8bbe\u7f6e\u300f\uff1b2.\u5355\u51fb\u300e\u7f51\u7ad9\u300f\u9009\u9879\u5361\uff1b3.\u5728\u5de6\u4fa7\u7684\u300e\u901a\u7528\u300f\u5217\u8868\u4e2d\uff0c\u9009\u62e9\u300e\u5f39\u51fa\u5f0f\u7a97\u53e3\u300f\uff1b4.\u5728\u53f3\u4fa7\u7684\u300e\u5f53\u524d\u6253\u5f00\u7684\u7f51\u7ad9\u300f\u7684\u5217\u8868\u4e2d\u627e\u5230y.qq.com\uff0c\u4ece\u53f3\u8fb9\u7684\u4e0b\u62c9\u5217\u8868\u4e2d\u9009\u62e9\u300e\u5141\u8bb8\u300f\uff1b5.\u5355\u51fb\u5de6\u4e0a\u89d2\u7684\u300e\u5173\u95ed\u300f\u6309\u94ae"
                  : "1.\u542f\u52a8Safari\u6d4f\u89c8\u5668\u540e\uff0c\u5355\u51fb\u300eSafari\u300f\u83dc\u5355\u4e2d\u7684\u300e\u504f\u597d\u8bbe\u7f6e\u300f\uff1b2.\u5728\u5f39\u51fa\u7684\u300e\u901a\u7528\u300f\u7a97\u53e3\u4e2d\uff0c\u5355\u51fb\u300e\u5b89\u5168\u6027\u300f\u9009\u9879\u5361\uff1b3.\u5728\u300e\u5b89\u5168\u6027\u300f\u7a97\u53e3\u4e2d\uff0c\u52fe\u9009\u300e\u963b\u6b62\u5f39\u51fa\u5f0f\u7a97\u53e3\u300f\uff0c\u7136\u540e\u53d6\u6d88\u52fe\u9009\u300e\u5141\u8bb8WebGL\u300f\u548c\u300e\u5141\u8bb8\u63d2\u4ef6\u300f\uff1b4.\u5355\u51fb\u5de6\u4e0a\u89d2\u7684\u300e\u5173\u95ed\u300f\u6309\u94ae\uff0c\u5173\u95ed\u5b89\u5168\u6027\u7a97\u53e3")
            : (e =
                "\u8bbe\u7f6e->\u9ad8\u7ea7->\u9690\u79c1\u8bbe\u7f6e\u548c\u5b89\u5168\u6027->\u5185\u5bb9\u8bbe\u7f6e->\u5f39\u51fa\u7a97\u53e3->\u5141\u8bb8\u672c\u7f51\u7ad9\u7684\u5f39\u51fa\u5f0f\u7a97\u53e3");
          var n = Object(c.b)({
            subtit:
              "\u64ad\u653e\u5668\u9875\u9762\u88ab\u6d4f\u89c8\u5668\u62e6\u622a\uff01",
            msg: e,
            type: "warning",
            btn: [
              {
                fn: function () {
                  n();
                },
                text: "\u6211\u77e5\u9053\u4e86",
              },
            ],
          });
        },
        p = function () {
          var e = window.open("", "QQMusicPlayer");
          e
            ? "about:blank" === e.location.href
              ? window.open(Object(o.d)(o.a.PLAYER), "QQMusicPlayer")
              : e.focus()
            : d();
        },
        f = function () {
          var e = window.open("", "QQMusicPlayer");
          if (e) return "about:blank" !== e.location.href;
          d();
        },
        _ = function (e) {
          var t = u.a.get(),
            n = e,
            a = i.f.getJson("playSongData"),
            o = n.songList,
            c = !1;
          if (1 === o.length) {
            var d,
              _ = r()(o, 1)[0],
              h = null === _ || void 0 === _ ? void 0 : _.action;
            if (_.disabled) return void Object(s.c)();
            var g =
              !(null !== h && void 0 !== h && h.play) &&
              (null === (d = _.pay) || void 0 === d ? void 0 : d.payplay) &&
              !_.tryPlay;
            if (!l.a.isLogin() && g) return void l.a.openLogin();
            if (g) return void (_.alertid > 0 && Object(s.a)(_));
          } else
            n.songList = n.songList.filter(function (e) {
              return (
                !e.disabled &&
                (!l.a.isLogin() && e.pay && e.pay.payplay
                  ? ((c = !0), !1)
                  : !(
                      null !== e &&
                      void 0 !== e &&
                      e.pay.payplay &&
                      !e.tryPlay
                    ))
              );
            });
          if (c) l.a.openLogin();
          else if (0 !== n.songList.length) {
            if (!a || (!f() && t.deleteList)) a = n;
            else if (n.isAdd)
              if (0 === t.mod) {
                var v = Object(m.e)(a.songList, n.songList, "unshift");
                a.songList = v.songList;
              } else if (1 === t.mod) {
                var y = Object(m.e)(a.songList, n.songList, "push");
                a.songList = y.songList;
              } else if (2 === t.mod) {
                var b = Object(m.e)(
                  a.songList,
                  n.songList,
                  "next",
                  a.index || 0
                );
                (a.songList = b.songList), (a.index = b.index);
              } else {
                var E = Object(m.e)(
                  a.songList,
                  n.songList,
                  n.isPlay ? "unshift" : "push"
                );
                a.songList = E.songList;
              }
            else a = n;
            if (
              ((a.isPlay = n.isPlay),
              (a.isAdd = n.isAdd),
              n.isPlay &&
                n.songList &&
                n.songList.length > 0 &&
                (0 === t.mod || !f()))
            ) {
              var w = n.songList[n.index || 0],
                N = Object(m.c)(a.songList, w);
              a.index = N;
            }
            (a.time = new Date().getTime()),
              i.f.setJson("playSongData", a),
              p();
          } else Object(s.e)();
        },
        h = function () {
          return 1 === parseInt(i.d.getCookie("yplayer_open"), 10);
        };
    },
    394: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return s;
      }),
        n.d(t, "c", function () {
          return l;
        }),
        n.d(t, "d", function () {
          return u;
        }),
        n.d(t, "e", function () {
          return m;
        }),
        n.d(t, "f", function () {
          return d;
        }),
        n.d(t, "g", function () {
          return p;
        }),
        n.d(t, "h", function () {
          return _;
        }),
        n.d(t, "i", function () {
          return h;
        }),
        n.d(t, "j", function () {
          return g;
        }),
        n.d(t, "a", function () {
          return f;
        });
      var a = n(108),
        r = n.n(a),
        i = n(76),
        o = n.n(i),
        c = n(46).d.setInitialMetasForCSR,
        s = (function () {
          var e = r()(
            o.a.mark(function e(t) {
              var n, a, r, i, c, s, l;
              return o.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = t.detail),
                        (a = t.songList),
                        (r = n.albumName),
                        (i = n.singer),
                        (c = {}),
                        (s = []),
                        r &&
                          (s.push(r),
                          (c.title = "".concat(
                            r,
                            " - QQ\u97f3\u4e50-\u5343\u4e07\u6b63\u7248\u97f3\u4e50\u6d77\u91cf\u65e0\u635f\u66f2\u5e93\u65b0\u6b4c\u70ed\u6b4c\u5929\u5929\u7545\u542c\u7684\u9ad8\u54c1\u8d28\u97f3\u4e50\u5e73\u53f0\uff01"
                          ))),
                        a.length > 0
                          ? (null === i ||
                              void 0 === i ||
                              null === (l = i.forEach) ||
                              void 0 === l ||
                              l.call(i, function (e) {
                                (null === e || void 0 === e
                                  ? void 0
                                  : e.name) &&
                                  s.push(
                                    e.name,
                                    "".concat(e.name, "\u4e13\u8f91"),
                                    "".concat(e.name, "\u65b0\u4e13\u8f91")
                                  );
                              }),
                            r &&
                              s.push(
                                "".concat(r, "\u5728\u7ebf\u8bd5\u542c"),
                                "".concat(r, "\u4e0b\u8f7d"),
                                "".concat(r, "\u4e13\u8f91")
                              ),
                            s.push(
                              "\u4e13\u8f91\u4e0b\u8f7d,\u4e13\u8f91\u8bd5\u542c,\u5168\u90e8\u4e13\u8f91,\u65e0\u635f\u97f3\u4e50,\u97f3\u4e50\u64ad\u653e\u5668,QQ\u97f3\u4e50"
                            ))
                          : s.push(
                              "\u97f3\u4e50,QQ\u97f3\u4e50,\u5728\u7ebf\u542c\u6b4c,\u97f3\u4e50\u4e0b\u8f7d,\u97f3\u4e50\u64ad\u653e\u5668,\u97f3\u4e50\u7f51\u7ad9,MV,\u5dc5\u5cf0\u699c,\u97f3\u4e50\u6392\u884c\u699c,\u7ffb\u8bd1\u6b4c\u66f2,\u70ed\u95e8\u6b4c\u66f2,\u7ecf\u5178\u8001\u6b4c,\u65e0\u635f\u97f3\u4e50,\u65e0\u635f\u66f2\u5e93"
                            ),
                        (c.keywords = s.join(",")),
                        e.abrupt("return", c)
                      );
                    case 9:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        l = (function () {
          var e = r()(
            o.a.mark(function e(t) {
              var n, a, r, i, c, s, l, u, m, d, p;
              return o.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((a = t.mvDetail), (r = t.notFound), (i = {}), !r && t)
                      ) {
                        e.next = 7;
                        break;
                      }
                      return (
                        (i.keywords =
                          "MV\uff0c\u89c6\u9891\uff0c\u9ad8\u6e05MV\uff0c\u9ad8\u6e05\u89c6\u9891\uff0cMV\u6392\u884c\u699c\uff0c\u5728\u7ebf\u770b\uff0c\u89c6\u9891\uff0c\u5728\u7ebf\u89c6\u9891\uff0cQQ\u97f3\u4e50\uff0c\u6b4c\u8bcd\uff0c\u4e0b\u8f7d"),
                        (i.description =
                          "MV\u5728\u7ebf\u770b\uff01\u6d77\u91cf\u9ad8\u6e05MV\u5728\u7ebf\u770b\uff0c\u5c3d\u5728\u5343\u4e07\u6b63\u7248\u9ad8\u54c1\u8d28\u97f3\u4e50\u5e73\u53f0\u2014\u2014QQ\u97f3\u4e50\uff01"),
                        (i.title =
                          "\u9ad8\u6e05MV\u5728\u7ebf\u770b-QQ\u97f3\u4e50-\u5343\u4e07\u6b63\u7248\u97f3\u4e50\u6d77\u91cf\u65e0\u635f\u66f2\u5e93\u65b0\u6b4c\u70ed\u6b4c\u5929\u5929\u7545\u542c\u7684\u9ad8\u54c1\u8d28\u97f3\u4e50\u5e73\u53f0\uff01"),
                        e.abrupt("return", i)
                      );
                    case 7:
                      return (
                        (c = a.singers),
                        (s = a.title),
                        (l = void 0 === s ? "" : s),
                        (u = a.desc),
                        (m = void 0 === u ? "" : u),
                        (d = []),
                        (p =
                          (null === c ||
                          void 0 === c ||
                          null === (n = c[0]) ||
                          void 0 === n
                            ? void 0
                            : n.name) || ""),
                        d.push(l),
                        p && d.push(p),
                        d.push(
                          "".concat(l, "mv"),
                          "".concat(l, "\u89c6\u9891")
                        ),
                        p &&
                          d.push(
                            "".concat(p, "mv"),
                            "".concat(p, "\u6700\u65b0mv")
                          ),
                        d.push(
                          "".concat(l, "mv\u5728\u7ebf\u89c2\u770b"),
                          "\u9ad8\u6e05mv,\u5b98\u65b9mv,\u65e0\u635f\u97f3\u4e50,\u97f3\u4e50\u64ad\u653e\u5668,QQ\u97f3\u4e50"
                        ),
                        (i.title = ""
                          .concat(p && "".concat(p, "-"))
                          .concat(
                            l && "".concat(l, "-"),
                            "\u9ad8\u6e05MV\u5728\u7ebf\u770b-QQ\u97f3\u4e50-\u5343\u4e07\u6b63\u7248\u97f3\u4e50\u6d77\u91cf\u65e0\u635f\u66f2\u5e93\u65b0\u6b4c\u70ed\u6b4c\u5929\u5929\u7545\u542c\u7684\u9ad8\u54c1\u8d28\u97f3\u4e50\u5e73\u53f0\uff01"
                          )),
                        (i.keywords = d.join(",")),
                        (i.description = ""
                          .concat(p, "\u300a")
                          .concat(l, "\u300bMV\u5728\u7ebf\u770b\uff01")
                          .concat(
                            p,
                            " \u6d77\u91cf\u9ad8\u6e05MV\u5728\u7ebf\u770b\uff0c\u5c3d\u5728\u5343\u4e07\u6b63\u7248\u9ad8\u54c1\u8d28\u97f3\u4e50\u5e73\u53f0\u2014\u2014QQ\u97f3\u4e50\uff01"
                          )
                          .concat(m)),
                        e.abrupt("return", i)
                      );
                    case 19:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        u = (function () {
          var e = r()(
            o.a.mark(function e(t) {
              var n, a, r, i, c, s, l, u, m, d;
              return o.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = t.accessedByFav),
                        (a = t.accessedPlazaCache),
                        (r = t.detail),
                        (i = t.songList),
                        r)
                      ) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt("return", null);
                    case 3:
                      return (
                        (c = r.title),
                        (s = r.tag),
                        (l = r.host_nick),
                        (u = {}),
                        (m = 1 === a && 0 === n) &&
                          ((d = []).push(
                            c,
                            s
                              .map(function (e) {
                                return e.name;
                              })
                              .join(","),
                            "\u6b4c\u5355",
                            "".concat(l, "\u6b4c\u5355"),
                            "\u63a8\u8350\u6b4c\u5355,\u70ed\u95e8\u6b4c\u5355,\u97f3\u4e50\u6b4c\u5355,\u65e0\u635f\u97f3\u4e50,\u5728\u7ebf\u542c\u6b4c,\u97f3\u4e50\u4e0b\u8f7d,\u97f3\u4e50\u64ad\u653e\u5668,QQ\u97f3\u4e50"
                          ),
                          (u.description = "QQ\u97f3\u4e50\u6b4c\u5355\u300a"
                            .concat(c, "\u300b\uff0c\u6b4c\u66f2\uff1a")
                            .concat(
                              i
                                .slice(0, 10)
                                .map(function (e) {
                                  return e.title;
                                })
                                .filter(function (e) {
                                  return !!e;
                                })
                                .join("\u3001"),
                              "\u7b49"
                            )),
                          (u.keywords = d.join(","))),
                        (u.title = "".concat(
                          m ? "".concat(c, "-") : "",
                          "QQ\u97f3\u4e50-\u5343\u4e07\u6b63\u7248\u97f3\u4e50\u6d77\u91cf\u65e0\u635f\u66f2\u5e93\u65b0\u6b4c\u70ed\u6b4c\u5929\u5929\u7545\u542c\u7684\u9ad8\u54c1\u8d28\u97f3\u4e50\u5e73\u53f0\uff01"
                        )),
                        e.abrupt("return", u)
                      );
                    case 9:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        m = (function () {
          var e = r()(
            o.a.mark(function e(t) {
              var n, a, r;
              return o.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = t.singerDetail.basic_info.name),
                        (a = {}),
                        (r = []),
                        n &&
                          r.push(
                            n,
                            "".concat(n, "\u7684\u6b4c"),
                            "".concat(n, "\u6b4c\u66f2"),
                            "".concat(n, "\u65b0\u6b4c"),
                            "".concat(n, "\u97f3\u4e50"),
                            "\u65e0\u635f\u97f3\u4e50,\u5728\u7ebf\u542c\u6b4c,\u97f3\u4e50\u4e0b\u8f7d,\u97f3\u4e50\u64ad\u653e\u5668,QQ\u97f3\u4e50"
                          ),
                        (a.title = "".concat(
                          n ? "".concat(n, " - ") : "",
                          "QQ\u97f3\u4e50-\u5343\u4e07\u6b63\u7248\u97f3\u4e50\u6d77\u91cf\u65e0\u635f\u66f2\u5e93\u65b0\u6b4c\u70ed\u6b4c\u5929\u5929\u7545\u542c\u7684\u9ad8\u54c1\u8d28\u97f3\u4e50\u5e73\u53f0\uff01"
                        )),
                        (a.keywords = r.join(",")),
                        e.abrupt("return", a)
                      );
                    case 7:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        d = (function () {
          var e = r()(
            o.a.mark(function e(t) {
              var n, a, r, i, c, s, l, u;
              return o.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = t.detail),
                        (a = n.title),
                        (r = void 0 === a ? "" : a),
                        (i = n.albumName),
                        (c = void 0 === i ? "" : i),
                        (s = n.singer),
                        (l = {}),
                        (u = [r, c]),
                        s.forEach(function (e) {
                          u.push(e.name, "".concat(e.name, " - ").concat(r));
                        }),
                        u.push(
                          "".concat(r, "\u6b4c\u8bcd"),
                          "".concat(r, "\u5728\u7ebf\u8bd5\u542c"),
                          "".concat(r, "\u4e0b\u8f7d"),
                          "".concat(r, "mv"),
                          "".concat(r, "\u89c6\u9891"),
                          "".concat(r, "\u8bc4\u8bba"),
                          "\u65e0\u635f\u97f3\u4e50,\u5728\u7ebf\u542c\u6b4c,\u97f3\u4e50\u4e0b\u8f7d,\u97f3\u4e50\u64ad\u653e\u5668,QQ\u97f3\u4e50"
                        ),
                        (l.title = "".concat(r, " - ").concat(
                          s
                            .map(function (e) {
                              return e.name;
                            })
                            .filter(function (e) {
                              return !!e;
                            })
                            .join("/"),
                          " - QQ\u97f3\u4e50-\u5343\u4e07\u6b63\u7248\u97f3\u4e50\u6d77\u91cf\u65e0\u635f\u66f2\u5e93\u65b0\u6b4c\u70ed\u6b4c\u5929\u5929\u7545\u542c\u7684\u9ad8\u54c1\u8d28\u97f3\u4e50\u5e73\u53f0\uff01"
                        )),
                        (l.keywords = u.join(",")),
                        e.abrupt("return", l)
                      );
                    case 8:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        p = (function () {
          var e = r()(
            o.a.mark(function e(t) {
              var n, a, r;
              return o.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = t.data.title),
                        (r = {
                          keywords: "".concat(
                            (a = void 0 === n ? "" : n),
                            ",\u97f3\u4e50,QQ\u97f3\u4e50,\u5728\u7ebf\u542c\u6b4c,\u97f3\u4e50\u4e0b\u8f7d,\u97f3\u4e50\u64ad\u653e\u5668,\u97f3\u4e50\u7f51\u7ad9,MV,\u5dc5\u5cf0\u699c,\u97f3\u4e50\u6392\u884c\u699c,\u7ffb\u8bd1\u6b4c\u66f2,\u70ed\u95e8\u6b4c\u66f2,\u7ecf\u5178\u8001\u6b4c,\u65e0\u635f\u97f3\u4e50,\u65e0\u635f\u66f2\u5e93"
                          ),
                          title: "".concat(
                            a,
                            " - QQ\u97f3\u4e50-\u5343\u4e07\u6b63\u7248\u97f3\u4e50\u6d77\u91cf\u65e0\u635f\u66f2\u5e93\u65b0\u6b4c\u70ed\u6b4c\u5929\u5929\u7545\u542c\u7684\u9ad8\u54c1\u8d28\u97f3\u4e50\u5e73\u53f0\uff01"
                          ),
                        }),
                        e.abrupt("return", r)
                      );
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        f = function (e) {
          return {
            title:
              e.title ||
              "QQ\u97f3\u4e50-\u5343\u4e07\u6b63\u7248\u97f3\u4e50\u6d77\u91cf\u65e0\u635f\u66f2\u5e93\u65b0\u6b4c\u70ed\u6b4c\u5929\u5929\u7545\u542c\u7684\u9ad8\u54c1\u8d28\u97f3\u4e50\u5e73\u53f0\uff01",
            description:
              e.description ||
              "QQ\u97f3\u4e50\u662f\u817e\u8baf\u516c\u53f8\u63a8\u51fa\u7684\u4e00\u6b3e\u7f51\u7edc\u97f3\u4e50\u670d\u52a1\u4ea7\u54c1\uff0c\u6d77\u91cf\u97f3\u4e50\u5728\u7ebf\u8bd5\u542c\u3001\u65b0\u6b4c\u70ed\u6b4c\u5728\u7ebf\u9996\u53d1\u3001\u6b4c\u8bcd\u7ffb\u8bd1\u3001\u624b\u673a\u94c3\u58f0\u4e0b\u8f7d\u3001\u9ad8\u54c1\u8d28\u65e0\u635f\u97f3\u4e50\u8bd5\u542c\u3001\u6d77\u91cf\u65e0\u635f\u66f2\u5e93\u3001\u6b63\u7248\u97f3\u4e50\u4e0b\u8f7d\u3001\u7a7a\u95f4\u80cc\u666f\u97f3\u4e50\u8bbe\u7f6e\u3001MV\u89c2\u770b\u7b49\uff0c\u662f\u4e92\u8054\u7f51\u97f3\u4e50\u64ad\u653e\u548c\u4e0b\u8f7d\u7684\u4f18\u9009\u3002",
            keywords:
              e.keywords ||
              "\u97f3\u4e50,QQ\u97f3\u4e50,\u5728\u7ebf\u542c\u6b4c,\u97f3\u4e50\u4e0b\u8f7d,\u97f3\u4e50\u64ad\u653e\u5668,\u97f3\u4e50\u7f51\u7ad9,MV,\u5dc5\u5cf0\u699c,\u97f3\u4e50\u6392\u884c\u699c,\u7ffb\u8bd1\u6b4c\u66f2,\u70ed\u95e8\u6b4c\u66f2,\u7ecf\u5178\u8001\u6b4c,\u65e0\u635f\u97f3\u4e50,\u65e0\u635f\u66f2\u5e93",
          };
        },
        _ = (function () {
          var e = r()(
            o.a.mark(function e(t) {
              return o.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.t0 = c), (e.t1 = f), (e.next = 4), s(t);
                    case 4:
                      (e.t2 = e.sent),
                        (e.t3 = (0, e.t1)(e.t2)),
                        (0, e.t0)(e.t3);
                    case 7:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        h = (function () {
          var e = r()(
            o.a.mark(function e(t) {
              return o.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.t0 = c), (e.t1 = f), (e.next = 4), m(t);
                    case 4:
                      (e.t2 = e.sent),
                        (e.t3 = (0, e.t1)(e.t2)),
                        (0, e.t0)(e.t3);
                    case 7:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        g = (function () {
          var e = r()(
            o.a.mark(function e(t) {
              return o.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.t0 = c), (e.t1 = f), (e.next = 4), p(t);
                    case 4:
                      (e.t2 = e.sent),
                        (e.t3 = (0, e.t1)(e.t2)),
                        (0, e.t0)(e.t3);
                    case 7:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
    },
    395: function (e, t, n) {
      "use strict";
      var a,
        r = n(3),
        i = n.n(r),
        o = n(77),
        c = n(78),
        s = n.n(c),
        l = n(15),
        u = n(108),
        m = n.n(u),
        d = n(76),
        p = n.n(d);
      !(function (e) {
        (e[(e.COMMENT = 1)] = "COMMENT"),
          (e[(e.REPLY = 2)] = "REPLY"),
          (e[(e.HOT = 3)] = "HOT"),
          (e[(e.INVITE = 4)] = "INVITE"),
          (e[(e.LIKE = 5)] = "LIKE"),
          (e[(e.GROUP_LIKE = 6)] = "GROUP_LIKE"),
          (e[(e.UP = 7)] = "UP"),
          (e[(e.BLOCK = 8)] = "BLOCK"),
          (e[(e.DELETE = 9)] = "DELETE");
      })(a || (a = {}));
      var f = (function () {
          var e = m()(
            p.a.mark(function e(t) {
              var n;
              return p.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = [
                          {
                            module: "MessageCenter.MessageCenterServer",
                            method: "GetMessage",
                            param: { uin: t.uin, red_dot: [{ msg_type: 1 }] },
                          },
                          {
                            module:
                              "GlobalComment.GlobalCommentMessageReadServer",
                            method: "GetMessage",
                            param: {
                              uin: t.uin,
                              page_num: 0,
                              page_size: 1,
                              last_msg_id: "",
                              type: 0,
                            },
                          },
                        ]),
                        e.abrupt(
                          "return",
                          Object(l.h)()
                            .request(n)
                            .then(function (e) {
                              var t = s()(e, 2),
                                n = t[0],
                                r = t[1],
                                i = { num: 0, nick: "", title: "" };
                              if (
                                (n &&
                                  0 === n.code &&
                                  (i.num =
                                    (n.data &&
                                      n.data.dot_list &&
                                      n.data.dot_list[0] &&
                                      n.data.dot_list[0].msg_num) ||
                                    0),
                                r && 0 === r.code)
                              ) {
                                var o = (r.data &&
                                    r.data.messages &&
                                    r.data.messages[0] &&
                                    r.data.messages[0].comment) || {
                                    main_title: "",
                                  },
                                  c = (r.data &&
                                    r.data.messages &&
                                    r.data.messages[0] &&
                                    r.data.messages[0].message) || {
                                    nick: "",
                                    type: 0,
                                    title: "",
                                  };
                                (i.nick = c.nick),
                                  (i.title = c.title),
                                  c.type === a.COMMENT
                                    ? (i.title =
                                        "\u8bc4\u8bba\u4e86\u4f60\u7684".concat(
                                          o.main_title
                                        ))
                                    : c.type === a.REPLY
                                    ? (i.title =
                                        "\u56de\u590d\u4e86\u4f60\u7684\u8bc4\u8bba")
                                    : (c.type !== a.LIKE &&
                                        c.type !== a.GROUP_LIKE) ||
                                      (i.title =
                                        "\u8d5e\u4e86\u4f60\u7684\u8bc4\u8bba");
                              }
                              return i;
                            })
                        )
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        _ = n(391),
        h = n(16),
        g = null,
        v = function (e) {
          var t = Object(r.useState)(!1),
            n = s()(t, 2),
            a = n[0],
            c = n[1],
            u = Object(r.useState)(null),
            m = s()(u, 2),
            d = m[0],
            p = m[1],
            v = Object(r.useState)(null),
            y = s()(v, 2),
            b = y[0],
            E = y[1];
          Object(r.useEffect)(function () {
            l.c.isBrowser &&
              _.a.isLogin() &&
              (_.a.getVipInfo().then(function (e) {
                p(e);
              }),
              f({ uin: "".concat(_.a.getUin()) }).then(function (e) {
                E(e);
              }));
          }, []);
          var w = function () {
              g && (clearTimeout(g), (g = null)), a || c(!0);
            },
            N = function () {
              a &&
                (g = window.setTimeout(function () {
                  c(!1), (g = null);
                }, 500));
            },
            k = function () {
              _.a.minipay.openPayMusic(d);
            },
            x = function () {
              _.a.minipay.buyMonth();
            },
            C = d && d.base,
            O =
              l.c.isBrowser && "2" === l.d.getCookie("login_type")
                ? "//y.qq.com/mediastyle/yqq/img/login_wechat.png?max_age=2592000"
                : "//y.qq.com/mediastyle/yqq/img/login_qq.png?max_age=2592000",
            S = (function (e) {
              var t = e && e.vip,
                n = {
                  title: "",
                  openTitle: "\u5f00\u901a\u7eff\u94bb\u8c6a\u534e\u7248",
                  openMusicTitle: "\u5f00\u901a\u4ed8\u8d39\u5305",
                  openMusicTitle2:
                    "\u5f00\u901a|\u4ed8\u8d39\u97f3\u4e50\u5305",
                  vipEnd: "",
                  musicEnd: "",
                  vipIcon: _.a.getVipLogo(t, 0),
                  vipIconAlt: "\u7eff\u94bb".concat(t && t.iCurLevel, "\u7ea7"),
                  ffbIcon: _.a.getVipLogo(t, 1),
                  ffbIconAlt: "\u4ed8\u8d39\u97f3\u4e50\u5305".concat(
                    t && t.FfbLevel,
                    "\u7ea7"
                  ),
                  xingzuanIcon: "",
                };
              return t
                ? (1 === t.iVipFlag &&
                    ((n.title = "\u7eff\u94bb"),
                    (n.openTitle =
                      "\u5347\u7ea7\u7eff\u94bb\u8c6a\u534e\u7248"),
                    (n.vipEnd = t.sOverDateTime.substr(0, 10))),
                  1 === t.iSuperVip &&
                    ((n.title = "\u7eff\u94bb\u8c6a\u534e\u7248"),
                    (n.openTitle =
                      "\u7eed\u8d39\u7eff\u94bb\u8c6a\u534e\u7248"),
                    (n.vipEnd = t.superEndTime.substr(0, 10))),
                  1 === t.ieight &&
                    ((n.openMusicTitle = "\u7eed\u8d39\u4ed8\u8d39\u5305"),
                    (n.openMusicTitle2 =
                      "\u7eed\u8d39|\u4ed8\u8d39\u97f3\u4e50\u5305"),
                    (n.musicEnd = t.eightEndTime.substr(0, 10))),
                  1 === t.itwelve &&
                    ((n.openMusicTitle = "\u7eed\u8d39\u4ed8\u8d39\u5305"),
                    (n.openMusicTitle2 =
                      "\u7eed\u8d39|\u8c6a\u534e\u4ed8\u8d39\u5305"),
                    (n.musicEnd = t.twelveEndTime.substr(0, 10))),
                  n)
                : n;
            })(d);
          return i.a.createElement(
            r.Fragment,
            null,
            i.a.createElement(
              "span",
              { className: "mod_top_login" },
              C &&
                i.a.createElement(
                  o.b,
                  {
                    to: Object(h.d)(h.a.PROFILE),
                    className: "top_login__link",
                    onMouseEnter: w,
                    onMouseLeave: N,
                  },
                  i.a.createElement("img", {
                    src: d.base.headurl,
                    className: "top_login__cover",
                    alt: "",
                  }),
                  i.a.createElement("img", {
                    src: O,
                    className: "top_login__icon",
                  }),
                  b &&
                    b.num > 0 &&
                    i.a.createElement(
                      "span",
                      { className: "top_login__notice" },
                      b.num > 99 ? "99+" : b.num
                    )
                ),
              !C &&
                i.a.createElement(
                  "a",
                  {
                    className: "top_login__link",
                    onClick: function () {
                      _.a.isLogin() || _.a.openLogin();
                    },
                  },
                  "\u767b\u5f55"
                ),
              i.a.createElement(
                "div",
                { className: "mod_select mod_select_green mod_select--open" },
                i.a.createElement(
                  "a",
                  { className: "select__choose" },
                  "\u5f00\u901aVIP"
                ),
                i.a.createElement(
                  "ul",
                  { className: "select__box" },
                  i.a.createElement(
                    "li",
                    {
                      className: "select__item",
                      onClick: x,
                      title: S.openTitle,
                      "data-aid": "music.pc.20316.newyqqtop",
                      "data-stat": "music.20316.btnclick.pc",
                    },
                    S.openTitle
                  ),
                  i.a.createElement(
                    "li",
                    {
                      className: "select__item",
                      onClick: k,
                      title: S.openMusicTitle,
                      "data-aid": "music.pc.20317.newyqqtop",
                      "data-stat": "music.20317.btnclick.pc",
                    },
                    S.openMusicTitle
                  )
                )
              ),
              i.a.createElement(
                "div",
                { className: "mod_select mod_select--pay" },
                i.a.createElement(
                  "a",
                  { className: "select__choose" },
                  "\u5145\u503c"
                ),
                i.a.createElement(
                  "ul",
                  { className: "select__box" },
                  i.a.createElement(
                    "li",
                    {
                      className: "select__item",
                      title:
                        "\u4e50\u5e01\u7528\u9014\uff1a \u7528\u4e8e\u8d2d\u4e70\u6570\u5b57\u4e13\u8f91\u3001\u652f\u6301\u660e\u661f\u6253\u699c\u3001TME Live\u7b49",
                      onClick: function () {
                        _.a.minipay.buyYB();
                      },
                    },
                    "\u8d2d\u4e70\u4e50\u5e01"
                  ),
                  i.a.createElement(
                    "li",
                    {
                      className: "select__item",
                      title:
                        "\u996d\u7968\u7528\u9014\uff1a \u7528\u4e8e\u5728\u76f4\u64ad\u4e2d\u8d60\u9001\u793c\u7269\u3001\u5f00\u901a\u7c89\u4e1d\u56e2\u3001\u8d2d\u4e70\u8d35\u65cf\u7b49",
                      onClick: function () {
                        _.a.minipay.buyFP();
                      },
                    },
                    "\u5145\u503c\u996d\u7968"
                  )
                )
              )
            ),
            C &&
              a &&
              i.a.createElement(
                "div",
                {
                  className: "popup_user drop",
                  onMouseEnter: w,
                  onMouseLeave: N,
                },
                i.a.createElement(
                  "div",
                  { className: "popup_user_data" },
                  i.a.createElement(
                    "a",
                    { className: "popup_user_data__cover_link" },
                    i.a.createElement("img", {
                      src: d.base.headurl,
                      className: "popup_user_data__cover",
                      alt: "",
                    }),
                    i.a.createElement("img", {
                      src: O,
                      className: "popup_user_data__icon",
                    })
                  ),
                  i.a.createElement(
                    "div",
                    { className: "popup_user_data__cont" },
                    i.a.createElement(
                      "div",
                      { className: "popup_user_data__name" },
                      i.a.createElement("a", null, d.base.nick)
                    ),
                    i.a.createElement(
                      "div",
                      { className: "popup_user_data__lv" },
                      i.a.createElement(
                        "a",
                        {
                          href: "//y.qq.com/portal/vipportal/index.html",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        i.a.createElement("img", {
                          src: S.vipIcon,
                          alt: S.vipIconAlt,
                          className: "popup_user_data__lv_icon",
                        })
                      ),
                      i.a.createElement(
                        "a",
                        {
                          href: "//y.qq.com/vip/fufeibao/index.html",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        i.a.createElement("img", {
                          src: S.ffbIcon,
                          alt: S.ffbIconAlt,
                          className: "popup_user_data__lv_icon",
                        })
                      )
                    )
                  )
                ),
                i.a.createElement(
                  "div",
                  { className: "popup_user_toolbar" },
                  i.a.createElement(
                    "div",
                    { className: "popup_user_toolbar__item" },
                    i.a.createElement(
                      "div",
                      { className: "popup_user_toolbar__tit" },
                      i.a.createElement(
                        "a",
                        {
                          href: "//y.qq.com/portal/vipportal/index.html",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        S.title || "\u7eff\u94bb\u8c6a\u534e\u7248"
                      )
                    ),
                    i.a.createElement(
                      "div",
                      { className: "popup_user_toolbar__desc c_tx_thin" },
                      S.vipEnd
                        ? "".concat(S.vipEnd, " \u5230\u671f")
                        : "".concat(
                            S.openTitle.slice(0, 2),
                            "\u7acb\u5373\u8d60\u9001\u4ed8\u8d39\u97f3\u4e50\u5305"
                          )
                    ),
                    i.a.createElement(
                      "a",
                      {
                        className: "mod_btn_green popup_user_toolbar__btn_vip",
                        onClick: x,
                      },
                      S.openTitle.slice(0, 2)
                    )
                  ),
                  !(d.vip && 1 === d.vip.iVipFlag && 1 === d.vip.iSuperVip) &&
                    i.a.createElement(
                      "div",
                      { className: "popup_user_toolbar__item" },
                      i.a.createElement(
                        "div",
                        { className: "popup_user_toolbar__tit" },
                        i.a.createElement(
                          "a",
                          {
                            href: "//y.qq.com/vip/fufeibao/index.html",
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                          S.openMusicTitle2.split("|")[1]
                        )
                      ),
                      i.a.createElement(
                        "div",
                        { className: "popup_user_toolbar__desc c_tx_thin" },
                        S.musicEnd
                          ? "".concat(S.musicEnd, " \u5230\u671f")
                          : "\u7545\u4eab\u5343\u4e07\u5305\u6708\u66f2\u5e93"
                      ),
                      i.a.createElement(
                        "a",
                        {
                          className:
                            "mod_btn_green popup_user_toolbar__btn_vip",
                          onClick: k,
                        },
                        S.openMusicTitle2.split("|")[0]
                      )
                    ),
                  b &&
                    i.a.createElement(
                      "div",
                      { className: "popup_user_toolbar__item" },
                      i.a.createElement(
                        "div",
                        { className: "popup_user_toolbar__tit" },
                        i.a.createElement(
                          "a",
                          {
                            href: "//y.qq.com/portal/msg_center.html#stat=y_new.top.pop.msg_center",
                          },
                          "\u8bc4\u8bba\u901a\u77e5"
                        )
                      ),
                      b.num > 0 &&
                        i.a.createElement(
                          r.Fragment,
                          null,
                          i.a.createElement(
                            "div",
                            { className: "popup_user_toolbar__desc" },
                            i.a.createElement(
                              "a",
                              {
                                href: "//y.qq.com/portal/msg_center.html#stat=y_new.top.pop.msg_center",
                                className: "c_tx_thin",
                              },
                              i.a.createElement(
                                "span",
                                { className: "popup_user_toolbar__user" },
                                b.nick
                              ),
                              b.title
                            )
                          ),
                          i.a.createElement(
                            "div",
                            { className: "popup_user_toolbar__notice" },
                            b.num > 99 ? "99+" : b.num
                          )
                        )
                    ),
                  i.a.createElement(
                    "div",
                    { className: "popup_user_toolbar__item" },
                    i.a.createElement(
                      "div",
                      { className: "popup_user_toolbar__tit" },
                      i.a.createElement(
                        "a",
                        { onClick: _.a.loginOut },
                        "\u9000\u51fa\u767b\u5f55"
                      )
                    )
                  )
                )
              )
          );
        },
        y = n(431),
        b = function () {
          var e = function (e, t) {
            return (
              t.pathname.indexOf(Object(h.e)(h.a.PROFILE)) >= 0 ||
              t.pathname.indexOf(Object(h.e)(h.a.PLAYLIST_EDIT)) >= 0
            );
          };
          return i.a.createElement(
            "ul",
            { className: "mod_top_nav", role: "nav" },
            i.a.createElement(
              "li",
              { className: "top_nav__item" },
              i.a.createElement(
                o.c,
                {
                  activeClassName: "top_nav__link--current",
                  to: "/",
                  isActive: function (t, n) {
                    return t.isExact || !e(0, n);
                  },
                  className: "top_nav__link",
                  title: "\u97f3\u4e50\u9986",
                },
                "\u97f3\u4e50\u9986"
              )
            ),
            i.a.createElement(
              "li",
              { className: "top_nav__item" },
              i.a.createElement(
                o.c,
                {
                  activeClassName: "top_nav__link--current",
                  to: "".concat(Object(h.e)(h.a.PROFILE)),
                  isActive: e,
                  className: "top_nav__link",
                  title: "\u6211\u7684\u97f3\u4e50",
                },
                "\u6211\u7684\u97f3\u4e50"
              )
            ),
            i.a.createElement(
              "li",
              { className: "top_nav__item top_nav__item--subnav" },
              i.a.createElement(
                "a",
                {
                  href: "//y.qq.com/download/index.html",
                  className: "top_nav__link",
                  title: "\u5ba2\u6237\u7aef",
                  rel: "noopener noreferrer",
                  target: "_blank",
                },
                "\u5ba2\u6237\u7aef"
              ),
              i.a.createElement("img", {
                src: "//y.qq.com/mediastyle/yqq/extra/mark_1.png?max_age=2592000",
                className: "top_nav__mark",
                alt: "\u62a2\u7279\u6743",
              }),
              i.a.createElement(
                "div",
                { className: "popup_data_detail client_privilege" },
                i.a.createElement(
                  "div",
                  { className: "popup_data_detail__cont" },
                  i.a.createElement(
                    "p",
                    null,
                    i.a.createElement("i", {
                      className:
                        "client_privilege__icon client_privilege__icon--hq",
                    }),
                    "HQ\u9ad8\u54c1\u8d28 \u5168\u5458\u5f00\u542f"
                  ),
                  i.a.createElement(
                    "p",
                    null,
                    i.a.createElement("i", {
                      className:
                        "client_privilege__icon client_privilege__icon--dts",
                    }),
                    "\u72ec\u5bb6\u97f3\u6548 \u5168\u9762\u5347\u7ea7"
                  ),
                  i.a.createElement(
                    "p",
                    null,
                    i.a.createElement("i", {
                      className:
                        "client_privilege__icon client_privilege__icon--skin",
                    }),
                    "\u8f7b\u76c8\u89c6\u89c9 \u52a8\u6001\u76ae\u80a4"
                  ),
                  i.a.createElement(
                    "a",
                    {
                      className: "client_privilege__btn",
                      onClick: function () {
                        Object(y.b)();
                      },
                    },
                    "\u4e0b\u8f7d\u4f53\u9a8c"
                  )
                )
              )
            ),
            i.a.createElement(
              "li",
              { className: "top_nav__item" },
              i.a.createElement(
                "a",
                {
                  href: "//y.qq.com/artists",
                  className: "top_nav__link",
                  title: "\u5f00\u653e\u5e73\u53f0",
                  rel: "noopener noreferrer",
                  target: "_blank",
                },
                "\u5f00\u653e\u5e73\u53f0"
              )
            ),
            i.a.createElement(
              "li",
              { className: "top_nav__item" },
              i.a.createElement(
                "a",
                {
                  href: "//y.qq.com/portal/vipportal/index.html",
                  className: "top_nav__link",
                  title: "VIP",
                  rel: "noopener noreferrer",
                  target: "_blank",
                },
                "VIP"
              )
            )
          );
        },
        E = n(10),
        w = Object(E.withRouter)(function (e) {
          return i.a.createElement(
            "ul",
            { className: "mod_top_subnav" },
            i.a.createElement(
              "li",
              { className: "top_subnav__item" },
              i.a.createElement(
                o.c,
                {
                  activeClassName: "top_subnav__link--current",
                  to: "/",
                  isActive: function (e, t) {
                    return e.isExact || t.pathname === h.f;
                  },
                  className: "top_subnav__link",
                  title: "\u9996\u9875",
                },
                "\u9996\u9875"
              )
            ),
            i.a.createElement(
              "li",
              { className: "top_subnav__item" },
              i.a.createElement(
                o.c,
                {
                  activeClassName: "top_subnav__link--current",
                  to: Object(h.d)(h.a.SINGER_LIST),
                  className: "top_subnav__link",
                  title: "\u6b4c\u624b",
                },
                "\u6b4c\u624b"
              )
            ),
            i.a.createElement(
              "li",
              { className: "top_subnav__item" },
              i.a.createElement(
                o.c,
                {
                  activeClassName: "top_subnav__link--current",
                  to: Object(h.d)(h.a.ALBUM),
                  className: "top_subnav__link",
                  title: "\u65b0\u789f",
                },
                "\u65b0\u789f"
              )
            ),
            i.a.createElement(
              "li",
              { className: "top_subnav__item" },
              i.a.createElement(
                o.c,
                {
                  activeClassName: "top_subnav__link--current",
                  to: Object(h.d)(h.a.TOPLIST, 4),
                  isActive: function (e, t) {
                    return !!t.pathname.match(/(\/toplist)|(\/mv_toplist)/);
                  },
                  className: "top_subnav__link",
                  title: "\u6392\u884c\u699c",
                },
                "\u6392\u884c\u699c"
              )
            ),
            i.a.createElement(
              "li",
              { className: "top_subnav__item" },
              i.a.createElement(
                o.c,
                {
                  activeClassName: "top_subnav__link--current",
                  to: Object(h.d)(h.a.CATEGORY),
                  className: "top_subnav__link",
                  title: "\u5206\u7c7b\u6b4c\u5355",
                },
                "\u5206\u7c7b\u6b4c\u5355"
              )
            ),
            i.a.createElement(
              "li",
              { className: "top_subnav__item" },
              i.a.createElement(
                o.c,
                {
                  activeClassName: "top_subnav__link--current",
                  to: Object(h.d)(h.a.RADIO),
                  className: "top_subnav__link",
                  title: "\u7535\u53f0",
                },
                "\u7535\u53f0"
              )
            ),
            i.a.createElement(
              "li",
              { className: "top_subnav__item" },
              i.a.createElement(
                o.c,
                {
                  activeClassName: "top_subnav__link--current",
                  to: Object(h.d)(h.a.MV_LIST),
                  className: "top_subnav__link",
                },
                "MV"
              )
            ),
            i.a.createElement(
              "li",
              { className: "top_subnav__item" },
              i.a.createElement(
                o.c,
                {
                  activeClassName: "top_subnav__link--current",
                  to: Object(h.d)(h.a.ALBUM_MALL),
                  className: "top_subnav__link",
                  title: "\u6570\u5b57\u4e13\u8f91",
                },
                "\u6570\u5b57\u4e13\u8f91"
              )
            ),
            i.a.createElement(
              "li",
              { className: "top_subnav__item" },
              i.a.createElement(
                "a",
                {
                  href: "//y.qq.com/portal/piao_wu.html",
                  className: "top_subnav__link",
                  target: "_blank",
                  rel: "noopener noreferrer",
                },
                "\u7968\u52a1"
              )
            )
          );
        }),
        N = n(484),
        k = function () {
          return i.a.createElement(
            "div",
            { className: "mod_top_search", role: "search" },
            i.a.createElement(N.a, null)
          );
        },
        x = Object(r.memo)(k);
      n(443),
        n(489),
        (t.a = function (e) {
          var t = e.config;
          return i.a.createElement(
            "div",
            { className: "mod_header", role: "header" },
            i.a.createElement(
              "div",
              { className: "section_inner" },
              i.a.createElement(
                "h1",
                { className: "qqmusic_title" },
                i.a.createElement(
                  o.c,
                  { to: "/" },
                  i.a.createElement("img", {
                    src: "//y.qq.com/mediastyle/yqq/img/logo.png?max_age=2592000",
                    alt: "QQ\u97f3\u4e50",
                    className: "qqmusic_logo",
                  })
                )
              ),
              i.a.createElement(b, null),
              !(null !== t && void 0 !== t && t.isHideSubnav) &&
                i.a.createElement(w, null),
              i.a.createElement(x, null),
              i.a.createElement(
                "div",
                { className: "header__opt" },
                i.a.createElement(v, null)
              )
            )
          );
        });
    },
    396: function (e, t, n) {
      "use strict";
      var a = n(78),
        r = n.n(a),
        i = n(3),
        o = n.n(i),
        c = n(15),
        s = n(393),
        l = (n(431), n(391)),
        u = n(476);
      n(494);
      t.a = function () {
        var e = Object(i.useState)(!1),
          t = r()(e, 2),
          n = t[0],
          a = t[1],
          m = Object(i.useState)(!1),
          d = r()(m, 2),
          p = d[0],
          f = d[1];
        Object(i.useEffect)(function () {
          var e = function () {
            var e =
              document.body.scrollTop ||
              document.documentElement.scrollTop ||
              window.pageYOffset;
            a(e > 150);
          };
          return (
            document.addEventListener("scroll", e),
            function () {
              document.removeEventListener("scroll", e);
            }
          );
        }, []),
          Object(i.useEffect)(function () {
            Object(c.b)({
              url: "//c.y.qq.com/tips/fcgi-bin/fcg_music_red_dota.fcg",
              data: {
                cid: 205360410,
                qq: l.a.getUin(),
                ct: 24,
                reqtype: 1,
                from: 2,
              },
            }).then(function (e) {
              e &&
              0 === e.code &&
              e.data &&
              e.data.items &&
              e.data.items.length > 0 &&
              2 === e.data.items[0].from &&
              e.data.items[0].msg_num > 0
                ? f(!0)
                : f(!1);
            });
          }, []);
        var _ = function () {
          Object(u.a)();
        };
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(
            "a",
            {
              className: "btn_bottom_top sprite_before",
              style: { display: n ? "block" : "none" },
              onClick: function () {
                (document.documentElement.scrollTop = 0),
                  (document.body.scrollTop = 0);
              },
            },
            o.a.createElement(
              "span",
              { className: "icon_txt" },
              "\u8fd4\u56de\u9876\u90e8"
            )
          ),
          o.a.createElement(
            "a",
            { className: "btn_bottom_feedback js_btn_feedback", onClick: _ },
            "\u53cd\u9988"
          ),
          o.a.createElement(
            "a",
            {
              className: "btn_bottom_player sprite_before",
              onClick: function () {
                Object(s.a)();
              },
            },
            o.a.createElement(
              "span",
              { className: "icon_txt" },
              "\u64ad\u653e\u5668"
            )
          ),
          p &&
            o.a.createElement(
              "div",
              { className: "popup_data_detail aisee" },
              o.a.createElement(
                "div",
                { className: "popup_data_detail__cont", onClick: _ },
                o.a.createElement(
                  "p",
                  null,
                  "\u6709\u65b0\u7684\u53cd\u9988\u6d88\u606f"
                )
              ),
              o.a.createElement("i", { className: "popup_data_detail__arrow" })
            )
        );
      };
    },
    397: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return r;
      }),
        n.d(t, "a", function () {
          return i;
        }),
        n.d(t, "b", function () {
          return o;
        }),
        n.d(t, "f", function () {
          return c;
        }),
        n.d(t, "e", function () {
          return s;
        }),
        n.d(t, "d", function () {
          return a;
        });
      var a = function (e) {
          if (null === e || void 0 === e) return "";
          var t = parseInt("".concat(e), 10),
            n = t / 1e4 > 1 ? "".concat((t / 1e4).toFixed(1), "\u4e07") : t;
          return "".concat(
            t / 1e8 > 1 ? "".concat((t / 1e8).toFixed(1), "\u4ebf") : n
          );
        },
        r = function (e) {
          return e
            .replace(/<br\/>/g, "</p><p>")
            .replace(/&lt;br\/&gt;/g, "</p><p>")
            .replace(
              /&lt;strong className=&quot;keyword&quot;&gt;/g,
              '<span className="c_tx_highlight">'
            )
            .replace(/&lt;\/strong&gt;/g, "</span>");
        },
        i = function (e) {
          return e
            .replace(/<br\/>/g, "\n")
            .replace(/&lt;br\/&gt;/g, "\n")
            .replace(/&lt;strong className=&quot;keyword&quot;&gt;/g, "")
            .replace(/&lt;\/strong&gt;/g, "");
        },
        o = function (e) {
          return (
            e &&
            e
              .replace(/<em>/gi, '<span class="c_tx_highlight">')
              .replace(/<\/em>/gi, "</span>")
              .replace(/\\n/gi, "<br/>")
          );
        },
        c = function (e) {
          for (
            var t = [],
              n = (null === e || void 0 === e ? void 0 : e.length) || 0,
              a = 0;
            a < n;
            a++
          ) {
            var r,
              i,
              o,
              c,
              s = e[a],
              l = {};
            (l.docid =
              s.docid ||
              (null === s || void 0 === s ? void 0 : s.dissid) ||
              (null === s || void 0 === s ? void 0 : s.albumid) ||
              (null === s || void 0 === s ? void 0 : s.dirid) ||
              s.id),
              (l.dissid =
                (null === s || void 0 === s ? void 0 : s.dissid) ||
                (null === s || void 0 === s ? void 0 : s.tid) ||
                s.mid),
              (l.dissname =
                (null === s || void 0 === s ? void 0 : s.dissname) ||
                (null === s || void 0 === s ? void 0 : s.diss_name) ||
                (null === s || void 0 === s ? void 0 : s.title) ||
                (null === s || void 0 === s ? void 0 : s.name)),
              (l.imgurl =
                (null === s || void 0 === s ? void 0 : s.imgurl) ||
                s.logo ||
                s.pic ||
                s.diss_cover ||
                s.logo ||
                s.albumPic),
              (l.listennum =
                (null === s || void 0 === s ? void 0 : s.listennum) ||
                (null === s || void 0 === s ? void 0 : s.listen_num) ||
                s.listen_cnt),
              (l.creatorname =
                (null === s ||
                void 0 === s ||
                null === (r = s.creator) ||
                void 0 === r
                  ? void 0
                  : r.name) || s.nickname),
              (l.encrypt_uin =
                (null === s ||
                void 0 === s ||
                null === (i = s.creator) ||
                void 0 === i
                  ? void 0
                  : i.encrypt_uin) ||
                (null === s || void 0 === s ? void 0 : s.encrypt_uin) ||
                (null === s || void 0 === s ? void 0 : s.uin)),
              (l.singermid =
                (null === s ||
                void 0 === s ||
                null === (o = s.creator) ||
                void 0 === o
                  ? void 0
                  : o.singermid) ||
                (null === s || void 0 === s ? void 0 : s.singerMID) ||
                s.singermid),
              (l.creatorqq =
                null === s ||
                void 0 === s ||
                null === (c = s.creator) ||
                void 0 === c
                  ? void 0
                  : c.qq),
              (l.albummid =
                (null === s || void 0 === s ? void 0 : s.albumMID) ||
                s.albummid ||
                s.mid),
              (l.albumname =
                (null === s || void 0 === s ? void 0 : s.albumName) ||
                s.albumname),
              (l.albumname_hilight =
                null === s || void 0 === s ? void 0 : s.albumName_hilight),
              (l.singername =
                (null === s || void 0 === s ? void 0 : s.singerName) ||
                s.singername),
              (l.singername_hilight =
                null === s || void 0 === s ? void 0 : s.singerName_hilight),
              (l.singers =
                (null === s || void 0 === s ? void 0 : s.singer_list) ||
                s.singer ||
                s.vec_singer ||
                []),
              (l.publicTime =
                (null === s || void 0 === s ? void 0 : s.publicTime) ||
                s.createtime ||
                s.pubtime),
              (l.songnum =
                (null === s || void 0 === s ? void 0 : s.songnum) ||
                s.song_cnt ||
                s.song_num),
              t.push(l);
          }
          return t;
        },
        s = function (e, t) {
          switch (e) {
            case "song":
              return t ? 20 : 10;
            case "album":
              return t ? 30 : 5;
            case "mv":
              return t ? 28 : 12;
            case "playlist":
              return t ? 21 : 5;
            case "user":
              return t ? 30 : 10;
            case "lyric":
              return t ? 10 : 5;
          }
        };
    },
    398: function (e, t, n) {
      "use strict";
      var a = n(3),
        r = n.n(a),
        i = n(10),
        o = n(397),
        c = n(429),
        s = n(16);
      t.a = Object(i.withRouter)(function (e) {
        var t = e.singers,
          n = e.className,
          i = e.config,
          l = n || "playlist__author";
        return r.a.createElement(
          a.Fragment,
          null,
          t.map(function (e, t) {
            return 0 !== t
              ? r.a.createElement(
                  a.Fragment,
                  { key: e.id || e.mid || t },
                  " ",
                  "/",
                  r.a.createElement(c.a, {
                    href: Object(s.d)(s.a.SINGER, e.mid || e.id),
                    className: l,
                    title: e.name,
                    content: Object(o.b)(e.name_hilight || e.name),
                    tag: "a",
                  })
                )
              : r.a.createElement(c.a, {
                  key: e.id || e.mid || t,
                  href: Object(s.d)(s.a.SINGER, e.mid || e.id),
                  title: e.name,
                  className: l,
                  content:
                    null !== i && void 0 !== i && i.highlight
                      ? Object(o.b)(e.name_hilight || e.name)
                      : e.name,
                  tag: "a",
                });
          })
        );
      });
    },
    399: function (e, t, n) {
      "use strict";
      n.d(t, "h", function () {
        return j;
      }),
        n.d(t, "l", function () {
          return L;
        }),
        n.d(t, "c", function () {
          return P;
        }),
        n.d(t, "f", function () {
          return g;
        }),
        n.d(t, "g", function () {
          return w;
        }),
        n.d(t, "a", function () {
          return N;
        }),
        n.d(t, "d", function () {
          return k;
        }),
        n.d(t, "k", function () {
          return x;
        }),
        n.d(t, "e", function () {
          return C;
        }),
        n.d(t, "j", function () {
          return O;
        }),
        n.d(t, "m", function () {
          return I;
        }),
        n.d(t, "i", function () {
          return S;
        }),
        n.d(t, "b", function () {
          return b;
        });
      var a = n(78),
        r = n.n(a),
        i = n(108),
        o = n.n(i),
        c = n(76),
        s = n.n(c),
        l = n(409),
        u = n(15),
        m = n(391),
        d = n(415),
        p = n(390),
        f = n(452),
        _ = !1,
        h = !1,
        g = (function () {
          var e = o()(
            s.a.mark(function e() {
              return s.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!h) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return", Promise.resolve(_));
                    case 2:
                      return e.abrupt(
                        "return",
                        Object(u.h)()
                          .request([
                            {
                              module: "yqq.WhiteListServer",
                              method: "Pass",
                              param: {},
                            },
                          ])
                          .then(function (e) {
                            var t = r()(e, 1)[0];
                            try {
                              (h = !0), 1 === t.data.ok && (_ = !0);
                            } catch (n) {}
                            return _;
                          })
                      );
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        v = !1,
        y = !1,
        b = (function () {
          var e = o()(
            s.a.mark(function e() {
              return s.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!y) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return", Promise.resolve(v));
                    case 2:
                      return e.abrupt(
                        "return",
                        Object(u.h)()
                          .request([
                            {
                              module:
                                "music.officialplaylist.PlcensorPrivilege",
                              method: "check_login",
                              param: {},
                            },
                          ])
                          .then(function (e) {
                            var t = r()(e, 1)[0];
                            try {
                              (y = !0), t.data.permit && (v = !0);
                            } catch (n) {}
                            return v;
                          })
                      );
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        E = [],
        w = function () {
          return E && E.length > 0
            ? Promise.resolve(E)
            : Object(u.h)()
                .request([
                  {
                    module: "music.musicasset.PlaylistBaseRead",
                    method: "GetPlaylistByUin",
                    param: { uin: m.a.getUin().toString(), bWithoutStatus: !1 },
                  },
                ])
                .then(function (e) {
                  try {
                    E = Object(d.f)(e[0].data.v_playlist);
                  } catch (t) {}
                  return E;
                });
        },
        N = function (e, t, n) {
          var a = (function (e) {
              return e.map(function (e) {
                return { songType: e.type, songId: e.id };
              });
            })(t),
            r = n ? "DelSonglist" : "AddSonglist";
          return Object(u.h)()
            .request([
              {
                module: "music.musicasset.PlaylistDetailWrite",
                method: r,
                param: { dirId: e, v_songInfo: a },
              },
            ])
            .then(function (e) {
              var t = !1;
              try {
                0 === e[0].code && (t = !0);
              } catch (n) {}
              return t;
            })
            .catch(function () {
              return (
                p.a.show({
                  type: "warning",
                  msg: "\u64cd\u4f5c\u5931\u8d25\uff01\u5f53\u524d\u7f51\u7edc\u7e41\u5fd9\uff0c\u8bf7\u60a8\u7a0d\u540e\u518d\u8bd5\uff01",
                }),
                !1
              );
            });
        },
        k = function (e) {
          return Object(u.h)()
            .request([
              {
                module: "music.musichallAlbum.AlbumInfoServer",
                method: "GetAlbumDetail",
                param: { albumMid: e },
              },
            ])
            .then(function (e) {
              var t = null;
              try {
                t = { color: e[0].data.basicInfo.color.toString(16) };
              } catch (n) {}
              return t;
            });
        },
        x = function (e) {
          var t = [];
          return (
            e.forEach(function (e) {
              t.push(e.mid);
            }),
            Object(u.h)()
              .request([
                {
                  module: "music.musicasset.SongFavRead",
                  method: "IsSongFanByMid",
                  param: { v_songMid: t },
                },
              ])
              .then(function (t) {
                var n = null;
                try {
                  var a = t[0].data.m_fan;
                  n = e.map(function (e) {
                    return (e.isFan = a[e.mid]), e;
                  });
                } catch (r) {}
                return n;
              })
          );
        },
        C = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "song",
            n = {},
            a = [];
          return (
            "song" === t &&
              e.forEach(function (e) {
                a.push({
                  biz_type: 1,
                  biz_id: e.id.toString(),
                  biz_sub_type: e.type,
                });
              }),
            "playList" === t &&
              e.forEach(function (e) {
                a.push({ biz_type: 3, biz_id: e.id.toString() });
              }),
            "album" === t &&
              e.forEach(function (e) {
                a.push({ biz_type: 2, biz_id: e.id.toString() });
              }),
            "mv" === t &&
              e.forEach(function (e) {
                a.push({ biz_type: 5, biz_id: e.id.toString() });
              }),
            Object(u.h)()
              .request([
                {
                  method: "GetCommentCount",
                  module: "GlobalComment.GlobalCommentReadServer",
                  param: { request_list: a },
                },
              ])
              .then(function (e) {
                try {
                  e[0].data.response_list.forEach(function (e, t) {
                    n[a[t].biz_id] = e.count;
                  });
                } catch (t) {}
                return n;
              })
          );
        },
        O = function (e) {
          var t = e.mid,
            n = e.songtype,
            a = e.songid,
            r = {};
          return (
            Number(t) ? (r.song_id = parseInt(t, 10)) : (r.song_mid = t),
            a && (r.song_id = a),
            (n || 0 === n) && (r.song_type = n),
            Object(u.h)()
              .request([
                {
                  method: "get_song_detail_yqq",
                  module: "music.pf_song_detail_svr",
                  param: r,
                },
              ])
              .then(function (e) {
                var t = { detail: null, songList: null, notFound: 0 };
                try {
                  var n, a, r, i, o;
                  if (0 !== e[0].code) return (t.notFound = 1), t;
                  var c =
                    null === (n = e[0]) ||
                    void 0 === n ||
                    null === (a = n.data) ||
                    void 0 === a
                      ? void 0
                      : a.track_info;
                  (t.detail = {
                    title: c.title,
                    picurl: Object(f.a)(c),
                    id: c.id,
                    ctime: c.time_public,
                    singer: c.singer,
                    albumName: c.album.name,
                    albumMid: c.album.mid,
                    info: e[0].data.info,
                    type: c.type,
                    from: e[0].data.extras && e[0].data.extras.from,
                    disabled: !c,
                    wikiurl:
                      (null === (r = e[0].data.extras) || void 0 === r
                        ? void 0
                        : r.wikiurl) || "",
                  }),
                    (t.songList = Object(l.a)([c])),
                    (t.detail.disabled =
                      (null === (i = t.songList[0]) || void 0 === i
                        ? void 0
                        : i.disabled) ||
                      (null === t ||
                      void 0 === t ||
                      null === (o = t.detail) ||
                      void 0 === o
                        ? void 0
                        : o.disabled));
                } catch (s) {}
                return t;
              })
          );
        },
        S = (function () {
          var e = o()(
            s.a.mark(function e(t, n) {
              var a, i, o, c, l, m, d, p;
              return s.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!(n > 0)) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        Promise.resolve({ hasMore: !1, vecPlayList: [] })
                      );
                    case 2:
                      return (
                        (e.next = 4),
                        Object(u.h)().request([
                          {
                            method: "get_related_gedan",
                            module: "music.mb_gedan_recommend_svr",
                            param: {
                              song_id: t,
                              song_type: 1,
                              sin: 0,
                              last_id: 0,
                            },
                          },
                        ])
                      );
                    case 4:
                      return (
                        (a = e.sent),
                        (i = r()(a, 1)),
                        (o = i[0]),
                        (c = o.data || {}),
                        (l = c.has_more),
                        (m = void 0 === l ? 0 : l),
                        (d = c.vec_gedan),
                        (p = void 0 === d ? [] : d),
                        e.abrupt(
                          "return",
                          Promise.resolve({ hasMore: 1 === m, vecPlayList: p })
                        )
                      );
                    case 9:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
        j = (function () {
          var e = o()(
            s.a.mark(function e(t) {
              var n, a, i, o, c, l;
              return s.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        Object(u.h)().request([
                          {
                            module: "MvService.MvInfoProServer",
                            method: "GetMvBySongid",
                            param: { mids: t },
                          },
                        ])
                      );
                    case 2:
                      if (
                        ((n = e.sent),
                        (a = r()(n, 1)),
                        0 !== (i = a[0]).code || !i.data)
                      ) {
                        e.next = 10;
                        break;
                      }
                      return (
                        (o = i.data.mvinfo),
                        (c = void 0 === o ? {} : o),
                        (l = []),
                        Object.keys(c).forEach(function (e) {
                          l.push(c[e]);
                        }),
                        e.abrupt("return", Promise.resolve(l))
                      );
                    case 10:
                      return e.abrupt("return", []);
                    case 11:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        I = function (e, t) {
          return Object(u.h)()
            .request([
              {
                method: t ? "CancelFavAlbum" : "FavAlbum",
                module: "music.musicasset.AlbumFavWrite",
                param: { uin: m.a.getUin().toString(), v_albumMid: [e] },
              },
            ])
            .then(function (e) {
              var t = !1;
              try {
                0 === e[0].data.result && (t = !0);
              } catch (n) {}
              return t;
            });
        },
        P = function (e) {
          return Object(u.h)()
            .request([
              {
                method: "IsAlbumFan",
                param: { uin: m.a.getUin(), v_albumMid: e },
                module: "music.musicasset.AlbumFavRead",
              },
            ])
            .then(function (e) {
              var t = null;
              try {
                t = e[0].data.m_fan;
              } catch (n) {}
              return t;
            });
        },
        L = (function () {
          var e = o()(
            s.a.mark(function e(t, n) {
              return s.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (t.length && n.length) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      return e.abrupt(
                        "return",
                        Object(u.h)()
                          .request({
                            module: "music.trackInfo.UniformRuleCtrl",
                            method: "CgiGetTrackInfo",
                            param: { ids: t, types: n },
                          })
                          .then(function (e) {
                            var t, n;
                            return 0 === e[0].code
                              ? Object(l.a)(
                                  (null === (t = e[0]) ||
                                  void 0 === t ||
                                  null === (n = t.data) ||
                                  void 0 === n
                                    ? void 0
                                    : n.tracks) || []
                                )
                              : [];
                          })
                      );
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })();
    },
    400: function (e, t, n) {
      "use strict";
      var a = n(2),
        r = n.n(a),
        i = n(361),
        o = n.n(i),
        c = n(362),
        s = n.n(c),
        l = n(363),
        u = n.n(l),
        m = n(364),
        d = n.n(m),
        p = n(365),
        f = n.n(p),
        _ = n(3),
        h = n.n(_),
        g = n(15);
      function v(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function y(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = f()(e);
          if (t) {
            var r = f()(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return d()(this, n);
        };
      }
      var b = {
          defaultImg:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAD0lEQVR4AWM4bYwJh7QgANLSYzmZH3ISAAAAAElFTkSuQmCC",
          threshold: 0,
          container: window,
          isVertical: !0,
        },
        E = {},
        w = [],
        N = function () {
          w = w.filter(function (e) {
            return !e._inView(e.imgRef) || (e.setState({ isView: !0 }), !1);
          });
        },
        k = (function (e) {
          u()(n, e);
          var t = y(n);
          function n(e) {
            var a;
            return (
              o()(this, n),
              ((a = t.call(this, e)).setImgRef = function (e) {
                a.imgRef = e;
              }),
              (a.state = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? v(Object(n), !0).forEach(function (t) {
                        r()(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : v(Object(n)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t)
                        );
                      });
                }
                return e;
              })(
                {
                  groupid: "defaultId",
                  boundValue: { start: "top", len: "height" },
                  isView: !1,
                },
                b
              )),
              a
            );
          }
          return (
            s()(n, [
              {
                key: "componentDidMount",
                value: function () {
                  w.push(this),
                    this._inView(this.imgRef) && this.setState({ isView: !0 }),
                    !E[this.state.groupid || "defaultId"] &&
                      this.state.container &&
                      ((E[this.state.groupid || "defaultId"] = !0),
                      (function (e) {
                        var t = null;
                        e &&
                          e.addEventListener(
                            "scroll",
                            function () {
                              t ||
                                ((t = window.setTimeout(function () {
                                  clearTimeout(t), (t = null), N();
                                }, 100)),
                                N());
                            },
                            !1
                          ),
                          window.addEventListener("resize", function () {
                            setTimeout(function () {
                              N();
                            }, 200);
                          });
                      })(this.state.container));
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  (E[this.state.groupid || "defaultId"] = !1),
                    (function (e) {
                      var t = null;
                      e &&
                        e.removeEventListener(
                          "scroll",
                          function () {
                            t ||
                              ((t = window.setTimeout(function () {
                                clearTimeout(t), (t = null), N();
                              }, 100)),
                              N());
                          },
                          !1
                        ),
                        window.removeEventListener("resize", function () {
                          setTimeout(function () {
                            N();
                          }, 200);
                        });
                    })(this.state.container);
                },
              },
              {
                key: "_inView",
                value: function (e) {
                  if (!e) return !1;
                  if ("undefined" === typeof window.addEventListener) return !1;
                  var t = e.getBoundingClientRect();
                  this.containerOffset = {
                    width: window.innerWidth,
                    height: window.innerHeight,
                  };
                  var n = this.state.boundValue.start,
                    a = this.state.boundValue.len,
                    r = this.containerOffset[a];
                  return (
                    null !== e.offsetParent &&
                    r + this.state.threshold >= t[n] &&
                    0 <= t[n] + t[a] + this.state.threshold
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state,
                    t = this.props,
                    n = t.className,
                    a = t.noFixUrl,
                    r = t.name,
                    i = t.type,
                    o = t.imgurl,
                    c = i ? g.j.getDefaultImg(i) : b.defaultImg,
                    s = e.isView ? o : b.defaultImg;
                  return h.a.createElement("img", {
                    ref: this.setImgRef,
                    className: n,
                    loading: "lazy",
                    src: a ? s : g.j.fixUrl(s),
                    alt: r,
                    "data-qar-def": c,
                  });
                },
              },
            ]),
            n
          );
        })(_.Component);
      t.a = k;
    },
    401: function (e, t, n) {
      "use strict";
      var a = n(3),
        r = n.n(a),
        i = n(431);
      n(523);
      t.a = function (e) {
        var t = e.className;
        return r.a.createElement(
          "div",
          { id: "page_box", className: t },
          r.a.createElement(
            "div",
            { className: "client_guide" },
            r.a.createElement(
              "p",
              { className: "client_guide__txt" },
              "\u67e5\u770b\u66f4\u591a\u5185\u5bb9\uff0c\u8bf7\u4e0b\u8f7d\u5ba2\u6237\u7aef"
            ),
            r.a.createElement(
              "a",
              { onClick: i.b.bind(null, null), className: "client_guide__btn" },
              "\u7acb\u5373\u4e0b\u8f7d"
            )
          )
        );
      };
    },
    402: function (e, t, n) {
      "use strict";
      n.d(t, "d", function () {
        return i;
      }),
        n.d(t, "e", function () {
          return c;
        }),
        n.d(t, "h", function () {
          return m;
        }),
        n.d(t, "g", function () {
          return d;
        }),
        n.d(t, "f", function () {
          return o;
        }),
        n.d(t, "a", function () {
          return s;
        }),
        n.d(t, "c", function () {
          return l;
        }),
        n.d(t, "b", function () {
          return r;
        });
      var a = n(15),
        r = function (e) {
          for (
            var t = [], n = ["1", "2", "3", "4", "5", "6", "7"], a = 0;
            a < e;
            a++
          ) {
            t.push({
              categoryGroupName: 0 === a ? "\u8bed\u79cd" : n[a],
              items: new Array(5).fill({
                allsorts: [],
                categoryId: 0,
                categoryName: "--",
                usable: 1,
              }),
              usable: 1,
              groupId: a,
            });
          }
          return t;
        },
        i = function (e) {
          for (var t = [], n = 0; n < e; n++)
            t.push({
              imgurl: a.j.albumDefaultImg,
              dissname: " ",
              listennum: 0,
              dissid: n,
            });
          return t;
        },
        o = function (e) {
          for (var t = [], n = 0; n < e; n++)
            t.push({
              title: " ",
              name: " ",
              id: n,
              album: {
                pmid: "",
                name: " ",
                id: n,
                title: "",
                mid: "",
                subtitle: "",
                time_public: "",
              },
            });
          return t;
        },
        c = function (e) {
          for (var t = [], n = 0; n < e; n++)
            t.push({
              country: " ",
              singer_id: n,
              singer_mid: "",
              singer_name: " ",
              singer_pic: " ",
            });
          return t;
        },
        s = function (e) {
          for (var t = [], n = 0; n < e; n++)
            t.push({ name: " ", mid: "", id: n, release_time: " " });
          return t;
        },
        l = function (e) {
          for (var t = [], n = 0; n < e; n++)
            t.push({ picurl: "", title: " ", vid: n.toString() });
          return t;
        },
        u = { id: -100, name: "\u5168\u90e8" },
        m = {
          area: [{ id: -100, name: "\u70ed\u95e8" }],
          genre: [u],
          index: [u],
          sex: [u],
        },
        d = {
          descstr: " ",
          shortdesc: " ",
          songTotalNum: 0,
          mvTotalNum: 0,
          albumTotalNum: 0,
          concernNum: 0,
          basic_info: {
            has_photo: 0,
            name: " ",
            singer_id: 0,
            singer_mid: "",
            singer_pmid: "",
            type: 0,
          },
          pic: { pic: a.j.singerDefaultImg },
        };
    },
    403: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return w;
      }),
        n.d(t, "a", function () {
          return b;
        });
      var a = n(368),
        r = n.n(a),
        i = n(361),
        o = n.n(i),
        c = n(362),
        s = n.n(c),
        l = n(363),
        u = n.n(l),
        m = n(364),
        d = n.n(m),
        p = n(365),
        f = n.n(p),
        _ = n(3),
        h = n.n(_),
        g = n(109),
        v = n.n(g);
      function y(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = f()(e);
          if (t) {
            var r = f()(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return d()(this, n);
        };
      }
      var b,
        E = (function (e) {
          u()(n, e);
          var t = y(n);
          function n() {
            var e, a;
            o()(this, n);
            for (var r = arguments.length, i = new Array(r), c = 0; c < r; c++)
              i[c] = arguments[c];
            return d()(
              a,
              ((e = a = t.call.apply(t, [this].concat(i))),
              (a.closeElment = function (e) {
                var t = a.props.close,
                  n = a.elment,
                  r = e.target;
                n === r || n.contains(r) || t();
              }),
              e)
            );
          }
          return (
            s()(n, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  setTimeout(function () {
                    window.addEventListener("click", e.closeElment, !1);
                  }, 0);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  window.removeEventListener("click", this.closeElment, !1);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.left,
                    a = t.top,
                    r = t.element,
                    i = t.className;
                  return h.a.createElement(
                    "div",
                    {
                      ref: function (t) {
                        e.elment = t;
                      },
                      style: {
                        left: "".concat(n, "px"),
                        top: "".concat(a, "px"),
                      },
                      className: i,
                      id: "fav_pop",
                    },
                    r
                  );
                },
              },
            ]),
            n
          );
        })(_.Component),
        w = function (e) {
          var t = document.createElement("div");
          return (
            document.body.appendChild(t),
            (b = function () {
              t &&
                (e.closeCb && e.closeCb(),
                v.a.unmountComponentAtNode(t),
                t.parentNode.removeChild(t));
            }),
            v.a.render(h.a.createElement(E, r()({}, e, { close: b })), t),
            b
          );
        };
    },
    404: function (e, t, n) {
      "use strict";
      var a = n(3),
        r = n.n(a);
      t.a = function () {
        return r.a.createElement(
          "div",
          { className: "mod_loading" },
          r.a.createElement(
            "i",
            { className: "icon_txt" },
            "\u52a0\u8f7d\u4e2d"
          )
        );
      };
    },
    405: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var a = n(3),
        r = n.n(a),
        i = n(366),
        o = n.n(i),
        c = n(420),
        s =
          (n(491),
          n(473),
          function (e) {
            var t = e.msg,
              n = void 0 === t ? "" : t,
              a = e.btn,
              i = e.title,
              c = e.subtit,
              s = void 0 === c ? "" : c,
              l = e.content,
              u = e.topLevelClass,
              m = void 0 === u ? "mod_popup" : u,
              d = e.isSubtitPre,
              p = void 0 !== d && d;
            return r.a.createElement(
              "div",
              { className: m },
              r.a.createElement(
                "div",
                { className: "popup__hd" },
                r.a.createElement(
                  "h2",
                  { className: "popup__tit" },
                  i || "\u63d0\u793a"
                )
              ),
              l
                ? r.a.createElement("div", { className: "popup__bd" }, l)
                : r.a.createElement(
                    "div",
                    { className: "popup__bd" },
                    r.a.createElement(
                      "div",
                      { className: "popup__bd_inner" },
                      r.a.createElement("div", {
                        className: "popup__icon_tips icon_popup_note",
                      }),
                      r.a.createElement(
                        "h3",
                        {
                          className: "popup__subtit popup__subtit--single",
                          style: { whiteSpace: p ? "pre-wrap" : "inherit" },
                        },
                        s
                      ),
                      r.a.createElement("p", { className: "popup__desc" }, n)
                    )
                  ),
              r.a.createElement(
                "div",
                { className: "popup__ft" },
                a &&
                  a.map(function (e, t) {
                    return e
                      ? r.a.createElement(
                          "button",
                          {
                            key: t,
                            onClick: e.fn,
                            className: o()({
                              upload_btns__item: !0,
                              mod_btn_green: 1 === t || e.green,
                              mod_btn: 1 !== t,
                            }),
                          },
                          e.text
                        )
                      : "";
                  })
              )
            );
          });
      t.b = function (e) {
        return c.a.show({
          width: (null === e || void 0 === e ? void 0 : e.width) || 440,
          children: r.a.createElement(s, e),
          childrenIsClose: !0,
        });
      };
    },
    406: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return d;
      }),
        n.d(t, "e", function () {
          return p;
        }),
        n.d(t, "c", function () {
          return f;
        }),
        n.d(t, "f", function () {
          return _;
        }),
        n.d(t, "a", function () {
          return h;
        }),
        n.d(t, "d", function () {
          return g;
        });
      var a = n(2),
        r = n.n(a),
        i = n(367),
        o = n.n(i),
        c = n(390),
        s = n(16),
        l = n(15);
      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var d = function (e) {
          return e > 1e4 ? "".concat((e / 1e4).toFixed(1), "\u4e07") : e;
        },
        p = function (e, t, n, a) {
          var r = o()(e),
            i = {},
            c = a || 0;
          t.forEach(function (e) {
            i[e.mid] = !0;
          }),
            (r = r.filter(function (e, t) {
              var n = !i[e.mid];
              return !n && t <= c && (c = c <= 1 ? 0 : --c), n;
            }));
          var s,
            l,
            u = { songList: [] };
          "next" === n
            ? ((u.index = c),
              (s = r).splice.apply(s, [c + 1, 0].concat(o()(t))))
            : (l = r)[n].apply(l, o()(t));
          return (u.songList = r), u;
        },
        f = function (e, t) {
          var n = -1;
          return (
            e.forEach(function (e, a) {
              e.mid === t.mid && (n = a);
            }),
            n
          );
        },
        _ = function (e) {
          if (!e) return "";
          var t = new Date(e);
          if ("Invalid Date" === t.toString()) return "0000-00-00";
          var n = t.getFullYear(),
            a = t.getMonth() + 1,
            r = t.getDate();
          return ""
            .concat(n, "-")
            .concat(a < 10 ? "0".concat(a) : a, "-")
            .concat(r < 10 ? "0".concat(r) : r);
        },
        h = function (e) {
          var t = e.replace(/<br>/gi, "\n");
          return (
            !(
              t.indexOf("+") > -1 ||
              t.indexOf('"') > -1 ||
              t.indexOf("#") > -1 ||
              t.indexOf("=") > -1 ||
              t.indexOf("%") > -1 ||
              t.indexOf("<") > -1 ||
              t.indexOf(">") > -1 ||
              t.indexOf("\\") > -1
            ) ||
            (c.a.show({
              type: "warning",
              msg: '\u8f93\u5165\u9519\u8bef\uff01\u8f93\u5165\u7684\u5185\u5bb9\u4e2d\u8bf7\u4e0d\u8981\u4f7f\u7528+, #, %, ", =, \\, <, >\u7b49\u7279\u6b8a\u5b57\u7b26.',
            }),
            !1)
          );
        },
        g = function (e) {
          var t = e.mid,
            n = e.id,
            a = e.songtype,
            r = e.adtag,
            i = e.disstid,
            o = Object(s.d)(s.a.SONGE_DETAIL),
            c = "".concat(o, "/").concat(t || n),
            u = {};
          return (
            a &&
              1 !== a &&
              11 !== a &&
              13 !== a &&
              3 !== a &&
              (u = { songtype: a }),
            a && (111 === a || 112 === a || 113 === a) && (u = { songtype: a }),
            i && a && (u = { songtype: a, disstid: i }),
            r && (u = m(m({}, u), {}, { ADTAG: r })),
            (c = l.j.addParam(u, c))
          );
        };
    },
    407: function (e, t, n) {
      "use strict";
      n.d(t, "d", function () {
        return g;
      }),
        n.d(t, "g", function () {
          return v;
        }),
        n.d(t, "k", function () {
          return E;
        }),
        n.d(t, "a", function () {
          return N;
        }),
        n.d(t, "b", function () {
          return k;
        }),
        n.d(t, "h", function () {
          return w;
        }),
        n.d(t, "j", function () {
          return x;
        }),
        n.d(t, "i", function () {
          return C;
        }),
        n.d(t, "c", function () {
          return y;
        }),
        n.d(t, "e", function () {
          return b;
        }),
        n.d(t, "f", function () {
          return O;
        });
      var a = n(78),
        r = n.n(a),
        i = n(2),
        o = n.n(i),
        c = n(108),
        s = n.n(c),
        l = n(76),
        u = n.n(l),
        m = n(15),
        d = n(409),
        p = (n(453), n(390)),
        f = n(391);
      function _(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? _(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : _(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var g = (function () {
          var e = s()(
            u.a.mark(function e(t) {
              return u.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        Object(m.h)()
                          .request([
                            {
                              module: "music.musicasset.PlaylistFavRead",
                              method: "IsPlaylistFan",
                              param: { v_tid: [t] },
                            },
                          ])
                          .then(function (e) {
                            var n = !1;
                            try {
                              e[0].data.m_fan[t] && (n = !0);
                            } catch (a) {}
                            return n;
                          })
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        v = (function () {
          var e = s()(
            u.a.mark(function e(t) {
              var n, a, r, i, o, c, s, l, p, f;
              return u.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = t.id),
                        (a = t.begin),
                        (r = void 0 === a ? 0 : a),
                        (i = t.length),
                        (o = void 0 === i ? 10 : i),
                        (c = t.only),
                        (s = void 0 === c ? 0 : c),
                        (l = t.hostUin),
                        (p = [
                          {
                            module: "music.srfDissInfo.aiDissInfo",
                            method: "uniform_get_Dissinfo",
                            param: {
                              disstid: n,
                              userinfo: 1,
                              tag: 1,
                              orderlist: 1,
                              song_begin: r,
                              song_num: o,
                              onlysonglist: s,
                              enc_host_uin: void 0 === l ? "" : l,
                            },
                          },
                        ]),
                        (f = !1),
                        Math.random() > 0.5 && (f = !1),
                        e.abrupt(
                          "return",
                          Object(m.h)()
                            .request(p)
                            .then(function (e) {
                              var t = {
                                detail: null,
                                songList: null,
                                encrypt_login: null,
                                totalNum: 0,
                                notFound: 0,
                                graphQLErr: !1,
                                graphQlErrData: {},
                              };
                              try {
                                var n,
                                  a,
                                  r,
                                  i,
                                  o,
                                  c,
                                  s,
                                  l = {};
                                if (
                                  f &&
                                  0 ===
                                    (null === e ||
                                    void 0 === e ||
                                    null === (n = e[1]) ||
                                    void 0 === n
                                      ? void 0
                                      : n.code) &&
                                  null !== (a = e[1]) &&
                                  void 0 !== a &&
                                  null !== (r = a.data) &&
                                  void 0 !== r &&
                                  r.Result &&
                                  JSON.parse(
                                    null === (i = e[1]) ||
                                      void 0 === i ||
                                      null === (o = i.data) ||
                                      void 0 === o
                                      ? void 0
                                      : o.Result
                                  ).data
                                )
                                  try {
                                    var u, m;
                                    l = JSON.parse(
                                      null === (u = e[1]) ||
                                        void 0 === u ||
                                        null === (m = u.data) ||
                                        void 0 === m
                                        ? void 0
                                        : m.Result
                                    ).data.diss;
                                  } catch (p) {
                                    (t.graphQLErr = !0),
                                      (t.graphQlErrData = e[1].data);
                                  }
                                else {
                                  if (
                                    0 !==
                                      (null === e ||
                                      void 0 === e ||
                                      null === (c = e[0]) ||
                                      void 0 === c
                                        ? void 0
                                        : c.code) ||
                                    0 !==
                                      (null === (s = e[0].data) || void 0 === s
                                        ? void 0
                                        : s.code)
                                  )
                                    return (t.notFound = 1), t;
                                  f &&
                                    e[1].data &&
                                    ((t.graphQLErr = !0),
                                    (t.graphQlErrData = e[1].data)),
                                    (l = e[0].data);
                                }
                                (t.encrypt_login = l.encrypt_login),
                                  (t.detail = l.dirinfo),
                                  (t.songList = Object(d.a)(
                                    l.songlist,
                                    !!t.detail.owndir
                                  )),
                                  (t.totalNum = l.total_song_num),
                                  (t.accessedByFav = l.accessed_byfav),
                                  (t.accessedPlazaCache =
                                    l.accessed_plaza_cache);
                              } catch (_) {
                                return (t.notFound = 1), t;
                              }
                              return t;
                            })
                        )
                      );
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        y = (function () {
          var e = s()(
            u.a.mark(function e() {
              return u.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        Object(m.b)({
                          format: "jsonp",
                          url: "".concat(
                            m.c.isBrowser ? "" : "http:",
                            "//c.y.qq.com/qzone/fcg-bin/cgi_playlist_xml_new.fcg"
                          ),
                          data: { utf8: 1, json: 1, uin: f.a.getUin() },
                          jsonpCallback: "jsonCallback",
                        }).then(
                          (function () {
                            var e = s()(
                              u.a.mark(function e(t) {
                                var n, a, r, i;
                                return u.a.wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), f.a.getVipInfo(!0);
                                      case 2:
                                        (n = e.sent),
                                          (a = {
                                            detail: null,
                                            songList: null,
                                            encrypt_login: null,
                                            totalNum: 0,
                                          });
                                        try {
                                          (a.encrypt_login = f.a
                                            .getUin()
                                            .toString()),
                                            (a.detail = {
                                              id: 205,
                                              picurl:
                                                "//y.qq.com/mediastyle/y/img/cover_qzone.jpg",
                                              title:
                                                "Qzone\u80cc\u666f\u97f3\u4e50",
                                              desc: "\u7a7a\u95f4\u80cc\u666f\u97f3\u4e50\u540c\u6b65\u5217\u8868",
                                              creator: {
                                                nick: n.base.nick,
                                                encrypt_uin: f.a
                                                  .getUin()
                                                  .toString(),
                                                headurl: n.base.headurl,
                                                ifpicurl: "",
                                                musicid: null,
                                                singerid: null,
                                                type: null,
                                              },
                                            }),
                                            (a.songList = Object(d.a)(
                                              null === t ||
                                                void 0 === t ||
                                                null === (r = t.data) ||
                                                void 0 === r ||
                                                null === (i = r.songlist) ||
                                                void 0 === i
                                                ? void 0
                                                : i.map(function (e) {
                                                    return h(
                                                      h({}, e.data),
                                                      {},
                                                      { type: e.songtype }
                                                    );
                                                  })
                                            ));
                                        } catch (o) {}
                                        return e.abrupt("return", a);
                                      case 6:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })
                            );
                            return function (t) {
                              return e.apply(this, arguments);
                            };
                          })()
                        )
                      );
                    case 2:
                      return e.abrupt("return", e.sent);
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        b = (function () {
          var e = s()(
            u.a.mark(function e() {
              return u.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        Object(m.b)({
                          format: "jsonp",
                          url: "".concat(
                            m.c.isBrowser ? "" : "http:",
                            "//c.y.qq.com/qzone/fcg-bin/fcg_usermusic_info_cp.fcg"
                          ),
                          data: { utf8: 1, json: 1, uin: f.a.getUin() },
                          jsonpCallback: "jsonCallback",
                        }).then(
                          (function () {
                            var e = s()(
                              u.a.mark(function e(t) {
                                var n, a, r;
                                return u.a.wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), f.a.getVipInfo(!0);
                                      case 2:
                                        (n = e.sent),
                                          (a = {
                                            detail: null,
                                            songList: null,
                                            encrypt_login: null,
                                            totalNum: 0,
                                          });
                                        try {
                                          (a.encrypt_login = f.a
                                            .getUin()
                                            .toString()),
                                            (a.detail = {
                                              id: 206,
                                              picurl:
                                                "//y.qq.com/mediastyle/y/img/vip_upload.jpg",
                                              title: "\u672c\u5730\u4e0a\u4f20",
                                              desc: "\u7eff\u94bb\u8d35\u65cf\u672c\u5730\u4e0a\u4f20\u7684\u97f3\u4e50\u6b4c\u5355",
                                              creator: {
                                                nick: n.base.nick,
                                                encrypt_uin: f.a
                                                  .getUin()
                                                  .toString(),
                                                headurl: n.base.headurl,
                                                ifpicurl: "",
                                                musicid: null,
                                                singerid: null,
                                                type: null,
                                              },
                                            }),
                                            (a.songList = Object(d.a)(
                                              null === t ||
                                                void 0 === t ||
                                                null === (r = t.songlist) ||
                                                void 0 === r
                                                ? void 0
                                                : r.map(function (e) {
                                                    return h({}, e);
                                                  })
                                            ));
                                        } catch (i) {}
                                        return e.abrupt("return", a);
                                      case 6:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })
                            );
                            return function (t) {
                              return e.apply(this, arguments);
                            };
                          })()
                        )
                      );
                    case 2:
                      return e.abrupt("return", e.sent);
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        E = (function () {
          var e = s()(
            u.a.mark(function e(t, n) {
              return u.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        Object(m.h)()
                          .request([
                            {
                              module: "music.musicasset.PlaylistFavWrite",
                              method: n ? "CancelFavPlaylist" : "FavPlaylist",
                              param: {
                                uin: m.d.getCookie("uin"),
                                v_playlistId: [t],
                              },
                            },
                          ])
                          .then(function (e) {
                            var t = !1;
                            try {
                              0 === e[0].code && (t = !0);
                            } catch (n) {}
                            return t;
                          })
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
        w = (function () {
          var e = s()(
            u.a.mark(function e(t) {
              var n;
              return u.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = [
                          {
                            module: "music.musicasset.PlaylistTag",
                            method: "getPlaylistTag",
                            param: {},
                          },
                        ]),
                        t > 0 &&
                          n.push({
                            module: "music.srfDissInfo.aiDissInfo",
                            method: "uniform_get_Dissinfo",
                            param: {
                              dirid: t,
                              optype: 3,
                              tag: 1,
                              userinfo: 0,
                              pic_dpi: 300,
                            },
                          }),
                        e.abrupt(
                          "return",
                          Object(m.h)()
                            .request(n)
                            .then(function (e) {
                              var n = r()(e, 2),
                                a = n[0],
                                i = n[1],
                                o = {};
                              return (
                                a &&
                                  0 === a.code &&
                                  a.data &&
                                  (o.tagList = a.data.categories),
                                t > 0 &&
                                  (i && 0 === i.code && i.data && i.data.dirinfo
                                    ? (o.playlistInfo = i.data.dirinfo)
                                    : -1e3 === i.code || 1e3 === i.code
                                    ? f.a.openLogin()
                                    : 10004 === i.code
                                    ? p.a.show({
                                        type: "warning",
                                        msg: "\u8be5\u6b4c\u5355\u4e0d\u5b58\u5728\u3002",
                                      })
                                    : p.a.show({
                                        type: "warning",
                                        msg: "\u7f51\u7edc\u7e41\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
                                      })),
                                o
                              );
                            })
                        )
                      );
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        N = (function () {
          var e = s()(
            u.a.mark(function e(t) {
              return u.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        Object(m.h)()
                          .request([
                            {
                              module: "music.musicasset.PlaylistBaseWrite",
                              method: "AddPlaylist",
                              param: t,
                            },
                          ])
                          .then(function (e) {
                            var t = r()(e, 1)[0];
                            return 1e3 === t.code && f.a.openLogin(), t;
                          })
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        k = (function () {
          var e = s()(
            u.a.mark(function e(t) {
              return u.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        Object(m.h)()
                          .request([
                            {
                              module: "music.musicasset.PlaylistBaseWrite",
                              method: "EditPlaylist",
                              param: t,
                            },
                          ])
                          .then(function (e) {
                            var t = r()(e, 1)[0];
                            return (
                              1e3 === t.code && f.a.openLogin(),
                              t && 0 === t.code
                            );
                          })
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        x = (function () {
          var e = s()(
            u.a.mark(function e(t) {
              return u.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (t) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      return (
                        (e.next = 4),
                        Object(m.b)({
                          url: "".concat(
                            m.c.isBrowser ? "" : "http:",
                            "//c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg?ct=24"
                          ),
                          format: "json",
                          data: { albummid: t },
                        }).then(function (e) {
                          try {
                            var t;
                            return Object(d.a)(
                              (null === e ||
                              void 0 === e ||
                              null === (t = e.data) ||
                              void 0 === t
                                ? void 0
                                : t.list) || []
                            );
                          } catch (n) {}
                          return [];
                        })
                      );
                    case 4:
                      return e.abrupt("return", e.sent);
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        C = (function () {
          var e = s()(
            u.a.mark(function e(t, n) {
              return u.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        Object(m.h)()
                          .request([
                            {
                              module: "music.musichallAlbum.AlbumSongList",
                              method: "GetAlbumSongList",
                              param: {
                                albumid: t,
                                albumMid: n,
                                begin: 0,
                                num: 10,
                                order: 2,
                              },
                            },
                          ])
                          .then(function (e) {
                            var t = r()(e, 1)[0];
                            return Object(d.a)(t.data.songList);
                          })
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
        O = (function () {
          var e = s()(
            u.a.mark(function e(t, n) {
              return u.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        Object(m.b)({
                          url: "".concat(
                            m.c.isBrowser ? "" : "http:",
                            "//c.y.qq.com/soso/fcgi-bin/music_geturl.fcg"
                          ),
                          format: "json",
                          data: {
                            n: 1,
                            w: encodeURIComponent("".concat(t, " ").concat(n)),
                          },
                        }).then(function (e) {
                          try {
                            return e.data.url;
                          } catch (t) {}
                          return "";
                        })
                      );
                    case 2:
                      return e.abrupt("return", e.sent);
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })();
    },
    408: function (e, t, n) {
      "use strict";
      var a = n(2),
        r = n.n(a),
        i = n(361),
        o = n.n(i),
        c = n(362),
        s = n.n(c),
        l = n(363),
        u = n.n(l),
        m = n(364),
        d = n.n(m),
        p = n(365),
        f = n.n(p),
        _ = n(3),
        h = n.n(_),
        g = n(15),
        v = n(390),
        y = n(393),
        b = n(403),
        E = n(410),
        w = n(16),
        N = n(108),
        k = n.n(N),
        x = n(76),
        C = n.n(x),
        O = n(366),
        S = n.n(O),
        j = n(77),
        I = n(407),
        P = n(429),
        L = n(397),
        q =
          (n(502),
          function (e) {
            var t = e.data;
            Math.random();
            return 1 === t.rankType
              ? h.a.createElement(
                  _.Fragment,
                  null,
                  h.a.createElement("i", { className: "icon_rank_up" }),
                  t.rankValue
                )
              : 2 === t.rankType
              ? h.a.createElement(
                  _.Fragment,
                  null,
                  h.a.createElement("i", { className: "icon_rank_down" }),
                  t.rankValue
                )
              : 4 === t.rankType
              ? h.a.createElement("i", { className: "icon_rank_new" })
              : 6 === t.rankType
              ? h.a.createElement(
                  _.Fragment,
                  null,
                  h.a.createElement("i", { className: "icon_rank_popular" }),
                  t.rankValue
                )
              : h.a.createElement("i", { className: "icon_rank_keep" });
          }),
        R = n(400),
        A = n(406),
        T = n(454),
        M = function (e) {
          var t = e.cover,
            n = e.name,
            a = e.nameHilight,
            r = e.mid,
            i = e.subtitle,
            o = e.vid,
            c = e.isonly,
            s = e.songMid,
            l = e.playSong,
            u = e.addPlayList,
            m = e.dowLoadSong,
            d = e.shareSong,
            p = e.isVip,
            f = e.isPlay,
            _ = e.songAction,
            g = e.songType,
            v = e.albumName,
            y = e.coverUrl,
            b = Object(A.d)({ mid: s, songtype: g }),
            E = Object(w.d)(w.a.ALBUM_DETAIL, r),
            N = 0 === (null === _ || void 0 === _ ? void 0 : _.fav) || 5 === g,
            k =
              (0 === (null === _ || void 0 === _ ? void 0 : _.down_hq) &&
                0 === (null === _ || void 0 === _ ? void 0 : _.down_lq) &&
                0 === (null === _ || void 0 === _ ? void 0 : _.down_sq)) ||
              5 === g,
            x =
              0 === (null === _ || void 0 === _ ? void 0 : _.share) || 5 === g;
          return h.a.createElement(
            "div",
            { className: "songlist__songname" },
            c &&
              h.a.createElement("i", {
                className: "songlist__icon songlist__icon_exclusive sprite",
                title: "\u72ec\u5bb6",
              }),
            o &&
              h.a.createElement(
                j.b,
                {
                  to: Object(w.d)(w.a.MV, o),
                  className: "songlist__icon songlist__icon_mv sprite",
                  title: "MV",
                },
                h.a.createElement("span", { className: "icon_txt" }, "MV")
              ),
            p &&
              h.a.createElement("i", {
                className: "songlist__icon songlist__icon_vip sprite",
                title: "VIP",
              }),
            h.a.createElement(
              "span",
              { className: "songlist__songname_txt" },
              t &&
                h.a.createElement(
                  j.b,
                  { to: E, className: "songlist__cover", title: v },
                  h.a.createElement(R.a, {
                    imgurl: y,
                    name: n,
                    className: "songlist__pic",
                    type: "album",
                  })
                ),
              s
                ? h.a.createElement(
                    j.b,
                    { to: b, title: n },
                    a
                      ? h.a.createElement(P.a, {
                          content: Object(L.b)(a),
                          title: n,
                        })
                      : n,
                    "" !== i &&
                      h.a.createElement(
                        "span",
                        { className: "songlist__song_txt" },
                        i
                      )
                  )
                : h.a.createElement(
                    "a",
                    { title: n },
                    n,
                    "" !== i &&
                      h.a.createElement(
                        "span",
                        { className: "songlist__song_txt" },
                        i
                      )
                  )
            ),
            h.a.createElement(T.a, {
              isPlay: f,
              shareSong: d,
              isVip: p,
              playSong: l,
              addPlayList: u,
              dowLoadSong: m,
              hideAdd: N,
              hideDown: k,
              hideShare: x,
            })
          );
        },
        F = function (e) {
          var t = e.name,
            n = e.url,
            a = e.content;
          return h.a.createElement(
            h.a.Fragment,
            null,
            h.a.createElement(
              "div",
              { className: "popup_data_detail__cont" },
              h.a.createElement("p", null, t),
              h.a.createElement(
                "p",
                { className: "c_tx_thin" },
                "\u6765\u6e90\uff1a".concat(n)
              ),
              h.a.createElement(
                "p",
                { className: "c_tx_thin" },
                a ||
                  "\u8be5\u6b4c\u66f2\u6765\u81ea\u7b2c\u4e09\u65b9\u7f51\u7ad9"
              )
            ),
            h.a.createElement("i", { className: "popup_data_detail__arrow" })
          );
        },
        D = n(398);
      n(503), n(504), n(445);
      function U(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = f()(e);
          if (t) {
            var r = f()(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return d()(this, n);
        };
      }
      var B = function (e) {
          var t,
            n = e.item,
            a = e.index,
            r = e.config,
            i = e.selectList,
            o = e.currentMid,
            c = e.rankList,
            s = e.selectEdit,
            l = e.shareSong,
            u = e.addPlayList,
            m = e.playSong,
            d = e.dowLoadSong,
            p = e.deleteSong,
            f = e.handleShowMusicSource,
            _ = !!r.edit && i[a];
          return h.a.createElement(
            "li",
            { key: n.id },
            h.a.createElement(
              "div",
              {
                className: S()("songlist__item", {
                  "songlist__item--even": a % 2 === 0,
                  "songlist__item--disable": n.disabled,
                  "songlist__item--playing": n.mid === o,
                }),
              },
              r.edit &&
                h.a.createElement(
                  "div",
                  {
                    onClick: function () {
                      s(a);
                    },
                    className: S()("sprite", "songlist__edit", {
                      songlist__edit: !_,
                      "songlist__edit--check": _,
                    }),
                  },
                  h.a.createElement("input", {
                    type: "checkbox",
                    className: "songlist__checkbox",
                  })
                ),
              h.a.createElement(
                "div",
                {
                  className: "songlist__number ".concat(
                    a < 3 ? "songlist__number--top" : ""
                  ),
                },
                a + 1
              ),
              r.rank &&
                h.a.createElement(
                  "div",
                  { className: "songlist__rank" },
                  h.a.createElement(q, { data: c[a] })
                ),
              h.a.createElement(M, {
                albumName: n.album.name,
                songMid: n.mid,
                isPlay: o === n.mid,
                mid: n.album.mid,
                shareSong: function (e) {
                  !n.disabled && l(n, g.j.getEventPostion(e));
                },
                addPlayList: function (e) {
                  !n.disabled && u(e, n);
                },
                playSong: function () {
                  m([n], a);
                },
                dowLoadSong: function () {
                  !n.disabled && d([n]);
                },
                cover: r.cover,
                name: n.title,
                nameHilight: n.title_hilight,
                subtitle: n.subtitle,
                vid: n.mv && n.mv.vid,
                isVip: n.isVip,
                isonly: Boolean(n.isonly),
                songAction: n.action,
                songType: n.type,
                coverUrl: n.coverUrl,
              }),
              r.singer &&
                n.singer &&
                h.a.createElement(
                  "div",
                  { className: "songlist__artist" },
                  h.a.createElement(D.a, { singers: n.singer })
                ),
              r.time &&
                h.a.createElement(
                  h.a.Fragment,
                  null,
                  h.a.createElement(
                    "div",
                    {
                      className: S()("songlist__time", {
                        songlist__time_delete: r.delete,
                      }),
                    },
                    n.playTime ||
                      (function (e) {
                        var t = Math.floor(e / 60),
                          n = e - 60 * t;
                        return ""
                          .concat(t < 10 ? "0".concat(t) : t, ":")
                          .concat(n < 10 ? "0".concat(n) : n);
                      })(n.interval)
                  )
                ),
              r.album &&
                n.album &&
                n.album.mid &&
                h.a.createElement(
                  "div",
                  { className: "songlist__album" },
                  h.a.createElement(
                    j.b,
                    { to: Object(w.d)(w.a.ALBUM_DETAIL, n.album.mid) },
                    n.album.title_hilight
                      ? h.a.createElement(P.a, {
                          content: Object(L.b)(n.album.title_hilight),
                          title: n.album.title || n.album.name || "",
                        })
                      : n.album.title || n.album.name || ""
                  )
                ),
              r.delete &&
                h.a.createElement(
                  "a",
                  {
                    onClick: function () {
                      p(a);
                    },
                    className: "songlist__delete",
                  },
                  h.a.createElement(
                    "span",
                    { className: "icon_txt" },
                    "\u5220\u9664"
                  )
                ),
              1 ===
                (null === n ||
                void 0 === n ||
                null === (t = n.action) ||
                void 0 === t
                  ? void 0
                  : t.soso) &&
                h.a.createElement(
                  "div",
                  { className: "songlist__other" },
                  h.a.createElement(
                    "a",
                    {
                      className: "icon_sosomusic sprite",
                      onClick: function (e) {
                        f(e, n);
                      },
                    },
                    "\u65e0\u7248\u6743"
                  )
                )
            )
          );
        },
        Q = function (e) {
          var t = e.onSelectEdit,
            n = e.addPlayList,
            a = e.dowLoadSong,
            r = e.hideEdit,
            i = e.data,
            o = e.config;
          return h.a.createElement(
            "div",
            { className: "mod_songlist_toolbar" },
            h.a.createElement(
              "a",
              {
                className: "mod_btn_green",
                onClick: function () {
                  Object(y.c)({ songList: i, isAdd: !0, isPlay: !0 });
                },
              },
              h.a.createElement("i", { className: "mod_btn_green__icon_play" }),
              "\u64ad\u653e\u5168\u90e8"
            ),
            h.a.createElement(
              "a",
              { onClick: n, className: "mod_btn" },
              h.a.createElement("i", { className: "mod_btn__icon_add" }),
              "\u6dfb\u52a0\u5230"
            ),
            h.a.createElement(
              "a",
              {
                onClick: function () {
                  a();
                },
                className: "mod_btn",
              },
              h.a.createElement("i", { className: "mod_btn__icon_down" }),
              "\u4e0b\u8f7d"
            ),
            !o.habitBatch &&
              h.a.createElement(
                "a",
                {
                  onClick: function () {
                    t(null, !0), r();
                  },
                  className: "mod_btn",
                },
                h.a.createElement("i", { className: "mod_btn__icon_batch" }),
                o.edit
                  ? "\u53d6\u6d88\u6279\u91cf\u64cd\u4f5c"
                  : "\u6279\u91cf\u64cd\u4f5c"
              ),
            !o.habitComment &&
              h.a.createElement(
                "a",
                { className: "mod_btn js_into_comment", href: "#comment_box" },
                h.a.createElement("i", { className: "mod_btn__icon_comment" }),
                "\u8bc4\u8bba(257541)"
              )
          );
        },
        z = (function (e) {
          u()(n, e);
          var t = U(n);
          function n() {
            var e, a;
            o()(this, n);
            for (var r = arguments.length, i = new Array(r), c = 0; c < r; c++)
              i[c] = arguments[c];
            return d()(
              a,
              ((e = a = t.call.apply(t, [this].concat(i))),
              (a.addPlayList = function (e, t) {
                (0, a.props.addPlayList)(g.j.getEventPostion(e), t);
              }),
              (a.getIsEdit = function () {
                var e = a.props.config;
                return e.edit && "down" === (e.more && e.showedPos);
              }),
              (a.handleShowMusicSource = (function () {
                var e = k()(
                  C.a.mark(function e(t, n) {
                    var a, r, i, o;
                    return C.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.pageY + 15),
                              (r = t.pageX - 255),
                              (e.next = 4),
                              Object(I.f)(n.name, n.singer[0].name)
                            );
                          case 4:
                            (i = e.sent),
                              (o = {
                                top: a,
                                left: r,
                                element: h.a.createElement(F, {
                                  name: n.name,
                                  url: i,
                                }),
                                className: "popup_data_detail songlist_tips",
                              }),
                              Object(b.b)(o);
                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })()),
              e)
            );
          }
          return (
            s()(n, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.data,
                    a = t.config,
                    r = t.playSong,
                    i = t.dowLoadSong,
                    o = t.shareSong,
                    c = t.hideEdit,
                    s = t.selectList,
                    l = t.selectEdit,
                    u = t.currentMid,
                    m = t.deleteSong,
                    d = t.currentAll,
                    p = t.rankList,
                    f = t.classType,
                    g = f
                      ? "".concat(f, "_mod_songlist--edit")
                      : "mod_songlist--edit",
                    v = f ? "".concat(f, "_mod_songlist") : "mod_songlist";
                  return h.a.createElement(
                    _.Fragment,
                    null,
                    a.more &&
                      "top" === a.showedPos &&
                      h.a.createElement(Q, {
                        onSelectEdit: l,
                        currentAll: d,
                        addPlayList: this.addPlayList,
                        dowLoadSong: i,
                        hideEdit: c,
                        showedPos: a.showedPos,
                        data: n,
                        config: a,
                      }),
                    h.a.createElement(
                      "div",
                      { className: "".concat(v, " ").concat(a.edit ? g : "") },
                      h.a.createElement(
                        "ul",
                        { className: "songlist__header" },
                        a.edit &&
                          h.a.createElement(
                            "li",
                            {
                              className: S()("sprite", "songlist__edit", {
                                songlist__edit: !d,
                                "songlist__edit--check": d,
                              }),
                              onClick: function () {
                                l(null, !0);
                              },
                            },
                            h.a.createElement("input", {
                              type: "checkbox",
                              className: "songlist__checkbox",
                            })
                          ),
                        h.a.createElement(
                          "li",
                          { className: "songlist__header_name" },
                          "\u6b4c\u66f2"
                        ),
                        a.singer &&
                          h.a.createElement(
                            "li",
                            { className: "songlist__header_author" },
                            "\u6b4c\u624b"
                          ),
                        a.album &&
                          h.a.createElement(
                            "li",
                            { className: "songlist__header_album" },
                            "\u4e13\u8f91"
                          ),
                        a.time &&
                          h.a.createElement(
                            "li",
                            { className: "songlist__header_time" },
                            "\u65f6\u957f"
                          )
                      ),
                      h.a.createElement(
                        "ul",
                        { className: "songlist__list" },
                        n &&
                          n.map(function (t, n) {
                            return h.a.createElement(B, {
                              key: t.id,
                              item: t,
                              index: n,
                              rankList: p,
                              currentMid: u,
                              config: a,
                              selectList: s,
                              selectEdit: l,
                              playSong: r,
                              deleteSong: m,
                              dowLoadSong: i,
                              shareSong: o,
                              addPlayList: e.addPlayList,
                              handleShowMusicSource: e.handleShowMusicSource,
                            });
                          })
                      )
                    ),
                    this.getIsEdit() &&
                      h.a.createElement(
                        "div",
                        {
                          className:
                            "mod_songlist_toolbar mod_songlist_toolbar--edit",
                        },
                        h.a.createElement(
                          "div",
                          {
                            onClick: function () {
                              l(null, !0);
                            },
                            className: S()("sprite", "songlist__edit", {
                              songlist__edit: !d,
                              "songlist__edit--check": d,
                            }),
                          },
                          h.a.createElement("input", {
                            type: "checkbox",
                            className: "songlist__checkbox",
                          })
                        ),
                        h.a.createElement(
                          "a",
                          { className: "mod_btn" },
                          h.a.createElement("i", {
                            className: "mod_btn__icon_play",
                          }),
                          "\u64ad\u653e\u5168\u90e8"
                        ),
                        h.a.createElement(
                          "a",
                          { onClick: this.addPlayList, className: "mod_btn" },
                          h.a.createElement("i", {
                            className: "mod_btn__icon_add",
                          }),
                          "\u6dfb\u52a0\u5230"
                        ),
                        h.a.createElement(
                          "a",
                          {
                            onClick: function () {
                              i();
                            },
                            className: "mod_btn",
                          },
                          h.a.createElement("i", {
                            className: "mod_btn__icon_down",
                          }),
                          "\u4e0b\u8f7d"
                        ),
                        h.a.createElement(
                          "a",
                          { onClick: c, className: "mod_btn" },
                          h.a.createElement("i", {
                            className: "mod_btn__icon_batch",
                          }),
                          "\u53d6\u6d88\u6279\u91cf\u64cd\u4f5c"
                        )
                      )
                  );
                },
              },
            ]),
            n
          );
        })(_.PureComponent);
      z.defaultProps = { config: { showedPos: "down" } };
      var H = z,
        V =
          (n(417),
          n(505),
          function (e) {
            var t,
              n,
              a = e.data,
              r = e.playSong,
              i = e.index;
            return h.a.createElement(
              "li",
              { className: "debutlist__item" },
              h.a.createElement(
                "div",
                { className: "debutlist__item_box" },
                h.a.createElement(
                  "a",
                  {
                    className: "debutlist__link mod_cover",
                    onClick: function (e) {
                      e.preventDefault(), r([a], i);
                    },
                  },
                  h.a.createElement(R.a, {
                    className: "debutlist__pic",
                    imgurl: g.j.getAlbumPic(a.album.pmid),
                    name: a.title,
                    type: "album",
                  }),
                  h.a.createElement("i", { className: "mod_cover__mask" }),
                  h.a.createElement("i", { className: "mod_cover__icon_play" })
                ),
                h.a.createElement(
                  "div",
                  { className: "debutlist__cont" },
                  h.a.createElement(
                    "h3",
                    { className: "debutlist__song" },
                    h.a.createElement(
                      j.c,
                      { to: Object(w.d)(w.a.SONGE_DETAIL, a.mid) },
                      a.title,
                      ((null === a || void 0 === a ? void 0 : a.subtitle) ||
                        (null === a ||
                        void 0 === a ||
                        null === (t = a.album) ||
                        void 0 === t
                          ? void 0
                          : t.subtitle)) &&
                        h.a.createElement(
                          "span",
                          { className: "debutlist__song_txt" },
                          (null === a || void 0 === a ? void 0 : a.subtitle) ||
                            (null === a ||
                            void 0 === a ||
                            null === (n = a.album) ||
                            void 0 === n
                              ? void 0
                              : n.subtitle)
                        )
                    )
                  ),
                  h.a.createElement(
                    "p",
                    { className: "debutlist__author" },
                    a.singer &&
                      h.a.createElement(D.a, {
                        className: "c_tx_thin",
                        singers: a.singer,
                      })
                  )
                ),
                h.a.createElement(
                  "div",
                  { className: "debutlist__time c_tx_thin" },
                  a.playTime
                )
              )
            );
          }),
        G = function (e) {
          for (
            var t = e.data,
              n = e.index,
              a = e.playSong,
              r = [],
              i = Math.ceil(t.length / 9),
              o = function (e) {
                var n = t.slice(9 * e, 9 * e + 9);
                n.length < 9 &&
                  t.length > 9 &&
                  (n = n.concat(t.slice(0, 9 - n.length))),
                  r.push(
                    h.a.createElement(
                      "ul",
                      { className: "debutlist__list", key: e },
                      n.map(function (t, n) {
                        return h.a.createElement(V, {
                          index: 9 * e + n,
                          data: t,
                          playSong: a,
                          key: t.id,
                        });
                      })
                    )
                  );
              },
              c = 0;
            c < i;
            c++
          )
            o(c);
          return h.a.createElement(
            "div",
            { className: "mod_debutlist mod_slide" },
            h.a.createElement(
              "div",
              {
                className: "slide__list",
                style: { left: "-".concat(100 * n, "%") },
              },
              r
            )
          );
        };
      G.defaultProps = { data: [] };
      var W = G,
        K = (n(455), n(424)),
        Y = n(427);
      function X(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function J(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? X(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : X(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Z(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = f()(e);
          if (t) {
            var r = f()(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return d()(this, n);
        };
      }
      var $ = (function (e) {
        u()(n, e);
        var t = Z(n);
        function n() {
          var e, a;
          o()(this, n);
          for (var r = arguments.length, i = new Array(r), c = 0; c < r; c++)
            i[c] = arguments[c];
          return d()(
            a,
            ((e = a = t.call.apply(t, [this].concat(i))),
            (a.state = { selectList: {}, currentAll: !1 }),
            (a.selectSongList = []),
            (a.selectEdit = function (e, t) {
              var n,
                r = a.props.data,
                i = a.props.changeSelect,
                o = a.state.selectList,
                c = [];
              if (t) {
                var s = a.state.currentAll;
                (s = !s),
                  (n = a.computedList(s)),
                  a.setState({ currentAll: s });
              } else
                ((n = J({}, o))[e] = !Boolean(n[e])),
                  a.setState({ currentAll: a.computedCurrentAll(n) });
              a.setState({ selectList: n });
              var l = [];
              Object.keys(n).forEach(function (e) {
                n[e] && (c.push(parseInt(e, 10)), l.push(r[e]));
              }),
                (a.selectSongList = l),
                i && i(l, c);
            }),
            (a.handleSelectEdit = function (e, t) {
              a.selectEdit(e, t);
            }),
            (a.playSong = function (e, t) {
              var n = a.props.data,
                r = a.props,
                i = r.isPlayList,
                o = r.changePlay;
              i ? o(t, n) : Object(y.c)({ songList: e, isAdd: !0, isPlay: !0 });
            }),
            (a.dowLoadSong = function (e) {
              var t = a.props,
                n = t.config,
                r = t.data;
              n.edit && a.selectSongList.length > 0
                ? Object(E.d)(a.selectSongList)
                : e && Object(E.d)(e),
                n.edit || e || Object(E.d)(r);
            }),
            (a.addPlayList = function (e, t) {
              var n,
                r = a.props,
                i = r.config,
                o = r.isPlayList,
                c = r.changeAddSongPlayList,
                s = r.data;
              (n =
                i.edit && !t
                  ? a.selectSongList
                  : t
                  ? Array.isArray(t)
                    ? t
                    : [t]
                  : s) && 0 !== n.length
                ? Object(b.b)(
                    J(
                      J({}, e),
                      {},
                      {
                        element: h.a.createElement(K.a, {
                          changeAddSongPlayList: c,
                          isPlayList: o,
                          songList: n,
                        }),
                        className: "mod_operate_menu",
                      }
                    )
                  )
                : v.a.show({
                    type: "warning",
                    msg: "\u8bf7\u9009\u62e9\u6b4c\u66f2",
                  });
            }),
            (a.shareSong = function (e, t) {
              var n,
                a = {
                  pageType: "song",
                  type: "\u6b4c\u66f2",
                  singerName: e.singer
                    .map(function (e) {
                      return e.name;
                    })
                    .join("|"),
                  shareUrl: Object(w.c)(w.a.SONGE_DETAIL, {
                    songid: e.id && e.id.toString(),
                  }),
                  title: e.title,
                  picUrl: "".concat(
                    g.j.getAlbumPic(e.album.pmid || e.album.mid)
                  ),
                  hide: function () {
                    n();
                  },
                  tips: {
                    copy: function () {
                      v.a.show({
                        type: "success",
                        msg: "\u590d\u5236\u6210\u529f",
                      });
                    },
                  },
                },
                r = J(
                  J({}, t),
                  {},
                  {
                    element: h.a.createElement(Y.a, a),
                    className: "mod_operate_menu",
                  }
                );
              n = Object(b.b)(r);
            }),
            (a.makeEmptySelectList = function () {
              a.setState({ selectList: {} });
            }),
            (a.handleDeleteSong = function (e) {
              a.makeEmptySelectList(), a.props.deleteSong(e);
            }),
            e)
          );
        }
        return (
          s()(n, [
            {
              key: "computedCurrentAll",
              value: function (e) {
                for (var t = this.props.data, n = 0; n < t.length; n++)
                  if (!e[n]) return !1;
                return !0;
              },
            },
            {
              key: "computedList",
              value: function (e) {
                var t = {};
                return (
                  this.props.data.forEach(function (n, a) {
                    t[a] = e;
                  }),
                  t
                );
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.data,
                  n = e.config,
                  a = e.type,
                  r = e.index,
                  i = e.hideEdit,
                  o = e.currentMid,
                  c = e.rankList,
                  s = e.classType,
                  l = this.state,
                  u = l.selectList,
                  m = l.currentAll,
                  d = t;
                return (
                  n.length && n.length < d.length && (d = d.slice(0, n.length)),
                  "list" === a
                    ? h.a.createElement(H, {
                        deleteSong: this.handleDeleteSong,
                        currentMid: o,
                        hideEdit: i,
                        currentAll: m,
                        selectList: u,
                        shareSong: this.shareSong,
                        dowLoadSong: this.dowLoadSong,
                        playSong: this.playSong,
                        addPlayList: this.addPlayList,
                        config: n,
                        data: d,
                        selectEdit: this.handleSelectEdit,
                        rankList: c,
                        classType: s,
                      })
                    : h.a.createElement(W, {
                        playSong: this.playSong,
                        data: d,
                        index: r,
                      })
                );
              },
            },
          ]),
          n
        );
      })(_.PureComponent);
      $.defaultProps = {
        type: "list",
        config: {
          album: !0,
          time: !0,
          singer: !1,
          rank: !1,
          cover: !1,
          edit: !1,
          more: !1,
        },
        isPlayList: !1,
      };
      t.a = $;
    },
    409: function (e, t, n) {
      "use strict";
      var a = n(15),
        r = n(452);
      t.a = function (e, t) {
        return e.map(function (e) {
          var n,
            i,
            o,
            c = e;
          c.songInfo && (c = c.songInfo);
          var s,
            l = (function (e) {
              var t,
                n,
                r,
                i,
                o,
                c,
                s,
                l,
                u,
                m,
                d,
                p,
                f,
                _,
                h,
                g,
                v,
                y,
                b = {
                  album: e.album || {
                    id: e.albumid,
                    mid: e.albummid,
                    name: e.albumname,
                    pmid: e.albummid,
                    title: e.albumname,
                    subtitle: e.albumdesc,
                  },
                  id: e.songid || e.id,
                  isonly: e.isonly,
                  mid: e.songmid || e.mid,
                  mv: e.mv,
                  name: e.name || e.songname,
                  ov: e.ov,
                  pay: e.pay || {},
                  sa: e.sa,
                  singer: e.singer,
                  subtitle: e.subtitle,
                  title: e.title || e.songname,
                  title_hilight: e.title_hilight,
                  type:
                    null !==
                      (t =
                        null !== (n = e.type) && void 0 !== n
                          ? n
                          : e.songtype) && void 0 !== t
                      ? t
                      : 0,
                  volume: e.volume,
                  vid: e.vid || (e.mv && e.mv.vid),
                  interval: e.interval,
                  playTime: e.interval && a.j.makePlayTime(e.interval),
                  alertid:
                    e.alertid ||
                    (null === (r = e.action) || void 0 === r
                      ? void 0
                      : r.alert) ||
                    0,
                  file: e.file,
                  disabled: !1,
                };
              b.pay = {
                payalbum:
                  (null === e ||
                  void 0 === e ||
                  null === (i = e.pay) ||
                  void 0 === i
                    ? void 0
                    : i.payalbum) ||
                  (null === e ||
                  void 0 === e ||
                  null === (o = e.pay) ||
                  void 0 === o
                    ? void 0
                    : o.price_album) ||
                  0,
                payalbumprice:
                  (null === e ||
                  void 0 === e ||
                  null === (c = e.pay) ||
                  void 0 === c
                    ? void 0
                    : c.payalbumprice) ||
                  (null === e ||
                  void 0 === e ||
                  null === (s = e.pay) ||
                  void 0 === s
                    ? void 0
                    : s.price_album) ||
                  0,
                paydownload:
                  (null === e ||
                  void 0 === e ||
                  null === (l = e.pay) ||
                  void 0 === l
                    ? void 0
                    : l.paydownload) ||
                  (null === e ||
                  void 0 === e ||
                  null === (u = e.pay) ||
                  void 0 === u
                    ? void 0
                    : u.pay_down) ||
                  0,
                payinfo:
                  (null === e ||
                  void 0 === e ||
                  null === (m = e.pay) ||
                  void 0 === m
                    ? void 0
                    : m.payinfo) || 0,
                payplay:
                  (null === e ||
                  void 0 === e ||
                  null === (d = e.pay) ||
                  void 0 === d
                    ? void 0
                    : d.payplay) ||
                  (null === e ||
                  void 0 === e ||
                  null === (p = e.pay) ||
                  void 0 === p
                    ? void 0
                    : p.pay_play) ||
                  0,
                paytrackmouth:
                  (null === e ||
                  void 0 === e ||
                  null === (f = e.pay) ||
                  void 0 === f
                    ? void 0
                    : f.paytrackmouth) ||
                  (null === e ||
                  void 0 === e ||
                  null === (_ = e.pay) ||
                  void 0 === _
                    ? void 0
                    : _.pay_month) ||
                  0,
                paytrackprice:
                  (null === e ||
                  void 0 === e ||
                  null === (h = e.pay) ||
                  void 0 === h
                    ? void 0
                    : h.paytrackprice) ||
                  (null === e ||
                  void 0 === e ||
                  null === (g = e.pay) ||
                  void 0 === g
                    ? void 0
                    : g.price_track) ||
                  0,
                timefree:
                  (null === e ||
                  void 0 === e ||
                  null === (v = e.pay) ||
                  void 0 === v
                    ? void 0
                    : v.timefree) ||
                  (null === e ||
                  void 0 === e ||
                  null === (y = e.pay) ||
                  void 0 === y
                    ? void 0
                    : y.time_free) ||
                  0,
              };
              for (var E = 0; E < b.singer.length; E++) {
                var w = b.singer[E];
                w.title && (w.name = w.title);
              }
              return b;
            })(c);
          c.action
            ? (s = c.action.switch || c.action.switches)
            : c.switch && (s = c.switch),
            1 !== l.type || ("undefined" !== typeof s && 0 !== s) || (s = 403),
            s || (s = 403);
          var u =
            null === (n = s) ||
            void 0 === n ||
            null === (i = n.toString(2)) ||
            void 0 === i
              ? void 0
              : i.split("");
          u.pop(), u.reverse();
          for (
            var m = [
                "play_lq",
                "play_hq",
                "play_sq",
                "down_lq",
                "down_hq",
                "down_sq",
                "soso",
                "fav",
                "share",
                "bgm",
                "ring",
                "sing",
                "radio",
                "try",
                "give",
                "poster",
                "play_5_1",
                "down_5_1",
                "bullet",
                "cache_lq",
                "cache_hq",
                "cache_sq",
                "cache_dts",
                "track_pay",
              ],
              d = c.action || {},
              p = 0;
            p < m.length;
            p++
          )
            d[m[p]] = parseInt(u[p], 10) || 0;
          if (null !== d && void 0 !== d && d.icons) {
            var f = d.icons.toString(2).split("");
            f.reverse(),
              (l.copyright = parseInt(f[0], 10)),
              (l.isVip = Boolean(parseInt(f[18], 10)));
          }
          return (
            (d.play = 0),
            (d.play_lq || d.play_hq || d.play_sq || d.play_5_1) && (d.play = 1),
            d.try &&
              (null === (o = l.file) || void 0 === o ? void 0 : o.size_try) >
                0 &&
              (l.tryPlay = !0),
            d.play ||
              l.pay.payplay ||
              l.pay.paydownload ||
              (l.tryPlay ? (l.tryIcon = !0) : (l.disabled = !0)),
            (l.action = d),
            t && (l.ctx = t),
            c.vs && (l.vs = c.vs),
            (l.coverUrl = Object(r.a)(l)),
            l
          );
        });
      };
    },
    410: function (e, t, n) {
      "use strict";
      n.d(t, "d", function () {
        return m;
      }),
        n.d(t, "c", function () {
          return d;
        }),
        n.d(t, "e", function () {
          return p;
        }),
        n.d(t, "b", function () {
          return f;
        }),
        n.d(t, "a", function () {
          return _;
        });
      var a = n(108),
        r = n.n(a),
        i = n(76),
        o = n.n(i),
        c = n(390),
        s = n(431),
        l = n(405),
        u = n(474),
        m = function (e) {
          e && 0 !== e.length
            ? Object(l.b)({
                title: "QQ\u97f3\u4e50\u63d0\u9192\u60a8",
                subtit:
                  "\u4e0b\u8f7d\u6b4c\u66f2\u9700\u8981\u5728QQ\u97f3\u4e50\u5ba2\u6237\u7aef\u64cd\u4f5c!\u4f7f\u7528QQ\u97f3\u4e50\u5ba2\u6237\u7aef\u83b7\u5f97\u9ad8\u54c1\u8d28\u5b8c\u6574\u4f53\u9a8c",
                type: "warning",
                btn: [
                  {
                    fn: function () {
                      Object(s.c)(e);
                    },
                    text: "\u6253\u5f00\u5ba2\u6237\u7aef",
                  },
                  {
                    fn: function () {
                      Object(s.b)();
                    },
                    text: "\u4e0b\u8f7d\u5ba2\u6237\u7aef",
                  },
                ],
              })
            : c.a.show({
                type: "warning",
                msg: "\u8bf7\u9009\u62e9\u6b4c\u66f2",
              });
        },
        d = function () {
          var e = Object(l.b)({
            title: "\u65e0\u7248\u6743\u6b4c\u66f2",
            subtit:
              "\u6211\u4eec\u7684\u76ee\u6807\u662f\u63d0\u4f9b\u6700\u5168\u7684\u66f2\u5e93\uff0c\u5c06\u5c3d\u5feb\u5411\u7248\u6743\u65b9\u8f6c\u8fbe\u4f60\u7684\u9700\u6c42",
            type: "warning",
            btn: [
              {
                fn: function () {
                  e();
                },
                text: "\u6211\u77e5\u9053\u4e86",
              },
            ],
          });
        },
        p = function () {
          var e = Object(l.b)({
            title: "QQ\u97f3\u4e50\u63d0\u9192\u60a8",
            subtit:
              "\u5df2\u8fc7\u6ee4\u4ed8\u8d39\u6b4c\u66f2\uff0c\u6ca1\u6709\u53ef\u4ee5\u64ad\u653e\u7684\u5355\u66f2\uff01\u4f7f\u7528QQ\u97f3\u4e50\u5ba2\u6237\u7aef\u83b7\u5f97\u9ad8\u54c1\u8d28\u5b8c\u6574\u4f53\u9a8c\u3002",
            type: "warning",
            btn: [
              {
                fn: function () {
                  Object(s.d)([]), e();
                },
                text: "\u6253\u5f00\u5ba2\u6237\u7aef",
              },
              {
                fn: function () {
                  Object(s.b)(), e();
                },
                text: "\u4e0b\u8f7d\u5ba2\u6237\u7aef",
              },
            ],
          });
        },
        f = function () {
          var e = Object(l.b)({
            title: "QQ\u97f3\u4e50\u63d0\u9192\u60a8",
            subtit:
              "\u5220\u9664\u6b4c\u66f2\u9700\u8981\u5728QQ\u97f3\u4e50\u5ba2\u6237\u7aef\u64cd\u4f5c!\u4f7f\u7528QQ\u97f3\u4e50\u5ba2\u6237\u7aef\u83b7\u5f97\u9ad8\u54c1\u8d28\u5b8c\u6574\u4f53\u9a8c\uff01",
            type: "warning",
            btn: [
              {
                fn: function () {
                  Object(s.d)([]), e();
                },
                text: "\u6253\u5f00\u5ba2\u6237\u7aef",
              },
              {
                fn: function () {
                  Object(s.b)(), e();
                },
                text: "\u4e0b\u8f7d\u5ba2\u6237\u7aef",
              },
            ],
          });
        },
        _ = (function () {
          var e = r()(
            o.a.mark(function e(t) {
              var n, a;
              return o.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(u.a)(t);
                    case 2:
                      if (
                        (null !== (n = e.sent) && void 0 !== n && n.content) ||
                        (null !== n && void 0 !== n && n.subtitle)
                      ) {
                        e.next = 6;
                        break;
                      }
                      return (
                        c.a.show({
                          type: "warning",
                          msg: "\u7f51\u7edc\u5f02\u5e38\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\uff01",
                        }),
                        e.abrupt("return")
                      );
                    case 6:
                      a = Object(l.b)({
                        title: n.title || "QQ\u97f3\u4e50\u63d0\u9192\u60a8",
                        subtit: n.subtitle,
                        content: n.content,
                        isSubtitPre: !0,
                        type: "warning",
                        btn: [
                          {
                            fn: function () {
                              a();
                            },
                            text: "\u53d6\u6d88",
                          },
                          n.btn,
                        ],
                      });
                    case 7:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
    },
    411: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "b", function () {
          return r;
        }),
        n.d(t, "c", function () {
          return i;
        });
      var a = function (e, t) {
          var n = e;
          return e <= 0 ? (n = t) : n--, n;
        },
        r = function (e, t) {
          var n = e;
          return e >= t ? (n = 0) : n++, n;
        },
        i = function () {
          (document.documentElement.scrollTop || document.body.scrollTop) > 0 &&
            document.body.scrollIntoView({ behavior: "smooth" });
        };
    },
    412: function (e, t, n) {
      "use strict";
      n.d(t, "d", function () {
        return k;
      }),
        n.d(t, "e", function () {
          return x;
        }),
        n.d(t, "c", function () {
          return I;
        }),
        n.d(t, "h", function () {
          return Q;
        }),
        n.d(t, "f", function () {
          return z;
        }),
        n.d(t, "b", function () {
          return A;
        }),
        n.d(t, "a", function () {
          return T;
        }),
        n.d(t, "g", function () {
          return U;
        });
      var a = n(2),
        r = n.n(a),
        i = n(78),
        o = n.n(i),
        c = n(108),
        s = n.n(c),
        l = n(76),
        u = n.n(l),
        m = n(15),
        d = n(390),
        p = n(478),
        f = n(391),
        _ = n(409),
        h = n(441),
        g = n(397),
        v = n(442),
        y = n(479);
      function b(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? b(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : b(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var w = function (e) {
          return e
            .replace(/&#38;?/g, "&amp;")
            .replace(/&amp;/g, "&")
            .replace(/&#(\d+);?/g, function (e, t) {
              return String.fromCharCode(t);
            })
            .replace(/\xb4/g, "'")
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&quot;/g, '"')
            .replace(/&acute;/gi, "'")
            .replace(/&nbsp;/g, " ")
            .replace(/&#13;/g, "\n")
            .replace(/(&#10;)|(&#x\w*;)/g, "")
            .replace(/&amp;/g, "&");
        },
        N = function (e) {
          return e
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/\\/, "\uff3c")
            .replace(/'/g, "\u2019")
            .replace(/"/g, "\u201c")
            .replace(/&#39;/g, "\u2019")
            .replace(/&quot;/g, "\u201c")
            .replace(/&acute;/g, "\u2019")
            .replace(/%/g, "\uff05")
            .replace(/\(/g, "\uff08")
            .replace(/\)/g, "\uff09")
            .replace(/\n/g, "");
        },
        k = function (e, t) {
          return e === t ? "mod_tab__current" : "";
        },
        x = function (e, t) {
          return e.match(t) ? "mod_tab__current" : "";
        },
        C = function (e) {
          var t = e.pageuin,
            n = e.start,
            a = void 0 === n ? 0 : n,
            r = e.num,
            i = void 0 === r ? 12 : r;
          return Object(m.b)({
            format: "json",
            type: "GET",
            url: ""
              .concat(
                m.c.isBrowser ? "" : "http:",
                "//c.y.qq.com/mv/fcgi-bin/fcg_get_myfav_mv.fcg?reqtype=1&support=1&cid=205361447"
              )
              .concat(m.i.getUin() === t ? "" : "&encuin=".concat(t), "&qq=")
              .concat(m.i.getUin(), "&rnd=")
              .concat(Math.random()),
            data: { num: a, pagesize: i },
          }).then(function (e) {
            return e || [];
          });
        },
        O = (function () {
          var e = s()(
            u.a.mark(function e(t) {
              return u.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (t.isStateHost) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return", !1);
                    case 2:
                      return e.abrupt(
                        "return",
                        Object(m.h)()
                          .request([
                            {
                              method: "get_identity",
                              param: { uin: m.i.getUin() },
                              module: "magzine.MagzineUtilityServer",
                            },
                          ])
                          .then(function (e) {
                            try {
                              var t = o()(e, 1)[0];
                              if (
                                t &&
                                0 === t.code &&
                                t.data &&
                                t.data.is_invited &&
                                1 === t.data.is_invited
                              )
                                return !0;
                            } catch (n) {
                              return !1;
                            }
                            return !1;
                          })
                      );
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        S = function (e) {
          m.i.getUin() < 1e4 && f.a.openLogin();
          var t = e.pageuin,
            n = /^\d*$/.test(t);
          return Object(m.h)()
            .request([
              {
                method: n ? "get_favor_list" : "get_favor_list_byid",
                param: { userid: t, fav_type: 1 },
                module: "music.favor_system_read",
              },
            ])
            .then(
              (function () {
                var e = s()(
                  u.a.mark(function e(t) {
                    var n, a, r, i, c, s, l, d;
                    return u.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((e.prev = 0),
                                (n = o()(t, 1)),
                                !(
                                  (a = n[0]) &&
                                  0 === a.code &&
                                  a.data &&
                                  a.data.vec_favor.length > 0
                                ))
                              ) {
                                e.next = 14;
                                break;
                              }
                              for (
                                r = !0,
                                  i = a.data.vec_favor,
                                  c = [],
                                  s = [],
                                  l = 0;
                                l < i.length;
                                l++
                              )
                                c.push(i[l].mid), s.push(parseInt(i[l].id, 10));
                              return (
                                (e.next = 10),
                                (u = c),
                                (p = s),
                                Object(m.h)()
                                  .request([
                                    {
                                      method: "AlbumListenNum",
                                      param: { albumMids: u, albumIDs: p },
                                      module:
                                        "music.musichallAlbum.AlbumListenInfo",
                                    },
                                  ])
                                  .then(function (e) {
                                    try {
                                      var t = o()(e, 1)[0];
                                      if (t && 0 === t.code && t.data.listenNum)
                                        return t.data.listenNum;
                                    } catch (n) {
                                      return [];
                                    }
                                    return [];
                                  })
                              );
                            case 10:
                              return (
                                e.sent.forEach(function (e, t) {
                                  (c[t] !== e.albumMid && s[t] !== e.albumID) ||
                                    (i[t].listen_cnt = e.num || 0);
                                }),
                                (d = Object(g.f)(i)),
                                e.abrupt("return", {
                                  radiolist: d,
                                  radioUser: r,
                                })
                              );
                            case 14:
                              return e.abrupt("return", {
                                radiolist: [],
                                radioUser: !1,
                              });
                            case 17:
                              return (
                                (e.prev = 17),
                                (e.t0 = e.catch(0)),
                                e.abrupt("return", {
                                  radiolist: [],
                                  radioUser: !1,
                                })
                              );
                            case 20:
                            case "end":
                              return e.stop();
                          }
                        var u, p;
                      },
                      e,
                      null,
                      [[0, 17]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()
            );
        },
        j = function (e) {
          var t = { From: e.start, Size: e.num, HostUin: "" };
          return (
            e.pageuin && e.pageEncrypt_uin && (t.HostUin = e.pageEncrypt_uin),
            Object(m.h)()
              .request([
                {
                  module: "music.concern.RelationList",
                  method: e.type || "GetFansList",
                  param: t,
                },
              ])
              .then(function (e) {
                try {
                  var t, n, a, r;
                  return {
                    hasMore:
                      null === (t = e[0]) ||
                      void 0 === t ||
                      null === (n = t.data) ||
                      void 0 === n
                        ? void 0
                        : n.HasMore,
                    list: Object(p.a)(
                      (null === (a = e[0]) ||
                      void 0 === a ||
                      null === (r = a.data) ||
                      void 0 === r
                        ? void 0
                        : r.List) || []
                    ),
                  };
                } catch (i) {}
                return { hasMore: !1, list: [] };
              })
          );
        },
        I = function (e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          return (
            m.i.getUin() < 1e4 && f.a.openLogin(),
            Object(m.h)()
              .request([
                {
                  module: "Concern.ConcernSystemServer",
                  method: "cgi_concern_user_v2",
                  param: {
                    opertype: t ? 1 : 0,
                    source: 0,
                    userinfo: { usertype: n, userid: e },
                  },
                },
              ])
              .then(function (e) {
                try {
                  var t = o()(e, 1)[0];
                  if (
                    "[object Object]" !== Object.prototype.toString.call(t) ||
                    !("code" in t) ||
                    0 !== t.code
                  )
                    return (
                      d.a.show({
                        type: "warning",
                        msg: "\u5173\u6ce8\u5931\u8d25\uff01\u5f53\u524d\u7f51\u7edc\u7e41\u5fd9\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5\u3002",
                      }),
                      !1
                    );
                  var n = t.data;
                  if (0 === n.code) return !0;
                  1e3 === n.code
                    ? f.a.openLogin()
                    : d.a.show({
                        type: "warning",
                        msg: "\u5173\u6ce8\u5931\u8d25\uff01\u5f53\u524d\u7f51\u7edc\u7e41\u5fd9\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5\u3002",
                      });
                } catch (a) {
                  d.a.show({
                    type: "warning",
                    msg: "\u5173\u6ce8\u5931\u8d25\uff01\u5f53\u524d\u7f51\u7edc\u7e41\u5fd9\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5\u3002",
                  });
                }
                return !1;
              })
          );
        },
        P = (function () {
          var e = s()(
            u.a.mark(function e(t) {
              var n;
              return u.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = {
                          song_begin: t.start,
                          song_num: t.num || 10,
                          disstid: Number(t.myFavDissId),
                        }),
                        t.isStateHost && (n.ctx = 1),
                        e.abrupt(
                          "return",
                          Object(m.h)()
                            .request([
                              {
                                module: "music.srfDissInfo.aiDissInfo",
                                method: "uniform_get_Dissinfo",
                                param: n,
                              },
                            ])
                            .then(function (e) {
                              var t = { songlist: [], totalNum: 0 };
                              try {
                                var n,
                                  a = o()(e, 1)[0];
                                if (
                                  a &&
                                  0 === a.code &&
                                  null !== a &&
                                  void 0 !== a &&
                                  null !== (n = a.data) &&
                                  void 0 !== n &&
                                  n.songlist
                                )
                                  (t.songlist = Object(_.a)(
                                    a.data.songlist || []
                                  )),
                                    (t.totalNum = a.total_song_num);
                                else if (!e || 4e3 !== a.code) return t;
                                return t;
                              } catch (r) {}
                              return t;
                            })
                        )
                      );
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        L = (function () {
          var e = s()(
            u.a.mark(function e(t) {
              return u.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        Object(m.b)({
                          format: "json",
                          type: "GET",
                          url: "".concat(
                            m.c.isBrowser ? "" : "http:",
                            "//c.y.qq.com/fav/fcgi-bin/fcg_get_profile_order_asset.fcg"
                          ),
                          data: {
                            ct: 20,
                            cid: 205360956,
                            userid:
                              null === t || void 0 === t ? void 0 : t.pageuin,
                            reqtype: "playlist" === t.type ? 3 : 2,
                            sin: t.start || 0,
                            ein:
                              (t.start || 0) +
                              (t.num || 10) -
                              ("album" === t.type ? 1 : 0),
                          },
                        }).then(function (e) {
                          if (e && 0 === e.code) {
                            var n,
                              a = e.data,
                              i =
                                a["album" === t.type ? "albumlist" : "cdlist"],
                              o = i.length > 0 ? Object(g.f)(i) : [];
                            return (
                              (n = {}),
                              r()(
                                n,
                                "playlist" === t.type
                                  ? "playlist"
                                  : "albumlist",
                                o
                              ),
                              r()(
                                n,
                                "totalNum",
                                "playlist" === t.type
                                  ? a.totaldiss
                                  : a.totalalbum
                              ),
                              n
                            );
                          }
                          return (
                            (e && 4e3 === e.code) ||
                              d.a.show({
                                type: "warning",
                                msg: "\u7f51\u7edc\u7e41\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
                              }),
                            { totalNum: 0 }
                          );
                        })
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        q = function (e, t) {
          var n = "";
          return (
            "album" === e.sub
              ? (n =
                  "//c.y.qq.com/shop/fcgi-bin/fcg_get_order?from=1&cmd=sales_album&type=1&t=".concat(
                    new Date().getTime()
                  ))
              : "song" === e.sub
              ? (n =
                  "//c.y.qq.com/shop/fcgi-bin/fcg_get_order?from=1&cmd=sales_album&type=2&t=".concat(
                    new Date().getTime()
                  ))
              : "peri" === e.sub &&
                (n =
                  "//c.y.qq.com/shop/fcgi-bin/fcg_peri_order?type=5&t=".concat(
                    new Date().getTime()
                  )),
            Object(m.b)({
              format: "json",
              type: "GET",
              url: "".concat(m.c.isBrowser ? "" : "http:").concat(n),
              data: {
                uin: m.i.getUin(),
                start: e.start,
                num: e.num,
                platform: "yqq",
              },
            }).then(function (n) {
              var a = {
                album: "albumlist",
                song: "songlist",
                peri: "orderlst",
              };
              try {
                var i,
                  o = n.data,
                  c = [];
                return (
                  n && 1e3 === n.code && f.a.openLogin(),
                  "album" === e.sub
                    ? (c = Object(v.a)(o[a[e.sub]] || []))
                    : "song" === e.sub
                    ? (c = Object(_.a)(o[a[e.sub]] || []))
                    : "peri" === e.sub && (c = o[a[e.sub]] || []),
                  t
                    ? {
                        boughtTotal: o.total,
                        periTotal: o.peri_total,
                        songTotal: o.song_total,
                      }
                    : ((i = {}),
                      r()(i, "bought".concat(e.sub), c),
                      r()(i, "boughtTotal", o.total),
                      i)
                );
              } catch (s) {
                return {
                  boughtalbum: [],
                  boughtsong: [],
                  boughtperi: [],
                  boughtTotal: 0,
                };
              }
            })
          );
        },
        R = function (e) {
          var t = "//c.y.qq.com/rsc/fcgi-bin/fcg_user_created_diss?r=".concat(
            new Date().getTime()
          );
          return Object(m.b)({
            format: "json",
            type: "GET",
            url: "".concat(m.c.isBrowser ? "" : "http:").concat(t),
            data: {
              hostuin: e.pageuin,
              sin: e.start || 0,
              size: (e.num || 10) + 1,
            },
          }).then(function (t) {
            if (1e3 !== t.code) {
              if (4e3 !== t.code) {
                var n,
                  a = t.data,
                  r = [],
                  i = {
                    201: "//y.qq.com/mediastyle/global/img/cover_like.png",
                    205: "//y.qq.com/mediastyle/global/img/cover_qzone.png",
                    206: "//y.qq.com/mediastyle/global/img/cover_upload.png",
                  };
                return 0 === t.code && null !== a && void 0 !== a && a.disslist
                  ? (null === (n = a.disslist) ||
                      void 0 === n ||
                      n.forEach(function (t) {
                        var n = E({}, t);
                        (n.nickname = e.creator),
                          (n.encrypt_uin = a.encrypt_uin),
                          (205 !== n.dirid && 206 !== n.dirid) ||
                            n.tid ||
                            (n.tid = n.dirid),
                          n.diss_cover ||
                            (n.diss_cover =
                              "//y.qq.com/mediastyle/global/img/cover_playlist.png?max_age=31536000"),
                          n.dirid > 200 && n.dirid < 210
                            ? e.isStateHost
                              ? parseInt(n.song_cnt, 10) > 0 &&
                                (i[n.dirid] && (n.diss_cover = i[n.dirid]),
                                r.push(n))
                              : n.dirid > 200 &&
                                n.dirid < 210 &&
                                parseInt(n.song_cnt, 10) > 0 &&
                                r.push(n)
                            : r.push(n);
                      }),
                    {
                      myCreatedPlaylist: Object(g.f)(r).slice(0, e.num || 10),
                      totalNum: a.totoal,
                    })
                  : (d.a.show({
                      type: "warning",
                      msg: "\u670d\u52a1\u5668\u7e41\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\uff01",
                    }),
                    { myCreatedPlaylist: [], totalNum: 0 });
              }
            } else f.a.openLogin();
          });
        },
        A = function (e) {
          return Object(m.h)()
            .request([
              {
                module: "music.musicasset.PlaylistBaseWrite",
                method: "AddPlaylist",
                param: {
                  dirName: e.moddirnames,
                  dirDesc: e.moddesc,
                  dirPicUrl: e.modFPicUrl,
                  taglist: e.modtagList,
                },
              },
            ])
            .then(function (e) {
              try {
                var t = o()(e, 1)[0];
                switch (t.code) {
                  case 0:
                    return t.data.result;
                  case 1e3:
                    f.a.openLogin();
                    break;
                  case 4:
                    d.a.show({
                      type: "warning",
                      msg: "\u64cd\u4f5c\u5931\u8d25\uff01\u60a8\u8f93\u5165\u7684\u6b4c\u5355\u540d\u79f0\u8fc7\u957f\uff01",
                    });
                    break;
                  case 10:
                    d.a.show({
                      type: "warning",
                      msg: "\u64cd\u4f5c\u5931\u8d25\uff01\u60a8\u8f93\u5165\u7684\u6807\u7b7e\u6587\u5b57\u8fc7\u591a\uff01",
                    });
                    break;
                  case 11:
                    d.a.show({
                      type: "warning",
                      msg: "\u64cd\u4f5c\u5931\u8d25\uff01\u60a8\u8f93\u5165\u7684\u6807\u7b7e\u5185\u5bb9\u975e\u6cd5\uff01",
                    });
                    break;
                  case 12:
                    d.a.show({
                      type: "warning",
                      msg: "\u64cd\u4f5c\u5931\u8d25\uff01\u60a8\u8f93\u5165\u7684\u6b4c\u5355\u540d\u975e\u6cd5\uff01",
                    });
                    break;
                  case 13:
                    d.a.show({
                      type: "warning",
                      msg: "\u64cd\u4f5c\u5931\u8d25\uff01\u60a8\u8f93\u5165\u7684\u6b4c\u5355\u7b80\u4ecb\u5185\u5bb9\u975e\u6cd5\uff01",
                    });
                    break;
                  case 80081:
                    d.a.show({
                      type: "warning",
                      msg: "\u64cd\u4f5c\u5931\u8d25\uff01\u60a8\u8f93\u5165\u7684\u6b4c\u5355\u540d\u79f0\u548c\u5176\u4ed6\u6b4c\u5355\u6709\u91cd\u590d\uff01",
                    });
                    break;
                  default:
                    d.a.show({
                      type: "warning",
                      msg: "\u4fdd\u5b58\u6b4c\u5355\u5931\u8d25\uff01\u5f53\u524d\u7f51\u7edc\u7e41\u5fd9\uff0c\u8bf7\u60a8\u7a0d\u540e\u91cd\u8bd5\u3002",
                    });
                }
                return null;
              } catch (n) {}
            })
            .catch(function () {
              return (
                d.a.show({
                  type: "warning",
                  msg: "\u4fdd\u5b58\u6b4c\u5355\u5931\u8d25\uff01\u5f53\u524d\u7f51\u7edc\u7e41\u5fd9\uff0c\u8bf7\u60a8\u7a0d\u540e\u91cd\u8bd5\u3002",
                }),
                null
              );
            });
        },
        T = function (e) {
          return Object(m.h)()
            .request([
              {
                module: "music.musicasset.PlaylistBaseWrite",
                method: "DelPlaylist",
                param: { dirId: e },
              },
            ])
            .then(function (e) {
              try {
                var t = o()(e, 1)[0];
                switch (t.code) {
                  case 0:
                    return (
                      d.a.show({
                        type: "success",
                        msg: "\u5220\u9664\u6b4c\u5355\u6210\u529f\uff01",
                      }),
                      t.data.result
                    );
                  case 1e3:
                    f.a.openLogin();
                    break;
                  default:
                    d.a.show({
                      type: "warning",
                      msg: "\u64cd\u4f5c\u5931\u8d25\uff01\u5f53\u524d\u7f51\u7edc\u7e41\u5fd9\uff0c\u8bf7\u60a8\u7a0d\u540e\u91cd\u8bd5\u3002",
                    });
                }
                return null;
              } catch (n) {}
            })
            .catch(function () {
              return (
                d.a.show({
                  type: "warning",
                  msg: "\u64cd\u4f5c\u5931\u8d25\uff01\u5f53\u524d\u7f51\u7edc\u7e41\u5fd9\uff0c\u8bf7\u60a8\u7a0d\u540e\u91cd\u8bd5\u3002",
                }),
                null
              );
            });
        },
        M = function (e) {
          return (
            m.i.getUin() < 1e4 && f.a.openLogin(),
            Object(m.h)()
              .request([
                {
                  method: "get_author_magzine_list",
                  param: {
                    fieldtype: 2,
                    ordertype: 1,
                    versiontype: 1,
                    uin: m.i.isWeiXin() ? 0 : e.pageuin,
                    suin: m.i.isWeiXin() ? e.pageuin : "".concat(e.pageuin),
                    sin: 0,
                    size: 28,
                    level: [200, 300, 400],
                    status: [100, 200],
                  },
                  module: "magzine.MagzineReadServer",
                },
              ])
              .then(function (e) {
                try {
                  var t,
                    n = o()(e, 1)[0];
                  if (
                    0 === n.code &&
                    n.data &&
                    0 === n.data.code &&
                    n.data.v_magzine.length > 0
                  )
                    return {
                      magzinelist: Object(y.b)(
                        (null === n ||
                        void 0 === n ||
                        null === (t = n.data) ||
                        void 0 === t
                          ? void 0
                          : t.v_magzine) || []
                      ),
                    };
                } catch (a) {
                  return { magzinelist: [] };
                }
                return { magzinelist: [] };
              })
          );
        },
        F = function (e) {
          return Object(m.b)({
            format: "json",
            type: "GET",
            url: "".concat(
              m.c.isBrowser ? "" : "http:",
              "//c.y.qq.com/mv/fcgi-bin/fcg_ugc_mv_list.fcg"
            ),
            data: { cmd: 3, uin: e.pageuin, sin: 0, size: 28 },
          }).then(function (e) {
            try {
              return 0 === e.code &&
                e.data &&
                e.data.total &&
                e.data.mvlist &&
                e.data.mvlist.length > 0
                ? { uploadMvlist: Object(h.b)(e.data.mvlist) }
                : { uploadMvlist: [] };
            } catch (t) {
              return { uploadMvlist: [] };
            }
          });
        },
        D = function () {
          return Object(m.b)({
            format: "json",
            type: "GET",
            url: "".concat(
              m.c.isBrowser ? "" : "http:",
              "//c.y.qq.com/rsc/fcgi-bin/fcg_get_profile_homepage.fcg"
            ),
            data: { cid: 205360838, ct: 20, userid: 0, reqfrom: 1, reqtype: 0 },
          }).then(
            (function () {
              var e = s()(
                u.a.mark(function e(t) {
                  var n, a;
                  return u.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!t || 0 !== t.code) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt(
                            "return",
                            (null === t ||
                            void 0 === t ||
                            null === (n = t.data) ||
                            void 0 === n ||
                            null === (a = n.creator) ||
                            void 0 === a
                              ? void 0
                              : a.encrypt_uin) || ""
                          );
                        case 2:
                          return e.abrupt("return", "");
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()
          );
        },
        U = function (e) {
          return Object(m.b)({
            format: "json",
            type: "GET",
            url: "//c.y.qq.com/rsc/fcgi-bin/3g_fav_lock",
            data: {
              cid: 339,
              chloginstyle: 1,
              qq: m.i.getUin(),
              lock: e,
              rettype: 20,
              ct: 19,
              cv: "yqq",
            },
          })
            .then(function (e) {
              var t = !1;
              try {
                if (e && 0 === e.code) return (t = !0);
              } catch (n) {
                return t;
              }
            })
            .catch(function (e) {
              d.a.show({
                type: "warning",
                msg: "\u64cd\u4f5c\u5931\u8d25\uff01\u5f53\u524d\u7f51\u7edc\u7e41\u5fd9\uff0c\u8bf7\u60a8\u7a0d\u540e\u91cd\u8bd5\u3002",
              });
            });
        },
        B = (function () {
          var e = s()(
            u.a.mark(function e() {
              var t,
                n,
                a,
                r,
                i,
                o,
                c = arguments;
              return u.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = c.length > 0 && void 0 !== c[0] ? c[0] : ""),
                        (n = !1),
                        (a = t),
                        (r = !0),
                        (i = ""),
                        (o = m.i.getUin()),
                        /^[0-9]+$/.test(a) &&
                          parseInt(a, 10) <= 1e4 &&
                          (a = ""),
                        a || (n = !0),
                        e.abrupt(
                          "return",
                          Object(m.b)({
                            format: "json",
                            type: "GET",
                            url: "".concat(
                              m.c.isBrowser ? "" : "http:",
                              "//c.y.qq.com/rsc/fcgi-bin/fcg_get_profile_homepage.fcg"
                            ),
                            data: {
                              cid: 205360838,
                              ct: 24,
                              userid: n ? 0 : a,
                              reqfrom: 1,
                              reqtype: 0,
                              hostUin: 0,
                              loginUin: o,
                              needNewCode: 0,
                            },
                          }).then(
                            (function () {
                              var e = s()(
                                u.a.mark(function e(t) {
                                  var n,
                                    c,
                                    s,
                                    l,
                                    m,
                                    p,
                                    f,
                                    _,
                                    g,
                                    v,
                                    y,
                                    b,
                                    k,
                                    x,
                                    j,
                                    I,
                                    P,
                                    L,
                                    R,
                                    A,
                                    T,
                                    M,
                                    F,
                                    U,
                                    B,
                                    Q,
                                    z,
                                    H,
                                    V,
                                    G,
                                    W,
                                    K,
                                    Y;
                                  return u.a.wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            (e.prev = 0),
                                              0 !== t.code &&
                                                d.a.show({
                                                  type: "warning",
                                                  msg: t.msg,
                                                }),
                                              (v = null),
                                              (y = null),
                                              (b = ""),
                                              (k = t.data),
                                              (x =
                                                null === t ||
                                                void 0 === t ||
                                                null === (n = t.data) ||
                                                void 0 === n ||
                                                null === (c = n.mymusic) ||
                                                void 0 === c
                                                  ? void 0
                                                  : c.length),
                                              (i = k.creator.encrypt_uin),
                                              (j = 0);
                                          case 9:
                                            if (!(j < x)) {
                                              e.next = 23;
                                              break;
                                            }
                                            (I = t.data.mymusic[j].type),
                                              (P = t.data.mymusic[j]),
                                              (e.t0 = I),
                                              (e.next =
                                                1 === e.t0
                                                  ? 15
                                                  : 3 === e.t0
                                                  ? 17
                                                  : 2 === e.t0
                                                  ? 19
                                                  : 20);
                                            break;
                                          case 15:
                                            return (
                                              (v = P), e.abrupt("break", 20)
                                            );
                                          case 17:
                                            return (
                                              (y = P), e.abrupt("break", 20)
                                            );
                                          case 19:
                                            return e.abrupt("break", 20);
                                          case 20:
                                            j++, (e.next = 9);
                                            break;
                                          case 23:
                                            if (a) {
                                              e.next = 27;
                                              break;
                                            }
                                            (a = o.toString()), (e.next = 31);
                                            break;
                                          case 27:
                                            return (e.next = 29), D();
                                          case 29:
                                            (L = e.sent) &&
                                              ((b = L),
                                              a !== o.toString() &&
                                                a !== b &&
                                                (r = !1));
                                          case 31:
                                            return (
                                              (e.next = 33), C({ pageuin: a })
                                            );
                                          case 33:
                                            return (
                                              (R = e.sent),
                                              (e.next = 36),
                                              O({ isStateHost: r })
                                            );
                                          case 36:
                                            return (
                                              (A = e.sent),
                                              (e.next = 39),
                                              S({ pageuin: a })
                                            );
                                          case 39:
                                            if (
                                              ((T = e.sent),
                                              (M = {
                                                fansnum:
                                                  t.data.creator.nums.fansnum,
                                                follownum:
                                                  t.data.creator.nums.follownum,
                                                favalbumnum: v ? v.num1 : 0,
                                                favdirnum: v ? v.num2 : 0,
                                                favsongnum: v ? v.num0 : 0,
                                                selfdirnum: t.data.mydiss.num,
                                                favmvnum: R.total,
                                              }),
                                              (F = []),
                                              k.creator.lvinfo)
                                            )
                                              for (
                                                U = 0,
                                                  B = k.creator.lvinfo.length;
                                                U < B;
                                                U++
                                              )
                                                (Q = k.creator.lvinfo[U]),
                                                  (z = Q.iconurl.replace(
                                                    /\/pc\//gi,
                                                    "/mac/"
                                                  )),
                                                  (H =
                                                    -1 !== z.indexOf("/mac/n")),
                                                  (V =
                                                    "//y.qq.com/portal/vipportal/index.html"),
                                                  -1 !== z.indexOf("/mac/") &&
                                                    (z = z.replace(
                                                      ".png",
                                                      "@2x.png"
                                                    )),
                                                  -1 !== z.indexOf("xvip") ||
                                                  -1 !== z.indexOf("xz")
                                                    ? (V = "//xing.qq.com/")
                                                    : -1 !== z.indexOf("sui") &&
                                                      (V =
                                                        "//y.qq.com/vip/fufeibao/index.html"),
                                                  F.push({
                                                    jumpurl: V,
                                                    picurl: z,
                                                    year: H,
                                                  });
                                            if (((G = !1), (W = {}), y && r)) {
                                              e.next = 53;
                                              break;
                                            }
                                            if (!r) {
                                              e.next = 51;
                                              break;
                                            }
                                            return (
                                              (e.next = 49),
                                              q(
                                                {
                                                  sub: "album",
                                                  start: 0,
                                                  num: 30,
                                                },
                                                !0
                                              )
                                            );
                                          case 49:
                                            (0 === (W = e.sent).boughtTotal &&
                                              0 === W.periTotal &&
                                              0 === W.songTotal) ||
                                              (G = !0);
                                          case 51:
                                            e.next = 54;
                                            break;
                                          case 53:
                                            G = !0;
                                          case 54:
                                            return (
                                              (K = v ? v.id : 0),
                                              (Y = {
                                                avatarUrl: k.creator.headpic,
                                                name: N(
                                                  w(
                                                    null === k ||
                                                      void 0 === k ||
                                                      null ===
                                                        (s = k.creator) ||
                                                      void 0 === s ||
                                                      null === (l = s.nick) ||
                                                      void 0 === l
                                                      ? void 0
                                                      : l.trim()
                                                  )
                                                ),
                                                viparr: F,
                                                isStateHost: r,
                                                myFavDissId: K,
                                                islock: !(
                                                  null === k ||
                                                  void 0 === k ||
                                                  null === (m = k.creator) ||
                                                  void 0 === m ||
                                                  !m.islock
                                                ),
                                                uin:
                                                  (null === k ||
                                                  void 0 === k ||
                                                  null === (p = k.creator) ||
                                                  void 0 === p
                                                    ? void 0
                                                    : p.uin) || "",
                                                followflag: !(
                                                  null === k ||
                                                  void 0 === k ||
                                                  null === (f = k.creator) ||
                                                  void 0 === f ||
                                                  !f.isfollow
                                                ),
                                                favlock: !(
                                                  null === k ||
                                                  void 0 === k ||
                                                  null === (_ = k.creator) ||
                                                  void 0 === _ ||
                                                  !_.fav_lock
                                                ),
                                                disslock: !(
                                                  null === k ||
                                                  void 0 === k ||
                                                  null === (g = k.creator) ||
                                                  void 0 === g ||
                                                  !g.diss_lock
                                                ),
                                              }),
                                              e.abrupt(
                                                "return",
                                                E(
                                                  {
                                                    user_data: Y,
                                                    num_map: M,
                                                    isLogined: o > 1e4,
                                                    pageuin: a,
                                                    pageEncrypt_uin: i,
                                                    favmvlist: Object(h.a)(
                                                      (null === R ||
                                                      void 0 === R
                                                        ? void 0
                                                        : R.mvlist) || []
                                                    ),
                                                    magazineUser: A,
                                                    boughtUser: G,
                                                  },
                                                  T
                                                )
                                              )
                                            );
                                          case 59:
                                            (e.prev = 59), (e.t1 = e.catch(0));
                                          case 61:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    e,
                                    null,
                                    [[0, 59]]
                                  );
                                })
                              );
                              return function (t) {
                                return e.apply(this, arguments);
                              };
                            })()
                          )
                        )
                      );
                    case 9:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        Q = (function () {
          var e = s()(
            u.a.mark(function e(t, n) {
              var a,
                r,
                i,
                c,
                s,
                l,
                m,
                d,
                p,
                f,
                _,
                g,
                v,
                y,
                b,
                w,
                N,
                k,
                x,
                O,
                S,
                I,
                A,
                T,
                D,
                U,
                B,
                Q,
                z,
                H,
                V,
                G,
                W,
                K,
                Y,
                X,
                J,
                Z,
                $,
                ee,
                te,
                ne,
                ae,
                re,
                ie,
                oe,
                ce,
                se,
                le = arguments;
              return u.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (a = le.length > 2 && void 0 !== le[2] ? le[2] : {}),
                        (r = a.start),
                        (i = void 0 === r ? 0 : r),
                        (c = a.pageSize),
                        (s = void 0 === c ? 10 : c),
                        (l = {}),
                        (m = t || []),
                        (d = o()(m, 2)),
                        (p = d[0]),
                        (f = void 0 === p ? "lick" : p),
                        (_ = d[1]),
                        (g = void 0 === _ ? "song" : _),
                        (e.t0 = f),
                        (e.next =
                          "like" === e.t0
                            ? 6
                            : "buy" === e.t0
                            ? 31
                            : "create" === e.t0
                            ? 51
                            : "focus" === e.t0
                            ? 57
                            : "fans" === e.t0
                            ? 74
                            : "uploadmv" === e.t0
                            ? 80
                            : "magazine" === e.t0
                            ? 86
                            : 92);
                      break;
                    case 6:
                      (e.t1 = g),
                        (e.next =
                          "song" === e.t1
                            ? 9
                            : "playlist" === e.t1
                            ? 14
                            : "album" === e.t1
                            ? 19
                            : "mv" === e.t1
                            ? 24
                            : 29);
                      break;
                    case 9:
                      return (
                        (e.next = 11),
                        P({
                          start: i,
                          num: s,
                          isStateHost:
                            (null === n ||
                            void 0 === n ||
                            null === (v = n.user_data) ||
                            void 0 === v
                              ? void 0
                              : v.isStateHost) || !1,
                          myFavDissId:
                            (null === n ||
                            void 0 === n ||
                            null === (y = n.user_data) ||
                            void 0 === y
                              ? void 0
                              : y.myFavDissId) || "0",
                        })
                      );
                    case 11:
                      return (
                        (b = e.sent), (l = E({}, b)), e.abrupt("break", 30)
                      );
                    case 14:
                      return (
                        (e.next = 16),
                        L({
                          start: i,
                          num: s,
                          pageuin: n.pageuin,
                          type: "playlist",
                        })
                      );
                    case 16:
                      return (
                        (w = e.sent), (l = E({}, w)), e.abrupt("break", 30)
                      );
                    case 19:
                      return (
                        (e.next = 21),
                        L({
                          start: i,
                          num: s,
                          pageuin: n.pageuin,
                          type: "album",
                        })
                      );
                    case 21:
                      return (
                        (N = e.sent), (l = E({}, N)), e.abrupt("break", 30)
                      );
                    case 24:
                      return (
                        (e.next = 26),
                        C({ pageuin: n.pageuin, start: i, num: s })
                      );
                    case 26:
                      return (
                        (k = e.sent),
                        (l = {
                          favmvlist: Object(h.a)(
                            (null === k || void 0 === k ? void 0 : k.mvlist) ||
                              []
                          ),
                          totalNum: k.total,
                        }),
                        e.abrupt("break", 30)
                      );
                    case 29:
                      return e.abrupt("break", 30);
                    case 30:
                      return e.abrupt("break", 93);
                    case 31:
                      (e.t2 = g),
                        (e.next =
                          "album" === e.t2
                            ? 34
                            : "song" === e.t2
                            ? 39
                            : "peri" === e.t2
                            ? 44
                            : 49);
                      break;
                    case 34:
                      return (e.next = 36), q({ sub: g, start: i, num: s });
                    case 36:
                      return (
                        (x = e.sent), (l = E({}, x)), e.abrupt("break", 50)
                      );
                    case 39:
                      return (e.next = 41), q({ sub: g, start: i, num: s });
                    case 41:
                      return (
                        (O = e.sent), (l = E({}, O)), e.abrupt("break", 50)
                      );
                    case 44:
                      return (e.next = 46), q({ sub: g, start: i, num: s });
                    case 46:
                      return (
                        (S = e.sent), (l = E({}, S)), e.abrupt("break", 50)
                      );
                    case 49:
                      return e.abrupt("break", 50);
                    case 50:
                      return e.abrupt("break", 93);
                    case 51:
                      return (
                        (I = n.pageuin),
                        (A = n.user_data),
                        (T = A.isStateHost),
                        (D = void 0 !== T && T),
                        (U = A.name),
                        (e.next = 54),
                        R({
                          pageuin: I,
                          start: i,
                          num: s,
                          isStateHost: D,
                          creator: U,
                        })
                      );
                    case 54:
                      return (
                        (B = e.sent), (l = E({}, B)), e.abrupt("break", 93)
                      );
                    case 57:
                      (e.t3 = g),
                        (e.next =
                          "singer" === e.t3 ? 60 : "user" === e.t3 ? 66 : 72);
                      break;
                    case 60:
                      return (
                        (Q = n.pageuin),
                        (z = void 0 === Q ? "" : Q),
                        (H = n.pageEncrypt_uin),
                        (V = void 0 === H ? "" : H),
                        (e.next = 63),
                        j({
                          type: "GetFollowSingerList",
                          start: i,
                          num: s,
                          pageuin: z,
                          pageEncrypt_uin: V,
                        })
                      );
                    case 63:
                      return (
                        (G = e.sent),
                        (l = { fansData: G }),
                        e.abrupt("break", 73)
                      );
                    case 66:
                      return (
                        (W = n.pageuin),
                        (K = void 0 === W ? "" : W),
                        (Y = n.pageEncrypt_uin),
                        (X = void 0 === Y ? "" : Y),
                        (e.next = 69),
                        j({
                          type: "GetFollowUserList",
                          start: i,
                          num: s,
                          pageuin: K,
                          pageEncrypt_uin: X,
                        })
                      );
                    case 69:
                      return (
                        (J = e.sent),
                        (l = { fansData: J }),
                        e.abrupt("break", 73)
                      );
                    case 72:
                      return e.abrupt("break", 73);
                    case 73:
                      return e.abrupt("break", 93);
                    case 74:
                      return (
                        (Z = n.pageuin),
                        ($ = void 0 === Z ? "" : Z),
                        (ee = n.pageEncrypt_uin),
                        (te = void 0 === ee ? "" : ee),
                        (e.next = 77),
                        j({
                          type: "GetFansList",
                          start: i,
                          num: s,
                          pageuin: $,
                          pageEncrypt_uin: te,
                        })
                      );
                    case 77:
                      return (
                        (ne = e.sent),
                        (l = { fansData: ne }),
                        e.abrupt("break", 93)
                      );
                    case 80:
                      return (
                        (ae = n.pageuin),
                        (re = void 0 === ae ? "" : ae),
                        (e.next = 83),
                        F({ pageuin: re })
                      );
                    case 83:
                      return (ie = e.sent), (l = ie), e.abrupt("break", 93);
                    case 86:
                      return (
                        (oe = n.pageuin),
                        (ce = void 0 === oe ? "" : oe),
                        (e.next = 89),
                        M({ pageuin: ce })
                      );
                    case 89:
                      return (se = e.sent), (l = se), e.abrupt("break", 93);
                    case 92:
                      return e.abrupt("break", 93);
                    case 93:
                      return e.abrupt("return", l);
                    case 94:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
        z = (function () {
          var e = s()(
            u.a.mark(function e(t) {
              var n, a, r;
              return u.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = t.uin),
                        (a = void 0 === n ? "" : n),
                        m.i.isLogin())
                      ) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt("return", {
                        user_data: { uin: "", favlock: !1, disslock: !1 },
                        isLogined: !1,
                      });
                    case 3:
                      return (e.next = 5), B(a);
                    case 5:
                      return (r = e.sent), e.abrupt("return", E({}, r));
                    case 7:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
    },
    413: function (e, t, n) {
      "use strict";
      var a = n(361),
        r = n.n(a),
        i = n(362),
        o = n.n(i),
        c = n(363),
        s = n.n(c),
        l = n(364),
        u = n.n(l),
        m = n(365),
        d = n.n(m),
        p = n(3),
        f = n.n(p);
      function _(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = d()(e);
          if (t) {
            var r = d()(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return u()(this, n);
        };
      }
      var h = (function (e) {
        s()(n, e);
        var t = _(n);
        function n() {
          var e, a;
          r()(this, n);
          for (var i = arguments.length, o = new Array(i), c = 0; c < i; c++)
            o[c] = arguments[c];
          return u()(
            a,
            ((e = a = t.call.apply(t, [this].concat(o))),
            (a.handleWindowScroll = function () {
              var e = a.children.offsetHeight,
                t = void 0 === e ? 0 : e,
                n = a.props,
                r = n.bottom,
                i = n.onChangeScroll;
              t - (window.scrollY + a.clientHeight) < r && i();
            }),
            (a.handleResize = function () {
              a.clientHeight = document.documentElement.clientHeight;
            }),
            e)
          );
        }
        return (
          o()(n, [
            {
              key: "componentDidMount",
              value: function () {
                (this.clientHeight = document.documentElement.clientHeight),
                  window.addEventListener("resize", this.handleResize, !1),
                  window.addEventListener(
                    "scroll",
                    this.handleWindowScroll,
                    !1
                  );
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                window.removeEventListener("resize", this.handleResize, !1),
                  window.removeEventListener(
                    "scroll",
                    this.handleWindowScroll,
                    !1
                  );
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.props.children;
                return f.a.createElement(
                  p.Fragment,
                  null,
                  f.a.Children.map(t, function (t) {
                    return f.a.cloneElement(t, {
                      ref: function (t) {
                        return (e.children = t);
                      },
                    });
                  })
                );
              },
            },
          ]),
          n
        );
      })(p.PureComponent);
      (h.defaultProps = { bottom: 100 }), (t.a = h);
    },
    414: function (e, t, n) {
      "use strict";
      var a = n(3),
        r = n.n(a),
        i = (n(417), n(508), n(15)),
        o = n(415),
        c = n(16),
        s = n(398),
        l = n(400),
        u = n(397),
        m = n(77),
        d = function (e, t) {
          e.stopPropagation(),
            t.length < 4 || window.open(Object(c.d)(c.a.MV, t));
        },
        p = function (e) {
          var t,
            n,
            a = e.data;
          return r.a.createElement(
            "p",
            { className: "mv_list__singer" },
            ((null === a ||
            void 0 === a ||
            null === (t = a.singers) ||
            void 0 === t
              ? void 0
              : t.length) > 0 &&
              r.a.createElement(s.a, { singers: a.singers })) ||
              ((null === a ||
              void 0 === a ||
              null === (n = a.uploader) ||
              void 0 === n
                ? void 0
                : n.encuin) &&
                r.a.createElement(
                  m.b,
                  {
                    to: ""
                      .concat(Object(c.d)(c.a.PROFILE), "?uin=")
                      .concat(a.uploader.encuin),
                    title: a.uploader.nick,
                  },
                  "" !== a.uploader.nick
                    ? "\u4e0a\u4f20\u8005\uff1a".concat(a.uploader.nick)
                    : "\u672a\u77e5"
                ))
          );
        },
        f = function (e) {
          var t = e.data,
            n = e.config,
            a = {
              width: "".concat(100 / n.col, "%"),
              paddingBottom: "".concat(n.paddingBottom, "px"),
            };
          return r.a.createElement(
            "li",
            { className: "mv_list__item mv_list_slide__item", style: a },
            r.a.createElement(
              "div",
              { className: "mv_list__item_box" },
              r.a.createElement(
                "a",
                {
                  onClick: function (e) {
                    d(e, t.vid);
                  },
                  className: "mv_list__cover mod_cover",
                  title: t.title,
                },
                r.a.createElement(l.a, {
                  className: "mv_list__pic",
                  imgurl: t.picurl
                    ? i.j.fixUrl(t.picurl)
                    : i.j.getDefaultImg("mv"),
                  name: t.title,
                  type: "mv",
                }),
                r.a.createElement("i", { className: "mod_cover__mask" }),
                r.a.createElement("i", { className: "mod_cover__icon_play" })
              ),
              r.a.createElement(
                "h3",
                { className: "mv_list__title" },
                r.a.createElement(
                  "a",
                  {
                    onClick: function (e) {
                      d(e, t.vid);
                    },
                  },
                  t.title || " "
                )
              ),
              n.singer && r.a.createElement(p, { data: t }),
              n.info &&
                r.a.createElement(
                  "div",
                  { className: "mv_list__info" },
                  r.a.createElement(
                    "span",
                    { className: "mv_list__listen" },
                    r.a.createElement("i", {
                      className: "mv_list__listen_icon sprite",
                    }),
                    Object(u.d)(t.playcnt)
                  ),
                  n.time
                    ? "".concat(Object(o.c)(new Date(1e3 * t.pubdate)))
                    : ""
                )
            )
          );
        },
        _ =
          (n(480),
          function (e) {
            for (
              var t = e.data,
                n = e.index,
                a = e.config,
                i = Math.ceil(t.length / 9),
                o = [],
                c = 0;
              c < i;
              c++
            ) {
              var s = t.slice(10 * c, 10 * c + 10);
              s.length < 10 &&
                t.length > 10 &&
                (s = s.concat(t.slice(0, 10 - s.length))),
                o.push(
                  r.a.createElement(
                    "ul",
                    { className: "mv_list__list mv_list_slide__list", key: c },
                    s.map(function (e) {
                      return r.a.createElement(f, {
                        data: e,
                        config: a,
                        key: e.vid,
                      });
                    })
                  )
                );
            }
            return r.a.createElement(
              "div",
              { className: "mod_mv mod_slide" },
              r.a.createElement(
                "div",
                {
                  className: "slide__list",
                  style: { left: "-".concat(100 * n, "%") },
                },
                o
              )
            );
          }),
        h = function (e) {
          var t = e.data,
            n = e.index,
            a = e.config,
            i = t;
          return (
            a.length && a.length < i.length && (i = i.slice(0, a.length)),
            a.slide
              ? r.a.createElement(_, { data: i, index: n, config: a })
              : r.a.createElement(
                  "ul",
                  { className: "mv_list__list" },
                  i.map(function (e, t) {
                    return r.a.createElement(f, {
                      data: e,
                      config: a,
                      key: e.vid || t,
                    });
                  })
                )
          );
        };
      h.defaultProps = {
        index: 0,
        config: { singer: !0, slide: !1, col: 5, info: !0 },
      };
      t.a = h;
    },
    415: function (e, t, n) {
      "use strict";
      n.d(t, "f", function () {
        return a;
      }),
        n.d(t, "g", function () {
          return r;
        }),
        n.d(t, "c", function () {
          return o;
        }),
        n.d(t, "d", function () {
          return c;
        }),
        n.d(t, "a", function () {
          return s;
        }),
        n.d(t, "b", function () {
          return l;
        }),
        n.d(t, "i", function () {
          return m;
        }),
        n.d(t, "h", function () {
          return u;
        }),
        n.d(t, "j", function () {
          return d;
        }),
        n.d(t, "e", function () {
          return p;
        });
      var a = function (e) {
          var t = [];
          return (
            Array.isArray(e) &&
              (t = e.map(function (e) {
                return {
                  imgurl: e.cover_url_big || e.cover || e.bigpicUrl,
                  dissname: e.title || e.dirName,
                  listennum: e.listen_num || e.access_num,
                  dissid: e.dirId || e.tid || e.content_id,
                };
              })),
            t
          );
        },
        r = function (e) {
          var t = [];
          return (
            Array.isArray(e) &&
              (t = e.map(function (e) {
                return { name: e.item_name || e.lan, id: e.item_id || e.type };
              })),
            t
          );
        },
        i = function (e) {
          return e > 9 ? "".concat(e) : "0".concat(e);
        },
        o = function (e, t) {
          var n = e.getFullYear(),
            a = e.getMonth() + 1,
            r = e.getDate();
          return t
            ? t.replace("y", n.toString()).replace("m", i(a)).replace("d", i(r))
            : "".concat(n, "-").concat(i(a), "-").concat(i(r));
        },
        c = function (e, t) {
          if (
            null === e ||
            void 0 === e ||
            !e.length ||
            null === t ||
            void 0 === t ||
            !t.length
          )
            return [];
          for (var n = [], a = 0; a < e.length; a++)
            for (var r = 0; r < t[a].length; r++)
              n.push("".concat(e[a], "_").concat(t[a][r]));
          return n;
        },
        s = function (e, t) {
          for (var n = 0; n < e.length; n++)
            for (var a = e[n].toplist, r = 0; r < a.length; r++)
              if (a[r].topId === t) return a[r].period;
          return o(new Date());
        },
        l = function (e) {
          var t = e ? new Date(e) : new Date(),
            n = t.getDay();
          t.setDate(t.getDate() - ((n + 6) % 7));
          var a = "".concat(i(t.getMonth() + 1), ".").concat(i(t.getDate()));
          t.setDate(t.getDate() + 6);
          var r = "".concat(i(t.getMonth() + 1), ".").concat(i(t.getDate()));
          return e
            ? "".concat(a, "-").concat(r)
            : t.toLocaleDateString().replace(/\//g, "-");
        },
        u = function (e, t, n, a) {
          if (t && t.match(/\d{4}-\d{1,2}-\d{2}/)) return e;
          if (a) {
            var r = a.find(function (e) {
              return 3 === e.groupId;
            });
            if (
              r &&
              r.toplist.find(function (e) {
                return e.topId === n;
              })
            )
              return "\u7b2c".concat(t.split("_")[1], "\u5468");
          }
          var o = new Date(e),
            c = "".concat(i(o.getMonth() + 1), ".").concat(i(o.getDate()));
          o.setDate(o.getDate() - 6);
          var s = "".concat(i(o.getMonth() + 1), ".").concat(i(o.getDate()));
          return "".concat(s, "-").concat(c);
        },
        m = function (e) {
          if (0 === e.length) return [];
          for (var t = [], n = 0; n < e.length; n++) {
            var a = e[n];
            t.push("".concat(a.year, "_").concat(a.week));
          }
          return t.unshift("".concat(e[0].year, "_").concat(e[0].week + 1)), t;
        },
        d = function () {
          var e = new Date(),
            t = e.getHours(),
            n = 9 - (e.getMinutes() % 10),
            a = 59 - e.getSeconds(),
            r = "".concat(n, ":").concat(i(a)),
            o = 60 * n + a,
            c = 1 === e.getDay() && t < 12;
          return (
            c
              ? ((n = 59 - e.getMinutes()),
                (a = 59 - e.getSeconds()),
                (r = "".concat(i(n), ":").concat(i(a))),
                (r = (11 === t ? "" : "".concat(i(11 - t), ":")) + r),
                (o += 3600 * (11 - t)))
              : (r = r),
            { t: r, cd: o, isMon: c }
          );
        },
        p = function (e, t) {
          return e.replace(
            t,
            '<span class="search_result__keyword">'.concat(t, "</span>")
          );
        };
    },
    417: function (e, t, n) {},
    418: function (e, t, n) {
      "use strict";
      var a, r, i, o;
      n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "b", function () {
          return r;
        }),
        n.d(t, "c", function () {
          return i;
        }),
        n.d(t, "d", function () {
          return o;
        }),
        (function (e) {
          (e[(e.SONG = 1)] = "SONG"),
            (e[(e.ALBUM = 2)] = "ALBUM"),
            (e[(e.PLAYLIST = 3)] = "PLAYLIST"),
            (e[(e.TOPLIST = 4)] = "TOPLIST"),
            (e[(e.MV = 5)] = "MV"),
            (e[(e.LowQualitySong = 13)] = "LowQualitySong"),
            (e[(e.Ring = 14)] = "Ring"),
            (e[(e.Accompaniment = 15)] = "Accompaniment"),
            (e[(e.MomentMV = 31)] = "MomentMV"),
            (e[(e.CdpVideo = 32)] = "CdpVideo");
        })(a || (a = {})),
        (function (e) {
          (e[(e.TOP = 1)] = "TOP"),
            (e[(e.MUSICIAN = 2)] = "MUSICIAN"),
            (e[(e.AIRBORNE = 4)] = "AIRBORNE");
        })(r || (r = {})),
        (function (e) {
          (e[(e.TIME = 0)] = "TIME"), (e[(e.HOT = 1)] = "HOT");
        })(i || (i = {})),
        (function (e) {
          (e[(e.HOT = 1)] = "HOT"),
            (e[(e.CANCEL_HOT = 2)] = "CANCEL_HOT"),
            (e[(e.PRAISE = 3)] = "PRAISE"),
            (e[(e.CANCEL_PRAISE = 4)] = "CANCEL_PRAISE"),
            (e[(e.TOP = 5)] = "TOP"),
            (e[(e.DEL = 6)] = "DEL"),
            (e[(e.SELF = 7)] = "SELF"),
            (e[(e.CELLPHONE = 8)] = "CELLPHONE"),
            (e[(e.CONTRIBUTE = 9)] = "CONTRIBUTE"),
            (e[(e.CANCEL_TOP = 10)] = "CANCEL_TOP");
        })(o || (o = {}));
    },
    419: function (e, t, n) {
      "use strict";
      var a = n(3),
        r = n.n(a);
      n(482);
      t.a = function (e) {
        var t = e.pageConf,
          n = e.total,
          a = void 0 === n ? 0 : n,
          i = e.onPageChange,
          o = t || {},
          c = o.curPage,
          s = void 0 === c ? 1 : c,
          l = o.pageSize,
          u = void 0 === l ? 10 : l,
          m = Math.ceil(a / u);
        if (m <= 1) return null;
        var d = function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1;
            i(s + e);
          },
          p = [];
        s > 1 &&
          p.push(
            r.a.createElement(
              "a",
              {
                className: "mod_page_nav__prev",
                title: "\u4e0a\u4e00\u9875",
                key: 0,
                onClick: function () {
                  return d(-1);
                },
              },
              r.a.createElement("span", null, "<")
            )
          );
        var f = function (e) {
            return e === s
              ? r.a.createElement("strong", { className: "current", key: e }, e)
              : r.a.createElement(
                  "a",
                  {
                    key: e,
                    onClick: function () {
                      return i(e);
                    },
                  },
                  e
                );
          },
          _ = 1;
        if (s >= 6) {
          p.push(f(1)),
            p.push(
              r.a.createElement(
                "strong",
                { className: "more", key: "more1" },
                "..."
              )
            );
          for (var h = (_ = Math.min(s + 2, m)) - 4; h <= _; h++) p.push(f(h));
        } else {
          _ = m > 6 ? 6 : m;
          for (var g = 1; g <= _; g++) p.push(f(g));
        }
        if (m > _ + 2)
          p.push(
            r.a.createElement(
              "strong",
              { className: "more", key: "more2" },
              "..."
            )
          ),
            p.push(f(m));
        else for (var v = _ + 1; v <= m; v++) p.push(f(v));
        return (
          s !== m &&
            p.push(
              r.a.createElement(
                "a",
                {
                  className: "mod_page_nav__next",
                  title: "\u4e0b\u4e00\u9875",
                  key: m + 1,
                  onClick: function () {
                    return d(1);
                  },
                },
                r.a.createElement("span", null, ">")
              )
            ),
          r.a.createElement("div", { className: "mod_page_nav" }, p)
        );
      };
    },
    420: function (e, t, n) {
      "use strict";
      var a,
        r = n(2),
        i = n.n(r),
        o = n(361),
        c = n.n(o),
        s = n(362),
        l = n.n(s),
        u = n(149),
        m = n.n(u),
        d = n(363),
        p = n.n(d),
        f = n(364),
        _ = n.n(f),
        h = n(365),
        g = n.n(h),
        v = n(3),
        y = n.n(v),
        b = n(109),
        E = n.n(b),
        w = n(366),
        N = n.n(w),
        k = {
          MAC_ENTER: 3,
          BACKSPACE: 8,
          TAB: 9,
          NUM_CENTER: 12,
          ENTER: 13,
          SHIFT: 16,
          CTRL: 17,
          ALT: 18,
          PAUSE: 19,
          CAPS_LOCK: 20,
          ESC: 27,
          SPACE: 32,
          PAGE_UP: 33,
          PAGE_DOWN: 34,
          END: 35,
          HOME: 36,
          LEFT: 37,
          UP: 38,
          RIGHT: 39,
          DOWN: 40,
          PRINT_SCREEN: 44,
          INSERT: 45,
          DELETE: 46,
          ZERO: 48,
          ONE: 49,
          TWO: 50,
          THREE: 51,
          FOUR: 52,
          FIVE: 53,
          SIX: 54,
          SEVEN: 55,
          EIGHT: 56,
          NINE: 57,
          QUESTION_MARK: 63,
          A: 65,
          B: 66,
          C: 67,
          D: 68,
          E: 69,
          F: 70,
          G: 71,
          H: 72,
          I: 73,
          J: 74,
          K: 75,
          L: 76,
          M: 77,
          N: 78,
          O: 79,
          P: 80,
          Q: 81,
          R: 82,
          S: 83,
          T: 84,
          U: 85,
          V: 86,
          W: 87,
          X: 88,
          Y: 89,
          Z: 90,
          META: 91,
          WIN_KEY_RIGHT: 92,
          CONTEXT_MENU: 93,
          NUM_ZERO: 96,
          NUM_ONE: 97,
          NUM_TWO: 98,
          NUM_THREE: 99,
          NUM_FOUR: 100,
          NUM_FIVE: 101,
          NUM_SIX: 102,
          NUM_SEVEN: 103,
          NUM_EIGHT: 104,
          NUM_NINE: 105,
          NUM_MULTIPLY: 106,
          NUM_PLUS: 107,
          NUM_MINUS: 109,
          NUM_PERIOD: 110,
          NUM_DIVISION: 111,
          F1: 112,
          F2: 113,
          F3: 114,
          F4: 115,
          F5: 116,
          F6: 117,
          F7: 118,
          F8: 119,
          F9: 120,
          F10: 121,
          F11: 122,
          F12: 123,
          NUMLOCK: 144,
          SEMICOLON: 186,
          DASH: 189,
          EQUALS: 187,
          COMMA: 188,
          PERIOD: 190,
          SLASH: 191,
          APOSTROPHE: 192,
          SINGLE_QUOTE: 222,
          OPEN_SQUARE_BRACKET: 219,
          BACKSLASH: 220,
          CLOSE_SQUARE_BRACKET: 221,
          WIN_KEY: 224,
          MAC_FF_META: 224,
          WIN_IME: 229,
          isTextModifyingKeyEvent: function (e) {
            var t = e.keyCode;
            if (
              (e.altKey && !e.ctrlKey) ||
              e.metaKey ||
              (t >= k.F1 && t <= k.F12)
            )
              return !1;
            switch (t) {
              case k.ALT:
              case k.CAPS_LOCK:
              case k.CONTEXT_MENU:
              case k.CTRL:
              case k.DOWN:
              case k.END:
              case k.ESC:
              case k.HOME:
              case k.INSERT:
              case k.LEFT:
              case k.MAC_FF_META:
              case k.META:
              case k.NUMLOCK:
              case k.NUM_CENTER:
              case k.PAGE_DOWN:
              case k.PAGE_UP:
              case k.PAUSE:
              case k.PRINT_SCREEN:
              case k.RIGHT:
              case k.SHIFT:
              case k.UP:
              case k.WIN_KEY:
              case k.WIN_KEY_RIGHT:
                return !1;
              default:
                return !0;
            }
          },
          isCharacterKey: function (e) {
            if (e >= k.ZERO && e <= k.NINE) return !0;
            if (e >= k.NUM_ZERO && e <= k.NUM_MULTIPLY) return !0;
            if (e >= k.A && e <= k.Z) return !0;
            if (-1 !== window.navigator.userAgent.indexOf("WebKit") && 0 === e)
              return !0;
            switch (e) {
              case k.SPACE:
              case k.QUESTION_MARK:
              case k.NUM_PLUS:
              case k.NUM_MINUS:
              case k.NUM_PERIOD:
              case k.NUM_DIVISION:
              case k.SEMICOLON:
              case k.DASH:
              case k.EQUALS:
              case k.COMMA:
              case k.PERIOD:
              case k.SLASH:
              case k.APOSTROPHE:
              case k.SINGLE_QUOTE:
              case k.OPEN_SQUARE_BRACKET:
              case k.BACKSLASH:
              case k.CLOSE_SQUARE_BRACKET:
                return !0;
              default:
                return !1;
            }
          },
        },
        x = k,
        C = n(150),
        O = n.n(C),
        S = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = t.element,
            a = void 0 === n ? document.body : n,
            r = {},
            i = Object.keys(e);
          return (
            i.forEach(function (e) {
              r[e] = a.style[e];
            }),
            i.forEach(function (t) {
              a.style[t] = e[t];
            }),
            r
          );
        },
        j = function (e) {
          if ("undefined" === typeof document) return 0;
          if (e || void 0 === a) {
            var t = document.createElement("div");
            (t.style.width = "100%"), (t.style.height = "200px");
            var n = document.createElement("div"),
              r = n.style;
            (r.position = "absolute"),
              (r.top = "0"),
              (r.left = "0"),
              (r.pointerEvents = "none"),
              (r.visibility = "hidden"),
              (r.width = "200px"),
              (r.height = "150px"),
              (r.overflow = "hidden"),
              n.appendChild(t),
              document.body.appendChild(n);
            var i = t.offsetWidth;
            n.style.overflow = "scroll";
            var o = t.offsetWidth;
            i === o && (o = n.clientWidth),
              document.body.removeChild(n),
              (a = i - o);
          }
          return a;
        },
        I = {},
        P = function (e) {
          if (
            (document.body.scrollHeight >
              (window.innerHeight || document.documentElement.clientHeight) &&
              window.innerWidth > document.body.offsetWidth) ||
            e
          ) {
            var t = new RegExp("".concat("yqq-scrolling-effect"), "g"),
              n = document.body.className;
            if (e) {
              if (!t.test(n)) return;
              return (
                S(I),
                (I = {}),
                void (document.body.className = n.replace(t, "").trim())
              );
            }
            var a = j();
            if (
              a &&
              ((I = S({
                position: "relative",
                width: "calc(100% - ".concat(a, "px)"),
              })),
              !t.test(n))
            ) {
              var r = "".concat(n, " ").concat("yqq-scrolling-effect");
              document.body.className = r.trim();
            }
          }
        };
      function L(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = g()(e);
          if (t) {
            var r = g()(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return _()(this, n);
        };
      }
      var q = 0,
        R = !(
          "undefined" !== typeof window &&
          window.document &&
          window.document.createElement
        ),
        A = {},
        T = (function (e) {
          p()(n, e);
          var t = L(n);
          function n(e) {
            var a;
            c()(this, n),
              ((a = t.call(this, e)).setWrapperClassName = function () {
                var e = a.props.wrapperClassName;
                a.container &&
                  e &&
                  e !== a.container.className &&
                  (a.container.className = e);
              }),
              (a.getParent = function () {
                var e = a.props.getContainer;
                if (e) {
                  if ("string" === typeof e)
                    return document.querySelectorAll(e)[0];
                  if ("function" === typeof e) return e();
                  if ("object" === O()(e) && e instanceof window.HTMLElement)
                    return e;
                }
                return document.body;
              }),
              (a.getContainer = function () {
                if (R) return null;
                if (!a.container) {
                  a.container = document.createElement("div");
                  var e = a.getParent();
                  e && e.appendChild(a.container);
                }
                return a.setWrapperClassName(), a.container;
              }),
              (a.switchScrollingEffect = function () {
                1 !== q || Object.keys(A).length
                  ? q || (S(A), (A = {}), P(!0))
                  : (P(),
                    (A = S({
                      overflow: "hidden",
                      overflowX: "hidden",
                      overflowY: "hidden",
                    })));
              });
            var r = e.visible;
            return (q = r ? q + 1 : q), a;
          }
          return (
            l()(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this.createContainer(), this.switchScrollingEffect();
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  if (e) {
                    var t = this.props.visible,
                      n = e.visible;
                    t !== n &&
                      ((q = t && !n ? q + 1 : q - 1),
                      this.switchScrollingEffect());
                  }
                  this.setWrapperClassName();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  var e = this.props.visible;
                  (q = e && q ? q - 1 : q),
                    this.removeContainer(),
                    this.switchScrollingEffect();
                },
              },
              {
                key: "removeContainer",
                value: function () {
                  this.container &&
                    (this.container.parentNode.removeChild(this.container),
                    (this.container = null));
                },
              },
              {
                key: "createContainer",
                value: function () {
                  (this.container = this.getContainer()), this.forceUpdate();
                },
              },
              {
                key: "render",
                value: function () {
                  return this.container
                    ? E.a.createPortal(this.props.children, this.container)
                    : null;
                },
              },
            ]),
            n
          );
        })(y.a.Component);
      T.defaultProps = { getContainer: !1 };
      n(486);
      function M(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function F(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? M(Object(n), !0).forEach(function (t) {
                i()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : M(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function D(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = g()(e);
          if (t) {
            var r = g()(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return _()(this, n);
        };
      }
      var U = 0,
        B = (function (e) {
          p()(n, e);
          var t = D(n);
          function n(e) {
            var a;
            return (
              c()(this, n),
              (a = t.call(this, e)),
              Q.call(m()(a)),
              (a.titleId = "dialogTitle".concat((U += 1))),
              a
            );
          }
          return (
            l()(n, [
              {
                key: "componentWillUnmount",
                value: function () {
                  clearTimeout(this.timeoutId);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.prefixCls,
                    n = e.mask,
                    a = e.maskClosable,
                    r = e.visible,
                    o = e.title,
                    c = e.getContainer,
                    s = N()(
                      "".concat(t, "-root"),
                      i()({}, "".concat(t, "-root_hidden"), !r)
                    ),
                    l = this.getWrapStyle(),
                    u = y.a.createElement(
                      "div",
                      { className: s },
                      n &&
                        y.a.createElement("div", {
                          className: "".concat(t, "-mask"),
                        }),
                      y.a.createElement(
                        "div",
                        {
                          tabIndex: -1,
                          onKeyDown: this.onKeyDown,
                          className: "".concat(t, "-wrap"),
                          ref: this.saveRef("wrap"),
                          onClick: a ? this.onMaskClick : null,
                          onMouseUp: a ? this.onMaskMouseUp : null,
                          role: "dialog",
                          "aria-labelledby": o ? this.titleId : null,
                          style: l,
                        },
                        this.getDialogElement()
                      )
                    );
                  return !1 === c
                    ? u
                    : y.a.createElement(T, { visible: r, getContainer: c }, u);
                },
              },
            ]),
            n
          );
        })(v.Component);
      B.defaultProps = {
        prefixCls: "yqq-dialog",
        className: "",
        wrapClassName: "",
        style: {},
        wrapStyle: {},
        keyboard: !0,
        mask: !0,
        closable: !0,
        maskClosable: !0,
        visible: !1,
        centered: !0,
        destroyOnClose: !1,
        childrenIsClose: !1,
      };
      var Q = function () {
        var e = this;
        (this.saveRef = function (t) {
          return function (n) {
            e[t] = n;
          };
        }),
          (this.close = function (t) {
            var n = e.props.onClose;
            n && n(t);
          }),
          (this.getZIndexStyle = function () {
            var t = {},
              n = e.props;
            return void 0 !== n.zIndex && (t.zIndex = n.zIndex), t;
          }),
          (this.getWrapStyle = function () {
            return F(F({}, e.getZIndexStyle()), e.props.wrapStyle);
          }),
          (this.onKeyDown = function (t) {
            var n = e.props;
            if (n.keyboard && t.keyCode === x.ESC)
              return t.stopPropagation(), void e.close(t);
            if (n.visible && t.keyCode === x.TAB) {
              var a = document.activeElement,
                r = e.sentinelStart;
              t.shiftKey
                ? a === r && e.sentinelEnd.focus()
                : a === e.sentinelEnd && r.focus();
            }
          }),
          (this.onDialogMouseDown = function () {
            e.dialogMouseDown = !0;
          }),
          (this.onMaskMouseUp = function () {
            e.dialogMouseDown &&
              (e.timeoutId = window.setTimeout(function () {
                e.dialogMouseDown = !1;
              }, 0));
          }),
          (this.onMaskClick = function (t) {
            t.target !== t.currentTarget || e.dialogMouseDown || e.close(t);
          }),
          (this.closeChildrenElment = function (t) {
            var n = e.props.onClose;
            return v.Children.map(t, function (e) {
              var t = { close: n };
              return Object(v.cloneElement)(e, t);
            });
          }),
          (this.getDialogElement = function () {
            var t = e.props,
              n = t.prefixCls,
              a = t.closable,
              r = t.visible,
              o = t.destroyOnClose,
              c = t.centered,
              s = t.childrenIsClose,
              l = t.children;
            if (!r && o) return null;
            var u,
              m,
              d,
              p = {};
            void 0 !== t.width && (p.width = t.width),
              void 0 !== t.height && (p.height = t.height),
              t.footer &&
                (u = y.a.createElement(
                  "div",
                  {
                    className: "".concat(n, "-footer"),
                    ref: e.saveRef("footer"),
                  },
                  t.footer
                )),
              t.title &&
                (m = y.a.createElement(
                  "div",
                  {
                    className: "".concat(n, "-header"),
                    ref: e.saveRef("header"),
                  },
                  y.a.createElement(
                    "div",
                    { className: "".concat(n, "-title"), id: e.titleId },
                    t.title
                  )
                )),
              a &&
                (d = y.a.createElement(
                  "button",
                  {
                    type: "button",
                    onClick: e.close,
                    "aria-label": "Close",
                    className: "".concat(n, "-close"),
                  },
                  y.a.createElement("span", {
                    className: "".concat(n, "-close-x"),
                  })
                ));
            var f = F(F({}, t.style), p),
              _ = { width: 0, height: 0, overflow: "hidden", outline: "none" },
              h = N()(n, t.className, i()({}, "".concat(n, "_centered"), c));
            return y.a.createElement(
              "div",
              {
                key: "dialog-element",
                role: "document",
                ref: e.saveRef("dialog"),
                style: f,
                className: h,
                onMouseDown: e.onDialogMouseDown,
              },
              y.a.createElement("div", {
                tabIndex: 0,
                ref: e.saveRef("sentinelStart"),
                style: _,
                "aria-hidden": "true",
              }),
              y.a.createElement(
                "div",
                { className: "".concat(n, "-content") },
                d,
                m,
                y.a.createElement(
                  "div",
                  { className: "".concat(n, "-body"), ref: e.saveRef("body") },
                  s ? e.closeChildrenElment(l) : l
                ),
                u
              ),
              y.a.createElement("div", {
                tabIndex: 0,
                ref: e.saveRef("sentinelEnd"),
                style: _,
                "aria-hidden": "true",
              })
            );
          });
      };
      B.show = function (e) {
        var t = document.createElement("div");
        document.body.appendChild(t);
        var n = function () {
            E.a.unmountComponentAtNode(t) &&
              t.parentNode &&
              t.parentNode.removeChild(t);
          },
          a = F(F({}, e), {}, { onClose: n, visible: !0 });
        return E.a.render(y.a.createElement(B, a), t), n;
      };
      t.a = B;
    },
    421: function (e, t, n) {
      "use strict";
      var a = n(15);
      t.a = function () {
        return !!a.d.getCookie("wxopenid");
      };
    },
    422: function (e, t, n) {
      "use strict";
      var a = n(366),
        r = n.n(a),
        i = n(3),
        o = n.n(i),
        c =
          (n(496),
          function (e) {
            return o.a.createElement(
              "div",
              { className: r()("mod_slide_action", e.wrapCls) },
              o.a.createElement(
                "div",
                { className: "slide_action slide_action--left" },
                o.a.createElement(
                  "a",
                  {
                    onClick: function (t) {
                      t.preventDefault(), e.onChangeLeft();
                    },
                    className: "slide_action__btn slide_action__btn--left",
                  },
                  o.a.createElement(
                    "i",
                    { className: "icon_txt" },
                    "\u4e0a\u4e00\u9875"
                  ),
                  o.a.createElement("i", {
                    className:
                      "slide_action__arrow slide_action__arrow--left sprite",
                  })
                )
              ),
              o.a.createElement(
                "div",
                { className: "slide_action slide_action--right" },
                o.a.createElement(
                  "a",
                  {
                    onClick: function (t) {
                      t.preventDefault(), e.onChangeRight();
                    },
                    className: "slide_action__btn slide_action__btn--right",
                  },
                  o.a.createElement(
                    "i",
                    { className: "icon_txt" },
                    "\u4e0b\u4e00\u9875"
                  ),
                  o.a.createElement("i", {
                    className:
                      "slide_action__arrow slide_action__arrow--right sprite",
                  })
                )
              )
            );
          });
      t.a = o.a.memo(c);
    },
    423: function (e, t, n) {
      "use strict";
      var a = n(367),
        r = n.n(a),
        i = n(366),
        o = n.n(i),
        c = n(3),
        s = n.n(c),
        l =
          (n(497),
          function (e) {
            var t = e.slideLength,
              n = e.onChangeClick,
              a = e.wrapCls,
              i = e.currIndex ? e.currIndex : 0;
            return s.a.createElement(
              "div",
              { className: o()("mod_slide_switch", a) },
              r()(Array(t)).map(function (e, t) {
                return s.a.createElement(
                  "a",
                  {
                    onClick: function (e) {
                      e.preventDefault(), n(t);
                    },
                    className: "slide_switch__item ".concat(
                      i === t ? "slide_switch__item--current" : null
                    ),
                    key: t,
                  },
                  s.a.createElement("i", { className: "slide_switch__bg" }),
                  s.a.createElement("i", { className: "icon_txt" }, "1")
                );
              })
            );
          });
      t.a = s.a.memo(l);
    },
    424: function (e, t, n) {
      "use strict";
      var a = n(108),
        r = n.n(a),
        i = n(361),
        o = n.n(i),
        c = n(362),
        s = n.n(c),
        l = n(363),
        u = n.n(l),
        m = n(364),
        d = n.n(m),
        p = n(365),
        f = n.n(p),
        _ = n(76),
        h = n.n(_),
        g = n(3),
        v = n.n(g),
        y = (n(445), n(391)),
        b = n(399),
        E = n(15),
        w = n(390),
        N = n(403),
        k = n(393),
        x = n(405),
        C = n(477),
        O = n(412);
      function S(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = f()(e);
          if (t) {
            var r = f()(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return d()(this, n);
        };
      }
      var j = (function (e) {
        u()(n, e);
        var t = S(n);
        function n() {
          var e, a;
          o()(this, n);
          for (var i = arguments.length, c = new Array(i), s = 0; s < i; s++)
            c[s] = arguments[s];
          return d()(
            a,
            ((e = a = t.call.apply(t, [this].concat(c))),
            (a.isLoding = !1),
            (a.inputValue = ""),
            (a.state = { list: [], isLogin: y.a.isLogin() }),
            (a.handleAddSongList = (function () {
              var e = r()(
                h.a.mark(function e(t) {
                  var n, r, i, o;
                  return h.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((n = a.props),
                            (r = n.songList),
                            (i = n.changeAddSongPlayList),
                            r && 0 !== r.length)
                          ) {
                            e.next = 4;
                            break;
                          }
                          return (
                            w.a.show({
                              type: "warning",
                              msg: "\u8bf7\u9009\u62e9\u6b4c\u66f2",
                            }),
                            e.abrupt("return")
                          );
                        case 4:
                          if (!a.isLoding) {
                            e.next = 6;
                            break;
                          }
                          return e.abrupt("return");
                        case 6:
                          return (
                            (a.isLoding = !0), (e.next = 9), Object(b.a)(t, r)
                          );
                        case 9:
                          (o = e.sent),
                            (a.isLoding = !1),
                            o
                              ? (i && i(r),
                                w.a.show({
                                  type: "success",
                                  msg: "\u6dfb\u52a0\u6210\u529f",
                                }),
                                "function" === typeof N.a && Object(N.a)())
                              : w.a.show({
                                  type: "warning",
                                  msg: "\u6dfb\u52a0\u5931\u8d25",
                                });
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (a.play = function () {
              var e = a.props.songList;
              Object(k.c)({ songList: e, isAdd: !0, isPlay: !1 });
            }),
            (a.tipsDialogClose = null),
            (a.handleCreateNewValueChange = function (e) {
              a.inputValue = e.target.value;
            }),
            (a.handleClickCreateNew = function () {
              a.tipsDialogClose = Object(x.b)({
                width: 520,
                msg: "",
                type: "success",
                title: "\u521b\u5efa\u65b0\u6b4c\u5355",
                content: v.a.createElement(C.a, {
                  handleValueChange: a.handleCreateNewValueChange,
                }),
                topLevelClass: "mod_popup popup_new_list",
                btn: [
                  {
                    text: "\u53d6\u6d88",
                    fn: function () {
                      a.tipsDialogClose();
                    },
                  },
                  { text: "\u786e\u5b9a", fn: a.handleConfirmCreatePlaylist },
                ],
              });
            }),
            (a.handleConfirmCreatePlaylist = r()(
              h.a.mark(function e() {
                var t;
                return h.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Object(O.b)({ moddirnames: a.inputValue })
                        );
                      case 2:
                        if (((t = e.sent), a.inputValue)) {
                          e.next = 6;
                          break;
                        }
                        return (
                          w.a.show({
                            type: "warning",
                            msg: "\u8bf7\u8f93\u5165\u6b4c\u5355\u540d\uff01",
                          }),
                          e.abrupt("return")
                        );
                      case 6:
                        if (
                          !(
                            20 - Math.ceil(E.j.getRealLen(a.inputValue) / 2) <
                            0
                          )
                        ) {
                          e.next = 9;
                          break;
                        }
                        return (
                          w.a.show({
                            type: "warning",
                            msg: "\u6b4c\u5355\u540d\u6700\u591a20\u4e2a\u5b57\uff01",
                          }),
                          e.abrupt("return")
                        );
                      case 9:
                        if (!t) {
                          e.next = 15;
                          break;
                        }
                        return (
                          (e.next = 12), Object(b.a)(t.dirId, a.props.songList)
                        );
                      case 12:
                        e.sent
                          ? (w.a.show({
                              type: "success",
                              msg: "\u5df2\u6210\u529f\u6dfb\u52a0\u5230\u65b0\u6b4c\u5355",
                            }),
                            a.tipsDialogClose())
                          : w.a.show({
                              type: "warning",
                              msg: "\u6536\u85cf\u5931\u8d25\uff01\u5f53\u524d\u7f51\u7edc\u7e41\u5fd9\uff0c\u8bf7\u60a8\u7a0d\u540e\u518d\u8bd5\uff01",
                            });
                      case 15:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            e)
          );
        }
        return (
          s()(n, [
            {
              key: "componentDidMount",
              value: (function () {
                var e = r()(
                  h.a.mark(function e() {
                    var t;
                    return h.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!this.state.isLogin) {
                                e.next = 6;
                                break;
                              }
                              return (e.next = 4), Object(b.g)();
                            case 4:
                              (t = e.sent), this.setState({ list: t });
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "handleLogin",
              value: function () {
                y.a.openLogin();
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.state,
                  n = t.list,
                  a = t.isLogin,
                  r = this.props.isPlayList;
                return v.a.createElement(
                  "div",
                  { className: "operate_menu__cont" },
                  !r &&
                    v.a.createElement(
                      "a",
                      { onClick: this.play, className: "operate_menu__link" },
                      "\u64ad\u653e\u961f\u5217"
                    ),
                  v.a.createElement(
                    "ul",
                    {
                      style: {
                        display: a && 0 === n.length ? "none" : "block",
                        border: r ? 0 : "",
                        marginTop: r ? 0 : "",
                      },
                      role: "menu",
                      className:
                        "operate_menu__list operate_menu__top_line operate_menu__bottom_line",
                    },
                    a
                      ? n.map(function (t) {
                          return v.a.createElement(
                            "li",
                            {
                              onClick: function () {
                                e.handleAddSongList(t.dissid);
                              },
                              key: t.dissid,
                              className: "operate_menu__item",
                            },
                            v.a.createElement(
                              "a",
                              {
                                className: "operate_menu__link",
                                title:
                                  "\u767b\u5f55\u540e\u6dfb\u52a0\u5230\u6b4c\u5355",
                              },
                              t.dissname
                            )
                          );
                        })
                      : v.a.createElement(
                          "li",
                          {
                            onClick: this.handleLogin,
                            className: "operate_menu__item",
                          },
                          v.a.createElement(
                            "a",
                            {
                              className: "operate_menu__link",
                              title:
                                "\u767b\u5f55\u540e\u6dfb\u52a0\u5230\u6b4c\u5355",
                            },
                            "\u767b\u5f55\u540e\u6dfb\u52a0\u5230\u6b4c\u5355"
                          )
                        )
                  ),
                  a &&
                    v.a.createElement(
                      "a",
                      {
                        className: "operate_menu__link",
                        onClick: this.handleClickCreateNew,
                      },
                      v.a.createElement("i", {
                        className: "operate_menu__icon_add sprite",
                      }),
                      "\u6dfb\u52a0\u5230\u65b0\u6b4c\u5355"
                    )
                );
              },
            },
          ]),
          n
        );
      })(g.Component);
      t.a = j;
    },
    425: function (e, t, n) {
      "use strict";
      t.a = function (e) {
        if (!e) return {};
        if ("string" === typeof e) {
          var t = e;
          -1 !== e.indexOf("?") && (t = e.slice(e.indexOf("?") + 1));
          var n = {};
          return (
            t.split("&").forEach(function (e) {
              var t = e.split("=");
              n[t[0]] = t[1];
            }),
            n
          );
        }
      };
    },
    426: function (e, t, n) {
      "use strict";
      var a,
        r = n(108),
        i = n.n(r),
        o = n(76),
        c = n.n(o),
        s = n(3),
        l = n.n(s),
        u = n(420),
        m = n(471),
        d = n(361),
        p = n.n(d),
        f = n(362),
        _ = n.n(f),
        h = n(363),
        g = n.n(h),
        v = n(364),
        y = n.n(v),
        b = n(365),
        E = n.n(b),
        w = n(366),
        N = n.n(w),
        k = n(15),
        x = n(109),
        C = n.n(x),
        O = function (e, t, n, a) {
          var r = C.a.unstable_batchedUpdates
            ? function (e) {
                C.a.unstable_batchedUpdates(n, e);
              }
            : n;
          return Object(k.a)(e, t, r, a);
        };
      n(487);
      function S(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = E()(e);
          if (t) {
            var r = E()(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return y()(this, n);
        };
      }
      !(function (e) {
        (e.QQ = "QQ"), (e.WEIXIN = "WEIXIN");
      })(a || (a = {}));
      var j =
          "undefined" === typeof location ? "https://y.qq.com" : location.href,
        I = {
          response_type: "code",
          client_id: "100497308",
          redirect_uri:
            "https://y.qq.com/portal/wx_redirect.html?login_type=1&surl=".concat(
              j
            ),
          state: "state",
          display: "pc",
          scope: "all",
        },
        P = {
          appid: "wx48db31d50e334801",
          redirect_uri:
            "https://y.qq.com/portal/wx_redirect.html?login_type=2&surl=".concat(
              j
            ),
          response_type: "code",
          scope: "snsapi_login",
          state: "STATE",
          href: "https://y.qq.com/mediastyle/music_v17/src/css/popup_wechat.css#wechat_redirect",
        },
        L = "https://open.weixin.qq.com/connect/qrconnect?".concat(
          k.j.param(P)
        ),
        q = "https://graph.qq.com/oauth2.0/authorize?".concat(k.j.param(I)),
        R = (function (e) {
          g()(n, e);
          var t = S(n);
          function n(e) {
            var r;
            return (
              p()(this, n),
              ((r = t.call(this, e)).handleLoginReload = function (e) {
                "https://y.qq.com" === e.origin &&
                  "LOGIN_RELOAD" === e.data &&
                  (k.j.getParam("target")
                    ? location.replace(
                        decodeURIComponent(k.j.getParam("target"))
                      )
                    : window.location.reload());
              }),
              (r.handleQQTab = function () {
                r.setState({ type: a.QQ });
              }),
              (r.handleWXTab = function () {
                r.setState({ type: a.WEIXIN });
              }),
              (r.state = { type: a.QQ }),
              r
            );
          }
          return (
            _()(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this.removeMessageListener = O(
                    window,
                    "message",
                    this.handleLoginReload
                  );
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  var e, t;
                  null === (e = this.removeMessageListener) ||
                    void 0 === e ||
                    null === (t = e.remove) ||
                    void 0 === t ||
                    t.call(e);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.prefixCls,
                    n = e.className,
                    r = this.state.type,
                    i = N()(t, n),
                    o = N()("".concat(t, "-tit__item"), {
                      current: r === a.QQ,
                    }),
                    c = N()("".concat(t, "-tit__item"), {
                      current: r === a.WEIXIN,
                    }),
                    s = N()("".concat(t, "-bd__item"), { current: r === a.QQ }),
                    u = N()("".concat(t, "-bd__item"), {
                      current: r === a.WEIXIN,
                    });
                  return l.a.createElement(
                    "div",
                    { className: i },
                    l.a.createElement(
                      "div",
                      { className: "".concat(t, "-hd") },
                      l.a.createElement(
                        "h2",
                        { className: "".concat(t, "-tit") },
                        l.a.createElement(
                          "a",
                          { className: o, onClick: this.handleQQTab },
                          "QQ\u767b\u5f55"
                        ),
                        l.a.createElement(
                          "a",
                          { className: c, onClick: this.handleWXTab },
                          "\u5fae\u4fe1\u767b\u5f55"
                        )
                      )
                    ),
                    l.a.createElement(
                      "div",
                      { className: "".concat(t, "-bd") },
                      l.a.createElement(
                        "div",
                        { className: s },
                        l.a.createElement("iframe", {
                          frameBorder: "0",
                          width: "100%",
                          height: "400",
                          scrolling: "no",
                          src: q,
                          id: "login_frame",
                          name: "login_frame",
                          className: ""
                            .concat(t, "-bd__ifr ")
                            .concat(t, "-bd__ifr_qq"),
                        })
                      ),
                      l.a.createElement(
                        "div",
                        { className: u },
                        l.a.createElement("iframe", {
                          frameBorder: "0",
                          width: "100%",
                          height: "400",
                          scrolling: "no",
                          src: L,
                          id: "_login_frame_wechat_",
                          name: "_login_frame_wechat_",
                          className: ""
                            .concat(t, "-bd__ifr ")
                            .concat(t, "-bd__ifr_wx"),
                        }),
                        l.a.createElement(
                          "div",
                          { className: "".concat(t, "-bd__wx-tips") },
                          "QQ\u4e0e\u5fae\u4fe1\u8d26\u53f7\u7684\u97f3\u4e50\u8d44\u4ea7\u3001\u4ed8\u8d39\u7279\u6743\u4e0d\u4e92\u901a"
                        )
                      )
                    ),
                    l.a.createElement(
                      "div",
                      { className: "".concat(t, "-download") },
                      l.a.createElement(
                        "a",
                        { className: "".concat(t, "-download__btn") },
                        "\u4e0b\u8f7d\u5ba2\u6237\u7aef \u4f53\u9a8c\u66f4\u591a\u5185\u5bb9"
                      )
                    )
                  );
                },
              },
            ]),
            n
          );
        })(s.Component);
      R.defaultProps = { prefixCls: "login-box", className: "", style: {} };
      var A = R,
        T = (function () {
          var e = i()(
            c.a.mark(function e() {
              return c.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.prev = 0), (e.next = 3), Object(m.a)();
                      case 3:
                        (({ close: function () {} }.close = u.a.show({
                          width: 700,
                          height: 488,
                          children: l.a.createElement(A, null),
                        })),
                          (e.next = 10));
                        break;
                      case 7:
                        (e.prev = 7), (e.t0 = e.catch(0));
                      case 10:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 7]]
              );
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })();
      t.a = T;
    },
    427: function (e, t, n) {
      "use strict";
      var a = n(3),
        r = n.n(a),
        i = (n(445), n(391)),
        o = {
          default: {
            shareQQ: function (e) {
              var t = e.shareUrl,
                n = e.singerName,
                a = e.type,
                r = e.title,
                i = e.picUrl,
                o =
                  (e.pageType,
                  "\u266a\u6211\u6b63\u5728\u6536\u542c"
                    .concat(n, "\u7684")
                    .concat(a, "\uff08\u6765\u81ea@QQ\u97f3\u4e50\uff09")),
                c = "\u266a\u6211\u6b63\u5728\u6536\u542c\u300a"
                  .concat(n, "\u300b\u7684")
                  .concat(a),
                s = "http://connect.qq.com/widget/shareqq/index.html?url="
                  .concat(encodeURIComponent(t || ""), "&desc=")
                  .concat(o, "&title=")
                  .concat(r, "&summary=")
                  .concat(c, "&pics=")
                  .concat(
                    encodeURIComponent(i),
                    "&flash=&site=QQ%E9%9F%B3%E4%B9%90&style=201&width=32&height=32%20target=&showcount="
                  );
              window.open(s, "_blank");
            },
            shareQzone: function (e) {
              var t = e.shareUrl,
                n = e.singerName,
                a = e.type,
                r = e.title,
                i = e.picUrl,
                o =
                  (e.pageType,
                  "\u266a\u6211\u6b63\u5728\u6536\u542c"
                    .concat(n, "\u7684")
                    .concat(a)),
                c = "\u300a".concat(r, "\u300b ");
              o += "".concat(
                c + (t || ""),
                " \uff08\u6765\u81ea@QQ\u97f3\u4e50\uff09"
              );
              var s =
                "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="
                  .concat(encodeURIComponent(t), "&desc=")
                  .concat(encodeURIComponent(o), "&summary=")
                  .concat(encodeURIComponent(c), "&title=")
                  .concat(encodeURIComponent(o), "&pics=")
                  .concat(encodeURIComponent(i));
              window.open(s, "_blank");
            },
            shareSina: function (e) {
              var t = e.shareUrl,
                n = e.singerName,
                a = e.type,
                r = e.title,
                i = e.picUrl,
                o = "\u266a\u6211\u6b63\u5728\u6536\u542c"
                  .concat(n, "\u7684")
                  .concat(a),
                c = "\u300a".concat(r, "\u300b ");
              o += "".concat(
                c + (t || ""),
                " \uff08\u6765\u81ea@QQ\u97f3\u4e50\uff09"
              );
              var s =
                "http://service.weibo.com/share/share.php?appkey=3328066022&pic="
                  .concat(i, "&url=&title=")
                  .concat(encodeURIComponent(o));
              window.open(s);
            },
          },
          audio: {
            shareQQ: function (e) {
              var t = e.shareUrl,
                n = e.singerName,
                a = (e.type, e.title),
                r = e.picUrl,
                i =
                  (e.pageType,
                  "\u6765\u81ea".concat(
                    n,
                    "\u7684\u4e3b\u64ad\u7535\u53f0\uff08\u6765\u81ea@QQ\u97f3\u4e50\uff09"
                  )),
                o = "\u6765\u81ea\u300a".concat(
                  n,
                  "\u300b\u7684\u4e3b\u64ad\u7535\u53f0  "
                ),
                c = "http://connect.qq.com/widget/shareqq/index.html?url="
                  .concat(encodeURIComponent(t || ""), "&desc=")
                  .concat(i, "&title=")
                  .concat(a, "&summary=")
                  .concat(o, "&pics=")
                  .concat(
                    encodeURIComponent(r),
                    "&flash=&site=QQ%E9%9F%B3%E4%B9%90&style=201&width=32&height=32%20target=&showcount="
                  );
              window.open(c, "_blank");
            },
          },
          mv: {
            shareQzone: function (e) {
              var t = e.shareUrl,
                n = e.singerName,
                a = (e.type, e.title),
                r = e.picUrl,
                i =
                  (e.pageType,
                  "\u266a\u6211\u6b63\u5728\u6536\u770b".concat(n, "\u7684"));
              i += "\u300a".concat(
                a,
                "\u300b \uff08\u6765\u81ea@QQ\u97f3\u4e50\uff09"
              );
              var o =
                "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="
                  .concat(encodeURIComponent(t), "&desc=")
                  .concat(encodeURIComponent(i), "&summary=")
                  .concat(
                    encodeURIComponent("\u6765\u81eaQQ\u97f3\u4e50MV"),
                    "&title="
                  )
                  .concat(
                    encodeURIComponent(
                      "\u5206\u4eabMV\u300a".concat(a, "\u300b")
                    ),
                    "&pics="
                  )
                  .concat(encodeURIComponent(r));
              window.open(o, "_blank");
            },
          },
          playlist: {
            shareQzone: function (e) {
              var t = e.shareUrl,
                n = e.singerName,
                a = (e.type, e.title),
                r = e.picUrl,
                i =
                  (e.pageType,
                  "\u5206\u4eab\u6b4c\u5355\u300a".concat(a, "\u300b")),
                o = "\u266a\u6211\u6b63\u5728\u6536\u542c\u300a".concat(
                  a,
                  "\u300b\uff08\u6765\u81ea@QQ\u97f3\u4e50\uff09"
                ),
                c = "\u6765\u81ea".concat(n, "\u7684\u6b4c\u5355"),
                s =
                  "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="
                    .concat(encodeURIComponent(t), "&desc=")
                    .concat(encodeURIComponent(o), "&summary=")
                    .concat(encodeURIComponent(c), "&title=")
                    .concat(encodeURIComponent(i), "&pics=")
                    .concat(encodeURIComponent(r));
              window.open(s, "_blank");
            },
          },
          album: {
            shareQzone: function (e) {
              var t = e.shareUrl,
                n = e.singerName,
                a = (e.type, e.title),
                r = e.picUrl,
                i =
                  (e.pageType,
                  "\u5206\u4eab\u4e13\u8f91\u300a".concat(a, "\u300b")),
                o = "\u266a\u6211\u6b63\u5728\u6536\u542c\u300a".concat(
                  a,
                  "\u300b\uff08\u6765\u81ea@QQ\u97f3\u4e50\uff09"
                ),
                c = "\u6765\u81ea".concat(n, "\u7684\u4e13\u8f91"),
                s =
                  "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="
                    .concat(encodeURIComponent(t), "&desc=")
                    .concat(encodeURIComponent(o), "&summary=")
                    .concat(encodeURIComponent(c), "&title=")
                    .concat(encodeURIComponent(i), "&pics=")
                    .concat(encodeURIComponent(r));
              window.open(s, "_blank");
            },
          },
          song: {
            shareQzone: function (e) {
              var t = e.shareUrl,
                n = e.singerName,
                a = (e.type, e.title),
                r = e.picUrl,
                i =
                  (e.pageType,
                  "\u5206\u4eab\u6b4c\u66f2\u300a".concat(a, "\u300b")),
                o = "\u266a\u6211\u6b63\u5728\u6536\u542c\u300a".concat(
                  a,
                  "\u300b\uff08\u6765\u81ea@QQ\u97f3\u4e50\uff09"
                ),
                c = n,
                s =
                  "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="
                    .concat(encodeURIComponent(t), "&desc=")
                    .concat(encodeURIComponent(o), "&summary=")
                    .concat(encodeURIComponent(c), "&title=")
                    .concat(encodeURIComponent(i), "&pics=")
                    .concat(encodeURIComponent(r));
              window.open(s, "_blank");
            },
          },
        },
        c = n(485),
        s = n(15);
      t.a = function (e) {
        return r.a.createElement(
          "div",
          { className: "operate_menu__cont" },
          r.a.createElement(
            "ul",
            {
              role: "menu",
              className: "operate_menu__list operate_menu__list--no_icon",
              onClick: function () {
                var t;
                return null === e ||
                  void 0 === e ||
                  null === (t = e.hide) ||
                  void 0 === t
                  ? void 0
                  : t.call(e);
              },
            },
            r.a.createElement(
              "li",
              {
                onClick: function () {
                  !(function (e) {
                    var t;
                    if (i.a.isLogin()) {
                      var n = e.pageType,
                        a = o.default.shareQQ;
                      (
                        (null === (t = o[n || "defaultShare"]) || void 0 === t
                          ? void 0
                          : t.shareQQ) || a
                      )(e);
                    } else i.a.openLogin();
                  })(e);
                },
              },
              r.a.createElement(
                "a",
                { className: "operate_menu__link" },
                "QQ\u597d\u53cb"
              )
            ),
            r.a.createElement(
              "li",
              {
                onClick: function () {
                  var t = ""
                    .concat(
                      location.protocol,
                      "//c.y.qq.com/tplcloud/fcgi-bin/fcg_get_2dcode.fcg?width=200&margin=1&eclevel=4&encode=1&url="
                    )
                    .concat(encodeURIComponent(e.shareUrl));
                  Object(c.a)({ img: t });
                },
              },
              r.a.createElement(
                "a",
                { className: "operate_menu__link" },
                "\u5fae\u4fe1\u597d\u53cb/\u670b\u53cb\u5708"
              )
            ),
            r.a.createElement(
              "li",
              {
                onClick: function () {
                  !(function (e) {
                    var t,
                      n = e.pageType,
                      a = o.default.shareQzone;
                    (
                      (null === (t = o[n || "defaultShare"]) || void 0 === t
                        ? void 0
                        : t.shareQzone) || a
                    )(e);
                  })(e);
                },
              },
              r.a.createElement(
                "a",
                { className: "operate_menu__link" },
                "QQ\u7a7a\u95f4"
              )
            ),
            r.a.createElement(
              "li",
              {
                onClick: function () {
                  !(function (e) {
                    var t,
                      n = e.pageType,
                      a = o.default.shareSina;
                    (
                      (null === (t = o[n || "defaultShare"]) || void 0 === t
                        ? void 0
                        : t.shareSina) || a
                    )(e);
                  })(e);
                },
              },
              r.a.createElement(
                "a",
                { className: "operate_menu__link" },
                "\u65b0\u6d6a\u5fae\u535a"
              )
            ),
            r.a.createElement(
              "li",
              {
                onClick: function () {
                  var t, n;
                  null === e ||
                    void 0 === e ||
                    null === (t = e.tips) ||
                    void 0 === t ||
                    null === (n = t.copy) ||
                    void 0 === n ||
                    n.call(t),
                    s.j.copyText(e.shareUrl);
                },
              },
              r.a.createElement(
                "a",
                { className: "operate_menu__link share_copy" },
                "\u590d\u5236\u94fe\u63a5"
              )
            )
          )
        );
      };
    },
    428: function (e, t, n) {
      "use strict";
      var a = n(15),
        r = n(421);
      t.a = function () {
        var e = 0;
        return (
          0 ===
            (e =
              (e = Object(r.a)()
                ? a.d.getCookie("wxuin")
                : a.d.getCookie("uin")) || a.d.getCookie("p_uin")).indexOf(
              "o"
            ) && (e = e.substring(1, e.length)),
          /^\d+$/.test(e) ? e.length < 14 && (e = parseInt(e, 10)) : (e = 0),
          e
        );
      };
    },
    429: function (e, t, n) {
      "use strict";
      var a = n(368),
        r = n.n(a),
        i = n(369),
        o = n.n(i),
        c = n(3),
        s = n.n(c),
        l = n(77),
        u = n(366),
        m = n.n(u),
        d =
          (n(501),
          function (e) {
            var t = e.tag,
              n = e.content,
              a = e.className,
              i = e.href,
              c = e.title,
              u = o()(e, ["tag", "content", "className", "href", "title"]);
            return "p" === t
              ? s.a.createElement("p", {
                  dangerouslySetInnerHTML: { __html: n },
                  className: a,
                  title: c,
                })
              : "a" === t
              ? s.a.createElement(
                  l.b,
                  r()(
                    {
                      dangerouslySetInnerHTML: { __html: n },
                      className: a,
                      to: i,
                      title: c,
                    },
                    u
                  )
                )
              : s.a.createElement("div", {
                  dangerouslySetInnerHTML: { __html: n },
                  className: m()("keyrender_default", a),
                  title: c,
                });
          });
      t.a = Object(c.memo)(d);
    },
    430: function (e, t, n) {
      "use strict";
      var a,
        r,
        i = n(368),
        o = n.n(i),
        c = n(108),
        s = n.n(c),
        l = n(367),
        u = n.n(l),
        m = n(2),
        d = n.n(m),
        p = n(361),
        f = n.n(p),
        _ = n(362),
        h = n.n(_),
        g = n(363),
        v = n.n(g),
        y = n(364),
        b = n.n(y),
        E = n(365),
        w = n.n(E),
        N = n(76),
        k = n.n(N),
        x = n(3),
        C = n.n(x),
        O = n(390),
        S = n(405),
        j = n(418),
        I = n(78),
        P = n.n(I),
        L = n(15),
        q = n(391),
        R = Object(L.h)(),
        A = (function () {
          var e = s()(
            k.a.mark(function e(t) {
              var n, a, r, i, o, c, s, l, u, m, d, p, f;
              return k.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (a = (n = t || {}).type),
                        (r = n.id),
                        (i = n.pageSize),
                        (o = void 0 === i ? 25 : i),
                        (c = n.pageNum),
                        (s = void 0 === c ? 0 : c),
                        (l = n.hotType),
                        (u = void 0 === l ? j.b.TOP : l),
                        (m = n.lastCommentSeqNo),
                        (d = void 0 === m ? "" : m),
                        (p = n.withAirborne),
                        (f = {
                          module: "music.globalComment.CommentReadServer",
                          method: "GetHotCommentList",
                          param: {
                            BizType: a,
                            BizId: r,
                            LastCommentSeqNo: d,
                            PageSize: o,
                            PageNum: s,
                            HotType: u,
                            WithAirborne: void 0 === p ? 0 : p,
                          },
                        }),
                        e.abrupt(
                          "return",
                          R.request(f).then(
                            function (e) {
                              var t = P()(e, 1)[0];
                              return 0 === t.code ? t.data : Promise.reject(t);
                            },
                            function (e) {
                              return Promise.reject(e);
                            }
                          )
                        )
                      );
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        T = (function () {
          var e = s()(
            k.a.mark(function e(t) {
              var n, a, r, i, o, c, s, l, u, m, d, p, f;
              return k.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (a = (n = t || {}).type),
                        (r = n.id),
                        (i = n.pageSize),
                        (o = void 0 === i ? 25 : i),
                        (c = n.pageNum),
                        (s = void 0 === c ? 0 : c),
                        (l = n.fromCmtId),
                        (u = void 0 === l ? "" : l),
                        (m = n.lastCommentSeqNo),
                        (d = void 0 === m ? "" : m),
                        (p = n.withHot),
                        (f = {
                          module: "music.globalComment.CommentReadServer",
                          method: "GetNewCommentList",
                          param: {
                            BizType: a,
                            BizId: r,
                            LastCommentSeqNo: d,
                            PageSize: o,
                            PageNum: s,
                            FromCommentId: u,
                            WithHot: void 0 === p ? 0 : p,
                          },
                        }),
                        e.abrupt(
                          "return",
                          R.request(f).then(
                            function (e) {
                              var t = P()(e, 1)[0];
                              return 0 === t.code ? t.data : Promise.reject(t);
                            },
                            function (e) {
                              return Promise.reject(e);
                            }
                          )
                        )
                      );
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        M = (function () {
          var e = s()(
            k.a.mark(function e(t) {
              var n, a, r, i, o, c, s, l, u, m;
              return k.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (a = (n = t || {}).rootCmId),
                        (r = n.pageSize),
                        (i = void 0 === r ? 10 : r),
                        (o = n.lastRankScore),
                        (c = void 0 === o ? "" : o),
                        (s = n.lastCommentSeqNo),
                        (l = void 0 === s ? "" : s),
                        (u = n.rankType),
                        (m = {
                          module: "music.globalComment.CommentReadServer",
                          method: "GetReplyCommentList",
                          param: {
                            RootCmId: a,
                            LastCommentSeqNo: l,
                            PageSize: i,
                            LastRankScore: c,
                            RankType: u,
                          },
                        }),
                        e.abrupt(
                          "return",
                          R.request(m).then(
                            function (e) {
                              var t = P()(e, 1)[0];
                              return 0 === t.code ? t.data : Promise.reject(t);
                            },
                            function (e) {
                              return Promise.reject(e);
                            }
                          )
                        )
                      );
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        F = (function () {
          var e = s()(
            k.a.mark(function e(t) {
              var n, a, r, i;
              return k.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (a = (n = t || {}).type),
                        (r = n.id),
                        (i = {
                          module: "GlobalComment.GlobalCommentWriteServer",
                          method: "UpdateHotComment",
                          param: {
                            comment_id: r,
                            type: a,
                            uin: q.a.getUin().toString(),
                          },
                        }),
                        e.abrupt(
                          "return",
                          R.request(i).then(
                            function (e) {
                              var t = P()(e, 1)[0];
                              return 0 === t.code ? t.data : Promise.reject(t);
                            },
                            function (e) {
                              return Promise.reject(e);
                            }
                          )
                        )
                      );
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        D = (function () {
          var e = s()(
            k.a.mark(function e(t) {
              var n, a;
              return k.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = (t || {}).id),
                        (a = {
                          module: "music.globalComment.CommentWriteServer",
                          method: "DelComment",
                          param: { CommentId: n },
                        }),
                        e.abrupt(
                          "return",
                          R.request(a).then(
                            function (e) {
                              var t = P()(e, 1)[0];
                              return 0 === t.code ? t.data : Promise.reject(t);
                            },
                            function (e) {
                              return Promise.reject(e);
                            }
                          )
                        )
                      );
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        U = (function () {
          var e = s()(
            k.a.mark(function e(t) {
              var n, a, r, i, o, c;
              return k.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (a = (n = t || {}).id),
                        (r = n.type),
                        (i = n.content),
                        (o = n.replyCmId),
                        (c = {
                          module: "music.globalComment.CommentWriteServer",
                          method: "AddComment",
                          param: {
                            BizType: r,
                            BizId: a,
                            Content: i,
                            RepliedCmId: o,
                          },
                        }),
                        e.abrupt(
                          "return",
                          R.request(c).then(
                            function (e) {
                              var t = P()(e, 1)[0];
                              return 0 === t.code ? t.data : Promise.reject(t);
                            },
                            function (e) {
                              return Promise.reject(e);
                            }
                          )
                        )
                      );
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        B = n(404);
      !(function (e) {
        (e[(e.CommentStateSelfSee = 0)] = "CommentStateSelfSee"),
          (e[(e.CommentStateNormal = 1)] = "CommentStateNormal"),
          (e[(e.CommentStateDeleted = 2)] = "CommentStateDeleted"),
          (e[(e.CommentStateHot = 3)] = "CommentStateHot"),
          (e[(e.CommentStateTop = 4)] = "CommentStateTop"),
          (e[(e.CommentStateUnknown = 5)] = "CommentStateUnknown");
      })(a || (a = {})),
        (function (e) {
          (e.AIR = "air"),
            (e.MUSICIAN = "musician"),
            (e.HOT = "hot"),
            (e.NEW_HOT = "newHot"),
            (e.NEW = "new");
        })(r || (r = {}));
      var Q = function (e) {
          return {
            cmId: e.CmId,
            nick: e.Nick,
            encryptUin: e.EncryptUin,
            content: e.Content,
            replyCnt: e.RplCnt,
            isAuthorPraise: !!e.AuthorPraise,
          };
        },
        z = function (e) {
          var t = {},
            n = {},
            r =
              (e.Comments &&
                e.Comments.map(function (e) {
                  return e && e.CmId
                    ? ((t[e.CmId] = {
                        cmId: e.CmId,
                        avatar: e.Avatar,
                        nick: e.Nick,
                        encryptUin: e.EncryptUin,
                        vipIcon: e.VipIcon,
                        content: e.Content,
                        pubTime: e.PubTime,
                        praiseNum: e.PraiseNum,
                        replyCnt: e.ReplyCnt,
                        identityPic: e.IdentityPic,
                        identityType: e.IdentityType,
                        isShow:
                          e.State !== a.CommentStateDeleted &&
                          e.State !== a.CommentStateSelfSee,
                        isPraised: !!e.IsPraised,
                        isAuthorPraise: !!e.AuthorPraise,
                        permission: e.Permission,
                        seqNo: e.SeqNo,
                        rankScore: e.RankScore,
                        repliedCmts:
                          e.RepliedComments && e.RepliedComments.map(Q),
                        subCmtIdList:
                          (e.SubComments &&
                            e.SubComments.map(function (e) {
                              return (
                                (n[e.CmId] = {
                                  cmId: e.CmId,
                                  avatar: e.Avatar,
                                  nick: e.Nick,
                                  encryptUin: e.EncryptUin,
                                  vipIcon: e.VipIcon,
                                  content: e.Content,
                                  pubTime: e.PubTime,
                                  praiseNum: e.PraiseNum,
                                  identityPic: e.IdentityPic,
                                  identityType: e.IdentityType,
                                  isShow: !0,
                                  isPraised: !!e.IsPraised,
                                  isAuthorPraise: !!e.AuthorPraise,
                                  permission: e.Permission,
                                  seqNo: e.SeqNo,
                                  rankScore: e.RankScore,
                                  repliedCmts:
                                    e.ParentComment && [e.ParentComment].map(Q),
                                }),
                                e.CmId
                              );
                            })) ||
                          [],
                      }),
                      e.CmId)
                    : null;
                })) ||
              [];
          return {
            hasMore: !!e.HasMore,
            total: e.Total,
            cmtById: t,
            idList: r,
            subCmtById: n,
          };
        },
        H = function (e, t) {
          return {
            cmId: e.AddedCmId,
            avatar: e.Avatar,
            nick: e.Nick,
            encryptUin: "",
            vipIcon: e.VipIcon,
            content: t,
            pubTime: Date.now() / 1e3,
            praiseNum: 0,
            replyCnt: 0,
            identityPic: e.IdentityPic,
            identityType: e.IdentityType,
            isShow: !0,
            isPraised: !1,
            isAuthorPraise: !1,
            permission: e.Permission,
            seqNo: "",
            rankScore: "",
            repliedCmts: [],
            subCmtIdList: [],
          };
        },
        V = n(413),
        G = [
          "\ud83d\ude00",
          "\ud83d\ude06",
          "\ud83d\ude05",
          "\ud83d\ude02",
          "\u263a\ufe0f",
          "\ud83d\ude0a",
          "\ud83d\ude07",
          "\ud83d\ude09",
          "\ud83d\ude0c",
          "\ud83d\ude0d",
          "\ud83d\ude18",
          "\ud83d\ude1a",
          "\ud83d\ude0b",
          "\ud83d\ude1b",
          "\ud83d\ude1d",
          "\ud83d\ude1c",
          "\ud83d\ude0e",
          "\ud83d\ude0f",
          "\ud83d\ude12",
          "\ud83d\ude14",
          "\ud83d\ude1f",
          "\ud83d\ude23",
          "\ud83d\ude16",
          "\ud83d\ude29",
          "\ud83d\ude22",
          "\ud83d\ude2d",
          "\ud83d\ude24",
          "\ud83d\ude20",
          "\ud83d\ude21",
          "\ud83d\ude33",
          "\ud83d\ude31",
          "\ud83d\ude28",
          "\ud83d\ude30",
          "\ud83d\ude25",
          "\ud83d\ude13",
          "\ud83d\ude2c",
          "\ud83d\ude2f",
          "\ud83d\ude34",
          "\ud83d\ude2a",
          "\ud83d\ude35",
          "\ud83d\ude37",
          "\ud83d\ude08",
          "\ud83d\udc7f",
          "\ud83d\udc7b",
          "\ud83d\udc4c",
          "\u270c",
          "\ud83d\udc48",
          "\ud83d\udc49",
          "\ud83d\udc46",
          "\ud83d\udc4d",
          "\ud83d\udc4f",
          "\ud83d\udc40",
          "\ud83d\udc36",
          "\ud83d\udc31",
          "\ud83d\udc2d",
          "\ud83d\udc39",
          "\ud83d\udc30",
          "\ud83d\udc3b",
          "\ud83d\udc3c",
          "\ud83d\udc28",
          "\ud83d\udc2f",
          "\ud83d\udc2e",
          "\ud83d\udc37",
          "\ud83d\udc3d",
          "\ud83d\udc38",
          "\ud83d\udc35",
          "\ud83d\ude48",
          "\ud83d\ude49",
          "\ud83d\ude4a",
          "\ud83d\udc12",
          "\ud83d\udc23",
          "\ud83c\udf39",
          "\ud83c\udf1d",
          "\ud83c\udf1a",
          "\ud83c\udf19",
          "\u2b50",
          "\ud83c\udf08",
          "\u2600\ufe0f",
          "\ud83d\udca6",
          "\u2614",
          "\ud83c\udf4e",
          "\ud83c\udf50",
          "\ud83c\udf4a",
          "\ud83c\udf4b",
          "\ud83c\udf4c",
          "\ud83c\udf49",
          "\ud83c\udf47",
          "\ud83c\udf53",
          "\ud83c\udf48",
          "\ud83c\udf52",
          "\ud83c\udf51",
          "\ud83c\udf4d",
          "\ud83c\udf70",
          "\ud83c\udf82",
          "\ud83c\udf6e",
          "\ud83c\udf6d",
          "\ud83c\udf6c",
          "\ud83c\udf6b",
          "\ud83c\udf69",
          "\ud83c\udf6a",
          "\ud83c\udf30",
          "\ud83c\udf6f",
          "\ud83c\udf7c",
          "\ud83c\udf67",
          "\ud83c\udf66",
          "\u2764\ufe0f",
          "\ud83d\udc9b",
          "\ud83d\udc9a",
          "\ud83d\udc99",
          "\ud83d\udc9c",
          "\ud83d\udc94",
          "\ud83d\udc93",
          "\ud83c\udf81",
          "\ud83c\udf88",
          "\ud83c\udf80",
          "\ud83c\udf89",
          "\ud83d\udc8c",
        ],
        W = {
          "\ud83d\ude00": { em: "e400822", hex: "&#x1F600;" },
          "\ud83d\ude06": { em: "e400828", hex: "&#x1F606;" },
          "\ud83d\ude05": { em: "e400827", hex: "&#x1F605;" },
          "\ud83d\ude02": { em: "e400824", hex: "&#x1F602;" },
          "\ud83e\udd23": { em: "e402150", hex: "&#x1F923;" },
          "\u263a\ufe0f": { em: "e401074", hex: "&#x263A;&#xFE0F;" },
          "\u263a": { em: "e401074", hex: "&#x263A;" },
          "\ud83d\ude0a": { em: "e400832", hex: "&#x1F60A;" },
          "\ud83d\ude07": { em: "e400829", hex: "&#x1F607;" },
          "\ud83d\ude42": { em: "e401948", hex: "&#x1F642;" },
          "\ud83d\ude43": { em: "e401949", hex: "&#x1F643;" },
          "\ud83d\ude09": { em: "e400831", hex: "&#x1F609;" },
          "\ud83d\ude0c": { em: "e400834", hex: "&#x1F60C;" },
          "\ud83d\ude0d": { em: "e400835", hex: "&#x1F60D;" },
          "\ud83e\udd70": { em: "e402326", hex: "&#x1F970;" },
          "\ud83d\ude18": { em: "e400846", hex: "&#x1F618;" },
          "\ud83d\ude1a": { em: "e400848", hex: "&#x1F61A;" },
          "\ud83d\ude0b": { em: "e400833", hex: "&#x1F60B;" },
          "\ud83d\ude1b": { em: "e400849", hex: "&#x1F61B;" },
          "\ud83d\ude1d": { em: "e400851", hex: "&#x1F61D;" },
          "\ud83d\ude1c": { em: "e400850", hex: "&#x1F61C;" },
          "\ud83e\udd2a": { em: "e402168", hex: "&#x1F92A;" },
          "\ud83e\udd28": { em: "e402166", hex: "&#x1F928;" },
          "\ud83e\uddd0": { em: "e402416", hex: "&#x1F9D0;" },
          "\ud83e\udd13": { em: "e402099", hex: "&#x1F913;" },
          "\ud83d\ude0e": { em: "e400836", hex: "&#x1F60E;" },
          "\ud83e\udd29": { em: "e402167", hex: "&#x1F929;" },
          "\ud83e\udd73": { em: "e402327", hex: "&#x1F973;" },
          "\ud83d\ude0f": { em: "e400837", hex: "&#x1F60F;" },
          "\ud83d\ude12": { em: "e400840", hex: "&#x1F612;" },
          "\ud83d\ude14": { em: "e400842", hex: "&#x1F614;" },
          "\ud83d\ude1f": { em: "e400853", hex: "&#x1F61F;" },
          "\ud83d\ude23": { em: "e400857", hex: "&#x1F623;" },
          "\ud83d\ude16": { em: "e400844", hex: "&#x1F616;" },
          "\ud83d\ude29": { em: "e400863", hex: "&#x1F629;" },
          "\ud83e\udd7a": { em: "e402331", hex: "&#x1F97A;" },
          "\ud83d\ude22": { em: "e400856", hex: "&#x1F622;" },
          "\ud83d\ude2d": { em: "e400867", hex: "&#x1F62D;;" },
          "\ud83d\ude24": { em: "e400858", hex: "&#x1F624;" },
          "\ud83d\ude20": { em: "e400854", hex: "&#x1F620;" },
          "\ud83d\ude21": { em: "e400855", hex: "&#x1F621;" },
          "\ud83e\udd2f": { em: "e402173", hex: "&#x1F92F;" },
          "\ud83d\ude33": { em: "e400873", hex: "&#x1F633;" },
          "\ud83e\udd75": { em: "e402329", hex: "&#x1F975;" },
          "\ud83e\udd76": { em: "e402330", hex: "&#x1F976;" },
          "\ud83d\ude31": { em: "e400871", hex: "&#x1F631;" },
          "\ud83d\ude28": { em: "e400862", hex: "&#x1F628;" },
          "\ud83d\ude30": { em: "e400870", hex: "&#x1F630;" },
          "\ud83d\ude25": { em: "e400859", hex: "&#x1F625;" },
          "\ud83d\ude13": { em: "e400841", hex: "&#x1F613;" },
          "\ud83e\udd17": { em: "e401183", hex: "&#x1F917;" },
          "\ud83e\udd14": { em: "e401184", hex: "&#x1F914;" },
          "\ud83e\udd2d": { em: "e402171", hex: "&#x1F92D;" },
          "\ud83d\ude2c": { em: "e400866", hex: "&#x1F62C;" },
          "\ud83d\ude44": { em: "e401185", hex: "&#x1F644;" },
          "\ud83d\ude2f": { em: "e400869", hex: "&#x1F62F;" },
          "\ud83d\ude34": { em: "e400874", hex: "&#x1F634;" },
          "\ud83e\udd24": { em: "e402151", hex: "&#x1F924;" },
          "\ud83d\ude2a": { em: "e400864", hex: "&#x1F62A;" },
          "\ud83d\ude35": { em: "e400875", hex: "&#x1F635;" },
          "\ud83e\udd10": { em: "e401186", hex: "&#x1F910;" },
          "\ud83e\udd27": { em: "e402165", hex: "&#x1F927;" },
          "\ud83d\ude37": { em: "e400877", hex: "&#x1F637;" },
          "\ud83d\ude08": { em: "e400830", hex: "&#x1F608;" },
          "\ud83d\udc7f": { em: "e400571", hex: "&#x1F47F;" },
          "\ud83e\udd21": { em: "e402148", hex: "&#x1F921;" },
          "\ud83d\udc7b": { em: "e400562", hex: "&#x1F47B;" },
          "\ud83d\udc4c": { em: "e400402", hex: "&#x1F44C;" },
          "\u270c": { em: "e402646", hex: "&#x270C;" },
          "\ud83e\udd1e": { em: "e402135", hex: "&#x1F91E;" },
          "\ud83e\udd1f": { em: "e402141", hex: "&#x1F91F;" },
          "\ud83e\udd18": { em: "e402104", hex: "&#x1F918;" },
          "\ud83e\udd19": { em: "e402110", hex: "&#x1F919;" },
          "\ud83d\udc48": { em: "e400378", hex: "&#x1F448;" },
          "\ud83d\udc49": { em: "e400384", hex: "&#x1F449;" },
          "\ud83d\udc46": { em: "e400366", hex: "&#x1F446;" },
          "\ud83d\udd95": { em: "e401914", hex: "&#x1F595;" },
          "\ud83d\udc4d": { em: "e400408", hex: "&#x1F44D;" },
          "\ud83d\udc4f": { em: "e400420", hex: "&#x1F44F;" },
          "\ud83d\udc40": { em: "e400351", hex: "&#x1F440;" },
          "\ud83d\udc36": { em: "e400342", hex: "&#x1F436;" },
          "\ud83d\udc31": { em: "e400337", hex: "&#x1F431;" },
          "\ud83d\udc2d": { em: "e400333", hex: "&#x1F42D;" },
          "\ud83d\udc39": { em: "e400345", hex: "&#x1F439;" },
          "\ud83d\udc30": { em: "e400336", hex: "&#x1F430;" },
          "\ud83e\udd8a": { em: "e402346", hex: "&#x1F98A;" },
          "\ud83d\udc3b": { em: "e400347", hex: "&#x1F43B;" },
          "\ud83d\udc3c": { em: "e400348", hex: "&#x1F43C;" },
          "\ud83d\udc28": { em: "e400328", hex: "&#x1F428;" },
          "\ud83d\udc2f": { em: "e400335", hex: "&#x1F42F;" },
          "\ud83e\udd81": { em: "e401245", hex: "&#x1F981;" },
          "\ud83d\udc2e": { em: "e400334", hex: "&#x1F42E;" },
          "\ud83d\udc37": { em: "e400343", hex: "&#x1F437;" },
          "\ud83d\udc3d": { em: "e400349", hex: "&#x1F43D;" },
          "\ud83d\udc38": { em: "e400344", hex: "&#x1F438;" },
          "\ud83d\udc35": { em: "e400341", hex: "&#x1F435;" },
          "\ud83d\ude48": { em: "e400905", hex: "&#x1F648;" },
          "\ud83d\ude49": { em: "e400906", hex: "&#x1F649;" },
          "\ud83d\ude4a": { em: "e400907", hex: "&#x1F64A;" },
          "\ud83d\udc12": { em: "e400306", hex: "&#x1F412;" },
          "\ud83d\udc23": { em: "e400323", hex: "&#x1F423;" },
          "\ud83c\udf39": { em: "e400116", hex: "&#x1F339;" },
          "\ud83c\udf1d": { em: "e400104", hex: "&#x1F31D;" },
          "\ud83c\udf1a": { em: "e400101", hex: "&#x1F31A;" },
          "\ud83c\udf19": { em: "e400100", hex: "&#x1F319;" },
          "\u2b50": { em: "e401162", hex: "&#x2B50;" },
          "\u2b50\ufe0f": { em: "e401162", hex: "&#x2B50;&#xFE0F;" },
          "\ud83c\udf08": { em: "e400083", hex: "&#x1F308;" },
          "\u2600\ufe0f": { em: "e401062", hex: "&#x2600;&#xFE0F;" },
          "\u2600": { em: "e401062", hex: "&#x2600;" },
          "\ud83c\udf27": { em: "e401335", hex: "&#x1F327;" },
          "\ud83d\udca6": { em: "e400640", hex: "&#x1F4A6;" },
          "\u2614": { em: "e401066", hex: "&#x2614;" },
          "\u2614\ufe0f": { em: "e401066", hex: "&#x2614;&#xFE0F;" },
          "\ud83c\udf4e": { em: "e400137", hex: "&#x1F34E;" },
          "\ud83c\udf50": { em: "e400139", hex: "&#x1F350;" },
          "\ud83c\udf4a": { em: "e400133", hex: "&#x1F34A;" },
          "\ud83c\udf4b": { em: "e400134", hex: "&#x1F34B;" },
          "\ud83c\udf4c": { em: "e400135", hex: "&#x1F34C;" },
          "\ud83c\udf49": { em: "e400132", hex: "&#x1F349;" },
          "\ud83c\udf47": { em: "e400130", hex: "&#x1F347;" },
          "\ud83c\udf53": { em: "e400142", hex: "&#x1F353;" },
          "\ud83c\udf48": { em: "e400131", hex: "&#x1F348;" },
          "\ud83c\udf52": { em: "e400141", hex: "&#x1F352;" },
          "\ud83c\udf51": { em: "e400140", hex: "&#x1F351;" },
          "\ud83e\udd6d": { em: "e402323", hex: "&#x1F96D;" },
          "\ud83c\udf4d": { em: "e400136", hex: "&#x1F34D;" },
          "\ud83e\udd65": { em: "e402315", hex: "&#x1F965;" },
          "\ud83e\udd5d": { em: "e402307", hex: "&#x1F95D;" },
          "\ud83c\udf70": { em: "e400171", hex: "&#x1F370;" },
          "\ud83c\udf82": { em: "e400186", hex: "&#x1F382;" },
          "\ud83c\udf6e": { em: "e400169", hex: "&#x1F36E;" },
          "\ud83c\udf6d": { em: "e400168", hex: "&#x1F36D;" },
          "\ud83c\udf6c": { em: "e400167", hex: "&#x1F36C;" },
          "\ud83c\udf6b": { em: "e400166", hex: "&#x1F36B;" },
          "\ud83c\udf7f": { em: "e401261", hex: "&#x1F37F;" },
          "\ud83c\udf69": { em: "e400164", hex: "&#x1F369;" },
          "\ud83c\udf6a": { em: "e400165", hex: "&#x1F36A;" },
          "\ud83c\udf30": { em: "e400108", hex: "&#x1F330;" },
          "\ud83e\udd5c": { em: "e402306", hex: "&#x1F95C;" },
          "\ud83c\udf6f": { em: "e400170", hex: "&#x1F36F;" },
          "\ud83e\udd5b": { em: "e402305", hex: "&#x1F95B;" },
          "\ud83c\udf7c": { em: "e400183", hex: "&#x1F37C;" },
          "\ud83e\udd64": { em: "e402314", hex: "&#x1F964;" },
          "\ud83c\udf67": { em: "e400162", hex: "&#x1F367;" },
          "\ud83c\udf66": { em: "e400161", hex: "&#x1F366;" },
          "\u2764\ufe0f": { em: "e401148", hex: "&#x2764;&#xFE0F;" },
          "\u2764": { em: "e401148", hex: "&#x2764;" },
          "\ud83e\udde1": { em: "e402548", hex: "&#x1F9E1;" },
          "\ud83d\udc9b": { em: "e400629", hex: "&#x1F49B;" },
          "\ud83d\udc9a": { em: "e400628", hex: "&#x1F49A;" },
          "\ud83d\udc99": { em: "e400627", hex: "&#x1F499;" },
          "\ud83d\udc9c": { em: "e400630", hex: "&#x1F49C;" },
          "\ud83d\udc94": { em: "e400622", hex: "&#x1F494;" },
          "\ud83d\udc93": { em: "e400621", hex: "&#x1F493;" },
          "\ud83e\uddf8": { em: "e402571", hex: "&#x1F9F8;" },
          "\ud83c\udf81": { em: "e400185", hex: "&#x1F381;" },
          "\ud83c\udf88": { em: "e400197", hex: "&#x1F388;" },
          "\ud83c\udf80": { em: "e400184", hex: "&#x1F380;" },
          "\ud83c\udf89": { em: "e400198", hex: "&#x1F389;" },
          "\ud83d\udc8c": { em: "e400614", hex: "&#x1F48C;" },
          "\ud83d\ude03": { em: "e400825", hex: "&#x1F603;" },
        },
        K = new RegExp(Object.keys(W).join("|"), "gi"),
        Y = W,
        X = function (e) {
          var t = e.setRef,
            n = e.onClose,
            a = e.onEmojiInsert,
            r = G.map(function (e, t) {
              if (!Y[e]) return null;
              return C.a.createElement("a", {
                key: t,
                onClick: function () {
                  a(e);
                },
              });
            });
          return C.a.createElement(
            "div",
            {
              ref: t,
              style: {
                position: "absolute",
                width: "390px",
                top: "100%",
                right: "0",
                zIndex: 1,
              },
            },
            C.a.createElement(
              "div",
              { className: "popup_face c_popup" },
              C.a.createElement(
                "a",
                {
                  className: "popup__close",
                  title: "\u5173\u95ed",
                  onClick: n,
                },
                C.a.createElement("i", {
                  className: "popup__icon_close sprite",
                }),
                C.a.createElement(
                  "i",
                  { className: "icon_txt" },
                  "\u5173\u95ed"
                )
              ),
              C.a.createElement(
                "div",
                { className: "popup_face__content" },
                C.a.createElement("div", { className: "mod_emoji" }, r),
                C.a.createElement("div", {
                  className: "emoji_bg",
                  style: {
                    backgroundImage:
                      "url(//y.qq.com/mediastyle/global/emoji/emoji_page_2020@2x.png?max_age=2592000)",
                  },
                })
              )
            )
          );
        },
        J = function (e) {
          var t = Y[e] && Y[e].em;
          return t
            ? "//y.qq.com/mediastyle/global/emoji/img/".concat(
                t,
                "@2x.png?max_age=2592000"
              )
            : e;
        },
        Z = function (e) {
          return e
            .replace(/<img.*?title="(.*?)".*?(?:>|\/>)/gi, "$1")
            .replace(/<br>|<\/div>/gi, "\n")
            .trim()
            .replace(/<div>/, "\n")
            .replace(/<div>/g, "");
        },
        $ = function (e) {
          return e
            .replace(K, function (e) {
              return Y[e] && Y[e].em
                ? '<img style="user-select: text;" height="16px" title="'
                    .concat(e, '" src="')
                    .concat(J(e), '" />')
                : e;
            })
            .replace(/\n/gi, "<br>");
        };
      function ee(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = w()(e);
          if (t) {
            var r = w()(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return b()(this, n);
        };
      }
      var te = function (e) {
          var t = L.j.getRealLen(e.replace(/\n/g, ""));
          return 300 - (t = Math.ceil(t / 2));
        },
        ne = (function (e) {
          v()(n, e);
          var t = ee(n);
          function n() {
            var e, a;
            f()(this, n);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
              i[o] = arguments[o];
            return b()(
              a,
              ((e = a = t.call.apply(t, [this].concat(i))),
              (a.state = { isFocus: !1, isEmojiShow: !1, inputText: "" }),
              (a.setCmtTextRef = function (e) {
                a.cmtTextRef = e;
              }),
              (a.setCmtDefRef = function (e) {
                a.cmtDefRef = e;
              }),
              (a.setEmojiDialogRef = function (e) {
                a.emojiDilaogRef = e;
              }),
              (a.setInputText = function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : a.cmtTextRef,
                  t = Z(e.innerHTML);
                a.setState({ inputText: t });
                var n = window.getSelection();
                n.rangeCount > 0 &&
                  (a.cmtTextRef === n.anchorNode ||
                    a.cmtTextRef.contains(n.anchorNode)) &&
                  (a.lastEditRange = n.getRangeAt(0));
              }),
              (a.hideEmojiDialog = function (e) {
                a.state.isEmojiShow &&
                  a.emojiDilaogRef &&
                  !a.emojiDilaogRef.contains(e.target) &&
                  a.handleEmojiShow();
              }),
              (a.hanldeFocus = function () {
                q.a.isLogin()
                  ? a.cmtTextRef &&
                    !a.state.isFocus &&
                    a.setState({ isFocus: !0 }, function () {
                      a.cmtTextRef.focus();
                    })
                  : q.a.openLogin();
              }),
              (a.handleBlur = function () {
                var e = window.getSelection();
                e.rangeCount > 0 &&
                  (a.cmtTextRef === e.anchorNode ||
                    a.cmtTextRef.contains(e.anchorNode)) &&
                  (a.lastEditRange = e.getRangeAt(0)),
                  a.setState({ isFocus: !1 });
              }),
              (a.handleInput = function (e) {
                a.setInputText(e.currentTarget);
              }),
              (a.handleCmtSend = function () {
                var e = a.props.onCmtSend,
                  t = a.state.inputText,
                  n = te(t);
                n < 0
                  ? O.a.show({
                      type: "warning",
                      msg: "\u8bc4\u8bba\u957f\u5ea6\u8d85\u51fa\u9650\u5236",
                    })
                  : 300 !== n
                  ? e &&
                    e(t).then(function () {
                      a.setState({ inputText: "" }, function () {
                        a.cmtTextRef &&
                          a.cmtTextRef.innerText &&
                          (a.cmtTextRef.innerText = "");
                      });
                    })
                  : O.a.show({
                      type: "warning",
                      msg: "\u8bc4\u8bba\u4e0d\u80fd\u4e3a\u7a7a",
                    });
              }),
              (a.handlePaste = function (e) {
                e.preventDefault();
                var t = e.clipboardData;
                if (t && t.items) {
                  var n = t.getData("text"),
                    a = $(n);
                  document.execCommand("insertHtml", !1, a);
                }
              }),
              (a.handleEmojiInsert = function (e) {
                a.hanldeFocus();
                var t = document.createElement("img");
                (t.title = e), (t.src = J(e));
                var n = window.getSelection(),
                  r = a.lastEditRange;
                r
                  ? r.insertNode(t)
                  : ((r = document.createRange()),
                    a.cmtTextRef && a.cmtTextRef.appendChild(t),
                    r.selectNode(t)),
                  r.setStartAfter(t),
                  r.collapse(!0),
                  n.removeAllRanges(),
                  n.addRange(r),
                  a.setInputText();
              }),
              (a.handleEmojiShow = function () {
                a.state.isEmojiShow
                  ? document.removeEventListener("click", a.hideEmojiDialog)
                  : document.addEventListener("click", a.hideEmojiDialog),
                  a.setState({ isEmojiShow: !a.state.isEmojiShow });
              }),
              (a.handleTextClick = function (e) {
                var t = e.target;
                if ("img" === t.tagName.toLowerCase()) {
                  var n = window.getSelection(),
                    r = n.rangeCount > 0 && n.getRangeAt(0);
                  r || (r = a.lastEditRange || document.createRange()),
                    r.selectNode(t),
                    r.setStartAfter(t),
                    r.collapse(!0),
                    n.removeAllRanges(),
                    n.addRange(r);
                }
              }),
              e)
            );
          }
          return (
            h()(n, [
              {
                key: "componentWillUnmount",
                value: function () {
                  document.removeEventListener("click", this.hideEmojiDialog);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.type,
                    n = void 0 === t ? "default" : t,
                    a = e.onCancel,
                    r = this.state,
                    i = r.isFocus,
                    o = r.isEmojiShow,
                    c = r.inputText,
                    s = te(c);
                  return C.a.createElement(
                    "div",
                    { className: "comment__input" },
                    C.a.createElement(
                      "div",
                      {
                        className: "comment__textarea c_bg_normal",
                        onClick: this.hanldeFocus,
                      },
                      C.a.createElement(
                        "div",
                        { className: "comment__textarea_inner" },
                        C.a.createElement(
                          "div",
                          {
                            className: "comment__textarea_default c_tx_normal",
                            ref: this.setCmtDefRef,
                            contentEditable: "true",
                            suppressContentEditableWarning: !0,
                            style: { display: i || c ? "none" : "block" },
                          },
                          "\u8bf4\u8bf4\u4f60\u7684\u770b\u6cd5\u5427"
                        ),
                        C.a.createElement("div", {
                          className: "comment__textarea_input c_tx_normal",
                          ref: this.setCmtTextRef,
                          contentEditable: "true",
                          suppressContentEditableWarning: !0,
                          style: { display: i || c ? "block" : "none" },
                          onBlur: this.handleBlur,
                          onInput: this.handleInput,
                          onPaste: this.handlePaste,
                          onClick: this.handleTextClick,
                        })
                      ),
                      C.a.createElement(
                        "div",
                        {
                          className: "comment__tips ".concat(
                            s > 0 ? "c_tx_thin" : ""
                          ),
                        },
                        s >= 0 ? "\u5269\u4f59" : "\u8d85\u8fc7",
                        C.a.createElement(
                          "span",
                          { className: "c_tx_highlight" },
                          Math.abs(s)
                        ),
                        "\u5b57"
                      )
                    ),
                    C.a.createElement(
                      "a",
                      {
                        className: "comment__face",
                        onClick: this.handleEmojiShow,
                      },
                      C.a.createElement("i", {
                        className: "icon_comment icon_comment_face",
                      })
                    ),
                    C.a.createElement(
                      "div",
                      { className: "comment__tool" },
                      C.a.createElement(
                        "a",
                        {
                          className: "mod_btn_green comment__tool_btn",
                          onClick: this.handleCmtSend,
                        },
                        "reply" === n
                          ? "\u56de\u590d"
                          : "\u53d1\u8868\u8bc4\u8bba"
                      ),
                      "reply" === n &&
                        C.a.createElement(
                          "a",
                          {
                            className: "mod_btn comment__tool_btn",
                            onClick: a,
                          },
                          "\u53d6\u6d88"
                        )
                    ),
                    o &&
                      C.a.createElement(X, {
                        setRef: this.setEmojiDialogRef,
                        onEmojiInsert: this.handleEmojiInsert,
                        onClose: this.handleEmojiShow,
                      })
                  );
                },
              },
            ]),
            n
          );
        })(x.Component),
        ae = n(16),
        re = n(435),
        ie =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEXZ9OeZ4r6/7dal5sZSJjBmAAAAq0lEQVQoz63QwQ2DMAwFUAPiwIFjR+BQsURH4MCnPVQVIzACS/TeBTpO9iG2SPiRUqmV6tuTEn/bIn+sV6KFUYysDivJYTjQABM/BD09eV2iPBAzStUtqFLd8ypUY16tKsbXKuRlL680NP1Le9qcAy1LU8vTa/6wX7p7S3EWQQctafVfVNFZLIEun0z2tt33Yc4GTMYeez20uwvSlA5HrdYv1CyOtAjBX+prbXCeW1slzERMAAAAAElFTkSuQmCC",
        oe = function (e) {
          var t = e.data,
            n = e.isShow,
            a = ie;
          t.avatar && t.avatar.length > 32 && (a = L.j.fixUrl(t.avatar));
          return C.a.createElement(
            "a",
            {
              className: "comment__avatar",
              onClick: function () {
                n &&
                  t.encryptUin &&
                  window.open(
                    ""
                      .concat(Object(ae.d)(ae.a.PROFILE), "?uin=")
                      .concat(t.encryptUin),
                    "__blank"
                  );
              },
            },
            C.a.createElement("img", {
              className: "comment_list__avatar_img",
              src: n
                ? a
                : "//y.qq.com/mediastyle/global/img/person_v9_150_black.png?max_age=2592000",
              alt: t.nick,
              "data-qar-def": ie,
            }),
            n && t.identityPic
              ? C.a.createElement("img", {
                  className: "comment__avatar_icon",
                  src: t.identityPic,
                })
              : ""
          );
        };
      function ce(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = w()(e);
          if (t) {
            var r = w()(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return b()(this, n);
        };
      }
      var se = function (e) {
          var t = (function (e) {
            for (var t = "", n = 0; n < e.length; n++)
              /\W/.test(e[n]) && e.charCodeAt(n) < 256
                ? (t += "&#".concat(e.charCodeAt(n), ";"))
                : (t += e[n]);
            return t;
          })(e).replace(
            /(&#10;&#13;)|(&#13;&#10;)|(&#13;&#92;n)|(&#92;n&#13;)|(&#92;n)|(&#10;)|(&#13;)/g,
            "<br>"
          );
          return C.a.createElement("span", {
            dangerouslySetInnerHTML: { __html: $(t) },
          });
        },
        le = (function (e) {
          v()(n, e);
          var t = ce(n);
          function n() {
            var e, a;
            f()(this, n);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
              i[o] = arguments[o];
            return b()(
              a,
              ((e = a = t.call.apply(t, [this].concat(i))),
              (a.state = { isHover: !1 }),
              (a.setViewRef = function (e) {
                a.viewRef = e;
              }),
              (a.handleMouseEnter = function (e) {
                e.stopPropagation(), a.setState({ isHover: !0 });
              }),
              (a.handleMouseLeave = function (e) {
                e.stopPropagation(), a.setState({ isHover: !1 });
              }),
              (a.handleReplyCmtIdSet = function () {
                var e = a.props,
                  t = e.data,
                  n = e.isReplying,
                  r = e.onReplyCmtIdSet;
                r && r(n ? "" : t.cmId);
              }),
              (a.handleCmtPraise = function () {
                var e = a.props,
                  t = e.data,
                  n = e.onCmtPraise;
                n && n(t);
              }),
              (a.handleCmtDel = function () {
                var e = a.props,
                  t = e.data,
                  n = e.onCmtDel;
                n && n(t);
              }),
              (a.handleScrollIntoView = function () {
                if (a.viewRef) {
                  var e = a.viewRef.getBoundingClientRect();
                  (e.top < 0 || e.top > window.innerHeight) &&
                    window.scrollTo(window.scrollX, window.scrollY + e.top);
                }
              }),
              (a.handleCmtSend = function (e) {
                var t = a.props,
                  n = t.data;
                return (0, t.onCmtReply)(e, n);
              }),
              (a.handleReport = function () {
                var e = a.props.data;
                re.b.show({ id: e.cmId, type: re.a.CMT });
              }),
              (a.handleNickClick = function () {
                var e = a.props.data,
                  t = e.isShow,
                  n = e.encryptUin;
                t &&
                  n &&
                  window.open(
                    "".concat(Object(ae.d)(ae.a.PROFILE), "?uin=").concat(n),
                    "__blank"
                  );
              }),
              e)
            );
          }
          return (
            h()(n, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.data,
                    a = t.isReplying,
                    r = t.children,
                    i = t.isSimple,
                    o = n.isShow;
                  return i
                    ? C.a.createElement(
                        "li",
                        {
                          className: "comment__sub_list_item",
                          ref: this.setViewRef,
                        },
                        C.a.createElement(
                          "div",
                          { className: "comment__text item" },
                          C.a.createElement(
                            "span",
                            { className: "c_tx_current" },
                            C.a.createElement(
                              "a",
                              {
                                className: "c_tx_current",
                                onClick: this.handleNickClick,
                              },
                              o ? n.nick : "\u5c31\u662f\u7231\u97f3\u4e50"
                            ),
                            n.vipIcon &&
                              o &&
                              C.a.createElement(
                                "span",
                                { className: "vip_icon" },
                                C.a.createElement("img", {
                                  src: L.j.fixUrl(n.vipIcon),
                                  alt: "\u7eff\u94bbICON",
                                })
                              ),
                            "\uff1a"
                          ),
                          C.a.createElement(
                            "span",
                            { className: "".concat(o ? "" : "c_tx_thin") },
                            o
                              ? se(n.content)
                              : "- \u8be5\u8bc4\u8bba\u5df2\u5220\u9664 -"
                          )
                        ),
                        n.repliedCmts &&
                          n.repliedCmts.map(function (e) {
                            if (!e.cmId) return null;
                            return C.a.createElement(
                              "p",
                              {
                                key: e.cmId,
                                className:
                                  "comment__text comment__text--history",
                              },
                              C.a.createElement(
                                "a",
                                {
                                  className:
                                    "comment__origin_name c_tx_current",
                                  onClick: function () {
                                    o &&
                                      e.encryptUin &&
                                      window.open(
                                        ""
                                          .concat(
                                            Object(ae.d)(ae.a.PROFILE),
                                            "?uin="
                                          )
                                          .concat(e.encryptUin),
                                        "__blank"
                                      );
                                  },
                                },
                                e.nick,
                                ":"
                              ),
                              "\xa0",
                              se(e.content)
                            );
                          }),
                        o &&
                          C.a.createElement(
                            "div",
                            { className: "comment__sub_opt" },
                            C.a.createElement(
                              "a",
                              {
                                className: "comment__zan ".concat(
                                  n.isPraised ? "c_tx_current" : ""
                                ),
                                onClick: this.handleCmtPraise,
                              },
                              C.a.createElement("i", {
                                className: "icon_comment ".concat(
                                  n.isPraised
                                    ? "icon_comment_liked"
                                    : "icon_comment_like"
                                ),
                              }),
                              n.praiseNum > 0 ? n.praiseNum : ""
                            )
                          )
                      )
                    : C.a.createElement(
                        "li",
                        {
                          className: "comment__list_item c_b_normal",
                          ref: this.setViewRef,
                        },
                        C.a.createElement(
                          "div",
                          {
                            onMouseEnter: this.handleMouseEnter,
                            onMouseLeave: this.handleMouseLeave,
                          },
                          C.a.createElement(oe, { isShow: o, data: n }),
                          C.a.createElement(
                            "h4",
                            { className: "comment__title" },
                            C.a.createElement(
                              "a",
                              {
                                className: "c_tx_thin",
                                onClick: this.handleNickClick,
                              },
                              o ? n.nick : "\u5c31\u662f\u7231\u97f3\u4e50"
                            ),
                            n.vipIcon &&
                              o &&
                              C.a.createElement(
                                "span",
                                { className: "vip_icon" },
                                C.a.createElement("img", {
                                  src: L.j.fixUrl(n.vipIcon),
                                  alt: "\u7eff\u94bbICON",
                                })
                              )
                          ),
                          C.a.createElement(
                            "div",
                            { className: "comment__date c_tx_thin" },
                            L.j.formatDate(n.pubTime)
                          ),
                          C.a.createElement(
                            "p",
                            {
                              className: "comment__text ".concat(
                                o ? "" : "c_tx_thin"
                              ),
                            },
                            o
                              ? se(n.content)
                              : "- \u8be5\u8bc4\u8bba\u5df2\u5220\u9664 -"
                          ),
                          n.repliedCmts &&
                            n.repliedCmts.map(function (e) {
                              return e.cmId
                                ? C.a.createElement(
                                    "p",
                                    { key: e.cmId, className: "comment__text" },
                                    C.a.createElement(
                                      "a",
                                      {
                                        className:
                                          "comment__origin_name c_tx_current",
                                      },
                                      e.nick,
                                      ":"
                                    ),
                                    "\xa0",
                                    se(e.content)
                                  )
                                : null;
                            }),
                          o &&
                            C.a.createElement(
                              "div",
                              { className: "comment__opt" },
                              C.a.createElement(
                                "a",
                                {
                                  className: "comment__zan ".concat(
                                    n.isPraised ? "c_tx_current" : ""
                                  ),
                                  onClick: this.handleCmtPraise,
                                },
                                C.a.createElement("i", {
                                  className: "icon_comment ".concat(
                                    n.isPraised
                                      ? "icon_comment_liked"
                                      : "icon_comment_like"
                                  ),
                                }),
                                n.praiseNum > 0 ? n.praiseNum : ""
                              ),
                              C.a.createElement(
                                "a",
                                {
                                  className: "comment__feedback c_tx_thin",
                                  onClick: this.handleReplyCmtIdSet,
                                },
                                a ? "\u53d6\u6d88" : "\u56de\u590d"
                              ),
                              n.permission >= 512 &&
                                C.a.createElement(
                                  "a",
                                  {
                                    className: "comment__delete c_tx_thin",
                                    onClick: this.handleCmtDel,
                                  },
                                  "\u5220\u9664"
                                ),
                              this.state.isHover &&
                                C.a.createElement(
                                  "a",
                                  {
                                    className: "comment__report c_tx_thin",
                                    onClick: this.handleReport,
                                  },
                                  "\u4e3e\u62a5"
                                )
                            )
                        ),
                        a &&
                          n.isShow &&
                          C.a.createElement(
                            "div",
                            { className: "comment_repeat" },
                            C.a.createElement(ne, {
                              type: "reply",
                              onCmtSend: this.handleCmtSend,
                              onCancel: this.handleReplyCmtIdSet,
                            })
                          ),
                        r &&
                          x.Children.map(r, function (t) {
                            if (!Object(x.isValidElement)(t)) return t;
                            var n = { onRankHide: e.handleScrollIntoView };
                            return Object(x.cloneElement)(t, n);
                          })
                      );
                },
              },
            ]),
            n
          );
        })(x.PureComponent);
      function ue(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function me(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ue(Object(n), !0).forEach(function (t) {
                d()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ue(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function de(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = w()(e);
          if (t) {
            var r = w()(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return b()(this, n);
        };
      }
      var pe = (function (e) {
        v()(n, e);
        var t = de(n);
        function n(e) {
          var a, r;
          return (
            f()(this, n),
            ((r = t.call(this, e)).hasMore = function () {
              var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                t = r.props,
                n = t.subCmtState,
                a = t.replyCnt,
                i = t.isReplyCmt,
                o = r.state,
                c = o.rankType,
                s = o.curPage,
                l = n || {},
                u = l.idListByRank,
                m = void 0 === u ? {} : u,
                d = l.pageSize,
                p = l.total,
                f = s[c] || 1,
                _ = f * d;
              return (
                e && (_ = m[c] && m[c].length),
                a || p ? (a || p) > ~~_ : 0 !== p && i
              );
            }),
            (r.loadReplyCmtList = s()(
              k.a.mark(function e() {
                var t, n, a, i, o, c, s, l, u, m, d, p, f, _;
                return k.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((t = r.props),
                          (n = t.rootCmId),
                          (a = t.subCmtState),
                          (i = t.onReplyCmtLoad),
                          (o = r.state),
                          (c = o.curPage),
                          (s = o.rankType),
                          (l = c[s]),
                          (m = (u = a || {}).isLoading),
                          (d = u.pageSize),
                          (p = u.idListByRank),
                          (f = void 0 === p ? {} : p),
                          !m)
                        ) {
                          e.next = 6;
                          break;
                        }
                        return e.abrupt("return", !1);
                      case 6:
                        if (((_ = f[s] && f[s].length), !(l * d < _))) {
                          e.next = 9;
                          break;
                        }
                        return e.abrupt("return", !0);
                      case 9:
                        if (r.hasMore(!0)) {
                          e.next = 11;
                          break;
                        }
                        return e.abrupt("return", !0);
                      case 11:
                        return e.abrupt("return", i(n, s));
                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            (r.handleLoadMore = function () {
              var e,
                t = r.props.onRankHide;
              r.hasMore()
                ? r.loadReplyCmtList().then(function (e) {
                    e &&
                      r.setState(function (e) {
                        return me(
                          me({}, e),
                          {},
                          {
                            curPage: me(
                              me({}, e.curPage),
                              {},
                              d()({}, e.rankType, e.curPage[e.rankType] + 1)
                            ),
                          }
                        );
                      });
                  })
                : r.setState(
                    {
                      isRankShow: !1,
                      curPage:
                        ((e = {}), d()(e, j.c.TIME, 1), d()(e, j.c.HOT, 1), e),
                    },
                    function () {
                      t && t();
                    }
                  );
            }),
            (r.handleCmtPraise = function (e) {
              var t = r.props,
                n = t.rootCmId,
                a = t.onSubCmtPraise;
              a && a(n, e);
            }),
            (r.handleCmtDel = function (e) {
              var t = r.props,
                n = t.rootCmId,
                a = t.onSubCmtDel;
              a && a(n, e);
            }),
            (r.handleRankShowChange = function () {
              var e = r.props,
                t = e.subCmtState,
                n = e.onRankHide;
              if (r.state.isRankShow) {
                if (t && !t.isLoading) {
                  var a;
                  r.setState(
                    {
                      isRankShow: !1,
                      curPage:
                        ((a = {}), d()(a, j.c.TIME, 1), d()(a, j.c.HOT, 1), a),
                    },
                    function () {
                      n && n();
                    }
                  );
                }
              } else
                r.loadReplyCmtList().then(function (e) {
                  e &&
                    r.setState(function (e) {
                      return me(me({}, e), {}, { isRankShow: !0 });
                    });
                });
            }),
            (r.handleHotRank = function () {
              var e = r.props.subCmtState,
                t = r.state,
                n = t.isRankShow,
                a = t.rankType;
              n &&
                a !== j.c.HOT &&
                !e.isLoading &&
                r.setState({ rankType: j.c.HOT }, function () {
                  r.loadReplyCmtList();
                });
            }),
            (r.handleTimeRank = function () {
              var e = r.props.subCmtState,
                t = r.state,
                n = t.isRankShow,
                a = t.rankType;
              n &&
                a !== j.c.TIME &&
                !e.isLoading &&
                r.setState({ rankType: j.c.TIME }, function () {
                  r.loadReplyCmtList();
                });
            }),
            (r.handleCmtReply = function (e, t) {
              var n = r.props,
                a = n.rootCmId;
              return (0, n.onCmtReply)(e, t, a);
            }),
            (r.state = {
              isRankShow: !1,
              rankType: j.c.HOT,
              curPage: ((a = {}), d()(a, j.c.TIME, 1), d()(a, j.c.HOT, 1), a),
            }),
            r
          );
        }
        return (
          h()(n, [
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.props,
                  n = t.isReplyCmt,
                  a = t.subCmtIdList,
                  r = t.subCmtById,
                  i = t.subCmtState,
                  o = t.replyCnt,
                  c = t.replyCmId,
                  s = t.onReplyCmtIdSet;
                if (!o && !n) return null;
                var l,
                  u = this.state,
                  m = u.isRankShow,
                  d = u.curPage,
                  p = u.rankType;
                if (m && i && i.idListByRank) {
                  var f = i.pageSize;
                  l = i.idListByRank[p].slice(0, d[p] * f).map(function (e) {
                    return r[e];
                  });
                }
                return (
                  (l && 0 !== l.length) ||
                    (l = a.map(function (e) {
                      return r[e];
                    })),
                  C.a.createElement(
                    "div",
                    { className: "comment__reply" },
                    C.a.createElement(
                      "div",
                      { className: "comment__reply_hd" },
                      C.a.createElement(
                        "a",
                        {
                          className: "comment__show_all_reply c_tx_thin",
                          onClick: this.handleRankShowChange,
                        },
                        n
                          ? "\u67e5\u770b\u56de\u590d"
                          : "\u67e5\u770b".concat(o || 0, "\u6761\u56de\u590d"),
                        C.a.createElement("i", {
                          className: "".concat(
                            m
                              ? "comment__icon_arrow_up"
                              : "comment__icon_arrow_down",
                            " sprite"
                          ),
                        })
                      ),
                      m &&
                        C.a.createElement(
                          "div",
                          { className: "comment__sort" },
                          C.a.createElement(
                            "a",
                            {
                              className: "comment__sort_item ".concat(
                                p === j.c.HOT ? "" : "c_tx_thin"
                              ),
                              onClick: this.handleHotRank,
                            },
                            "\u70ed\u95e8"
                          ),
                          C.a.createElement("div", {
                            className: "comment__sort_line c_txt2",
                          }),
                          C.a.createElement(
                            "a",
                            {
                              className: "comment__sort_item ".concat(
                                p === j.c.TIME ? "" : "c_tx_thin"
                              ),
                              onClick: this.handleTimeRank,
                            },
                            "\u65f6\u95f4"
                          )
                        )
                    ),
                    l &&
                      l.length > 0 &&
                      C.a.createElement(
                        "div",
                        { className: "comment__reply_bd c_bg_normal" },
                        C.a.createElement(
                          "ul",
                          { className: "comment__list" },
                          l.map(function (t) {
                            if (!t || !t.cmId) return null;
                            var n = t.cmId;
                            return C.a.createElement(le, {
                              key: n,
                              data: t,
                              isReplying: n === c,
                              onReplyCmtIdSet: s,
                              onCmtPraise: e.handleCmtPraise,
                              onCmtDel: e.handleCmtDel,
                              onCmtReply: e.handleCmtReply,
                              isSimple: !m,
                            });
                          })
                        ),
                        m &&
                          C.a.createElement(
                            "a",
                            {
                              className: "comment__reply_more c_tx_thin",
                              onClick: this.handleLoadMore,
                            },
                            this.hasMore()
                              ? "\u663e\u793a\u66f4\u591a\u56de\u590d"
                              : "\u6536\u8d77",
                            C.a.createElement("i", {
                              className: "comment__icon_reply_more sprite",
                            })
                          )
                      )
                  )
                );
              },
            },
          ]),
          n
        );
      })(x.Component);
      function fe(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = w()(e);
          if (t) {
            var r = w()(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return b()(this, n);
        };
      }
      var _e = (function (e) {
        v()(n, e);
        var t = fe(n);
        function n() {
          var e, a;
          f()(this, n);
          for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
            i[o] = arguments[o];
          return b()(
            a,
            ((e = a = t.call.apply(t, [this].concat(i))),
            (a.handleRplyCmtIdSet = function (e) {
              var t = a.props,
                n = t.modId;
              (0, t.onReplyCmtIdSet)(n, e);
            }),
            (a.handleCmtPraise = function (e) {
              var t = a.props.onCmtPraise;
              t && t(e);
            }),
            (a.handleMoreClick = function () {
              var e = a.props,
                t = e.modId,
                n = e.onCmtListLoad;
              n && n(t);
            }),
            e)
          );
        }
        return (
          h()(n, [
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.props,
                  n = t.className,
                  a = t.title,
                  r = t.moreTitle,
                  i = t.modId,
                  o = t.replyingConf,
                  c = t.cmtById,
                  s = t.subCmtById,
                  l = t.subCmtStateById,
                  u = t.modState,
                  m = t.onReplyCmtLoad,
                  d = t.onSubCmtPraise,
                  p = t.onCmtDel,
                  f = t.onSubCmtDel,
                  _ = t.onCmtReply;
                if (!u || !u.idList || 0 === u.idList.length) return null;
                var h = o.modId === i;
                return C.a.createElement(
                  "div",
                  { className: n },
                  C.a.createElement(
                    "div",
                    { className: "comment_type__title c_b_normal" },
                    C.a.createElement("h2", null, a)
                  ),
                  C.a.createElement(
                    "ul",
                    { className: "comment__list" },
                    u.idList.slice(0, u.curPage * u.pageSize).map(function (t) {
                      var n = c[t];
                      if (!t || !n || !n.cmId) return null;
                      var a = n.cmId,
                        r = n.subCmtIdList,
                        i = !!n.repliedCmts && n.repliedCmts.length > 0,
                        u = a;
                      i && (u = n.repliedCmts[n.repliedCmts.length - 1].cmId);
                      var g = l[u];
                      return C.a.createElement(
                        le,
                        {
                          key: a,
                          data: n,
                          isReplying: h && a === o.cmId,
                          onReplyCmtIdSet: e.handleRplyCmtIdSet,
                          onCmtPraise: e.handleCmtPraise,
                          onCmtDel: p,
                          onCmtReply: _,
                        },
                        (n.replyCnt > 0 || i) &&
                          C.a.createElement(pe, {
                            rootCmId: u,
                            isReplyCmt: i,
                            subCmtIdList: r,
                            subCmtById: s,
                            subCmtState: g,
                            replyCmId: (h && o.cmId) || "",
                            replyCnt: n.replyCnt || 0,
                            onReplyCmtIdSet: e.handleRplyCmtIdSet,
                            onReplyCmtLoad: m,
                            onSubCmtPraise: d,
                            onSubCmtDel: f,
                            onCmtReply: _,
                          })
                      );
                    })
                  ),
                  r &&
                    u.total > u.pageSize &&
                    C.a.createElement(
                      "div",
                      { className: "comment__show_all" },
                      C.a.createElement(
                        "a",
                        {
                          className:
                            "comment__show_all_link c_tx_thin c_bg_normal",
                          onClick: this.handleMoreClick,
                        },
                        u.total > u.curPage * u.pageSize ? r : "\u6536\u8d77",
                        C.a.createElement("i", {
                          className: "".concat(
                            u.total > u.curPage * u.pageSize
                              ? "comment__icon_arrow_down"
                              : "comment__icon_arrow_up",
                            " sprite"
                          ),
                        })
                      )
                    )
                );
              },
            },
          ]),
          n
        );
      })(x.Component);
      n(529);
      function he(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = w()(e);
          if (t) {
            var r = w()(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return b()(this, n);
        };
      }
      var ge = [
          {
            key: r.AIR,
            className: "mod_hot_comment",
            title: "\u660e\u661f\u7a7a\u964d",
            moreTitle: "\u5168\u90e8\u660e\u661f\u7a7a\u964d",
          },
          {
            key: r.MUSICIAN,
            className: "mod_hot_comment",
            title: "\u97f3\u4e50\u4eba\u8bf4",
            moreTitle: "\u5168\u90e8\u97f3\u4e50\u4eba\u8bf4",
          },
          {
            key: r.NEW_HOT,
            className: "mod_hot_comment",
            title: "\u8fd1\u671f\u70ed\u8bc4",
            moreTitle: "\u66f4\u591a\u8fd1\u671f\u70ed\u8bc4",
          },
          {
            key: r.HOT,
            className: "mod_hot_comment",
            title: "\u7cbe\u5f69\u8bc4\u8bba",
            moreTitle: "\u66f4\u591a\u7cbe\u5f69\u8bc4\u8bba",
          },
          {
            key: r.NEW,
            className: "mod_hot_comment",
            title: function (e) {
              return "\u5168\u90e8\u8bc4\u8bba(".concat(e.total, ")");
            },
          },
        ],
        ve = (function (e) {
          v()(n, e);
          var t = he(n);
          function n() {
            var e, a;
            f()(this, n);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
              i[o] = arguments[o];
            return b()(
              a,
              ((e = a = t.call.apply(t, [this].concat(i))),
              (a.handleScroll = function () {
                var e = a.props.onScrollLoad;
                e && e();
              }),
              (a.handleReplyCmtIdSet = function (e, t) {
                a.props.allowComment
                  ? (0, a.props.setNewState)({
                      replingConf: { modId: e, cmId: t },
                    })
                  : O.a.show({
                      type: "warning",
                      msg: "\u8bc4\u8bba\u7cfb\u7edf\u5347\u7ea7\u4e2d",
                    });
              }),
              (a.handleCmtPraise = function (e) {
                var t = a.props.onCmtPraise;
                t && t(e);
              }),
              (a.handleCmtListLoad = function (e) {
                var t = a.props.onCmtListLoad;
                t && t(e);
              }),
              e)
            );
          }
          return (
            h()(n, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.allowComment,
                    a = t.cmtById,
                    i = t.subCmtById,
                    o = t.subCmtStateById,
                    c = t.replingConf,
                    s = t.onReplyCmtLoad,
                    l = t.onSubCmtPraise,
                    u = t.onCmtDel,
                    m = t.onSubCmtDel,
                    d = t.onCmtSend,
                    p = t.onCmtReply,
                    f = this.props[r.NEW];
                  return C.a.createElement(
                    V.a,
                    { bottom: 700, onChangeScroll: this.handleScroll },
                    C.a.createElement(
                      "div",
                      { className: "mod_comment", id: "comment_box" },
                      C.a.createElement(
                        "div",
                        { className: "part__hd" },
                        C.a.createElement(
                          "h2",
                          { className: "part__tit" },
                          "\u8bc4\u8bba",
                          C.a.createElement(
                            "span",
                            { className: "c_tx_thin part__tit_desc" },
                            "\u5171".concat(
                              (f && f.total) || 0,
                              "\u6761\u8bc4\u8bba"
                            )
                          )
                        )
                      ),
                      n && C.a.createElement(ne, { onCmtSend: d }),
                      ge.map(function (t) {
                        var d = e.props[t.key];
                        if (!d || 0 === d.total)
                          return t.key === r.NEW
                            ? C.a.createElement(
                                "div",
                                { key: t.key, className: "mod_comment_none" },
                                n
                                  ? "\u8fd8\u6ca1\u6709\u4eba\u8bc4\u8bba\uff0c\u5feb\u6765\u62a2\u6c99\u53d1\u5427~"
                                  : "\u8bc4\u8bba\u7cfb\u7edf\u5347\u7ea7\u4e2d"
                              )
                            : null;
                        var f =
                          "function" === typeof t.title ? t.title(d) : t.title;
                        return C.a.createElement(_e, {
                          key: t.key,
                          modId: t.key,
                          className: t.className,
                          title: f,
                          moreTitle: t.moreTitle,
                          replyingConf: c,
                          modState: d,
                          cmtById: a,
                          subCmtById: i,
                          subCmtStateById: o,
                          onReplyCmtIdSet: e.handleReplyCmtIdSet,
                          onCmtPraise: e.handleCmtPraise,
                          onSubCmtPraise: l,
                          onCmtDel: u,
                          onSubCmtDel: m,
                          onCmtListLoad: e.handleCmtListLoad,
                          onReplyCmtLoad: s,
                          onCmtReply: p,
                        });
                      })
                    )
                  );
                },
              },
            ]),
            n
          );
        })(x.Component);
      function ye(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function be(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ye(Object(n), !0).forEach(function (t) {
                d()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ye(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Ee(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = w()(e);
          if (t) {
            var r = w()(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return b()(this, n);
        };
      }
      var we = { modId: r.NEW, cmId: "" },
        Ne = (function (e) {
          v()(n, e);
          var t = Ee(n);
          function n(e) {
            var a;
            return (
              f()(this, n),
              ((a = t.call(this, e)).initCmtData = function () {
                var e = a.props,
                  t = e.type,
                  n = e.id;
                T({ type: t, id: n, pageSize: 25, withHot: 1 })
                  .then(function (e) {
                    var t = {},
                      n = {},
                      i = {
                        allowComment: !!e.AllowComment,
                        isAuthor: !!e.IsAuthor,
                        canMusicianSay: !!e.CanMusicianSay,
                      };
                    if (e.CommentList) {
                      var o = z(e.CommentList),
                        c = o.cmtById,
                        s = o.total,
                        l = o.idList,
                        u = o.subCmtById,
                        m = o.hasMore;
                      (i[r.NEW] = {
                        curPage: 1,
                        pageSize: 25,
                        total: s,
                        idList: l,
                        hasMore: m,
                      }),
                        (t = be(be({}, t), c)),
                        (n = be(be({}, n), u));
                    }
                    if (e.CommentList2 && e.CommentList2.Comments) {
                      var d = z(e.CommentList2),
                        p = d.cmtById,
                        f = d.total,
                        _ = d.idList,
                        h = d.subCmtById,
                        g = d.hasMore;
                      (i[r.HOT] = {
                        hotType: j.b.TOP,
                        total: f,
                        hasMore: g,
                        curPage: 1,
                        pageSize: 15,
                        idList: _,
                      }),
                        (t = be(be({}, t), p)),
                        (n = be(be({}, n), h));
                    }
                    if (e.CommentList3 && e.CommentList3.Comments) {
                      var v = z(e.CommentList3),
                        y = v.cmtById,
                        b = v.total,
                        E = v.idList,
                        w = v.subCmtById,
                        N = v.hasMore;
                      (i[r.NEW_HOT] = {
                        curPage: 1,
                        pageSize: b,
                        idList: E,
                        total: b,
                        hasMore: N,
                      }),
                        (t = be(be({}, t), y)),
                        (n = be(be({}, n), w));
                    }
                    a.setState(function (e) {
                      return be(
                        be(be({}, e), i),
                        {},
                        {
                          isLoading: !1,
                          cmtById: be(be({}, e.cmtById), t),
                          subCmtById: be(be({}, e.subCmtById), n),
                        }
                      );
                    });
                  })
                  .catch(function (e) {
                    O.a.show({
                      type: "warning",
                      msg:
                        (e && (e.msg || (e.data && e.data.Msg) || e.Msg)) ||
                        "\u7f51\u7edc\u7e41\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
                    });
                  });
                A({
                  type: t,
                  id: n,
                  pageSize: 15,
                  hotType: j.b.MUSICIAN,
                  withAirborne: 1,
                })
                  .then(function (e) {
                    var t = {},
                      n = {},
                      i = {
                        allowComment: !!e.AllowComment,
                        isAuthor: !!e.IsAuthor,
                        canMusicianSay: !!e.CanMusicianSay,
                      };
                    if (e.CommentList && e.CommentList.Comments) {
                      var o = z(e.CommentList),
                        c = o.cmtById,
                        s = o.total,
                        l = o.idList,
                        u = o.subCmtById,
                        m = o.hasMore;
                      (i[r.MUSICIAN] = {
                        hotType: j.b.MUSICIAN,
                        curPage: 1,
                        pageSize: 15,
                        total: s,
                        idList: l,
                        hasMore: m,
                      }),
                        (t = be(be({}, t), c)),
                        (n = be(be({}, n), u));
                    }
                    if (e.CommentList2 && e.CommentList2.Comments) {
                      var d = z(e.CommentList2),
                        p = d.cmtById,
                        f = d.total,
                        _ = d.idList,
                        h = d.subCmtById,
                        g = d.hasMore;
                      (i[r.AIR] = {
                        hotType: j.b.AIRBORNE,
                        curPage: 1,
                        pageSize: 15,
                        total: f,
                        idList: _,
                        hasMore: g,
                      }),
                        (t = be(be({}, t), p)),
                        (n = be(be({}, n), h));
                    }
                    a.setState(function (e) {
                      return be(
                        be(be({}, e), i),
                        {},
                        {
                          cmtById: be(be({}, e.cmtById), t),
                          subCmtById: be(be({}, e.subCmtById), n),
                        }
                      );
                    });
                  })
                  .catch(function (e) {
                    O.a.show({
                      type: "warning",
                      msg:
                        (e && (e.msg || (e.data && e.data.Msg) || e.Msg)) ||
                        "\u7f51\u7edc\u7e41\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
                    });
                  });
              }),
              (a.handleCmtPraise = function (e) {
                if (q.a.isLogin()) {
                  var t = e.cmId,
                    n = e.isPraised,
                    r = e.praiseNum;
                  a.setState(function (a) {
                    return be(
                      be({}, a),
                      {},
                      {
                        cmtById: be(
                          be({}, a.cmtById),
                          {},
                          d()(
                            {},
                            t,
                            be(
                              be({}, e),
                              {},
                              { praiseNum: r + (n ? -1 : 1), isPraised: !n }
                            )
                          )
                        ),
                      }
                    );
                  }),
                    F({ id: t, type: n ? j.d.CANCEL_PRAISE : j.d.PRAISE })
                      .then(function (e) {
                        if (0 !== e.code || 0 !== e.subcode)
                          return Promise.reject(e);
                      })
                      .catch(function (i) {
                        i && 1e3 === i.code
                          ? q.a.openLogin()
                          : O.a.show({
                              type: "warning",
                              msg:
                                (i &&
                                  (i.msg || (i.data && i.data.Msg) || i.Msg)) ||
                                "\u7f51\u7edc\u7e41\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
                            }),
                          a.setState(function (a) {
                            return be(
                              be({}, a),
                              {},
                              {
                                cmtById: be(
                                  be({}, a.cmtById),
                                  {},
                                  d()(
                                    {},
                                    t,
                                    be(
                                      be({}, e),
                                      {},
                                      { praiseNum: r, isPraised: n }
                                    )
                                  )
                                ),
                              }
                            );
                          });
                      });
                } else q.a.openLogin();
              }),
              (a.setNewState = function (e) {
                a.setState(function (t) {
                  return be(be({}, t), e);
                });
              }),
              (a.handleCmtListLoad = function (e) {
                var t = a.state[e];
                if (t && !t.isLoading)
                  if (t.curPage * t.pageSize >= t.total)
                    a.setNewState(
                      d()({}, e, be(be({}, t), {}, { curPage: 1 }))
                    );
                  else if (t.total <= t.idList.length)
                    a.setNewState(
                      d()({}, e, be(be({}, t), {}, { curPage: t.curPage + 1 }))
                    );
                  else if (t.hotType && t.hasMore) {
                    a.setNewState(
                      d()({}, e, be(be({}, t), {}, { isLoading: !0 }))
                    );
                    var n = a.props,
                      r = n.type,
                      i = n.id,
                      o = a.state.cmtById[t.idList[t.idList.length - 1]];
                    A({
                      type: r,
                      id: i,
                      pageNum: t.curPage,
                      pageSize: t.pageSize,
                      hotType: t.hotType,
                      lastCommentSeqNo: o.seqNo,
                    })
                      .then(function (n) {
                        var r = {},
                          i = {},
                          o = {
                            allowComment: !!n.AllowComment,
                            isAuthor: !!n.IsAuthor,
                            canMusicianSay: !!n.CanMusicianSay,
                          };
                        if (n.CommentList && n.CommentList.Comments) {
                          var c = z(n.CommentList),
                            s = c.cmtById,
                            l = c.total,
                            m = c.idList,
                            d = c.subCmtById,
                            p = c.hasMore;
                          (o[e] = be(
                            be({}, t),
                            {},
                            {
                              hotType: t.hotType,
                              curPage: t.curPage + 1,
                              pageSize: t.pageSize,
                              total: l,
                              hasMore: p,
                              idList: [].concat(u()(t.idList), u()(m)),
                              isLoading: !1,
                            }
                          )),
                            (r = be(be({}, r), s)),
                            (i = be(be({}, i), d));
                        }
                        a.setState(function (e) {
                          return be(
                            be(be({}, e), o),
                            {},
                            {
                              cmtById: be(be({}, e.cmtById), r),
                              subCmtById: be(be({}, e.subCmtById), i),
                            }
                          );
                        });
                      })
                      .catch(function (e) {
                        O.a.show({
                          type: "warning",
                          msg:
                            (e && (e.msg || (e.data && e.data.Msg) || e.Msg)) ||
                            "\u7f51\u7edc\u7e41\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
                        });
                      });
                  }
              }),
              (a.handleScrollLoad = function () {
                var e = r.NEW,
                  t = a.state[e];
                if (t && !t.isLoading)
                  if (t.total <= t.idList.length)
                    a.setNewState(
                      d()({}, e, be(be({}, t), {}, { curPage: t.curPage + 1 }))
                    );
                  else if (t.hasMore) {
                    a.setNewState(
                      d()({}, e, be(be({}, t), {}, { isLoading: !0 }))
                    );
                    var n = a.props,
                      i = n.type,
                      o = n.id,
                      c = a.state.cmtById[t.idList[t.idList.length - 1]];
                    T({
                      type: i,
                      id: o,
                      pageNum: t.curPage,
                      pageSize: t.pageSize,
                      lastCommentSeqNo: c.seqNo,
                    })
                      .then(function (n) {
                        var r = {},
                          i = {},
                          o = {
                            allowComment: !!n.AllowComment,
                            isAuthor: !!n.IsAuthor,
                            canMusicianSay: !!n.CanMusicianSay,
                          };
                        if (n.CommentList && n.CommentList.Comments) {
                          var c = z(n.CommentList),
                            s = c.cmtById,
                            l = c.total,
                            m = c.idList,
                            d = c.subCmtById,
                            p = c.hasMore;
                          (o[e] = be(
                            be({}, t),
                            {},
                            {
                              hotType: t.hotType,
                              curPage: t.curPage + 1,
                              pageSize: t.pageSize,
                              total: l,
                              hasMore: p,
                              idList: [].concat(u()(t.idList), u()(m)),
                              isLoading: !1,
                            }
                          )),
                            (r = be(be({}, r), s)),
                            (i = be(be({}, i), d));
                        }
                        a.setState(function (e) {
                          return be(
                            be(be({}, e), o),
                            {},
                            {
                              cmtById: be(be({}, e.cmtById), r),
                              subCmtById: be(be({}, e.subCmtById), i),
                            }
                          );
                        });
                      })
                      .catch(function (e) {
                        O.a.show({
                          type: "warning",
                          msg:
                            (e && (e.msg || (e.data && e.data.Msg) || e.Msg)) ||
                            "\u7f51\u7edc\u7e41\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
                        });
                      });
                  }
              }),
              (a.handleReplyCmtLoad = (function () {
                var e = s()(
                  k.a.mark(function e(t, n) {
                    var r, i, o, c, s, l, m, p, f;
                    return k.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (r = a.state),
                              (i = r.subCmtById),
                              (o = r.subCmtStateById),
                              (c = o[t])
                                ? a.setState({
                                    subCmtStateById: be(
                                      be({}, o),
                                      {},
                                      d()(
                                        {},
                                        t,
                                        be(be({}, c), {}, { isLoading: !0 })
                                      )
                                    ),
                                  })
                                : ((c = {
                                    total: 0,
                                    isLoading: !0,
                                    hasMore: !0,
                                    pageSize: 10,
                                    idListByRank:
                                      ((s = {}),
                                      d()(s, j.c.TIME, []),
                                      d()(s, j.c.HOT, []),
                                      s),
                                  }),
                                  a.setState({
                                    subCmtStateById: be(
                                      be({}, o),
                                      {},
                                      d()({}, t, c)
                                    ),
                                  })),
                              (l = c.idListByRank[n] || []),
                              (m = l[l.length - 1]),
                              (p = i[m] || { rankScore: "", seqNo: "" }),
                              (e.next = 8),
                              M({
                                rootCmId: t,
                                rankType: n,
                                pageSize: c.pageSize,
                                lastRankScore: p.rankScore,
                                lastCommentSeqNo: p.seqNo,
                              })
                                .then(function (e) {
                                  var r = {},
                                    i = {
                                      allowComment: !!e.AllowComment,
                                      isAuthor: !!e.IsAuthor,
                                      canMusicianSay: !!e.CanMusicianSay,
                                    };
                                  if (e.CommentList && e.CommentList.Comments) {
                                    var o = z(e.CommentList),
                                      s = o.cmtById,
                                      l = o.total,
                                      m = o.idList,
                                      p = o.hasMore;
                                    (c = be(
                                      be({}, c),
                                      {},
                                      {
                                        isLoading: !1,
                                        total: l,
                                        hasMore: p,
                                        idListByRank: be(
                                          be({}, c.idListByRank),
                                          {},
                                          d()(
                                            {},
                                            n,
                                            [].concat(
                                              u()(c.idListByRank[n]),
                                              u()(m)
                                            )
                                          )
                                        ),
                                      }
                                    )),
                                      (r = be(be({}, r), s));
                                  }
                                  return (
                                    a.setState(function (e) {
                                      return be(
                                        be(be({}, e), i),
                                        {},
                                        {
                                          subCmtById: be(
                                            be({}, e.subCmtById),
                                            r
                                          ),
                                          subCmtStateById: be(
                                            be({}, e.subCmtStateById),
                                            {},
                                            d()({}, t, c)
                                          ),
                                        }
                                      );
                                    }),
                                    !0
                                  );
                                })
                                .catch(function (e) {
                                  return (
                                    O.a.show({
                                      type: "warning",
                                      msg:
                                        (e &&
                                          (e.msg ||
                                            (e.data && e.data.Msg) ||
                                            e.Msg)) ||
                                        "\u7f51\u7edc\u7e41\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
                                    }),
                                    !1
                                  );
                                })
                            );
                          case 8:
                            return (f = e.sent), e.abrupt("return", f);
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })()),
              (a.handleSubCmtPraise = function (e, t) {
                if (q.a.isLogin()) {
                  var n = t.cmId,
                    r = t.isPraised,
                    i = t.praiseNum;
                  a.setState(function (e) {
                    return be(
                      be({}, e),
                      {},
                      {
                        subCmtById: be(
                          be({}, e.subCmtById),
                          {},
                          d()(
                            {},
                            n,
                            be(
                              be({}, t),
                              {},
                              { praiseNum: i + (r ? -1 : 1), isPraised: !r }
                            )
                          )
                        ),
                      }
                    );
                  }),
                    F({ id: n, type: r ? j.d.CANCEL_PRAISE : j.d.PRAISE })
                      .then(function (e) {
                        if (0 !== e.code || 0 !== e.subcode)
                          return Promise.reject(e);
                      })
                      .catch(function (e) {
                        e && 1e3 === e.code
                          ? q.a.openLogin()
                          : O.a.show({
                              type: "warning",
                              msg:
                                (e &&
                                  (e.msg || (e.data && e.data.Msg) || e.Msg)) ||
                                "\u7f51\u7edc\u7e41\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
                            }),
                          a.setState(function (e) {
                            return be(
                              be({}, e),
                              {},
                              {
                                subCmtById: be(
                                  be({}, e.subCmtById),
                                  {},
                                  d()(
                                    {},
                                    n,
                                    be(
                                      be({}, t),
                                      {},
                                      { praiseNum: i, isPraised: r }
                                    )
                                  )
                                ),
                              }
                            );
                          });
                      });
                } else q.a.openLogin();
              }),
              (a.delCmt = function (e) {
                var t = e.cmId;
                a.setState(function (n) {
                  return be(
                    be({}, n),
                    {},
                    {
                      cmtById: be(
                        be({}, n.cmtById),
                        {},
                        d()({}, t, be(be({}, e), {}, { isShow: !1 }))
                      ),
                    }
                  );
                }),
                  D({ id: t })
                    .then(function (e) {
                      if (0 !== e.Subcode) return Promise.reject(e);
                    })
                    .catch(function (n) {
                      n && 1e3 === n.code
                        ? q.a.openLogin()
                        : O.a.show({
                            type: "warning",
                            msg:
                              (n &&
                                (n.msg || (n.data && n.data.Msg) || n.Msg)) ||
                              "\u7f51\u7edc\u7e41\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
                          }),
                        a.setState(function (n) {
                          return be(
                            be({}, n),
                            {},
                            {
                              cmtById: be(
                                be({}, n.cmtById),
                                {},
                                d()({}, t, be(be({}, e), {}, { isShow: !0 }))
                              ),
                            }
                          );
                        });
                    });
              }),
              (a.handleCmtDel = function (e) {
                if (q.a.isLogin())
                  var t = Object(S.b)({
                    title: "QQ\u97f3\u4e50",
                    msg: "\u786e\u5b9a\u5220\u9664\u8bc4\u8bba\uff1f",
                    type: "warning",
                    btn: [
                      {
                        fn: function () {
                          t();
                        },
                        text: "\u53d6\u6d88",
                      },
                      {
                        fn: function () {
                          a.delCmt(e), t();
                        },
                        text: "\u5220\u9664",
                      },
                    ],
                  });
                else q.a.openLogin();
              }),
              (a.delSubCmt = function (e, t) {
                var n = t.cmId;
                a.setState(function (e) {
                  return be(
                    be({}, e),
                    {},
                    {
                      subCmtById: be(
                        be({}, e.subCmtById),
                        {},
                        d()({}, n, be(be({}, t), {}, { isShow: !1 }))
                      ),
                    }
                  );
                }),
                  D({ id: n })
                    .then(function (e) {
                      if (0 !== e.Subcode) return Promise.reject(e);
                    })
                    .catch(function (e) {
                      e && 1e3 === e.code
                        ? q.a.openLogin()
                        : O.a.show({
                            type: "warning",
                            msg:
                              (e &&
                                (e.msg || (e.data && e.data.Msg) || e.Msg)) ||
                              "\u7f51\u7edc\u7e41\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
                          }),
                        a.setState(function (e) {
                          return be(
                            be({}, e),
                            {},
                            {
                              subCmtById: be(
                                be({}, e.subCmtById),
                                {},
                                d()({}, n, be(be({}, t), {}, { isShow: !0 }))
                              ),
                            }
                          );
                        });
                    });
              }),
              (a.handleSubCmtDel = function (e, t) {
                if (q.a.isLogin())
                  var n = Object(S.b)({
                    title: "QQ\u97f3\u4e50",
                    msg: "\u786e\u5b9a\u5220\u9664\u8bc4\u8bba\uff1f",
                    type: "warning",
                    btn: [
                      {
                        fn: function () {
                          n();
                        },
                        text: "\u53d6\u6d88",
                      },
                      {
                        fn: function () {
                          a.delSubCmt(e, t), n();
                        },
                        text: "\u5220\u9664",
                      },
                    ],
                  });
                else q.a.openLogin();
              }),
              (a.handleCmtSend = function (e) {
                if (!q.a.isLogin()) return q.a.openLogin(), Promise.reject();
                if (!a.state.allowComment)
                  return (
                    O.a.show({
                      type: "warning",
                      msg: "\u8bc4\u8bba\u7cfb\u7edf\u5347\u7ea7\u4e2d",
                    }),
                    Promise.reject()
                  );
                var t = a.props,
                  n = t.type,
                  i = t.id;
                return U({ type: n, id: i, content: e })
                  .then(function (t) {
                    if (0 !== t.SubCode) return Promise.reject(t);
                    var n = H(t, e),
                      i = (function (e) {
                        var t = [r.NEW_HOT, r.HOT, r.NEW].find(function (t) {
                          var n, a;
                          return (
                            (null === (n = e[t]) ||
                            void 0 === n ||
                            null === (a = n.idList) ||
                            void 0 === a
                              ? void 0
                              : a.length) > 0
                          );
                        });
                        return t || r.NEW;
                      })(a.state);
                    a.setState(function (e) {
                      var t = e[i] || {
                        total: 0,
                        hasMore: !0,
                        idList: [],
                        curPage: 1,
                        pageSize: 25,
                      };
                      return be(
                        be({}, e),
                        {},
                        d()(
                          {
                            replingConf: be({}, we),
                            cmtById: be(
                              be({}, e.cmtById),
                              {},
                              d()({}, n.cmId, n)
                            ),
                          },
                          i,
                          be(
                            be({}, t),
                            {},
                            {
                              total: t.total + 1,
                              idList: [n.cmId].concat(u()(t.idList)),
                            }
                          )
                        )
                      );
                    }),
                      O.a.show({
                        type: "success",
                        msg: "\u8bc4\u8bba\u53d1\u5e03\u6210\u529f",
                      });
                  })
                  .catch(function (e) {
                    return (
                      e && 1e3 === e.code
                        ? q.a.openLogin()
                        : O.a.show({
                            type: "warning",
                            msg:
                              (e &&
                                (e.msg || (e.data && e.data.Msg) || e.Msg)) ||
                              "\u7f51\u7edc\u7e41\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
                          }),
                      Promise.reject()
                    );
                  });
              }),
              (a.handleCmtReply = function (e, t, n) {
                if (a.state.isSending)
                  return (
                    O.a.show({
                      type: "warning",
                      msg: "\u8bc4\u8bba\u6b63\u5728\u53d1\u9001\u4e2d\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5",
                    }),
                    Promise.reject()
                  );
                if (q.a.isLogin()) {
                  if (!a.state.allowComment)
                    return (
                      O.a.show({
                        type: "warning",
                        msg: "\u8bc4\u8bba\u7cfb\u7edf\u5347\u7ea7\u4e2d",
                      }),
                      Promise.reject()
                    );
                  a.setState({ isSending: !0 });
                  var i = a.props,
                    o = i.type,
                    c = i.id;
                  return U({ type: o, id: c, content: e, replyCmId: t.cmId })
                    .then(function (i) {
                      if (0 !== i.SubCode) return Promise.reject(i);
                      var o = H(i, e);
                      n &&
                        (o.repliedCmts = [
                          {
                            cmId: t.cmId,
                            nick: t.nick,
                            encryptUin: t.encryptUin,
                            content: t.content,
                            replyCnt: t.replyCnt,
                            isAuthorPraise: t.isAuthorPraise,
                          },
                        ]);
                      var c = n || t.cmId;
                      a.setState(function (e) {
                        var t,
                          n,
                          a = e.subCmtStateById[c] || {
                            total: 0,
                            isLoading: !1,
                            pageSize: 10,
                            hasMore: !0,
                            idListByRank:
                              ((t = {}),
                              d()(t, j.c.TIME, []),
                              d()(t, j.c.HOT, []),
                              t),
                          };
                        return be(
                          be({}, e),
                          {},
                          {
                            isSending: !1,
                            replingConf: { modId: r.NEW, cmId: "" },
                            subCmtById: be(
                              be({}, e.subCmtById),
                              {},
                              d()({}, o.cmId, o)
                            ),
                            cmtById: be(
                              be({}, e.cmtById),
                              {},
                              d()(
                                {},
                                c,
                                be(
                                  be({}, e.cmtById[c]),
                                  {},
                                  {
                                    replyCnt: e.cmtById[c].replyCnt + 1,
                                    subCmtIdList: [o.cmId].concat(
                                      u()(e.cmtById[c].subCmtIdList)
                                    ),
                                  }
                                )
                              )
                            ),
                            subCmtStateById: be(
                              be({}, e.subCmtStateById),
                              {},
                              d()(
                                {},
                                c,
                                be(
                                  be({}, a),
                                  {},
                                  {
                                    total: a.total + 1,
                                    idListByRank:
                                      ((n = {}),
                                      d()(
                                        n,
                                        j.c.HOT,
                                        [o.cmId].concat(
                                          u()(a.idListByRank[j.c.HOT])
                                        )
                                      ),
                                      d()(
                                        n,
                                        j.c.TIME,
                                        [o.cmId].concat(
                                          u()(a.idListByRank[j.c.TIME])
                                        )
                                      ),
                                      n),
                                  }
                                )
                              )
                            ),
                          }
                        );
                      }),
                        O.a.show({
                          type: "success",
                          msg: "\u8bc4\u8bba\u53d1\u5e03\u6210\u529f",
                        });
                    })
                    .catch(function (e) {
                      return (
                        e && 1e3 === e.code
                          ? q.a.openLogin()
                          : O.a.show({
                              type: "warning",
                              msg:
                                (e &&
                                  (e.msg || (e.data && e.data.Msg) || e.Msg)) ||
                                "\u7f51\u7edc\u7e41\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
                            }),
                        a.setState({ isSending: !1 }),
                        Promise.reject()
                      );
                    });
                }
                q.a.openLogin();
              }),
              (a.state = {
                isLoading: !0,
                isSending: !1,
                allowComment: !0,
                cmtById: {},
                subCmtById: {},
                subCmtStateById: {},
                replingConf: be({}, we),
              }),
              a
            );
          }
          return (
            h()(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this.initCmtData();
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  var t,
                    n = this;
                  e.id !== this.props.id &&
                    this.setState(
                      ((t = {
                        isLoading: !0,
                        isSending: !1,
                        allowComment: !0,
                        cmtById: {},
                        subCmtById: {},
                        subCmtStateById: {},
                        replingConf: be({}, we),
                      }),
                      d()(t, r.AIR, null),
                      d()(t, r.HOT, null),
                      d()(t, r.MUSICIAN, null),
                      d()(t, r.NEW, null),
                      d()(t, r.NEW_HOT, null),
                      t),
                      function () {
                        n.initCmtData();
                      }
                    );
                },
              },
              {
                key: "render",
                value: function () {
                  return this.state.isLoading
                    ? C.a.createElement(B.a, null)
                    : C.a.createElement(
                        ve,
                        o()({}, this.state, {
                          setNewState: this.setNewState,
                          onCmtPraise: this.handleCmtPraise,
                          onSubCmtPraise: this.handleSubCmtPraise,
                          onCmtDel: this.handleCmtDel,
                          onSubCmtDel: this.handleSubCmtDel,
                          onCmtListLoad: this.handleCmtListLoad,
                          onScrollLoad: this.handleScrollLoad,
                          onReplyCmtLoad: this.handleReplyCmtLoad,
                          onCmtSend: this.handleCmtSend,
                          onCmtReply: this.handleCmtReply,
                        })
                      );
                },
              },
            ]),
            n
          );
        })(x.Component);
      t.a = Ne;
    },
    431: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "b", function () {
          return d;
        }),
        n.d(t, "d", function () {
          return f;
        }),
        n.d(t, "c", function () {
          return _;
        });
      var a,
        r = n(15),
        i = n(3),
        o = n.n(i),
        c = n(366),
        s = n.n(c),
        l = n(420);
      !(function (e) {
        (e[(e.PC = 0)] = "PC"),
          (e[(e.MAC = 1)] = "MAC"),
          (e[(e.IPHONE = 2)] = "IPHONE"),
          (e[(e.ANDROID = 3)] = "ANDROID"),
          (e[(e.FANLIVE = 14)] = "FANLIVE"),
          (e[(e.LINUX = 15)] = "LINUX");
      })(a || (a = {}));
      n(488);
      var u = function (e) {
          var t = e.type,
            n = e.config;
          if (t && n)
            return l.a.show({
              title: "".concat(n.Ftitle).concat(n.Fversion),
              width: 590,
              height: 280,
              children: o.a.createElement(
                "div",
                { className: "popup_download__bd" },
                o.a.createElement(
                  "div",
                  { className: "popup_download__btns" },
                  o.a.createElement(
                    "a",
                    {
                      href: n.Flink1,
                      className: s()("popup_download__btn_down", {
                        popup_download__btn_single: t !== a.IPHONE,
                      }),
                    },
                    o.a.createElement("i", {
                      className: "popup_download__icon_down",
                    }),
                    "\u4e0b\u8f7d\u5b89\u88c5\u5305"
                  ),
                  t === a.IPHONE &&
                    o.a.createElement(
                      "a",
                      {
                        href: n.Flink2,
                        rel: "noopener noreferrer",
                        target: "_blank",
                        className: "popup_download__btn_ios_store",
                      },
                      o.a.createElement("i", {
                        className: "popup_download__icon_phone",
                      }),
                      "\u53bbiTunes Store\u4e0b\u8f7d"
                    )
                ),
                o.a.createElement(
                  "div",
                  { className: "qr_code" },
                  o.a.createElement(
                    "h4",
                    { className: "qr_code__tit" },
                    "\u626b\u63cf\u4e8c\u7ef4\u7801\u4e0b\u8f7d"
                  ),
                  o.a.createElement("img", {
                    src: n.Fcode,
                    className: "qr_code__pic",
                  })
                )
              ),
            });
        },
        m = [];
      r.c.isBrowser &&
        Object(r.b)({
          format: "jsonp",
          url: "".concat(
            r.c.isBrowser ? "" : "http:",
            "//y.qq.com/download/download.js"
          ),
          data: {},
          jsonpCallback: "MusicJsonCallback",
        }).then(function (e) {
          m = e.data;
        });
      var d = function (e) {
          var t = e;
          t ||
            t === a.PC ||
            ((t = "mac" === r.c.client ? a.MAC : a.PC),
            /x11/i.test(navigator.userAgent) && (t = a.LINUX));
          var n = m[t];
          if (n && [a.IPHONE, a.ANDROID].indexOf(t) >= 0)
            u({ type: t, config: n });
          else {
            var i = (n && n.Flink1) || "//y.qq.com/download/";
            /^http(s?):\/\//i.test(i) &&
              (i = i.replace(/^http(s?):/i, "https:"));
            var o = window.open(i, "_blank");
            o && (o.opener = null);
          }
        },
        p = function (e) {
          var t = [],
            n = [];
          return (
            e.forEach(function (e) {
              t.push(e.id), n.push(e.type);
            }),
            { songIds: t.join("|"), songTypes: n.join("|") }
          );
        },
        f = function (e) {
          var t = p(e),
            n = ""
              .concat(
                /Mac/i.test(navigator.userAgent) ? "qqmusicmac" : "tencent",
                "://QQMusic/?version==1173&&from==y.qq.com&&cmd_count==1&&cmd_0==playsong&&id_0=="
              )
              .concat(t.songIds, "&&songtype_0==")
              .concat(t.songTypes, "&&info_0==&&quality_0==quality");
          window.open(n, "_self");
        },
        _ = function (e) {
          var t = p(e),
            n = ""
              .concat(
                /Mac/i.test(navigator.userAgent) ? "qqmusicmac" : "tencent",
                "://QQMusic/?version==1173&&from==y.qq.com&&cmd_count==1&&cmd_0==downloadsong&&id_0=="
              )
              .concat(t.songIds, "&&songtype_0==")
              .concat(t.songTypes, "&&info_0==&&quality_0==quality");
          window.open(n, "_self");
        };
    },
    432: function (e, t, n) {
      "use strict";
      var a = n(3),
        r = n.n(a),
        i = n(108),
        o = n.n(i),
        c = n(76),
        s = n.n(c),
        l = n(77),
        u = n(15),
        m = n(398),
        d = n(16),
        p = n(400),
        f = n(407),
        _ = n(393),
        h = function (e) {
          var t = e.albumItem,
            n = e.config,
            a = Object(d.d)(d.a.ALBUM_DETAIL, t.mid),
            i = (function () {
              var e = o()(
                s.a.mark(function e(n) {
                  var a;
                  return s.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            n.stopPropagation(),
                            n.preventDefault(),
                            (e.next = 4),
                            Object(f.j)(t.mid)
                          );
                        case 4:
                          (a = e.sent),
                            Object(_.c)({
                              songList: a || [],
                              isAdd: !0,
                              isPlay: !0,
                            });
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return r.a.createElement(
            "li",
            { className: "playlist__item" },
            r.a.createElement(
              "div",
              { className: "playlist__item_box" },
              r.a.createElement(
                "div",
                { className: "playlist__cover mod_cover" },
                r.a.createElement(
                  l.b,
                  {
                    to: Object(d.d)(d.a.ALBUM_DETAIL, t.mid),
                    className: "js_album",
                  },
                  r.a.createElement(p.a, {
                    imgurl: u.j.getAlbumPic(t.mid),
                    type: "album",
                    name: t.name,
                    className: "playlist__pic",
                  }),
                  !n.noHover &&
                    r.a.createElement("i", {
                      onClick: i,
                      className: "mod_cover__icon_play js_play",
                    })
                )
              ),
              r.a.createElement(
                "h4",
                { className: "playlist__title" },
                r.a.createElement(
                  "span",
                  { className: "playlist__title_txt" },
                  r.a.createElement(
                    l.b,
                    { to: a, title: t.name, className: "js_album" },
                    t.name
                  )
                )
              ),
              (n.singer || n.index) &&
                r.a.createElement(
                  "div",
                  { className: "playlist__author" },
                  r.a.createElement(m.a, { className: " ", singers: t.singers })
                ),
              n.time &&
                r.a.createElement(
                  "div",
                  { className: "playlist__other" },
                  t.release_time
                )
            )
          );
        };
      h.defaultProps = {
        config: { index: !1, time: !1, singer: !1, noHover: !1 },
      };
      var g = h,
        v = n(479),
        y = function (e) {
          var t = e.data;
          return r.a.createElement(
            "li",
            { className: "playlist__item" },
            r.a.createElement(
              "div",
              { className: "playlist__item_box" },
              r.a.createElement(
                "div",
                { className: "playlist__cover mod_cover" },
                r.a.createElement(
                  "a",
                  { href: t.goodsbuyurl },
                  r.a.createElement(p.a, {
                    imgurl: t.cover_pic,
                    type: "album",
                    className: "playlist__pic",
                    name: t.goodstitle,
                  })
                )
              ),
              r.a.createElement(
                "h4",
                { className: "playlist__title" },
                r.a.createElement(
                  "span",
                  { className: "playlist__title_txt" },
                  r.a.createElement("a", { href: t.goodsbuyurl }, t.goodstitle)
                )
              ),
              r.a.createElement(
                "div",
                { className: "playlist__author" },
                r.a.createElement(m.a, {
                  singers: Object(v.a)(
                    (null === t || void 0 === t ? void 0 : t.singers) || []
                  ),
                })
              )
            )
          );
        },
        b =
          (n(417),
          n(509),
          n(510),
          function (e) {
            for (
              var t = e.data,
                n = e.index,
                a = e.config,
                i = Math.ceil(t.length / 10),
                o = [],
                c = 0;
              c < i;
              c++
            ) {
              var s = t.slice(10 * c, 10 * c + 10);
              o.push(
                r.a.createElement(
                  "ul",
                  { className: "playlist__list mod_playlist", key: c },
                  s.map(function (e) {
                    return r.a.createElement(g, {
                      config: a,
                      albumItem: e,
                      key: e.id,
                    });
                  })
                )
              );
            }
            return r.a.createElement(
              "div",
              { className: "mod_playlist mod_slide" },
              r.a.createElement(
                "div",
                {
                  className: "slide__list js_list",
                  style: { left: "-".concat(100 * n, "%") },
                },
                o
              )
            );
          }),
        E = function (e) {
          var t = e.data,
            n = e.index,
            a = e.config,
            i = e.periData,
            o = t;
          return (
            a.length && a.length < o.length && (o = o.slice(0, a.length)),
            a.peri
              ? r.a.createElement(
                  "div",
                  { className: "mod_playlist no_more js_list" },
                  r.a.createElement(
                    "ul",
                    { className: "playlist__list" },
                    i.map(function (e) {
                      return r.a.createElement(y, { data: e, key: e.goodsid });
                    })
                  )
                )
              : a.slide
              ? r.a.createElement(b, { data: o, index: n, config: a })
              : r.a.createElement(
                  "ul",
                  { className: "playlist__list mod_playlist" },
                  o &&
                    o.map(function (e) {
                      return r.a.createElement(g, {
                        albumItem: e,
                        config: a,
                        key: e.id,
                      });
                    })
                )
          );
        };
      E.defaultProps = { index: 0, config: { slide: !1 } };
      t.a = Object(a.memo)(E);
    },
    433: function (e, t, n) {
      "use strict";
      var a = n(3),
        r = n.n(a);
      n(524);
      t.a = function (e) {
        var t = e.iconClass,
          n = e.title,
          a = e.content;
        return r.a.createElement(
          "div",
          { className: "none_txt" },
          r.a.createElement("i", {
            className: "none_txt__symbol ".concat(t || ""),
          }),
          r.a.createElement("p", null, n),
          a
        );
      };
    },
    435: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      var a,
        r,
        i = n(2),
        o = n.n(i),
        c = n(368),
        s = n.n(c),
        l = n(361),
        u = n.n(l),
        m = n(362),
        d = n.n(m),
        p = n(149),
        f = n.n(p),
        _ = n(363),
        h = n.n(_),
        g = n(364),
        v = n.n(g),
        y = n(365),
        b = n.n(y),
        E = n(3),
        w = n.n(E),
        N = n(109),
        k = n.n(N),
        x = n(15),
        C = n(420),
        O = n(390),
        S = n(391),
        j = n(366),
        I = n.n(j),
        P = n(481);
      !(function (e) {
        (e[(e.PLAYLIST = 1)] = "PLAYLIST"),
          (e[(e.PROFILE = 2)] = "PROFILE"),
          (e[(e.CMT = 3)] = "CMT"),
          (e[(e.SONG = 5)] = "SONG"),
          (e[(e.ALBUM = 6)] = "ALBUM"),
          (e[(e.SINGER = 7)] = "SINGER"),
          (e[(e.MV = 8)] = "MV");
      })(r || (r = {}));
      var L =
        ((a = {}),
        o()(a, r.CMT, [
          { id: "1", txt: "\u65e0\u610f\u4e49\u7684\u8bc4\u8bba" },
          { id: "2", txt: "\u6076\u610f\u8c29\u9a82\u653b\u51fb" },
          { id: "3", txt: "\u8425\u9500\u5e7f\u544a" },
          { id: "4", txt: "\u8272\u60c5\u66b4\u529b" },
          { id: "5", txt: "\u653f\u6cbb\u53cd\u52a8" },
          { id: "6", txt: "\u5176\u4ed6" },
        ]),
        o()(a, "default", [
          { id: "1", txt: "\u8c29\u9a82\u9020\u8c23" },
          { id: "2", txt: "\u5e7f\u544a\u4f20\u9500" },
          { id: "3", txt: "\u6284\u88ad" },
          { id: "4", txt: "\u8bc8\u9a97" },
          { id: "5", txt: "\u8272\u60c5" },
          { id: "6", txt: "\u66b4\u529b" },
          { id: "7", txt: "\u53cd\u52a8" },
          { id: "8", txt: "\u5176\u4ed6" },
        ]),
        a);
      n(521);
      function q(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = b()(e);
          if (t) {
            var r = b()(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return v()(this, n);
        };
      }
      var R = (function (e) {
        h()(n, e);
        var t = q(n);
        function n() {
          var e, a;
          u()(this, n);
          for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
            i[o] = arguments[o];
          return v()(
            a,
            ((e = a = t.call.apply(t, [this].concat(i))),
            (a.handleSelectChange = function (e) {
              (0, a.props.onChange)({ reportCls: e.target.value });
            }),
            (a.hanldeTextChange = function (e) {
              (0, a.props.onChange)({ reason: e.target.value });
            }),
            (a.handlePicChange = function (e) {
              e.target.files &&
                e.target.files[0] &&
                Object(P.b)(e.target.files[0])
                  .then(function (e) {
                    e.length > 20480
                      ? O.a.show({
                          type: "warning",
                          msg: "\u538b\u7f29\u540e\u56fe\u7247\u5927\u5c0f\u8d85\u51fa\u4e8620k",
                        })
                      : (0, a.props.onChange)({ imgUrl: e });
                  })
                  .catch(function (e) {
                    O.a.show({
                      type: "warning",
                      msg:
                        (e && e.message) ||
                        "\u9047\u5230\u4e86\u70b9\u95ee\u9898\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5",
                    });
                  });
            }),
            (a.handleImgDelete = function () {
              (0, a.props.onChange)({ imgUrl: "" });
            }),
            e)
          );
        }
        return (
          d()(n, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.type,
                  n = e.imgUrl,
                  a = e.reason,
                  i = e.reportCls,
                  o = L[t] || L.default,
                  c = Math.ceil(x.j.getRealLen(a) / 2);
                return w.a.createElement(
                  "div",
                  { className: "popup_inform__form" },
                  w.a.createElement(
                    "div",
                    { className: "popup_inform__form_grid" },
                    w.a.createElement(
                      "label",
                      { className: "popup_inform__form_label" },
                      "\u4e3e\u62a5\u7c7b\u578b"
                    ),
                    w.a.createElement(
                      "div",
                      { className: "popup_inform__form_cont" },
                      w.a.createElement(
                        "select",
                        {
                          className: "popup_inform__form_sel",
                          value: i,
                          onChange: this.handleSelectChange,
                        },
                        o.map(function (e) {
                          return w.a.createElement(
                            "option",
                            { key: e.id, value: e.id },
                            e.txt
                          );
                        })
                      ),
                      w.a.createElement("i", {
                        className: "popup_inform__form_arr",
                      })
                    )
                  ),
                  t !== r.CMT &&
                    w.a.createElement(
                      "div",
                      { className: "popup_inform__form_grid" },
                      w.a.createElement(
                        "label",
                        { className: "popup_inform__form_label" },
                        "\u5185\u5bb9\u622a\u56fe"
                      ),
                      !n &&
                        w.a.createElement(
                          "div",
                          {
                            className: "popup_inform__form_cont",
                            id: "upload_accusation_pic",
                          },
                          w.a.createElement(
                            "span",
                            { className: "popup_inform__form_simulate" },
                            "\u6dfb\u52a0\u56fe\u7247\u8bf4\u660e"
                          ),
                          w.a.createElement("input", {
                            type: "file",
                            id: "js_img",
                            className: "popup_inform__form_upload",
                            onChange: this.handlePicChange,
                          })
                        ),
                      n &&
                        w.a.createElement(
                          "div",
                          { id: "accusation_pic" },
                          w.a.createElement("img", {
                            src: n,
                            className: "popup_inform__form_preview",
                          }),
                          w.a.createElement(
                            "a",
                            {
                              className: "popup_inform__form_link",
                              onClick: this.handleImgDelete,
                            },
                            "\u5220\u9664"
                          )
                        )
                    ),
                  w.a.createElement(
                    "div",
                    { className: "popup_inform__form_grid" },
                    w.a.createElement(
                      "label",
                      { className: "popup_inform__form_label" },
                      "\u4e3e\u62a5\u63cf\u8ff0"
                    ),
                    w.a.createElement(
                      "div",
                      { className: "popup_inform__form_textarea" },
                      w.a.createElement("textarea", {
                        placeholder: "\u8bf7\u8f93\u5165".concat(
                          100,
                          "\u5b57\u4ee5\u5185\u7684\u63cf\u8ff0"
                        ),
                        value: a,
                        onChange: this.hanldeTextChange,
                      }),
                      w.a.createElement(
                        "span",
                        {
                          className: I()("popup_inform__form_count", {
                            error: c > 100,
                          }),
                        },
                        "".concat(c, "/").concat(100)
                      )
                    ),
                    c > 100 &&
                      w.a.createElement(
                        "p",
                        {
                          className: "popup_inform__form_tips",
                          id: "accusation_tips",
                        },
                        "\u4e3e\u62a5\u63cf\u8ff0\u6700\u591a\u53ef\u8f93\u5165".concat(
                          100,
                          "\u4e2a\u6c49\u5b57"
                        )
                      )
                  )
                );
              },
            },
          ]),
          n
        );
      })(w.a.PureComponent);
      function A(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? A(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : A(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function M(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = b()(e);
          if (t) {
            var r = b()(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return v()(this, n);
        };
      }
      var F = (function (e) {
          h()(n, e);
          var t = M(n);
          function n(e) {
            var a;
            u()(this, n), (a = t.call(this, e)), D.call(f()(a));
            var r = e.type,
              i = L[r] || L.default;
            return (
              (a.state = {
                isSubmitting: !1,
                imgUrl: "",
                reason: "",
                reportCls: i[0].id,
              }),
              a
            );
          }
          return (
            d()(n, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.type,
                    n = e.onClose,
                    a = w.a.createElement(
                      "div",
                      null,
                      w.a.createElement(
                        "button",
                        { className: "mod_btn upload_btns__item", onClick: n },
                        "\u53d6\u6d88"
                      ),
                      w.a.createElement(
                        "button",
                        {
                          className: "mod_btn_green upload_btns__item",
                          onClick: this.handleConfirm,
                        },
                        "\u786e\u5b9a"
                      )
                    );
                  return w.a.createElement(
                    C.a,
                    {
                      visible: !0,
                      title: "\u4e3e\u62a5",
                      width: 600,
                      footer: a,
                      onClose: n,
                    },
                    w.a.createElement(
                      R,
                      s()({ type: t }, this.state, {
                        onChange: this.handleChange,
                      })
                    )
                  );
                },
              },
            ]),
            n
          );
        })(w.a.PureComponent),
        D = function () {
          var e = this;
          (this.sendReport = function () {
            var t = e.state,
              n = t.reason,
              a = t.reportCls,
              r = t.imgUrl,
              i = t.isSubmitting,
              o = e.props,
              c = o.id,
              s = o.type,
              l = o.onClose;
            i
              ? O.a.show({
                  type: "warning",
                  msg: "\u4e3e\u62a5\u4fe1\u606f\u53d1\u9001\u4e2d",
                })
              : (e.setState({ isSubmitting: !0 }),
                Object(x.b)({
                  url: "".concat(
                    location.protocol,
                    "//cgi.kg.qq.com/fcgi-bin/fcg_music_report_recv"
                  ),
                  data: {
                    type: s,
                    eviltype: a,
                    reason: n,
                    postuin: S.a.getUin(),
                    msg: c,
                    needpic: r ? 1 : 0,
                    picurl: r,
                  },
                  dataType: "json",
                })
                  .then(function (t) {
                    if (t) {
                      if (0 === t.code) return void l();
                      if (1e3 === t.code) return void S.a.openLogin();
                    }
                    O.a.show({
                      type: "warning",
                      msg:
                        (t && t.msg) ||
                        "\u7f51\u7edc\u7e41\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
                    }),
                      e.setState({ isSubmitting: !1 });
                  })
                  .catch(function () {
                    O.a.show({
                      type: "warning",
                      msg: "\u7f51\u7edc\u7e41\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
                    }),
                      e.setState({ isSubmitting: !1 });
                  }));
          }),
            (this.handleChange = function (t) {
              e.setState(T({}, t));
            }),
            (this.handleConfirm = function () {
              var t = e.state,
                n = t.reportCls,
                a = t.reason;
              n
                ? Math.ceil(x.j.getRealLen(a) / 2) > 100
                  ? O.a.show({
                      type: "warning",
                      msg: "\u8bf7\u8f93\u5165100\u4e2a\u5b57\u7b26\u4ee5\u5185",
                    })
                  : e.state.isSubmitting
                  ? O.a.show({
                      type: "warning",
                      msg: "\u4e3e\u62a5\u4fe1\u606f\u53d1\u9001\u4e2d",
                    })
                  : e.sendReport()
                : O.a.show({
                    type: "warning",
                    msg: "\u8bf7\u8f93\u5165\u4e3e\u62a5\u7c7b\u578b",
                  });
            });
        };
      F.show = function (e) {
        if (S.a.isLogin()) {
          var t = document.createElement("div");
          document.body.appendChild(t);
          var n = function () {
              k.a.unmountComponentAtNode(t) &&
                t.parentNode &&
                t.parentNode.removeChild(t);
            },
            a = T(T({}, e), {}, { onClose: n });
          return k.a.render(w.a.createElement(F, a), t), n;
        }
        S.a.openLogin();
      };
      t.b = F;
    },
    436: function (e, t, n) {
      "use strict";
      var a = n(3),
        r = n.n(a),
        i = n(2),
        o = n.n(i),
        c = n(108),
        s = n.n(c),
        l = n(361),
        u = n.n(l),
        m = n(362),
        d = n.n(m),
        p = n(363),
        f = n.n(p),
        _ = n(364),
        h = n.n(_),
        g = n(365),
        v = n.n(g),
        y = n(76),
        b = n.n(y),
        E = n(77),
        w = n(15),
        N = n(393),
        k = n(407),
        x = n(16),
        C = n(454),
        O = n(410),
        S = n(424),
        j = n(400),
        I = n(390),
        P = n(403),
        L = n(427);
      function q(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function R(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? q(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : q(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function A(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = v()(e);
          if (t) {
            var r = v()(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return h()(this, n);
        };
      }
      var T = function (e) {
          return "pic" === e.showMode
            ? r.a.createElement(
                "div",
                { className: "playlist__item_box" },
                e.children
              )
            : r.a.createElement(r.a.Fragment, null, e.children);
        },
        M = (function (e) {
          f()(n, e);
          var t = A(n);
          function n() {
            var e, a;
            u()(this, n);
            for (var i = arguments.length, o = new Array(i), c = 0; c < i; c++)
              o[c] = arguments[c];
            return h()(
              a,
              ((e = a = t.call.apply(t, [this].concat(o))),
              (a.dowLoadSong = s()(
                b.a.mark(function e() {
                  var t, n, r, i, o;
                  return b.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((t = a.props),
                            (n = t.item),
                            null === (r = t.menuFunc) ||
                              void 0 === r ||
                              !r.dowLoadSong)
                          ) {
                            e.next = 4;
                            break;
                          }
                          return r.dowLoadSong(n), e.abrupt("return");
                        case 4:
                          return (
                            (e.next = 6),
                            Object(k.g)({ id: Number(n.dissid), length: 0 })
                          );
                        case 6:
                          (i = e.sent),
                            (o =
                              (null === i || void 0 === i
                                ? void 0
                                : i.songList) || []),
                            Object(O.d)(o);
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (a.playSong = (function () {
                var e = s()(
                  b.a.mark(function e(t) {
                    var n, r, i, o, c;
                    return b.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              (t.preventDefault(),
                              t.stopPropagation(),
                              (n = a.props),
                              (r = n.item),
                              null === (i = n.menuFunc) ||
                                void 0 === i ||
                                !i.playSong)
                            ) {
                              e.next = 6;
                              break;
                            }
                            return i.playSong(r), e.abrupt("return");
                          case 6:
                            return (
                              (e.next = 8),
                              Object(k.g)({ id: Number(r.dissid) })
                            );
                          case 8:
                            (o = e.sent),
                              (c =
                                (null === o || void 0 === o
                                  ? void 0
                                  : o.songList) || []),
                              Object(N.c)({
                                songList: c,
                                isAdd: !0,
                                isPlay: !0,
                              });
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (a.addPlayList = (function () {
                var e = s()(
                  b.a.mark(function e(t) {
                    var n, i, o, c, s;
                    return b.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((n = a.props),
                              (i = n.item),
                              null === (o = n.menuFunc) ||
                                void 0 === o ||
                                !o.addPlayList)
                            ) {
                              e.next = 4;
                              break;
                            }
                            return o.addPlayList(i, t), e.abrupt("return");
                          case 4:
                            return (
                              (e.next = 6),
                              Object(k.g)({ id: Number(i.dissid), length: 0 })
                            );
                          case 6:
                            (c = e.sent),
                              (s =
                                (null === c || void 0 === c
                                  ? void 0
                                  : c.songList) || []),
                              Object(P.b)(
                                R(
                                  R({}, t),
                                  {},
                                  {
                                    element: r.a.createElement(S.a, {
                                      isPlayList: !1,
                                      songList: s,
                                    }),
                                    className: "mod_operate_menu",
                                  }
                                )
                              );
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (a.handleAddPlayList = function (e) {
                a.addPlayList(w.j.getEventPostion(e));
              }),
              (a.shareSong = (function () {
                var e = s()(
                  b.a.mark(function e(t) {
                    var n, i, o, c, s, l, u, m;
                    return b.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((n = a.props),
                              (i = n.item),
                              null === (o = n.menuFunc) ||
                                void 0 === o ||
                                !o.shareSong)
                            ) {
                              e.next = 4;
                              break;
                            }
                            return o.shareSong(i, t), e.abrupt("return");
                          case 4:
                            (c = i),
                              (l = Object(x.c)(x.a.PLAYLIST, {
                                id: i.dissid && i.dissid.toString(),
                              })),
                              (u = {
                                pageType: "playlist",
                                type: "\u6b4c\u5355",
                                singerName: i.creatorname,
                                shareUrl: l,
                                title: c.dissname,
                                picUrl: i.imgurl,
                                hide: function () {
                                  s();
                                },
                                tips: {
                                  copy: function () {
                                    I.a.show({
                                      type: "success",
                                      msg: "\u590d\u5236\u6210\u529f",
                                    });
                                  },
                                },
                              }),
                              (m = R(
                                R({}, t),
                                {},
                                {
                                  element: r.a.createElement(L.a, u),
                                  className: "mod_operate_menu",
                                }
                              )),
                              (s = Object(P.b)(m));
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (a.handleShareSong = function (e) {
                a.shareSong(w.j.getEventPostion(e));
              }),
              e)
            );
          }
          return (
            d()(n, [
              {
                key: "render",
                value: function () {
                  var e,
                    t = this.props,
                    n = t.item,
                    a = t.index,
                    i = t.config,
                    o = t.columns,
                    c = t.showMode,
                    s = (t.styles, t.classNames),
                    l = o.headerName,
                    u = o.headerNumber,
                    m = o.headerAuthor,
                    d = o.headerOther;
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      "li",
                      {
                        className: "playlist__item ".concat(
                          a % 2 !== 0 ? "playlist__item--even" : ""
                        ),
                      },
                      r.a.createElement(
                        T,
                        { showMode: c },
                        (null === i || void 0 === i ? void 0 : i.cover) &&
                          r.a.createElement(
                            "div",
                            {
                              className: "playlist__cover ".concat(
                                (null === s || void 0 === s
                                  ? void 0
                                  : s.coverClass) || ""
                              ),
                            },
                            r.a.createElement(
                              E.b,
                              {
                                to:
                                  l.textUrl &&
                                  ("string" === typeof l.textUrl
                                    ? n[l.textUrl]
                                    : l.textUrl(n)),
                              },
                              r.a.createElement(j.a, {
                                imgurl:
                                  (null === l || void 0 === l
                                    ? void 0
                                    : l.imgCover) &&
                                  ("string" === typeof l.imgCover
                                    ? n[l.imgCover]
                                    : l.imgCover(n)),
                                name:
                                  "string" === typeof l.content
                                    ? n[l.content]
                                    : l.content(n) ||
                                      "\u56fe\u7247/\u914d\u7f6e\u5f02\u5e38...",
                                className: "playlist__pic",
                                type: "playlist",
                              }),
                              (null === i || void 0 === i
                                ? void 0
                                : i.playIcon) &&
                                r.a.createElement(
                                  r.a.Fragment,
                                  null,
                                  r.a.createElement("i", {
                                    className: "mod_cover__mask",
                                  }),
                                  r.a.createElement("i", {
                                    onClick: this.playSong,
                                    className: "mod_cover__icon_play",
                                  })
                                )
                            )
                          ),
                        r.a.createElement(
                          "h4",
                          { className: "playlist__title" },
                          r.a.createElement(
                            "span",
                            { className: "playlist__title_txt" },
                            r.a.createElement(
                              E.b,
                              {
                                to:
                                  l.textUrl &&
                                  ("string" === typeof l.textUrl
                                    ? n[l.textUrl]
                                    : l.textUrl(n)),
                              },
                              "string" === typeof l.content
                                ? n[l.content]
                                : l.content(n)
                            )
                          )
                        ),
                        (null === i || void 0 === i ? void 0 : i.menu) &&
                          r.a.createElement(C.a, {
                            isPlay: !1,
                            shareSong: this.handleShareSong,
                            isVip: !1,
                            playSong: this.playSong,
                            addPlayList: this.handleAddPlayList,
                            dowLoadSong: this.dowLoadSong,
                          }),
                        (null === i || void 0 === i ? void 0 : i.number) &&
                          r.a.createElement(
                            "div",
                            { className: "playlist__number" },
                            "string" === typeof u.content
                              ? n[u.content] || "0"
                              : u.content(n),
                            "\u9996"
                          ),
                        (null === i || void 0 === i ? void 0 : i.author) &&
                          r.a.createElement(
                            "div",
                            { className: "playlist__author" },
                            "string" === typeof m.content
                              ? n[m.content]
                              : m.content(n)
                          ),
                        (null === i || void 0 === i ? void 0 : i.other) &&
                          r.a.createElement(
                            "div",
                            { className: "playlist__other" },
                            "string" === typeof d.content
                              ? n[d.content]
                              : d.content(n)
                          ),
                        (null === i || void 0 === i ? void 0 : i.delete) &&
                          !(
                            null !== i &&
                            void 0 !== i &&
                            null !== (e = i.excludeDelete) &&
                            void 0 !== e &&
                            e.call(i, n)
                          ) &&
                          r.a.createElement(
                            "a",
                            {
                              className: "playlist__delete",
                              onClick: function () {
                                i.delete(n);
                              },
                            },
                            r.a.createElement(
                              "span",
                              { className: "icon_txt" },
                              "\u5220\u9664"
                            )
                          )
                      )
                    )
                  );
                },
              },
            ]),
            n
          );
        })(a.PureComponent),
        F =
          (n(417),
          n(500),
          function (e) {
            var t = e.data,
              n = e.config,
              a = e.columns,
              i = e.showMode,
              o = e.menuFunc,
              c = e.classNames,
              s = e.styles,
              l = a.headerName,
              u = a.headerNumber,
              m = a.headerAuthor,
              d = a.headerOther;
            if ((null === t || void 0 === t ? void 0 : t.length) > 0)
              return r.a.createElement(
                "div",
                {
                  className: ""
                    .concat(
                      "pic" === i ? "mod_playlist" : "mod_playlist_text",
                      " "
                    )
                    .concat(
                      (null === c || void 0 === c ? void 0 : c.modClass) || ""
                    ),
                  style: null === s || void 0 === s ? void 0 : s.modStyle,
                },
                n.header &&
                  r.a.createElement(
                    "ul",
                    { className: "playlist__header" },
                    l &&
                      r.a.createElement(
                        "li",
                        { className: "playlist__header_name" },
                        null === l || void 0 === l ? void 0 : l.text
                      ),
                    u &&
                      r.a.createElement(
                        "li",
                        { className: "playlist__header_number" },
                        null === u || void 0 === u ? void 0 : u.text
                      ),
                    m &&
                      r.a.createElement(
                        "li",
                        { className: "playlist__header_author" },
                        null === m || void 0 === m ? void 0 : m.text
                      ),
                    d &&
                      r.a.createElement(
                        "li",
                        { className: "playlist__header_other" },
                        null === d || void 0 === d ? void 0 : d.text
                      )
                  ),
                r.a.createElement(
                  "ul",
                  {
                    className: "playlist__list ".concat(
                      (null === c || void 0 === c ? void 0 : c.ulListClass) ||
                        ""
                    ),
                    style: null === s || void 0 === s ? void 0 : s.ulListStyle,
                  },
                  t.map(function (e, t) {
                    return r.a.createElement(M, {
                      key: e.docid || e.dissid,
                      index: t,
                      item: e,
                      config: n,
                      columns: a,
                      showMode: i,
                      menuFunc: o,
                      styles: s,
                      classNames: c,
                    });
                  })
                )
              );
          });
      t.a = Object(a.memo)(F);
    },
    437: function (e, t, n) {
      "use strict";
      var a = n(428);
      t.a = function () {
        return Object(a.a)() > 1e4;
      };
    },
    438: function (e, t, n) {
      "use strict";
      var a = n(78),
        r = n.n(a),
        i = n(439),
        o = n(440),
        c = n(421),
        s = n(450),
        l = n(15),
        u = n(426),
        m = n(437);
      t.a = function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return Object(m.a)()
          ? Promise.all([Object(i.a)(), Object(s.a)()]).then(function (t) {
              var n = r()(t, 2),
                a = (n[0], n[1]),
                i = window.cashier || window.midas.minipay,
                s = Object(c.a)(),
                u = e.buyType,
                m = void 0 === u ? o.a.SUPER_GREEN : u,
                d = e.aid,
                p = e.num,
                f = void 0 === p ? 3 : p,
                _ = e.pf,
                h =
                  void 0 === _
                    ? s
                      ? "wechat_pc-musicweb.hhlz-website"
                      : "qq_pc-musicweb.hhlz-website"
                    : _,
                g = {
                  sandbox: 1,
                  appid: s ? o.c[m] : o.b[m],
                  usepay_wxappid: "1",
                  buy_quantity: f,
                  session_id: s ? "hy_gameid" : "openid",
                  session_type: s ? "wc_actoken" : "kp_accesstoken",
                  wxappid: s ? "wx48db31d50e334801" : "",
                  openid: s
                    ? l.d.getCookie("wxopenid")
                    : l.d.getCookie("psrf_qqopenid"),
                  openkey: a,
                  aid: d,
                  price_style: "card",
                  price_type: "upgrade",
                  pf: h,
                };
              l.d.getCookie("debug") || delete g.sandbox,
                i.service(
                  {
                    hideHeader: !1,
                    title: "\u5f00\u901a\u7eff\u94bb",
                    methods: {
                      onSuccess: function () {
                        window.location.reload();
                      },
                    },
                  },
                  g
                );
            })
          : (Object(u.a)(),
            Promise.reject(new Error("\u8bf7\u5148\u767b\u5f55")));
      };
    },
    439: function (e, t, n) {
      "use strict";
      var a = n(15);
      t.a = function () {
        return Object(a.e)({
          url: "//midas.gtimg.cn/midas/minipay_v2/jsapi/cashier.js?max_age=2592000",
        });
      };
    },
    440: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      }),
        n.d(t, "c", function () {
          return s;
        }),
        n.d(t, "b", function () {
          return l;
        });
      var a,
        r,
        i,
        o = n(2),
        c = n.n(o);
      !(function (e) {
        (e.GREEN = "buygreen"),
          (e.SUPER_GREEN = "buysupergreen"),
          (e.YUAN_8 = "buy8yuan"),
          (e.YUAN_12 = "buy12yuan"),
          (e.VIP = "vip_svip"),
          (e.SVIP = "svip_vip");
      })(i || (i = {}));
      var s =
          ((a = {}),
          c()(a, i.GREEN, "1450008916"),
          c()(a, i.SUPER_GREEN, "1450008916"),
          c()(a, i.YUAN_8, "1450008608"),
          c()(a, i.YUAN_12, "1450008917"),
          c()(a, i.VIP, "1450008916"),
          c()(a, i.SVIP, "1450008916"),
          a),
        l =
          ((r = {}),
          c()(r, i.GREEN, "1450008186"),
          c()(r, i.SUPER_GREEN, "1450008186"),
          c()(r, i.YUAN_8, "1450008189"),
          c()(r, i.YUAN_12, "1450008190"),
          c()(r, i.VIP, "1450008186"),
          c()(r, i.SVIP, "1450008186"),
          r);
    },
    441: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return a;
      });
      var a = function (e) {
        var t = [];
        return (
          Array.isArray(e) &&
            (t = e.map(function (e) {
              return {
                mvid: e.mvid,
                vid: e.play_vid,
                title: e.title,
                picurl: e.cover,
                singers: e.singer,
                playcnt: 0,
                pubdate: e.upload_time,
                desc: e.desc,
              };
            })),
          t
        );
      };
      t.a = function (e) {
        var t = [];
        return (
          Array.isArray(e) &&
            (t = e.map(function (e) {
              return {
                mvid: e.vid || e.mv_id || e.id,
                vid: e.vid || e.v_id || e.mv_id,
                title: e.name || e.mv_name || e.title,
                picurl: e.cover_pic || e.mv_pic_url || e.mv_picurl || e.pic,
                singers: e.singers || e.singer_list || e.singer,
                playcnt: e.playcnt || e.play_count || e.listenCount,
                pubdate: e.pubdate || e.publish_date,
                desc: e.desc,
                isfav: e.isfav || 0,
                type: e.type || 0,
                uploader: {
                  encuin:
                    null === e || void 0 === e ? void 0 : e.uploader_encuin,
                  followNum:
                    null === e || void 0 === e
                      ? void 0
                      : e.uploader_follower_num,
                  hasfollow:
                    null === e || void 0 === e ? void 0 : e.uploader_hasfollow,
                  headurl:
                    null === e || void 0 === e ? void 0 : e.uploader_headurl,
                  nick: null === e || void 0 === e ? void 0 : e.uploader_nick,
                  uin: null === e || void 0 === e ? void 0 : e.uploader_uin,
                },
              };
            })),
          t
        );
      };
    },
    442: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return a;
      });
      var a = function (e) {
        var t = [];
        return (
          e.forEach(function (e) {
            var n;
            t.push({
              albumMID: e.albumMID,
              albumID: e.albumID,
              albumName: e.albumName,
              albumname_hilight: e.albumName_hilight,
              singerMID: e.singerMID,
              singerID: e.singerID,
              singerName: e.singerName,
              singername_hilight: e.singerName_hilight,
              publicTime: e.publicTime,
              albumPic: e.albumPic,
              docid: e.docid,
              singer_list: ((null === (n = e.singer_list) || void 0 === n
                ? void 0
                : n.length) &&
                e.singer_list) || [
                {
                  id: e.singerID,
                  mid: e.singerMID,
                  name: e.singerName,
                  name_hilight: e.singerName_hilight,
                },
              ],
            });
          }),
          t
        );
      };
      t.a = function (e) {
        var t = [];
        return (
          e.forEach(function (e) {
            t.push({
              area: 0,
              ex_status: 0,
              genre: 0,
              id: e.albumID || e.albumid,
              index: "0",
              language: 0,
              mid: e.albumMid || e.pmid || e.albummid,
              modify_time: "",
              movie: "",
              name: e.albumName || e.album_name,
              photo: null,
              release_time: e.publishDate,
              show_com_new: 0,
              singers: [
                {
                  id: e.singerid || 0,
                  mid: e.singermid || "",
                  name: e.singerName || e.singer,
                  title: "",
                  type: 0,
                  uin: 0,
                },
              ],
              status: 0,
              tag: "",
              tmetags: "",
              trans_name: "",
              type: 0,
            });
          }),
          t
        );
      };
    },
    443: function (e, t, n) {},
    444: function (e, t, n) {
      "use strict";
      var a = n(78),
        r = n.n(a),
        i = n(108),
        o = n.n(i),
        c = n(2),
        s = n.n(c),
        l = n(76),
        u = n.n(l),
        m = n(390),
        d = n(439),
        p = n(15),
        f = n(421),
        _ = n(450),
        h = n(426);
      function g(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? g(Object(n), !0).forEach(function (t) {
                s()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : g(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var y = function (e) {
          return Object(p.b)({
            format: "json",
            type: "GET",
            url: "".concat(
              location.protocol,
              "//c.y.qq.com/shop/fcgi-bin/fcg_album_get_acturl"
            ),
            data: { albumid: e },
          }).then(function (e) {
            try {
              return 1e3 === e.code ? void Object(h.a)() : e.data.actid;
            } catch (t) {}
          });
        },
        b = function (e, t) {
          var n = v({}, e);
          return (
            n.actid
              ? ((n.url = "".concat(
                  location.protocol,
                  "//c.y.qq.com/shop/fcgi-bin/fcg_bb_mdm_buy"
                )),
                (n.data = v(
                  {
                    actid: n.actid,
                    appid: 1450008610,
                    from: 2,
                    pf: "website",
                    num: 1,
                  },
                  t
                )))
              : n.albumid &&
                ((n.url = "".concat(
                  location.protocol,
                  "//c.y.qq.com/shop/fcgi-bin/fcg_mdm_buy"
                )),
                (n.data = v(
                  {
                    appid: 1450008567,
                    from: "pc",
                    pf: "website",
                    num: 1,
                    type: 2,
                    id: n.albumid,
                  },
                  t
                ))),
            Object(p.b)({
              format: "json",
              type: "GET",
              url: n.url,
              data: n.data,
            }).then(function (e) {
              try {
                return 1e3 === e.code || 1004 === e.code
                  ? void Object(h.a)()
                  : 0 !== e.code
                  ? void m.a.show({
                      type: "warning",
                      msg: "\u670d\u52a1\u5668\u7e41\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5",
                    })
                  : { appid: n.data.appid.toString(), url: e.data.url_params };
              } catch (t) {}
            })
          );
        };
      t.a = function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return Promise.all([Object(d.a)(), Object(_.a)()]).then(
          (function () {
            var t = o()(
              u.a.mark(function t(n) {
                var a, i, o, c, s, l, d, _;
                return u.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          ((a = r()(n, 2)),
                          a[0],
                          (i = a[1]),
                          (o = v({}, e)).albumid || o.actid)
                        ) {
                          t.next = 6;
                          break;
                        }
                        return (
                          m.a.show({
                            type: "warning",
                            msg: "\u53c2\u6570\u9519\u8bef",
                          }),
                          t.abrupt("return")
                        );
                      case 6:
                        if (!o.albumid || o.actid) {
                          t.next = 10;
                          break;
                        }
                        return (t.next = 9), y(o.albumid);
                      case 9:
                        o.actid = t.sent;
                      case 10:
                        if (!((c = p.i.getUin()) < 10001)) {
                          t.next = 14;
                          break;
                        }
                        return Object(h.a)(), t.abrupt("return");
                      case 14:
                        return (
                          (s = window.cashier || window.midas.minipay),
                          (l = Object(f.a)()),
                          (t.next = 18),
                          b(o, {
                            openid: p.d.getCookie("wxopenid") || c.toString(),
                            openkey: i,
                            appmode: 1,
                            fromtag: "yqqsmy",
                          })
                        );
                      case 18:
                        (d = t.sent),
                          (_ = {
                            sandbox: 1,
                            appid: d.appid,
                            session_id: l ? "hy_gameid" : "openid",
                            session_type: l ? "wc_actoken" : "kp_accesstoken",
                            wxappid: l ? "wx48db31d50e334801" : "",
                            openid: l
                              ? p.d.getCookie("wxopenid")
                              : p.d.getCookie("psrf_qqopenid"),
                            openkey: i,
                            usepay_wxappid: "1",
                            goodstokenurl: d.url,
                            desc_as_name: 1,
                            disableSend: !0,
                            pf: "website",
                          }),
                          p.d.getCookie("debug") || delete _.sandbox,
                          s.buyGoods(
                            {
                              hideHeader: !1,
                              title: e.title,
                              methods: {
                                onSuccess: function () {
                                  window.location.reload();
                                },
                              },
                            },
                            _
                          );
                      case 22:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })()
        );
      };
    },
    445: function (e, t, n) {},
    446: function (e, t, n) {},
    449: function (e, t, n) {
      "use strict";
      var a = n(15);
      t.a = function () {
        a.d.delCookie("uin", "qq.com"),
          a.d.delCookie("skey", "qq.com"),
          a.d.delCookie("p_uin", "y.qq.com"),
          a.d.delCookie("p_skey", "y.qq.com"),
          a.d.delCookie("luin", "qq.com"),
          a.d.delCookie("lskey", "qq.com"),
          a.d.delCookie("p_luin", "y.qq.com"),
          a.d.delCookie("p_lskey", "y.qq.com"),
          a.d.delCookie("qm_keyst", "qq.com"),
          a.d.delCookie("wxopenid", "qq.com"),
          a.d.delCookie("wxrefresh_token", "qq.com"),
          a.d.delCookie("wxunionid", "qq.com"),
          a.d.delCookie("login_type", "qq.com"),
          a.d.delCookie("wxuin", "qq.com"),
          a.d.delCookie("qm_keyst", "y.qq.com"),
          a.d.delCookie("wxopenid", "y.qq.com"),
          a.d.delCookie("wxrefresh_token", "y.qq.com"),
          a.d.delCookie("wxunionid", "y.qq.com"),
          a.d.delCookie("login_type", "y.qq.com"),
          a.d.delCookie("wxuin", "y.qq.com"),
          a.d.delCookie("lqm_keyst", "y.qq.com"),
          a.d.delCookie("lwxuin", "y.qq.com"),
          a.d.delCookie("psrf_qqaccess_token", "qq.com"),
          a.d.delCookie("psrf_qqopenid", "qq.com"),
          a.d.delCookie("psrf_qqrefresh_token", "qq.com"),
          a.d.delCookie("psrf_qqunionid", "qq.com");
      };
    },
    450: function (e, t, n) {
      "use strict";
      var a = n(15),
        r = n(421),
        i = n(428),
        o = n(472),
        c = n(426);
      t.a = function (e) {
        return new Promise(function (t) {
          return e || Object(r.a)()
            ? Object(a.b)({
                url: "//c.y.qq.com/base/fcgi-bin/login_get_musickey.fcg",
                dataType: "json",
                type: "GET",
                data: {
                  from: "1",
                  force_access: "1",
                  wxopenid: a.d.getCookie("wxopenid") || Object(i.a)(),
                  wxrefresh_token: a.d.getCookie("wxrefresh_token"),
                  musickey: Object(o.a)(),
                  musicuin: Object(i.a)(),
                  get_access_token: 1,
                  ct: 1001,
                  format: "json",
                  inCharset: "utf-8",
                  outCharset: "utf-8",
                },
              }).then(function (e) {
                if (0 === e.code) return t(e.wxaccess_token);
                1e3 === e.code && Object(c.a)();
              })
            : t(a.d.getCookie("psrf_qqaccess_token"));
        });
      };
    },
    451: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return g;
      }),
        n.d(t, "d", function () {
          return v;
        }),
        n.d(t, "b", function () {
          return y;
        }),
        n.d(t, "a", function () {
          return b;
        });
      var a = n(78),
        r = n.n(a),
        i = n(2),
        o = n.n(i),
        c = n(108),
        s = n.n(c),
        l = n(76),
        u = n.n(l),
        m = n(15),
        d = n(409),
        p = n(441),
        f = n(442);
      function _(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? _(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : _(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var g = (function () {
          var e = s()(
            u.a.mark(function e() {
              return u.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        Object(m.b)({
                          url: "".concat(
                            m.c.isBrowser ? "" : "http:",
                            "//c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg"
                          ),
                          format: "json",
                          data: { hostUin: 0 },
                        }).then(function (e) {
                          try {
                            return {
                              hotkey: e.data.hotkey.slice(0, 5),
                              specialkey: e.data.special_key,
                            };
                          } catch (t) {}
                        })
                      );
                    case 2:
                      return e.abrupt("return", e.sent);
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        v = (function () {
          var e = s()(
            u.a.mark(function e(t) {
              var n;
              return u.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = { album: [], mv: [], singer: [], song: [] }), t)
                      ) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt("return");
                    case 3:
                      return (
                        (e.next = 5),
                        Object(m.b)({
                          url: "".concat(
                            m.c.isBrowser ? "" : "http:",
                            "//c.y.qq.com/splcloud/fcgi-bin/smartbox_new.fcg"
                          ),
                          format: "json",
                          data: { hostUin: 0, is_xml: 0, key: t },
                        }).then(function (e) {
                          try {
                            return (
                              (n.album =
                                (e.data.album && e.data.album.itemlist) || []),
                              (n.mv = e.data.mv.itemlist || []),
                              (n.singer = e.data.singer.itemlist || []),
                              (n.song = e.data.song.itemlist || []),
                              n
                            );
                          } catch (t) {}
                        })
                      );
                    case 5:
                      return e.abrupt("return", e.sent);
                    case 6:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        y = function (e, t) {
          return Object(m.h)()
            .request([
              {
                module: "Concern.ConcernSystemServer",
                method: "cgi_concern_user_v2",
                param: {
                  opertype: 0 === t ? 0 : 1,
                  source: 0,
                  userinfo: { usertype: 0, userid: e },
                },
              },
            ])
            .then(function (e) {
              try {
                return e[0].code;
              } catch (t) {}
              return null;
            });
        },
        b = function (e) {
          return Object(m.h)()
            .request([
              {
                method: "DoSearchForQQMusicDesktop",
                module: "music.search.SearchCgiService",
                param: h({}, e),
              },
            ])
            .then(function (e) {
              var t = r()(e, 1)[0],
                n = {
                  data: {
                    song: [],
                    album: [],
                    mv: [],
                    playlist: [],
                    user: [],
                    lyric: [],
                  },
                  zhida: { zhida_album: void 0, zhida_singer: void 0 },
                  totalNum: 0,
                };
              try {
                if (0 === t.code) {
                  var a,
                    i,
                    o,
                    c,
                    s,
                    l,
                    u = (null === t || void 0 === t ? void 0 : t.data) || {},
                    m = u.meta,
                    _ = u.body;
                  (n.data.song = Object(d.a)(
                    (null === _ ||
                    void 0 === _ ||
                    null === (a = _.song) ||
                    void 0 === a
                      ? void 0
                      : a.list) || []
                  )),
                    (n.data.album = Object(f.b)(
                      (null === _ ||
                      void 0 === _ ||
                      null === (i = _.album) ||
                      void 0 === i
                        ? void 0
                        : i.list) || []
                    )),
                    (n.data.mv = Object(p.a)(
                      (null === _ ||
                      void 0 === _ ||
                      null === (o = _.mv) ||
                      void 0 === o
                        ? void 0
                        : o.list) || []
                    )),
                    (n.data.user =
                      (null === _ ||
                      void 0 === _ ||
                      null === (c = _.user) ||
                      void 0 === c
                        ? void 0
                        : c.list) || []),
                    (n.data.playlist = _.songlist.list || []),
                    (n.data.lyric =
                      (null === _ ||
                      void 0 === _ ||
                      null === (s = _.song) ||
                      void 0 === s
                        ? void 0
                        : s.list) || []),
                    (n.totalNum = m.sum);
                  var h =
                      (null === _ ||
                      void 0 === _ ||
                      null === (l = _.zhida) ||
                      void 0 === l
                        ? void 0
                        : l.list) || [],
                    g = r()(h, 1)[0];
                  if (1 === g.type) {
                    var v,
                      y = g.custom_info;
                    n.zhida.zhida_singer = {
                      albumNum: parseInt(y.album_num, 10),
                      mvNum: parseInt(y.mv_num, 10),
                      songNum: parseInt(y.song_num, 10),
                      singerID: g.id,
                      singerMID: y.mid,
                      singerName: g.title,
                      singerPic: g.pic,
                      trackList:
                        (null === g ||
                        void 0 === g ||
                        null === (v = g.track_list) ||
                        void 0 === v
                          ? void 0
                          : v.items) || [],
                    };
                  }
                  if (2 === g.type) {
                    var b = g.custom_info;
                    n.zhida.zhida_album = {
                      albumMID: b.mid,
                      albumID: g.id,
                      albumName: g.title,
                      singerMID: b.singer_mid,
                      singerID: b.singer_id,
                      singerName: g.desciption,
                      publicTime: g.publish_date,
                    };
                  }
                }
              } catch (E) {}
              return n;
            });
        };
    },
    452: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      var a = n(15),
        r = function (e) {
          var t,
            n,
            r,
            i,
            o,
            c =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            s = "";
          return (s =
            null === e || void 0 === e || null === (t = e.vs) || void 0 === t
              ? void 0
              : t[1])
            ? a.j.getSongSinglePic(s)
            : (s =
                null === e ||
                void 0 === e ||
                null === (n = e.album) ||
                void 0 === n
                  ? void 0
                  : n.pmid)
            ? a.j.getAlbumPic(s)
            : 1 ===
                (null === e ||
                void 0 === e ||
                null === (r = e.singer) ||
                void 0 === r
                  ? void 0
                  : r.length) &&
              (s =
                null === (i = e.singer) ||
                void 0 === i ||
                null === (o = i[0]) ||
                void 0 === o
                  ? void 0
                  : o.mid)
            ? a.j.getSingerPic(s, 300)
            : c || a.j.getDefaultImg("album");
        };
    },
    453: function (e, t) {},
    454: function (e, t, n) {
      "use strict";
      var a = n(3),
        r = n.n(a);
      t.a = function (e) {
        var t = e.playSong,
          n = e.addPlayList,
          a = e.dowLoadSong,
          i = e.shareSong,
          o = e.isVip,
          c = e.isPlay,
          s = e.hidePlay,
          l = e.hideAdd,
          u = e.hideDown,
          m = e.hideShare;
        return r.a.createElement(
          "div",
          { className: "mod_list_menu" },
          !s &&
            r.a.createElement(
              "a",
              {
                onClick: t,
                className: "list_menu__item list_menu__play",
                title: "\u64ad\u653e",
              },
              r.a.createElement("i", {
                className: c ? "list_menu__icon_pause" : "list_menu__icon_play",
              }),
              r.a.createElement(
                "span",
                { className: "icon_txt" },
                "\u64ad\u653e"
              )
            ),
          !l &&
            r.a.createElement(
              "a",
              {
                onClick: n,
                className: "list_menu__item list_menu__add",
                title: "\u6dfb\u52a0\u5230\u6b4c\u5355",
              },
              r.a.createElement("i", { className: "list_menu__icon_add" }),
              r.a.createElement(
                "span",
                { className: "icon_txt" },
                "\u6dfb\u52a0\u5230\u6b4c\u5355"
              )
            ),
          !u &&
            r.a.createElement(
              "a",
              {
                onClick: a,
                className: "list_menu__item list_menu__down",
                title: "VIP\u4e0b\u8f7d",
              },
              r.a.createElement("i", {
                className: o
                  ? "list_menu__icon_down_vip"
                  : "list_menu__icon_down",
              }),
              r.a.createElement(
                "span",
                { className: "icon_txt" },
                "VIP\u4e0b\u8f7d"
              )
            ),
          !m &&
            r.a.createElement(
              "a",
              {
                onClick: i,
                className: "list_menu__item list_menu__share",
                title: "\u5206\u4eab",
              },
              r.a.createElement("i", { className: "list_menu__icon_share" }),
              r.a.createElement(
                "span",
                { className: "icon_txt" },
                "\u5206\u4eab"
              )
            )
        );
      };
    },
    455: function (e, t) {},
    456: function (e, t, n) {
      "use strict";
      n.d(t, "d", function () {
        return d;
      }),
        n.d(t, "c", function () {
          return p;
        }),
        n.d(t, "a", function () {
          return f;
        }),
        n.d(t, "b", function () {
          return _;
        });
      var a = n(2),
        r = n.n(a),
        i = n(108),
        o = n.n(i),
        c = n(76),
        s = n.n(c),
        l = n(15);
      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var d = function () {
          return Object(l.h)()
            .request([
              {
                module: "musicToplist.ToplistInfoServer",
                method: "GetAll",
                param: {},
              },
            ])
            .then(function (e) {
              var t = [];
              try {
                t = e[0].data.group;
              } catch (n) {}
              return t;
            });
        },
        p = (function () {
          var e = o()(
            s.a.mark(function e(t) {
              var n, a, r, i, o, c;
              return s.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = t.id),
                        (a = t.begin),
                        (r = void 0 === a ? 0 : a),
                        (i = t.num),
                        (o = void 0 === i ? 20 : i),
                        (c = t.period),
                        e.abrupt(
                          "return",
                          Object(l.h)()
                            .request([
                              {
                                module: "musicToplist.ToplistInfoServer",
                                method: "GetDetail",
                                param: {
                                  topid: n,
                                  offset: r,
                                  num: o,
                                  period: c,
                                },
                              },
                            ])
                            .then(function (e) {
                              var t = { data: {}, songInfoList: [] };
                              try {
                                t = m({}, e[0].data);
                              } catch (n) {}
                              return t;
                            })
                        )
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        f = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return Object(l.h)()
            .request([
              {
                module: "video.VideoRankServer",
                method: "get_video_rank_list",
                param: {
                  rank_type: 0,
                  area_type: e,
                  required: [
                    "vid",
                    "name",
                    "pubdate",
                    "cover_pic",
                    "singers",
                    "trend",
                  ],
                },
              },
              {
                module: "video.VideoRankServer",
                method: "get_history_key_list",
                param: { periods: 6 },
              },
              {
                module: "MvService.MvInfoProServer",
                method: "GetToplistTag",
                param: {},
              },
            ])
            .then(function (t) {
              var n = {
                last_update: "",
                rank_list: [],
                week_list: [],
                mvTopNav: [],
                currentNav: e,
                mvIntroText:
                  "<p><b>\u4e0a\u699c\u89c4\u5219\uff1a</b>\u699c\u5355\u4e2d\u53c2\u4e0e\u6392\u540d\u7684MV\u8303\u56f4\u5fc5\u987b\u662f\u4e09\u4e2a\u6708\u5185\u5b98\u65b9\u53d1\u884c\u7684MV\uff0c\u7ffb\u5236\u7248\uff0c\u9884\u544a\u7248\uff0c\u82b1\u7d6e\u7248\uff0c\u5e7f\u544a\u5ba3\u4f20\u7247\u7b49\u4e0d\u53c2\u4e0e\u6392\u540d\u3002<br><b>\u66f4\u65b0\u65f6\u95f4\uff1a</b>\u699c\u5355\u6570\u636e\u5341\u5206\u949f\u66f4\u65b0\u4e00\u6b21<br><b>\u7edf\u8ba1\u5468\u671f\uff1a</b>\u4e00\u5468\uff08\u7edf\u8ba1\u65f6\u95f4\u5468\u4e00\u96f6\u70b9\u81f3\u5468\u65e524:00\u70b9\uff09<br><b>\u7edf\u8ba1\u7b97\u6cd5\uff1a</b>\u6839\u636eMV\u5728\u4e00\u5468\u5185\u7684\u6709\u6548\u64ad\u653e\u65f6\u957f\uff0c\u7531\u9ad8\u5230\u4f4e\u53d6\u524d20\u540d\u3002</p>",
              };
              try {
                (n.last_update = t[0].data.last_update),
                  (n.rank_list = t[0].data.rank_list);
              } catch (a) {}
              try {
                n.week_list = t[1].data.week_list;
              } catch (a) {}
              try {
                (n.mvTopNav = t[2].data.list), (n.currentNav = e);
              } catch (a) {}
              return n;
            });
        },
        _ = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "newarea",
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n = arguments.length > 2 ? arguments[2] : void 0,
            a = [];
          if ("history" === e && n)
            a.push({
              method: "get_history_rank_list",
              param: {
                rank_type: 0,
                area_type: t,
                period: n,
                required: [
                  "vid",
                  "name",
                  "pubdate",
                  "cover_pic",
                  "singers",
                  "trend",
                ],
              },
              module: "video.VideoRankServer",
            });
          else {
            if ("newarea" !== e) return;
            a.push({
              method: "get_video_rank_list",
              param: {
                rank_type: 0,
                area_type: t,
                required: [
                  "vid",
                  "name",
                  "pubdate",
                  "cover_pic",
                  "singers",
                  "trend",
                ],
              },
              module: "video.VideoRankServer",
            });
          }
          return Object(l.h)()
            .request(a)
            .then(function (t) {
              var n = {
                last_update: "",
                rank_list: [],
                mvTopNav: [],
                currentNav: 0,
              };
              if ("newarea" === e)
                try {
                  (n.last_update = t[0].data.last_update),
                    (n.rank_list = t[0].data.rank_list);
                } catch (a) {}
              if ("history" === e)
                try {
                  n.rank_list = t[0].data.history_list;
                } catch (a) {}
              return n;
            });
        };
    },
    461: function (e, t, n) {
      "use strict";
      var a =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        r = {
          encode: function (e) {
            for (
              var t,
                n,
                r,
                i,
                o,
                c,
                s,
                l = "",
                u = 0,
                m = (function (e) {
                  for (
                    var t = e.replace(/\r\n/g, "\n"), n = "", a = 0;
                    a < t.length;
                    a++
                  ) {
                    var r = t.charCodeAt(a);
                    r < 128
                      ? (n += String.fromCharCode(r))
                      : r > 127 && r < 2048
                      ? ((n += String.fromCharCode((r >> 6) | 192)),
                        (n += String.fromCharCode((63 & r) | 128)))
                      : ((n += String.fromCharCode((r >> 12) | 224)),
                        (n += String.fromCharCode(((r >> 6) & 63) | 128)),
                        (n += String.fromCharCode((63 & r) | 128)));
                  }
                  return n;
                })(e);
              u < m.length;

            )
              (i = (t = m.charCodeAt(u++)) >> 2),
                (o = ((3 & t) << 4) | ((n = m.charCodeAt(u++)) >> 4)),
                (c = ((15 & n) << 2) | ((r = m.charCodeAt(u++)) >> 6)),
                (s = 63 & r),
                isNaN(n) ? ((s = 64), (c = 64)) : isNaN(r) && (s = 64),
                (l = l + a.charAt(i) + a.charAt(o) + a.charAt(c) + a.charAt(s));
            return l;
          },
          decode: function (e) {
            for (
              var t,
                n,
                r,
                i,
                o,
                c,
                s = "",
                l = 0,
                u = e.replace(/[^A-Za-z0-9+/=]/g, "");
              l < e.length;

            )
              (t =
                (a.indexOf(u.charAt(l++)) << 2) |
                ((i = a.indexOf(u.charAt(l++))) >> 4)),
                (n = ((15 & i) << 4) | ((o = a.indexOf(u.charAt(l++))) >> 2)),
                (r = ((3 & o) << 6) | (c = a.indexOf(u.charAt(l++)))),
                (s += String.fromCharCode(t)),
                64 !== o && (s += String.fromCharCode(n)),
                64 !== c && (s += String.fromCharCode(r));
            return (s = (function (e) {
              for (var t = "", n = 0, a = 0, r = 0, i = 0; n < e.length; )
                (a = e.charCodeAt(n)) < 128
                  ? ((t += String.fromCharCode(a)), n++)
                  : a > 191 && a < 224
                  ? ((r = e.charCodeAt(n + 1)),
                    (t += String.fromCharCode(((31 & a) << 6) | (63 & r))),
                    (n += 2))
                  : ((r = e.charCodeAt(n + 1)),
                    (i = e.charCodeAt(n + 2)),
                    (t += String.fromCharCode(
                      ((15 & a) << 12) | ((63 & r) << 6) | (63 & i)
                    )),
                    (n += 3));
              return t;
            })(s));
          },
          SongDetailVipIcon:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAUCAMAAAA9ZgQ5AAAAclBMVEUww30xxH4yw30ww3z////S8uJez5k/x4X6/vw2xIA5xYH3/PqP3rhaz5bx+/bk9+7c9OnY8+a16dBWzZPs+vPe9eq/7Nam5caC2q9n0p9GyYrJ793E7dmt58uI3LOE27GD2rB72Kt316ht1KJUzZJQy5Ar9ZQbAAAAAnRSTlPjSQzAlCMAAACpSURBVCjPtdKHCoMwFIXh9Hiqce/Zvd7/FRsDWiOFCKU/JBD4IHC5YiccW8oI2BPC2aCc35Q/tlKXyoXunJTY00XAsbozVMS9fg4hY608UkpJXpcqqHiH6sQGk1K/RkyXCh1TH3hK+VoodUtDIWMEHNliVmUZF8xN9WDi9erMSid7U+HANmeEj8qyvIixUjHJNJhUwPD7VAvyBqsa6gZ2te5fatsWbtvoN6DfC3e9yY0HAAAAAElFTkSuQmCC",
        };
      t.a = r;
    },
    467: function (e, t, n) {
      "use strict";
      var a = n(108),
        r = n.n(a),
        i = n(361),
        o = n.n(i),
        c = n(362),
        s = n.n(c),
        l = n(363),
        u = n.n(l),
        m = n(364),
        d = n.n(m),
        p = n(365),
        f = n.n(p),
        _ = n(76),
        h = n.n(_),
        g = n(3),
        v = n.n(g),
        y = n(77),
        b = n(10),
        E = n(15),
        w = n(407),
        N = n(399),
        k = n(391),
        x = n(393),
        C = n(16),
        O = n(390),
        S = n(403),
        j = n(424),
        I = n(427),
        P = n(410);
      n(445);
      function L(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = f()(e);
          if (t) {
            var r = f()(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return d()(this, n);
        };
      }
      var q = { position: "absolute", top: "0%", left: "102%" },
        R = (function (e) {
          u()(n, e);
          var t = L(n);
          function n() {
            var e, a;
            o()(this, n);
            for (var r = arguments.length, i = new Array(r), c = 0; c < r; c++)
              i[c] = arguments[c];
            return d()(
              a,
              ((e = a = t.call.apply(t, [this].concat(i))),
              (a.state = { showAddPlayList: !1, showShareList: !1 }),
              (a.downLoad = function () {
                var e = a.props.songList;
                Object(P.d)(e);
              }),
              (a.addPlayList = function () {
                var e = a.hideData();
                (e.showAddPlayList = !0), a.setState(e);
              }),
              (a.sharePlayList = function () {
                var e = a.hideData();
                (e.showShareList = !0), a.setState(e);
              }),
              e)
            );
          }
          return (
            s()(n, [
              {
                key: "hideData",
                value: function () {
                  return { showAddPlayList: !1, showShareList: !1 };
                },
              },
              {
                key: "shareData",
                value: function () {
                  var e,
                    t,
                    n = this.props,
                    a = n.data,
                    r = n.type,
                    i = n.songList,
                    o = a.host_nick,
                    c = null === i || void 0 === i ? void 0 : i[0];
                  return {
                    album: {
                      pageType: "album",
                      type: "\u6b4c\u66f2",
                      singerName:
                        (null === a ||
                        void 0 === a ||
                        null === (e = a.singer) ||
                        void 0 === e ||
                        null === (t = e[0]) ||
                        void 0 === t
                          ? void 0
                          : t.name) || "",
                      shareUrl: Object(C.c)(C.a.ALBUM_DETAIL, {
                        albummid: a.albumMid && a.albumMid.toString(),
                      }),
                      title: a.albumName,
                      picUrl: "https:".concat(E.j.getAlbumPic(a.albumMid)),
                      tips: {
                        copy: function () {
                          O.a.show({
                            type: "success",
                            msg: "\u590d\u5236\u6210\u529f",
                          });
                        },
                      },
                    },
                    playList: {
                      pageType: "playlist",
                      type: "\u6b4c\u5355",
                      singerName: o,
                      shareUrl: Object(C.c)(C.a.PLAYLIST, {
                        id: a.id && a.id.toString(),
                        hosteuin: a.encrypt_ai_uin || "",
                      }),
                      title: a.title,
                      picUrl: a.picurl,
                      tips: {
                        copy: function () {
                          O.a.show({
                            type: "success",
                            msg: "\u590d\u5236\u6210\u529f",
                          });
                        },
                      },
                    },
                    song: {
                      pageType: "song",
                      type: "\u6b4c\u66f2",
                      singerName: o,
                      shareUrl: Object(C.c)(C.a.SONGE_DETAIL, {
                        songid: i[0] && i[0].id.toString(),
                        songtype: i[0] && i[0].type && i[0].type.toString(),
                      }),
                      title: c.title,
                      picUrl: "https:".concat(
                        E.j.getAlbumPic(c.album.pmid || c.album.mid)
                      ),
                      tips: {
                        copy: function () {
                          O.a.show({
                            type: "success",
                            msg: "\u590d\u5236\u6210\u529f",
                          });
                        },
                      },
                    },
                  }[r];
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.songList,
                    n = e.showBatch,
                    a = e.noBatch,
                    r = e.onReportClick,
                    i = e.menuItemConfig,
                    o = this.state,
                    c = o.showAddPlayList,
                    s = o.showShareList;
                  return v.a.createElement(
                    "div",
                    { className: "mod_operate_menu js_menu_box" },
                    v.a.createElement(
                      "div",
                      { className: "operate_menu__cont" },
                      v.a.createElement(
                        "ul",
                        {
                          role: "menu",
                          className: "operate_menu__list",
                          style: { overflowY: "visible" },
                        },
                        !(null !== i && void 0 !== i && i.hideAdd) &&
                          v.a.createElement(
                            "li",
                            {
                              onClick: this.addPlayList,
                              className: "operate_menu__item",
                            },
                            v.a.createElement(
                              "a",
                              { className: "operate_menu__link" },
                              v.a.createElement("i", {
                                className: "operate_menu__icon_add sprite",
                              }),
                              "\u6dfb\u52a0\u5230",
                              v.a.createElement("i", {
                                className: "operate_menu__icon_arrow sprite",
                              })
                            ),
                            v.a.createElement(
                              "div",
                              { style: q },
                              c && v.a.createElement(j.a, { songList: t })
                            )
                          ),
                        !(null !== i && void 0 !== i && i.hideShare) &&
                          v.a.createElement(
                            "li",
                            {
                              onClick: this.sharePlayList,
                              className: "operate_menu__item",
                            },
                            v.a.createElement(
                              "a",
                              { className: "operate_menu__link" },
                              v.a.createElement("i", {
                                className: "operate_menu__icon_share sprite",
                              }),
                              "\u5206\u4eab",
                              v.a.createElement("i", {
                                className: "operate_menu__icon_arrow sprite",
                              })
                            ),
                            v.a.createElement(
                              "div",
                              { style: q },
                              s && v.a.createElement(I.a, this.shareData())
                            )
                          ),
                        !(null !== i && void 0 !== i && i.hideDown) &&
                          v.a.createElement(
                            "li",
                            {
                              onClick: this.downLoad,
                              className: "operate_menu__item",
                            },
                            v.a.createElement(
                              "a",
                              { className: "operate_menu__link" },
                              v.a.createElement("i", {
                                className: "operate_menu__icon_down sprite",
                              }),
                              "\u4e0b\u8f7d"
                            )
                          ),
                        !a &&
                          v.a.createElement(
                            "li",
                            { onClick: n, className: "operate_menu__item" },
                            v.a.createElement(
                              "a",
                              { className: "operate_menu__link" },
                              v.a.createElement("i", {
                                className: "operate_menu__icon_batch sprite",
                              }),
                              "\u6279\u91cf\u64cd\u4f5c"
                            )
                          ),
                        !(null !== i && void 0 !== i && i.hideInform) &&
                          v.a.createElement(
                            "li",
                            { className: "operate_menu__item", onClick: r },
                            v.a.createElement(
                              "a",
                              { className: "operate_menu__link" },
                              v.a.createElement("i", {
                                className: "operate_menu__icon_inform sprite",
                              }),
                              "\u4e3e\u62a5"
                            )
                          ),
                        (null === i || void 0 === i ? void 0 : i.showQzone) &&
                          v.a.createElement(
                            "li",
                            { className: "operate_menu__item", onClick: r },
                            v.a.createElement(
                              "a",
                              {
                                href: "http://user.qzone.qq.com/".concat(
                                  E.i.getUin(),
                                  "/305/playlist"
                                ),
                                rel: "noopener noreferrer",
                                target: "_blank",
                                className: "operate_menu__link",
                              },
                              v.a.createElement("i", {
                                className: "operate_menu__icon_qzone sprite",
                              }),
                              "\u7ba1\u7406\u80cc\u666f\u97f3\u4e50"
                            )
                          )
                      )
                    )
                  );
                },
              },
            ]),
            n
          );
        })(g.Component),
        A = n(435),
        T = n(398),
        M = function (e) {
          var t = e.data,
            n = t.albumMid,
            a = t.albumName,
            r = t.info;
          t.from;
          return v.a.createElement(
            "ul",
            { className: "data__info" },
            a &&
              v.a.createElement(
                "li",
                { className: "data_info__item_song" },
                "\u4e13\u8f91\uff1a",
                v.a.createElement(
                  y.b,
                  { to: Object(C.d)(C.a.ALBUM_DETAIL, n), title: a },
                  a
                )
              ),
            r.lan &&
              v.a.createElement(
                "li",
                { className: "data_info__item_song" },
                "\u8bed\u79cd\uff1a",
                r.lan.content.map(function (e) {
                  return "".concat(e.value, " ");
                })
              ),
            r.genre &&
              v.a.createElement(
                "li",
                { className: "data_info__item_song" },
                "\u6d41\u6d3e\uff1a",
                r.genre.content.map(function (e) {
                  return "".concat(e.value, " ");
                })
              ),
            r.company &&
              v.a.createElement(
                "li",
                { className: "data_info__item_song" },
                "\u5531\u7247\u516c\u53f8\uff1a",
                r.company.content.map(function (e) {
                  return "".concat(e.value, " ");
                })
              ),
            r.pub_time &&
              v.a.createElement(
                "li",
                { className: "data_info__item_song" },
                "\u53d1\u884c\u65f6\u95f4\uff1a",
                r.pub_time.content.map(function (e) {
                  return "".concat(e.value, " ");
                })
              )
          );
        },
        F = Object(g.memo)(M),
        D = n(415),
        U = function (e) {
          var t = e.data,
            n = e.config,
            a = e.albuminfo,
            r = "";
          return (
            0 === (null === a || void 0 === a ? void 0 : a.actionid)
              ? (r = "\u5df2\u552e ".concat(a.soldTotal, " \u9996"))
              : null !== a &&
                void 0 !== a &&
                a.soldTotal &&
                (parseInt("".concat(a.soldTotal), 10) > 0 &&
                  (r = "\u5df2\u552e ".concat(a.soldTotal, " \u5f20")),
                (null === a || void 0 === a ? void 0 : a.beginTime) >
                  a.nowTime &&
                  (r = ""
                    .concat(
                      r,
                      "\uff08\u5f53\u524d\u4e13\u8f91\u9884\u552e\u4e2d\uff0c"
                    )
                    .concat(
                      Object(D.c)(
                        new Date(1e3 * a.beginTime),
                        "y\u5e74m\u6708d\u65e5"
                      ),
                      "\u6b63\u5f0f\u4e0a\u7ebf\uff09"
                    ))),
            v.a.createElement(
              v.a.Fragment,
              null,
              v.a.createElement(
                "ul",
                { className: "data__info" },
                t.genre &&
                  v.a.createElement(
                    "li",
                    { className: "data_info__item_song" },
                    "\u6d41\u6d3e\uff1a",
                    t.genre
                  ),
                t.language &&
                  v.a.createElement(
                    "li",
                    { className: "data_info__item_song" },
                    "\u8bed\u79cd\uff1a",
                    t.language
                  ),
                t.ctime &&
                  v.a.createElement(
                    "li",
                    { className: "data_info__item_song" },
                    "\u53d1\u884c\u65f6\u95f4\uff1a",
                    t.ctime
                  ),
                t.company &&
                  v.a.createElement(
                    "li",
                    { className: "data_info__item_song" },
                    "\u5531\u7247\u516c\u53f8\uff1a",
                    t.company
                  ),
                !(null !== n && void 0 !== n && n.hideType) &&
                  t.albumType &&
                  v.a.createElement(
                    "li",
                    { className: "data_info__item_song" },
                    "\u7c7b\u578b\uff1a",
                    t.albumType
                  )
              ),
              (null === n || void 0 === n ? void 0 : n.tips) &&
                v.a.createElement("div", { className: "data__tips" }, r)
            )
          );
        },
        B = Object(g.memo)(U),
        Q = n(406),
        z = function (e) {
          var t = e.data;
          return v.a.createElement(
            "ul",
            { className: "data__info" },
            v.a.createElement(
              "li",
              { className: "data_info__item" },
              v.a.createElement(
                "div",
                { className: "data_tag_box" },
                "\u6807\u7b7e\uff1a",
                v.a.createElement(
                  "span",
                  null,
                  t.tag &&
                    t.tag.map(function (e) {
                      return v.a.createElement(
                        y.b,
                        {
                          to: E.j.addParam(
                            { t1: e.id, t2: 5 },
                            Object(C.d)(C.a.CATEGORY)
                          ),
                          key: e.id,
                          className: "data_info__tags",
                        },
                        e.name
                      );
                    })
                )
              )
            ),
            !!t.listennum &&
              v.a.createElement(
                "li",
                { className: "data_info__item" },
                "\u64ad\u653e\u91cf\uff1a",
                Object(Q.b)(t.listennum)
              ),
            !!t.ordernum &&
              v.a.createElement(
                "li",
                { className: "data_info__item" },
                "\u6536\u85cf\u91cf\uff1a",
                Object(Q.b)(t.ordernum)
              )
          );
        },
        H = Object(g.memo)(z),
        V = n(483),
        G = n(405),
        W = n(400),
        K = n(461);
      n(533);
      function Y(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = f()(e);
          if (t) {
            var r = f()(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return d()(this, n);
        };
      }
      var X = (function (e) {
        u()(n, e);
        var t = Y(n);
        function n() {
          var e, a;
          o()(this, n);
          for (var i = arguments.length, c = new Array(i), s = 0; s < i; s++)
            c[s] = arguments[s];
          return d()(
            a,
            ((e = a = t.call.apply(t, [this].concat(c))),
            (a.isLoding = !1),
            (a.state = { isCollect: !1, commentCount: null }),
            (a.handleReportOpen = function () {
              var e = a.props,
                t = e.type,
                n = e.data,
                r = A.a.PLAYLIST,
                i = n.id;
              "song" === t && (r = A.a.SONG),
                "album" === t && (r = A.a.ALBUM),
                A.b.show({ id: i, type: r });
            }),
            (a.handleMoreMenu = function (e) {
              var t = a.props,
                n = t.songList,
                r = t.data,
                i = t.setConfig,
                o = t.type,
                c = t.menuItemConfig,
                s = {
                  top: (e.pageY || window.scrollY + e.clientY) + 35,
                  left: (e.pageX || window.scrollX + e.clientX) + 20,
                  element: v.a.createElement(R, {
                    menuItemConfig: c,
                    songList: n,
                    data: r,
                    type: o,
                    noBatch: "song" === o,
                    showBatch: i,
                    onReportClick: a.handleReportOpen,
                  }),
                  className: "mod_operate_menu",
                };
              Object(S.b)(s);
            }),
            (a.handleCollect = r()(
              h.a.mark(function e() {
                var t, n, r, i, o, c, s;
                return h.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (k.a.isLogin()) {
                            e.next = 3;
                            break;
                          }
                          return k.a.openLogin(), e.abrupt("return");
                        case 3:
                          if (!a.isLoding) {
                            e.next = 5;
                            break;
                          }
                          return e.abrupt("return");
                        case 5:
                          if (
                            ((a.isLoding = !0),
                            (t = a.props),
                            (n = t.type),
                            (r = t.songList),
                            (i = a.state.isCollect),
                            (o = !1),
                            (e.prev = 9),
                            "song" !== n)
                          ) {
                            e.next = 14;
                            break;
                          }
                          return (e.next = 13), Object(N.a)(201, r, i);
                        case 13:
                          o = e.sent;
                        case 14:
                          if ("playList" !== n) {
                            e.next = 19;
                            break;
                          }
                          return (
                            (c = a.props.match.params.id),
                            (e.next = 18),
                            Object(w.k)(parseInt(c, 10), i)
                          );
                        case 18:
                          o = e.sent;
                        case 19:
                          if ("album" !== n) {
                            e.next = 24;
                            break;
                          }
                          return (
                            (s = a.props.match.params.id),
                            (e.next = 23),
                            Object(N.m)(s, i)
                          );
                        case 23:
                          o = e.sent;
                        case 24:
                          e.next = 28;
                          break;
                        case 26:
                          (e.prev = 26), (e.t0 = e.catch(9));
                        case 28:
                          (a.isLoding = !1),
                            o
                              ? (a.setState({ isCollect: !i }),
                                O.a.show(
                                  i
                                    ? "\u53d6\u6d88\u6536\u85cf\u6210\u529f!"
                                    : "\u6536\u85cf\u6210\u529f!"
                                ))
                              : O.a.show({
                                  type: "warning",
                                  msg: "\u6536\u85cf\u5931\u8d25",
                                });
                        case 30:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[9, 26]]
                );
              })
            )),
            (a.play = function () {
              var e = a.props,
                t = e.songList,
                n = e.type;
              Object(x.c)({ songList: t, isAdd: "song" === n, isPlay: !0 });
            }),
            (a.handleScrollToComment = function () {
              document
                .getElementById("comment_box")
                .scrollIntoView({ behavior: "smooth" });
            }),
            (a.handleLocalUpload = r()(
              h.a.mark(function e() {
                var t, n;
                return h.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), k.a.getVipInfo(!0);
                      case 2:
                        (t = e.sent),
                          t.vip.iVipFlag
                            ? ((n = window.open(
                                "http://rc.qzone.qq.com/305/music_coll?pa=upload"
                              )) && (n.focus(), (n.opener = null)),
                              E.g.pgvClickStat("ryqq.mymusic.upload.vip"))
                            : (Object(G.b)({
                                width: 520,
                                title: "\u6e29\u99a8\u63d0\u9192",
                                subtit:
                                  "\u672c\u5730\u97f3\u4e50\u4e0a\u4f20\u4e3a\u7eff\u94bb\u8d35\u65cf\u72ec\u4eab\u7279\u6743\uff01",
                                msg: "\u60a8\u8fd8\u4e0d\u662f\u7eff\u94bb\u8d35\u65cf\uff0c\u65e0\u6cd5\u4eab\u7528\u672c\u7279\u6743\u3002",
                                type: "warning",
                                btn: [
                                  {
                                    fn: function () {
                                      k.a.minipay.buyMonth(),
                                        E.g.pgvClickStat(
                                          "ryqq.mymusic.upload.notvip_open"
                                        );
                                    },
                                    green: !0,
                                    text: "\u9a6c\u4e0a\u5f00\u901a\u7eff\u94bb",
                                  },
                                ],
                              }),
                              E.g.pgvClickStat("ryqq.mymusic.upload.notvip"));
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            e)
          );
        }
        return (
          s()(n, [
            {
              key: "componentDidMount",
              value: (function () {
                var e = r()(
                  h.a.mark(function e() {
                    var t,
                      n,
                      a,
                      r,
                      i,
                      o,
                      c,
                      s,
                      l = this;
                    return h.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((t = this.props.match.params.id),
                                (n = this.props),
                                (a = n.type),
                                (r = n.data),
                                (i = this.props.songList),
                                Object(N.e)(
                                  [{ id: r.id, type: r.type }],
                                  a
                                ).then(function (e) {
                                  l.setState({ commentCount: e[r.id] || null });
                                }),
                                k.a.isLogin())
                              ) {
                                e.next = 6;
                                break;
                              }
                              return e.abrupt("return");
                            case 6:
                              if ("song" !== a) {
                                e.next = 11;
                                break;
                              }
                              return (e.next = 9), Object(N.k)(i);
                            case 9:
                              (o = e.sent) &&
                                this.setState({ isCollect: o[0].isFan });
                            case 11:
                              if ("playList" !== a) {
                                e.next = 16;
                                break;
                              }
                              return (
                                (e.next = 14), Object(w.d)(parseInt(t, 10))
                              );
                            case 14:
                              (c = e.sent), this.setState({ isCollect: c });
                            case 16:
                              if ("album" !== a) {
                                e.next = 21;
                                break;
                              }
                              return (e.next = 19), Object(N.c)([t]);
                            case 19:
                              (s = e.sent), this.setState({ isCollect: s[t] });
                            case 21:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.data,
                  n = e.type,
                  a = e.encryptLogin,
                  r = e.infoConfig,
                  i = e.customAction,
                  o = e.highlightConfig,
                  c = e.albuminfo,
                  s = e.buttonConfig,
                  l = e.songList,
                  u = this.state,
                  m = u.isCollect,
                  d = u.commentCount,
                  p = ((null === l || void 0 === l ? void 0 : l[0]) || {})
                    .isVip;
                return v.a.createElement(
                  "div",
                  { className: "mod_data" },
                  v.a.createElement(
                    "span",
                    { className: "data__cover", id: "logo" },
                    v.a.createElement(W.a, {
                      imgurl: E.j.fixUrl(t.picurl),
                      name: t.title,
                      type: "album",
                      className: "data__photo",
                    }),
                    "album" === n &&
                      v.a.createElement("i", { className: "data__cover_mask" })
                  ),
                  v.a.createElement(
                    "div",
                    { className: "data__cont" },
                    v.a.createElement(
                      "div",
                      { className: "data__name" },
                      v.a.createElement(
                        "h1",
                        { className: "data__name_txt", title: t.title },
                        t.title
                      ),
                      "song" === n &&
                        p &&
                        v.a.createElement("img", {
                          className: "data__name_icon_vip",
                          src: K.a.SongDetailVipIcon,
                        })
                    ),
                    v.a.createElement(
                      "div",
                      { className: "data__singer" },
                      v.a.createElement("i", {
                        className: "icon_singer sprite",
                      }),
                      "playList" === n &&
                        v.a.createElement(
                          y.b,
                          {
                            to: ""
                              .concat(Object(C.d)(C.a.PROFILE), "?uin=")
                              .concat(t.creator.encrypt_uin || ""),
                            title: t.creator.nick,
                            className: "data__singer_txt",
                          },
                          t.creator.nick
                        ),
                      "song" === n &&
                        v.a.createElement(T.a, {
                          className: "data__singer_txt",
                          singers: t.singer,
                        }),
                      "album" === n &&
                        v.a.createElement(T.a, {
                          className: "data__singer_txt",
                          singers: t.singer,
                        })
                    ),
                    "song" === n && v.a.createElement(F, { data: t }),
                    "playList" === n && v.a.createElement(H, { data: t }),
                    "album" === n &&
                      v.a.createElement(B, {
                        albuminfo: c,
                        data: t,
                        config: r,
                      }),
                    v.a.createElement(
                      "div",
                      { className: "data__actions", role: "toolbar" },
                      i,
                      v.a.createElement(V.a, {
                        key: "play",
                        type: "play",
                        clickFun: this.play,
                        highlight: !(null !== o && void 0 !== o && o.playNot),
                        text:
                          "song" === n
                            ? "\u64ad\u653e"
                            : "\u64ad\u653e\u5168\u90e8",
                      }),
                      (null === s || void 0 === s ? void 0 : s.showUpload) &&
                        v.a.createElement(V.a, {
                          key: "upload",
                          type: "upload",
                          clickFun: this.handleLocalUpload,
                          text: "\u672c\u5730\u4e0a\u4f20",
                        }),
                      !(null !== s && void 0 !== s && s.hideCollect) &&
                        v.a.createElement(V.a, {
                          key: "like",
                          type: "like",
                          clickFun: this.handleCollect,
                          text: m ? "\u5df2\u6536\u85cf" : "\u6536\u85cf",
                          iconClassName: m ? "mod_btn__icon_like--like" : "",
                        }),
                      !(null !== s && void 0 !== s && s.hideComment) &&
                        v.a.createElement(V.a, {
                          key: "comment",
                          type: "comment",
                          clickFun: this.handleScrollToComment,
                          text: "\u8bc4\u8bba".concat(
                            d ? "(".concat(d, ")") : ""
                          ),
                        }),
                      (null === t || void 0 === t ? void 0 : t.encrypt_uin) ===
                        a &&
                        (null === t || void 0 === t ? void 0 : t.dirid) > 0 &&
                        201 !==
                          (null === t || void 0 === t ? void 0 : t.dirid) &&
                        v.a.createElement(
                          y.b,
                          {
                            to: Object(C.d)(C.a.PLAYLIST_EDIT, t.dirid),
                            className: "mod_btn js_menu_edit",
                          },
                          v.a.createElement("i", {
                            className: "mod_btn__icon_edit",
                          }),
                          "\u7f16\u8f91\u6b4c\u5355"
                        ),
                      v.a.createElement(V.a, {
                        key: "menu",
                        type: "menu",
                        clickFun: this.handleMoreMenu,
                        text: "\u66f4\u591a",
                      })
                    )
                  )
                );
              },
            },
          ]),
          n
        );
      })(g.PureComponent);
      t.a = Object(b.withRouter)(X);
    },
    468: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "buyMonth", function () {
          return a.a;
        }),
        n.d(t, "buyYB", function () {
          return d;
        }),
        n.d(t, "buyFP", function () {
          return f;
        }),
        n.d(t, "openPayMusic", function () {
          return b;
        });
      var a = n(438),
        r = n(78),
        i = n.n(r),
        o = n(439),
        c = n(421),
        s = n(450),
        l = n(15),
        u = n(426),
        m = n(437),
        d = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Object(m.a)()
            ? Promise.all([Object(o.a)(), Object(s.a)()]).then(function (t) {
                var n = i()(t, 2),
                  a = (n[0], n[1]),
                  r = window.cashier || window.midas.minipay,
                  o = Object(c.a)(),
                  s = e.aid,
                  u = e.pf,
                  m =
                    void 0 === u
                      ? o
                        ? "wechat_pc-musicweb.yb-html5"
                        : "qq_pc-musicweb.yb-html5"
                      : u,
                  d = {
                    sandbox: 1,
                    appid: 1450007342,
                    usepay_wxappid: "1",
                    buy_quantity: 1e3,
                    session_id: o ? "hy_gameid" : "openid",
                    session_type: o ? "wc_actoken" : "kp_accesstoken",
                    openid: o
                      ? l.d.getCookie("wxopenid")
                      : l.d.getCookie("psrf_qqopenid"),
                    openkey: a,
                    aid: s,
                    pf: m,
                    goodstokenurl: "",
                    zoneid: 1,
                    disableSend: !0,
                    showCount: !0,
                    showRecommend: !0,
                    recommendList: "60,120,180,680,1080",
                    price_columns: "3c",
                    maxCount: 2e5,
                  };
                l.d.getCookie("debug") || delete d.sandbox,
                  r.buyGame(
                    {
                      hideHeader: !1,
                      title: "\u8d2d\u4e70\u4e50\u5e01",
                      methods: {
                        onSuccess: function () {
                          window.location.reload();
                        },
                      },
                    },
                    d
                  );
              })
            : (Object(u.a)(),
              Promise.reject(new Error("\u8bf7\u5148\u767b\u5f55")));
        },
        p = n(428),
        f = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Object(m.a)()
            ? Object(o.a)().then(function () {
                var t = window.cashier || window.midas.minipay,
                  n = Object(c.a)(),
                  a = e.aid,
                  r = e.pf,
                  i =
                    void 0 === r
                      ? n
                        ? "wechat_pc-2001-html5-2011-pcpay"
                        : "qq_pc-2001-html5-2011-pcpay"
                      : r,
                  o = {
                    sandbox: 1,
                    appid: 1450023212,
                    session_id: "hy_gameid",
                    session_type: "st_dummy",
                    openid: Object(p.a)(),
                    openkey: "nokey",
                    aid: a,
                    pf: i,
                    buy_quantity: 1e3,
                    goodstokenurl: "",
                    zoneid: 1,
                    disableSend: !0,
                    showCount: !0,
                    showRecommend: !0,
                    recommendList: "60,100,500,1000,10000",
                    price_columns: "3c",
                    maxCount: 1e6,
                  };
                l.d.getCookie("debug") || delete o.sandbox,
                  t.buyGame(
                    {
                      hideHeader: !1,
                      title: "\u5145\u503c\u996d\u7968",
                      methods: {
                        onSuccess: function () {
                          window.location.reload();
                        },
                      },
                    },
                    o
                  );
              })
            : (Object(u.a)(),
              Promise.reject(new Error("\u8bf7\u5148\u767b\u5f55")));
        },
        _ = n(2),
        h = n.n(_),
        g = n(440);
      function v(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? v(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : v(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var b = function (e, t) {
        var n = g.a.YUAN_8;
        return (
          e && e.vip && 1 === e.vip.itwelve && (n = g.a.YUAN_12),
          Object(a.a)(y(y({}, t), {}, { buyType: n }))
        );
      };
    },
    469: function (e, t, n) {
      "use strict";
      var a = n(3),
        r = n.n(a),
        i = n(77),
        o = n(16),
        c = function (e) {
          return r.a.createElement(
            "ul",
            { className: "singer_list_txt" },
            e.singerList &&
              e.singerList.map(function (e, t) {
                return r.a.createElement(
                  "li",
                  { className: "singer_list_txt__item", key: t },
                  r.a.createElement(
                    i.b,
                    {
                      to: Object(o.d)(o.a.SINGER, e.singer_mid),
                      className: "singer_list_txt__link js_singer",
                      title: e.singer_name,
                    },
                    e.singer_name
                  )
                );
              })
          );
        },
        s = n(108),
        l = n.n(s),
        u = n(78),
        m = n.n(u),
        d = n(76),
        p = n.n(d),
        f = n(15),
        _ = n(400),
        h = n(412),
        g = n(390),
        v = n(397),
        y = function (e) {
          var t = Object(a.useState)(
              (null === e || void 0 === e ? void 0 : e.focusnum) || 0
            ),
            n = m()(t, 2),
            i = n[0],
            o = n[1],
            c = Object(a.useState)(
              (null === e || void 0 === e ? void 0 : e.isfocus) || !1
            ),
            s = m()(c, 2),
            u = s[0],
            d = s[1],
            f = (function () {
              var t = l()(
                p.a.mark(function t() {
                  var n;
                  return p.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (n = e.fanmid),
                            (t.next = 3),
                            Object(h.c)(
                              n,
                              u,
                              null !== e && void 0 !== e && e.singerOrFans
                                ? 1
                                : 0
                            )
                          );
                        case 3:
                          if (!t.sent) {
                            t.next = 13;
                            break;
                          }
                          if (!u) {
                            t.next = 10;
                            break;
                          }
                          return (
                            o(i - 1),
                            d(!1),
                            g.a.show({
                              type: "success",
                              msg: "\u53d6\u6d88\u5173\u6ce8\u6210\u529f\uff01",
                            }),
                            t.abrupt("return")
                          );
                        case 10:
                          o(i + 1),
                            d(!0),
                            g.a.show({
                              type: "success",
                              msg: "\u5173\u6ce8\u6210\u529f\uff01",
                            });
                        case 13:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function () {
                return t.apply(this, arguments);
              };
            })();
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "p",
              { className: "singer_list__info" },
              Object(v.d)(i),
              "\u4eba\u5173\u6ce8"
            ),
            r.a.createElement(
              "div",
              { className: "singer_list__focus" },
              r.a.createElement(
                "a",
                {
                  className: "mod_btn singer_list__btn_focus js_follow_user",
                  onClick: f,
                },
                u
                  ? r.a.createElement(
                      "span",
                      { className: "btn_focus__cont" },
                      r.a.createElement("i", {
                        className: "mod_btn__icon_yes",
                      }),
                      "\u5df2\u5173\u6ce8"
                    )
                  : r.a.createElement(
                      "span",
                      { className: "btn_focus__cont" },
                      r.a.createElement("i", {
                        className: "mod_btn__icon_new",
                      }),
                      "\u5173\u6ce8"
                    )
              )
            )
          );
        },
        b = function (e) {
          var t = e.config,
            n = function (t) {
              var n, a;
              return null !== e &&
                void 0 !== e &&
                null !== (n = e.config) &&
                void 0 !== n &&
                n.fans
                ? null === e ||
                  void 0 === e ||
                  null === (a = e.config) ||
                  void 0 === a
                  ? void 0
                  : a.fansLink(t)
                : Object(o.d)(o.a.SINGER, t);
            };
          return r.a.createElement(
            "div",
            {
              className: "mod_singer_list ".concat(
                null !== t && void 0 !== t && t.fans
                  ? "mod_singer_list--fans"
                  : ""
              ),
            },
            r.a.createElement(
              "ul",
              { className: "singer_list__list" },
              e.SingerList &&
                e.SingerList.map(function (e, a) {
                  return r.a.createElement(
                    "li",
                    { className: "singer_list__item", key: e.singer_mid || a },
                    r.a.createElement(
                      "div",
                      { className: "singer_list__item_box" },
                      r.a.createElement(
                        i.b,
                        {
                          to: n(e.singer_mid),
                          className: "singer_list__cover",
                          title: e.singer_name,
                        },
                        null !== t && void 0 !== t && t.fans
                          ? r.a.createElement(_.a, {
                              className: "singer_list__pic",
                              name: e.singer_name,
                              type: "singer",
                              imgurl: e.singer_pic,
                              noFixUrl: !0,
                            })
                          : r.a.createElement(_.a, {
                              className: "singer_list__pic",
                              name: e.singer_name,
                              type: "singer",
                              imgurl: f.j.getSingerPic(e.singer_mid, 500),
                            })
                      ),
                      r.a.createElement(
                        "h3",
                        {
                          className: "singer_list__title",
                          style: { minHeight: "20px" },
                        },
                        e.singer_name.trim()
                          ? r.a.createElement(
                              i.b,
                              { to: n(e.singer_mid) },
                              e.singer_name
                            )
                          : r.a.createElement("span", null, "\xa0")
                      ),
                      (null === t || void 0 === t ? void 0 : t.fans) &&
                        r.a.createElement(y, {
                          focusnum: e.fannum,
                          isfocus: e.isfollow,
                          fanmid: e.singer_mid,
                          singerOrFans:
                            (null === t || void 0 === t
                              ? void 0
                              : t.singerOrFans) || 0,
                        })
                    )
                  );
                })
            )
          );
        };
      n(518),
        (t.a = function (e) {
          var t = e.data,
            n = e.type,
            a = void 0 === n ? "image" : n,
            i = e.config;
          return "image" === a
            ? r.a.createElement(b, { SingerList: t, config: i })
            : r.a.createElement(c, { singerList: t });
        });
    },
    471: function (e, t, n) {
      "use strict";
      var a = n(108),
        r = n.n(a),
        i = n(76),
        o = n.n(i),
        c = n(15),
        s = n(449),
        l = (function () {
          var e = r()(
            o.a.mark(function e() {
              var t, n;
              return o.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = {
                            url: "//safety.music.qq.com/cgi/fcgi-bin/fcg_music_collect_safety",
                            data: { type: 100, projectname: "login" },
                          }),
                          (e.prev = 1),
                          (e.next = 4),
                          Object(c.b)(t)
                        );
                      case 4:
                        if (
                          !(n = e.sent) ||
                          0 !== n.code ||
                          !n.data ||
                          2 !== n.data.type ||
                          10 !== n.data.reason
                        ) {
                          e.next = 8;
                          break;
                        }
                        return (
                          Object(s.a)(),
                          e.abrupt(
                            "return",
                            Promise.reject(
                              "\u8be5IP\u88ab\u9650\u5236\u767b\u5f55"
                            )
                          )
                        );
                      case 8:
                        e.next = 13;
                        break;
                      case 10:
                        (e.prev = 10), (e.t0 = e.catch(1));
                      case 13:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 10]]
              );
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })();
      t.a = l;
    },
    472: function (e, t, n) {
      "use strict";
      var a = n(15);
      t.a = function () {
        return (
          a.d.getCookie("qqmusic_key") ||
          a.d.getCookie("qm_keyst") ||
          a.d.getCookie("p_lskey")
        );
      };
    },
    473: function (e, t, n) {},
    474: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return f;
      }),
        n.d(t, "a", function () {
          return h;
        });
      var a = n(108),
        r = n.n(a),
        i = n(76),
        o = n.n(i),
        c = n(3),
        s = n.n(c),
        l = n(15),
        u = n(468),
        m = n(440),
        d = n(444),
        p = (function () {
          var e = r()(
            o.a.mark(function e() {
              var t;
              return o.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Object(l.b)({
                            format: "json",
                            type: "GET",
                            url: ""
                              .concat(
                                "//c.y.qq.com/musichall/fcgi-bin/fcg_alert_info?ids=all&cid=486&rnd="
                              )
                              .concat(Math.random()),
                            data: {},
                          })
                        );
                      case 2:
                        if (((t = e.sent), (e.prev = 3), 0 !== t.code)) {
                          e.next = 6;
                          break;
                        }
                        return e.abrupt("return", t.data);
                      case 6:
                        return e.abrupt("return", null);
                      case 9:
                        (e.prev = 9), (e.t0 = e.catch(3));
                      case 11:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[3, 9]]
              );
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        f = (function () {
          var e = r()(
            o.a.mark(function e(t, n) {
              var a, r, i, c, s, u, m, d, f, _, h, g, v, y, b, E;
              return o.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (i =
                          (null === (a = t.action) || void 0 === a
                            ? void 0
                            : a.alert) ||
                          (null === (r = t.action) || void 0 === r
                            ? void 0
                            : r.msgid)),
                        (c = n || (t.action.try ? "pc_p" : "pc_p_u")),
                        (e.next = 4),
                        p()
                      );
                    case 4:
                      if (((s = e.sent), (u = {}), !s)) {
                        e.next = 20;
                        break;
                      }
                      if (null === (m = t.action) || void 0 === m || !m.alert) {
                        e.next = 19;
                        break;
                      }
                      if (s.alertinfo && s.alertinfo[i]) {
                        e.next = 10;
                        break;
                      }
                      return e.abrupt("return");
                    case 10:
                      (u = l.j.extend({}, s.alertinfo[i][c])),
                        (y =
                          (null === (f = t.album) || void 0 === f
                            ? void 0
                            : f.name) || ""),
                        (b = t.name || ""),
                        (E =
                          (null === (_ = t.singer[0]) || void 0 === _
                            ? void 0
                            : _.name) || ""),
                        (u.desc = (
                          u.desc ||
                          "\u8be5\u6b4c\u66f2\u4e0d\u652f\u6301\u4e0b\u8f7d\u8be5\u54c1\u8d28! "
                        )
                          .replace(/{%singername}/g, E)
                          .replace(/{%albumname}/g, y)
                          .replace(/{%songname}/g, b)
                          .replace(
                            /{%songprice}/g,
                            "".concat(
                              null === (h = t.pay) || void 0 === h
                                ? void 0
                                : h.paytrackprice
                            ) || ""
                          )
                          .replace(
                            /{%albumprice}/g,
                            "".concat(
                              null === (g = t.pay) || void 0 === g
                                ? void 0
                                : g.payalbumprice
                            ) || ""
                          )
                          .replace(/{%tryduration}/g, "".concat(30) || !1)),
                        (u.btn = (u.btn || "")
                          .replace(/{%singername}/g, E)
                          .replace(/{%albumname}/g, y)
                          .replace(/{%songname}/g, b)),
                        (u.url = (u.url || "")
                          .replace(/{%songid}/g, String(t.id || 0))
                          .replace(
                            /{%albumid}/g,
                            String(
                              (null === (v = t.album) || void 0 === v
                                ? void 0
                                : v.id) || 0
                            )
                          )),
                        (e.next = 20);
                      break;
                    case 19:
                      null !== (d = t.action) && void 0 !== d && d.msgid;
                    case 20:
                      return e.abrupt("return", u);
                    case 21:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
        _ = (function () {
          var e = r()(
            o.a.mark(function e(t, n) {
              var a, r, i, c, s, u, m, d, p, f, _, h, g, v, y, b, E, w, N, k;
              return o.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (i =
                          null === (a = t.action) || void 0 === a
                            ? void 0
                            : a.alert),
                        null === (r = t.action) || void 0 === r
                          ? void 0
                          : r.msgid,
                        (c = n || (t.action.try ? "yqq_p" : "yqq_p_u")),
                        (e.next = 5),
                        Object(l.h)()
                          .request([
                            {
                              module: "music.vip.PayAlertSvr",
                              method: "GetPayAlertH5",
                              param: {
                                clientType: "h5",
                                scenes: ["yqq_p", "yqq_p_u"],
                              },
                            },
                          ])
                          .then(function (e) {
                            var t;
                            return 0 ===
                              (null === (t = e[0]) || void 0 === t
                                ? void 0
                                : t.code)
                              ? e[0].data
                              : null;
                          })
                      );
                    case 5:
                      if (((s = e.sent), (u = {}), !s)) {
                        e.next = 24;
                        break;
                      }
                      if (null === (m = t.action) || void 0 === m || !m.alert) {
                        e.next = 23;
                        break;
                      }
                      if (
                        null !== (p = s.base_alerts) &&
                        void 0 !== p &&
                        null !== (f = p[i]) &&
                        void 0 !== f &&
                        f.id
                      ) {
                        e.next = 11;
                        break;
                      }
                      return e.abrupt("return");
                    case 11:
                      if (
                        (E =
                          null === (_ = s.base_alerts) || void 0 === _
                            ? void 0
                            : _[i].scenes[c])
                      ) {
                        e.next = 14;
                        break;
                      }
                      return e.abrupt("return");
                    case 14:
                      (u = l.j.extend({}, s.alert_windows[E])),
                        (w =
                          (null === (h = t.album) || void 0 === h
                            ? void 0
                            : h.name) || ""),
                        (N = t.name || ""),
                        (k =
                          (null === (g = t.singer[0]) || void 0 === g
                            ? void 0
                            : g.name) || ""),
                        (u.desc = (
                          u.desc ||
                          "\u8be5\u6b4c\u66f2\u4e0d\u652f\u6301\u4e0b\u8f7d\u8be5\u54c1\u8d28! "
                        )
                          .replace(/{%singername}/g, k)
                          .replace(/{%albumname}/g, w)
                          .replace(/{%songname}/g, N)
                          .replace(
                            /{%songprice}/g,
                            "".concat(
                              null === (v = t.pay) || void 0 === v
                                ? void 0
                                : v.paytrackprice
                            ) || ""
                          )
                          .replace(
                            /{%albumprice}/g,
                            "".concat(
                              null === (y = t.pay) || void 0 === y
                                ? void 0
                                : y.payalbumprice
                            ) || ""
                          )
                          .replace(/{%tryduration}/g, "".concat(30) || !1)),
                        (u.btn.name = (u.btn.name || "")
                          .replace(/{%singername}/g, k)
                          .replace(/{%albumname}/g, w)
                          .replace(/{%songname}/g, N)),
                        (u.btn.url = (u.btn.url || "")
                          .replace(/{%songid}/g, String(t.id || 0))
                          .replace(
                            /{%albumid}/g,
                            String(
                              (null === (b = t.album) || void 0 === b
                                ? void 0
                                : b.id) || 0
                            )
                          )),
                        (e.next = 24);
                      break;
                    case 23:
                      null !== (d = t.action) && void 0 !== d && d.msgid;
                    case 24:
                      return e.abrupt("return", u);
                    case 25:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
        h = (function () {
          var e = r()(
            o.a.mark(function e(t, n) {
              var a, r, i, c;
              return o.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((e.t0 = n), e.t0)) {
                        e.next = 5;
                        break;
                      }
                      return (e.next = 4), _(t);
                    case 4:
                      e.t0 = e.sent;
                    case 5:
                      if (
                        ((a = e.t0),
                        (r = {
                          title: "",
                          content: "",
                          subtitle: "",
                          btn: void 0,
                        }),
                        (i = a.btn.url),
                        !/^http(s?):\/\//.test(i))
                      ) {
                        e.next = 14;
                        break;
                      }
                      (r.subtitle = a.desc),
                        (r.content = s.a.createElement(
                          "a",
                          {
                            href: i,
                            rel: "noopener nofollow noreferrer",
                            target: "_blank",
                          },
                          a.btn
                        )),
                        (e.next = 27);
                      break;
                    case 14:
                      if (!/^pcqqmusic:\/\//.test(i)) {
                        e.next = 27;
                        break;
                      }
                      if (!(c = i.match(/^pcqqmusic:\/\/(\w+)/)) || !c[1]) {
                        e.next = 27;
                        break;
                      }
                      (r.subtitle = a.desc),
                        (e.t1 = c[1]),
                        (e.next =
                          "buygreen" === e.t1 || "buysupergreen" === e.t1
                            ? 21
                            : "buy8yuan" === e.t1 || "buy12yuan" === e.t1
                            ? 23
                            : "buydigitalalbum" === e.t1
                            ? 25
                            : 27);
                      break;
                    case 21:
                      return (
                        (r.btn = { fn: u.buyMonth, text: a.btn.name }),
                        e.abrupt("break", 27)
                      );
                    case 23:
                      return (
                        (r.btn = {
                          fn: function () {
                            Object(u.buyMonth)({
                              buyType:
                                "buy8yuan" === c[1] ? m.a.YUAN_8 : m.a.YUAN_12,
                              aid: a.aid,
                            });
                          },
                          text: a.btn.name,
                        }),
                        e.abrupt("break", 27)
                      );
                    case 25:
                      return (
                        (r.btn = {
                          fn: function () {
                            Object(d.a)({
                              title: "\u8d2d\u4e70\u6570\u5b57\u4e13\u8f91",
                              albumid: "".concat(t.album.id),
                              aid: "pcwebzhigou",
                            });
                          },
                          text: a.btn.name,
                        }),
                        e.abrupt("break", 27)
                      );
                    case 27:
                      return e.abrupt("return", r);
                    case 28:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })();
    },
    475: function (e, t, n) {
      "use strict";
      var a = n(2),
        r = n.n(a),
        i = n(15);
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var s = {
        get: function () {
          var e = { deleteList: !1, mod: 0 },
            t = i.d.getCookie("y_pl_op");
          if (t) {
            var n = t.split("|");
            (e.deleteList = (n && 1 === parseInt(n[0], 10)) || !1),
              (e.mod = (n && parseInt(n[1], 10)) || 0),
              (e.mod < 0 || e.mod > 2) && (e.mod = 0);
          }
          return e;
        },
        set: function (e) {
          var t = c(c({}, s.get()), e),
            n = [];
          n.push(t.deleteList ? 1 : 0),
            n.push(t.mod),
            i.d.setCookie("y_pl_op", n.join("|"), null, null, 2400);
        },
      };
      t.a = s;
    },
    476: function (e, t, n) {
      "use strict";
      var a,
        r,
        i = n(78),
        o = n.n(i),
        c = n(108),
        s = n.n(c),
        l = n(2),
        u = n.n(l),
        m = n(76),
        d = n.n(m),
        p = n(3),
        f = n.n(p),
        _ = n(366),
        h = n.n(_),
        g = n(15),
        v = n(390),
        y = n(420),
        b = n(391),
        E = (n(493), !1);
      !(function (e) {
        (e.SUBMIT = "submit"), (e.FEEDBACKS = "feedbacks");
      })(r || (r = {}));
      var w = ((a = {}), u()(a, r.SUBMIT, ""), u()(a, r.FEEDBACKS, ""), a),
        N = (function () {
          var e = s()(
            d.a.mark(function e() {
              return d.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!w[r.SUBMIT]) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      return e.abrupt(
                        "return",
                        Object(g.b)({
                          url: "".concat(
                            location.protocol,
                            "//c.y.qq.com/base/fcgi-bin/fcg_aisee_entry.fcg"
                          ),
                          data: {
                            cid: "205362489",
                            uin: b.a.getUin(),
                            ct: 24,
                            reqtype: 2,
                          },
                        }).then(function (e) {
                          return 0 === e.code
                            ? ((w[r.FEEDBACKS] = e.target
                                .replace("http://", "https://")
                                .replace(/\/submit\?/gi, "/feedbacks?")),
                              void (w[r.SUBMIT] = e.target
                                .replace("http://", "https://")
                                .replace(/\/feedbacks\?/gi, "/submit?")))
                            : (1e3 === e.code && b.a.openLogin(),
                              Promise.reject());
                        })
                      );
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        k = function () {
          var e = Object(p.useState)(r.SUBMIT),
            t = o()(e, 2),
            n = t[0],
            a = t[1],
            i = w[n];
          return f.a.createElement(
            f.a.Fragment,
            null,
            f.a.createElement(
              "div",
              { className: "popup__hd" },
              f.a.createElement(
                "div",
                { className: "popup__tit" },
                f.a.createElement(
                  "a",
                  {
                    className: h()("popup__tit_item", {
                      current: n === r.SUBMIT,
                    }),
                    onClick: function () {
                      a(r.SUBMIT);
                    },
                  },
                  "\u6211\u8981\u53cd\u9988"
                ),
                f.a.createElement(
                  "a",
                  {
                    className: h()("popup__tit_item", {
                      current: n === r.FEEDBACKS,
                    }),
                    onClick: function () {
                      a(r.FEEDBACKS);
                    },
                  },
                  "\u53cd\u9988\u5386\u53f2"
                )
              )
            ),
            f.a.createElement(
              "div",
              { className: "popup__bd" },
              f.a.createElement("iframe", {
                id: "frame_tips",
                frameBorder: 0,
                width: "100%",
                height: "420px",
                scrolling: "auto",
                src: i,
              })
            )
          );
        },
        x = (function () {
          var e = s()(
            d.a.mark(function e() {
              return d.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (b.a.isLogin()) {
                          e.next = 3;
                          break;
                        }
                        return b.a.openLogin(), e.abrupt("return");
                      case 3:
                        if (!E) {
                          e.next = 6;
                          break;
                        }
                        return (
                          v.a.show({
                            type: "warning",
                            msg: "\u6b63\u5728\u6253\u5f00\u4e2d......",
                            time: 500,
                          }),
                          e.abrupt("return")
                        );
                      case 6:
                        return (e.prev = 6), (E = !0), (e.next = 10), N();
                      case 10:
                        return (
                          (E = !1),
                          e.abrupt(
                            "return",
                            y.a.show({
                              maskClosable: !1,
                              width: 590,
                              height: 280,
                              children: f.a.createElement(k, null),
                            })
                          )
                        );
                      case 14:
                        (e.prev = 14), (e.t0 = e.catch(6)), (E = !1);
                      case 18:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[6, 14]]
              );
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })();
      t.a = x;
    },
    477: function (e, t, n) {
      "use strict";
      var a = n(78),
        r = n.n(a),
        i = n(15),
        o = n(3),
        c = n.n(o);
      n(498);
      t.a = function (e) {
        var t = e.handleValueChange,
          n = Object(o.useState)(""),
          a = r()(n, 2),
          s = a[0],
          l = a[1];
        return c.a.createElement(
          c.a.Fragment,
          null,
          c.a.createElement(
            "label",
            { className: "form__label" },
            "\u6b4c\u5355\u540d"
          ),
          c.a.createElement(
            "div",
            { className: "mod_form_txt" },
            c.a.createElement("input", {
              type: "text",
              className: "form_txt__input",
              onChange: function (e) {
                t(e), l(e.target.value);
              },
              id: "new_playlist",
            }),
            c.a.createElement(
              "span",
              {
                className: "form_txt__tips",
                id: "name_leftnum",
                style: {
                  color:
                    Math.ceil(i.j.getRealLen(s)) < 40
                      ? "rgb(153, 153, 153)"
                      : "#F70505",
                },
              },
              20 - Math.ceil(i.j.getRealLen(s) / 2)
            )
          )
        );
      };
    },
    478: function (e, t, n) {
      "use strict";
      t.a = function (e) {
        var t = [];
        return (
          e.forEach(function (e) {
            t.push({
              country: e.abt || "",
              singer_id: e.singerId || "",
              singer_mid: e.singerMid || e.MID || e.EncUin || "",
              singer_name: e.singerName || e.Name || "",
              singer_pic: e.singerPic || e.AvatarUrl || "",
              fannum: (null === e || void 0 === e ? void 0 : e.FanNum) || 0,
              isfollow: e.IsFollow || !1,
            });
          }),
          t
        );
      };
    },
    479: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return a;
      }),
        n.d(t, "a", function () {
          return r;
        });
      var a = function (e) {
          var t = [];
          return (
            e.forEach(function (e) {
              var n = {};
              (n.modifytime = e.modify_time),
                (n.pic = e.front_pic),
                (n.title = e.title),
                (n.readcnt = e.read_cnt),
                (n.zid = e.zid),
                (n.level = e.level),
                (n.contentBrief = e.content_brief),
                (n.author = e.author),
                (n.rendStyle = e.rend_style),
                (n.headRawPic = e.head_raw_pic),
                (n.headPic = e.head_pic),
                (n.headWord = e.head_word),
                (n.content = e.content),
                (n.vMediaType = e.v_media_type),
                (n.vMediaSubType = e.v_media_subtype),
                (n.VMediaId = e.v_media_id),
                (n.vMediaMid = e.v_media_mid),
                (n.status = e.status),
                t.push(n);
            }),
            t
          );
        },
        r = function (e) {
          var t = [];
          return (
            e.forEach(function (e, n) {
              var a = { id: n, mid: "", name: "" };
              (a.id = e.singer_id),
                (a.mid = e.singer_mid),
                (a.name = e.singer_name),
                t.push(a);
            }),
            t
          );
        };
    },
    480: function (e, t) {},
    481: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      }),
        n.d(t, "d", function () {
          return s;
        }),
        n.d(t, "c", function () {
          return l;
        }),
        n.d(t, "b", function () {
          return u;
        });
      var a,
        r,
        i = n(2),
        o = n.n(i);
      !(function (e) {
        (e.PNG = "png"), (e.JPG = "jpg"), (e.GIF = "git"), (e.NONE = "");
      })(r || (r = {}));
      var c =
          ((a = {}),
          o()(a, r.PNG, [137, 80]),
          o()(a, r.JPG, [255, 216]),
          o()(a, r.GIF, [71, 73]),
          a),
        s = function (e) {
          return new Promise(function (t) {
            var n = new FileReader();
            (n.onload = function (e) {
              var n = e.target.result;
              if (n.byteLength) {
                var a = new Uint8Array(n, 0, n.byteLength);
                Object.keys(c).forEach(function (e) {
                  var n = c[e];
                  n[0] === a[0] && n[1] === a[1] && t(e);
                });
              }
              t(r.NONE);
            }),
              n.readAsArrayBuffer(e.slice(0, 2));
          });
        },
        l = function (e) {
          return new Promise(function (t, n) {
            var a = document.createElement("img");
            (a.onerror = function () {
              n("\u8bfb\u53d6\u6587\u4ef6\u5931\u8d25");
            }),
              (a.onload = function () {
                t({ src: a.src, width: a.width, height: a.height });
              }),
              (a.src = window.URL.createObjectURL(e));
          });
        },
        u = function (e) {
          return s(e).then(function (t) {
            return t === r.NONE
              ? Promise.reject(
                  new Error(
                    "\u4ec5\u652f\u6301JPG\u3001GIF\u3001PNG\u7c7b\u578b\u56fe\u7247"
                  )
                )
              : new Promise(function (t, n) {
                  var a = new FileReader();
                  (a.onload = function (e) {
                    var a = new Image();
                    (a.onload = function () {
                      var e = document.createElement("canvas"),
                        n = e.getContext("2d");
                      (e.width = 84),
                        (e.height = 150),
                        n.drawImage(
                          a,
                          0,
                          0,
                          a.width,
                          a.height,
                          0,
                          0,
                          e.width,
                          e.height
                        ),
                        t(e.toDataURL("image/jpeg", 0.3));
                    }),
                      (a.onerror = function () {
                        n(new Error("\u52a0\u8f7d\u56fe\u7247\u5931\u8d25"));
                      }),
                      (a.src = e.target.result);
                  }),
                    (a.onerror = function () {
                      n(
                        new Error(
                          "\u8bfb\u53d6\u56fe\u7247\u6587\u4ef6\u5931\u8d25"
                        )
                      );
                    }),
                    a.readAsDataURL(e);
                });
          });
        };
    },
    482: function (e, t, n) {},
    483: function (e, t, n) {
      "use strict";
      var a = n(3),
        r = n.n(a),
        i = {
          blank: "",
          play: "mod_btn__icon_play",
          like: "mod_btn__icon_like ",
          comment: "mod_btn__icon_comment",
          menu: "mod_btn__icon_menu",
          upload: "mod_btn__icon_upload",
        },
        o = {
          play: "mod_btn_green__icon_play",
          like: "mod_btn_green__icon_like",
        };
      t.a = function (e) {
        var t = e.children,
          n = e.style,
          a = e.clickFun,
          c = e.hrefText,
          s = e.aClassName,
          l = e.iconClassName,
          u = e.type,
          m = e.highlight,
          d = e.text,
          p = (m && o[u]) || i[u],
          f = m ? "mod_btn_green" : "mod_btn",
          _ = s ? " ".concat(s.trim()) : "",
          h = l ? " ".concat(l.trim()) : "";
        return r.a.createElement(
          "a",
          {
            href: c,
            style: n || {},
            className: f + _,
            onClick: function (e) {
              a && a(e);
            },
          },
          t ||
            r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement("i", { className: p + h }),
              r.a.createElement("span", { className: "btn__txt" }, d)
            )
        );
      };
    },
    484: function (e, t, n) {
      "use strict";
      var a = n(367),
        r = n.n(a),
        i = n(2),
        o = n.n(i),
        c = n(108),
        s = n.n(c),
        l = n(361),
        u = n.n(l),
        m = n(362),
        d = n.n(m),
        p = n(363),
        f = n.n(p),
        _ = n(364),
        h = n.n(_),
        g = n(365),
        v = n.n(g),
        y = n(76),
        b = n.n(y),
        E = n(3),
        w = n.n(E),
        N = n(10),
        k = n(15),
        x = n(451),
        C = n(16),
        O = function (e) {
          return w.a.createElement(
            w.a.Fragment,
            null,
            e.hotkey.map(function (t, n) {
              return w.a.createElement(
                "dd",
                { key: t.k },
                w.a.createElement(
                  "a",
                  {
                    className: "search_hot__link",
                    onClick: function () {
                      e.onHotClick(t.k.trim(), "song");
                    },
                  },
                  w.a.createElement(
                    "span",
                    { className: "search_hot__number" },
                    n + 1
                  ),
                  w.a.createElement(
                    "span",
                    { className: "search_hot__name" },
                    t.k
                  ),
                  w.a.createElement(
                    "span",
                    { className: "search_hot__listen" },
                    "".concat((t.n / 1e4).toFixed(1), "\u4e07")
                  )
                )
              );
            })
          );
        },
        S = Object(E.memo)(O),
        j = function (e) {
          return w.a.createElement(
            w.a.Fragment,
            null,
            e.historykey.map(function (t) {
              return w.a.createElement(
                "dd",
                { key: t, className: "search_history__item" },
                w.a.createElement(
                  "a",
                  {
                    key: "".concat(t, "1"),
                    className: "search_history__link",
                    onClick: function () {
                      e.onClickHistory(t);
                    },
                  },
                  t
                ),
                w.a.createElement(
                  "a",
                  {
                    key: "".concat(t, "2"),
                    className: "search_history__delete",
                    onClick: function (n) {
                      n.nativeEvent.stopPropagation(),
                        e.onHistoryOperate(t, !0);
                    },
                  },
                  w.a.createElement("i", {
                    className: "search_history__icon_delete",
                  }),
                  w.a.createElement(
                    "span",
                    { className: "icon_txt" },
                    "\u5220\u9664"
                  )
                )
              );
            })
          );
        },
        I = Object(E.memo)(j),
        P = n(415),
        L = n(77),
        q = function (e) {
          var t = (function (e) {
            switch (e) {
              case "album":
                return Object(C.e)(C.a.ALBUM_DETAIL);
              case "mv":
                return Object(C.e)(C.a.MV);
              case "singer":
                return Object(C.e)(C.a.SINGER);
              case "song":
                return Object(C.e)(C.a.SONGE_DETAIL);
              default:
                return "";
            }
          })(e.tag);
          return w.a.createElement(
            w.a.Fragment,
            null,
            e.data.map(function (n) {
              return w.a.createElement(
                "li",
                { key: n.docid },
                w.a.createElement(
                  L.b,
                  {
                    className: "search_result__link",
                    to: ""
                      .concat(t, "/")
                      .concat("mv" === e.tag ? n.vid : n.mid),
                    target: "_blank",
                  },
                  w.a.createElement("span", {
                    className: "search_result__name",
                    dangerouslySetInnerHTML: {
                      __html: Object(P.e)(n.name, e.keyword),
                    },
                  }),
                  "album" !== e.tag && "singer" !== e.tag ? "-" : " ",
                  "singer" !== e.tag &&
                    w.a.createElement("span", {
                      className: "search_result__singer",
                      dangerouslySetInnerHTML: {
                        __html: Object(P.e)(n.singer, e.keyword),
                      },
                    })
                )
              );
            })
          );
        },
        R = Object(E.memo)(q);
      function A(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? A(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : A(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function M(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = v()(e);
          if (t) {
            var r = v()(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return h()(this, n);
        };
      }
      var F = Object(C.e)(C.a.SEARCH),
        D = (function (e) {
          f()(n, e);
          var t = M(n);
          function n() {
            var e, a;
            u()(this, n);
            for (var i = arguments.length, o = new Array(i), c = 0; c < i; c++)
              o[c] = arguments[c];
            return h()(
              a,
              ((e = a = t.call.apply(t, [this].concat(o))),
              (a.state = {
                smartbox: "none",
                hotkey: [],
                keywords: "",
                historykey: [],
                album: [],
                mv: [],
                singer: [],
                song: [],
                specialkey: "",
              }),
              (a.handleSmartBoxVisible = function (e) {
                var t = a.props.config,
                  n = (void 0 === t ? {} : t).prohibitSmartbox,
                  r = void 0 !== n && n,
                  i = a.state,
                  o = i.smartbox,
                  c = i.keywords,
                  s = a.inputbox,
                  l = a.historybox;
                if (s && l) {
                  var u = e;
                  document.addEventListener("click", a.hadnleClickDocument, !1),
                    "none" === o || s === u || l.contains(u) || s.contains(u)
                      ? !r &&
                        "none" === o &&
                        s.contains(u) &&
                        (c
                          ? a.setState({ smartbox: "hot" })
                          : (a.handleHistoryOperate(null, !1, !0),
                            a.setState({ smartbox: "history" })))
                      : (a.handleSmartboxHide(),
                        document.removeEventListener(
                          "click",
                          a.hadnleClickDocument
                        ));
                }
              }),
              (a.hadnleClickDocument = function (e) {
                a.handleSmartBoxVisible(e.target);
              }),
              (a.hadnleClickInputBox = function (e) {
                a.handleSmartBoxVisible(e.target);
              }),
              (a.handleInputKeywordChange = s()(
                b.a.mark(function e() {
                  var t, n, r, i, o, c, s;
                  return b.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = a.props.config),
                            (r = (n = void 0 === t ? {} : t).prohibitSmartbox),
                            (i = void 0 !== r && r),
                            (o = n.pos),
                            (c = a.inputbox),
                            i
                              ? a.setState({ keywords: c.value })
                              : a.setState({
                                  keywords: c.value,
                                  smartbox: c.value ? "hot" : "history",
                                }),
                            (e.next = 6),
                            Object(x.d)(c.value)
                          );
                        case 6:
                          (s = e.sent),
                            a.setState(T({}, s)),
                            "middle" === o &&
                              i &&
                              ((document.documentElement.scrollTop = 270),
                              (document.body.scrollTop = 270));
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (a.getHotkeyData = s()(
                b.a.mark(function e() {
                  var t;
                  return b.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), Object(x.c)();
                        case 2:
                          (t = e.sent),
                            a.setState({
                              hotkey: t.hotkey,
                              specialkey: t.specialkey,
                            });
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (a.handleSmartboxHide = function () {
                a.state.keywords ||
                  a.inputbox.setAttribute(
                    "placeholder",
                    "\u641c\u7d22\u97f3\u4e50\u3001MV\u3001\u6b4c\u5355\u3001\u7528\u6237"
                  ),
                  a.setState({ smartbox: "none" });
              }),
              (a.handleClickSearchIcon = function () {
                var e = a.props,
                  t = e.history,
                  n = e.config,
                  r = (void 0 === n ? {} : n).pos,
                  i = a.state,
                  o = i.keywords,
                  c = i.specialkey,
                  s = k.j.getParam("t");
                o || a.setState({ keywords: c, smartbox: "hot" });
                t.push(
                  k.j.addParam(
                    {
                      w: o || c,
                      t: s || "song",
                      remoteplace:
                        { top: "txt.yqq.top", middle: "txt.yqq.center" }[r] ||
                        "txt.yqq.top",
                    },
                    F
                  )
                ),
                  a.handleHistoryOperate(o || c, !1, !0);
              }),
              (a.handleEnterKeyDown = function (e) {
                13 === e.keyCode &&
                  (a.setState({ smartbox: "none" }), a.handleClickSearchIcon());
              }),
              (a.handleSearch = function (e, t) {
                var n = k.j.getParam("t") || "song";
                a.props.history.push(
                  ""
                    .concat(F, "?w=")
                    .concat(e, "&t=")
                    .concat(t || n, "&remoteplace=txt.yqq.top")
                );
              }),
              (a.handleInputFocus = function () {
                a.handleInputKeywordChange(),
                  a.handleHistoryOperate(null, !1, !0);
              }),
              (a.handleHistoryOperate = function (e, t, n) {
                if ((e || t || n) && k.f.isEnable) {
                  if (!e && t)
                    return (
                      k.f.remove("headerSearchistory"),
                      void a.setState({ historykey: [] })
                    );
                  k.f.has("headerSearchistory") ||
                    k.f.set("headerSearchistory", JSON.stringify([]));
                  var i = JSON.parse(k.f.get("headerSearchistory"));
                  if (
                    (Array.isArray(i) || (i = []),
                    !t &&
                      n &&
                      a.setState({
                        historykey: e ? i : [].concat(r()(i), [e]),
                      }),
                    !e)
                  )
                    return;
                  var o = i.indexOf(e);
                  if (t) {
                    if (-1 === o) return;
                    i.splice(o, 1),
                      a.setState({ historykey: i }),
                      k.f.set("headerSearchistory", JSON.stringify(i));
                  } else {
                    if (-1 !== o) return;
                    i.unshift(e),
                      a.setState({ historykey: i }),
                      k.f.set("headerSearchistory", JSON.stringify(i));
                  }
                }
              }),
              (a.handleRouteQueryChange = function () {
                if (a.props.location.pathname.includes(F)) {
                  var e = k.j.getParam("w");
                  e &&
                    e !== a.state.keywords &&
                    (a.handleHistoryOperate(e.trim()),
                    a.setState({ keywords: e }));
                }
              }),
              e)
            );
          }
          return (
            d()(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this.getHotkeyData(),
                    this.handleRouteQueryChange(),
                    (this.unlisten = this.props.history.listen(
                      this.handleRouteQueryChange
                    )),
                    this.handleHistoryOperate(null, !1, !0);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.unlisten && this.unlisten();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state,
                    n = t.smartbox,
                    a = t.hotkey,
                    r = t.keywords,
                    i = t.historykey,
                    o = t.album,
                    c = t.singer,
                    s = t.song,
                    l = t.mv,
                    u = this.props.config;
                  return w.a.createElement(
                    w.a.Fragment,
                    null,
                    w.a.createElement(
                      "div",
                      { className: "mod_search_input" },
                      w.a.createElement("input", {
                        ref: function (t) {
                          e.inputbox = t;
                        },
                        type: "text",
                        className: "search_input__input",
                        placeholder:
                          "\u641c\u7d22\u97f3\u4e50\u3001MV\u3001\u6b4c\u5355\u3001\u7528\u6237",
                        value: r,
                        onKeyDown: this.handleEnterKeyDown,
                        onChange: this.handleInputKeywordChange,
                        onFocus: this.handleInputFocus,
                        onClick: this.hadnleClickInputBox,
                      }),
                      w.a.createElement(
                        "button",
                        {
                          className: "search_input__btn",
                          onClick: this.handleClickSearchIcon,
                        },
                        w.a.createElement("i", {
                          className: "icon_search sprite",
                        }),
                        w.a.createElement(
                          "span",
                          { className: "icon_txt" },
                          "\u641c\u7d22"
                        )
                      )
                    ),
                    w.a.createElement(
                      "div",
                      {
                        className: "mod_search_result ".concat(
                          "hot" === n ? "drop" : ""
                        ),
                      },
                      s &&
                        s.length > 0 &&
                        w.a.createElement(
                          "div",
                          { className: "search_result__sort" },
                          w.a.createElement(
                            "h4",
                            { className: "search_result__tit" },
                            w.a.createElement("i", {
                              className: "search_result__icon_song",
                            }),
                            "\u5355\u66f2"
                          ),
                          w.a.createElement(
                            "ul",
                            {
                              className:
                                u && "middle" === u.pos
                                  ? "search_result__list"
                                  : "",
                            },
                            w.a.createElement(R, {
                              data: s,
                              tag: "song",
                              keyword: r,
                            })
                          )
                        ),
                      c &&
                        c.length > 0 &&
                        w.a.createElement(
                          "div",
                          { className: "search_result__sort" },
                          w.a.createElement(
                            "h4",
                            { className: "search_result__tit" },
                            w.a.createElement("i", {
                              className: "search_result__icon_singer",
                            }),
                            "\u6b4c\u624b"
                          ),
                          w.a.createElement(
                            "ul",
                            {
                              className:
                                u && "middle" === u.pos
                                  ? "search_result__list"
                                  : "",
                            },
                            w.a.createElement(R, {
                              data: c,
                              tag: "singer",
                              keyword: r,
                            })
                          )
                        ),
                      o &&
                        o.length > 0 &&
                        w.a.createElement(
                          "div",
                          { className: "search_result__sort" },
                          w.a.createElement(
                            "h4",
                            { className: "search_result__tit" },
                            w.a.createElement("i", {
                              className: "search_result__icon_album",
                            }),
                            "\u4e13\u8f91"
                          ),
                          w.a.createElement(
                            "ul",
                            {
                              className:
                                u && "middle" === u.pos
                                  ? "search_result__list"
                                  : "",
                            },
                            w.a.createElement(R, {
                              data: o,
                              tag: "album",
                              keyword: r,
                            })
                          )
                        ),
                      l &&
                        l.length > 0 &&
                        w.a.createElement(
                          "div",
                          { className: "search_result__sort" },
                          w.a.createElement(
                            "h4",
                            { className: "search_result__tit" },
                            w.a.createElement("i", {
                              className: "search_result__icon_mv",
                            }),
                            "MV"
                          ),
                          w.a.createElement(
                            "ul",
                            {
                              className:
                                u && "middle" === u.pos
                                  ? "search_result__list"
                                  : "",
                            },
                            w.a.createElement(R, {
                              data: l,
                              tag: "mv",
                              keyword: r,
                            })
                          )
                        )
                    ),
                    w.a.createElement(
                      "div",
                      {
                        className: "mod_search_other ".concat(
                          "history" === n ? "drop" : ""
                        ),
                      },
                      (!u || "middle" !== u.pos) &&
                        w.a.createElement(
                          "div",
                          { className: "search_hot" },
                          w.a.createElement(
                            "dl",
                            { className: "search_hot__list" },
                            w.a.createElement(
                              "dt",
                              {
                                className: "search_hot__tit",
                                id: "search_hot__tit",
                              },
                              "\u70ed\u95e8\u63a8\u8350"
                            ),
                            w.a.createElement(S, {
                              hotkey: a,
                              onHotClick: this.handleSearch,
                            })
                          )
                        ),
                      w.a.createElement(
                        "div",
                        {
                          className: "search_history",
                          ref: function (t) {
                            return (e.historybox = t);
                          },
                        },
                        w.a.createElement(
                          "dl",
                          { className: "search_history__list" },
                          w.a.createElement(
                            "dt",
                            { className: "search_history__tit" },
                            "\u5386\u53f2\u641c\u7d22",
                            w.a.createElement(
                              "a",
                              {
                                onClick: function () {
                                  e.handleHistoryOperate(null, !0);
                                },
                                className: "search_history__clear",
                              },
                              w.a.createElement("i", {
                                className: "icon_history_clear",
                              }),
                              w.a.createElement(
                                "span",
                                { className: "icon_txt" },
                                "\u6e05\u7a7a"
                              )
                            )
                          ),
                          w.a.createElement(I, {
                            historykey: i,
                            onClickHistory: this.handleSearch,
                            onHistoryOperate: this.handleHistoryOperate,
                          })
                        )
                      )
                    )
                  );
                },
              },
            ]),
            n
          );
        })(E.PureComponent);
      t.a = Object(N.withRouter)(D);
    },
    485: function (e, t, n) {
      "use strict";
      var a = n(420),
        r = n(3),
        i = n.n(r),
        o = function () {
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(
              "p",
              null,
              "\u5fae\u4fe1\u626b\u63cf\u4e8c\u7ef4\u7801\uff0c\u70b9\u51fb\u53f3\u4e0a\u89d2",
              i.a.createElement("img", {
                src: "//y.qq.com/mediastyle/yqq/extra/share_wechat_btn.png",
                alt: "",
                className: "popup_share_wechat__img",
              }),
              "\u6309\u94ae"
            ),
            i.a.createElement(
              "p",
              null,
              "\u5206\u4eab\u7ed9",
              i.a.createElement(
                "span",
                { className: "popup_txt_highlight" },
                "\u597d\u53cb"
              ),
              "\u6216",
              i.a.createElement(
                "span",
                { className: "popup_txt_highlight" },
                "\u670b\u53cb\u5708"
              )
            )
          );
        },
        c =
          (n(499),
          function (e) {
            var t = e.img,
              n = e.title,
              a = void 0 === n ? "\u5206\u4eab\u5230\u5fae\u4fe1" : n,
              r = e.content,
              c = void 0 === r ? i.a.createElement(o, null) : r;
            return i.a.createElement(
              "div",
              {
                id: "divdialog_0",
                className: "mod_popup popup_share_wechat",
                "data-aria": "popup",
              },
              i.a.createElement(
                "div",
                { className: "popup__hd" },
                i.a.createElement("h2", { className: "popup__tit" }, a)
              ),
              i.a.createElement(
                "div",
                { className: "popup__bd ", id: "dialogbox" },
                i.a.createElement("img", {
                  src: t,
                  alt: "\u4e8c\u7ef4\u7801",
                  className: "popup_share_wechat__qrcode",
                }),
                c
              )
            );
          });
      t.a = function (e) {
        return a.a.show({
          width: 338,
          children: i.a.createElement(c, e),
          childrenIsClose: !0,
        });
      };
    },
    486: function (e, t, n) {},
    487: function (e, t, n) {},
    488: function (e, t, n) {},
    489: function (e, t, n) {},
    490: function (e, t, n) {},
    491: function (e, t, n) {},
    492: function (e, t, n) {},
    493: function (e, t, n) {},
    494: function (e, t, n) {},
    496: function (e, t, n) {},
    497: function (e, t, n) {},
    498: function (e, t, n) {},
    499: function (e, t, n) {},
    500: function (e, t, n) {},
    501: function (e, t, n) {},
    502: function (e, t, n) {},
    503: function (e, t, n) {},
    504: function (e, t, n) {},
    505: function (e, t, n) {},
    508: function (e, t, n) {},
    509: function (e, t, n) {},
    510: function (e, t, n) {},
    518: function (e, t, n) {},
    521: function (e, t, n) {},
    523: function (e, t, n) {},
    524: function (e, t, n) {},
    529: function (e, t, n) {},
    533: function (e, t, n) {},
  },
]);
