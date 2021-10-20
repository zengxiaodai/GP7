const mongoose = require('mongoose')

// 连接MongoDB服务器
mongoose.connect('mongodb://localhost:27017/gp7', {})

const conn = mongoose.connection
conn.on('open', ()=>console.log('数据库连接成功'))
conn.on('error', ()=>console.log('数据库连接失败'))
