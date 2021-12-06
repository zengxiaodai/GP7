import React from 'react'
import { Outlet } from 'react-router-dom'

export default () => {
  return (
    <>
      <div>内部系统 Header</div>
      <div>内部系统 Aside</div>
      <Outlet />
    </>
  )
}
