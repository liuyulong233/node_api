
const Joi = require('joi');
const addSchema = Joi.object({
	uid:Joi.number(),//会话所有者
    touid:{type:Number},
    type:Joi.string(),//GROUP SINGLE 会话类型
    accounts: Joi.array(),//单聊双方UID 从小到大存储
    group_id: Joi.string(),//发送者id   
    last_id:Joi.string(),
	// status: Joi.number().valid(0, 1).default(1),
})
const editSchema = Joi.object({
	_id:Joi.string().required(),
	uid:Joi.number(),//会话所有者
    touid:{type:Number},
    type:Joi.string(),//GROUP SINGLE 会话类型
    accounts: Joi.array(),//单聊双方UID 从小到大存储
    group_id: Joi.string(),//发送者id   
    last_id:Joi.string(),
}).unknown()
const pageSchema = Joi.object({
	uid: Joi.string().empty([null]),
	type: Joi.string().valid('GROUP','SINGLE').empty([null]),
	status: Joi.number().valid(0, 1).empty([null]),
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