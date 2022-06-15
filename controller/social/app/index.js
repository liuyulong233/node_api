const dynamic = require('./dynamic')(app)
const follow = require('./follow')(app)
const article = require('./article')(app)
const getMine = async (req, res, next) => {
  let data = {};
  let uid = req.query.uid || req.user.uid;
  try {
    data.dynamic = await dynamic.getCount(uid);
    data.article = await article.getCount(uid);
    data.follow = await follow.getCount(uid, 1);
    data.fans = await follow.getCount(uid, 0);
    res.send({
      code: 200,
      data,
    });
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  add,
  query,
};
