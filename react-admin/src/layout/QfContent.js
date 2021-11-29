import { Route, Switch, Redirect } from 'react-router-dom'
import { Layout } from 'antd'
import routes from '@/views'
const { Content } = Layout

export default () => {
  const renderRoutes = () => {
    const result = [] // Route
    function recursion(arr) {
      arr.map(ele=>{
        result.push(
          <Route key={ele.id} exact path={ele.path} component={ele.component} />
        )
        if(ele.children) recursion(ele.children)
      })
    }
    routes.map(ele=>{
      if (ele.children) {
        recursion(ele.children)
      }
    })
    return result
  }
  return (
    <Content
      className="site-layout-background"
      style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
      }}
    >
      <Switch>
        { renderRoutes() }
      </Switch>
    </Content>
  )
}
