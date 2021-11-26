import { useSelector, useDispatch } from 'react-redux'

export default () => {
  const msg = useSelector(state=>state.study.msg)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>{ msg }</h1>
      <button onClick={()=>dispatch({type:'change',payload:-1})}>修改MSG</button>
    </div>
  )
}
