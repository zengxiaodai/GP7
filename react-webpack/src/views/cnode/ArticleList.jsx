import React, { useState, useEffect } from 'react'
import { Button } from 'antd-mobile'
import { useHistory } from 'react-router-dom'

import request from '@/utils/request'

export default () => {

  const [list, setList] = useState([])
  const history = useHistory()

  useEffect(()=>{
    request('/topics', {}).then(list=>{
      setList(list)
    })
  }, [])

  const skipToDetail = ele => {
    console.log('press')
    history.push(`/detail/${ele.id}?articleId=${ele.id}`)
  }

  return (
    <div className='qf-article-list'>
      <Button type="primary">default</Button>
      {
        list.map(ele=>(
          <div key={ele.id} onClick={()=>skipToDetail(ele)}>
            { ele.title }
          </div>
        ))
      }
    </div>
  )
}
