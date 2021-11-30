import { Form, Input, InputNumber, Button, Select, Table } from 'antd'
import './style.scss'
import ModuleSelect from './components/ModuleSelect'
import { menuData } from './data'

const { Option } = Select

const layout = {
  labelCol: {
    span: 3,
  },
  wrapperCol: {
    span: 7
  }
}

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
}

const columns = [
  {
    title: '模块名称',
    dataIndex: 'text',
    key: 'text',
    align: 'center'
  },
  {
    title: 'path路由',
    align: 'center',
    dataIndex: 'path',
    key: 'path'
  },
  {
    title: 'ICON图标',
    align: 'center',
    dataIndex: 'icon',
    key: 'icon',
  },
  {
    title: '组件名称',
    align: 'center',
    dataIndex: 'component',
    key: 'component',
  },
  {
    title: '操作',
    align: 'center',
    dataIndex: 'handle',
    key: 'handle',
    render: () => (
      <>
        <Button type='primary' size='small'>编辑</Button>
        <Button danger size='small' style={{marginLeft:'10px'}}>删除</Button>
      </>
    )
  }
]

export default () => {

  const onFinish = (values) => {
    console.log('提交', values)
  }

  return (
    <div className='qf-menu-manage'>
      <div className='menu-add'>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}>

          {/* value  onChange */}
          <Form.Item
            name='module'
            label="选择模块"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <ModuleSelect />
          </Form.Item>

          <Form.Item
            name='text'
            label="菜单名称"
          >
            <Input />
          </Form.Item>

          <Form.Item
            name='icon'
            label="ICON图标"
          >
            <Input />
          </Form.Item>

          <Form.Item
            name='path'
            label="path路由"
          >
            <Input />
          </Form.Item>

          <Form.Item
            name='name'
            label="组件名称"
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 3 }}>
            <Button type="primary" htmlType="submit">
              添加
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className='menu-table'>
        <Table
          columns={columns}
          dataSource={menuData}
        />
      </div>
    </div>
  )
}
