import React, { useMemo, useState, useEffect } from 'react'
import { Upload, message } from 'antd'
import ImgCrop from 'antd-img-crop'
import { useAppSelector } from '@/hooks'

export default (props:any) => {
  const { token } = useAppSelector(state=>state.user)
  // 用于当前图片Upload的组件的取值
  const [list, setList] = useState<any>([])
  const {value, onChange} = props

  useEffect(()=>{
    if (value) {
      const result = value.split(';').filter(ele=>ele).map(ele=>({
        thumbUrl: 'http://localhost:9999'+ele
      }))
      setList(result)
    }
  }, [value])

  const check = file => {
    if (file.size > 204800) {
      message.error('图片不能超过2M')
      return false
    }
    return true
  }

  const change = ({file, fileList}) => {
    console.log('file', file)
    console.log('filelist', fileList)
    // 触发三次onChange()
    setList(fileList)
    if (file.status==='done' && file.response && file.response.err===0) {
      // 表示当前上传图片成功，把图片URL返回给父组件
      // onChange(file.response.data.img)
      // 报错
      const image = fileList.reduce((prev,next)=>{
        if (next.status==='done') {
          return prev+`;${next.response.data.img}`
        } else {
          return prev+`;${next.thumbUrl.split('9999')[1]}`
        }
      }, '')
      console.log('----image', image)
      onChange(image)
    } else if (!file.status) {
      const image = fileList.reduce((prev,next)=>{
        if (next.status==='done') {
          return prev+`;${next.response.data.img}`
        } else {
          return prev+`;${next.thumbUrl.split('9999')[1]}`
        }
      }, '')
      console.log('----image', image)
      onChange(image)
    }
  }
  const remove = file => {
    console.log('---remove', file)
    // onChange(value.filter(ele=>ele.uid!==file.uid))
  }

  return (
    <ImgCrop rotate>
      <Upload
        action="http://localhost:8080/api/v2/article/upload"
        name='img'
        headers={{Authorization:token}}
        listType="picture-card"
        maxCount={2}
        fileList={list}
        onChange={change}
        beforeUpload={check}
      >
        {list.length<2 && '+ Upload'}
      </Upload>
    </ImgCrop>
  )
}
