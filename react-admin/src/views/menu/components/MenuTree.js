import { useState } from 'react'
import { Tree } from 'antd'
import { menuData } from '../data'

export default ({value,onChange}) => {
  // const [keys, setKeys] = useState([])
  // const onSelect = (e1,e2,e3,e4,e5) => {
  //   console.log('tree select', e1, e2, e3, e4, e4)
  //   setKeys(e1)
  // }
  return (
    <div className='qf-menu-tree'>
      <Tree
        checkable
        onCheck={keys=>onChange(keys)}
        checkedKeys={value}
        treeData={menuData}
        fieldNames={{title:'text',key:'key',children:'children'}}
      />
    </div>
  )
}
