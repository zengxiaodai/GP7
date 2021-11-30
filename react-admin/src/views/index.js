import loadable from '@loadable/component'

import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  AppstoreOutlined
} from '@ant-design/icons'

const UserManage = loadable(()=>import('./user/UserManage'))
const MenuManage = loadable(()=>import('./menu/MenuManage'))

export default [
  {
    id: 10,
    text: '用户管理',
    icon: <UserOutlined />,
    children: [
      {
        id: 1001,
        text: '用户列表',
        path: '/user/list',
        component: UserManage
      }
    ]
  },
  {
    id: 11,
    text: '菜单管理',
    icon: <AppstoreOutlined />,
    children: [
      {
        id: 1101,
        text: '添加菜单',
        path: '/menu/manage',
        component: MenuManage
      }
    ]
  }
]
