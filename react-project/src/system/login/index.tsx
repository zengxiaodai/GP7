import React from 'react';
import { useNavigate } from 'react-router-dom'

import { Form, Input, Button, Checkbox } from 'antd'
import './style.scss'

import { useAppDispatch, useAppSelector } from '@/hooks'
import { login } from '@/store/reducers/user'

export default () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const onFinish = (values:any) => {
    console.log('登录', values)
    dispatch(login(values)).then(res=>{
      console.log('登录成功', res)
      navigate('/good')
    })
  }

  return (
    <div className='qf-login'>
      <div className='wrap'>
        <Form
          name="basic"
          labelCol={{span:6}}
          wrapperCol={{span:16}}
          initialValues={{remember: true}}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{offset:6,span:16}}
          >
            <Checkbox>记住我</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{offset:6,span:16}}
          >
            <Button
              type="primary"
              htmlType="submit"
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
