# 环境

- baseURL: 'http://localhost:9999'
- version: '/api/v1'
- methods: GET用于查询和删除  POST用于新增和编辑
- token：除登录接口外，其它业务接口都验证token。
- responese: { code:1, msg:'', data:{} }
- 验证规则：前端做必填字符验证、基本数据类型验证，后端完整验证。

# 一些常用的枚举字段

业务状态：code[-1=Token无效, 0-成功, 1-缺少必须字段, 2-数据类型错误]

# Admin系统（用户接口）

- 描述：登录接口，获取Token。
  - POST /admin/login
  - params: {username:String,password:String}

- 描述：根据token获取用户信息
  - GET  /admin/user/info
  - params: {}
  - headers: {Authorization:'token'}

- 
