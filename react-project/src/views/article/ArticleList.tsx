import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input, Button, Table } from 'antd'
import './style.scss'

import QfTable from './components/QfTable'
import { listArticle } from '@/store/reducers/article'

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
  const [title, setTitle] = useState<any>('')
  return (
    <div className='qf-article-list'>
      <div className='top'>
        <div>文章搜索</div>
        <div className='search'>
          <Input
            onPressEnter={(e:any)=>setTitle(e.target.value)}
            onChange={(e:any)=>{e.target.value===''&&setTitle('')}}
          />
          <Button type='primary'>搜索</Button>
        </div>
      </div>
      <article>
        <QfTable
          title='文章表格'
          request={listArticle}
          query={{title}}
          columns={columns}
          buttons={buttons}
          skipTo={()=>navigate('/article/add')}
        />
      </article>
    </div>
  )
}
