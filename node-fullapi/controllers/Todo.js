const todoModel = require('../models/todo')

class TodoController {
  static async getTodoList(ctx) {
    // 如果是GET请求，像下面这样获取入参
    const query = ctx.request.query
    console.log('入参', query)
    const list = await todoModel.find()
    ctx.body = {
      code: 1,
      msg: 'success',
      data: { list }
    }
  }
  static async addTodo(ctx) {
    // 如果是POST请求，像下面这样获取入参
    const { task } = ctx.request.body
    const ele = { task, status: 1 }
    await todoModel.insertMany([ele])
    ctx.body = {
      code: 1,
      msg: 'success'
    }
  }
}

module.exports = TodoController
