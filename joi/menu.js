
const Joi = require('joi');
const addSchema = Joi.object({
    name: Joi.string().required(),
    menu_id: Joi.string().required(),
    icon: Joi.string().empty([null, ""]),
    pid: Joi.string().empty([null, ""]),
    path: Joi.string().required(),
    component: Joi.string().required(),
    isLeaf: Joi.number().required(),
    comment: Joi.string().empty([null, ""]),
    order: Joi.number().default(0),
    status: Joi.number().default(1),
})
const editSchema = Joi.object({
    _id: Joi.string().required(),
    name: Joi.string().required(),
    menu_id: Joi.string().empty([null, ""]),
    icon: Joi.string().empty([null, ""]),
    pid: Joi.string().empty([null, ""]),
    path: Joi.string().required(),
    component: Joi.string().required(),
    isLeaf: Joi.number().required(),
    comment: Joi.string().empty([null, ""]),
    order: Joi.number().default(0),
    status: Joi.number().default(1),
}).unknown()
const pageSchema = Joi.object({
    status: Joi.number().empty([null]),
    pid: Joi.string().empty([null]),
    isLeaf: Joi.number().empty([null]),
    page: Joi.number().default(1).error(new Error('数字类型')),
    page_size: Joi.number().default(10).error(new Error('数字类型')),
})
module.exports =  {
    adminSchema: {
		add: addSchema,
		edit: editSchema,
		page: pageSchema,
	},
}
