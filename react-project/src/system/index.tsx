import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from './layout'
import Login from './login'

const Good = () => <h1>商品列表</h1>
const Order = () => <h1>订单页面</h1>

export default () => {
  return (
    <>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Layout />}>
        <Route path='good' element={<Good />} />
        <Route path='order' element={<Order />} />
      </Route>
    </Routes>
    </>
  )
}
