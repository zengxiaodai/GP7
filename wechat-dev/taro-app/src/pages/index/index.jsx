import { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import { useReady } from '@tarojs/taro'
import './index.scss'

import { useStore } from '../../hooks'

export default inject(['count'])(
  // observer(
    (props) => {
      // const { count } = props
      // useReady(()=>console.log('页面初始化渲染完成'))

      const count = useStore('count')
      // console.log('countx', countx)
      return (
        <View className='index'>
          <Button onClick={()=>count.increment()}>+</Button>
          <Button onClick={()=>count.decrement()}>-</Button>
          <Button onClick={()=>count.incrementAsync()}>Add Async</Button>
          <Text>{count.counter}</Text>
        </View>
      )
    }
  // )
)
