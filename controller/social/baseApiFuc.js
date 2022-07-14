const models = require("@m/mongodb/index.js");
class BaseApi {
  constructor(modelName) {
    this.modelName = modelName;
    this.Model = models[modelName];
  }
  async _create(value) {
    try {
      let data = await this.Model.create(value);
      return {
        code: 200,
        message: "保存成功",
      };
    } catch (error) {
      console.log(this.modelName, error);
      return {
        code: 500,
        message: this.modelName + "保存失败::" + error,
      };
    }

    //   .then((data) => {
    //     console.log("create", data);
    //     res &&
    //       res.send({
    //         code: 200,
    //         message: "保存成功",
    //       });
    //   })
    //   .catch((err) => {
    //     console.log("create", err);
    //     res &&
    //       res.send({
    //         code: 500,
    //         message: "保存失败",
    //       });
    //   });
  }
  async _list(value = {}, page = 1, page_size = 10, fields = "") {
    let offset = (page - 1) * page_size;
    try {
      let data = await this.Model.find(value)
        .sort("-create_at")
        .select(fields)
        .skip(offset)
        .limit(page_size);
      const count = await this.Model.find(value).countDocuments();
      return {
        code: 200,
        data,
        paging: {
          page,
          page_size,
          count,
        },
        message: "ok",
      };
    } catch (error) {
      console.log(this.modelName, error);
      return {
        code: 500,
        message: this.modelName + "模块查找失败::" + error,
      };
    }
  }
  async _edit(value1, value2, flag = true) {
    try {
      let data = await this.Model.findOneAndUpdate(value1, value2);
      return {
        code: 200,
        message: flag ? "编辑成功" : "删除成功",
      };
    } catch (error) {
      console.log(this.modelName, error);
      return {
        code: 500,
        message: this.modelName + `${flag ? "修改失败" : "删除失败"}::` + error,
      };
    }
    //   .then((data) => {
    //     console.log("edit", data);
    //     res &&
    //       res.send({
    //         code: 200,
    //         message: "修改成功",
    //       });
    //   })
    //   .catch((err) => {
    //     console.log("edit", err);
    //     res &&
    //       res.send({
    //         code: 500,
    //         message: "修改失败",
    //       });
    //   });
  }
  async _editById(id, value2, flag = true) {
    try {
      let data = await this.Model.findByIdAndUpdate(id, value2);
      return {
        code: 200,
        message: flag ? "编辑成功" : "删除成功",
      };
    } catch (error) {
      console.log(this.modelName, error);
      return {
        code: 500,
        message: this.modelName + `${flag ? "修改失败" : "删除失败"}::` + error,
      };
    }
  }
  //
  async _editByAuth(value1, value2, limitAuth, flag = true) {
    //可以横向越权
    if (!limitAuth) {
      return this._editById(value1._id, value2, flag);
    } else {
      return this._edit(value1, value2, flag);
    }
  }
  async _detailByAuth(value, limitAuth) {
    //可以横向越权
    if (!limitAuth) {
      return this._detailById(value._id);
    } else {
      return this._detail(value);
    }
  }
  async _detail(value) {
    try {
      let data = await this.Model.findOne(value);
      return {
        code: 200,
        data,
        message: "ok",
      };
    } catch (error) {
      console.log("err", this.modelName, error);
      return {
        code: 500,
        message: this.modelName + "获取详情失败::" + error,
      };
    }
  }
  async _detailById(id) {
    try {
      let data = await this.Model.findById(id);
      return {
        code: 200,
        data,
        message: "ok",
      };
    } catch (error) {
      console.log("err", this.modelName, error);
      return {
        code: 500,
        message: this.modelName + "获取详情失败::" + error,
      };
    }
  }
  //真删除
  async _remove(value) {
    try {
      await this.Model.findOneAndRemove(value);
      return {
        code: 200,
        message: "删除成功",
      };
    } catch {
      console.log("err", this.modelName, error);
      return {
        code: 500,
        message: this.modelName + "删除失败::" + error,
      };
    }
  }
  async _removeById(id) {
    try {
      await this.Model.findByIdAndRemove(id);
      return {
        code: 200,
        message: "删除成功",
      };
    } catch (error) {
      console.log("err", this.modelName, error);
      return {
        code: 500,
        message: this.modelName + "删除失败::" + error,
      };
    }
  }
  async _removeByAuth(value, limitAuth) {
    //可以横向越权
    if (!limitAuth) {
      return this._removeById(value._id);
    } else {
      return this._remove(value);
    }
  }
}
module.exports = BaseApi;
