
const Joi = require('joi');
const editSchema = Joi.object({
	_id: Joi.string().required(),
	uid: Joi.number().required(),
	mobile: Joi.string().regex(/^(?:(?:\+|00)86)?1[3-9]\d{9}$/), //手机
	nickname: Joi.string().required(),//昵称
	avatar: Joi.string(),//头像
	//password: Joi.string().required(), //密码
	// email: Joi.string(), //邮箱
	address: Joi.string(),//地址
	desc: Joi.string(),//个人简介
	tag: Joi.string(),//标签
	age: Joi.string(),//
	sex: Joi.number().default(2).valid(0, 1, 2),//0 女 1 男 2未知
	birthday: Joi.string(),//
	photos: Joi.array().items(Joi.string()),//照片墙
}).unknown()
let removeschema = Joi.object({
	status: Joi.number().default(1).valid(1, 2),
	uid: Joi.number().required(),
})
const bindSchema = Joi.object({
	type: Joi.string().valid('password', 'mobile', 'email').required(),
	value: Joi.string().when(Joi.ref("type"), {
		is: "password",
		then: Joi.string().pattern(/^[a-zA-Z0-9]{6,15}$/),
	}).when('type', {
		is: "mobile",
		then: Joi.string().pattern(/^(?:(?:\+|00)86)?1[3-9]\d{9}$/).error(new Error("手机格式不对")),
	}).when('type', {
		is: "email",
		then: Joi.string().email(),
	})
})
const addSchema = Joi.object({
	uid: Joi.number().required(),
	code: Joi.string().required(),
	mobile: Joi.string(), //手机
	nickname: Joi.string().required(),//昵称
	avatar: Joi.string(),//头像
	password: Joi.string().required(), //密码
	email: Joi.string(), //邮箱
	address: Joi.string(),//地址
	desc: Joi.string(),//个人简介
	tag: Joi.string(),//标签
	age: Joi.string(),//
	sex: Joi.number().default(2).valid(0, 1, 2),//0 女 1 男 2未知
	birthday: Joi.string(),//
	photos: Joi.array().items(Joi.string()),//照片墙
	status: Joi.number().default(1).valid(0, 1, 2),//0-注销 1正常使用 2禁用 
}).unknown()

const pageSchema = Joi.object({
	status: Joi.number().valid(0, 1,2).empty([null]),
	uid: Joi.number().empty([null]),
	sex: Joi.number().valid(0, 1, 2).empty([null]),
	page: Joi.number().default(1).error(new Error('数字类型')),
	page_size: Joi.number().default(10).error(new Error('数字类型')),
})
const registerSchema = Joi.object({
	code: Joi.string().required(),
	mobile: Joi.string(), //手机
	nickname: Joi.string().required(),//昵称
	uid: Joi.number().required(),
	avatar: Joi.string(),//头像
	password: Joi.string().required(), //密码
	email: Joi.string(), //邮箱
	address: Joi.string(),//地址
	desc: Joi.string(),//个人简介
	tag: Joi.string(),//标签
	age: Joi.string(),//
	sex: Joi.number().default(2).valid(0, 1, 2),//0 女 1 男 2未知
	birthday: Joi.string(),//
	photos: Joi.array().items(Joi.string()),//照片墙
}).unknown()
const detailSchema = Joi.object({
	uid: Joi.number().required(),
})

module.exports = {
	adminSchema: {
        add: addSchema,
        edit: editSchema,
        page: pageSchema,
		remove:removeschema
    },
    appSchema: {
		add: registerSchema,
        edit: editSchema,
		detail:detailSchema,
		bindSchema,
    }

}