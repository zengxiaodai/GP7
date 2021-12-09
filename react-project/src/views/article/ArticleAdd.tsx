import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Form, Switch, Upload, Input, Button, message } from 'antd'
import QfQuill from './components/QfQuill'
import QfUpload from './components/QfUpload'
import './style.scss'

import { useAppDispatch } from '@/hooks'
import { checkArticleTitle, checkArticleAuthor, checkArticleImage } from '@/utils/validate'
import { updateArticle } from '@/store/reducers/article'

export default () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const onFinish = (values) => {
    console.log('提交', values)
    let image = values.image.reduce((prev,next)=>prev+next.thumbUrl, '')
    values.image = image
    dispatch(updateArticle(values)).then(res=>{
      console.log('文章新增成功', res)
      if (res.payload) {
        message.success('文章添加成功', 1.5, ()=>{
          navigate(-1)
        })
      }
    })
  }
  return (
    <div className='qf-article-add'>
      <Form
        labelCol={{span:2}}
        wrapperCol={{span:8}}
        name="nest-messages"
        initialValues={{
          title:'',
          author: '',
          top: false,
          image:[],
          content: ''
        }}
        onFinish={onFinish}
        validateTrigger={['onBlur','onChange']}
      >
        <Form.Item
          name='title'
          label="文章标题"
          rules={[
            { required: true, message:'标题是必填字段' },
            { validator: checkArticleTitle, message:'标签只能6~20字符' }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='author'
          label="作者"
          rules={[
            { required: true, message:'作者是必填字段' },
            { validator: checkArticleAuthor, message:'标签只能2~6字符' }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='top'
          label="是否置顶"
          valuePropName='checked'
          rules={[
            { required: true, message:'置顶是必填字符' }
          ]}
        >
          <Switch />
        </Form.Item>

        <Form.Item
          name='image'
          label="缩略图"
          rules={[
            { required: true, message:'请上传两缩略图' },
            { validator: checkArticleImage, message:'必须是两张图片' }
          ]}
        >
          <QfUpload />
        </Form.Item>

        <Form.Item
          name='content'
          wrapperCol={{offset:2, span:18}}
          style={{height:'330px'}}
        >
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
