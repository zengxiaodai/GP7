// pages/find/find.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [
            { id: 1, name: 'zhang sang', age: 10 },
            { id: 2, name: 'li si', age: 20 },
            { id: 3, name: 'wang wu', age: 30 }
        ],
        idx: 1,
        name: 'GP7'
    },

    innerTap() {
        console.log('---inner')
    },
    outerTap() {
        console.log('---outer')
    },

    userTap(ev) {
        console.log('ev', ev.target.dataset)
    },

    nameChange(ev) {
        console.log('ev', ev)
        this.setData({name: ev.detail.value})
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        const $ = wx.createSelectorQuery()
        $.select('#test').boundingClientRect(res=>{
            console.log('dom', res)
        })
    },

    start1() {
        // 开始动画
        this.animate('.abc', [
            { opacity: 1.0, rotate: 0, backgroundColor: '#FF0000' },
            { opacity: 0.5, rotate: 45, backgroundColor: '#00FF00'},
            { opacity: 0.1, rotate: 75, backgroundColor: '#FF0000' },
            ], 5000, function () {
                // 动画结束时
              this.clearAnimation('.abc', { opacity:true, backgroundColor:true }, function () {
                console.log("清除了#container上的opacity和rotate属性")
              })
          }.bind(this))
    },

    start2() {
        console.log('---')
        // 开始动画
        this.animate('.door', [
            { width: '750rpx', opacity: 1.0, backgroundColor: '#FF0000' },
            { width: '300rpx', opacity: 0.5,  backgroundColor: '#00FF00'},
            { width: '1rpx', opacity: 0.1, backgroundColor: '#FF0000' },
            ], 5000, function () {
                // 动画结束时
              this.clearAnimation('.door', { opacity:true, backgroundColor:true }, function () {
                console.log("清除了#container上的opacity和rotate属性")
              })
          }.bind(this))
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})