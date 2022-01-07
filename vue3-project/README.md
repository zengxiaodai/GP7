# Vue3的简单

- vue3 对比 vue2 有哪些区别?
- vue3 大约2020年年底发布..

# 环境搭建

- 创建项目的两种方式
  - 使用@vue/cli创建(选择vue3), 背后是webpack.
  - 使用vite创建项目, 背后vite.

# 组件的编写方式

- [最佳实践]使用.vue文件, <script setup>编写组件.
- [最佳实践]使用.jsx/.tsx文件, 使用defineComponent编写JXS语法的组件.
- 在vue3中, 可以正常支持 vue2的组件定义方式(不用setup)
- 使用.vue文件, 把 setup当作选项来使用, export default { setup, methods }
- 使用.vue文件, 使用 defineComponent() 来编写组件.
- 使用.js/.ts文件, 使用 h 函数来编写组件.

# 为什么要使用setup组合?

- 原因: vue3中新增的setup, 目的是为了解决vue2中"数据和业务逻辑不分离"的问题.
- vue3中使用setup是如何解决的呢?
  - 第1步: 用setup组合API替换vue2中的data/computed/watch/methods/...
  - 第2步: 把setup中相关联的功能封装成一个独立可维护的hooks.


# vue3组合API

- ref
  - 作用: 一般用于定义基本数据类型, String / Boolean / Number
  - 背后: ref 的背后,是使用 reactive 来实现的响应式.
  - 语法: const x = ref(100)
  - 访问: 在setup中使用 .value来访问.
- isRef
  - 作用: 检查值是否为一个 ref 对象.
  - 语法: const bol = isRef(x)
- unref
  - 作用: 用于返回一个值, 如果访问的ref变量,就返回其.value值, 如果不是ref变量,就直接返回.
  - 语法: const x = unref(y)
- customRef
  - 作用: 自定义ref对象, 把ref对象改写成get/set, 进一步可以为它们添加track/trigger.
  - 参考官网的示例.

- toRef
  - 作用: 把一个reactive对象中的某个属性变成ref变量.
  - 语法: const x = toRef(reactive(obj), 'key')  // x.value
- toRefs
  - 作用: 把一个reactive响应式对象变成ref变量.
  - 语法: const obj1 = toRefs(reactive(obj))
  - 应用: 在子组件中接收父组件传递过来的props时, 使用toRefs把它变成响应式.

- shallowRef
  - 作用: 对复杂层级的对象,只将其第一层变成ref响应. (性能优化)
  - 语法: const x = shallowRef({a:{b:{c:1}},d:2}) 只有a和d变化才会自动更新.
- triggerRef
  - 作用: 强制更新一个shallowRef对象的渲染.
  - 语法: triggerRef(shallowRef对象)

- reactive
  - 作用: 定义响应式变量, 一般用于定义引用数据类型. 如果是基本数据类型,建议使用ref来定义.
  - 语法: const arr = reactive([])

- readonly
  - 作用: 把一个对象,变成只读的.
  - 语法: const rs = reactive(ref对象|reactive对象|普通对象)
- isProxy
  - 作用: 判断一个变量是不是readonly或reactive的.
- isReactive
  - 作用: 判断一变量是不是reactive的.
- isReadonly
  - 作用: 判断一个变量是不是只读的.
- toRaw
  - 作用: 得到返回reactive变量或readonly变量的"原始对象".
  - 语法: const raw = toRaw(reactive变量)
  - 疑问: reactive(obj) 和 obj 之间是浅拷贝的关系 ?
- markRaw
  - 作用: 把一个普通对象标记成"永久原始", 从此将无法再变成proxy了.
  - 语法: const raw = markRaw({a,b})
- shallowReactive
  - 作用: 定义一个reactive变量,只对它的第一层进行Proxy, 所以只有第一层变化时视图才更新.
  - 语法: const obj = shallowReactive({a:{b:9}})
- shallowReadonly
  - 作用: 定义一个reactive变量,只有第一层是只读的.
  - 语法: const obj = shallowReadonly({a:{b:9}})

- watchEffect/watchPostEffect/watchSyncEffect
  - 作用: 相当于是react中的useEffect()
  - 语法: const stop = watchEffect(fn)
- computed
  - 作用: 对响应式变量进行缓存计算.
  - 语法: const c = computed(fn/{get,set})
- 生命周期的变化
  - 选项式的beforeCreate/created被setup替代了.
  - 选项式的beforeDestroy/destroyed换成了beforeUnmount/unmounted
  - 新增了两个选项式的生命周期renderTracked/renderTriggered,它们只在开发环境有用,仅用于调试.
  - 在使用setup组合时,不建议使用选项式的生命周期,建议使用 on* 系列hooks生命周期.
- provide/inject
  - 作用: 在组件树中自上而下地传递数据.
  - 语法: provide('key', value)
  - 语法: const value = inject('key', '默认值')
- getCurrentInstance
  - 作用: 在setup或生命周期中访问 app实例
  - 语法: const app = getCurrentInstance()

- Vue3.0开发的最佳实践:
  - 只使用setup, 不要再使用vue的选项了
  - 有必要封装hooks时,建议把功能封装成hooks,以便于代码的可维护性.
  - 能用vite就尽量使用vite, 能用ts就是尽量使用ts.

# vue-router(v4)

