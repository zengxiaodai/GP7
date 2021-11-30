import { Form, Input, Tree, Button } from 'antd'
import { RoleSelect } from '@/components'
import MenuTree from './components/MenuTree'
import './style.scss'

const { TextArea } = Input

export default () => {
  const onFinish = (values) => {
    console.log('提交', values)
  }
  return (
    <div className="qf-role-form">
      <Form
        labelCol={{span:3}}
        wrapperCol={{span:7}}
        name="nest-messages"
        onFinish={onFinish}>

        {/* value  onChange */}
        <Form.Item
          name='role_name'
          label="角色名称"
        >
          <Input />
        </Form.Item>

        <Form.Item
          name='role_desc'
          label="角色描述"
        >
          <TextArea />
        </Form.Item>

        <Form.Item
          name='role'
          label="参考角色"
        >
          <RoleSelect />
        </Form.Item>

        <Form.Item
          label='权限'
          name='auths'
        >
          <MenuTree />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 7, offset: 3 }}>
          <Button type="primary" htmlType="submit">
            添加
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
