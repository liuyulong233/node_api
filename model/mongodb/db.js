var mongoose = require("mongoose");
var config = require("@/config/index.js").db;
// const uri = "mongodb://user:password@localhost:27017/social";
const uri=`mongodb://${config.username}:${config.password}@${config.uri}`
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.connect(uri, options).then(
  () => {
    console.log("数据库已连接");
  },
  (err) => {
    console.log("数据库连接失败", err);
  }
);

module.exports = mongoose;
