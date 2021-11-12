// 根组件

import React, { useState } from 'react'
export default function App () {
  const [count, setCount] = useState(1)
  return (
    <>
      <div>hello world</div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>自增</button>
    </>
  )
}

// export default class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       count: 1
//     }
//   }
//   add() {
//     this.setState(state=>({
//       count: state.count+1
//     }))
//   }
//   render() {
//     const { count } = this.state
//     return (
//       <>
//         <div>hello world</div>
//         <h1>{count}</h1>
//         <button onClick={this.add.bind(this)}>自增</button>
//       </>
//     )
//   }
// }
