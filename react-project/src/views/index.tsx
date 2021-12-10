import {
  CopyOutlined
} from '@ant-design/icons'

import ArticleList from './article/ArticleList'
import ArticleForm from './article/ArticleForm'

// 前端所有页面信息都定义在这里，最终由后端返回的role、menuArr来决定渲染哪些页面。
const icons = {
  article: <CopyOutlined />,
  article_list: <CopyOutlined />,
  article_add: <CopyOutlined />,
  article_edit: <CopyOutlined />
}

const elements = {
  article_list: <ArticleList />,
  article_add: <ArticleForm />,
  article_edit: <ArticleForm />
}

export {
  icons,
  elements
}
