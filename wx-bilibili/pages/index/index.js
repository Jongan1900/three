Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndexNav: 0,
    navList: [],
    //轮播图数据
    swiperList: [],
    //视频列表数据
    videosList:[]
  },
  //点击导航
  activeNav(e) {
    this.setData({
      currentIndexNav: e.target.dataset.index
    })
  },

  // 获取nav的菜单
  getNavList() {
    var reqTask = wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList',
      data: {},
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        this.setData({
          navList: result.data.data.navList
        })
      },
    });
  },
  //获取轮播图吧数据  
  getSwiperList() {
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList',
      success: (result) => {
        if (result.data.code === 0) {
          this.setData({
            swiperList:result.data.data.swiperList

          })
        }
        // console.log(this.data.swiperList);
      },
    });
  },

// 获取视频列表
getVideosList(){
  let that = this;
  wx.request({
    url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',
    data: {},
    method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    // header: {}, // 设置请求的 header
    success: function(res){
      // success
      // console.log(res);
      if(res.data.code===0){
        that.setData({
          videosList:res.data.data.videosList
        })
      }
      
    },
    fail: function() {
      // fail
    },
    complete: function() {
      // complete
    }
  })
},



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavList()
    this.getSwiperList()
    this.getVideosList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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