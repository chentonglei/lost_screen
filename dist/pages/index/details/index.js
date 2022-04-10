require('./../../../runtime.js');
require('./../../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/details/index"],{

/***/ "./src/pages/index/details/index.css":
/*!*******************************************!*\
  !*** ./src/pages/index/details/index.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/details/index.entry.js":
/*!************************************************!*\
  !*** ./src/pages/index/details/index.entry.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/pages/index/details/index.js");
__webpack_require__(/*! ./index.css */ "./src/pages/index/details/index.css");



Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/index/details/index'));

/***/ }),

/***/ "./src/pages/index/details/index.js":
/*!******************************************!*\
  !*** ./src/pages/index/details/index.js ***!
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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      body = _useState2[0],
      setBody = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('说点什么吧..'),
      _useState4 = _slicedToArray(_useState3, 2),
      buttonfocus = _useState4[0],
      setButtonfocus = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState6 = _slicedToArray(_useState5, 2),
      telephone = _useState6[0],
      setTelephone = _useState6[1];

  var data = [{
    Comment_do_message: '体育馆有人偷东西的大家注意点',
    Com_do_name: '陈彤磊',
    Com_do_id: '3181911220',
    Com_do_time: '2022-2-3 22:00',
    Com_be_name: '',
    Com_be_id: ''
  }, {
    Comment_do_message: '不会吧不会吧',
    Com_do_name: '何思宏',
    Com_do_id: '3181911224',
    Com_do_time: '2022-2-3 22:11',
    Com_be_name: '陈彤磊',
    Com_be_id: '3181911220'
  }];
  Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["usePageEvent"])('onLoad', function (options) {
    var object = JSON.parse(options.jsonStr);
    var tel;
    if (object.isModalVisible === '失物') tel = object.Lost_people_phone.slice(0, 3);else tel = object.Rec_people_phone.slice(0, 3);
    setTelephone(tel + '********');
    setBody(object);
  });

  var onbutton = function onbutton(item) {
    setButtonfocus("\u56DE\u590D".concat(item.Com_do_name));
  };

  var deletecomment = function deletecomment(item) {
    wx.showActionSheet({
      itemList: ['删除'],
      success: function success(res) {
        console.log(res.tapIndex);
      },
      fail: function fail(res) {
        console.log(res.errMsg);
      }
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "app"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "top_title"
  }, "\u8BE6\u60C5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "content_one"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "content_one_top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "content_one_name"
  }, "".concat(body.isModalVisible === '失物' ? body.Lost_people_name : body.Rec_people_name, "  ").concat(telephone), body.isModalVisible === '失物' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: body.Lost_status === '未找到' ? 'status_nofind' : 'status_find'
  }, body.Lost_status) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: body.Rec_status === '未归还' ? 'status_nofind' : 'status_find'
  }, body.Rec_status)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "content_one_mid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "content_one_time"
  }, body.isModalVisible === '失物' ? body.Lost_send_time : body.Rec_send_time), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "content_one_school"
  }, body.isModalVisible === '失物' ? body.Lost_school_name : body.Rec_school_name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "content_one_bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "content_bottom_title"
  }, "\u5931\u7269\u65F6\u95F4\uFF1A".concat(body.isModalVisible === '失物' ? body.Lost_time : body.Rec_time)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "content_bottom_title"
  }, "\u5931\u7269\u5730\u70B9\uFF1A".concat(body.isModalVisible === '失物' ? body.Lost_where : body.Rec_where)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "content_bottom_title"
  }, "\u5931\u7269\u5185\u5BB9\uFF1A".concat(body.isModalVisible === '失物' ? body.Lost_content : body.Rec_content)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "content_bottom_title"
  }, "\u5931\u7269\u56FE\u7247\uFF1A".concat(body.Lost_img ? '' : '无')), body.Lost_img ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "bottom_img_div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: body.Lost_img,
    mode: "widthFix",
    className: "bottom_img"
  })) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "bottom_button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "submit"
  }, "\u6211\u6361\u5230\u4E86")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "comment_details"
  }, data.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "comment_one"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "comment_one_top"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "comment_top_left"
    }, "".concat(item.Com_do_name, " => ").concat(item.Com_be_name ? item.Com_be_name : '楼主'), ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "comment_top_right"
    }, item.Com_do_time)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "comment_one_content",
      onClick: function onClick() {
        return onbutton(item);
      },
      onLongTap: function onLongTap() {
        return deletecomment(item);
      }
    }, item.Comment_do_message));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "comment"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    className: "comment_input",
    placeholder: buttonfocus,
    focus: buttonfocus !== '说点什么吧..' ? true : false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "comment_send"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "send_button"
  }, "\u53D1\u9001"))));
});

/***/ }),

/***/ 10:
/*!******************************************************!*\
  !*** multi ./src/pages/index/details/index.entry.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\福建工程学院\毕设\代码\lost_screen\src\pages\index\details\index.entry.js */"./src/pages/index/details/index.entry.js");


/***/ })

},[[10,"runtime","remax-vendors"]]]);