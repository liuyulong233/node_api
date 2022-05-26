const Joi = require('joi');
const addSchema = Joi.object({
    group_id: Joi.string(),//群ID
    nickname: Joi.number(),//群中昵称
    uid: Joi.number(),//群员uid
    status: Joi.number().default(1),
})
const editSchema = Joi.object({
    _id:Joi.string(),
    status: Joi.number(),
    group_id: Joi.string(),//群ID
    nickname: Joi.string(),//群中昵称
    uid: Joi.number()
}).unknown()

const pageSchema = Joi.object({
    group_id: Joi.string().empty([null]),
    uid: Joi.number().empty([null]),
    page: Joi.number().default(1).error(new Error('数字类型')),
    page_size: Joi.number().default(10).error(new Error('数字类型')),
})
const pageSchema2 = Joi.object({
    group_id: Joi.string().required(),
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
        edit: editSchema,
        page: pageSchema2,
    },
}