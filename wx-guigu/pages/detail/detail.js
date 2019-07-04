// pages/detail/detail.js
let datas = require('../../datas/list-data');
let appDats=getApp()
console.log(appDats)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailObj: [],
    isCollected: false,
    index: '',
    isPlay:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    let index = options.index
    this.setData({
      index,
      detailObj: datas.list_data[index]
    })
    //读取缓存中的数据，
    let dataStorage=wx.getStorageSync('isCollected')
    //如果一开始没有这个数据，级初始化一个对象
    if (!dataStorage){
      wx.setStorageSync('isCollected', {})
    }
    console.log(dataStorage)
    if (dataStorage[index]){
      this.setData({
        isCollected:true
      })
    }
  //监听音乐是否播放
    wx.onBackgroundAudioPlay(() => {
      console.log('音乐博凡')
      this.setData({
        isPlay:true
      })
      appDats.data.isPlay=true
      appDats.data.pageIndex=index;
    })
  //判断音乐是否播放
    if (appDats.data.isPlay && appDats.data.pageIndex===index){
      this.setData({
        isPlay: true
      })
    }




  //判断音乐是否暂停播放
    wx.onBackgroundAudioPause(() => {
      console.log('音乐stop')
      this.setData({
        isPlay: false
      })
      appDats.data.isPlay = false
      console.log(appDats)
    })
  },
  
  //点赞动作
  handleCollection() {
    //取反收藏的状态
    let isCollected = !this.data.isCollected
    let title = isCollected ? '收藏成功' : '取消收藏'
    let index = this.data.index
   //读取缓存中的数据，
    wx.getStorage({
      key: 'isCollected',
      success: (datas) => {
        let obj = datas.data;
        obj[index] = isCollected
        wx.setStorage({
          key: "isCollected",
          data: obj,
          success() {
            console.log("hahaha")
          }
        })
      },
    })
    //显示消息框
    wx.showToast({
      title,
      icon: "success"
    })
    //把现在的收藏的状态保存
    this.setData({
      isCollected
    })
  },
  //点击音乐的播放
  musicControl() {
    //控制按钮的状态
    let isPlay = !this.data.isPlay
    this.setData({
      isPlay
    })
    //音乐播放
    let { dataUrl, coverImgUrl, title} = this.data.detailObj.music
    console.log(dataUrl)
    // coverImgUrl
    // dataUrl
    // title
    if (isPlay){
      wx.playBackgroundAudio({
        dataUrl,
        title
      })
    }else{//音乐停止
      wx.pauseBackgroundAudio()
    }

  },
  
  //点击分享
  handleShare(){
    wx.showActionSheet({
      itemList: ['分享给我自己', '分享到QQ', '分享到朋友圈'],
      itemColor:"#cc55cc"
    })
   
  }


})