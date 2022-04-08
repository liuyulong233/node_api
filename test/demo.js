(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    377: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(2),
        r = n.n(a),
        l = n(367),
        o = n.n(l),
        i = n(108),
        s = n.n(i),
        c = n(78),
        u = n.n(c),
        m = n(361),
        d = n.n(m),
        p = n(362),
        f = n.n(p),
        y = n(149),
        h = n.n(y),
        g = n(363),
        _ = n.n(g),
        v = n(364),
        b = n.n(v),
        E = n(365),
        L = n.n(E),
        k = n(76),
        N = n.n(k),
        x = n(3),
        w = n.n(x),
        P = n(10),
        S = n(15),
        T = n(399),
        O = n(463),
        C = n(410),
        D = n(424),
        M = n(405),
        I = n(390),
        j = n(403),
        A = n(16),
        R = n(391),
        B = (n(431), n(420)),
        q = n(475);
      function F(e, t) {
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
      function Y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? F(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : F(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var U = function (e) {
          var t = e.config,
            n = e.setConfig,
            a = function (e) {
              n(Y(Y({}, t), {}, { mod: e }));
            };
          return w.a.createElement(
            w.a.Fragment,
            null,
            w.a.createElement(
              "div",
              { className: "form__part" },
              w.a.createElement(
                "div",
                { className: "form__label" },
                "\u5386\u53f2\u64ad\u653e\u5217\u8868"
              ),
              w.a.createElement(
                "span",
                { className: "mod_form_check" },
                w.a.createElement(
                  "label",
                  { className: "form_check__label" },
                  w.a.createElement(
                    "span",
                    {
                      className: "form_check__checkbox ".concat(
                        t.deleteList ? "" : "sprite form_check__checkbox--check"
                      ),
                    },
                    w.a.createElement("input", {
                      type: "checkbox",
                      name: "privacy",
                      className: "form_check__check",
                      onClick: function () {
                        n(Y(Y({}, t), {}, { deleteList: !t.deleteList }));
                      },
                    })
                  ),
                  "\u4fdd\u7559\uff08\u52fe\u9009\u540e\uff0c\u6bcf\u6b21\u65b0\u6253\u5f00\u64ad\u653e\u5668\uff0c\u5c06\u4fdd\u7559\u4e0a\u6b21\u5173\u95ed\u65f6\u7684\u64ad\u653e\u5217\u8868\uff09"
                )
              )
            ),
            w.a.createElement(
              "div",
              { className: "form__part" },
              w.a.createElement(
                "div",
                { className: "form__label" },
                "\u64ad\u653e\u8bbe\u7f6e"
              ),
              w.a.createElement(
                "span",
                { className: "mod_form_radio" },
                w.a.createElement(
                  "label",
                  { className: "form_radio__label" },
                  w.a.createElement(
                    "span",
                    {
                      className: "form_radio__radiobox sprite ".concat(
                        0 === t.mod ? "form_radio__radiobox--check" : ""
                      ),
                    },
                    w.a.createElement("input", {
                      type: "radio",
                      name: "privacy",
                      className: "form_radio__radio",
                      onClick: function () {
                        a(0);
                      },
                    })
                  ),
                  "\u7acb\u5373\u64ad\u653e",
                  w.a.createElement(
                    "span",
                    { className: "c_tx_thin" },
                    "(\u9ed8\u8ba4\u6dfb\u52a0\u5230\u64ad\u653e\u961f\u5217\u6700\u9876\u90e8)"
                  )
                )
              ),
              w.a.createElement(
                "span",
                { className: "mod_form_radio" },
                w.a.createElement(
                  "label",
                  { className: "form_radio__label" },
                  w.a.createElement(
                    "span",
                    {
                      className: "form_radio__radiobox sprite ".concat(
                        1 === t.mod ? "form_radio__radiobox--check" : ""
                      ),
                    },
                    w.a.createElement("input", {
                      type: "radio",
                      name: "privacy",
                      className: "form_radio__radio",
                      onClick: function () {
                        a(1);
                      },
                    })
                  ),
                  "\u6dfb\u52a0\u5230\u64ad\u653e\u961f\u5217\u672b\u5c3e"
                )
              ),
              w.a.createElement(
                "span",
                { className: "mod_form_radio" },
                w.a.createElement(
                  "label",
                  { className: "form_radio__label" },
                  w.a.createElement(
                    "span",
                    {
                      className: "form_radio__radiobox sprite ".concat(
                        2 === t.mod ? "form_radio__radiobox--check" : ""
                      ),
                    },
                    w.a.createElement("input", {
                      type: "radio",
                      name: "privacy",
                      className: "form_radio__radio",
                      onClick: function () {
                        a(2);
                      },
                    })
                  ),
                  "\u4e0b\u4e00\u9996\u64ad\u653e"
                )
              )
            )
          );
        },
        V = function () {
          var e = Object(x.useState)(q.a.get()),
            t = u()(e, 2),
            n = t[0],
            a = t[1],
            r = Object(x.useState)(!1),
            l = u()(r, 2),
            o = l[0],
            i = l[1];
          return w.a.createElement(
            w.a.Fragment,
            null,
            w.a.createElement(
              "a",
              {
                className: "player_login__link player_login__link--set",
                onClick: function () {
                  i(!0);
                },
              },
              w.a.createElement(
                "span",
                { className: "player_login__txt" },
                "\u8bbe\u7f6e"
              )
            ),
            o &&
              w.a.createElement(
                B.a,
                {
                  visible: !0,
                  childrenIsClose: !0,
                  width: 600,
                  onClose: function () {
                    i(!1);
                  },
                },
                w.a.createElement(M.a, {
                  title: "\u64ad\u653e\u5668\u8bbe\u7f6e",
                  topLevelClass: "mod_popup popup_player",
                  content: w.a.createElement(U, { config: n, setConfig: a }),
                  btn: [
                    {
                      fn: function () {
                        i(!1);
                      },
                      text: "\u53d6\u6d88",
                    },
                    {
                      fn: function () {
                        q.a.set(n), i(!1);
                      },
                      text: "\u786e\u5b9a",
                    },
                  ],
                })
              )
          );
        },
        Q = (n(536), null),
        J = function (e) {
          var t = Object(x.useState)(!1),
            n = u()(t, 2),
            a = n[0],
            r = n[1],
            l = Object(x.useState)(null),
            o = u()(l, 2),
            i = o[0],
            s = o[1];
          Object(x.useEffect)(function () {
            S.c.isBrowser &&
              R.a.isLogin() &&
              R.a.getVipInfo().then(function (t) {
                var n;
                s(t),
                  null === (n = e.onLoadedUserInfo) ||
                    void 0 === n ||
                    n.call(e, t);
              });
          }, []);
          var c = i && i.base,
            m =
              S.c.isBrowser && "2" === S.d.getCookie("login_type")
                ? "//y.qq.com/mediastyle/yqq/img/login_wechat.png?max_age=2592000"
                : "//y.qq.com/mediastyle/yqq/img/login_qq.png?max_age=2592000";
          return w.a.createElement(
            "div",
            {
              className: "mod_player_login",
              onMouseEnter: function () {
                Q && (clearTimeout(Q), (Q = null)), a || r(!0);
              },
              onMouseLeave: function () {
                a &&
                  (Q = window.setTimeout(function () {
                    r(!1), (Q = null);
                  }, 500));
              },
            },
            c
              ? w.a.createElement(
                  "a",
                  {
                    className: "player_login__link",
                    href: Object(A.d)(A.a.PROFILE),
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                  w.a.createElement("img", {
                    src: i.base.headurl,
                    className: "player_login__cover",
                    alt: "",
                  }),
                  w.a.createElement("img", {
                    src: m,
                    className: "player_login__icon",
                  }),
                  w.a.createElement(
                    "span",
                    { className: "player_login__txt" },
                    i.base.nick
                  )
                )
              : w.a.createElement(
                  "a",
                  {
                    className: "player_login__link",
                    onClick: function () {
                      R.a.isLogin() || R.a.openLogin();
                    },
                  },
                  w.a.createElement(
                    "span",
                    { className: "player_login__txt" },
                    "\u767b\u5f55"
                  )
                ),
            w.a.createElement(V, null),
            c &&
              a &&
              w.a.createElement(
                "a",
                { className: "player_login__out", onClick: R.a.loginOut },
                "\u9000\u51fa"
              )
          );
        },
        W = n(400),
        G = (n(537), n(398)),
        z = n(366),
        H = n.n(z),
        X = function (e, t, n, a) {
          return (
            null !== e.interval &&
            (t === n.length - 1
              ? a >= e.interval
              : a >= e.interval && a < n[t + 1].interval)
          );
        },
        K = function (e, t) {
          var n = (function (e) {
              for (var t = e.offsetLeft, n = e.offsetParent; null !== n; )
                (t += n.offsetLeft), (n = n.offsetParent);
              return t;
            })(t),
            a = (e.clientX - n) / t.offsetWidth;
          return a > 1 ? (a = 1) : a < 0 && (a = 0), a;
        },
        Z = (function () {
          var e = s()(
            N.a.mark(function e(t) {
              var n,
                a,
                r,
                l,
                o,
                i,
                s,
                c,
                u,
                m = arguments;
              return N.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = m.length > 1 && void 0 !== m[1] && m[1]),
                        (a = m.length > 2 && void 0 !== m[2] && m[2]),
                        (r = R.a.getUin()),
                        (l = R.a.isVip()),
                        (o = r != t.uin || l !== t.isvip) &&
                          (t.uin = Number(r) || 0),
                        !n && !o)
                      ) {
                        e.next = 16;
                        break;
                      }
                      return (
                        (s = []),
                        (c = []),
                        (t.isvip = l),
                        null === (i = t.songList) ||
                          void 0 === i ||
                          i.forEach(function (e) {
                            e && (s.push(e.id), c.push(e.type));
                          }),
                        (e.next = 13),
                        Object(T.l)(s, c)
                      );
                    case 13:
                      null !== (u = e.sent) &&
                        void 0 !== u &&
                        u.length &&
                        (t.songList = u),
                        a && S.f.setJson("playSongData", t);
                    case 16:
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
        $ = n(406),
        ee = n(452);
      function te(e) {
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
            a = L()(e);
          if (t) {
            var r = L()(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return b()(this, n);
        };
      }
      var ne = (function (e) {
          _()(n, e);
          var t = te(n);
          function n() {
            var e, a;
            d()(this, n);
            for (var r = arguments.length, l = new Array(r), o = 0; o < r; o++)
              l[o] = arguments[o];
            return b()(
              a,
              ((e = a = t.call.apply(t, [this].concat(l))),
              (a.handleLyricMouseWheel = function (e) {
                e.preventDefault(), e.stopPropagation();
              }),
              e)
            );
          }
          return (
            f()(n, [
              {
                key: "componentDidMount",
                value: function () {
                  document
                    .getElementById("qrc_ctn")
                    .addEventListener("wheel", this.handleLyricMouseWheel, {
                      passive: !1,
                    });
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  document
                    .getElementById("qrc_ctn")
                    .removeEventListener("wheel", this.handleLyricMouseWheel);
                },
              },
              {
                key: "render",
                value: function () {
                  var e,
                    t,
                    n,
                    a,
                    r,
                    l,
                    o,
                    i = this.props,
                    s = i.song,
                    c = i.lyric,
                    u = i.getPlayLyricElment,
                    m = i.translateY,
                    d = i.isTrans,
                    p = i.openLang,
                    f = i.currentTime,
                    y = i.showTransBtn,
                    h = i.handleDragLyricMouseDown;
                  return w.a.createElement(
                    "div",
                    { className: "mod_song_info" },
                    w.a.createElement(
                      "div",
                      { className: "song_info__info" },
                      w.a.createElement(
                        "a",
                        {
                          className: "song_info__cover",
                          href:
                            null !== s &&
                            void 0 !== s &&
                            null !== (e = s.album) &&
                            void 0 !== e &&
                            e.mid
                              ? Object(A.d)(
                                  A.a.ALBUM_DETAIL,
                                  null === s ||
                                    void 0 === s ||
                                    null === (t = s.album) ||
                                    void 0 === t
                                    ? void 0
                                    : t.mid
                                )
                              : "",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        w.a.createElement(W.a, {
                          noFixUrl: !0,
                          imgurl: Object(ee.a)(
                            s,
                            "//y.qq.com/mediastyle/yqq/extra/player_cover.png?max_age=31536000"
                          ),
                          type: "album",
                          name: s && s.name,
                          className: "song_info__pic",
                        })
                      ),
                      s &&
                        w.a.createElement(
                          x.Fragment,
                          null,
                          w.a.createElement(
                            "div",
                            { className: "song_info__name" },
                            "\u6b4c\u66f2\u540d\uff1a",
                            w.a.createElement(
                              "a",
                              {
                                href: Object($.d)({
                                  id: s.id,
                                  mid: s.mid,
                                  songtype: s.type,
                                }),
                                target: "_blank",
                                rel: "noopener noreferrer",
                              },
                              s.title
                            )
                          ),
                          w.a.createElement(
                            "div",
                            { className: "song_info__singer" },
                            (null === (n = s.singer) || void 0 === n
                              ? void 0
                              : n.length) > 0 &&
                              (null === (a = s.singer[0]) || void 0 === a
                                ? void 0
                                : a.id) > 0 &&
                              w.a.createElement(
                                w.a.Fragment,
                                null,
                                "\u6b4c\u624b\uff1a",
                                w.a.createElement(G.a, { singers: s.singer })
                              )
                          ),
                          w.a.createElement(
                            "div",
                            { className: "song_info__album" },
                            (null === s ||
                            void 0 === s ||
                            null === (r = s.album) ||
                            void 0 === r
                              ? void 0
                              : r.id) > 0 &&
                              (null === s ||
                              void 0 === s ||
                              null === (l = s.album) ||
                              void 0 === l
                                ? void 0
                                : l.name) &&
                              w.a.createElement(
                                w.a.Fragment,
                                null,
                                "\u4e13\u8f91\uff1a",
                                w.a.createElement(
                                  "a",
                                  {
                                    href: Object(A.d)(
                                      A.a.ALBUM_DETAIL,
                                      (null === s ||
                                      void 0 === s ||
                                      null === (o = s.album) ||
                                      void 0 === o
                                        ? void 0
                                        : o.mid) || ""
                                    ),
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                  },
                                  s.album.name
                                )
                              )
                          )
                        )
                    ),
                    w.a.createElement(
                      "div",
                      { className: "song_info__lyric" },
                      w.a.createElement(
                        "div",
                        {
                          className: "song_info__lyric_box",
                          id: "js_lyric_box",
                        },
                        w.a.createElement(
                          "div",
                          {
                            className: "song_info__lyric_inner",
                            style: {
                              transition: "transform 0.1s ease-out",
                              transform: "translateY(-".concat(m, "px)"),
                            },
                            id: "qrc_ctn",
                            onMouseDown: h,
                          },
                          c &&
                            c.map(function (e, t) {
                              var n = X(e, t, c, f);
                              return w.a.createElement(
                                "p",
                                {
                                  className: H()({ on: n }),
                                  key: t,
                                  ref: function (e) {
                                    n && u(e);
                                  },
                                },
                                e.context
                              );
                            })
                        )
                      )
                    ),
                    y &&
                      w.a.createElement(
                        "a",
                        {
                          onClick: p,
                          className: H()("btn_lang", { "btn_lang--select": d }),
                        },
                        w.a.createElement(
                          "i",
                          { className: "icon_txt" },
                          "\u5f00\u542f\u97f3\u8bd1\u6b4c\u8bcd"
                        )
                      )
                  );
                },
              },
            ]),
            n
          );
        })(x.PureComponent),
        ae = n(408),
        re =
          (n(538),
          {
            album: !1,
            time: !0,
            singer: !0,
            rank: !1,
            cover: !1,
            edit: !0,
            more: !1,
            delete: !0,
          }),
        le = function (e) {
          var t = e.playSong,
            n = e.songList,
            a = e.currentMid,
            r = e.changePlay,
            l = e.deleteSong,
            o = e.lyric,
            i = e.currentTime,
            s = e.getPlayLyricElment,
            c = e.translateY,
            m = e.isTrans,
            d = e.showTransBtn,
            p = e.openLang,
            f = e.changeSelect,
            y = e.changeAddSongPlayList,
            h = e.bacthDelete,
            g = e.bacthAddLick,
            _ = e.bacthFan,
            v = e.dowLoadSong,
            b = e.clearSongList,
            E = e.handleDragLyricMouseDown,
            L = w.a.createRef(),
            k = Object(x.useState)(null),
            N = u()(k, 2),
            P = N[0],
            T = N[1],
            O = function () {
              var e = document.getElementsByClassName("player__bd");
              e && e.length > 0 && T(e[0].clientHeight - 56);
            };
          return (
            Object(x.useEffect)(function () {
              return (
                O(),
                window.addEventListener("resize", O, !1),
                function () {
                  window.removeEventListener("resize", O);
                }
              );
            }, []),
            w.a.createElement(
              "div",
              { className: "player_style_normal" },
              w.a.createElement(
                "div",
                { className: "mod_songlist_toolbar" },
                w.a.createElement(
                  "a",
                  { onClick: g, className: "mod_btn" },
                  w.a.createElement("i", {
                    className: H()("mod_btn_green__icon_like", {
                      "mod_btn_green__icon_like--like": _,
                    }),
                  }),
                  "\u6536\u85cf",
                  w.a.createElement("span", { className: "mod_btn__border" })
                ),
                w.a.createElement(
                  "a",
                  {
                    onClick: function (t) {
                      (0, e.addPlayList)(S.j.getEventPostion(t));
                    },
                    className: "mod_btn",
                  },
                  w.a.createElement("i", {
                    className: "mod_btn_green__icon_add",
                  }),
                  "\u6dfb\u52a0\u5230",
                  w.a.createElement("span", { className: "mod_btn__border" })
                ),
                w.a.createElement(
                  "a",
                  { onClick: v, className: "mod_btn" },
                  w.a.createElement("i", {
                    className: "mod_btn_green__icon_down",
                  }),
                  "\u4e0b\u8f7d",
                  w.a.createElement("span", { className: "mod_btn__border" })
                ),
                w.a.createElement(
                  "a",
                  {
                    onClick: function () {
                      var e;
                      null === L ||
                        void 0 === L ||
                        null === (e = L.current) ||
                        void 0 === e ||
                        e.makeEmptySelectList(),
                        h();
                    },
                    className: "mod_btn",
                  },
                  w.a.createElement("i", {
                    className: "mod_btn_green__icon_delete",
                  }),
                  "\u5220\u9664",
                  w.a.createElement("span", { className: "mod_btn__border" })
                ),
                w.a.createElement(
                  "a",
                  { onClick: b, className: "mod_btn" },
                  w.a.createElement("i", {
                    className: "mod_btn_green__icon_clear",
                  }),
                  "\u6e05\u7a7a\u5217\u8868",
                  w.a.createElement("span", { className: "mod_btn__border" })
                )
              ),
              w.a.createElement(
                "div",
                { className: "sb_scrollable sb_main sb_viewport" },
                w.a.createElement(
                  "div",
                  { className: "sb_overview", style: { height: P } },
                  w.a.createElement(ae.a, {
                    changeAddSongPlayList: y,
                    deleteSong: l,
                    changePlay: r,
                    isPlayList: !0,
                    currentMid: a,
                    data: n,
                    config: re,
                    changeSelect: f,
                    ref: L,
                  })
                )
              ),
              w.a.createElement(ne, {
                showTransBtn: d,
                openLang: p,
                isTrans: m,
                translateY: c,
                getPlayLyricElment: s,
                currentTime: i,
                lyric: o,
                song: t,
                handleDragLyricMouseDown: E,
              })
            )
          );
        },
        oe = Object(x.memo)(le);
      n(539);
      function ie(e) {
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
            a = L()(e);
          if (t) {
            var r = L()(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return b()(this, n);
        };
      }
      var se = (function (e) {
          _()(n, e);
          var t = ie(n);
          function n() {
            return d()(this, n), t.apply(this, arguments);
          }
          return (
            f()(n, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.lyric,
                    n = e.currentTime,
                    a = e.getPlayLyricElment,
                    r = e.showTransBtn,
                    l = e.openLang,
                    o = e.isTrans,
                    i = e.translateY,
                    s = e.handleDragLyricMouseDown;
                  return w.a.createElement(
                    "div",
                    { className: "player_style_only" },
                    w.a.createElement(
                      "div",
                      { className: "mod_only_lyric" },
                      w.a.createElement(
                        "div",
                        {
                          style: {
                            transition: "transform 0.1s ease-out",
                            transform: "translateY(-".concat(i, "px)"),
                          },
                          className: "only_lyric__inner",
                          id: "qrc_ctn",
                          onMouseDown: s,
                        },
                        w.a.createElement(
                          "p",
                          { "data-id": "line_null" },
                          "\xa0"
                        ),
                        t &&
                          t.map(function (e, r) {
                            var l = X(e, r, t, n);
                            return w.a.createElement(
                              "p",
                              {
                                className: H()({ on: l }),
                                key: r,
                                ref: function (e) {
                                  l && a(e);
                                },
                              },
                              e.context
                            );
                          })
                      )
                    ),
                    r &&
                      w.a.createElement(
                        "a",
                        {
                          onClick: l,
                          className: H()("btn_lang", { "btn_lang--select": o }),
                        },
                        w.a.createElement(
                          "i",
                          { className: "icon_txt" },
                          "\u5f00\u542f\u97f3\u8bd1\u6b4c\u8bcd"
                        )
                      )
                  );
                },
              },
            ]),
            n
          );
        })(x.PureComponent),
        ce = n(464);
      function ue(e) {
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
            a = L()(e);
          if (t) {
            var r = L()(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return b()(this, n);
        };
      }
      var me = (function (e) {
          _()(n, e);
          var t = ue(n);
          function n() {
            var e, a;
            d()(this, n);
            for (var r = arguments.length, l = new Array(r), o = 0; o < r; o++)
              l[o] = arguments[o];
            return b()(
              a,
              ((e = a = t.call.apply(t, [this].concat(l))),
              (a.handleClickprogressPlay = function (e) {
                e.stopPropagation();
              }),
              (a.handleDownloaing = function () {
                a.props.dowLoadSong();
              }),
              e)
            );
          }
          return (
            f()(n, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.song,
                    n = e.play,
                    a = e.prevPlay,
                    r = e.nextPlay,
                    l = e.playStatus,
                    o = e.currentTime,
                    i = e.progressTime,
                    s = e.playMouseDown,
                    c = e.seek,
                    u = e.playType,
                    m = e.setPlayType,
                    d = e.addLike,
                    p = e.commentCount,
                    f = e.setPureMode,
                    y = e.isPureMode,
                    h = e.volume,
                    g = e.volumeMouseDown,
                    _ = e.progressDomRef,
                    v = e.volumeProgressDomRef,
                    b = e.setVolume,
                    E = e.setMute,
                    L = e.currentTimeOffset,
                    k = e.progressLoadOffsetLeft,
                    N = void 0 === k ? "0" : k,
                    P = e.isTryPlay,
                    T = void 0 !== P && P,
                    O = e.tryPlayTipsNode,
                    C = 0,
                    D = "0",
                    M = "0",
                    I = !1;
                  if (t) {
                    var j = o + L;
                    (C = j >= t.interval ? t.interval : j),
                      (D = "".concat(((o / t.interval) * 100).toFixed(2), "%")),
                      (M = "".concat(((i / t.interval) * 100).toFixed(2), "%")),
                      (I = t.isFan);
                  }
                  return w.a.createElement(
                    "div",
                    { className: "player__ft" },
                    w.a.createElement(
                      "a",
                      { onClick: a, className: "btn_big_prev" },
                      w.a.createElement(
                        "span",
                        { className: "icon_txt" },
                        "\u4e0a\u4e00\u9996"
                      )
                    ),
                    w.a.createElement(
                      "a",
                      {
                        onClick: n,
                        className: H()("btn_big_play", {
                          "btn_big_play--pause": 1 === l,
                        }),
                      },
                      w.a.createElement(
                        "span",
                        { className: "icon_txt" },
                        "\u64ad\u653e"
                      )
                    ),
                    w.a.createElement(
                      "a",
                      { onClick: r, className: "btn_big_next" },
                      w.a.createElement(
                        "span",
                        { className: "icon_txt" },
                        "\u4e0b\u4e00\u9996"
                      )
                    ),
                    w.a.createElement(
                      "div",
                      { className: "player_music" },
                      t &&
                        w.a.createElement(
                          x.Fragment,
                          null,
                          w.a.createElement(
                            "div",
                            {
                              className: "player_music__info",
                              style: { paddingRight: T ? 300 : 90 },
                            },
                            w.a.createElement(
                              "a",
                              {
                                title: "Back at One",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href: Object($.d)({
                                  id: t.id,
                                  mid: t.mid,
                                  songtype: t.type,
                                }),
                              },
                              t.title
                            ),
                            " ",
                            "- ",
                            w.a.createElement(G.a, { singers: t.singer }),
                            T &&
                              (O ||
                                w.a.createElement(
                                  "a",
                                  { className: "player_music__try" },
                                  "\u8bd5\u542c\u4e2d\uff0c\u5b8c\u6574\u64ad\u653e\u9700\u8981\u5f00\u901a\u4f1a\u5458"
                                ))
                          ),
                          w.a.createElement(
                            "div",
                            { className: "player_music__time" },
                            S.j.makePlayTime(C),
                            " / ",
                            t.playTime
                          )
                        ),
                      w.a.createElement(
                        "div",
                        { ref: _, onClick: c, className: "player_progress" },
                        w.a.createElement(
                          "div",
                          { className: "player_progress__inner" },
                          w.a.createElement("div", {
                            className: "player_progress__load",
                            style: { width: M, marginLeft: N },
                          }),
                          w.a.createElement(
                            "div",
                            {
                              className: "player_progress__play",
                              style: { width: D, marginLeft: N },
                            },
                            w.a.createElement("i", {
                              onClick: this.handleClickprogressPlay,
                              onMouseDown: s,
                              className: "player_progress__dot",
                            })
                          )
                        )
                      )
                    ),
                    0 === u &&
                      w.a.createElement(
                        "a",
                        {
                          onClick: m,
                          className: "btn_big_style_list",
                          title: "\u5217\u8868\u5faa\u73af",
                        },
                        w.a.createElement(
                          "span",
                          { className: "icon_txt" },
                          "\u5217\u8868\u5faa\u73af"
                        )
                      ),
                    2 === u &&
                      w.a.createElement(
                        "a",
                        {
                          onClick: m,
                          className: "btn_big_style_random",
                          title: "\u968f\u673a\u64ad\u653e",
                        },
                        w.a.createElement(
                          "span",
                          { className: "icon_txt" },
                          "\u968f\u673a\u64ad\u653e"
                        )
                      ),
                    1 === u &&
                      w.a.createElement(
                        "a",
                        {
                          onClick: m,
                          className: "btn_big_style_single",
                          title: "\u5355\u66f2\u5faa\u73af",
                        },
                        w.a.createElement(
                          "span",
                          { className: "icon_txt" },
                          "\u5355\u66f2\u5faa\u73af"
                        )
                      ),
                    3 === u &&
                      w.a.createElement(
                        "a",
                        {
                          onClick: m,
                          className: "btn_big_style_order",
                          title: "\u987a\u5e8f\u5faa\u73af",
                        },
                        w.a.createElement(
                          "span",
                          { className: "icon_txt" },
                          "\u987a\u5e8f\u5faa\u73af"
                        )
                      ),
                    w.a.createElement(
                      "a",
                      {
                        onClick: d,
                        className: H()("btn_big_like", {
                          "btn_big_like--like": I,
                        }),
                      },
                      w.a.createElement(
                        "span",
                        { className: "icon_txt" },
                        "\u559c\u6b22"
                      )
                    ),
                    w.a.createElement(
                      "a",
                      {
                        onClick: this.handleDownloaing,
                        className: "btn_big_down",
                      },
                      w.a.createElement(
                        "span",
                        { className: "icon_txt" },
                        "\u4e0b\u8f7d"
                      )
                    ),
                    w.a.createElement(
                      "a",
                      {
                        onClick: f,
                        className: H()("btn_big_only", {
                          "btn_big_only--on": y,
                        }),
                      },
                      w.a.createElement(
                        "span",
                        { className: "icon_txt" },
                        y
                          ? "\u5173\u95ed\u7eaf\u6d01\u6a21\u5f0f"
                          : "\u6253\u5f00\u7eaf\u6d01\u6a21\u5f0f"
                      )
                    ),
                    w.a.createElement(ce.a, {
                      songMid: t && t.mid,
                      commentCount: p,
                    }),
                    w.a.createElement(
                      "div",
                      { onClick: b, className: "player_progress player_voice" },
                      w.a.createElement(
                        "a",
                        {
                          onClick: E,
                          className: H()("btn_big_voice", {
                            "btn_big_voice--no": 0 === h,
                          }),
                        },
                        w.a.createElement(
                          "span",
                          { className: "icon_txt" },
                          0 === h
                            ? "\u6253\u5f00\u58f0\u97f3"
                            : "\u5173\u95ed\u58f0\u97f3"
                        )
                      ),
                      w.a.createElement(
                        "div",
                        {
                          onClick: b,
                          ref: v,
                          className: "player_progress__inner",
                        },
                        w.a.createElement(
                          "div",
                          {
                            className: "player_progress__play",
                            style: { width: "".concat(100 * h, "%") },
                          },
                          w.a.createElement("i", {
                            onMouseDown: g,
                            className: "player_progress__dot",
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
        })(x.PureComponent),
        de = (function () {
          var e = s()(
            N.a.mark(function e(t) {
              var n,
                a,
                r,
                l,
                o,
                i,
                s,
                c,
                u = arguments;
              return N.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = u.length > 1 && void 0 !== u[1] && u[1]),
                        t && 0 !== t.length)
                      ) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt("return", null);
                    case 3:
                      return (
                        (a = new Date().getUTCMilliseconds()),
                        (a = String(
                          (Math.round(2147483647 * Math.random()) * a) % 1e10
                        )),
                        (r = []),
                        (l = []),
                        (o = []),
                        (i = 0),
                        t.forEach(function (e) {
                          var t,
                            a,
                            s =
                              !(
                                null !== (t = e.action) &&
                                void 0 !== t &&
                                t.play
                              ) && e.tryPlay;
                          if (n || !s) {
                            var c, u;
                            if (
                              (r.push(e.mid),
                              l.push(
                                (null === e || void 0 === e
                                  ? void 0
                                  : e.type) || 0
                              ),
                              (null === (a = e.action) ||
                                void 0 === a ||
                                !a.play) &&
                                e.tryPlay)
                            )
                              o.push(
                                "RS02".concat(
                                  (null === (c = e.vs) || void 0 === c
                                    ? void 0
                                    : c[0]) ||
                                    (null === (u = e.file) || void 0 === u
                                      ? void 0
                                      : u.media_mid),
                                  ".mp3"
                                )
                              );
                            e.ctx && (i = 1);
                          }
                        }),
                        (s = S.i.getUin ? S.i.getUin().toString() : ""),
                        (c = {
                          guid: a,
                          songmid: r,
                          songtype: l,
                          uin: s,
                          loginflag: 1,
                          platform: "20",
                        }),
                        i && (c.ctx = i),
                        o.length && (c.filename = o),
                        e.abrupt(
                          "return",
                          Object(S.h)()
                            .request([
                              {
                                module: "vkey.GetVkeyServer",
                                method: "CgiGetVkey",
                                param: c,
                              },
                            ])
                            .then(function (e) {
                              try {
                                return e[0].data;
                              } catch (t) {}
                            })
                        )
                      );
                    case 15:
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
        pe = (function () {
          function e(t) {
            var n = this;
            d()(this, e), fe.call(this);
            var a = t.songList,
              r = document.createElement("audio");
            (r.preload = "auto"),
              (r.style.width = "0"),
              (r.style.height = "0"),
              document.body.appendChild(r),
              (this.audio = r),
              this.addPlayList(a),
              this.audio.addEventListener("play", function () {
                n.playPromise ||
                  ((n.playType = 2),
                  (n.isPlay = !0),
                  n.onplayCallback.forEach(function (e) {
                    e();
                  }));
              }),
              this.audio.addEventListener("pause", function () {
                (n.playType = 1),
                  (n.isPlay = !1),
                  n.onpauseCallback.forEach(function (e) {
                    e();
                  });
              }),
              this.audio.addEventListener("timeupdate", function () {
                var e = n.audio.currentTime;
                n.ontimeupdateCallback.forEach(function (t) {
                  t(e);
                });
              }),
              this.audio.addEventListener("loadedmetadata", function () {
                n.onloadedmetadataCallback.forEach(function (e) {
                  e();
                });
              }),
              this.audio.addEventListener("ended", function () {
                (n.playType = 0),
                  n.onendedCallback.forEach(function (e) {
                    e();
                  });
              }),
              this.audio.addEventListener("progress", function () {
                n.onprogressCallback.forEach(function (e) {
                  e(n.audio.buffered);
                });
              }),
              this.audio.addEventListener("error", function (e) {
                n.onerrorCallback.forEach(function (t) {
                  t(e, n.audio.error);
                });
              });
          }
          return (
            f()(e, [
              {
                key: "loop",
                get: function () {
                  return this.audio.loop;
                },
                set: function (e) {
                  this.audio.loop = e;
                },
              },
              {
                key: "duration",
                get: function () {
                  return this.audio.duration;
                },
              },
              {
                key: "currentTime",
                get: function () {
                  return this.audio.currentTime;
                },
                set: function (e) {
                  this.audio.currentTime = e;
                },
              },
              {
                key: "volume",
                get: function () {
                  return this.audio.volume;
                },
                set: function (e) {
                  "number" === typeof e &&
                    e >= 0 &&
                    e <= 1 &&
                    (this.audio.volume = e);
                },
              },
              {
                key: "play",
                value: function (e, t) {
                  var n = this;
                  if (e) {
                    var a,
                      r = e.mid;
                    this.currentMid !== e.mid && (this.currentMid = r),
                      isNaN(
                        null === (a = this.audio) || void 0 === a
                          ? void 0
                          : a.duration
                      ) || (this.audio.currentTime = 0);
                    var l = this.playUrlMap[r];
                    l
                      ? ((this.audio.src = l), t || this.audio.play())
                      : this.addPlayList([e], !0).then(function (e) {
                          (l = e[r]), (n.audio.src = l), n.audio.play();
                        });
                  } else {
                    if (2 === this.playType) return void this.pause();
                    this.audio.play();
                  }
                },
              },
              {
                key: "pause",
                value: function () {
                  this.audio.pause();
                },
              },
              {
                key: "onplay",
                value: function (e) {
                  this.onplayCallback.push(e);
                },
              },
              {
                key: "onpause",
                value: function (e) {
                  this.onpauseCallback.push(e);
                },
              },
              {
                key: "ontimeupdate",
                value: function (e) {
                  this.ontimeupdateCallback.push(e);
                },
              },
              {
                key: "onprogress",
                value: function (e) {
                  this.onprogressCallback.push(e);
                },
              },
              {
                key: "onloadedmetadata",
                value: function (e) {
                  this.onloadedmetadataCallback.push(e);
                },
              },
              {
                key: "onended",
                value: function (e) {
                  this.onendedCallback.push(e);
                },
              },
              {
                key: "onerror",
                value: function (e) {
                  this.onerrorCallback.push(e);
                },
              },
              {
                key: "clear",
                value: function () {
                  this.pause(),
                    (this.audio.currentTime = 0),
                    (this.audio.src = null),
                    (this.currentMid = null),
                    (this.playType = 0);
                },
              },
              {
                key: "ldealUrl",
                value: function (e) {
                  var t = this;
                  if (e && e.midurlinfo) {
                    var n =
                      e.thirdip && e.thirdip[0]
                        ? e.thirdip[0]
                        : "http://dl.stream.qqmusic.qq.com/";
                    e.midurlinfo.forEach(function (e, a) {
                      if (e) {
                        var r = e.purl;
                        r && !/^https?:\/\//i.test(r) && (r = n + r),
                          (t.playUrlMap[e.songmid] = r);
                      }
                    });
                  }
                },
              },
            ]),
            e
          );
        })(),
        fe = function () {
          var e = this;
          (this.onplayCallback = []),
            (this.onendedCallback = []),
            (this.onpauseCallback = []),
            (this.onloadedmetadataCallback = []),
            (this.ontimeupdateCallback = []),
            (this.onprogressCallback = []),
            (this.onerrorCallback = []),
            (this.playType = 0),
            (this.playUrlMap = {}),
            (this.addPlayList = function (t) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              return de(t, n).then(function (t) {
                return e.ldealUrl(t), e.playUrlMap;
              });
            }),
            (this.destroy = function () {
              document.body.removeChild(e.audio);
            });
        },
        ye = pe,
        he = n(394),
        ge = n(468);
      n(540), n(447), n(443);
      function _e(e, t) {
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
      function ve(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? _e(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : _e(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function be(e) {
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
            a = L()(e);
          if (t) {
            var r = L()(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return b()(this, n);
        };
      }
      var Ee = {},
        Le = function (e) {
          var t = e.func;
          return w.a.createElement(
            "a",
            { className: "player_music__try", onClick: t },
            "\u8bd5\u542c\u4e2d\uff0c\u5b8c\u6574\u64ad\u653e\u9700\u8981\u5f00\u901a\u4f1a\u5458"
          );
        },
        ke = (function (e) {
          _()(n, e);
          var t = be(n);
          function n() {
            var e, a;
            d()(this, n);
            for (var r = arguments.length, l = new Array(r), i = 0; i < r; i++)
              l[i] = arguments[i];
            return b()(
              a,
              ((e = a = t.call.apply(t, [this].concat(l))),
              (a.state = {
                isPureMode: !1,
                playSong: null,
                songList: [],
                playStatus: 0,
                currentTime: 0,
                progressTime: 0,
                playType: 0,
                currentMid: null,
                maskImage: null,
                lyric: null,
                translateY: 0,
                isTrans: !0,
                showTransBtn: !1,
                currentIndex: 0,
                bacthFan: !1,
                commentCount: null,
                volume: 1,
              }),
              (a.playTypeEnum = [0, 1, 2, 3]),
              (a.hasInteract = !1),
              (a.down = !1),
              (a.currentTime = 0),
              (a.oldClientX = 0),
              (a.currentIndex = -1),
              (a.selectArr = []),
              (a.volume = 1),
              (a.lyricRollValve = !1),
              (a.originalY = 0),
              (a.originalTop = 0),
              (a.timerValve = null),
              (a.unblock = null),
              (a.onerrorCallback = []),
              (a.isShouldAlert = !1),
              (a.tryPlayBeginTime = 0),
              (a.progressLoadOffsetLeft = "0"),
              (a.handleYMod = function () {
                var e = (S.f.get("y_mod") || "").split("|").map(function (e) {
                    return parseFloat(e) ? parseFloat(e) : void 0;
                  }),
                  t = u()(e, 3),
                  n = t[0],
                  r = void 0 === n ? 0 : n,
                  l = t[1],
                  o = void 0 === l ? 0.5 : l,
                  i = t[2],
                  s = void 0 === i ? 1 : i;
                a.playTypeEnum.includes(r) || (r = 0),
                  0 !== o && (o < 0 || o > 1) && (o = 0.5),
                  [0, 1].includes(s) || (s = 1),
                  a.setState({ volume: o, playType: r, isTrans: !!s }),
                  (a.volume = o),
                  (a.player.volume = o);
              }),
              (a.handleSetYMod = function (e, t) {
                if (t) {
                  var n = a.state,
                    r = n.playType,
                    l = n.volume,
                    o = Number(a.state.isTrans);
                  "isTrans" === t && [0, 1].includes(e)
                    ? (o = e)
                    : "volume" === t && e <= 1 && e >= 0
                    ? (l = e)
                    : "playType" === t && a.playTypeEnum.includes(e) && (r = e),
                    S.f.set(
                      "y_mod",
                      "".concat(r, "|").concat(l, "|").concat(o)
                    );
                }
              }),
              (a.handleIndirectAutoPlay = function () {
                document.addEventListener(
                  "click",
                  function () {
                    var e;
                    a.hasInteract = !0;
                    var t =
                      (null === (e = a.state.songList) || void 0 === e
                        ? void 0
                        : e.length) || 0;
                    1 !== a.state.playStatus && t && a.player.play();
                  },
                  { once: !0 }
                ),
                  setTimeout(function () {
                    var e,
                      t =
                        (null === (e = a.state.songList) || void 0 === e
                          ? void 0
                          : e.length) || 0;
                    if (1 !== a.state.playStatus && !a.hasInteract && t)
                      var n = Object(M.b)({
                        title: "QQ\u97f3\u4e50\u63d0\u9192\u60a8",
                        subtit:
                          "\u7531\u4e8e\u60a8\u7684\u6d4f\u89c8\u5668\u8bbe\u7f6e\uff0c\u97f3\u4e50\u65e0\u6cd5\u81ea\u52a8\u64ad\u653e\uff0c\u8bf7\u624b\u52a8\u70b9\u51fb\u64ad\u653e\u3002",
                        type: "warning",
                        btn: [
                          {
                            fn: function () {
                              n();
                            },
                            text: "\u6211\u77e5\u9053\u4e86",
                            green: !0,
                          },
                        ],
                      });
                  }, 1500);
              }),
              (a.getSongLick = (function () {
                var e = s()(
                  N.a.mark(function e(t) {
                    var n;
                    return N.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), Object(T.k)(t);
                          case 2:
                            (n = e.sent) && a.setState({ songList: n });
                          case 4:
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
              (a.handleChangeAddSongPlayList = function () {
                var e = a.state.songList;
                a.getSongLick(e);
              }),
              (a.setTranslateY = function () {
                if (a.lyricElment && !a.lyricRollValve) {
                  var e = a.state.isPureMode,
                    t = e ? 290 : 102,
                    n = a.lyricElment.offsetTop,
                    r = 0;
                  n >= t && (r = n - t),
                    (r += (980 - document.body.clientHeight) / (e ? 5 : 4)) <
                      0 && (r = 0),
                    a.setState({ translateY: r });
                }
              }),
              (a.handleDragLyricMouseDown = function (e) {
                e.preventDefault(),
                  e.stopPropagation(),
                  a.originalTop || (a.originalTop = a.state.translateY),
                  (a.originalY = e.pageY),
                  (a.lyricRollValve = !0),
                  document.addEventListener(
                    "mouseup",
                    a.handleDragLyricMouseUp
                  ),
                  document.addEventListener(
                    "mousemove",
                    a.handleDragLyricMouseMove
                  );
              }),
              (a.handleDragLyricMouseUp = function () {
                var e = a.state.translateY;
                (a.originalTop = e < 0 ? 0 : e),
                  a.timerValve && clearTimeout(a.timerValve),
                  (a.timerValve = setTimeout(function () {
                    (a.lyricRollValve = !1), (a.originalTop = 0);
                  }, 3e3)),
                  document.removeEventListener(
                    "mousemove",
                    a.handleDragLyricMouseMove
                  ),
                  document.removeEventListener(
                    "mouseup",
                    a.handleDragLyricMouseUp
                  );
              }),
              (a.handleDragLyricMouseMove = function (e) {
                var t = a.originalY - e.pageY + a.originalTop;
                a.setState({ translateY: t < 0 ? 0 : t });
              }),
              (a.handleOpenLang = function () {
                if (-1 !== a.currentIndex) {
                  var e = a.state.isTrans,
                    t = null;
                  (t = e ? a.lyricData.lyricList : a.lyricData.transList),
                    a.setState({ isTrans: !e, lyric: t }, a.setTranslateY),
                    a.handleSetYMod(Number(!e), "isTrans");
                }
              }),
              (a.setBackground = function (e, t) {
                var n = S.j.getAlbumPic(e);
                a.setState({ maskImage: n }, function () {
                  document.body.style.backgroundColor = "#".concat(t);
                });
              }),
              (a.checkPlay = function (e, t, n) {
                var r,
                  l = a.state.songList,
                  o = e[t];
                if (o) {
                  if (
                    -1 !== a.currentIndex &&
                    (null === (r = l[a.currentIndex]) || void 0 === r
                      ? void 0
                      : r.mid) === (null === o || void 0 === o ? void 0 : o.mid)
                  )
                    return (
                      n || 2 === a.player.playType || a.player.play(),
                      (a.currentIndex = t),
                      void a.setState({ currentIndex: t })
                    );
                  Object(O.a)({
                    mid: o.mid,
                    songid: o.id,
                    songtype: o.type,
                  }).then(function (e) {
                    a.lyricData = e;
                    try {
                      var t = e.transList && e.transList.length > 0;
                      a.setState({
                        showTransBtn: t,
                        isTrans: !0,
                        lyric: t ? e.transList : e.lyricList,
                      });
                    } catch (n) {}
                  }),
                    Object(T.e)([{ id: o.id, type: o.type }]).then(function (
                      e
                    ) {
                      a.setState({ commentCount: e[o.id] || null });
                    });
                  var i = o.album.mid;
                  Ee[i]
                    ? a.setBackground(i, Ee[i])
                    : Object(T.d)(o.album.mid).then(function (e) {
                        (Ee[i] = e.color), a.setBackground(i, e.color);
                      }),
                    (a.currentIndex = t),
                    (a.tryPlayBeginTime = 0),
                    (a.progressLoadOffsetLeft = "0"),
                    a.setState({
                      progressTime: 0,
                      currentTime: 0,
                      currentIndex: t,
                      translateY: 0,
                      lyric: null,
                      commentCount: null,
                      volume: a.volume,
                    }),
                    a.handleTryPlayTime(o),
                    a.player.play(o, n),
                    (a.playSongData.index = t),
                    S.f.setJson("playSongData", a.playSongData);
                } else a.handleClearAllResetState();
              }),
              (a.handleTryPlayTime = function (e) {
                var t;
                (null !== (t = e.action) && void 0 !== t && t.play) ||
                  !e.tryPlay ||
                  ((a.tryPlayBeginTime = parseInt(
                    "".concat(e.file.b_30s / 1e3),
                    10
                  )),
                  (a.progressLoadOffsetLeft = "".concat(
                    ((a.tryPlayBeginTime / e.interval) * 100).toFixed(2),
                    "%"
                  )),
                  a.handleTryPlayAlert(e));
              }),
              (a.handleTryPlayAlert = function (e) {
                a.isShouldAlert &&
                  (Object(C.a)(e),
                  (a.isShouldAlert = !1),
                  (a.playSongData.payAlertTimestamp = new Date().valueOf()));
              }),
              (a.handleTryPlayAlertOrNot = function () {
                var e = a.playSongData.payAlertTimestamp,
                  t = Object($.f)(new Date().valueOf()),
                  n = Object($.f)(e);
                a.isShouldAlert = !n || t > n;
              }),
              (a.handleChangePlay = function (e, t, n, r) {
                var l = t || a.state.songList;
                a.currentIndex !== e || n
                  ? a.checkPlay(l, e, r)
                  : a.player.play();
              }),
              (a.handleCurrentPlay = function () {
                -1 !== a.currentIndex && a.handleChangePlay(a.currentIndex);
              }),
              (a.handlePrevPlay = function () {
                if (-1 !== a.currentIndex && a.state.songList) {
                  var e = a.state,
                    t = e.songList,
                    n = e.playType,
                    r = a.currentIndex;
                  if (2 === n)
                    do {
                      r = Math.floor(
                        ((null === t || void 0 === t ? void 0 : t.length) ||
                          0) * Math.random()
                      );
                    } while (
                      null !== t &&
                      void 0 !== t &&
                      t.length &&
                      r === a.currentIndex
                    );
                  else 0 === r ? (r = t.length - 1) : r--;
                  a.handleChangePlay(r);
                }
              }),
              (a.handleNextPlay = function () {
                var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                if (-1 !== a.currentIndex && a.state.songList) {
                  var t = a.state,
                    n = t.songList,
                    r = t.playType,
                    l = a.currentIndex;
                  if (!e || 3 !== r || l !== n.length - 1) {
                    if (2 === r)
                      do {
                        l = Math.floor(
                          ((null === n || void 0 === n ? void 0 : n.length) ||
                            0) * Math.random()
                        );
                      } while (
                        null !== n &&
                        void 0 !== n &&
                        n.length &&
                        l === a.currentIndex
                      );
                    else
                      ((!e || (0 !== r && 3 !== r)) && e) ||
                        (l === n.length - 1 ? (l = 0) : l++);
                    a.handleChangePlay(l);
                  }
                }
              }),
              (a.handleMute = function (e) {
                e.stopPropagation(),
                  0 !== a.state.volume
                    ? (a.setState({ volume: 0 }), (a.player.volume = 0))
                    : ((a.player.volume = a.volume),
                      a.setState({ volume: a.volume }));
              }),
              (a.handleVolumeMouseUp = function () {
                window.removeEventListener(
                  "mouseup",
                  a.handleVolumeMouseUp,
                  !1
                ),
                  window.removeEventListener(
                    "mousemove",
                    a.handleVolumeMousemove,
                    !1
                  ),
                  (a.player.volume = a.volume);
              }),
              (a.handleVolumeMousemove = function (e) {
                e.preventDefault(), e.stopPropagation();
                var t = K(e, a.volumeProgressDom);
                (a.volume = t), a.setState({ volume: t });
              }),
              (a.handleVolumeMouseDown = function () {
                window.addEventListener(
                  "mousemove",
                  a.handleVolumeMousemove,
                  !1
                ),
                  window.addEventListener("mouseup", a.handleVolumeMouseUp, !1);
              }),
              (a.handleSetVolume = function (e) {
                var t = K(e, a.volumeProgressDom);
                a.setState({ volume: t }),
                  (a.volume = t),
                  (a.player.volume = t),
                  a.handleSetYMod(t, "volume");
              }),
              (a.handleMousemove = function (e) {
                e.preventDefault(), e.stopPropagation();
                var t = a.state.songList,
                  n = K(e, a.progressDom) * t[a.currentIndex].interval;
                a.setState({ currentTime: n });
              }),
              (a.handleMouseDown = function (e) {
                -1 !== a.currentIndex &&
                  (e.preventDefault(),
                  e.stopPropagation(),
                  (a.down = !0),
                  window.addEventListener("mousemove", a.handleMousemove, !1),
                  window.addEventListener("mouseup", a.handleMouseUp, !1));
              }),
              (a.handleMouseUp = function () {
                window.removeEventListener("mouseup", a.handleMouseUp, !1),
                  window.removeEventListener(
                    "mousemove",
                    a.handleMousemove,
                    !1
                  ),
                  (a.down = !1),
                  (a.player.currentTime = a.currentTime);
              }),
              (a.handleSeek = function (e) {
                if (-1 !== a.currentIndex) {
                  var t = a.state.songList,
                    n = K(e, a.progressDom) * t[a.currentIndex].interval;
                  a.setState({ currentTime: n }), (a.player.currentTime = n);
                }
              }),
              (a.handleSetPlayType = function () {
                var e = a.state.playType;
                3 === e ? (e = 0) : e++,
                  (a.player.loop = 1 === e),
                  a.setState({ playType: e }),
                  a.handleSetYMod(e, "playType");
              }),
              (a.handleDeleteSong = function (e, t) {
                if (-1 !== a.currentIndex) {
                  var n = !1;
                  if (
                    ("[object Array]" === Object.prototype.toString.call(e) &&
                      e.length === a.state.songList.length &&
                      (n = !0),
                    t || n)
                  )
                    a.handleClearAllResetState();
                  else {
                    var r = a.state.songList,
                      l = o()(r),
                      i = "number" === typeof e ? [e] : e;
                    if (0 !== i.length) {
                      var s = h()(a).currentIndex;
                      if (
                        ((l = l.filter(function (e, t) {
                          var n = -1 === i.indexOf(t);
                          return n || (s > t && s--), n;
                        }))[s] || (s = 0),
                        0 !== l.length)
                      ) {
                        var c = 2 !== a.player.playType;
                        a.handleChangePlay(s, l, !0, c),
                          (a.playSongData.songList = l),
                          S.f.setJson("playSongData", a.playSongData),
                          a.setState({ songList: l }, a.getbacthFan);
                      } else a.handleClearAllResetState();
                    } else
                      I.a.show({
                        type: "warning",
                        msg: "\u8bf7\u9009\u62e9\u6b4c\u66f2",
                      });
                  }
                }
              }),
              (a.getPlayLyricElment = function (e) {
                a.lyricElment = e;
              }),
              (a.setListLick = function (e, t, n) {
                return a.state.songList.map(function (a, r) {
                  var l = a;
                  return (
                    -1 !== e.indexOf(r) &&
                      (((l = ve({}, l)).isFan = t), n && n.push(l)),
                    l
                  );
                });
              }),
              (a.handleAddLike = (function () {
                var e = s()(
                  N.a.mark(function e(t) {
                    var n, r, l, o, i, s;
                    return N.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (-1 !== a.currentIndex) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt("return");
                          case 2:
                            if (
                              ((n = a.state),
                              (r = n.songList),
                              (l = n.bacthFan),
                              (o = []),
                              0 !==
                                (i = Array.isArray(t) ? t : [a.currentIndex])
                                  .length)
                            ) {
                              e.next = 9;
                              break;
                            }
                            return (
                              I.a.show({
                                type: "warning",
                                msg: "\u8bf7\u9009\u62e9\u6b4c\u66f2",
                              }),
                              e.abrupt("return")
                            );
                          case 9:
                            return (
                              (s = 1 === i.length ? r[i[0]].isFan : l),
                              a.setState(
                                { songList: a.setListLick(i, !s, o) },
                                function () {
                                  a.selectArr.length > 0 && a.getbacthFan();
                                }
                              ),
                              (e.next = 13),
                              Object(T.a)(201, o, s)
                            );
                          case 13:
                            e.sent ||
                              a.setState(
                                { songList: a.setListLick(i, !s) },
                                function () {
                                  a.selectArr.length > 0 && a.getbacthFan();
                                }
                              );
                          case 15:
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
              (a.handleChangeSelect = function (e, t) {
                (a.selectSongList = e), (a.selectArr = t), a.getbacthFan();
              }),
              (a.bacthAddLick = function () {
                a.handleAddLike(a.selectArr);
              }),
              (a.bacthDelete = function () {
                a.handleDeleteSong(a.selectArr), (a.selectArr = []);
              }),
              (a.progressDomRef = function (e) {
                a.progressDom = e;
              }),
              (a.volumeProgressDomRef = function (e) {
                a.volumeProgressDom = e;
              }),
              (a.bacthDownloadSong = function () {
                -1 !== a.currentIndex &&
                  (0 !== a.selectArr.length
                    ? a.handleDowLoadSong(a.selectSongList)
                    : I.a.show({
                        type: "warning",
                        msg: "\u8bf7\u9009\u62e9\u6b4c\u66f2",
                      }));
              }),
              (a.handleDowLoadSong = function (e) {
                -1 !== a.currentIndex &&
                  Object(C.d)(e || [a.state.songList[a.currentIndex]]);
              }),
              (a.addPlayList = function (e) {
                -1 !== a.currentIndex &&
                  (0 !== a.selectArr.length
                    ? Object(j.b)(
                        ve(
                          ve({}, e),
                          {},
                          {
                            element: w.a.createElement(D.a, {
                              isPlayList: !0,
                              songList: a.selectSongList,
                            }),
                            className: "mod_operate_menu",
                          }
                        )
                      )
                    : I.a.show({
                        type: "warning",
                        msg: "\u8bf7\u9009\u62e9\u6b4c\u66f2",
                      }));
              }),
              (a.handleSetPureMode = function () {
                var e = a.state.isPureMode;
                a.setState({ isPureMode: !e }, a.setTranslateY);
              }),
              (a.handleClearSongList = function () {
                var e = a.state.songList;
                if (e && 0 !== e.length)
                  var t = Object(M.b)({
                    title: "QQ\u97f3\u4e50",
                    msg: "\u786e\u5b9a\u8981\u6e05\u7a7a\u5217\u8868\uff1f",
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
                          a.handleDeleteSong(null, !0), t();
                        },
                        text: "\u786e\u8ba4",
                      },
                    ],
                  });
              }),
              (a.handleClearAllResetState = function () {
                a.setState({
                  lyric: null,
                  commentCount: null,
                  currentIndex: 0,
                  songList: null,
                  playStatus: 0,
                }),
                  (a.currentIndex = -1),
                  (a.tryPlayBeginTime = 0),
                  (a.progressLoadOffsetLeft = "0"),
                  a.player.clear(),
                  S.f.setJson("playSongData", null);
              }),
              (a.handleClickTryTips = function () {
                Object(ge.buyMonth)();
              }),
              (a.handleUserInfoLoaded = function () {
                var e = R.a.isVip();
                a.playSongData.isvip !== e && Z(a.playSongData, !1, !0);
              }),
              e)
            );
          }
          return (
            f()(n, [
              {
                key: "componentDidMount",
                value: (function () {
                  var e = s()(
                    N.a.mark(function e() {
                      var t,
                        n,
                        a = this;
                      return N.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (window.name = "QQMusicPlayer"),
                                  (n = S.f.getJson("playSongData") || {}),
                                  (this.playSongData = n),
                                  (e.next = 5),
                                  Z(this.playSongData)
                                );
                              case 5:
                                this.setState({ songList: n.songList }),
                                  this.handleTryPlayAlertOrNot(),
                                  S.f.changeStorage(function (e) {
                                    if ("playSongData" === e.key) {
                                      a.playSongData = e.newValue || {};
                                      var t = a.playSongData,
                                        n = t.songList,
                                        r = t.index;
                                      a.playSongData.isPlay &&
                                        a.handleChangePlay(r, n, !0),
                                        a.setState({ songList: n }),
                                        !n &&
                                          a.state.playStatus &&
                                          (a.handleCurrentPlay(),
                                          (a.currentIndex = -1));
                                    }
                                  }),
                                  (this.unblock = this.props.history.block(
                                    function (e) {
                                      if (
                                        a.props.location.pathname.includes(
                                          Object(A.d)(A.a.PLAYER)
                                        )
                                      )
                                        return (
                                          window.open(e.pathname, "_blank"), !1
                                        );
                                    }
                                  )),
                                  this.initPlayer(n.songList),
                                  S.g.doPvg(Object(A.d)(A.a.PLAYER)),
                                  null === (t = window.SPD) ||
                                    void 0 === t ||
                                    t.init({ flag: [1649, 12, 9] }),
                                  this.handleIndirectAutoPlay(),
                                  this.handleYMod();
                              case 14:
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
                key: "componentWillUnmount",
                value: function () {
                  (window.name = ""),
                    (document.body.style.backgroundColor = "#fafafa"),
                    this.player.destroy(),
                    this.unblock && this.unblock();
                },
              },
              {
                key: "initPlayer",
                value: function (e) {
                  if (
                    ((this.player = new ye({ songList: e })),
                    (this.volume = this.player.volume),
                    this.initPlayerEvent(),
                    e && e.length > 0)
                  ) {
                    this.getSongLick(e);
                    var t = this.playSongData.index || 0;
                    e && e.length > 0 && this.handleChangePlay(t, e);
                  }
                },
              },
              {
                key: "initPlayerEvent",
                value: function () {
                  var e = this;
                  this.player.onplay(function () {
                    var t = e.state.songList;
                    if (t) {
                      var n = t[e.currentIndex];
                      e.setState({
                        playStatus: 1,
                        currentMid:
                          (null === n || void 0 === n ? void 0 : n.mid) || "",
                      });
                    }
                  }),
                    this.player.onpause(function () {
                      e.setState({ playStatus: 0, currentMid: null });
                    }),
                    this.player.ontimeupdate(function (t) {
                      e.down ||
                        ((e.currentTime = t),
                        e.setState(
                          { currentTime: e.currentTime },
                          e.setTranslateY
                        ));
                    }),
                    this.player.onprogress(function (t) {
                      var n = 0;
                      -1 !== e.currentIndex && t.length && (n = t.end(0)),
                        e.setState({ progressTime: n });
                    }),
                    this.player.onended(function () {
                      e.handleNextPlay(!0);
                    }),
                    this.player.onerror(function (t, n) {
                      var a = e.state,
                        r = a.currentIndex,
                        l = a.songList;
                      null !== l &&
                        void 0 !== l &&
                        l.length &&
                        I.a.show({
                          type: "warning",
                          msg: "\u64ad\u653e\u5931\u8d25\uff01\u5f53\u524d\u7f51\u7edc\u7e41\u5fd9\uff0c\u8bf7\u60a8\u7a0d\u540e\u518d\u8bd5\uff01",
                        }),
                        n.code === n.MEDIA_ERR_SRC_NOT_SUPPORTED &&
                          r <
                            (null === l || void 0 === l ? void 0 : l.length) -
                              1 &&
                          e.handleNextPlay();
                    });
                },
              },
              {
                key: "getbacthFan",
                value: function () {
                  var e = this.selectArr;
                  if (0 !== e.length) {
                    for (
                      var t = this.state.songList, n = 0;
                      n < e.length;
                      n++
                    ) {
                      if (!t[e[n]].isFan)
                        return void this.setState({ bacthFan: !1 });
                    }
                    this.setState({ bacthFan: !0 });
                  } else this.setState({ bacthFan: !1 });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state,
                    t = e.isPureMode,
                    n = e.songList,
                    a = e.maskImage,
                    r = e.playStatus,
                    l = e.currentMid,
                    o = e.currentTime,
                    i = e.progressTime,
                    s = e.playType,
                    c = e.lyric,
                    u = e.translateY,
                    m = e.isTrans,
                    d = e.showTransBtn,
                    p = e.currentIndex,
                    f = e.bacthFan,
                    y = e.commentCount,
                    h = e.volume,
                    g = n && n[p];
                  return w.a.createElement(
                    x.Fragment,
                    null,
                    w.a.createElement(
                      "h1",
                      { className: "player_logo" },
                      w.a.createElement(
                        "a",
                        { href: "/", target: "_blank" },
                        w.a.createElement("img", {
                          className: "player_logo__pic",
                          srcSet:
                            "//y.qq.com/mediastyle/yqq/img/player_logo@2x.png?max_age=2592000 2x",
                          src: "//y.qq.com/mediastyle/yqq/img/player_logo.png?max_age=2592000",
                          alt: "QQ\u97f3\u4e50",
                        })
                      )
                    ),
                    w.a.createElement("div", { className: "bg_player_mask" }),
                    w.a.createElement("div", {
                      className: "bg_player",
                      style: {
                        display: a ? "block" : "none",
                        backgroundImage: "url(".concat(a, ")"),
                        backgroundColor: "#fff",
                      },
                    }),
                    w.a.createElement(J, {
                      onLoadedUserInfo: this.handleUserInfoLoaded,
                    }),
                    w.a.createElement(
                      "div",
                      { className: "mod_player" },
                      w.a.createElement("div", { className: "player__hd" }),
                      w.a.createElement(
                        "div",
                        { className: "player__bd" },
                        t
                          ? w.a.createElement(se, {
                              translateY: u,
                              showTransBtn: d,
                              openLang: this.handleOpenLang,
                              isTrans: m,
                              getPlayLyricElment: this.getPlayLyricElment,
                              currentTime: o,
                              lyric: c,
                              handleDragLyricMouseDown:
                                this.handleDragLyricMouseDown,
                            })
                          : w.a.createElement(oe, {
                              clearSongList: this.handleClearSongList,
                              addPlayList: this.addPlayList,
                              dowLoadSong: this.bacthDownloadSong,
                              bacthFan: f,
                              bacthAddLick: this.bacthAddLick,
                              bacthDelete: this.bacthDelete,
                              changeSelect: this.handleChangeSelect,
                              changeAddSongPlayList:
                                this.handleChangeAddSongPlayList,
                              showTransBtn: d,
                              openLang: this.handleOpenLang,
                              isTrans: m,
                              translateY: u,
                              getPlayLyricElment: this.getPlayLyricElment,
                              lyric: c,
                              currentTime: o,
                              deleteSong: this.handleDeleteSong,
                              changePlay: this.handleChangePlay,
                              playSong: g,
                              currentMid: l,
                              songList: n || [],
                              handleDragLyricMouseDown:
                                this.handleDragLyricMouseDown,
                            })
                      ),
                      w.a.createElement(me, {
                        setMute: this.handleMute,
                        volumeMouseDown: this.handleVolumeMouseDown,
                        volume: h,
                        isPureMode: t,
                        setPureMode: this.handleSetPureMode,
                        commentCount: y,
                        dowLoadSong: this.handleDowLoadSong,
                        addLike: this.handleAddLike,
                        prevPlay: this.handlePrevPlay,
                        nextPlay: this.handleNextPlay,
                        setPlayType: this.handleSetPlayType,
                        playType: s,
                        progressDomRef: this.progressDomRef,
                        volumeProgressDomRef: this.volumeProgressDomRef,
                        seek: this.handleSeek,
                        playMouseDown: this.handleMouseDown,
                        progressTime: i,
                        currentTime: o,
                        playStatus: r,
                        play: this.handleCurrentPlay,
                        song: g,
                        setVolume: this.handleSetVolume,
                        currentTimeOffset: this.tryPlayBeginTime,
                        progressLoadOffsetLeft: this.progressLoadOffsetLeft,
                        isTryPlay: !!this.tryPlayBeginTime,
                        tryPlayTipsNode: w.a.createElement(Le, {
                          func: this.handleClickTryTips,
                        }),
                      })
                    )
                  );
                },
              },
            ]),
            n
          );
        })(x.PureComponent);
      ke.getInitialMetas = s()(
        N.a.mark(function e() {
          return N.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt("return", Object(he.a)({}));
                case 1:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      );
      t.default = Object(P.withRouter)(ke);
    },
    447: function (e, t, n) {},
    463: function (e, t, n) {
      "use strict";
      var a = n(108),
        r = n.n(a),
        l = n(76),
        o = n.n(l),
        i = n(3),
        s = n.n(i),
        c = n(15),
        u = n(461),
        m = 0,
        d = function (e) {
          var t = {},
            n = 0;
          return (
            e &&
              e.forEach(function (e, a) {
                var r = e.lastIndexOf("]"),
                  l = e.substring(0, r + 1),
                  o = e.substring(r + 1),
                  i = l.replace(new RegExp("\\[", "g"), "").split("]"),
                  s = i.length - 1,
                  c = "";
                if (s || !o) {
                  for (; s--; )
                    if (
                      -1 === (c = i[s]).indexOf("al:") &&
                      -1 === c.indexOf("ar:") &&
                      -1 === c.indexOf("ti:") &&
                      -1 === c.indexOf("by:") &&
                      -1 === c.indexOf("offset:")
                    ) {
                      if (
                        ((c = -1 !== c.indexOf(".") ? c : "".concat(c, ".00")),
                        "" === (o = "" === o.trim() ? "" : o.trim()))
                      )
                        break;
                      (t[n] = o), n++;
                    }
                } else t[a] = o;
              }),
            t
          );
        },
        p = function (e, t) {
          var n = [],
            a = [],
            r = function (e, r, l) {
              if (t[e]) {
                var o =
                  "//" !== t[e]
                    ? s.a.createElement(
                        i.Fragment,
                        null,
                        r,
                        s.a.createElement("br", null),
                        s.a.createElement(
                          "span",
                          { className: "js_trans_line" },
                          t[e]
                        )
                      )
                    : r;
                a.push({ context: o, interval: l });
              }
              n.push({ context: r, interval: l });
            },
            l = 0;
          return (
            e.forEach(function (e) {
              var t = e.lastIndexOf("]"),
                n = e
                  .substring(0, t + 1)
                  .replace(new RegExp("\\[", "g"), "")
                  .split("]"),
                a = e.substring(t + 1),
                o = n.length - 1,
                i = "",
                s = 0;
              if (o || !a) {
                for (; o--; )
                  if (-1 !== (i = n[o]).indexOf("al:"))
                    (s = i.indexOf(":")), i.substring(s + 1);
                  else if (-1 !== i.indexOf("ar:"))
                    (s = i.indexOf(":")), i.substring(s + 1);
                  else if (-1 !== i.indexOf("ti:"))
                    (s = i.indexOf(":")), i.substring(s + 1);
                  else if (-1 !== i.indexOf("by:"))
                    (s = i.indexOf(":")), i.substring(s + 1);
                  else if (-1 !== i.indexOf("offset:"))
                    (s = i.indexOf(":")),
                      (m = parseInt(i.substring(s + 1), 10));
                  else {
                    if (
                      ((i = -1 !== i.indexOf(".") ? i : "".concat(i, ".00")),
                      "" === (a = "" === a.trim() ? "" : a.trim()))
                    )
                      break;
                    var c =
                      ((u = i),
                      60 * parseInt(u.substring(0, u.indexOf(":")), 10) * 1e3 +
                        1e3 *
                          parseInt(
                            u.substring(u.indexOf(":") + 1, u.indexOf(".")),
                            10
                          ) +
                        parseInt(u.substring(u.indexOf(".") + 1), 10) -
                        m);
                    r(l, a, c / 1e3), l++;
                  }
                var u;
              } else {
                r(l, a, null);
              }
            }),
            { lyricList: n, transList: a }
          );
        },
        f = {},
        y = (function () {
          var e = r()(
            o.a.mark(function e(t) {
              var n, a, r, l;
              return o.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = t.mid), (a = t.songtype), (r = t.songid), n || r)
                      ) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt("return");
                    case 3:
                      if (!f[n || r]) {
                        e.next = 5;
                        break;
                      }
                      return e.abrupt("return", f[n || r]);
                    case 5:
                      return (
                        (l = { loginUin: c.i.getUin() }),
                        Number(n)
                          ? (l.musicid = parseInt(n, 10))
                          : (l.songmid = n),
                        r && (l.musicid = r),
                        a > 0 && (l.songtype = a),
                        e.abrupt(
                          "return",
                          Object(c.b)({
                            format: "json",
                            url: "//c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg",
                            data: l,
                          }).then(function (e) {
                            try {
                              var t = null;
                              if (0 === e.code && 3 !== e.type) {
                                var a = u.a.decode(e.lyric),
                                  r = e.trans ? u.a.decode(e.trans) : null,
                                  l = a
                                    .replace(/&#10;/g, "_!!_")
                                    .replace(new RegExp("\\n", "g"), "_!!_")
                                    .trim()
                                    .split("_!!_"),
                                  o = null;
                                r &&
                                  (o = r
                                    .replace(/&#10;/g, "_!!_")
                                    .replace(new RegExp("\\n", "g"), "_!!_")
                                    .trim()
                                    .split("_!!_"));
                                var i = d(o);
                                (t = p(l, i)), (f[n] = t);
                              }
                              return t;
                            } catch (s) {}
                          })
                        )
                      );
                    case 10:
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
      t.a = y;
    },
    464: function (e, t, n) {
      "use strict";
      var a = n(3),
        r = n.n(a),
        l = n(16),
        o =
          (n(447),
          n(465),
          function (e) {
            var t,
              n = e.songMid,
              a = e.commentCount,
              o = function () {
                n
                  ? window.open(
                      Object(l.d)(
                        l.a.SONGE_DETAIL,
                        "".concat(n, "#comment_box")
                      )
                    )
                  : document.getElementById("comment_box").scrollIntoView(!0);
              };
            return (
              null === a || 0 === a
                ? (t = r.a.createElement(
                    "a",
                    { className: "mod_btn_comment", onClick: o },
                    r.a.createElement(
                      "span",
                      { className: "icon_txt" },
                      "\u65e0\u8bc4\u8bba"
                    )
                  ))
                : a > 0 && a < 10
                ? (t = r.a.createElement(
                    "a",
                    { className: "mod_btn_comment btn_comment9", onClick: o },
                    r.a.createElement(
                      "span",
                      { className: "btn_comment__numbers" },
                      r.a.createElement("i", {
                        className:
                          "btn_comment__numb btn_comment__numb_".concat(a),
                      })
                    ),
                    r.a.createElement(
                      "span",
                      { className: "icon_txt" },
                      "\u8bc4\u8bba"
                    )
                  ))
                : a >= 10 && a < 100
                ? (t = r.a.createElement(
                    "a",
                    { className: "mod_btn_comment btn_comment99", onClick: o },
                    r.a.createElement(
                      "span",
                      { className: "btn_comment__numbers" },
                      r.a.createElement(
                        "span",
                        { className: "btn_comment__numb10000" },
                        a
                      )
                    ),
                    r.a.createElement(
                      "span",
                      { className: "icon_txt" },
                      "\u8bc4\u8bba"
                    )
                  ))
                : a >= 100 && a < 1e3
                ? (t = r.a.createElement(
                    "a",
                    { className: "mod_btn_comment btn_comment99", onClick: o },
                    r.a.createElement(
                      "span",
                      { className: "btn_comment__numbers" },
                      r.a.createElement("i", {
                        className: "btn_comment__numb btn_comment__numb_9",
                      }),
                      r.a.createElement("i", {
                        className: "btn_comment__numb btn_comment__numb_9",
                      }),
                      r.a.createElement("i", {
                        className: "btn_comment__numb btn_comment__numb_add",
                      })
                    ),
                    r.a.createElement(
                      "span",
                      { className: "icon_txt" },
                      "\u8bc4\u8bba"
                    )
                  ))
                : a >= 1e3 && a < 1e4
                ? (t = r.a.createElement(
                    "a",
                    { className: "mod_btn_comment btn_comment99", onClick: o },
                    r.a.createElement(
                      "span",
                      { className: "btn_comment__numbers" },
                      r.a.createElement("i", {
                        className: "btn_comment__numb btn_comment__numb_9",
                      }),
                      r.a.createElement("i", {
                        className: "btn_comment__numb btn_comment__numb_9",
                      }),
                      r.a.createElement("i", {
                        className: "btn_comment__numb btn_comment__numb_9",
                      }),
                      r.a.createElement("i", {
                        className: "btn_comment__numb btn_comment__numb_add",
                      })
                    ),
                    r.a.createElement(
                      "span",
                      { className: "icon_txt" },
                      "\u8bc4\u8bba"
                    )
                  ))
                : a >= 1e4 &&
                  (t = r.a.createElement(
                    "a",
                    { className: "mod_btn_comment btn_comment99", onClick: o },
                    r.a.createElement(
                      "span",
                      { className: "btn_comment__numbers" },
                      r.a.createElement(
                        "span",
                        { className: "btn_comment__numb10000" },
                        a < 1e5 ? "1w" : "10w"
                      ),
                      r.a.createElement("i", {
                        className: "btn_comment__numb btn_comment__numb_add",
                      })
                    ),
                    r.a.createElement(
                      "span",
                      { className: "icon_txt" },
                      "\u8bc4\u8bba"
                    )
                  )),
              t
            );
          });
      t.a = Object(a.memo)(o);
    },
    465: function (e, t, n) {},
    536: function (e, t, n) {},
    537: function (e, t, n) {},
    538: function (e, t, n) {},
    539: function (e, t, n) {},
    540: function (e, t, n) {},
  },
]);
