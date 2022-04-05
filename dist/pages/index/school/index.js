require('./../../../runtime.js');
require('./../../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/school/index"],{

/***/ "./src/pages/index/school/index.css":
/*!******************************************!*\
  !*** ./src/pages/index/school/index.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/school/index.entry.js":
/*!***********************************************!*\
  !*** ./src/pages/index/school/index.entry.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/pages/index/school/index.js");
__webpack_require__(/*! ./index.css */ "./src/pages/index/school/index.css");



Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/index/school/index'));

/***/ }),

/***/ "./src/pages/index/school/index.js":
/*!*****************************************!*\
  !*** ./src/pages/index/school/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax */ "./node_modules/remax/esm/index.js");




/* harmony default export */ __webpack_exports__["default"] = (function () {
  var data = ['全部学校', '福州大学', '福建工程学院', '闽江学院', '福建师范大学', '江夏学院'];

  var formReset = function formReset(e) {
    console.log('form发生了reset事件，携带数据为：', e.target);
  };

  var formSubmit = function formSubmit(e) {
    var str = '请输入';

    if (!e.target.value.Re_id) {
      str += '账号';
      str += '、';
    }

    if (!e.target.value.Re_password) {
      str += '密码';
      str += '、';
    }

    var editedText = str.slice(0, str.length - 1) + '！';
    console.log(editedText);

    if (str !== '请输入') {
      wx.showToast({
        title: editedText,
        icon: 'none',
        duration: 2000
      });
    } else {
      wx.showToast({
        title: '上传成功',
        icon: 'success',
        duration: 2000
      });
    }
  };

  var register = function register() {
    Object(remax_one__WEBPACK_IMPORTED_MODULE_1__["navigateTo"])({
      url: "/pages/login/register/index"
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "app"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "top_title"
  }, "\u5B66\u6821\u5217\u8868")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "input_style"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    className: "input_search",
    placeholder: "\u641C\u7D22"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "mid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "mid_top"
  }, "\u8BF7\u9009\u62E9\u5B66\u6821"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "mid_content"
  }, data.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
      key: index,
      className: "mid_content_one",
      onClick: function onClick() {
        return MidButton(item);
      },
      __key: index
    }, item);
  }))));
});

/***/ })

},[["./src/pages/index/school/index.entry.js","runtime","remax-vendors"]]]);