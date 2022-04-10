require('./../../../runtime.js');
require('./../../../remax-vendors.js');
require('./../../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/login/setting/index"],{

/***/ "./src/pages/login/setting/index.css":
/*!*******************************************!*\
  !*** ./src/pages/login/setting/index.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/login/setting/index.entry.js":
/*!************************************************!*\
  !*** ./src/pages/login/setting/index.entry.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/pages/login/setting/index.js");
__webpack_require__(/*! ./index.css */ "./src/pages/login/setting/index.css");



Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/login/setting/index'));

/***/ }),

/***/ "./src/pages/login/setting/index.js":
/*!******************************************!*\
  !*** ./src/pages/login/setting/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax */ "./node_modules/remax/esm/index.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app */ "./src/app.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      index = _useState2[0],
      setIndex = _useState2[1];

  var global = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_app__WEBPACK_IMPORTED_MODULE_4__["AppContext"]); //全局变量

  var array = ['男', '女'];
  /*   const data = {
    Re_id: '123',
    Re_name: '陈彤磊',
    Re_email: '382023278@qq.com',
    Re_sex: '男',
    Re_age: '1999-11-20',
    Re_telephone: '18859144927',
    Re_school_name: '福建工程学院',
  } */

  var formReset = function formReset(e) {
    console.log('form发生了reset事件，携带数据为：', e.target);
  };

  var formSubmit = function formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.target);
    var id = e.target.value.id;
    var pwd = e.target.value.psw;

    if (id === 'admin' && pwd === '123') {
      console.log('登录成功');
      wx.showModal({
        title: '提示',
        content: '登录成功',
        success: function success(res) {
          if (res.confirm) {
            console.log('用户点击确定');
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        }
      });
      Object(remax_one__WEBPACK_IMPORTED_MODULE_1__["navigateTo"])({
        url: '/pages/index/index'
      });
    } else {
      console.log('登录失败');
      setPwd('');
      formReset(e);
      /* console.log(password);
      setPassword(''); */

      wx.showModal({
        /* title: '提示', */
        content: '登录失败',
        success: function success(res) {
          if (res.confirm) {
            console.log('用户点击确定');
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        }
      });
      console.log('form发生了submit事件，携带数据为：', e.target);
    }
  };

  var bindPickerChange = function bindPickerChange(e) {
    setIndex(e.detail.value);
  };

  var bindDateChange = function bindDateChange(e) {
    var day = new Date();
    console.log(day);
    console.log(e.detail.value);
  };

  var getNowFormatDate = function getNowFormatDate() {
    //获得当前时间 为生日的末时间
    var date = new Date();
    var seperator1 = '-';
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();

    if (month >= 1 && month <= 9) {
      month = '0' + month;
    }

    if (strDate >= 0 && strDate <= 9) {
      strDate = '0' + strDate;
    }

    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
  };

  var changepwd = function changepwd() {
    Object(remax_one__WEBPACK_IMPORTED_MODULE_1__["navigateTo"])({
      url: "/pages/login/revise/index"
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "app"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "top_title"
  }, "\u4E2A\u4EBA\u4E2D\u5FC3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["Form"], {
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
    className: "bottom_right_disable",
    disabled: true,
    value: global.appData.Re_id
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "bottom_one"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "bottom_name"
  }, "\u59D3\u540D\uFF1A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "Re_name",
    className: "bottom_right_disable",
    disabled: true,
    value: global.appData.Re_name
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "bottom_one"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "bottom_name"
  }, "\u90AE\u7BB1\uFF1A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "Re_email",
    value: global.appData.Re_email,
    className: "bottom_right"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "bottom_one"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "bottom_name"
  }, "\u6027\u522B\uFF1A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("picker", {
    mode: "selector",
    range: array,
    bindchange: bindPickerChange,
    className: "bottom_right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    class: "picker"
  }, global.appData.Re_sex))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "bottom_one"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "bottom_name"
  }, "\u7535\u8BDD\uFF1A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "Re_telephone",
    value: global.appData.Re_telephone,
    className: "bottom_right"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "bottom_one"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "bottom_name"
  }, "\u751F\u65E5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("picker", {
    mode: "date",
    value: global.appData.Re_age,
    start: "1990-01-01",
    end: getNowFormatDate(),
    fields: "day",
    className: "bottom_right",
    bindchange: bindDateChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    class: "picker"
  }, global.appData.Re_age))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "bottom_one"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "bottom_name"
  }, "\u5B66\u6821\uFF1A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "Re_school_name",
    className: "bottom_right_disable",
    disabled: true,
    value: global.appData.Re_school_name
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "submit",
    type: "submit"
  }, "\u4FEE\u6539"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "ps"
  }, "\u5982\u9700\u4FEE\u6539\u5B66\u6821\u3001\u59D3\u540D\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458QQ:382023278"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "register",
    onClick: function onClick() {
      return changepwd();
    }
  }, "\u5BC6\u7801\u4FEE\u6539"));
});

/***/ }),

/***/ 7:
/*!******************************************************!*\
  !*** multi ./src/pages/login/setting/index.entry.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\福建工程学院\毕设\代码\lost_screen\src\pages\login\setting\index.entry.js */"./src/pages/login/setting/index.entry.js");


/***/ })

},[[7,"runtime","remax-vendors","remax-styles"]]]);