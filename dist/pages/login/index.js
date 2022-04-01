require('./../../runtime.js');
require('./../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/login/index"],{

/***/ "./node_modules/remax/esm/index.js":
/*!*****************************************!*\
  !*** ./node_modules/remax/esm/index.js ***!
  \*****************************************/
/*! exports provided: render, createAppConfig, createPageConfig, usePageInstance, useComponentInstance, useQuery, useNativeEffect, unstable_batchedUpdates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./node_modules/remax/esm/main.mini.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _main__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAppConfig", function() { return _main__WEBPACK_IMPORTED_MODULE_0__["createAppConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPageConfig", function() { return _main__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePageInstance", function() { return _main__WEBPACK_IMPORTED_MODULE_0__["usePageInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useComponentInstance", function() { return _main__WEBPACK_IMPORTED_MODULE_0__["useComponentInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useQuery", function() { return _main__WEBPACK_IMPORTED_MODULE_0__["useQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useNativeEffect", function() { return _main__WEBPACK_IMPORTED_MODULE_0__["useNativeEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return _main__WEBPACK_IMPORTED_MODULE_0__["unstable_batchedUpdates"]; });



/***/ }),

/***/ "./node_modules/remax/esm/main.mini.js":
/*!*********************************************!*\
  !*** ./node_modules/remax/esm/main.mini.js ***!
  \*********************************************/
/*! exports provided: render, createAppConfig, createPageConfig, usePageInstance, useComponentInstance, useQuery, useNativeEffect, unstable_batchedUpdates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _remax_runtime__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAppConfig", function() { return _remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createAppConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPageConfig", function() { return _remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePageInstance", function() { return _remax_runtime__WEBPACK_IMPORTED_MODULE_0__["usePageInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useComponentInstance", function() { return _remax_runtime__WEBPACK_IMPORTED_MODULE_0__["useComponentInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useQuery", function() { return _remax_runtime__WEBPACK_IMPORTED_MODULE_0__["useQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useNativeEffect", function() { return _remax_runtime__WEBPACK_IMPORTED_MODULE_0__["useNativeEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return _remax_runtime__WEBPACK_IMPORTED_MODULE_0__["unstable_batchedUpdates"]; });



/***/ }),

/***/ "./src/pages/login/index.css":
/*!***********************************!*\
  !*** ./src/pages/login/index.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/login/index.entry.js":
/*!****************************************!*\
  !*** ./src/pages/login/index.entry.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/pages/login/index.js");
__webpack_require__(/*! ./index.css */ "./src/pages/login/index.css");



Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/login/index'));

/***/ }),

/***/ "./src/pages/login/index.js":
/*!**********************************!*\
  !*** ./src/pages/login/index.js ***!
  \**********************************/
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
  /* const [id, setId] = useState(); */
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"](''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      pwd = _React$useState2[0],
      setPwd = _React$useState2[1];

  console.log(wx.env);

  var formReset = function formReset(e) {
    console.log('form发生了reset事件，携带数据为：', e.target);
  };

  var formSubmit = function formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.target);
    var id = e.target.value.id;
    var pwd = e.target.value.psw;

    if (id === "admin" && pwd === "123") {
      console.log("登录成功");
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
      console.log("登录失败");
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

  var change = function change(e) {
    console.log('回调 form发生了reset事件，携带数据为：', e.target.value);
    setPwd(e.target.value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "app"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: formSubmit,
    onReset: formReset
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "id"
  }, "\u8D26\u53F7:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    className: "idinput",
    name: "id"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "id"
  }, "\u5BC6\u7801:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    className: "idinput",
    name: "psw",
    onInput: change,
    value: pwd
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "anniu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "anniuleft",
    type: "submit"
  }, "\u767B\u5F55"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "anniuright",
    type: "reset",
    id: "buttonreset"
  }, "\u91CD\u7F6E"))));
});

/***/ }),

/***/ 1:
/*!**********************************************!*\
  !*** multi ./src/pages/login/index.entry.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\福建工程学院\毕设\代码\lost_screen\src\pages\login\index.entry.js */"./src/pages/login/index.entry.js");


/***/ })

},[[1,"runtime","remax-vendors"]]]);