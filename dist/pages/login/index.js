require('./../../runtime.js');
require('./../../remax-vendors.js');
require('./../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/login/index"],{

/***/ "./src/pages/login/cancel.png":
/*!************************************!*\
  !*** ./src/pages/login/cancel.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "68339d67b44b57bc244a80ad39a5834c.png");

/***/ }),

/***/ "./src/pages/login/comment.png":
/*!*************************************!*\
  !*** ./src/pages/login/comment.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9beefd35c8149bf37c66986b71b1159b.png");

/***/ }),

/***/ "./src/pages/login/exit.png":
/*!**********************************!*\
  !*** ./src/pages/login/exit.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "00dfedd12c5ec183d13c4b8cc525cdd0.png");

/***/ }),

/***/ "./src/pages/login/help.png":
/*!**********************************!*\
  !*** ./src/pages/login/help.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "62c9f99a957c2881564b55a63ed55020.png");

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
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remax */ "./node_modules/remax/esm/index.js");
/* harmony import */ var _index_people_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index_people.png */ "./src/pages/login/index_people.png");
/* harmony import */ var _return_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./return.png */ "./src/pages/login/return.png");
/* harmony import */ var _lost_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lost.png */ "./src/pages/login/lost.png");
/* harmony import */ var _recruit_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recruit.png */ "./src/pages/login/recruit.png");
/* harmony import */ var _comment_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comment.png */ "./src/pages/login/comment.png");
/* harmony import */ var _cancel_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cancel.png */ "./src/pages/login/cancel.png");
/* harmony import */ var _school_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./school.png */ "./src/pages/login/school.png");
/* harmony import */ var _exit_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./exit.png */ "./src/pages/login/exit.png");
/* harmony import */ var _help_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./help.png */ "./src/pages/login/help.png");
/* harmony import */ var _people_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./people.png */ "./src/pages/login/people.png");
/* harmony import */ var _right_point_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./right_point.png */ "./src/pages/login/right_point.png");
/* harmony import */ var _ip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../ip */ "./src/pages/ip.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../app */ "./src/app.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


















