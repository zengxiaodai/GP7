import produce from 'immer'
import {
  USER_LOGIN,
  USER_INFO
} from '../actions'

const initState = {
  token: localStorage.getItem('token'),
  userInfo: {}
}

export default function(state=initState, {type,payload}) {
  return produce(state, state=>{
    switch (type) {
      case USER_LOGIN:
        state.token = payload
        break
      case USER_INFO:
        state.userInfo = payload.userInfo
        state.roleInfo = payload.roleInfo
        break
      default:
    }
  })
}
