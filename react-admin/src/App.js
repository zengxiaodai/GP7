import { HashRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import store from '@/store'
import Layout from '@/layout'
import Login from '@/login'
import zhCN from 'antd/lib/locale/zh_CN'

const System = () => {
  return (
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/dashboard' component={Layout} />
    </Switch>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <ConfigProvider locale={zhCN}>
          <System />
        </ConfigProvider>
      </Provider>
    </HashRouter>
  )
}
