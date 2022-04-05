require('./../../../runtime.js');
require('./../../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/release/index"],{

/***/ "./src/pages/index/release/index.css":
/*!*******************************************!*\
  !*** ./src/pages/index/release/index.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/release/index.entry.js":
/*!************************************************!*\
  !*** ./src/pages/index/release/index.entry.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/pages/index/release/index.js");
__webpack_require__(/*! ./index.css */ "./src/pages/index/release/index.css");



Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/index/release/index'));

/***/ }),

/***/ "./src/pages/index/release/index.js":
/*!******************************************!*\
  !*** ./src/pages/index/release/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax */ "./node_modules/remax/esm/index.js");
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      img = _useState2[0],
      setImg = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('失物'),
      _useState4 = _slicedToArray(_useState3, 2),
      isModalVisible = _useState4[0],
      setIsModalVisible = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState6 = _slicedToArray(_useState5, 2),
      todaydate = _useState6[0],
      setTodaydate = _useState6[1];

  Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["usePageEvent"])('onLoad', function () {
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
    setTodaydate(currentdate);
  });

  var formReset = function formReset(e) {
    console.log('form发生了reset事件，携带数据为：', e.target);
  };

  var formSubmit = function formSubmit(e) {
    if (isModalVisible === '失物') {
      var str = '请输入';

      if (!e.target.value.Lost_where) {
        str += '失物地点';
        str += '、';
      }

      if (!e.target.value.Lost_content) {
        str += '失物内容';
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
      }
    }

    if (isModalVisible === '招领') {
      var str = '请输入';

      if (!e.target.value.Rec_where) {
        str += '拾物地点';
        str += '、';
      }

      if (!e.target.value.Rec_content) {
        str += '拾物内容';
        str += '、';
      }

      var _editedText = str.slice(0, str.length - 1) + '！';

      console.log(_editedText);

      if (str !== '请输入') {
        wx.showToast({
          title: _editedText,
          icon: 'none',
          duration: 2000
        });
      }
    }
  };

  var changeButton = function changeButton(title) {
    setIsModalVisible(title);
  };

  var bindDateChange = function bindDateChange(e) {
    setTodaydate(e.detail.value);
  };

  var getNowFormatDate = function getNowFormatDate() {
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "app"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "top_title"
  }, "\u53D1\u5E03")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "mid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: isModalVisible === '失物' ? 'mid_one_on' : 'mid_one_off',
    onClick: function onClick() {
      return changeButton('失物');
    }
  }, "\u5931\u7269"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: isModalVisible === '招领' ? 'mid_one_on' : 'mid_one_off',
    onClick: function onClick() {
      return changeButton('招领');
    }
  }, "\u62DB\u9886")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onSubmit: formSubmit,
    onReset: formReset
  }, isModalVisible === '失物' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "bottom_one"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "bottom_name"
  }, "\u5931\u7269\u5730\u70B9\uFF1A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "Lost_where",
    className: "bottom_right"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "bottom_one"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "bottom_name"
  }, "\u5931\u7269\u5185\u5BB9\uFF1A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "Lost_content",
    className: "bottom_right"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "bottom_one"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "bottom_name"
  }, "\u5931\u7269\u65E5\u671F\uFF1A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("picker", {
    mode: "date",
    start: "1990-01-01",
    end: getNowFormatDate(),
    fields: "day",
    className: "bottom_right",
    bindchange: bindDateChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    class: "picker"
  }, todaydate))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "send",
    onClick: function onClick() {
      return sendImg();
    }
  }, "\u5931\u7269\u56FE\u7247\u4E0A\u4F20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: img,
    mode: "widthFix",
    className: "img"
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "bottom_one"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "bottom_name"
  }, "\u62FE\u7269\u5730\u70B9\uFF1A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "Rec_where",
    className: "bottom_right"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "bottom_one"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "bottom_name"
  }, "\u62FE\u7269\u5185\u5BB9\uFF1A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "Rec_content",
    className: "bottom_right"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "bottom_one"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "bottom_name"
  }, "\u62FE\u7269\u65E5\u671F\uFF1A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("picker", {
    mode: "date",
    start: "1990-01-01",
    end: getNowFormatDate(),
    fields: "day",
    className: "bottom_right",
    bindchange: bindDateChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    class: "picker"
  }, todaydate))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "send",
    onClick: function onClick() {
      return sendImg();
    }
  }, "\u62FE\u7269\u56FE\u7247\u4E0A\u4F20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: img,
    mode: "widthFix",
    className: "img"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "submit",
    type: "submit"
  }, "\u53D1\u5E03")));
});

/***/ }),

/***/ 7:
/*!******************************************************!*\
  !*** multi ./src/pages/index/release/index.entry.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\福建工程学院\毕设\代码\lost_screen\src\pages\index\release\index.entry.js */"./src/pages/index/release/index.entry.js");


/***/ })

},[[7,"runtime","remax-vendors"]]]);