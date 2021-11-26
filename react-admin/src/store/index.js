// redux 是React技术栈使用最为广泛的状态管理。
// 它一款个人作用，基于 Flux数据架构思想的开源工具。

// 怎么学习Redux？记住了“三个三”。
// 第一个“三”（3个api）：createStore、combineReducers、applyMiddleware
// 第二个“三”（3个特点）：单一数据源、store是只读的、使用reducer纯函数来修改store。
// 第三个“三”（3个概念）：State、Action、Reducer。

import { createStore, combineReducers } from 'redux'
import study from './reducers/study'

const reducer = combineReducers({study})
const store = createStore(reducer)

export default store
