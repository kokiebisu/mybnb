webpackHotUpdate("static/development/pages/host/setup.js",{

/***/ "./src/components/hostsetup/functions/ControlHostingCard.jsx":
/*!*******************************************************************!*\
  !*** ./src/components/hostsetup/functions/ControlHostingCard.jsx ***!
  \*******************************************************************/
/*! exports provided: ControlHostingCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlHostingCard", function() { return ControlHostingCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/hostsetup/functions/ControlHostingCard.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


var renderIcon = function renderIcon(icon) {
  switch (icon) {
    case 'clock':
      return __jsx("div", {
        className: "w-12 h-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, __jsx("img", {
        src: "https://a0.muscache.com/pictures/788cdf62-dc3a-4149-ac0e-b37909436319.jpg",
        className: "w-full h-full",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }));

    case 'calendar':
      return __jsx("div", {
        className: "w-12 h-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, __jsx("img", {
        className: "w-full h-full",
        src: "https://a0.muscache.com/pictures/b1d5dc1c-34ed-442d-8b03-7914166861ce.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }));

    case 'keys':
      return __jsx("div", {
        className: "w-12 h-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx("svg", {
        viewBox: "0 0 24 24",
        className: "w-full h-full",
        style: {
          fill: '#FFB400'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx("path", {
        d: "m12.49 14.55a4 4 0 1 1 4.88-6.14 6.33 6.33 0 0 1 0 2.58l-.71 1.73-1.44 1.31a17.19 17.19 0 0 1 -2.73.51zm1.95-6.63a1 1 0 1 0 1.39.27 1 1 0 0 0 -1.39-.27",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), __jsx("path", {
        style: {
          fill: '#484848'
        },
        d: "m22 5.5a4.49 4.49 0 0 0 -8.96-.5c-.02 0-.03 0-.04 0a5.03 5.03 0 0 0 -4.88 3.92.5.5 0 0 0 .98.21 3.99 3.99 0 0 1 7.74-.2 3.46 3.46 0 0 1 -1.37-.58.5.5 0 0 0 -.58.81 4.45 4.45 0 0 0 2.11.8v.04a4 4 0 0 1 -5.28 3.79 5.98 5.98 0 0 1 -.93-.46.6.6 0 0 0 -.63.02l-6.23 4.1-.93-.31v-.64a.5.5 0 0 1 .5-.5h.3a1.51 1.51 0 0 0 1.41-.99l.3-.82a.49.49 0 0 1 .52-.33l.63.06a1.37 1.37 0 0 0 1.47-1.15l.06-.39a.5.5 0 0 1 .2-.33l.91-.66a.5.5 0 1 0 -.58-.81l-.91.66a1.51 1.51 0 0 0 -.61.99l-.06.39a.37.37 0 0 1 -.39.31l-.63-.06a1.5 1.5 0 0 0 -1.55.98l-.3.82a.5.5 0 0 1 -.47.33h-.3a1.5 1.5 0 0 0 -1.5 1.5v.64a1 1 0 0 0 .68.95l1.39.46 6.43-4.23a5.79 5.79 0 0 0 .89.42 4.61 4.61 0 0 0 2.38.18l-.06.24a1.29 1.29 0 0 0 .28 1.14c.15.21.16.25.14.35-.02.08-.05.11-.24.23a1.35 1.35 0 0 0 -.55 1.97c.12.23.17.35.13.52a.74.74 0 0 1 -.25.38 1.51 1.51 0 0 0 -.52.96c-.13.99.85 1.52 1.33 1.77a.5.5 0 0 0 .44.01l1.11-.51a.5.5 0 0 0 .28-.33l1.65-6.35a4.43 4.43 0 0 0 3.49-3.21 4.16 4.16 0 0 0 -.52-3.25 4.47 4.47 0 0 0 1.51-3.34zm-7.97-.39a3.49 3.49 0 1 1 5.82 2.96 3.27 3.27 0 0 0 -1.93-.82h-.76a5.01 5.01 0 0 0 -3.14-2.14zm4.95 3.55a3.46 3.46 0 0 1 -1.09.3 4.93 4.93 0 0 0 -.22-.71h.22a2.21 2.21 0 0 1 1.09.41zm1.07 3.18a3.43 3.43 0 0 1 -2.98 2.52.5.5 0 0 0 -.43.37l-1.68 6.44-.67.31c-.44-.26-.62-.45-.59-.64a.55.55 0 0 1 .23-.38 1.7 1.7 0 0 0 .52-.84 1.62 1.62 0 0 0 -.2-1.22c-.1-.2-.14-.28-.12-.36.04-.14.1-.19.29-.3a1.27 1.27 0 0 0 .4-2c-.14-.21-.15-.24-.13-.32l.21-.79a5 5 0 0 0 3.1-4.62c0-.02-.01-.03-.01-.05a4.44 4.44 0 0 0 1.68-.54 3.2 3.2 0 0 1 .37 2.42z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      })));
  }
};

var ControlHostingCard = function ControlHostingCard(_ref) {
  var children = _ref.children,
      icon = _ref.icon,
      title = _ref.title,
      description = _ref.description,
      link = _ref.link;
  return __jsx("div", {
    className: "w-full lg:w-1/2 mb-16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("div", {
    className: "w-85p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("div", {
    className: "w-12 h-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, children)), __jsx("div", {
    className: "mt-3 mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-2xl text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, title)), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, description)), link ? __jsx("div", {
    className: "mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-green-850",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Learn about making money on Airbnb")) : null));
};

/***/ })

})
//# sourceMappingURL=setup.js.f76b4cbc96744ab4db9f.hot-update.js.map