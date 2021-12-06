import fetch from '../utils/fetch'

// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export function fetchLogin(data:any) {
  return fetch({url:'/login', method:'POST', data})
}
