const mongoose = require('mongoose')

// api文档：http://www.mongoosejs.net/docs/api.html#Model

// 创建一个操作todos这个集合的model对象
module.exports = mongoose.model('todos', new mongoose.Schema({
  task: String,
  create_time: { type: Number, default: Date.now() },
  status: Number
}))
