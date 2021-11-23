import React, { useState } from 'react'
import { TabBar } from 'antd-mobile'
import { withRouter, useHistory, useLocation } from 'react-router-dom'

// 用了withRouter和路由hooks，二选一。
export default withRouter(
  props => {
    console.log('tabbar props', props)
    const [list] = useState([
      { id: 1, path: '/', title: '首页', icon: 'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg', iconOn: 'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg', },
      { id: 2, path: '/find', title: '发现', icon: 'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg', iconOn: 'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg', },
      { id: 3, path: '/user', title: '我的', icon: 'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg', iconOn: 'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg', }
    ])

    const history = useHistory()
    const location = useLocation()

    const switchTab = ele => {
      history.replace(ele.path)
    }

    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
      >
      {
        list.map(ele=>(
          <TabBar.Item
            icon={{ uri: ele.icon }}
            selectedIcon={{ uri: ele.iconOn }}
            title={ele.title}
            key={ele.id}
            selected={location.pathname===ele.path}
            onPress={()=>switchTab(ele)}
          >
          </TabBar.Item>
        ))
      }
      </TabBar>
    )
  }
)
