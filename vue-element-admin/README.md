# vue-element-admin

- 开源地址：https://github.com/PanJiaChen/vue-element-admin

- 项目运行遇到问题：
  - 把package.json中tui-editor删掉。
  - 把src/components/MarkdownEditor/index.vue中与tui-editor有关的代码注释掉。
  - 用`yarn`安装node_modules包。
  - 执行`yarn add core-js`安装core-js。
  - 重启项目`npm start`。


# 分析项目的流程

- 研究README.md（技术栈、项目运行、环境要求、打包流程、重要bug）
- 研究package.json（npm scripts、dependencies、devDependencies）
- 大约研究一下目录 pubic、src，以及根目录下若干配置文件。
- 重点研究src
  - 入口文件 main.js
  - 研究路由设计（登录鉴权流程、权限设计。。。）
  - 研究状态管理（store的代码组织方式，使用规范）
  - 研究全局元素：全局指令、全局组件、全局API、全局过滤器、全局混入。。。
  - 研究utils公共方法、包括axios封装、api封装。。。
  - 研究components中可复用的组件
  - 研究特殊功能：国际化、Layout布局设计、全屏操作、地图、图表、富文本。。。
  - 简单研究所有的页面组件，把握一下“代码规范（代码范式）”
- 尝试安装依赖、启项目。。。

- 总结：罗列10个以内的你觉得有水平的问题，找那个同事虚心请教。
