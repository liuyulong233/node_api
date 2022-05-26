const Joi = require('joi');
const addSchema = Joi.object({
    group_id: Joi.string(),//群ID
    group_uid:Joi.number(),
    confirm: Joi.number(),//是否同意 
    uid: Joi.number(),//
    status: Joi.number().default(1),
})
const editSchema = Joi.object({
    _id:Joi.string().required(),
    group_id: Joi.string(),//群ID
    group_uid:Joi.number(),
    confirm: Joi.number(),//是否同意 
    uid: Joi.number(),//
}).unknown()
const pageSchema = Joi.object({
    uid:Joi.number().empty([null]),
    group_id:Joi.string().empty([null]),
    confirm:Joi.number().empty([null]),
    page: Joi.number().default(1).error(new Error('数字类型')),
    page_size: Joi.number().default(10).error(new Error('数字类型')),
})
const pageSchema2 = Joi.object({
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
		page: pageSchema2,
	}
}