
const Joi = require('joi');
const addSchema = Joi.object({
    _id: Joi.string(),
    role_id: Joi.string().required(),//角色唯一标识
    name: Joi.string(),
    comment: Joi.string().empty([null]),
    permission: Joi.array().items(Joi.string()),
})
const editSchema = Joi.object({
    _id: Joi.string().required(),
    // role_id: Joi.string().required(),
    name: Joi.string(),
    comment: Joi.string().empty([null]),
    permission: Joi.array().items(Joi.string()),
}).unknown()
const pageSchema = Joi.object({
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
