import React from 'react'
import { Form, Switch, Upload, Input, Button } from 'antd'
import './style.scss'
import QfQuill from './components/QfQuill'
import QfUpload from './components/QfUpload'

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

export default () => {
  const onFinish = (values) => {
    console.log('提交', values)
  }
  return (
    <div className='qf-article-add'>
      <Form
        labelCol={{span:2}}
        wrapperCol={{span:8}}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name='title'
          label="文章标题"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='author'
          label="作者"
          rules={[]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='top'
          label="是否置顶"
          valuePropName='checked'
          rules={[]}
        >
          <Switch />
        </Form.Item>
        <Form.Item
          name='image'
          label="缩略图">
          <QfUpload />
        </Form.Item>

        <Form.Item wrapperCol={{offset:2, span:18}} style={{height:'330px'}}>
          <QfQuill />
        </Form.Item>

        <Form.Item wrapperCol={{offset:2}}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>


    </div>
  )
}
