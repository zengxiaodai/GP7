import { Row, Col, Input, Select, Button, Table, Tag, Space } from 'antd'
import './style.scss'

const RoleSelect = () => (
  <Select style={{width:'120px'}}>
  {
    [
      {id:1,role:'admin',role_name:'系统管理员'},
      {id:2,role:'editor',role_name:'编辑'},
      {id:3,role:'teacher',role_name:'讲师'}
    ].map(ele=>(
      <Select.Option key={ele.id} value={ele.role}>
      {ele.role_name}
      </Select.Option>

    ))
  }
  </Select>
)

const data = [
  {
    id: 1,
    name: '张三',
    role: 'admin',
    role_name: '系统管理员',
    status: 1
  },
  {
    id: 2,
    name: '李四',
    role: 'editor',
    role_name: '编辑',
    status: 1
  },
]

const columns = [
  {
    align: 'center',
    title: '序号',
    key: 'index',
    dataIndex: 'id',
    render: (text,row,index)=><div>{index}</div>
  },
  {
    align: 'center',
    title: '用户名',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    align: 'center',
    title: '角色',
    dataIndex: 'role',
    key: 'role',
  },
  {
    align: 'center',
    title: '角色名称',
    dataIndex: 'role_name',
    key: 'role_name',
  },
  {
    align: 'center',
    title: '状态',
    dataIndex: 'status',
    key: 'status',
  },
  {
    align: 'center',
    title: '操作',
    key: 'tags',
    dataIndex: 'tags',
    render: () => (
      <>
        <Button size='small' type="primary">编辑</Button>
        <Button size='small' danger style={{marginLeft:'10px'}}>删除</Button>
      </>
    ),
  }
]

export default () => {
  return (
    <div className='qf-user-manage'>

      <div className='user-add'>
        <Row align='middle'>
          <Col span={2} className='label'>用户名:</Col>
          <Col span={4}>
            <Input placeholder="用户名" />
          </Col>
          <Col span={2} className='label'>角色:</Col>
          <Col span={4}>
            <RoleSelect />
          </Col>
          <Col span={2} className='label'>身份证:</Col>
          <Col span={6}>
            <Input placeholder="身份证号" />
          </Col>
        </Row>
        <Row align='middle' style={{marginTop:'20px'}}>
          <Col span={2} className='label'>手机号:</Col>
          <Col span={4}>
            <Input placeholder="用户名" />
          </Col>
        </Row>
        <Row align='middle' style={{marginTop:'20px'}}>
          <Col span={2} className='label'></Col>
          <Col span={4}>
            <Button type="primary">添加</Button>
          </Col>
        </Row>
      </div>

      <div className='user-table'>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            total: 23,
            showTotal: (total, range) => `第${range[0]}-${range[1]}条 / 总共${total}条`,
            pageSizeOptions: [2,5,10,20],
            size: 'small'
          }}
        />
      </div>
    </div>
  )
}
