import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input, Button, Table } from 'antd'
import './style.scss'

import QfTable from './components/QfTable'

const columns = [
  ['标题', 'title'],
  ['作者', 'author'],
  ['置顶', 'top'],
  ['发布时间', 'create_time'],
  [
    // ['删除', ()=>{}, {danger:true} ],
    ['编辑', ()=>{} ]
  ]
]

const buttons = [
  ['导出', ()=>{} ],
  ['删除', ()=>{}, {danger:true}]
]

export default () => {
  const navigate = useNavigate()
  return (
    <div className='qf-article-list'>
      <div className='top'>
        <div>文章搜索</div>
        <div className='search'>
          <Input />
          <Button type='primary'>搜索</Button>
        </div>
      </div>
      <article>
        <QfTable
          title='文章表格'
          request={()=>console.log('调接口')}
          query={{text:''}}
          columns={columns}
          buttons={buttons}
          skipTo={()=>navigate('/article/add')}
        />
      </article>
    </div>
  )
}
