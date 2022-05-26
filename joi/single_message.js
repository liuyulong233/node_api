const Joi = require('joi');
const addSchema = Joi.object({
    type:Joi.string(),//消息类型 TXET
    content:Joi.string(),//消息内容
    timestamp:Joi.number(),
    fromAccount:Joi.number(),
    toAccount:Joi.number(),
    accounts: Joi.array(),//单聊双方UID 从小到大存储
    status:Joi.number().default(1),
})
const editSchema = Joi.object({
    type:Joi.string(),//消息类型 TXET
    content:Joi.string(),//消息内容
    timestamp:Joi.number(),
    fromAccount:Joi.number(),
    toAccount:Joi.number(),
    accounts: Joi.array(),//单聊双方UID 从小到大存储
    _id:Joi.string().empty([null]),
}).unknown()
const pageSchema = Joi.object({
    accounts:Joi.array().empty([null]),
    uid:Joi.number().empty([null]),
    type:Joi.string().empty([null]),
    page: Joi.number().default(1).error(new Error('数字类型')),
    page_size: Joi.number().default(10).error(new Error('数字类型')),
})
const pageSchema2 = Joi.object({
    accounts:Joi.array().required(),
    page: Joi.number().default(1).error(new Error('数字类型')),
    page_size: Joi.number().default(10).error(new Error('数字类型')),
})
module.exports = {
    adminSchema: {
        add: addSchema,
        edit: editSchema,
        page: pageSchema,
    },
    appSchema: {
        add: addSchema,
        page: pageSchema2,
    },
}