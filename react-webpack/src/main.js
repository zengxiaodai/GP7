import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import '@/styles/init.scss'

//
// const App = ()=>import('./App')
const request = ()=>import('@/utils/request')

ReactDOM.render(<App />, document.getElementById('root'))
