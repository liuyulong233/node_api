const Joi = require('joi');
const addSchema = Joi.object({
    name:Joi.string(),//群名称
    uid:Joi.number(),//群主id
    status:Joi.number().default(1),
    cover:Joi.string(),//群图片
    intro:Joi.string().empty([null,'']),//群简介
})
const editSchema = Joi.object({
    _id:Joi.string().required(),
    name:Joi.string(),//群名称
    uid:Joi.number(),//群主id
    cover:Joi.string(),//群图片
    intro:Joi.string(),//群简介
}).unknown()
const pageSchema = Joi.object({
    uid: Joi.number(),
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
		page: pageSchema,
        edit: editSchema,
	}
}