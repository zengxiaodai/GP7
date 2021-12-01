const KoaRouter = require('@koa/router')
const router = new KoaRouter()
// const checkToken = require('../middlewares/checkToken')

const U = require('../react_controllers/User')

const v = '/api/v1'

router
.get(`${v}/admin/test`, U.test)

module.exports = router
