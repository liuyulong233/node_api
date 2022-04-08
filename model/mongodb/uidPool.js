// 生成随机号码池，项目初次启动时运行

var mongoose = require('./db');
var Schema = mongoose.Schema;
let schema = new Schema({
    code: Number,
    status: Number, // 1 已使用 0 未使用
});
model = mongoose.model('uid', schema);;
let initAccount = () => {
    let arr = []
    //  6位uid账号池
    for (let i = 100001; i <= 100999; i++) {
        arr.push({
            code: i,
            status: 0
        })
    }
    model.create(arr).then(data => {
        console.log(data);
    }).catch(err => {
        console.log('err', err);
    })
};
// initAccount()
module.exports = model