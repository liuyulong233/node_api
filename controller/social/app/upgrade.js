const assert = require("http-assert");
const { upgrade: Model } = require("@m/mongodb/index.js");
const { appSchema } = require("@j/upgrade.js");
const { compareVersion } = require("@/lib/util.js");
async function queryUpgrade(ctx) {
  let { value, error } = appSchema.query.validate(ctx.query);
  assert(!error, 405, error);
  let filter = {
    appid: value.appid,
    status: 1,
  };
  try {
    let data = await Model.findOne(filter).sort("-create_at");

    data = data ? { ...data._doc } : { version: "1.0.0" };
    console.log(
      value.version,
      data.version,
      compareVersion(value.version, data.version)
    );

    //用户的版本<最新版本 有最新更新
    if (compareVersion(value.version, data.version) === -1) {
      data.is_upgrade = true; //通过_doc修改查出的文档
    } else {
      data.is_upgrade = false;
    }
    ctx.body = {
      code: 200,
      data,
      message: "ok",
    };
  } catch (error) {
    ctx.body = {
        code: 415,
        message: "error:"+error,
      };
  }
}
module.exports = {
  queryUpgrade,
};
