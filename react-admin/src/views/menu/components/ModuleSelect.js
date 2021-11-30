import { Select, Button, Row, Col } from 'antd'
const { Option } = Select

export default ({value,onChange}) => {
  return (
    <div className='qf-module-select'>
      <Row>
        <Col span={16}>
          <Select value={value} onChange={val=>onChange(val)}>
            <Option value='good'>商品管理</Option>
            <Option value='order'>订单管理</Option>
          </Select>
        </Col>
        <Col span={4}><Button>添加模块</Button></Col>
      </Row>
    </div>
  )
}
