// 代码语法是CommonJS模块，在这里可以使用大多数的JS语法和Node API。
// module.exports = {}
// module.exports = function () { return {} }
// module.exports = () => { return {} }
// module.exports = () => ({})

const common = require('./common')
const build = require('./build')
const serve = require('./serve')

const { merge } = require('webpack-merge')

module.exports = env => merge(common, env.development?serve:build)
