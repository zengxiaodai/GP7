import React from 'react'

// 创建上下文组件
const ThemeContext = React.createContext()
const { Provider, Consumer } = ThemeContext
// Provider 向组件树中“注入”数据（提供者）
// Cunsumer 从组件树中“取出”数据（消费者）

export { Provider, Consumer }
export default ThemeContext
