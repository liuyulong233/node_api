
const Joi = require('joi');
const addSchema = Joi.object({
	user_id: Joi.number().required(),//关注用户id
    follower_id: Joi.number().required(), //被关注者用户ID
    status: Joi.number().valid(0, 1).default(1),//关注状态 0 失效 1 启用
})
const editSchema = Joi.object({
	_id:Joi.string().required(),
	user_id: Joi.number().required(),//关注用户id
    follower_id: Joi.number().required(), //被关注者用户ID
}).unknown()
const pageSchema = Joi.object({
	uid: Joi.string().empty([null]),
	status: Joi.number().valid(0, 1).default(1),
	page: Joi.number().default(1).error(new Error('数字类型')),
	page_size: Joi.number().default(10).error(new Error('数字类型')),
})
const pageSchema2 = Joi.object({
    uid: Joi.number().required(),
    type: Joi.number().valid(0, 1).default(1),//0-粉丝列表 1-关注列表
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