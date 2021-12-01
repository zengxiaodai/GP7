
class User {  
  static test(ctx) {
    ctx.body = { code:0,msg:'success',data:{list:[1,2,3]}}
  }
}

module.exports = User
