require('./../../../runtime.js');
require('./../../../remax-vendors.js');
require('./../../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/login/pwd/index"],{

/***/ "./src/pages/login/pwd/index.css":
/*!***************************************!*\
  !*** ./src/pages/login/pwd/index.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/login/pwd/index.entry.js":
/*!********************************************!*\
  !*** ./src/pages/login/pwd/index.entry.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/pages/login/pwd/index.js");
__webpack_require__(/*! ./index.css */ "./src/pages/login/pwd/index.css");



Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/login/pwd/index'));

/***/ }),

/***/ "./src/pages/login/pwd/index.js":
/*!**************************************!*\
  !*** ./src/pages/login/pwd/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax */ "./node_modules/remax/esm/index.js");
/* harmony import */ var _ip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ip */ "./src/pages/ip.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app */ "./src/app.js");






/* harmony default export */ __webpack_exports__["default"] = (function () {
  var global = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_app__WEBPACK_IMPORTED_MODULE_5__["AppContext"]);

  var formReset = function formReset(e) {
    console.log('form发生了reset事件，携带数据为：', e.target);
  };

  var formSubmit = function formSubmit(e) {
    var str = '请输入';
    e.target.value.Re_power = 'user';

    if (!e.target.value.Re_id) {
      str += '账号';
      str += '、';
    }

    if (!e.target.value.Re_password) {
      str += '密码';
      str += '、';
    }

    var editedText = str.slice(0, str.length - 1) + '！';

    if (str !== '请输入') {
      wx.showToast({
        title: editedText,
        icon: 'none',
        duration: 2000
      });
    } else {
      wx.request({
        url: "".concat(_ip__WEBPACK_IMPORTED_MODULE_4__["default"], "/register/UserLogin"),
        data: e.target.value,
        method: 'POST',
        success: function success(res) {
          if (res.data.status === '登录成功') {
            global.setAppData(res.data.user);
            wx.showToast({
              title: '登录成功',
              icon: 'success',
              duration: 2000,
              success: function success() {
                Object(remax_one__WEBPACK_IMPORTED_MODULE_1__["switchTab"])({
                  url: '/pages/login/index'
                });
              }
            });
          } else {
            wx.showToast({
              title: '登录失败',
              icon: 'error',
              duration: 2000
            });
          }
        }
      });
    }
  };

  var register = function register() {
    Object(remax_one__WEBPACK_IMPORTED_MODULE_1__["navigateTo"])({
      url: "/pages/login/register/index"
    });
  };

  var forget = function forget() {
    wx.showModal({
      content: '请联系管理员QQ:382023278'
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "app"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "top_title"
  }, "\u767B\u5F55")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: formSubmit,
    onReset: formReset
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "bottom_one"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "bottom_name"
  }, "\u8D26\u53F7\uFF1A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "Re_id",
    className: "bottom_right"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "bottom_one"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "bottom_name"
  }, "\u5BC6\u7801\uFF1A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "Re_password",
    className: "bottom_right",
    password: "true"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "submit",
    type: "submit"
  }, "\u767B\u5F55"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "ps_left",
    onClick: function onClick() {
      return forget();
    }
  }, "\u5FD8\u8BB0\u5BC6\u7801"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "ps",
    onClick: function onClick() {
      return register();
    }
  }, "\u6211\u6CA1\u6709\u8D26\u53F7"));
});

/***/ }),

/***/ 9:
/*!**************************************************!*\
  !*** multi ./src/pages/login/pwd/index.entry.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\福建工程学院\毕设\代码\lost_screen\src\pages\login\pwd\index.entry.js */"./src/pages/login/pwd/index.entry.js");


/***/ })

},[[9,"runtime","remax-vendors","remax-styles"]]]);