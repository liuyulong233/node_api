
const Joi = require('joi');
const addSchema = Joi.object({
	_id: Joi.string(),
	pid: Joi.string().empty([null]),//上级分类
	cid: Joi.string(),//唯一标识	
	name: Joi.string(),//名称
	status: Joi.string().valid(0, 1).default(1),//0-禁用
	describe: Joi.string(),//描述
}).unknown()
const editSchema = Joi.object({
	_id: Joi.string().required(),
	pid: Joi.string().empty([null]),//上级分类
	cid: Joi.string().empty([null]),//唯一标识	
	name: Joi.string(),//名称
	status: Joi.string().valid(0, 1).default(1),//0-禁用
	describe: Joi.string(),//描述
}).unknown()
const pageSchema = Joi.object({
	pid: Joi.string().empty([null]),//上级分类
	status: Joi.number().valid(0, 1).empty([null]),
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
	}
}