const KoaRouter = require('@koa/router')
const router = new KoaRouter()

const TD = require('../controllers/Todo')

const GC = require('../controllers/vant/Good')

const v = '/api/v1'

router
.get(`${v}/todo/getTodoList`, TD.getTodoList)
.post(`${v}/todo/addTodo`, TD.addTodo)
.get(`${v}/todo/delTodo`, TD.delTodo)
.get(`${v}/todo/transferTodo`, TD.transferTodo)
.post(`${v}/todo/updTodo`, TD.updTodo)
.get(`${v}/vant/getGoodList`, GC.getGoodList)
.get(`${v}/vant/getAllCate`, GC.getAllCates)

module.exports = router
