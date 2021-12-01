const roleModel = require('../react_models/role')

class Role {
  static async addRole(ctx) {
    let { role, role_name, role_desc, menus } = ctx.request.body
    // 参数校验
    const ele = {
      role, role_name, role_desc, menus
    }
    await roleModel.insertMany([ele])
    ctx.body = {code:0,msg:'success',data:{}}
  }

  static async listRole(ctx) {
    const list = await roleModel.find({})
    ctx.body = {code:0,msg:'success',data:{list}}
  }
}

module.exports = Role
