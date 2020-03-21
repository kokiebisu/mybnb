webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/containers/TopRated.jsx":
/*!************************************************!*\
  !*** ./src/components/containers/TopRated.jsx ***!
  \************************************************/
/*! exports provided: TopRated, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopRated", function() { return TopRated; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spinners/PulseLoader */ "./node_modules/react-spinners/PulseLoader.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_sizes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-sizes */ "./node_modules/react-sizes/dist/react-sizes.min.js");
/* harmony import */ var react_sizes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_sizes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _util_RenderSkeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util/RenderSkeleton */ "./src/util/RenderSkeleton.js");
/* harmony import */ var _functions_TopRatedCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../functions/TopRatedCard */ "./src/components/functions/TopRatedCard.tsx");
/* harmony import */ var _ShowAll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ShowAll */ "./src/components/ShowAll.tsx");
/* harmony import */ var _wrapper_Section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../wrapper/Section */ "./src/components/wrapper/Section.tsx");

var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/TopRated.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query {\n    experiences {\n      id\n      title\n      cost\n      ratings\n      reviews\n      location\n      img\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





 // Utils

 // Components


 // Wrapper


var GET_EXPERIENCES = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject());

var mapSizesToProps = function mapSizesToProps(_ref) {
  var width = _ref.width;
  return {
    isMobile: width < 767,
    isTablet: width > 767 && width < 1023,
    isLaptop: width > 1023 && width < 1279,
    isDesktop: width > 1279 && width < 1529,
    isLargeDesktop: width > 1529
  };
};

var renderContent = function renderContent(data, number) {
  var content = [];

  for (var i = 0; i < number; i++) {
    content.push(__jsx("div", {
      className: "pb-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx(_functions_TopRatedCard__WEBPACK_IMPORTED_MODULE_7__["TopRatedCard"], {
      key: i,
      id: data === null || data === void 0 ? void 0 : data.experiences[i].id,
      img: data === null || data === void 0 ? void 0 : data.experiences[i].img,
      title: data === null || data === void 0 ? void 0 : data.experiences[i].title,
      cost: data === null || data === void 0 ? void 0 : data.experiences[i].cost,
      ratings: data === null || data === void 0 ? void 0 : data.experiences[i].ratings,
      reviews: data === null || data === void 0 ? void 0 : data.experiences[i].reviews,
      location: data === null || data === void 0 ? void 0 : data.experiences[i].location,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    })));
  }

  return content;
}; // interface Experience {
//   id: string;
//   title: string;
//   cost: number;
//   ratings: number;
//   reviews: number;
//   location: string;
//   img: string;
// }
// interface ExperienceData {
//   experiences: Experience[];
// }


var TopRated = function TopRated(_ref2) {
  var isMobile = _ref2.isMobile,
      isTablet = _ref2.isTablet,
      isLaptop = _ref2.isLaptop,
      isDesktop = _ref2.isDesktop,
      isLargeDesktop = _ref2.isLargeDesktop;

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_EXPERIENCES),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (error) return "Error! ".concat(error.message);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(_wrapper_Section__WEBPACK_IMPORTED_MODULE_9__["Section"], {
    title: "Top-rated experiences",
    phrase: "Book activities led by local hosts on your next trip.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, loading ? __jsx("div", {
    className: "grid gap-3 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full h-88",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, isMobile ? Object(_util_RenderSkeleton__WEBPACK_IMPORTED_MODULE_6__["RenderSkeletonVertical"])(4) : null, isTablet ? Object(_util_RenderSkeleton__WEBPACK_IMPORTED_MODULE_6__["RenderSkeletonVertical"])(3) : null, isLaptop ? Object(_util_RenderSkeleton__WEBPACK_IMPORTED_MODULE_6__["RenderSkeletonVertical"])(4) : null, isDesktop ? Object(_util_RenderSkeleton__WEBPACK_IMPORTED_MODULE_6__["RenderSkeletonVertical"])(5) : null, isLargeDesktop ? Object(_util_RenderSkeleton__WEBPACK_IMPORTED_MODULE_6__["RenderSkeletonVertical"])(6) : null) : data && __jsx("div", {
    className: "grid gap-3 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, isMobile ? renderContent(data, 4) : null, isTablet ? renderContent(data, 3) : null, isLaptop ? renderContent(data, 4) : null, isDesktop ? renderContent(data, 5) : null, isLargeDesktop ? renderContent(data, 6) : null), __jsx(_ShowAll__WEBPACK_IMPORTED_MODULE_8__["ShowAll"], {
    title: "Show all experiences",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (react_sizes__WEBPACK_IMPORTED_MODULE_5___default()(mapSizesToProps)(TopRated));

/***/ })

})
//# sourceMappingURL=index.js.7499409c0950a53a5442.hot-update.js.map