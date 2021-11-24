import React from 'react'
import loadable from "@loadable/component"

// React.Suspense 、React.lazy() 用React这两个API也能实现“代码分割”，但推荐使用@loadable/component

const Loading = ()=>(<div>Loading...</div>)

// 代码分割（webpack支持代码分割）
const TestJSX = loadable(()=>import('@/views/study/12/TestJSX'),{fallback:<Loading/>})

const TestProps = loadable(()=>import('@/views/study/12/TestProps'),{fallback:<Loading/>})

// import TestState from '@/views/study/12/TestState'
// import TestEvent from '@/views/study/12/TestEvent'
// import TestCondition from '@/views/study/12/TestCondition'
// import TestList from '@/views/study/12/TestList'
// import TestForm from '@/views/study/12/TestForm'
// import TestLife from '@/views/study/12/TestLife'

// import TestLift from '@/views/study/14/TestLift'
// import TestCombine from '@/views/study/14/TestCombine'

// import TestContext from '@/views/study/16/TestContext'
// import TestHoc from '@/views/study/16/TestHoc'
// import TestHooks from '@/views/study/16/TestHooks'

// webapp
const ArticleList = loadable(()=>import('@/views/cnode/ArticleList'),{fallback:<Loading/>})
const ArticleDetail = loadable(()=>import('@/views/cnode/ArticleDetail'),{fallback:<Loading/>})
const Find = loadable(()=>import('@/views/find/Find'))

const routes = [
  { id: 1, path: '/jsx', component: TestJSX },
  { id: 2, path: '/props', component: TestProps },
  // 首页加 exact 精准匹配。
  { id: 2001, exact:true, path: '/', component: ArticleList },
  { id: 2004, path: '/detail/:id', component: ArticleDetail },
  { id: 2002, path: '/find', component: Find },
  { id: 2003, path: '/user', component: ArticleList },
]

export default routes
