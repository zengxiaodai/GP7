import { Provider } from 'react-redux'
import store from '@/store'

import TestRedux from '@/views/study'

console.log('store', store)
console.log('state', store.getState())

export default function App() {
  return (
    <Provider store={store}>
      <TestRedux />
    </Provider>
  )
}
