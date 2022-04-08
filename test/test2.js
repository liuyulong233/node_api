const { get } = require("superagent");
const superagent = require("superagent");
superagent
  //songList{id->biz_id mid->songmid album.mid->albumMid}  sign guid
  //39-zzb2fa60a68kkwowbnl87a2fz9smrgg0886e485-4221807909 41
  .post(
   'https://u.y.qq.com/cgi-bin/musics.fcg?_=1647066694611&sign=zzb8416b355cs6vierrqakazahs0hbuha839c81ab'
  )
  .type("form")

  .send({
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
        guid: "8233985000",
        songmid: ["00181aBt4ZowXa"],
        songtype: [0],
        uin: "0",
        loginflag: 1,
        platform: "20",
      },
    },
  })
  .set("Content-Type", "application/json")
  // .set("Content-Type", "application/x-www-form-urlencoded")
  .set("referer", "https://y.qq.com/")
  // .set(
  //   "Cookie",
  //   "pgv_pvid=2258137968; tvfe_boss_uuid=04f4e7ef205208db; ptui_loginuin=2274015779; RK=MIvVwPaE8l; ptcz=ed129d7d488b51fc9c4b6e9475701f62aa4c928214db6a397522e17217803516; fqm_pvqid=56564a57-e7eb-4b4d-b6da-955dcb393ab6; ts_uid=6257834795; ts_refer=www.bidianer.com/; pgv_info=ssid=s7921727730; vversion_name=8.2.95; video_omgid=77a23a48cfb5969f; fqm_sessionid=58c6db7d-395e-4341-889f-db8f5f6b6a2b; _qpsvr_localtk=0.8888772081942424; euin=ow-l7en57KSlNv**; tmeLoginType=2; psrf_access_token_expiresAt=1654768645; psrf_musickey_createtime=1646992645; qqmusic_key=Q_H_L_5gROByf_AJ62YGt26TttC1vgKhq3IvMPJC9IjJE5ONnMEm6mKlNL9sQ; o_cookie=2274015779; ts_last=y.qq.com/n/ryqq/player"
  // )
  .set("Accept", "application/json")
  .end((err, data) => {
    console.log(err, data._header, data.text);
  });
  'https://u.y.qq.com/cgi-bin/musicu.fcg?sign=zzb5c8d1238erwvjruro3umcdspypwajwd8896ac6&data={"req":{"module":"vkey.GetVkeyServer","method":"CgiGetVkey","param":{"guid":"7469768631","songmid":["000Xr73Z3zdSSI"],"songtype":[0],"uin":"1164153961","loginflag":1,"platform":"20"}}}'
  'http://dl.stream.qqmusic.qq.com/C400001zyQrn21YXTr.m4a?guid=4022471730&vkey=8C3B83F576D3FA08CAEB2DE495BFEA568B2473F459CDD430DB6A41DAD49F5EB4A2E06ADA2C59795BACB1CE7F8B448DE46F006138AB0D210E&uin=&fromtag=66'