import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { Form, Input, Tree, Button, message } from 'antd'
import { RoleSelect } from '@/components'
import MenuTree from './components/MenuTree'
import './style.scss'

import { addRole, listMenu, resetAdmin } from '@/store/actions'

const { TextArea } = Input

export default () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { menuList, done } = useSelector(state=>state.admin)

  console.log('menuList', menuList)

  useEffect(()=>{
    if (done>0) {
      message.success('添加角色成功', 2, ()=>history.goBack())
    }
  }, [done])

  useEffect(()=>{
    if (menuList.length===0) dispatch(listMenu())
    // 当组件销毁时，走store流程重置done
    return ()=>dispatch(resetAdmin())
  }, [])

  const onFinish = (values) => {
    console.log('提交', values)
    values.menus = values.auths.join(';')
    dispatch(addRole(values))
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
          label="角色（中文）"
        >
          <Input />
        </Form.Item>

        <Form.Item
          name='role'
          label="角色（英文）"
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
          name='role_refer'
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