- 注意：在vue3环境中，必须要使用vue-router(v4)
- 创建router，使用createRouter()
- 指定路由模式，使用history属性：createWebHashHistory/createWebHistory()
- 路由注册，在mian.js中 app.use(router)
- 如果当前项目严格使用组合式API进行开发，必须使用useRoute、userRouter...
- <router-link>已经没有tag属性的，用custom和插槽实现自定义。
- <router-view>新增了"插槽"功能，极其强大，参见路由中的伪代码，它在实现keep-alive和transition动画将变得更简单，还可以Suspense实现Loading。
- 新增了几个组合API：useRoute/useRouter/useLink。
- 查询vue-router(v3)和vue-router(v4)的变化：https://next.router.vuejs.org/zh/guide/migration/index.html

# vuex(v4)

- 注意：在vue3环境中，必须要使用vuex(4)
- 使用vuex数据时，哪怕是在setup中，也要使用computed来访问状态管理中的数据，否则数据不响应。

# vue(v3)的UI组件库

- 在vue3环境中，一定找支持vue3的组件库。那些vue2的组件库是无法使用的。
- 以and-design-vue(v2)为例进行使用
  - cnpm i ant-design-vue@next -S
  - cnpm i vite-plugin-components -D
  - 在vite.config.js中配置组件的按需加载。
  - 在index.html引入ant-desing-vue的样式文件。
  - 在代码import {Button} from 'ant-design-vue'
  - app.use(Button)

# vue(v3)变更的若干细节

- v-for 和 ref 可以一起使用（自己封装方法手动收集v-for中的ref实例）。
- 使用 defineAsyncComponent 定义异步组件（但注意不能用在路由懒加载中）。
- $attrs 在v2中无法接收class和style，在v3是可以的。this.$attrs/useAttrs()/setupCtx.attrs。
- $children 已经被移除了。（这会带来哪些影响？）
- 自定义指令，使用 app.directive()，需要注意是在v3中它的钩子发生了若干的变化。
- data选项，只支持工厂函数的写法，不支持对象的写法了。
- 在v3中，自定义事件在子组件中要使用 emits选项、defineEmits() 来接收事件。在子组件中如何触发这些自定义事件呢？ctx.emit('事件') / this.$emit() / const emit = defineEmits()。
- 在v3中，$on/$off/$once都移除了，只保留了$emit。
- 在v3中，全局过滤器、filters选项都移除了。
- 在v3中，支持片段（碎片），在template中可以使用多个根节点。
- 在v2和v3中，都支持函数式组件，但语法有很多不同，慎用函数式组件。
- v2中的Vue构造函数，在v3中已经不能再使用了，所以Vue静态方法和静态属性都不能使用了。在v3中新增了一套实例方法来代替，比如app.use()等。
- globalProperties和provide都向vue组件注入数据，但官方推荐使用provide向下游的组件注入数据。
- 在v2中，Vue.nextTick()/this.$nextTick不支持构建工具的“摇树”功能，所以在v3中用 nextTick 这个组合API替代了。
- 在v3中，v-if/v-else/v-else-if无须再加key，即使在<transition>动画中也无须再加key了。
- 在v2中，使用Vue.config.keyCodes可以修改键盘码，但在v3中已经淘汰了。
- 在v3中，$listeners移除了，所以在v3中无法使用$listeners来调用父组件给的自定义事件了。
- 在v2中，根组件挂载DOM时，可以使用el、也可以使用$mount()。在v3中只能使用$mount()来挂载了，在v3中这种挂载是向<div id='root'></div>节点中追加innerHTML。
- 在v3中，propsData选项已经被淘汰了。
- 在v3中的props中无法访问this了，可以使用inject来访问父级节点传递过来的数据。
- 在v2中，有一个render选项（本质上是一个渲染函数，这个渲染函数的形参是 h 函数）。在v3中已经不能使用render选项，建议使用 h 这个组合API。（h相当于React.createElement）
- Suspense 还尚未正式发布，不建议使用。作用是给异步组件添加Loading交互的。
- <transition>的两个指令发生了变化，动画class名字发生了变化。
- 在v3中，在同一个元素或组件上，可以同时使用多个v-model，语法 <Form v-model:xx='' v-model:yy='' />，在Form子组件中使用 props接收xx、yy这个属性，使用emits:['update:xx', 'update:yy'] 来接收v-model的事件。自定义修饰符的语法参考如下：
```
<SyncChild v-model:xx.even='xx' v-model:yy.hehe='yy' />

export default {
  props: {
    xx: Number,
    xxModifiers: { default: () => ({}) },
    yy: String,
    yyModifiers: { default: () => ({}) }
  },
  emits: ['update:xx'],
  setup(props, ctx) {
    const handle = () => {
      // 触发update:xx访问，并回传数据给父组件中的v-model:xx
      const { odd } = props.xxModifiers
      const { xx } = props
      ctx.emit('update:xx', odd?xx+1:xx+2)
    }
    return { handle, ...toRefs(props) }
  }
}
```
- 同一节点上使用v-for和v-if时，在v2中不推荐这么用；在v3这种写法是允许的，但v-if的优秀级更高。
- 在v2中，静态属性和动态属性同时使用，不确定最终哪个起作用；在v3中可以确定的，谁在后面谁起作用。
- 在v3中，注意watch对数组的监听问题，一定要 deep:true。
- 在v3中新增了 <teleport>（穿梭框），这相当于ReactDOM.createPortal()，它的作用是把指定的组件渲染到任意父级作用域的其它DOM节点上。
