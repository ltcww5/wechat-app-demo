// page/firstPage/first.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:"哈哈",
    show:false,
    news:["aa","bb","cc"]
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
  /**
   * 点击事件
   */
  clickMe:function(){
    var newnews=this.data.news;
    newnews.shift(0);
    this.setData({message:"刪掉第一個",news:newnews})
  },
  /**
   * 点击事件
   */
  clickMeDefault:function(){
    var isShow=this.data.show;
    console.log(isShow);
    this.setData({message:"么么",show:!isShow})
  }
})