
const Joi = require('joi');
const addSchema = Joi.object({
    resource_id: Joi.string().required(),//角色唯一标识
    name: Joi.string().required(),
    right: Joi.alternatives().try(Joi.number(), Joi.array()),
    comment: Joi.string().empty(['']),
})
const editSchema = Joi.object({
    _id: Joi.string().required(),
    resource_id: Joi.string().required(),//角色唯一标识
    name: Joi.string().required(),
    right: Joi.number(),
    comment: Joi.string().empty(['']),
}).unknown()
const pageSchema = Joi.object({
    resource_id: Joi.string().empty([null]),
    right: Joi.string().empty([null]),
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
