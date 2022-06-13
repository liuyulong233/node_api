
const Joi = require('joi');
const addSchema = Joi.object({
    report: Joi.string(),//被举报评论文章动态小应用 id
    report_uid: Joi.number(),//被举报者id
    type: Joi.number().valid(1, 2, 3, 4),//1评论2文章3动态4作品
    uid: Joi.number(),//举报者
    reason: Joi.string(),//举报原因
    photo: Joi.array().items(Joi.string()),//举报图片
    status:Joi.number().valid(0, 1).default(0)//0-未处理 1-已处理
})
const editSchema = Joi.object({
    _id: Joi.string().required(),
    report: Joi.string(),//被举报评论文章动态小应用 id
    report_uid: Joi.number(),//被举报者id
    type: Joi.number().valid(1, 2, 3, 4),//1评论2文章3动态4作品
    uid: Joi.number(),//举报者
    reason: Joi.string(),//举报原因
    photo: Joi.array().items(Joi.string()),//举报图片
}).unknown()
const pageSchema = Joi.object({
    uid: Joi.number().empty([null]),
    type: Joi.number().valid(1, 2, 3).empty([null]),
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
        add: addSchema,
    }
}