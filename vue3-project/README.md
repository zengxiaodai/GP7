# Vue3的简单

- vue3 对比 vue2 有哪些区别?
- vue3 大约2020年年底发布..

# 环境搭建

- 创建项目的两种方式
  - 使用@vue/cli创建(选择vue3), 背后是webpack.
  - 使用vite创建项目, 背后vite.

# 组件的编写方式

- 在vue3中, 可以正常支持 vue2的组件定义方式(不用setup)
- [最佳实践]使用.vue文件, <script setup> 封装组件.
- [最佳实践]使用.jsx/.tsx文件, 使用defineComponent 编写 JXS语法的组件.
- 使用.vue文件, 把 setup当作选项来使用, export default { setup, methods }
- 使用.vue文件, 使用 defineComponent() 来编写组件.
- 使用.js/.ts文件, 使用 h 函数来编写组件.

# 为什么要使用setup组合?

- 原因: vue3中新增的setup, 目的是为了解决vue2中"数据和业务逻辑不分离"的问题.
- vue3中使用setup是如何解决的呢?
  - 第1步: 用setup组合API替换vue2中的data/computed/watch/methods/...
  - 第2步: 把setup中相关联的功能封装成一个独立可维护的hooks.
