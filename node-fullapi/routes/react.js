const KoaRouter = require('@koa/router')
const router = new KoaRouter()
const checkToken = require('../middlewares/checkToken')

const U = require('../react_controllers/User')
const M = require('../react_controllers/Menu')
const R = require('../react_controllers/Role')

const v = '/api/v2'

router
.post(`${v}/login`, U.login)
.get(`${v}/user/info`, checkToken, U.getUserInfo)
.post(`${v}/user/add`, checkToken, U.addUser)
.get(`${v}/user/status`, checkToken, U.updUser)
.get(`${v}/user/list`, checkToken, U.listUser)

.post(`${v}/menu/add`, checkToken, M.addMenu)
.get(`${v}/menu/list`, checkToken, M.listMenu)

.post(`${v}/role/add`, checkToken, R.addOrEditRole)
.get(`${v}/role/list`, checkToken, R.listRole)
.get(`${v}/role/info`, checkToken, R.infoRole)

module.exports = router
