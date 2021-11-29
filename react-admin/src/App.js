import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@/store'
import Layout from '@/layout'

export default function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <Layout />
      </Provider>
    </HashRouter>
  )
}
