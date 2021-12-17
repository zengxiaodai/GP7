// index.js
// 获取应用实例
const app = getApp()

// 注册页面（页面组件，要配置在路由中的）
Page({
  data: {
    motto: 'Hello World',
    show: true
  },
  onShow() {
    wx.getSetting({
      success: (res) => {
        this.setData({show: res.authSetting['scope.userLocation']})
      }
    })
  },
  openLogin() {
    wx.openSetting({
      success(res) {
        console.log('用户手动授权了', res)
      },
      fail(err) {
        console.log('用户手动，未授权', err)
      }
    })
  },


  rpx2px(rpx) {
    // 当前手机的真实宽度（px）
    const width = wx.getSystemInfoSync().windowWidth
    return width*rpx/750

    // 使用等比缩放实现canvas在不同手机的样式兼容性
    // const dpr = wx.getSystemInfoSync().pixelRatio
    // canvas.width = res[0].width * dpr
    // canvas.height = res[0].height * dpr
    // ctx.scale(dpr, dpr)
  },
  // 用于支持最新drawImage()写法
  async getImage(path) {
      const c = wx.createOffscreenCanvas({type: '2d'})
      const image = c.createImage()
      await new Promise(resolve => {
        image.onload = resolve
        image.src = path
      })
      return image
  },

  draw() {
    // 注意：canvas在绘制时，只能使用px做单位
    const $ = wx.createSelectorQuery()
    $.select('#myCanvas')
      .fields({ node: true, size: true })
      .exec((res) => {
        // 第一步，拿到canvas画布的DOM对象
        const canvas = res[0].node._canvasRef
        // 第二步，使用dom对象获取画布上下文
        const ctx = canvas.getContext('2d')
        // 样式的处理
        canvas.width = parseInt(canvas.style.width)
        canvas.height = parseInt(canvas.style.height)
        canvas.style.width = ''
        canvas.style.height = ''

        this.canvas = res[0].node
        // 绘制背景色
        ctx.fillStyle = 'orange'
        ctx.fillRect(0,0,this.rpx2px(750),this.rpx2px(1000))

        // 设置画笔的字体
        ctx.font = 'bold 18px serif'
        ctx.fillStyle = 'white'
        ctx.textAlign = 'center'
        ctx.fillText('千锋欢迎你', this.rpx2px(375), 30)
        // 设置画笔的样式
        ctx.lineWidth = 4
        ctx.strokeStyle = 'blue'
        ctx.strokeRect(this.rpx2px(375/2), 50, this.rpx2px(375), this.rpx2px(375))
        // // 画一张我的图像（canvas不支持异步的图片）
        const that = this
        wx.getUserInfo({
          success(res){
            console.log('用户信息', res.userInfo.avatarUrl)
            const url = res.userInfo.avatarUrl
            that.getImage(url).then(image=>{
              ctx.drawImage(image, that.rpx2px(275), 100, that.rpx2px(200), that.rpx2px(200))
            })
          }
        })
      })
  },

  onReady () {
    this.draw()
    wx.getLocation({
      success(res) {
        console.log('当前位置', res)
      },
      fail(err) {
        console.log('位置失败', err)
      }
    })
  },
  // 保存到相同
  save() {
    // 把canvas画布转换成临时路径
    wx.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: this.rpx2px(750),
        height: this.rpx2px(750),
        destWidth: 1000,
        destHeight: 1000,
        canvas: this.canvas,
        success(res) {
          // 把临时路径中的图片保存到相册
          wx.saveImageToPhotosAlbum({
              filePath: res.tempFilePath
          })
        }
    })
  }
})
