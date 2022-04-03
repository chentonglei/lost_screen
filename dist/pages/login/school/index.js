require('./../../../runtime.js');
require('./../../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/login/school/index"],{

/***/ "./src/pages/login/school/index.css":
/*!******************************************!*\
  !*** ./src/pages/login/school/index.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/login/school/index.entry.js":
/*!***********************************************!*\
  !*** ./src/pages/login/school/index.entry.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/pages/login/school/index.js");
__webpack_require__(/*! ./index.css */ "./src/pages/login/school/index.css");



Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/login/school/index'));

/***/ }),

/***/ "./src/pages/login/school/index.js":
/*!*****************************************!*\
  !*** ./src/pages/login/school/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax */ "./node_modules/remax/esm/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      img = _useState2[0],
      setImg = _useState2[1];

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

  var sendImg = function sendImg() {
    /*  wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片/
        setImg(res.tempFilePaths)
      },
    }) */
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      camera: 'back',
      success: function success(res) {
        console.log(res);
        setImg(res.tempFiles[0].tempFilePath);
        console.log(res.tempFiles.tempFilePath);
        console.log(res.tempFiles.size);
      }
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "app"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "top_title"
  }, "\u5B66\u6821\u5165\u4F4F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: formSubmit,
    onReset: formReset
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "bottom_one"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "bottom_name"
  }, "\u5B66\u6821\u4EE3\u7801\uFF1A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "Sch_id",
    className: "bottom_right"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "bottom_one"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "bottom_name"
  }, "\u5B66\u6821\u540D\uFF1A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "Sch_name",
    className: "bottom_right"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "send",
    onClick: function onClick() {
      return sendImg();
    }
  }, "\u4E0A\u4F20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: img,
    mode: "widthFix",
    className: "img"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "submit",
    type: "submit"
  }, "\u63D0\u4EA4"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "ps"
  }, "\u8BF7\u786E\u4FDD\u6B63\u786E\u7684\u5B66\u6821\u540D\u548C\u5B66\u6821\u4EE3\u7801\uFF0C\u63D0\u4EA4\u6210\u529F\u540E\u8BF7\u8010\u5FC3\u7B49\u5F85\u5982\u9700\u52A0\u6025\u8054\u7CFB\u7BA1\u7406\u5458QQ:382023278"));
});

/***/ }),

/***/ 4:
/*!*****************************************************!*\
  !*** multi ./src/pages/login/school/index.entry.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\福建工程学院\毕设\代码\lost_screen\src\pages\login\school\index.entry.js */"./src/pages/login/school/index.entry.js");


/***/ })

},[[4,"runtime","remax-vendors"]]]);