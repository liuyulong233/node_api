//参数验证
const Joi = require('joi');
const addSchema = Joi.object({
	title: Joi.string().required(),//标题	
	author: Joi.number().required(),//作者 uid
	content: Joi.string().required(),//内容	
	keywords: Joi.string().empty([null,'']),//关键字
	description: Joi.string().max(500),//描述
	category: Joi.string().empty([null,'']),//分类
	check_status: Joi.number().valid(0, 1).default(0),//0 未发布(草稿) 1 待审核 2成功 3失败
	status: Joi.number().valid(0, 1).default(1),//删除 0 1
	is_public: Joi.number().valid(0, 1).default(1),//公开 0 私密 1公开
	cover: Joi.array().items(Joi.string()),//封面
	like: Joi.number().default(0),//点赞数量
	comment: Joi.number().default(0),//评论数量
	type: Joi.number().valid(1, 2).default(1),//1 markdown 2 富文本
})
const editSchema = Joi.object({
	_id:Joi.string().required(),
	title: Joi.string(),//标题	
	author: Joi.number(),//作者 uid
	content: Joi.string(),//内容	
	keywords: Joi.string().empty([null,'']),//关键字
	description: Joi.string().max(500),//描述
	category: Joi.string(),//分类
	// check_status: Joi.number().valid(0, 1),//0 未发布(草稿) 1 审核中 2成功 3失败
	status: Joi.number().valid(0, 1).default(1),//删除 0 1
	is_public: Joi.number().valid(0, 1),//公开 0 私密 1公开
	cover: Joi.array().items(Joi.string()),//封面
	type: Joi.number().valid(1, 2).default(1),//1 markdown 2 富文本
}).unknown()
const removeSchema = Joi.object({
	_id: Joi.string().required(),//标题	
	author: Joi.number(),//作者 uid
})

const pageSchema = Joi.object({
	author:Joi.number().empty([null]),
	check_status: Joi.number().valid( 1,2,3).empty([null]),
	page: Joi.number().default(1).error(new Error('数字类型')),
	page_size: Joi.number().default(10).error(new Error('数字类型')),
})
const checkSchema=Joi.object({
	_id: Joi.string().required(),//标题	
	check_status: Joi.number().valid(2, 3).required(),//作者 uid
})
const pageSchema1 = Joi.object({
	uid: Joi.number().empty([null]),
	page: Joi.number().default(1).error(new Error('数字类型')),
	page_size: Joi.number().default(10).error(new Error('数字类型')),
})
module.exports =  {
	adminSchema:{
		add:addSchema,
		edit:editSchema,
		remove:removeSchema,
		page:pageSchema,
		check:checkSchema
	},
	appSchema:{
		add:addSchema,
		edit:editSchema,
		page:pageSchema1,
	}
}
