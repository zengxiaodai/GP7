// 基础前提：类组件和函数式组件之间的区别。
// 自React16.8以后，几乎不用再编写类组件了，我们使用Hooks API可以模拟出类组件大多数的特性，比如state、生命周期、上下文、ref等等。

// Hooks API
// 简介：是React16.8之后新增一套以use*开头的API。
// 作用：Hooks API的操作直达React底层，所以性能更好、效率更高、代码也更加简洁。

// 一、useState
// 语法：const [userInfo, setUserInfo] = useState('初始值')
// 关于语法为什么用“数组解析”而不是“对象解构”？方便解构赋值。考你对象解构和数组解构的区别。

// 对第一个变量的说明：使用useState()定义的声明式变量，不能直接修改，要使用set*方法来修改。所以我们在定义state时，建议使用const这个关键字来定义。
// 对第二个变量的说明：解构出来的第二变量，其命名要求满足 set*格式，比如setUserInfo，这个set*是专门用于更新useInfo的。当set*方法调用时，当前函数式组件（整个函数）重新执行，返回新的JSX，进而执行协调运算（找出脏节点），最后提交更新DOM。
// 注意：在使用set*方法时，也要考虑新值与旧值的关系。当新值与旧值无关时，直接set*赋值；当新值与旧值有关时，用旧参与运算返回新值。


// 二、useEffect
// 什么是Effect？在这里我们称之为“副作用”。那什么是“副作用”？那些影响当前函数式组件运行效率的功能，比如DOM操作、BOM操作、定时器、调接口等等。

// 两类副作用：第一类是需要清除的副作用，比如定时器、长连接、缓存。另一类是不需要清除的副作用，比如DOM操作、BOM操作等。

// 需要清除副作用的语法：useEffect(()=>{ return ()=>{清除副作用}}, [])
// 不需要清除副作用的语法：useEffect(()=>{}, [])

// 第一个参数是函数，这个函数体中的代码相当于componentDidMount()的功能，这个函数还有一个返回值（要求返回一个函数），这个被返回的函数相当于componentWillUnmount()。
// 第二参数是响应式依赖，相当于componentDidUpdate()。当有“风吹草动”时（set*被调用时）：
  // 如果当前useEffect没有第二个参数，当前useEffect会重新重新。
  // 如果当前useEffect有第二个参数并且是空数组[]，当前useEffect只执行一次。
  // 如果当前useEffect有第二个参数并且是['响应式变量']，当响应式变量发生变化时当前useEffect再次执行。

// useEffect的使用原则：
  // 一个useEffect只做一件事（副作用），建议不要在同一个useEffect中同时做多个副作用，这会产生莫名其妙的bug。
  // 在使用useEffect时，一定要关注这个副作用是否需要清除，注意语法。
  // useEffect的第二个参数有三种写法，不同写法时useEffect的工作流程是完全不同的。

// useEffect的三种工作流程：
  // 当没有第二个参数时【useEffect(()=>{fn1();return fn2})】，初始化时fn1执行、fn2不执行；当set*调用时，先执行fn2，再执行fn1。当组件被路由销毁时，fn2执行。
  // 当第二个参数是空数组时【useEffect(()=>{fn1();return fn2}, [])】，初始化时fn1执行、fn2不执行；当set*调用时，fn2和fn1都不执行。当组件被路由销毁时，fn2执行。
  // 当第二个参数是“响应式依赖”的数据时【useEffect(()=>{fn1();return fn2}, [a,b,...])】，初始化时fn1执行、fn2不执行；当“响应式依赖”被set*改变时，先执行fn2，再执行fn1。当组件被路由销毁时，fn2执行。

// useContext
// useMemo
// useCallback
// useRef
// useReducer

import React, { useState, useEffect } from 'react'
import fetch from '@/utils/request'

export default () => {
  console.log('---rendered')
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  const [num, setNum] = useState(100)

  const [list, setList] = useState([])
  const [params, setParams] = useState({
    page: 1,
    limit: 5,
    tab: ''
  })

  useEffect(()=>{
    // console.log('---活了')
    // 这里相当于是componentDidMount()
    // 在副作用里开启定时器
    const timer = setTimeout(()=>{
      // console.log('---timer', num)
      setNum(num+1)
      // console.log('---timer', num)
    }, 2000)

    return ()=>{
      // 这里相当于是componentWillUnmount()
      clearTimeout(timer)
      // console.log('---死了')
    }
  }, [count, num])

  useEffect(()=>{
    // mounted(componentDidMount)
    document.getElementById('box').style.opacity = Math.random()
    console.log('dom 执行了')
  }, [count])

  useEffect(()=>{
    fetch({url:'/topics',params}).then(res=>{
      console.log('文章列表', res)
      if (params.page===1) setList(res)
      else setList([...list, ...res])
    })
  }, [params])

  const search = () => {
    console.log('调接口', text)
  }

  return (
    <div>
      <h2>学习Hooks系列API</h2>
      <h2>{ count }</h2>
      <div onClick={()=>setCount(count+1)}>自增</div>
      <div onClick={()=>setCount(count-1)}>自减</div>
      <hr/>
      <input
        type="text"
        value={text}
        onChange={ev=>setText(ev.target.value)}
        onKeyUp={search}
      />
      <hr/>
      <h2>{ num }</h2>
      <hr/>
      <div id='box'>颜色变化</div>
      <hr/>
      <div>
      {
        [
          { tab:'', label:'全部'},
          { tab:'good', label:'精华'},
          { tab:'ask', label:'问答'},
          { tab:'share', label:'分享'},
          { tab:'job', label:'抛出'}
        ].map(ele=>(
          <span
            key={ele.tab}
            onClick={()=>setParams({...params,tab:ele.tab,page:1})}
            style={{color:params.tab===ele.tab?"red":"black"}}
          >
            {ele.label}
          </span>
        ))
      }
      </div>
      {
        list.map(ele=>(
          <div key={ele.id}>{ele.title}</div>
        ))
      }
      <div onClick={()=>setParams({...params, page:params.page+1})}>加载更多</div>
    </div>
  )
}
