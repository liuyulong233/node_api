
const Joi = require('joi');
const addSchema = Joi.object({
    mobile: Joi.string(),//	手机号，和邮箱二选一
    email: Joi.string(),//	邮箱，和手机号二选一
    code: Joi.string(),//	验证码
    type: Joi.string().valid('login', 'register', 'bind', 'unbind'),//		验证类型：login登录、register注册、bind绑定手机或邮箱、unbind解绑手机或邮箱
    status: Joi.number().valid(0, 1, 2, 4),//		验证状态：0 未验证 1 已验证 2 已作废 4万能验证码（通过数据库插入）
    ip: Joi.string().empty([null, '']),//	请求时 IP 地址
    expired_at: Joi.number(),//	验证码过期时间
    create_at: Joi.any().empty([null])
})
const editSchema = Joi.object({
    _id: Joi.string().required(),
    type: Joi.string().valid('login', 'register', 'bind', 'unbind').empty([null]),//		
    status: Joi.number().valid(0, 1, 2, 4).empty([null]),//		
    ip: Joi.string().empty([null, '']),//	
    expired_at: Joi.number().empty([null]),//
}).unknown()
const pageSchema = Joi.object({
    status: Joi.number().valid(0, 1, 2).empty([null]),
    type: Joi.string().valid('login', 'register', 'bind', 'unbind').empty([null]),
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