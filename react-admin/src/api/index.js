import fetch from '@/utils/fetch'

// 【TodoList】
export function fetchTodoList(params) {
  return fetch({url:'/todo/getTodoList',method:'GET',params})
}

export function fetchTodoAdd(data) {
  return fetch({url:'/todo/addTodo',method:'POST',data})
}

export function fetchTodoDel(params) {
  return fetch({url:'/todo/delTodo',method:'GET',params})
}

export function fetchTodoStatus(params) {
  return fetch({url:'/todo/transferTodo',method:'GET',params})
}

export function fetchTodoEdit(data) {
  return fetch({url:'/todo/updTodo',method:'POST',data})
}


// 【用户相关接口】

export function fetchLogin(data) {
  return fetch({url:'/login',method:'POST',data})
}

export function fetchUserInfo(params) {
  return fetch({url:'/user/info',method:'GET',params})
}
