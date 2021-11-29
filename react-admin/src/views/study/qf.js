import { useState, useEffect, useReducer } from 'react'
import store from '@/store'
// store.getState()
// store.subscribe()
// store.dispatch()

// export default qfconnect(
//   function mapStateToProps(state) {
//     return {
//       msg: state.user.msg
//     }
//
//
//   function mapDispatchToProps(dispatch) {
//     return {
//       changeMsg: function() {
//         dispatch({type,payload})
//       }
//     }
//   }
// )(Home)

function qfconnect(mapStateToProps, mapDispatchToProps) {
  // do something
  const actions = mapDispatchToProps(store.dispatch)
  console.log('actions', actions)

  return function (C) {
    // 高阶组件一定要返回一个新的组件(而不是新的JSX)
    return props => {
      const [state, setState] = useState(mapStateToProps(store.getState()))
      useEffect(()=>{
        // 监听store的变化,每当store变化时,回调函数就会执行
        const unsubcrible = store.subscribe(()=>{
          const newState = store.getState()
          setState(mapStateToProps(newState))
        })
        return () => unsubcrible()
      }, [store])
      return (
        <C {...props} {...actions} {...state} />
      )
    }
  }
}

// const dispatch = useDispatch()
function useQfDispatch() {
  return store.dispatch
}

// const msg = useSelector(state=>state.user.msg)
// function useQfSelector(fn) {
//   const [state, setState] = useState(fn(store.getState()))
//   useEffect(()=>{
//     const unsubcrible = store.subscribe(()=>{
//       setState(fn(store.getState()))
//     })
//     return ()=>unsubcrible()
//   }, [store])
//   return state
// }

// function useQfSelector(fn) {
//   const [,dispatch] = useReducer(s=>s+1, 0)
//   useEffect(()=>{
//     const unsubcrible = store.subscribe(()=>dispatch())
//     return ()=>unsubcrible()
//   }, [store])
//   return fn(store.getState())
// }

function useQfSelector(fn) {
  const [,forceRender] = useReducer(s=>s+1, 0)
  store.subscribe(()=>forceRender())
  return fn(store.getState())
}

export {
  qfconnect,
  useQfDispatch,
  useQfSelector
}
