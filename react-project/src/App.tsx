import React from 'react'
import { HashRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import { store } from './store'

import System from '@/system'

import Counter from './views/couter'

const Home = () => <div>首页</div>

// 在这里学习ts
const isDone: Boolean = true

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <System />
      </Provider>
    </HashRouter>
  )
}

export default App
