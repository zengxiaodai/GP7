import React from 'react'
import { Upload } from 'antd'
import ImgCrop from 'antd-img-crop'

export default () => {
  return (
    <ImgCrop rotate>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
      >
        {1 < 5 && '+ Upload'}
      </Upload>
    </ImgCrop>
  )
}
