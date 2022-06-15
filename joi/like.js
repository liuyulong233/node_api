const Joi = require("joi");
const addSchema = Joi.object({
  uid: Joi.number(), //点赞人uid
  type: Joi.number().valid(1, 2, 3).required(), //1 动态 2文章 3h5
  topic_id: Joi.string(), // 动态或文章 id
});

const pageSchema = Joi.object({
  page: Joi.number().default(1).error(new Error("数字类型")),
  page_size: Joi.number().default(10).error(new Error("数字类型")),
});
module.exports = {
  appSchema: {
    add: addSchema,
    page: pageSchema,
  },
};
