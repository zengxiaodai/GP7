import React, { useState } from 'react'
import { Layout, Button } from 'antd'

import { useAppDispatch } from '@/hooks'
import { logout } from '@/store/reducers/user'

const { Header } = Layout

export default () => {
  const dispatch = useAppDispatch()
  return (
    <Header style={{ padding:0,textAlign:'right' }}>
      <Button onClick={()=>dispatch(logout())} type='primary'>退出登录</Button>
    </Header>
  )
}
