module.exports = {
  plugins: {
    autoprefixer: {},
    //使用该插件来实现自适应，将px单位转化为vw
    "postcss-px-to-viewport": {
      //项目视窗
      viewportWidth: 375,
      viewportHeight: 667, //iPhone6标准视窗
      unitPrecision: 5, //转化为vm时保留的小数
      viewportUnit: 'vw',
      minPixelValue: 1,//最小转换的px
      mediaQuery: false, //是否开启媒体查询
      selectorBlackList: ['goods'], //选中的"类"不进行自适应
      exclude: [/tabbar/,/cartbuttonbar/] //以正则排除"组件"
    }
  }
}
