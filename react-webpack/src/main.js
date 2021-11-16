import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import s from '@/styles/init.scss'
console.log(s)

// 把App根组件渲染到真实的DOM节点
ReactDOM.render(<App />, document.getElementById('root'))
