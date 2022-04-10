require('./../../../runtime.js');
require('./../../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/login/help/index"],{

/***/ "./src/pages/login/help/index.css":
/*!****************************************!*\
  !*** ./src/pages/login/help/index.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/login/help/index.entry.js":
/*!*********************************************!*\
  !*** ./src/pages/login/help/index.entry.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/pages/login/help/index.js");
__webpack_require__(/*! ./index.css */ "./src/pages/login/help/index.css");



Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/login/help/index'));

/***/ }),

/***/ "./src/pages/login/help/index.js":
/*!***************************************!*\
  !*** ./src/pages/login/help/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax */ "./node_modules/remax/esm/index.js");
/* harmony import */ var _ip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ip */ "./src/pages/ip.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["usePageEvent"])('onLoad', function () {
    wx.request({
      url: "".concat(_ip__WEBPACK_IMPORTED_MODULE_4__["default"], "/introduction/UserShow"),
      method: 'POST',
      success: function success(res) {
        if (res.data.success === true) {
          setData(res.data.data);
        }
      }
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "app"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "top_title"
  }, "\u5E2E\u52A9\u4E0E\u53CD\u9988")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "bottom"
  }, data.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      key: index,
      className: "bottom_one",
      __key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "bottom_name"
    }, item.Intr_question), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "bottom_answer"
    }, "\xA0\xA0", "\u7B54\uFF1A".concat(item.Intr_answer)));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "ps"
  }, "\u5982\u6709\u5176\u5B83\u4E0D\u61C2\u7684\u53EF\u4EE5\u8054\u7CFB\u7BA1\u7406\u5458QQ:382023278")));
});

/***/ }),

/***/ 6:
/*!***************************************************!*\
  !*** multi ./src/pages/login/help/index.entry.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\福建工程学院\毕设\代码\lost_screen\src\pages\login\help\index.entry.js */"./src/pages/login/help/index.entry.js");


/***/ })

},[[6,"runtime","remax-vendors"]]]);