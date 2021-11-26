import { connect } from 'react-redux'

export default connect(
  state => ({
    msg: state.study.msg
  }),
  dispatch => ({
    changeMsg: payload => dispatch({type:'change', payload})
  })
)(
  props => (
    <div>
      <h1>{ props.msg }</h1>
      <button onClick={()=>props.changeMsg(2)}>修改MSG</button>
    </div>
  )
)
