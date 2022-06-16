
  const assert = require("http-assert");
  const svgCaptcha = require("svg-captcha");
  const filename=__filename.slice(__dirname.length + 1, -3)
  const { adminSchema } = require("@j/"+filename);
  const Base = require("../baseApiFuc");
  const admin = new Base(filename);

  const generateVerifCode = () => {
    const codeConfig = {
      size: 6, // 验证码长度
      ignoreChars: "0oO1ilI", // 验证码字符中排除 0oO1ilI
      noise: 3, // 干扰线条的数量
      width: 100,
      height: 40,
      fontSize: 40,
      color: true, // 验证码的字符是否有颜色，默认没有，如果设定了背景，则默认有
      background: "#eee",
    };
    return svgCaptcha.create(codeConfig);
  };
  const checkVerifCode = async (code, type) => {
		return admin.Model.findOne({ code, status: 0, type }).gt('expired_at', new Date().getTime());

	}
  //已验证的验证码失效
	const banVerifCode = async (code, type) => {
	return	admin.Model.updateMany({ status: 0, code, type }, { status: 1 })
	}
  async function add(ctx) {
    let captcha = generateVerifCode();
    let { value, error } = adminSchema.add.validate({
      code: captcha.text.toLowerCase(),
      type: ctx.query.type || "login",
    });
    assert(!error, 405, error);
    await admin._create(value);
    //将过期验证码作废
    admin.Model.updateMany(
      { status: 0, expired_at: { $lte: new Date().getTime() } },
      { status: 2 }
    )
      .then((doc) => {
        // console.log("doc,", doc);
      })
      .catch((err) => {
        console.log("err", err);
      });
    ctx.response.type = "image/svg+xml";
    ctx.body = captcha.data;
  }

  //查询分类列表
  async function list(ctx) {
    let { value, error } = adminSchema.page.validate(ctx.query);
    assert(!error, 405, error);
    let { page, page_size, status,type } = value;

    let _filter = {
      status,
      type,
    };
    for (let key in _filter) {
      if (_filter[key] == null || _filter[key] === "") {
        delete _filter[key];
      }
    }

    const obj = await admin._list(_filter, page, page_size);
    ctx.body = obj;
  }
  async function edit(ctx) {
    let { value, error } = adminSchema.edit.validate(ctx.request.body);
    assert(!error, 405, error);
    const obj = await admin._editById(value._id, value);
    ctx.body = obj;
  }

  async function detail(ctx) {
    assert(ctx.query._id, 422, "_id参数缺失");
    const obj = await admin._detailById(ctx.query._id);
    ctx.body = obj;
  }
  async function remove(ctx) {
    assert(ctx.query._id, 422, "_id参数缺失");
    await admin.Model.findByIdAndDelete(ctx.query._id);
    ctx.body = {
      code: 200,
      message: "删除成功",
    };
  }

  let o= {
    add,
    list,
    detail,
    edit,
    checkVerifCode,
    remove,
    banVerifCode
  };

module.exports = o;
