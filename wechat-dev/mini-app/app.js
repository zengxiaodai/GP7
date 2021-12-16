// 注册小程序：只一个小程序中，只有一个App组件
App({
  onLaunch() {
    // onLaunch是一个生命周期，只有App才有，是入口
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  // 放在小程序应用最顶层的数据（不具备响应式）
  globalData: {
    userInfo: null
  }
})
