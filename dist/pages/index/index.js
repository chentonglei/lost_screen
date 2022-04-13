require('./../../runtime.js');
require('./../../remax-vendors.js');
require('./../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./src/pages/index/index.css":
/*!***********************************!*\
  !*** ./src/pages/index/index.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/index.entry.js":
/*!****************************************!*\
  !*** ./src/pages/index/index.entry.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/pages/index/index.js");
__webpack_require__(/*! ./index.css */ "./src/pages/index/index.css");



Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/index/index'));

/***/ }),

/***/ "./src/pages/index/index.js":
/*!**********************************!*\
  !*** ./src/pages/index/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax */ "./node_modules/remax/esm/index.js");
/* harmony import */ var _png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./加号.png */ "./src/pages/index/加号.png");
/* harmony import */ var _png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./位置.png */ "./src/pages/index/位置.png");
/* harmony import */ var _png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./评论.png */ "./src/pages/index/评论.png");
/* harmony import */ var _login_school__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../login/school */ "./src/pages/login/school/index.js");
/* harmony import */ var _ip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ip */ "./src/pages/ip.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../app */ "./src/app.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










/* harmony default export */ __webpack_exports__["default"] = (function () {
  var global = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_app__WEBPACK_IMPORTED_MODULE_9__["AppContext"]); //全局变量

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('失物'),
      _useState2 = _slicedToArray(_useState, 2),
      isModalVisible = _useState2[0],
      setIsModalVisible = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      data = _useState4[0],
      setData = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    wx.showLoading({
      title: '加载中...',
      success: function success() {
        setLoading(true);
      }
    });

    var fetchData = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(isModalVisible === '失物')) {
                  _context.next = 3;
                  break;
                }

                _context.next = 3;
                return wx.request({
                  url: "".concat(_ip__WEBPACK_IMPORTED_MODULE_8__["default"], "/lost/UserShow"),
                  data: {
                    Sch_name: global.school
                  },
                  method: 'POST',
                  success: function success(res) {
                    if (res.data.data) {
                      setData(res.data.data);
                    }
                  }
                });

              case 3:
                if (!(isModalVisible === '招领')) {
                  _context.next = 6;
                  break;
                }

                _context.next = 6;
                return wx.request({
                  url: "".concat(_ip__WEBPACK_IMPORTED_MODULE_8__["default"], "/recruit/UserShow"),
                  data: {
                    Sch_name: global.school
                  },
                  method: 'POST',
                  success: function success(res) {
                    if (res.data.data) {
                      setData(res.data.data);
                    }
                  }
                });

              case 6:
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
    setTimeout(function () {
      wx.hideLoading({
        success: function success() {
          setLoading(false);
        }
      });
    }, 1000);
  }, [isModalVisible]);

  var changeButton = function changeButton(title) {
    setIsModalVisible(title);
  };

  var release = function release() {
    if (global.appData) {
      Object(remax_one__WEBPACK_IMPORTED_MODULE_2__["navigateTo"])({
        url: "/pages/index/release/index"
      });
    } else {
      wx.showToast({
        title: '请先登录',
        icon: 'error',
        duration: 2000
      });
    }
  };

  var school = function school() {
    Object(remax_one__WEBPACK_IMPORTED_MODULE_2__["navigateTo"])({
      url: "/pages/index/school/index"
    });
  };

  var details = function details(item) {
    item.isModalVisible = isModalVisible;
    var str = JSON.stringify(item);
    Object(remax_one__WEBPACK_IMPORTED_MODULE_2__["navigateTo"])({
      url: '/pages/index/details/index?jsonStr=' + str //传base64报错

    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "app"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: _png__WEBPACK_IMPORTED_MODULE_4__["default"],
    mode: "widthFix",
    className: "bottom_left_img",
    onClick: function onClick() {
      return release();
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "top_title"
  }, "\u5931\u7269\u62DB\u9886")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "mid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "mid_left"
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
  }, "\u62DB\u9886")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "mid_right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: _png__WEBPACK_IMPORTED_MODULE_5__["default"],
    mode: "widthFix",
    className: "address_img"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    onClick: function onClick() {
      return school();
    }
  }, global.school))), loading === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "content"
  }, data.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "content_one",
      onClick: function onClick() {
        return details(item);
      },
      key: index,
      __key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "content_one_top"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "content_one_name"
    }, isModalVisible === '失物' ? item.Lost_people_name : item.Rec_people_name, isModalVisible === '失物' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: item.Lost_status === '未找到' ? 'status_nofind' : 'status_find'
    }, item.Lost_status) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: item.Rec_status === '未归还' ? 'status_nofind' : 'status_find'
    }, item.Rec_status)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "content_one_mid"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "content_one_time"
    }, isModalVisible === '失物' ? item.Lost_send_time : item.Rec_send_time), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "content_one_school"
    }, item.Sch_name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "content_one_bottom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "content_bottom_title"
    }, "".concat(isModalVisible === '失物' ? '失物时间' : '拾物时间', "\uFF1A").concat(isModalVisible === '失物' ? item.Lost_time : item.Rec_time)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "content_bottom_title"
    }, "".concat(isModalVisible === '失物' ? '失物地点' : '拾物地点', "\uFF1A").concat(isModalVisible === '失物' ? item.Lost_where : item.Rec_where)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "content_bottom_title"
    }, "".concat(isModalVisible === '失物' ? '失物图片' : '拾物图片', "\uFF1A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      style: 'text-decoration:underline;color:#1296db'
    }, "\u67E5\u770B\u56FE\u7247")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "content_bottom_title"
    }, "".concat(isModalVisible === '失物' ? '失物内容' : '拾物内容', "\uFF1A").concat(isModalVisible === '失物' ? item.Lost_content : item.Rec_content))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "comment"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      src: _png__WEBPACK_IMPORTED_MODULE_6__["default"],
      mode: "widthFix",
      className: "bottom_img"
    })));
  })));
});

/***/ }),

/***/ "./src/pages/index/位置.png":
/*!********************************!*\
  !*** ./src/pages/index/位置.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5abc52ddf4b2e24dc15d6bda6b1af13b.png");

/***/ }),

/***/ "./src/pages/index/加号.png":
/*!********************************!*\
  !*** ./src/pages/index/加号.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "771b1e49edb660e9652c7e50f917cfbd.png");

/***/ }),

/***/ "./src/pages/index/评论.png":
/*!********************************!*\
  !*** ./src/pages/index/评论.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fc26361ad112d8b4c7d70fd7fa5528dc.png");

/***/ }),

/***/ 1:
/*!**********************************************!*\
  !*** multi ./src/pages/index/index.entry.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\福建工程学院\毕设\代码\lost_screen\src\pages\index\index.entry.js */"./src/pages/index/index.entry.js");


/***/ })

},[[1,"runtime","remax-vendors","remax-styles"]]]);