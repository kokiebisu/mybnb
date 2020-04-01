webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/functions/Notice.jsx":
/*!*********************************************!*\
  !*** ./src/components/functions/Notice.jsx ***!
  \*********************************************/
/*! exports provided: Notice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notice", function() { return Notice; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/functions/Notice.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Notice = function Notice() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, "hello");
};

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/Header */ "./src/components/layout/Header.jsx");
/* harmony import */ var _components_functions_FrontLines__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/functions/FrontLines */ "./src/components/functions/FrontLines.jsx");
/* harmony import */ var _components_containers_Explore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/containers/Explore */ "./src/components/containers/Explore.tsx");
/* harmony import */ var _components_layout_NewFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/NewFooter */ "./src/components/layout/NewFooter.tsx");
/* harmony import */ var _components_modals_MenuModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/modals/MenuModal */ "./src/components/modals/MenuModal.jsx");
/* harmony import */ var _components_functions_Notice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/functions/Notice */ "./src/components/functions/Notice.jsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

 // Component






 // Next

var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      menuModal = _useState[0],
      setMenuModal = _useState[1];

  var switchMenuModal = function switchMenuModal() {
    setMenuModal(!menuModal);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_components_layout_Header__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    switchMenuModal: switchMenuModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), menuModal ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_components_modals_MenuModal__WEBPACK_IMPORTED_MODULE_5__["MenuModal"], {
    switchMenuModal: switchMenuModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })) : null, __jsx(_components_functions_FrontLines__WEBPACK_IMPORTED_MODULE_2__["FrontLines"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx(_components_functions_Notice__WEBPACK_IMPORTED_MODULE_6__["Notice"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(_components_containers_Explore__WEBPACK_IMPORTED_MODULE_3__["Explore"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx(_components_layout_NewFooter__WEBPACK_IMPORTED_MODULE_4__["NewFooter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.05dcb6d248780f26becb.hot-update.js.map