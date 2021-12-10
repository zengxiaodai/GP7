import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/hooks'

import { Layout, Menu } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined
} from '@ant-design/icons'

import { logo } from '@/utils/img'
import { icons } from '@/views'
import { toggle } from '@/store/reducers/layout';

const { Sider } = Layout
const { SubMenu } = Menu

const Logo = ({value}:any) => (
  <div className={`logo ${value?'on':''}`}>
    <img src={logo} alt=""/>
  </div>
)

const Toggle = ({value}:any) => {
  const dispatch = useAppDispatch()
  return (
    <div className='toggle' onClick={()=>dispatch(toggle())}>
    {
      value
      ? <MenuUnfoldOutlined />
      : <MenuFoldOutlined />
    }
    </div>
  )
}

export default () => {
  const { collapsed } = useAppSelector(state=>state.layout)
  const { menuArr } = useAppSelector(state=>state.user)

  // const [openId, onId] = useMenu()
  const [openId, onId] = ['10', '1001']

  const renderMenu = (menuArr) => {
    return menuArr.map(ele=>(
      <SubMenu key={ele._id}  title={ele.text} icon={icons[ele.icon]}>
      {
        ele.children &&
        ele.children.map(ele=>{
          const flag = ele.path.includes(':')
          return !flag && <Menu.Item key={ele._id}>
            <Link to={ele.path}>{ele.text}</Link>
          </Menu.Item>
        })
      }
      </SubMenu>
    ))
  }

  return (
    <Sider trigger={null} collapsed={collapsed}>
      <Logo value={collapsed} />
      <Menu
        theme="dark"
        mode="inline"
        defaultOpenKeys={[openId]}
        defaultSelectedKeys={[onId]}
      >
        {/* 首页大屏的菜单，所有用户都有这个页面 */}
        {/*
          <Menu.Item key={1} icon={<HomeOutlined />}>
            <Link to='/dashboard'>首页大屏</Link>
          </Menu.Item>
        */}

        { menuArr.length>0 && renderMenu(menuArr)}

      </Menu>

      <Toggle value={collapsed} />
    </Sider>
  )
}
