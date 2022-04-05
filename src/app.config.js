module.exports = {
  pages: [
    'pages/index/index',
    'pages/login/index',
    'pages/login/release/index',
    'pages/login/school/index',
    'pages/login/help/index',
    'pages/login/setting/index',
    'pages/index/release/index',
    'pages/index/school/index',
    'pages/login/pwd/index',
    'pages/login/register/index',
    'pages/login/revise/index',
  ],
  window: {
    navigationStyle: 'custom',
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './icon_home.png',
        selectedIconPath: './after_home.png',
      },
      {
        pagePath: 'pages/login/index',
        text: '个人页',
        iconPath: './icon_people.png',
        selectedIconPath: './after_people.png',
      },
    ],
  },
  networkTimeout: {
    request: 10000,
    downloadFile: 10000,
  },
  /*   debug: true,
  permission: {
    "scope.userLocation": {
      "desc": "你的位置信息将用于小程序位置接口的效果展示" // 高速公路行驶持续后台定位
    }
  } */
}
