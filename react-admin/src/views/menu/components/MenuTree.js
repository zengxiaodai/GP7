import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Tree } from 'antd'
import { menuData } from '../data'

export default ({value,onChange}) => {
  // const [keys, setKeys] = useState([])
  // const onSelect = (e1,e2,e3,e4,e5) => {
  //   console.log('tree select', e1, e2, e3, e4, e4)
  //   setKeys(e1)
  // }
  const { menuList } = useSelector(state=>state.admin)
  return (
    <div className='qf-menu-tree'>
      <Tree
        checkable
        onCheck={keys=>onChange(keys)}
        checkedKeys={value}
        treeData={menuList}
        fieldNames={{title:'text',key:'_id',children:'children'}}
      />
    </div>
  )
}
