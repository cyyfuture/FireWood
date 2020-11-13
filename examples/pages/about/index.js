// pages/about/index.js
wx.cloud.init({
  env: 'env-9eb476'
});
const db = wx.cloud.database();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    version: '....',
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

onLoad: function() {
    // 查看是否授权
    wx.getSetting({
      success: function(res){
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    })
  },
  bindGetUserInfo: function(e) {
    console.log(e.detail.userInfo)
  },





  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

});
