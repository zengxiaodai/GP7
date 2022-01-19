# 为什么要重视AntDesign ？

- ant-design 是React领域中最流行的组件化，很多竞品都类似design。
- 在工作中，使用ant-design非常常见，这是React开发者必须熟练使用，提升工作效率。
- and-design 是React基础知识的汇集，翻它的源码对你的React语法有很大帮助。

# 版本（用不同版本，你学到的东西不一样）

- v1  语法JSX，类组件
- v2  语法JSX、TS，类组件
- v3  语法JSX、TS，类组件
- v4  语法JSX、TS、Hooks，函数式组件

- 注意：ant-design背后是基于 rc-* 系列组件进行的封装。所以大家以后如果想造轮子，参考and-design迭代的方案，进一步要研究rc-*系列的组件。

# 各个组件的基本使用场景

- Form表单：可以把所有其它的表单结合起来
- Form表单：FormItem双向绑定、表单校验、Form.useForm()操作，功能极其丰富。

- 使用表单（复杂）：
  - 取值(FormItem实现双向绑定value/checked)
  - 赋初始值(form实例API，手动操作Form表单)
  - 表单校验(第三方校验库、正则表达式) 和TS校验没有关系
  - 表单联动(灵活使用useMeno, 对表单进行显示与隐藏、禁用与启用)
