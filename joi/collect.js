
const Joi = require('joi');
const addSchema = Joi.object({
	uid: Joi.number().required(),//收藏者id,
	type: Joi.number().valid(1, 2, 3).required(),////1 动态 2文章 3h5
	topic_id: Joi.string().required(),//文章动态小应用 id
	status: Joi.number().valid(0, 1).default(1),
})
const editSchema = Joi.object({
	_id:Joi.string().required(),
	uid: Joi.number().empty([null]),//收藏者id,
	type: Joi.number().valid(1, 2, 3).empty([null]),////1 动态 2文章 3h5
	topic_id: Joi.string().required(),//文章动态小应用 id
	status: Joi.number().valid(0, 1).default(1),
}).unknown()
const pageSchema = Joi.object({
	uid: Joi.string().empty([null]),
	type: Joi.number().valid(1, 2, 3).empty([null]),
	status: Joi.number().valid(0, 1).default(1),
	page: Joi.number().default(1).error(new Error('数字类型')),
	page_size: Joi.number().default(10).error(new Error('数字类型')),
})
const pageSchema2 = Joi.object({
	uid: Joi.any().required(),
	type: Joi.number().valid(1, 2, 3).empty([null]),
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