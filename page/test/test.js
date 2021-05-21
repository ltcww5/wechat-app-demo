// page/kuaidi/kuaidiquery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    responseText:"无",
    inputValue:null,
    airportFlight:[],
    isSuccess:false
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
var inv=this.data.inputValue;
this.getExpressInfo(inv,function(data){
  wx.showToast({
    title: '成功',
    icon: 'success',
    duration: 2000
  })
  wx.setNavigationBarTitle({
    title: '获取数据成功'
  })
  wx.setNavigationBarColor({
    frontColor: '#ffffff',
    backgroundColor: '#ff0000',
    animation: {
      duration: 400,
      timingFunc: 'easeIn'
    }
  })

  if(data.IsError)
  {
    $this.setData({isSuccess:false });
  }else
  {
    $this.setData({isSuccess:true });
    $this.setData({airportFlight:data.Data });
  }
  $this.setData({responseText: JSON.stringify(data) });
});
  },
  /**
   * 获取快递单号
   */
  getExpressInfo:function(orderId,bf){
    wx.request({
      url: 'https://tht.yntravelsky.net.cn/desktopapi/api/AirShow/GetAirShowData', //仅为示例，并非真实的接口地址
      // url: 'https://www.baidu.com', //仅为示例，并非真实的接口地址
      method: 'post',
      data:JSON.stringify({
        IdentityCode: orderId
      }) ,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
         console.log(res.data)
         bf(res.data);
      }
    })
  },
  input:function(e){
    this.setData({inputValue:e.detail.value});
  }
})