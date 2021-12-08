import React from 'react'
import { Table, Button } from 'antd'

import data from '../data'

interface Props {
  title: string,
  request: ()=>void,
  query: object,
  columns: any,
  buttons?: any,
  global?: object,
  [propName:string]: any
}

export default (props:Props) => {
  const { columns, title, buttons } = props
  const cols = columns.map((ele,idx)=>{
    if (idx<columns.length-1) {
      return ({
        title: ele[0],
        align: 'center',
        dataIndex: ele[1]
      })
    } else {
      return ({
        title: '操作',
        align: 'center',
        dataIndex: 'handle',
        render: ()=>{
          return ele.map((ele,idx)=>(
            <Button
              key={idx}
              type='primary'
              danger={ele[2]&&ele[2].danger}
              size='small'
              style={{marginLeft:'10px'}}
              onClick={ele[1]}>
              {ele[0]}
            </Button>
          ))
        }
      })
    }
  })
  return (
    <Table
      rowSelection={{type: 'checkbox'}}
      columns={cols}
      size='small'
      dataSource={data}
      title={()=>{
        return (
          <div
            style={{fontSize:'14px',fontWeight:'bold'}}>
            {title}
          </div>
        )
      }}
      footer={()=>{
        return buttons.map((ele,idx)=>(
          <Button
            key={idx}
            style={{margin:'5px'}}
            type='primary'
            danger={ele[2]&&ele[2].danger}
            size='small'
            onClick={ele[1]}>
            {ele[0]}
          </Button>
        ))
      }}
      pagination={{
        total: 16,
        size: 'small',
        showSizeChanger: true,
        showQuickJumper: true,
        showTotal: total => (`Total ${total} items`)
      }}
    />
  )
}
