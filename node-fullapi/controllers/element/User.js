const userModel = require('../../models/user')
const jwt = require('../../utils/jwt')

class User {
  // 添加用户（用户。。。）
  static async regist(ctx) {
    let { username, password } = ctx.request.body
    // 如果这两个参数没有传递，报业务错误
    const user = await userModel.findOne({username})
    if (user) return ctx.body = { err: 1, msg: `${username}已被占用` }
    await userModel.insertMany([{username, password}])
    ctx.body = { err: 0, msg: '注册成功', data: {username} }
  }

  // 登录接口
  static async login(ctx) {
    let { username, password } = ctx.request.body
    const user = await userModel.findOne({username, password})
    if(user) {
      // 生成token
      const token = jwt.creataToken(user)
      ctx.body = { err: 0, msg: '登录成功', data: { token }}
    }else{
      ctx.body = { err: 1, msg: '用户名和密码不匹配', data: {}}
    }
  }

  // 用户信息接口:前端传token过来,后端验证成功返回完整的用户信息.
  static async getUserInfo(ctx) {
	  const u = ctx.user
    // 查询完整的用户信息（roles）
	  const userinfo = await userModel.findOne({_id: u._id})
    let roles = []
    if (userinfo.role) {
      console.log('---role handle start')
      roles = userinfo.role.split(';').filter(ele=>ele)
    }
    console.log('roles', roles)
	  ctx.body = {
      err: 0, msg: 'success',
      data: {
        userinfo: {
          _id: userinfo._id,
          name: userinfo.name,
          roles,
          avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
          introduction: '高薪就业'
        }
      }
    }
  }
}

module.exports = User
