
const Joi = require('joi');
const addSchema = Joi.object({
    name:Joi.string(),//系统名称
    type:Joi.string().valid('system','user'),//system系统配置 user 用户配置
    uid:Joi.number(),
    platform:Joi.string().valid('web','app','mp-weixin'),//平台配置，app || mp-weixin
    default_avatar:Joi.string(),//默认头像
    is_closeChat:Joi.boolean().default(false),//是否关闭聊天功能
    is_closeComment:Joi.boolean().default(false),//是否关闭评论功能
})
const editSchema = Joi.object({
    _id: Joi.string().required(),
    name:Joi.string(),//系统名称
    type:Joi.string().valid('system','user'),//system系统配置 user 用户配置
    uid:Joi.number(),
    platform:Joi.string().valid('web','app','mp-weixin'),//平台配置，app || mp-weixin
    default_avatar:Joi.string(),//默认头像
    is_closeChat:Joi.boolean().default(false),//是否关闭聊天功能
    is_closeComment:Joi.boolean().default(false),//是否关闭评论功能
}).unknown()
const pageSchema = Joi.object({
    type:Joi.string().valid('system','user'),//system系统配置 user 用户配置
    uid:Joi.number(),
    platform:Joi.string().valid('web','app','mp-weixin'),
    page: Joi.number().default(1).error(new Error('数字类型')),
    page_size: Joi.number().default(10).error(new Error('数字类型')),
})
module.exports = {
    adminSchema: {
        add: addSchema,
        edit: editSchema,
        page: pageSchema,
    },
}
