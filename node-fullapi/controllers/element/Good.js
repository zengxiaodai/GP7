const goodModel = require('../../models/good')
const cateModel = require('../../models/cate')

class Good {
  static async goodList(ctx) {
    let { name, cate, page, size, hot, checked } = ctx.request.query
    // 对必填参数进行校验，如果有误，就结束传话并告知业务错误
    // 对非必填参数添加值
    page = parseInt(page || 1)
    size = parseInt(size || 10)
    // 默认前端已经传递所有的查询参数
    let params = {
      name: new RegExp(name, 'img'),
      cate,
      checked,
    }
    // 进一步处理那些前端没有传递的非必填参数
    if (!name) delete params.name
    if (!cate) delete params.cate
    if (checked===undefined) delete params.checked
    // 一切准备到位，可以开始查询了
    const total = await goodModel.find(params).count()
    const list = await goodModel.find(params).limit(size).skip((page-1)*size).sort({create_time:0})
    ctx.body = { err: 0, msg: 'success', data: {total,list}}
  }
}

module.exports = Good
