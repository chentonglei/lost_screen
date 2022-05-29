module.exports = {
  pages: [
    'pages/index/index',
    'pages/login/index',
    'pages/login/release/index',
    'pages/login/school/index',
    'pages/login/revise/index',
    'pages/login/help/index',
    'pages/login/setting/index',
    'pages/login/certification/index',
    'pages/login/pwd/index',
    'pages/login/register/index',
    'pages/index/details/index',
    'pages/index/release/index',
    'pages/index/school/index',
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
}
