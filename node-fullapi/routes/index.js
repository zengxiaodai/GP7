const KoaRouter = require('@koa/router')
const router = new KoaRouter()

const TD = require('../controllers/Todo')

const v = '/api/v1'

router
.get(`${v}/todo/getTodoList`, TD.getTodoList)
.post(`${v}/todo/addTodo`, TD.addTodo)

module.exports = router
