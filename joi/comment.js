
const Joi = require('joi');
const addSchema = Joi.object({
	uid: Joi.number().required(), //评论人uid
	topic_id: Joi.string().required(),// 动态或文章 id
	pid: Joi.string().empty([null]), // 父级评论id
	reply_id: Joi.string().empty([null]), //回复的评论的id
	// reply_uid: Joi.string().empty([null]), //回复的评论的uid
	content: Joi.string().max(400).required(), // 评论内容
	type: Joi.number().valid(1, 2, 3).required(),//评论类型 1 动态 2文章 3h5
	status: Joi.number().valid(0, 1).default(1), // 评论状态，评论被删除了  都是 逻辑删除，不会真实删除
	top: Joi.number().min(1).default(1), // 评论置顶,置顶top为9999
	reply_count: Joi.number().default(0),//记录该评论的回复数 只有一级评论才有
}).unknown();

const editSchema = Joi.object({
	_id:Joi.string().required(),
	uid: Joi.number().required(), //评论人uid
	topic_id: Joi.string().required(),// 动态或文章 id
	pid: Joi.string().empty([null]), // 父级评论id
	reply_id: Joi.string().empty([null]), //回复的评论的id
	// reply_uid: Joi.string().empty([null]), //回复的评论的uid
	content: Joi.string().max(400).required(), // 评论内容
	type: Joi.number().valid(1, 2, 3).required(),//评论类型 1 动态 2文章 3h5
	status: Joi.number().valid(0, 1).default(1), // 评论状态，评论被删除了  都是 逻辑删除，不会真实删除
	top: Joi.number().min(1).default(1), // 评论置顶,置顶top为9999
	reply_count: Joi.number().default(0),//记录该评论的回复数 只有一级评论才有
}).unknown();
const pageSchema = Joi.object({
	status: Joi.number().valid(0, 1).empty([null,'']),
	uid: Joi.number().empty([null,'']),
	topic_id: Joi.string().empty([null,'']),
	pid: Joi.string().empty([null,'']),
	reply_id: Joi.string().empty([null,'']),
	type: Joi.number().valid(1, 2, 3).empty([null,'']),
	page: Joi.number().default(1).error(new Error('数字类型')),
	page_size: Joi.number().default(10).error(new Error('数字类型')),
})
const pageSchema2 = Joi.object({
	topic_id: Joi.string().required(),
	page: Joi.number().default(1).error(new Error('数字类型')),
	page_size: Joi.number().default(10).error(new Error('数字类型')),
})

const commonSchema = Joi.object({
	type: Joi.number().valid(1, 2, 3).required(),
	_id: Joi.string().required(),
})
module.exports =  {
	adminSchema: {
		add: addSchema,
		edit: editSchema,
		page: pageSchema,
	},
	appSchema: {
		add: addSchema,
		// edit: editSchema,
		page: pageSchema2,
		commonSchema
	}
}