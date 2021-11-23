import React from 'react'
import { Button } from 'antd-mobile'

export default props => {
  console.log('ArticleList props', props)
  return (
    <div className='qf-article-list'>
      <Button type="primary">default</Button>
    </div>
  )
}
