import {
  CopyOutlined
} from '@ant-design/icons'

import ArticleList from './article/ArticleList'
import ArticleAdd from './article/ArticleAdd'

// 前端所有页面信息都定义在这里，最终由后端返回的role、menuArr来决定渲染哪些页面。
const icons = {
  article: <CopyOutlined />,
  article_list: <CopyOutlined />,
  article_add: <CopyOutlined />,
}

const elements = {
  article_list: <ArticleList />,
  article_add: <ArticleAdd />
}

export {
  icons,
  elements
}
