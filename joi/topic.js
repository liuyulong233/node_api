const Joi = require("joi");
const addSchema = Joi.object({
  uid: Joi.number().required(), //
  title: Joi.string().required(), //
  cover: Joi.string().required(), //
  desc: Joi.string().required(), //
  is_public:Joi.number().default(1),
  // count:Joi.number().default(0),
  category: Joi.string().required(),
  status: Joi.number().default(1),
}).unknown();
const editSchema = Joi.object({
  _id: Joi.string().required(),
  cover: Joi.string(), //
  desc: Joi.string(), //
}).unknown();
const pageSchema = Joi.object({
  page: Joi.number().default(1).error(new Error("数字类型")),
  page_size: Joi.number().default(10).error(new Error("数字类型")),
  category: Joi.string().empty([null])
}).unknown();
module.exports = {
  adminSchema: {
    // add: addSchema,
    // edit: editSchema,
    // page: pageSchema,
  },
  appSchema: {
    add: addSchema,
    edit: editSchema,
    page: pageSchema
}
};
