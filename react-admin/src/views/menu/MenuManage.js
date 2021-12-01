import { useState } from 'react'
import { Form, Input, InputNumber, Button, Select, Table, Modal } from 'antd'
import './style.scss'
import ModuleSelect from './components/ModuleSelect'
import { menuData } from './data'

const { Option } = Select

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
  const [menuModalShow, setMenuModalShow] = useState(false)
  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log('提交', values)
  }

  const submitMenu = () => {
    console.log('提交', form.getFieldsValue())
  }

  return (
    <div className='qf-menu-manage'>
      <div className='menu-table'>
        <Table
          columns={columns}
          dataSource={menuData}
          title={()=>(
            <>
              <Button type='primary'>添加菜单模块</Button>
              <Button
                style={{marginLeft:'10px'}}
                onClick={()=>setMenuModalShow(true)}
                type='primary'>添加菜单</Button>
            </>
          )}
        />
      </div>

      {/*添加菜单的弹框*/}
      <Modal
        title="添加菜单"
        visible={menuModalShow}
        onOk={()=>submitMenu()}
        onCancel={()=>setMenuModalShow(false)}>
        <Form
          labelCol={{span:6}}
          wrapperCol={{span:16}}
          name="nest-messages"
          onFinish={onFinish}
          form={form}
          validateMessages={validateMessages}>
          {/* value  onChange */}
          <Form.Item
            name='module'
            label="选择模块"
          >
            <Select>
              <Option value='good'>商品管理</Option>
              <Option value='order'>订单管理</Option>
            </Select>
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
        </Form>
      </Modal>
    </div>
  )
}
