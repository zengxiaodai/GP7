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
    <Content>
      <div className='qf-content'>
        <Switch>
          { renderRoutes() }
          <Redirect from='/*' to='/user/list' />
        </Switch>
      </div>
      <div className='qf-footer'>千锋出品</div>
    </Content>
  )
}
