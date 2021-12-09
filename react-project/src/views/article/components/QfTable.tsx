import React, { useState, useMemo } from 'react'
import { Table, Button, Row, Col, Dropdown, Menu } from 'antd'
import { PlusOutlined, ReloadOutlined, ColumnHeightOutlined, SettingOutlined } from '@ant-design/icons'
import './style.scss'

import data from '../data'

interface Props {
  title: string,
  request: ()=>void,
  query: object,
  columns: any,
  buttons?: any,
  global?: object,
  skipTo?: ()=>void,
  [propName:string]: any
}


const sizes = [
  { value: 'default', label: '默认' },
  { value: 'middle', label: '中等' },
  { value: 'small', label: '紧凑' }
]

const TableTitle = props => {
  const { title, skipTo, size, onChange } = props

  return (
    <Row>
      <Col span={4}>{title}</Col>
      <Col offset={12} span={8} className='title-btns'>
        <Button type='primary' onClick={skipTo} icon={<PlusOutlined />}>新增</Button>
        <ReloadOutlined />
        <Dropdown
          overlay={
            <Menu>
              {
                sizes.map(ele=>(
                  <Menu.Item
                    key={ele.value}
                    onClick={()=>onChange(ele.value)}>
                    <div
                      style={{color:size===ele.value?'blue':'black'}}>
                      { ele.label }
                    </div>
                  </Menu.Item>
                ))
              }
            </Menu>
          }
          placement="bottomLeft">
          <ColumnHeightOutlined />
        </Dropdown>
        <SettingOutlined />
      </Col>
    </Row>
  )
}

export default (props:Props) => {
  const [size, setSize] = useState<any>('default')
  const { columns, title, buttons } = props

  const cols = useMemo(()=>(
    columns.map((ele,idx)=>{
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
  ), [])
  return (
    <div className='qf-table'>
      <Table
        rowSelection={{type: 'checkbox'}}
        columns={cols}
        size={size}
        rowKey='_id'
        dataSource={data}
        title={()=>(
          <TableTitle
            {...props}
            size={size}
            onChange={val=>setSize(val)}
          />
        )}
        footer={()=>{
          return buttons.map((ele,idx)=>(
            <Button
              key={idx}
              style={{margin:'5px'}}
              type='primary'
              danger={ele[2]&&ele[2].danger}
              size={size}
              onClick={ele[1]}>
              {ele[0]}
            </Button>
          ))
        }}
        pagination={{
          total: 16,
          size,
          showSizeChanger: true,
          showQuickJumper: true,
          showTotal: total => (`Total ${total} items`)
        }}
      />
    </div>
  )
}
