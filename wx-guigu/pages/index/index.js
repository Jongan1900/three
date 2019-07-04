// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myUserInfo: {},
    isShow:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(this.data.myUserInfo)
    this.getUserInfo()
  },

  getUserInfo() {
    //获取用户信息
    wx.getUserInfo({
      success: (data) => {
        this.setData({
          myUserInfo: data.userInfo
        })
      },
      fail: () => {
        console.log("我还没拿到数据呢")
      }
    })
   
    //判断用户是否授权
    wx.getSetting({
      success: (data) => {
        console.log(data)
        //用户已经授权
        if (data.authSetting['scope.userInfo']) {
          console.log("我拿到了数据了")

          this.setData({
            isShow: true
          })
        } else {//用户没有授权
          this.setData({
            isShow: false
          })
        }
      }
    })
  },
  //点击授权按钮
  handleUserInfo(data) {
    console.log("触发了", data)
    //判断用户是否允许
    if (data.detail.userInfo) {
      this.setData({
        myUserInfo: data.detail.userInfo
      })
      this.getUserInfo()
    }
  },
  //点击跳转页面
  handleClick(data){
    wx.switchTab({
      url:'/pages/list/list'
    })
    
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})