import React, { useState } from 'react'
import { TabBar } from 'antd-mobile'
import { withRouter, useHistory, useLocation } from 'react-router-dom'
import tabs from './tabs'
import { useTab } from '@/hooks'

// 用了withRouter和路由hooks，二选一。
export default withRouter(
  props => {
    const history = useHistory()
    const { pathname } = useLocation()

    const [flag, tabIdx] = useTab(tabs)

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
        tabs.map((ele,idx)=>(
          <TabBar.Item
            icon={{ uri: ele.icon }}
            selectedIcon={{ uri: ele.iconOn }}
            title={ele.title}
            key={ele.id}
            selected={flag && tabIdx===idx}
            onPress={()=>switchTab(ele)}
          >
          </TabBar.Item>
        ))
      }
      </TabBar>
    )
  }
)
