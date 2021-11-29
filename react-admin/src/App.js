import { Provider } from 'react-redux'
import store from '@/store'

import TestRedux from '@/views/study'
// import TodoList from '@/views/study/TodoList'
// import TodoListAjax from '@/views/study/TodoListAjax'


console.log('store', store)
console.log('state', store.getState())

export default function App() {
  return (
    <Provider store={store}>
      <TestRedux />
    </Provider>
  )
}