var body = [{
  name: '??????',
  img: _lost_png__WEBPACK_IMPORTED_MODULE_7__["default"]
}, {
  name: '??????',
  img: _recruit_png__WEBPACK_IMPORTED_MODULE_8__["default"]
}, {
  name: '??????',
  img: _comment_png__WEBPACK_IMPORTED_MODULE_9__["default"]
}, {
  name: '??????',
  img: _return_png__WEBPACK_IMPORTED_MODULE_6__["default"]
}];
var bottom = [{
  name: '????????????',
  img: _people_png__WEBPACK_IMPORTED_MODULE_14__["default"]
}, {
  name: '????????????',
  img: _school_png__WEBPACK_IMPORTED_MODULE_11__["default"]
}, {
  name: '???????????????',
  img: _help_png__WEBPACK_IMPORTED_MODULE_13__["default"]
}];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var global = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_app__WEBPACK_IMPORTED_MODULE_17__["AppContext"]); //????????????

  Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_1__["usePageEvent"])('onShow', function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                wx.request({
                  url: "".concat(_ip__WEBPACK_IMPORTED_MODULE_16__["default"], "/register/userInfo"),
                  data: {
                    Re_id: global.appData.Re_id,
                    Re_power: 'user'
                  },
                  method: 'POST',
                  success: function success(res) {
                    if (res.data) {
                      global.setAppData(res.data.user);
                    }
                  }
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  });

  var MidButton = function MidButton(item) {
    if (global.appData) {
      Object(remax_one__WEBPACK_IMPORTED_MODULE_3__["navigateTo"])({
        url: "/pages/login/release/index?title=".concat(item.name)
      });
    } else {
      wx.showToast({
        title: '????????????',
        icon: 'error',
        duration: 2000
      });
    }
  };

  var MidButtonAll = function MidButtonAll() {
    if (global.appData) {
      Object(remax_one__WEBPACK_IMPORTED_MODULE_3__["navigateTo"])({
        url: "/pages/login/release/index?title=\u5931\u7269"
      });
    } else {
      wx.showToast({
        title: '????????????',
        icon: 'error',
        duration: 2000
      });
    }
  };

  var BottomButton = function BottomButton(item) {
    if (item.name === '????????????') {
      if (global.appData) {
        Object(remax_one__WEBPACK_IMPORTED_MODULE_3__["navigateTo"])({
          url: "/pages/login/school/index"
        });
      } else {
        wx.showToast({
          title: '????????????',
          icon: 'error',
          duration: 2000
        });
      }
    }

    if (item.name === '???????????????') {
      Object(remax_one__WEBPACK_IMPORTED_MODULE_3__["navigateTo"])({
        url: "/pages/login/help/index"
      });
    }

    if (item.name === '????????????') {
      if (global.appData) {
        Object(remax_one__WEBPACK_IMPORTED_MODULE_3__["navigateTo"])({
          url: "/pages/login/setting/index"
        });
      } else {
        wx.showToast({
          title: '????????????',
          icon: 'error',
          duration: 2000
        });
      }
    }
  };

  var login = function login() {
    Object(remax_one__WEBPACK_IMPORTED_MODULE_3__["navigateTo"])({
      url: "/pages/login/pwd/index"
    });
  };

  var exit = function exit() {
    global.setAppData();
    Object(remax_one__WEBPACK_IMPORTED_MODULE_3__["reLaunch"])({
      url: '/pages/login/index'
    });
  };

  var gocertification = function gocertification() {
    Object(remax_one__WEBPACK_IMPORTED_MODULE_3__["navigateTo"])({
      url: "/pages/login/certification/index"
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "app"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "top"
  }, global.appData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "top_left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "top_title"
  }, global.appData.Re_name), global.appData.Re_school_name && global.appData.Re_status === '????????????' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "top_school"
  }, global.appData.Re_school_name) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "top_certification",
    onClick: function onClick() {
      return gocertification();
    }
  }, "\u70B9\u51FB\u53BB\u8BA4\u8BC1~")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "top_left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "top_title"
  }, "\u63A2\u7D22\u672A\u77E5~"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "top_button",
    onClick: function onClick() {
      return login();
    }
  }, "\u767B\u5F55/\u6CE8\u518C")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "people"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    src: _index_people_png__WEBPACK_IMPORTED_MODULE_5__["default"],
    mode: "widthFix",
    className: "people_img"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "mid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "mid_top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "mid_top_left"
  }, "\u6211\u7684\u53D1\u5E03"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "mid_top_right",
    onClick: function onClick() {
      return MidButtonAll();
    }
  }, "\u67E5\u770B\u5168\u90E8")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "mid_bottom"
  }, body.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
      key: index,
      className: "mid_bottom_one",
      onClick: function onClick() {
        return MidButton(item);
      },
      __key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["Image"], {
      src: item.img,
      mode: "widthFix",
      className: "mid_img"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
      className: "mid_name"
    }, item.name));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "bottom"
  }, bottom.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
      key: index,
      className: "bottom_one",
      onClick: function onClick() {
        return BottomButton(item);
      },
      __key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
      className: "bottom_left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["Image"], {
      src: item.img,
      mode: "widthFix",
      className: "bottom_left_img"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
      className: "bottom_name"
    }, item.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["Image"], {
      src: _right_point_png__WEBPACK_IMPORTED_MODULE_15__["default"],
      mode: "widthFix",
      className: "bottom_right_img"
    })));
  })), global.appData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    key: 'exit',
    className: "bottom_one",
    onClick: function onClick() {
      return exit();
    },
    __key: 'exit'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "bottom_left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    src: _exit_png__WEBPACK_IMPORTED_MODULE_12__["default"],
    mode: "widthFix",
    className: "bottom_left_img"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "exit_name"
  }, "\u9000\u51FA\u767B\u5F55"))) : '');
});

/***/ }),

/***/ "./src/pages/login/index_people.png":
/*!******************************************!*\
  !*** ./src/pages/login/index_people.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "382967a11408b70a08b0427feedec98d.png");

/***/ }),

/***/ "./src/pages/login/lost.png":
/*!**********************************!*\
  !*** ./src/pages/login/lost.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d99f3b5bf09a2238262899a63d20475e.png");

/***/ }),

/***/ "./src/pages/login/people.png":
/*!************************************!*\
  !*** ./src/pages/login/people.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7e8991c5cef662ebf12ee99e6518203f.png");

/***/ }),

/***/ "./src/pages/login/recruit.png":
/*!*************************************!*\
  !*** ./src/pages/login/recruit.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "763008864a313b5454b4870fec03ce4d.png");

/***/ }),

/***/ "./src/pages/login/return.png":
/*!************************************!*\
  !*** ./src/pages/login/return.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "21dd2744e90faec8c5dc73e1547860e4.png");

/***/ }),

/***/ "./src/pages/login/right_point.png":
/*!*****************************************!*\
  !*** ./src/pages/login/right_point.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "14f9aa27e8bbf2063fadcceaed96115c.png");

/***/ }),

/***/ "./src/pages/login/school.png":
/*!************************************!*\
  !*** ./src/pages/login/school.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ec75a951724c490ed31549a392e4c7f4.png");

/***/ }),

/***/ 1:
/*!**********************************************!*\
  !*** multi ./src/pages/login/index.entry.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\??????????????????\??????\??????\lost_screen\src\pages\login\index.entry.js */"./src/pages/login/index.entry.js");


/***/ })

},[[1,"runtime","remax-vendors","remax-styles"]]]);