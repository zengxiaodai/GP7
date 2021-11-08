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
      status: { $gte: 0 }
    }
    // 进一步处理那些前端没有传递的非必填参数
    if (!name) delete params.name
    if (!cate) delete params.cate
    if (checked===undefined) delete params.checked
    // 一切准备到位，可以开始查询了
    const total = await goodModel.find(params).count()
    const list = await goodModel.find(params).limit(size).skip((page-1)*size).sort({create_time:-1})
    ctx.body = { err: 0, msg: 'success', data: {total,list}}
  }

  // 编辑与新增
  static async goodAddOrEdit(ctx) {
    let { id, name, desc, price, img, cate, hot } = ctx.request.body
    // 有id是编辑，没有id是新增
    // 对所有的必填参数进行数据校验
    let ele = {
      name,
      desc,
      price,
      img,
      cate
    }
    if (id) {
      // 每次修改时，都要重新审核
      const info = await goodModel.updateOne({_id: id}, {$set: {...ele, checked:0,create_time:Date.now()}})
      ctx.body = { err: 0, msg: 'success', data: {info} }
    } else {
      const info = await goodModel.insertMany([ele])
      ctx.body = { err: 0, msg: 'success', data: {info} }
    }
  }

  // 获取所有品类
  static async getAllCate(ctx) {
    const list = await cateModel.find({})
    ctx.body = { err: 0, msg:'success', data: { list } }
  }

  static async goodCheck(ctx) {
    // 谁修改的？审核消息？
    // 当前商品审核完成后，下一次需要审核是什么时候？
    let { id, checked } = ctx.request.query
    // 0 - 未审核  -1 = 已驳回  1 审核通过
    // 必填参数校验
    if (checked===undefined) checked = 0
    checked = Number(checked)
    console.log('id', id, 'checked', checked)
    try {
      const info = await goodModel.updateOne({_id:id}, {$set:{checked}})
      console.log('---', info)
      ctx.body = { err: 0, msg: 'success', data: {info}}
    } catch(err){
      console.log('err', err)
      ctx.body = { err: 1, msg: 'fail', data: {}}
    }
  }

  static async goodInfo(ctx) {
    let { id } = ctx.request.query
    // 校验id
    const info = await goodModel.findOne({_id: id})
    ctx.body = { err:0, msg:'success', data: {info}}
  }

  static async goodDelete(ctx) {
    let { id } = ctx.request.query
    // status 1-正常 0-下架 -1 删除
    const info = await goodModel.updateOne({_id:id}, {$set:{status:-1}})
    ctx.body = { err: 0, msg:'success', data:{info}}
  }
}

module.exports = Good
