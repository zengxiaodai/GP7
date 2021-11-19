
import React from 'react'

// import TestJSX from '@/views/study/12/TestJSX'
// import TestProps from '@/views/study/12/TestProps'
// import TestState from '@/views/study/12/TestState'
// import TestEvent from '@/views/study/12/TestEvent'
// import TestCondition from '@/views/study/12/TestCondition'
// import TestList from '@/views/study/12/TestList'
// import TestForm from '@/views/study/12/TestForm'
// import TestLife from '@/views/study/12/TestLife'

// import TestLift from '@/views/study/14/TestLift'
// import TestCombine from '@/views/study/14/TestCombine'

import TestContext from '@/views/study/16/TestContext'

import { Provider } from '@/utils/theme'
import { ToggleTheme } from '@/components'

// 函数式组件（App根组件）
export default class App extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      theme: {
        color: '#000000',
        background: '#ffffff'
      }
    }
  }
  // change (ev) {
  //   const key = ev.target.name
  //   const value = ev.target.value
  //   this.setState(state=>({theme: {...state.theme,[key]:value}}))
  //   this.setState(state=>{
  //     return {
  //       theme: {...state.theme, [key]: value}
  //     }
  //   })
  // }
  render () {
    const { theme } = this.state
    return (
      <Provider value={theme}>
          <TestContext />
          <ToggleTheme
            theme={theme}
            onTheme={theme=>this.setState({theme})}
          />
      </Provider>
    )
  }
}
