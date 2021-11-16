import React from 'react'

// 1、React组件 vs. React元素。React组件就是我们所说的React类组件或函数式组件；所谓的React元素指的是React组件实例化的对象。
  // App - React组件（类、函数）
  // <App> - React元素（JSX元素）

// 2、什么是JSX？JSX = JavaScript XML，这是React官方发明的一种JS语法（糖）。
  // 浏览器默认是不支持JSX的，所以jsx语法必须使用@babel/preset-react进行编译，编译的结果React.createElement()这种Api的代码。
  // 示例：<div>Hello</div>  ==>@babel/preset-react==> React.createElement('div',{},'Hello')
  // 在React开发中，JSX语法是可选的（也就是你可以不使用JSX）。如果不使用JSX语法，React组件代码将变得特别麻烦（难以维护）。所以几乎所有React开发都用的是JSX语法。

  // const result = <div>Hello World</div>
  // const result = React.createElement('div', {}, 'Hello World')

  // const result = (
  //   <div className='people' title='people'>
  //     <h1>小王</h1>
  //     <h2>小李</h2>
  //     <div>
  //       <span title='addr'>地址</span>
  //       <span id='tel'>电话</span>
  //     </div>
  //   </div>
  // )

  // const result = React.createElement(
  //   'div',
  //   {
  //     className: 'people',
  //     title: 'people'
  //   },
  //   [
  //     React.createElement('h1',{key:'1'},'小王'),
  //     React.createElement('h2',{key:'2'},'小李'),
  //     React.createElement(
  //       'div',
  //       {key:'20'},
  //       [
  //         React.createElement('span',{title:'addr',key:'4'},'地址'),
  //         React.createElement('span',{title:'tel',key:'5'},'电话'),
  //       ]
  //     )
  //   ]
  // )

// 3、JSX元素是变量，是对象（引用数据类型），它不是HTML字符串。


// 页面组件（由路由来控制）
export default class TestJSX extends React.Component {
  render () {
    return <h1>学习JSX</h1>
  }
}
