const Joi = require("joi");
const addSchema = Joi.object({
 
  appid: Joi.string(), //应用的AppID
  name: Joi.string(), //应用名称
  title: Joi.string(), //更新标题
  content: Joi.string(), //更新内容
  platform: Joi.string(), //更新平台，Android || iOS
  type: Joi.string(), //安装包类型，native_app || wgt
  version: Joi.string(), //当前包版本号，必须大于当前线上发行版本号
  url: Joi.string(), //可下载安装包地址
  status: Joi.number().valid(0, 1).default(1),
  is_silently:Joi.boolean().default(false), //是否静默更新
  is_mandatory: Joi.boolean().default(false), //是否强制更新
}).unknown();
const editSchema = Joi.object({
  _id: Joi.string().required(),
  appid: Joi.string(), //应用的AppID
  name: Joi.string(), //应用名称
  title: Joi.string(), //更新标题
  content: Joi.string(), //更新内容
  platform: Joi.string(), //更新平台，Android || iOS
  type: Joi.string(), //安装包类型，native_app || wgt
  version: Joi.string(), //当前包版本号，必须大于当前线上发行版本号
  url: Joi.string(), //可下载安装包地址
  status: Joi.number().valid(0, 1).default(1),
  is_silently:Joi.boolean().default(false), //是否静默更新
  is_mandatory: Joi.boolean().default(false), //是否强制更新
}).unknown();
const pageSchema = Joi.object({
  status: Joi.number().valid(0, 1).empty([null]),
  page: Joi.number().default(1).error(new Error("数字类型")),
  page_size: Joi.number().default(10).error(new Error("数字类型")),
});
const querySchema = Joi.object({
  appid: Joi.string().required(), //应用的AppID
  version: Joi.string().required(),
  platform: Joi.string().valid('Android','iOS').default('Android'), //更新平台，Android || iOS
}).unknown();
module.exports = {
  adminSchema: {
    add: addSchema,
    edit: editSchema,
    page: pageSchema,
  },
  appSchema: {
    query:querySchema
  },
};
