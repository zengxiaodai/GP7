
import React, { useState } from 'react'

// 路由系统
import { HashRouter, Link } from 'react-router-dom'
import { Layout } from '@/components'

// 状态管理
import { Provider } from 'mobx-react'
import store from '@/store'


export default function App() {
  return (
    <HashRouter>
      <Provider {...store}>
        <Layout />
      </Provider>
    </HashRouter>
  )
}
