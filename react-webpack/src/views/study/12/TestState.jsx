// state 是React组件自身的数据，具有“响应式”的特性（当state变量被this.setState()修改时，视图会自动更新）。
  // 这里的“响应式”和vue响应式是完全不同的，React中没有“数据支持、依赖收集”等工作。

// 1、定义state
  // 在类组件中才有state（函数式组件中没有state），必须在constructor这个生命周期中定义state。
  // state，必须“先定义、再使用”。state变量一般是基本数据类型、数组、普通对象。不能定义其它的数据类型。

// 2、使用state
  // 在类组件中，使用this.state来访问所有的state变量。

// 3、state的特点
  // 当使用this.setState()这个专属方法来修改state时，这会触发render()运行并返回新的“Fiber”，进一步执行“协调运行”（找到最小化的脏节点集合），最后一次“提交”更新DOM。
  // state是当前组件的“自有数据”，可以通过props传递给后代组件，但不能传递给父组件。这就是React中“单向数据流”（自上而下）。

// 4、如何优雅地修改state变量？
  // 修改state变量必须使用this.setState()这个专属方法。不要直接修改state，因为直接修改state不会触发render()。
  // 每次修改state时都要考虑“新值与旧值是否有”，如果有关使用this.setState(fn,callback)这种语法，如果无关使用this.setState({},callback)这种语法。
  // 示例：this.setState({name:'GP8'})  this.setState(state=>({count:state.count+1}))

// 5、this.setState() 异步性
  // 在合成事件（on*开头的系列事件、生命周期钩子）中，this.setState()是异步的。
  // 在微任务函数体中（Promise.then）中，this.setState()是异步的。
  // 在宏任务函数体中（定时器）中，this.setState()是同步的。

import React from 'react'

export default class TestState extends React.Component {
  constructor(props) {
    super(props)
    // 定义state
    this.state = {
      count: 1,
      name: 'GP7',
      info: {
        a: 1,
        b: 2,
        c: 3
      }
    }
  }
  changeCount() {

    // [不建议，因为代码逻辑中有直接修改state]
    // this.setState(state=>({count:++state.count}))
    // this.setState(state=>({count:state.count++}))

    // this.setState(function(state){return{count:state.count+1}})
    // this.setState(state=>{return{count:state.count+1}})
    this.setState(state=>({count:state.count+1}))
  }
  changeName() {
    this.setState({name: 'GP8'})
  }
  changeInfo() {
    this.setState(({info})=>({info:{...info, a:info.a+1}}))
  }
  render () {
    // 在这里把state变量解构出来，再用于jsx渲染
    const { count, name, info } = this.state
    console.log('re-rendered')
    return (
      <div>
        <h2>学习state</h2>
        <div>{ count }</div>
        <div>{ count*100 }</div>
        <div onClick={this.changeCount.bind(this)}>自增</div>
        <hr/>
        <div>{ name }</div>
        <div onClick={this.changeName.bind(this)}>改名</div>
        <hr/>
        <div>{ info.a }</div>
        <div>{ info.b }</div>
        <div>{ info.c }</div>
        <div onClick={this.changeInfo.bind(this)}>信息变化</div>


      </div>
    )
  }
}
