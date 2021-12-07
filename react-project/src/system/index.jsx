import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import { useAppSelector } from '@/hooks'

import Layout from './layout'
import Login from './login'

import { elements } from '@/views'


export default () => {
  const { token, userInfo, menuArr } = useAppSelector(state=>state.user)
  console.log('------', token, userInfo, menuArr)

  const navigate = useNavigate()

  useEffect(()=>{
    if (token && menuArr.length>0) navigate('/article/list')
  }, [menuArr])

  const arrToTree = (menuArr) => {
    const arr = JSON.parse(JSON.stringify(menuArr))
    let modules = arr.filter(ele=>!ele.pid)
    console.log('modules', modules)
    modules.forEach((ele,idx)=>{
      modules[idx]['children'] = arr.filter(ele2=>ele2.pid===ele._id)
    })
    console.log('tree', modules)
    return modules
  }

  if (menuArr.length > 0) arrToTree(menuArr)

  const renderRoute = arr => {
    let result = []
    arr.map(ele=>{
      if (ele.children) {
        ele.children.map(ele=>{
          console.log('ele', ele)
          result.push(
            <Route
              key={ele._id}
              path={ele.path}
              element={elements[ele.component]}
            />
          )
        })
      }
    })
    return result
  }




  return (
    <>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Layout />}>
        { menuArr.length>0 && renderRoute(arrToTree(menuArr))}
      </Route>
    </Routes>
    </>
  )
}
