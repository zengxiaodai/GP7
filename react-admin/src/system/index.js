import { useEffect } from 'react'
import { Switch, Route, Redirect, useHistory, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Layout from './layout'
import Login from './login'
import { getUserInfo } from '@/store/actions'

export default () => {
  const history = useHistory()
  const location = useLocation()
  console.log('location', location)
  const dispatch = useDispatch()
  const { token, userInfo } = useSelector(state=>state.admin)

  // 没有token，只能看到Loign，不能看Layout
  // 有token也有useInfo，正常显示Layout，但不能访问Login
  // 有token、但没有userInfo，正常看到Layout（自动触发获取用户信息）

  console.log('------------------', 'token', token, 'userInfo', userInfo)

  // 只能在登录流程中运行
  useEffect(()=>{
    if (location.pathname==='/login' && userInfo._id) {
      // 登录成功跳转首页
      history.replace('/user/list')
    }
  }, [userInfo])

  useEffect(()=>{
    if (token && !userInfo._id) dispatch(getUserInfo())
  })

  return (
    <Switch>
      {
        token
        ? (
          userInfo._id
          ? <Route path='/' component={Layout} />
          : <div>Loading...</div>
        )
        : [
          <Route key='1' path='/login' component={Login} />,
          <Redirect key='2' from='/*' to='/login' />
        ]
      }
    </Switch>
  )
}
