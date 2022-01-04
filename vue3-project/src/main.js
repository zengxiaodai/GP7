// 入口文件
// 在vue3.0中为什么不把Vue这个构造器暴露出来？
// 1、避免用户滥用Vue原型链。
// 2、不把Vue暴露出来，Vue中的API都按需加载，减少依赖包的体积。

import { createApp } from 'vue'
import App from './App.vue'

// 创建Vue响应式系统
const app = createApp(App)
// do something
// 挂载vue响应式系统时，只能使用app.mount()，不支持el选项的挂载。
app.mount('#app')