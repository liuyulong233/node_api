
const Joi = require('joi');

const addSchema = Joi.object({
	uid: Joi.number().required(),//
	tag: Joi.array().items(Joi.string()),//学习 生活 日常
	content: Joi.string().max(800).required(),//内容
	like: Joi.number().default(0),//点赞数量
	comment: Joi.number().default(0),//评论数量
	topic:Joi.string().empty([null]),
	address: Joi.string().max(80).empty([null, '']),//地址
	album: Joi.array().items(Joi.string()),//图片
	is_public: Joi.number().valid(0, 1).default(1),//是否公开 1 公开 0 私密 
	// is_delete: Joi.number().valid(0, 1),//是否删除 对于uid用户
	status: Joi.number().valid(0, 1).default(1),//是否有效 0-无效 1-正常  
})
const editSchema = Joi.object({
	_id: Joi.string().required(),
	uid: Joi.number().required(),//
	tag: Joi.array().items(Joi.string()),//学习 生活 日常
	content: Joi.string().max(800).required(),//内容
	like: Joi.number().default(0),//点赞数量
	comment: Joi.number().default(0),//评论数量
	address: Joi.string().max(80).empty([null, '']),//地址
	album: Joi.array().items(Joi.string()),//图片
	is_public: Joi.number().valid(0, 1).default(1),//是否公开 1 公开 0 私密 
	// is_delete: Joi.number().valid(0, 1),//是否删除 对于uid用户
	status: Joi.number().valid(0, 1).default(1),//是否有效 0-无效 1-正常  
}).unknown()
const pageSchema = Joi.object({
	uid: Joi.number().empty([null]),
	status: Joi.number().valid(0, 1).empty([null]),
	page: Joi.number().default(1).error(new Error('数字类型')),
	page_size: Joi.number().default(10).error(new Error('数字类型')),
})
const pageSchema2 = Joi.object({
	uid: Joi.number().empty([null]),
	topic:Joi.string().empty([null]),
	page: Joi.number().default(1).error(new Error('数字类型')),
	page_size: Joi.number().default(10).error(new Error('数字类型')),
})
const removeSchema = Joi.object({
	uid: Joi.number().required(),
	_id: Joi.string().required(),
})
module.exports = {
	adminSchema: {
		add: addSchema,
		edit: editSchema,
		page: pageSchema,
	},
	appSchema: {
		add:addSchema,
		page:pageSchema2,
		edit: editSchema,
		remove:removeSchema
	}

}