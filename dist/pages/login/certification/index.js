require('./../../../runtime.js');
require('./../../../remax-vendors.js');
require('./../../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/login/certification/index"],{

/***/ "./src/pages/login/certification/index.css":
/*!*************************************************!*\
  !*** ./src/pages/login/certification/index.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/login/certification/index.entry.js":
/*!******************************************************!*\
  !*** ./src/pages/login/certification/index.entry.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/pages/login/certification/index.js");
__webpack_require__(/*! ./index.css */ "./src/pages/login/certification/index.css");



Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/login/certification/index'));

/***/ }),

/***/ "./src/pages/login/certification/index.js":
/*!************************************************!*\
  !*** ./src/pages/login/certification/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax */ "./node_modules/remax/esm/index.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app */ "./src/app.js");
/* harmony import */ var _ip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ip */ "./src/pages/ip.js");
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

  var global = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_app__WEBPACK_IMPORTED_MODULE_3__["AppContext"]); //全局变量

  var formSubmit = function formSubmit(e) {
    var str = '请输入';

    if (!e.target.value.Re_school_id) {
      str += '学校代码';
      str += '、';
    }

    if (!img) {
      str += '学生证信息';
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
      e.target.value.Re_img = img;
      e.target.value.Re_id = global.appData.Re_id;
      console.log(e.target.value);
      wx.request({
        url: "".concat(_ip__WEBPACK_IMPORTED_MODULE_4__["default"], "/register/UserCertification"),
        data: e.target.value,
        method: 'POST',
        success: function success(res) {
          if (res.data.result === 'true') {
            wx.showToast({
              title: '申请成功',
              icon: 'success',
              duration: 2000
            });
          } else {
            wx.showToast({
              title: res.data.msg,
              icon: 'error',
              duration: 2000
            });
          }
        }
      });
    }
  };

  var sendImg = function sendImg() {
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      camera: 'back',
      success: function success(res) {
        console.log(res);
        var tempImagePath = res.tempFiles;
        var imgType = tempImagePath[0].tempFilePath;
        var fsm = wx.getFileSystemManager();
        var base64img = 'data:image/' + imgType + ';base64,' + fsm.readFileSync(tempImagePath[0].tempFilePath, 'base64');
        console.log(base64img);
        setImg(base64img);
      }
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "app"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "top_title"
  }, "\u8BA4\u8BC1\u4E2D\u5FC3")), global.appData.Re_status === '审核中' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "ps"
  }, "\u5DF2\u63D0\u4EA4\u8BA4\u8BC1\uFF0C\u8BF7\u8010\u5FC3\u7B49\u5F85\u5982\u9700\u52A0\u6025\u8054\u7CFB\u7BA1\u7406\u5458QQ:382023278") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: formSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "bottom_one"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "bottom_name"
  }, "\u5B66\u6821\u4EE3\u7801\uFF1A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "Re_school_id",
    className: "bottom_right"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "send",
    onClick: function onClick() {
      return sendImg();
    }
  }, "\u4E0A\u4F20\u5B66\u751F\u8BC1\u4FE1\u606F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: img,
    mode: "widthFix",
    className: "img"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "submit",
    type: "submit"
  }, "\u63D0\u4EA4"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "ps"
  }, "\u8BF7\u901A\u8FC7\u767E\u5EA6\u786E\u4FDD\u6B63\u786E\u5B66\u6821\u4EE3\u7801\uFF0C\u63D0\u4EA4\u6210\u529F\u540E\u8BF7\u8010\u5FC3\u7B49\u5F85\u5982\u9700\u52A0\u6025\u8054\u7CFB\u7BA1\u7406\u5458QQ:382023278")));
});

/***/ })

},[["./src/pages/login/certification/index.entry.js","runtime","remax-vendors","remax-styles"]]]);