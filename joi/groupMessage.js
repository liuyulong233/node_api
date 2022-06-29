const Joi = require('joi');
const addSchema = Joi.object({
    type:Joi.string(),//消息类型 TXET
    content:Joi.string(),//消息内容
    timestamp:Joi.number(),
    group_id:Joi.string(),//群ID
    uid:Joi.number(),//uid
})

const editSchema = Joi.object({
    _id:Joi.string().required(),
    type:Joi.string(),//消息类型 TXET
    content:Joi.string(),//消息内容
    timestamp:Joi.number(),
    group_id:Joi.string(),//群ID
    uid:Joi.number(),//uid
}).unknown()
const pageSchema = Joi.object({
    uid:Joi.number().empty([null]),
    type:Joi.string().empty([null]),
    group_id: Joi.string().empty([null]),
    page: Joi.number().default(1).error(new Error('数字类型')),
    page_size: Joi.number().default(10).error(new Error('数字类型')),
})
const pageSchema2 = Joi.object({
    group_id: Joi.string().required(),
    page: Joi.number().default(1).error(new Error('数字类型')),
    page_size: Joi.number().default(50).error(new Error('数字类型')),
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
	}
}