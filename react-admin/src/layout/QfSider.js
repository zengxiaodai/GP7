import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'

import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import routes from '@/views'
const { Sider } = Layout
const { SubMenu } = Menu

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
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        { renderMenu() }
      </Menu>

      <Toggle value={collapsed} onChange={()=>setCollapsed(!collapsed)} />
    </Sider>
  )
}
