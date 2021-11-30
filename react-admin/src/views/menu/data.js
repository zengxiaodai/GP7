export const menuData = [
  {
    key: 10,
    text: '商品管理',
    path: null,
    icon: 'good',
    component: null,
    children: [
      {
        key: 1001,
        text: '商品列表',
        path: '/good/list',
        icon: 'good',
        component: 'goodlist',
      },
      {
        key: 1002,
        text: '商品详情',
        path: '/good/detail',
        icon: 'good',
        component: 'gooddetail',
      }
    ],
  }
]
