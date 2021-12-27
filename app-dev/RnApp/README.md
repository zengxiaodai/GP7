# 环境搭建

- 不建议使用 create-react-native-app
- 建议使用 react-native
```
cnpm i react-native -g
react-native init MyApp
```

# ReactNative简介

- 来自于 Facebook 这家公司
- 背后依赖于 React，所以react版本是多少，你就可以使用怎么的react语法。
- RN 本质上提供了一套移动端的UI（Widget）、移动布局样式规范、操作手机系统的API。
- RN一套代码，可以打包成android app、ios app，所以RN也是一个跨平台的APP技术。

# 从技术的角度提一下简历技巧

- 亮点（学历、专业、年龄、排版、求职方向）=>你是一个有潜力、很用心、很细心。
- 技术点（突出某一个技术栈，避免什么都会、技术点版本、开发工具）=>你是技术综合能力强、并且是一个比较专注的人。
- 项目点（对照你找的项目，把这个项目的功能点罗列出来，越多越多）=>功能难点、功能亮点

# ReactNative学习方法

- 文档教程：看react-native文档，这是最完整教程。
- 环境搭建：学习建议snack中敲代码；如果是真实开发建议用mac搭建原生环境。
- 开源代码：自已去社区中找RN的开源项目，研究代码结构（架构）。
- 引申借鉴：学会了RN，之后学Flutter也比较容易。（如果一定要建议，建议研究一下Flutter）


# 开发环境搭建

- 沙盒环境：使用 expo-cli创建项目，在手机安卓expo app，通过手机扫码进行运行和调试。
- 原生环境：要考虑是windows环境，还是mac环境。(以mac为便说明RN的开发环境搭建)
  - 开发和调试android应用：Node、JDK、Android Studio、Watchman
  - 开发和调试ios应用：Node、Watchman、Xcode(mac电脑上一个开发工具)和CocoaPods(包管理器)。

- expo工具介绍：
  - expo-cli 对国内用户不太友好，不建议使用。
  - snack：在线的expo环境，在这个网站可以编写RN代码。地址：https://snack.expo.dev/
  - 如何学习RN？一边阅读RN文档，一边在snake中进行在线编程。
