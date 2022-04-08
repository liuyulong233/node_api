var mongoose = require("mongoose");
// const uri = "mongodb://user:password@localhost:27017/social";
const uri = "mongodb://user:password@175.178.33.148:3001/social";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.set("useFindAndModify", false);
mongoose.connect(uri, options).then(
  () => {
    console.log("数据库已连接");
  },
  (err) => {
    console.log("数据库连接失败", err);
  }
);

module.exports = mongoose;
