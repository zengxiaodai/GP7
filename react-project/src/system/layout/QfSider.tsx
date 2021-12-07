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

// import { useMenu } from '@/hooks'
// import { toggle } from '@/store/actions'

const { Sider } = Layout
const { SubMenu } = Menu

const Logo = ({value}:any) => (
  <div className={`logo ${value?'on':''}`}>
    <img src={logo} alt=""/>
  </div>
)

const Toggle = ({value}:any) => {
  const dispatch = useAppDispatch()
   // onClick={()=>dispatch(toggle())}
  return (
    <div className='toggle'>
    {
      value
      ? <MenuUnfoldOutlined />
      : <MenuFoldOutlined />
    }
    </div>
  )

}

export default () => {
  // const { collapsed } = useAppSelector(state=>state.admin)
  const [collapsed] = useState(false)

  // const [openId, onId] = useMenu()
  const [openId, onId] = ['10', '1001']


  // const renderMenu = () => {
  //   return routes.map(ele=>(
  //     <SubMenu key={ele.id}  title={ele.text} icon={ele.icon}>
  //     {
  //       ele.children &&
  //       ele.children.map(ele=>(
  //         <Menu.Item key={ele.id}>
  //           <Link to={ele.path}>{ele.text}</Link>
  //         </Menu.Item>
  //       ))
  //     }
  //     </SubMenu>
  //   ))
  // }

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
        <Menu.Item key={1} icon={<HomeOutlined />}>
          <Link to='/dashboard'>首页大屏</Link>
        </Menu.Item>
      </Menu>

      <Toggle value={collapsed} />
    </Sider>
  )
}
