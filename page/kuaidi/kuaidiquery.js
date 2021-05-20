// page/kuaidi/kuaidiquery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    responseText:"无"
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

  },
  queryExpressInfo:function(){
var $this=this;
this.getExpressInfo("",function(data){
  $this.setData({responseText:"有"});
});
  },
  /**
   * 获取快递单号
   */
  getExpressInfo:function(orderId,bf){
    wx.request({
      // url: 'https://tht.yntravelsky.net.cn/desktopapi/api/AirShow/GetAirShowData', //仅为示例，并非真实的接口地址
      url: 'https://www.baidu.com', //仅为示例，并非真实的接口地址
      data:JSON.stringify({
        IdentityCode: 'aocims.deqing'
      }) ,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
         console.log(res.data)
         bf(res.data);
      }
    })
  }
})