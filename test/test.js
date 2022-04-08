
const superagent = require("superagent");
superagent
  // .get('http://175.178.33.148:3000/api/app/dynamic?page=1&page_size=10')
  //nobase64 0 base64 1 no; musicid songList id
  .get("https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg?nobase64=0&musicid=338154026&format=json"
  )
  // .get(
  //   "https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg?_=1647008220535&cv=4747474&ct=24&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=1&uin=0&g_tk_new_20200303=864740811&g_tk=864740811&loginUin=0&songmid=003B65C74Jt5ke&musicid=2788982"
  // )
  .set("Content-Type", "application/json")
  .set("referer", "https://y.qq.com/")
  .set(
    "Cookie",
    "pgv_pvid=2258137968; tvfe_boss_uuid=04f4e7ef205208db; ptui_loginuin=2274015779; RK=MIvVwPaE8l; ptcz=ed129d7d488b51fc9c4b6e9475701f62aa4c928214db6a397522e17217803516; fqm_pvqid=56564a57-e7eb-4b4d-b6da-955dcb393ab6; ts_uid=6257834795; ts_refer=www.bidianer.com/; pgv_info=ssid=s7921727730; vversion_name=8.2.95; video_omgid=77a23a48cfb5969f; fqm_sessionid=58c6db7d-395e-4341-889f-db8f5f6b6a2b; _qpsvr_localtk=0.8888772081942424; euin=ow-l7en57KSlNv**; tmeLoginType=2; psrf_access_token_expiresAt=1654768645; psrf_musickey_createtime=1646992645; qqmusic_key=Q_H_L_5gROByf_AJ62YGt26TttC1vgKhq3IvMPJC9IjJE5ONnMEm6mKlNL9sQ; o_cookie=2274015779; ts_last=y.qq.com/n/ryqq/player"
  )
  .set("Accept", "application/json")
  .end((err, data) => {
    console.log(err,data._header, data.text);
  });
