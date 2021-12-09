import React from 'react'
import { Upload, message } from 'antd'
import ImgCrop from 'antd-img-crop'
import { useAppSelector } from '@/hooks'

export default (props:any) => {
  const { token } = useAppSelector(state=>state.user)
  const {value, onChange} = props
  const check = file => {
    if (file.size > 204800) {
      message.error('图片不能超过2M')
      return false
    }
    return true
  }

  const change = ({file, fileList}) => {
    if (file.status==='done' && file.response && file.response.err===0) {
      // 表示当前上传图片成功，把图片URL返回给父组件
      // onChange(file.response.data.img)
      let result:any[] = []
      fileList.map((ele)=>{
        result.push({
          uid: ele.uid,
          name: ele.name,
          thumbUrl: ele.response.data.img
        })
      })
      onChange(result)
    }
  }
  const remove = file => {
    onChange(value.filter(ele=>ele.uid!==file.uid))
  }
  console.log('img value', value)
  return (
    <ImgCrop rotate>
      <Upload
        action="http://localhost:8080/api/v2/article/upload"
        name='img'
        headers={{Authorization:token}}
        listType="picture-card"
        maxCount={2}
        onChange={change}
        onRemove={remove}
        beforeUpload={check}
      >
        {value.length<2 && '+ Upload'}
      </Upload>
    </ImgCrop>
  )
}
