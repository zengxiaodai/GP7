import { Select } from 'antd'
const { Option } = Select

export default ({value,onChange}) => (
  <Select
    style={{width:'120px'}}
    value={value}
    onChange={val=>onChange(val)}
  >
  {
    [
      {id:1,role:'admin',role_name:'系统管理员'},
      {id:2,role:'editor',role_name:'编辑'},
      {id:3,role:'teacher',role_name:'讲师'}
    ].map(ele=>(
      <Select.Option key={ele.id} value={ele.role}>
      {ele.role_name}
      </Select.Option>
    ))
  }
  </Select>
)
