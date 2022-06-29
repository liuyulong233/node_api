##通用接口搭建
- music模块  
爬取qq音乐提供音乐接口
- video模块  
- util  
提供工具类api，如文件上传
- app  
社交项目应用端接口
- admin  
社交项目管理端接口
## 初始化
certificate 目录下的https证书未上传，请自行获取
config 目录下配置文件未上传
```index.js
module.exports = {
  ip:"127.0.0.1",
  port:3000,
  tokenSecret:"xxx",
  ws_port:3002,
  db:{
    username:"xxx",
    password:"xxx",
    uri:'localhost:27017/social'
  }
};
```
## 刷新token
http://www.imxmx.com/Item/1/85808.html
## 问题
### mongodb如何用事务 执行一系列数据库操作
### mongodb 如何一个字段 根据条件 联表聚合查询 条件1 联a 条件2 联b  
### mongodb 如何聚合查询 a联b,b联c  
### mongodb 聚合查询分页
### 话题下查询动态需要改进
### Nginx 出现 413 Request Entity Too Large的解决方法
