import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Layout, Menu } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined
} from '@ant-design/icons'

import { logo } from '@/utils/img'
import routes from '@/views'
import { useMenu } from '@/hooks'

const { Sider } = Layout
const { SubMenu } = Menu

const Logo = ({value}) => (
  <div className={`logo ${value?'on':''}`}>
    <img src={logo} alt=""/>
  </div>
)

const Toggle = ({value, onChange}) => (
  <div className='toggle' onClick={onChange}>
  {
    value
    ? <MenuUnfoldOutlined />
    : <MenuFoldOutlined />
  }
  </div>
)

export default () => {
  const [collapsed, setCollapsed] = useState(false)
  const [openId, onId] = useMenu()
  const renderMenu = () => {
    return routes.map(ele=>(
      <SubMenu key={ele.id}  title={ele.text} icon={ele.icon}>
      {
        ele.children &&
        ele.children.map(ele=>(
          <Menu.Item key={ele.id}>
            <Link to={ele.path}>{ele.text}</Link>
          </Menu.Item>
        ))
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
        <Menu.Item key={1} icon={<HomeOutlined />}>
          <Link to='/dashboard'>首页大屏</Link>
        </Menu.Item>
        { renderMenu() }
      </Menu>

      <Toggle value={collapsed} onChange={()=>setCollapsed(!collapsed)} />
    </Sider>
  )
}
