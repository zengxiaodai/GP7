// 初始化可共享的状态数据
const initState = {
  msg: 1
}

// action = { type, payload }
export default function (state=initState, {type,payload}) {
  console.log('有信号来了', type, payload)
  const newState = JSON.parse(JSON.stringify(state))
  switch (type) {
    case 'change1':
      newState.msg+=payload
      break
    default:

  }
  return newState
}
