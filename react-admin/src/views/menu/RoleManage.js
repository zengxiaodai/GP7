import { Table, Button } from 'antd'
import { useHistory } from 'react-router-dom'
import './style.scss'

const columns = [
  {
    title: '员工角色',
    dataIndex: 'role_name',
    key: 'role_name',
    align: 'center'
  },
  {
    title: '描述',
    dataIndex: 'role_desc',
    key: 'role_desc',
    align: 'center'
  },
  {
    title: '员工数量',
    dataIndex: 'num',
    key: 'num',
    align: 'center'
  },
  {
    title: '操作',
    key: 'tags',
    dataIndex: 'tags',
    align: 'center',
    render: ()=>(
      <>
        <Button type='primary' size='small'>编辑</Button>
        <Button danger size='small' style={{marginLeft:'10px'}}>删除</Button>
      </>
    )
  }
]

const data = [
  {
    key: '1',
    role_name: '系统管理员',
    role_desc: '什么都行',
    num: 1,
  },
  {
    key: '2',
    role_name: '编辑',
    role_desc: '什么都不行',
    num: 0,
  },
]

export default () => {
  const history = useHistory()
  return (
    <div className='qf-role-manage'>
      <Table
        columns={columns}
        dataSource={data}
        rowKey='key'
        title={()=><Button type='primary' onClick={()=>history.push('/role/create')}>添加角色</Button>}
      />
    </div>
  )
}
