require('./../../../runtime.js');
require('./../../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/login/register/index"],{

/***/ "./src/pages/login/register/index.css":
/*!********************************************!*\
  !*** ./src/pages/login/register/index.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/login/register/index.entry.js":
/*!*************************************************!*\
  !*** ./src/pages/login/register/index.entry.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/pages/login/register/index.js");
__webpack_require__(/*! ./index.css */ "./src/pages/login/register/index.css");



Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/login/register/index'));

/***/ }),

/***/ "./src/pages/login/register/index.js":
/*!*******************************************!*\
  !*** ./src/pages/login/register/index.js ***!
  \*******************************************/
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





/* harmony default export */ __webpack_exports__["default"] = (function () {
  var formReset = function formReset(e) {
    console.log('form?????????reset???????????????????????????', e.target);
  };

  var formSubmit = function formSubmit(e) {
    var str = '?????????';

    if (!e.target.value.Re_id) {
      str += '??????';
      str += '???';
    }

    if (!e.target.value.Re_name) {
      str += '??????';
      str += '???';
    }

    if (!e.target.value.Re_telephone) {
      str += '??????';
      str += '???';
    }

    if (!e.target.value.Re_password) {
      str += '??????';
      str += '???';
    }

    if (!e.target.value.Re_new_password) {
      str += '????????????';
      str += '???';
    }

    var editedText = str.slice(0, str.length - 1) + '???';
    console.log(editedText);

    if (str !== '?????????') {
      wx.showToast({
        title: editedText,
        icon: 'none',
        duration: 2000
      });
    } else {
      if (e.target.value.Re_new_password !== e.target.value.Re_password) {
        wx.showToast({
          title: '?????????????????????',
          icon: 'error',
          duration: 2000
        });
      } else if (!/^(1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8})$/.test(e.target.value.Re_telephone)) {
        wx.showToast({
          title: '??????????????????',
          icon: 'error',
          duration: 2000
        });
        return;
      } else if (e.target.value.Re_password.length < 6 || e.target.value.Re_new_password.length < 6) {
        wx.showToast({
          title: '???????????????6???',
          icon: 'error',
          duration: 2000
        });
        return;
      } else {
        wx.request({
          url: "".concat(_ip__WEBPACK_IMPORTED_MODULE_4__["default"], "/register/UserAdd"),
          data: e.target.value,
          method: 'POST',
          success: function success(res) {
            if (res.data.result === 'true') {
              wx.showToast({
                title: '????????????',
                icon: 'success',
                duration: 2000,
                success: function success() {
                  Object(remax_one__WEBPACK_IMPORTED_MODULE_1__["reLaunch"])({
                    url: '/pages/login/pwd/index'
                  });
                }
              });
            } else {
              wx.showToast({
                title: '????????????',
                icon: 'error',
                duration: 2000
              });
            }
          }
        });
      }
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "app"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "top_title"
  }, "\u6CE8\u518C")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["Form"], {
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
  }, "\u59D3\u540D\uFF1A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "Re_name",
    className: "bottom_right"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "bottom_one"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "bottom_name"
  }, "\u7535\u8BDD\uFF1A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "Re_telephone",
    className: "bottom_right"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "bottom_one"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "bottom_name"
  }, "\u5BC6\u7801\uFF1A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "Re_password",
    className: "bottom_right",
    password: "true"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "bottom_one"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "bottom_name"
  }, "\u786E\u8BA4\u5BC6\u7801\uFF1A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "Re_new_password",
    className: "bottom_right",
    password: "true"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "submit",
    type: "submit"
  }, "\u6CE8\u518C"))));
});

/***/ }),

/***/ 10:
/*!*******************************************************!*\
  !*** multi ./src/pages/login/register/index.entry.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\??????????????????\??????\??????\lost_screen\src\pages\login\register\index.entry.js */"./src/pages/login/register/index.entry.js");


/***/ })

},[[10,"runtime","remax-vendors"]]]);