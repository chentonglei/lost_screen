
module.exports = {
  pages: [
  'pages/login/index',
  'pages/index/index',
  ],
  window: {
    navigationBarTitleText: '答题页面',
    navigationBarBackgroundColor: '#533BB0',
    navigationStyle:'custom'
  },
  tabBar: {
    "list": [{
      "pagePath": "pages/login/index",
      "text": "首页",
      "iconPath": "./icon_home.png",
      "selectedIconPath": "./after_home.png",
    },{
      "pagePath": "pages/index/index",
      "text": "游戏",
      "iconPath": "./icon_game.png",
      "selectedIconPath": "./after_game.png",
    }]
  },
  networkTimeout: {
    "request": 10000,
    "downloadFile": 10000
  },
/*   debug: true,
  permission: {
    "scope.userLocation": {
      "desc": "你的位置信息将用于小程序位置接口的效果展示" // 高速公路行驶持续后台定位
    }
  } */
};
