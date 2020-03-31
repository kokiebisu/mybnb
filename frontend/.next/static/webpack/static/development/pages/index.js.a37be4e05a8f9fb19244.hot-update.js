webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/modals/CurrencyModal.tsx":
/*!*************************************************!*\
  !*** ./src/components/modals/CurrencyModal.tsx ***!
  \*************************************************/
/*! exports provided: CurrencyModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyModal", function() { return CurrencyModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _currency_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currency.json */ "./src/components/modals/currency.json");
var _currency_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./currency.json */ "./src/components/modals/currency.json", 1);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/modals/CurrencyModal.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];




var currencies = JSON.parse(JSON.stringify(_currency_json__WEBPACK_IMPORTED_MODULE_2___namespace));
var CurrencyModal = function CurrencyModal(_ref) {
  var location = _ref.location,
      setCurrencyModal = _ref.setCurrencyModal,
      setCurrency = _ref.setCurrency;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    function handleResize() {
      if (window.innerWidth < 1100) {
        setCurrencyModal(false);
      }
    }

    window.addEventListener('resize', handleResize);
  });

  var refreshPage = function refreshPage() {
    window.location.reload(false);
  };

  var defaultCurrency = currencies["default"].find(function (currency) {
    return currency.location == location;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultCurrency),
      selectedCountry = _useState[0],
      setSelectedCountry = _useState[1];

  var filteredCurrencies = currencies["default"].filter(function (currency) {
    return !lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isEqual(currency, selectedCountry);
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    id: "darkOverlay",
    className: "fixed w-full h-full top-0 left-0 z-20 overflow-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx("div", {
    id: "centerAbsolute",
    className: "relative rounded-xl hidden fixed bg-white md:block w-248 pb-8 z-50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("div", {
    className: "w-full border-b border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("div", {
    className: "w-full mx-auto max-w-5xl mt-2 flex justify-center items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("div", {
    className: "bg-green-850 relative w-full px-4 flex justify-center items-center my-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("div", {
    className: "w-full flex items-center absolute left-0 z-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return setCurrencyModal(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("div", {
    className: "inline-block z-10 hover:bg-gray-200 bg-white rounded-full p-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("svg", {
    className: "w-4 h-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 47.971 47.971",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("path", {
    d: "M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88 c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242 C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879 s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }))))))))), __jsx("div", {
    className: "w-full h-60v overflow-y-scroll overflow-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("div", {
    className: "w-full mx-auto max-w-5xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("div", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "w-full text-2xl py-6 text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Choose currency"), __jsx("div", {
    className: "w-full flex flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("div", {
    className: "w-1/5 flex mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("button", {
    className: "w-90p border border-gray-750 rounded-lg flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("div", {
    className: "w-85p py-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, selectedCountry.full)), __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm text-gray-650",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, selectedCountry.abbreviation, ' ', selectedCountry.abbreviation === null ? null : '-', ' ', selectedCountry.symbol))))), filteredCurrencies.map(function (currency) {
    return __jsx("div", {
      className: "w-1/5 flex mb-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, __jsx("button", {
      onClick: function onClick() {
        setSelectedCountry(currency);
        setCurrency({
          name: "".concat(currency.symbol),
          sign: "".concat(currency.abbreviation)
        });
        refreshPage(); // Query to change currency
      },
      className: "hover:bg-gray-250 w-90p rounded-lg flex justify-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, __jsx("div", {
      className: "w-85p py-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, __jsx("div", {
      className: "flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, __jsx("p", {
      style: {
        fontFamily: 'airbnb-book'
      },
      className: "text-sm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, currency.full)), __jsx("div", {
      className: "flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, __jsx("p", {
      style: {
        fontFamily: 'airbnb-book'
      },
      className: "text-sm text-gray-650",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, currency.abbreviation, ' ', currency.abbreviation === null ? null : '-', ' ', currency.symbol)))));
  }))))));
};

/***/ })

})
//# sourceMappingURL=index.js.a37be4e05a8f9fb19244.hot-update.js.map