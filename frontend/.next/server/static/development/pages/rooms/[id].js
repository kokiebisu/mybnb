module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/img/high/airbnb-background.jpg":
/*!***********************************************!*\
  !*** ./public/img/high/airbnb-background.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/airbnb-background-b8b3c94eb622e8a6083c338facb6c4fd.jpg";

/***/ }),

/***/ "./public/img/high/staydetail1.jpg":
/*!*****************************************!*\
  !*** ./public/img/high/staydetail1.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/staydetail1-af53d8cd31ef54c10fe9b8301410ee6b.jpg";

/***/ }),

/***/ "./public/img/high/staydetail2.jpg":
/*!*****************************************!*\
  !*** ./public/img/high/staydetail2.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/staydetail2-d675f41ab81426830a59e747f25def75.jpg";

/***/ }),

/***/ "./public/img/high/staydetail3.jpg":
/*!*****************************************!*\
  !*** ./public/img/high/staydetail3.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/staydetail3-3f01324ba796db32863bdb65d011b647.jpg";

/***/ }),

/***/ "./public/img/high/staydetail4.jpg":
/*!*****************************************!*\
  !*** ./public/img/high/staydetail4.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/staydetail4-d125675c1fb3c36316811b93bce691dc.jpg";

/***/ }),

/***/ "./public/img/high/staydetail5.jpg":
/*!*****************************************!*\
  !*** ./public/img/high/staydetail5.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/staydetail5-7012bd4430f2ebc4689d0d2dc4f4fe97.jpg";

/***/ }),

/***/ "./public/img/high/todonear1.jpg":
/*!***************************************!*\
  !*** ./public/img/high/todonear1.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/todonear1-80fc8d15b577926c599e89c0fb13d576.jpg";

/***/ }),

/***/ "./src/components/containers/Characteristics.js":
/*!******************************************************!*\
  !*** ./src/components/containers/Characteristics.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _presentational_CharacteristicCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../presentational/CharacteristicCard */ "./src/components/presentational/CharacteristicCard.js");
 // Components


/* harmony default export */ __webpack_exports__["default"] = (() => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_CharacteristicCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "home",
    title: "Entire Home",
    description: "You will have the house to yourself."
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_CharacteristicCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "clean",
    title: "Sparkling clean",
    guestnumber: "13",
    description: "recent guests said this place was sparkling clean."
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_CharacteristicCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "superhost",
    hostname: "Tim",
    title: "is a Superhost",
    description: "Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests."
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_CharacteristicCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "location",
    title: "Great location",
    percentage: "90",
    description: "of recent guests gave the location a 5-star rating."
  }));
});

/***/ }),

/***/ "./src/components/containers/HostedBy.js":
/*!***********************************************!*\
  !*** ./src/components/containers/HostedBy.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (() => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "py-4 border-b border-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Hosted By Maria Henriqueta"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Porto, Portugal", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " . "), "Joined in March 2012"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-start bg-blue-500"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-4 w-4",
    viewBox: "0 0 37.286 37.287",
    style: {
      fill: '#F5385D'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M36.683,16.339l-7.567,7.377l1.786,10.417c0.128,0.75-0.182,1.509-0.797,1.957c-0.348,0.253-0.762,0.382-1.176,0.382 c-0.318,0-0.638-0.076-0.931-0.23l-9.355-4.918l-9.355,4.918c-0.674,0.355-1.49,0.295-2.107-0.15 c-0.615-0.448-0.924-1.206-0.795-1.957l1.787-10.417L0.604,16.34c-0.547-0.531-0.741-1.326-0.508-2.05 c0.236-0.724,0.861-1.251,1.615-1.361l10.459-1.521l4.68-9.478c0.335-0.684,1.031-1.116,1.792-1.116 c0.763,0,1.456,0.432,1.793,1.115l4.68,9.478l10.461,1.521c0.752,0.109,1.379,0.637,1.611,1.361 C37.425,15.013,37.226,15.808,36.683,16.339z"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "110 Reviews"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-start"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "h-6 w-6",
    viewBox: "0 0 460.24 460.24",
    xmlns: "http://www.w3.org/2000/svg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m187.777344 286.496094c-3.125 3.117187-8.183594 3.117187-11.304688 0l-39.640625-39.574219-11.3125 11.269531 56.601563 56.617188 147.085937-147.089844-11.328125-11.328125zm0 0"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m423.128906 175.425781 6.304688-60.386719-55.480469-24.6875c-1.8125-.804687-3.261719-2.253906-4.066406-4.0625l-24.679688-55.480468-60.398437 6.3125c-1.960938.195312-3.925782-.335938-5.519532-1.488282l-49.167968-35.632812-49.167969 35.632812c-1.597656 1.152344-3.5625 1.683594-5.519531 1.488282l-60.402344-6.3125-24.679688 55.480468c-.800781 1.808594-2.25 3.257813-4.0625 4.054688l-55.480468 24.695312 6.304687 60.386719c.203125 1.960938-.324219 3.929688-1.480469 5.527344l-35.632812 49.167969 35.632812 49.167968c1.15625 1.597657 1.683594 3.566407 1.480469 5.527344l-6.304687 60.382813 55.480468 24.6875c1.808594.804687 3.257813 2.253906 4.0625 4.066406l24.679688 55.480469 60.402344-6.3125c.269531 0 .550781-.042969.796875-.042969 1.6875 0 3.328125.535156 4.691406 1.53125l49.199219 35.628906 49.167968-35.628906c1.59375-1.160156 3.558594-1.691406 5.519532-1.488281l60.398437 6.3125 24.679688-55.480469c.804687-1.8125 2.253906-3.257813 4.066406-4.058594l55.480469-24.695312-6.304688-60.382813c-.207031-1.960937.320313-3.929687 1.480469-5.527344l35.628906-49.167968-35.628906-49.167969c-1.160156-1.597656-1.6875-3.566406-1.480469-5.527344zm-76.953125-2.050781-158.398437 158.402344c-3.125 3.121094-8.1875 3.121094-11.3125 0l-67.921875-67.921875c-1.503907-1.5-2.347657-3.539063-2.347657-5.664063s.84375-4.164062 2.347657-5.664062l22.640625-22.558594c3.121094-3.113281 8.175781-3.113281 11.296875 0l39.640625 39.558594 130.101562-130.101563c3.125-3.125 8.1875-3.125 11.3125 0l22.640625 22.636719c3.125 3.125 3.125 8.191406 0 11.3125zm0 0"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Verified")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-between border-b border-gray-300 py-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Maria Henriqueta is a Superhost ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "."), " Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "svg here"))));
});

/***/ }),

/***/ "./src/components/containers/KeepInMind.js":
/*!*************************************************!*\
  !*** ./src/components/containers/KeepInMind.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (() => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "py-4 border-b border-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Things to keep in mind"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Check-in:"), " After 4:00 p.m."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Checkout:"), " 12:00 p.m.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "py-4 border-b border-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "House Rules"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-start justify-start"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex item-center justify-start w-1/2 bg-blue"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "svg here"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "No parties or events")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex item-center justify-start w-1/2 bg-blue"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "svg here"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "No parties or events"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-start"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-green-500"
  }, "Read all rules"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "svg here"))))));
});

/***/ }),

/***/ "./src/components/containers/MoreHomes.js":
/*!************************************************!*\
  !*** ./src/components/containers/MoreHomes.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _presentational_HomeCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../presentational/HomeCard */ "./src/components/presentational/HomeCard.js");
 // Component


/* harmony default export */ __webpack_exports__["default"] = (() => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-start justify-between flex-wrap w-full w-full"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_HomeCard__WEBPACK_IMPORTED_MODULE_1__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_HomeCard__WEBPACK_IMPORTED_MODULE_1__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_HomeCard__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
});

/***/ }),

/***/ "./src/components/containers/MoreLocations.js":
/*!****************************************************!*\
  !*** ./src/components/containers/MoreLocations.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // Components

/* harmony default export */ __webpack_exports__["default"] = (() => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-start justify-between flex-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Madrid"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Madrid"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Madrid"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Madrid"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Madrid"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Madrid")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Madrid"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Madrid"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Madrid"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Madrid"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Madrid"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Madrid")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Madrid"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Madrid"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Madrid"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Madrid"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Madrid"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Madrid")));
});

/***/ }),

/***/ "./src/components/containers/Neighborhood.js":
/*!***************************************************!*\
  !*** ./src/components/containers/Neighborhood.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (() => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "py-4 border-b border-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Hosted By Maria Henriqueta"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Maria Henriqueta's place is located in Penafiel, Porto, Portugal."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-blue-500 h-64"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Exact location information is provided after a booking is confirmed.")));
});

/***/ }),

/***/ "./src/components/containers/Reviews.js":
/*!**********************************************!*\
  !*** ./src/components/containers/Reviews.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_presentational_Review__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/presentational/Review */ "./src/components/presentational/Review.js");
 // Components


/* harmony default export */ __webpack_exports__["default"] = (() => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "font-semibold text-2xl"
  }, "Reviews"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border-b border-gray-300 flex items-center justify-between"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-start"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-4 w-4",
    viewBox: "0 0 37.286 37.287",
    style: {
      fill: '#F5385D'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M36.683,16.339l-7.567,7.377l1.786,10.417c0.128,0.75-0.182,1.509-0.797,1.957c-0.348,0.253-0.762,0.382-1.176,0.382 c-0.318,0-0.638-0.076-0.931-0.23l-9.355-4.918l-9.355,4.918c-0.674,0.355-1.49,0.295-2.107-0.15 c-0.615-0.448-0.924-1.206-0.795-1.957l1.787-10.417L0.604,16.34c-0.547-0.531-0.741-1.326-0.508-2.05 c0.236-0.724,0.861-1.251,1.615-1.361l10.459-1.521l4.68-9.478c0.335-0.684,1.031-1.116,1.792-1.116 c0.763,0,1.456,0.432,1.793,1.115l4.68,9.478l10.461,1.521c0.752,0.109,1.379,0.637,1.611,1.361 C37.425,15.013,37.226,15.808,36.683,16.339z"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "4.95"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "border border-gray-300",
    type: "text",
    placeholder: "search reviews"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap items-start justify-start"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-between w-1/2 bg-red-500"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: ""
  }, "Accuracy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-start"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "5.0"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-between w-1/2 bg-red-500"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: ""
  }, "Accuracy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-start"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "5.0"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-between w-1/2 bg-red-500"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: ""
  }, "Accuracy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-start"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "5.0"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-between w-1/2 bg-red-500"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: ""
  }, "Accuracy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-start"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "5.0"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-between w-1/2 bg-red-500"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: ""
  }, "Accuracy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-start"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "5.0"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-between w-1/2 bg-red-500"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: ""
  }, "Accuracy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-start"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "5.0")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_presentational_Review__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_presentational_Review__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_presentational_Review__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_presentational_Review__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_presentational_Review__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_presentational_Review__WEBPACK_IMPORTED_MODULE_1__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-start"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "p-2 rounded-full border border-gray-700  mr-3 "
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-5 h-5"
  }, "1")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "p-2 rounded-full border border-gray-700  mr-3 "
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-5 h-5"
  }, "2")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "p-2 rounded-full border border-gray-700  mr-3 "
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-5 h-5"
  }, "3")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mr-3"
  }, "..."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "p-2 rounded-full border border-gray-700  mr-3 "
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-5 h-5 "
  }, "16")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-8 w-8",
    viewBox: "0 0 492.004 492.004"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12 c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028 c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265 c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"
  }))))))));
});

/***/ }),

/***/ "./src/components/containers/ToDoNear.js":
/*!***********************************************!*\
  !*** ./src/components/containers/ToDoNear.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _presentational_HeartExperienceCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../presentational/HeartExperienceCard */ "./src/components/presentational/HeartExperienceCard.js");
 // Components


/* harmony default export */ __webpack_exports__["default"] = (() => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-start justify-between flex-wrap w-full"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_HeartExperienceCard__WEBPACK_IMPORTED_MODULE_1__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_HeartExperienceCard__WEBPACK_IMPORTED_MODULE_1__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_HeartExperienceCard__WEBPACK_IMPORTED_MODULE_1__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_HeartExperienceCard__WEBPACK_IMPORTED_MODULE_1__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_HeartExperienceCard__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
});

/***/ }),

/***/ "./src/components/layout/ExploreHeader.js":
/*!************************************************!*\
  !*** ./src/components/layout/ExploreHeader.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (({
  type
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-between relative border-b border-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-start w-full md:w-1/2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ml-6 mr-6 md:mr-8 my-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sr-only"
  }, "Airbnb"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    viewBox: "0 0 1000 1000",
    role: "presentation",
    "aria-hidden": "true",
    focusable: "false",
    className: "block",
    style: {
      height: 34,
      width: 34,
      fill: '#FF6368'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full md:max-w-100 flex items-center justify-start"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex w-full md:w-120 items-center justify-start mr-7 py-3 px-4 shadow-md rounded"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    viewBox: "0 0 16 16",
    style: {
      height: 18,
      width: 18
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-750 px-4"
  }, "Anywhere ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " \xB7 "), " ", type)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "hidden lg:block lg:flex items-center justify-around flex-wrap text-gray-750"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border-transparent border-b-2 hover:border-white py-6 px-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "flex items-center justify-start text-sm mx-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "relative self-center h-3 w-3",
    style: {
      fill: '#484848',
      right: 5
    },
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m256 0c-141.160156 0-256 114.839844-256 256s114.839844 256 256 256 256-114.839844 256-256-114.839844-256-256-256zm-15 125.65625c-22.820312-.980469-45.410156-4.1875-66.980469-9.402344 3.445313-8.164062 7.183594-16.003906 11.214844-23.433594 16.539063-30.476562 36.84375-51.863281 55.765625-59.609374zm0 30.023438v85.320312h-93.691406c1.320312-33.300781 6.996094-66.359375 16.382812-96.429688 24.875 6.265626 50.988282 10.058594 77.308594 11.109376zm0 115.320312v85.320312c-26.320312 1.050782-52.433594 4.84375-77.308594 11.109376-9.386718-30.070313-15.0625-63.128907-16.382812-96.429688zm0 115.34375v92.445312c-18.921875-7.746093-39.226562-29.132812-55.765625-59.609374-4.03125-7.429688-7.769531-15.269532-11.214844-23.433594 21.570313-5.214844 44.15625-8.421875 66.980469-9.402344zm30 0c22.820312.980469 45.410156 4.1875 66.980469 9.402344-3.445313 8.164062-7.183594 16.003906-11.214844 23.433594-16.539063 30.476562-36.84375 51.863281-55.765625 59.609374zm0-30.023438v-85.320312h93.691406c-1.320312 33.300781-6.996094 66.359375-16.382812 96.429688-24.875-6.265626-50.988282-10.058594-77.308594-11.109376zm0-115.320312v-85.320312c26.320312-1.050782 52.433594-4.84375 77.308594-11.109376 9.386718 30.070313 15.0625 63.128907 16.382812 96.429688zm0-115.34375v-92.445312c18.921875 7.746093 39.226562 29.132812 55.765625 59.609374 4.03125 7.429688 7.769531 15.269532 11.214844 23.433594-21.570313 5.214844-44.160157 8.421875-66.980469 9.402344zm82.132812-47.144531c-7.511718-13.84375-15.671874-26.046875-24.273437-36.457031 29.992187 10.242187 57.160156 26.628906 80.007813 47.644531-13.03125 6.980469-27.074219 13.042969-41.847657 18.109375-4.191406-10.179688-8.824219-19.972656-13.886719-29.296875zm-194.265624 0c-5.0625 9.324219-9.695313 19.117187-13.886719 29.296875-14.773438-5.066406-28.816407-11.132813-41.847657-18.109375 22.847657-21.015625 50.015626-37.402344 80.007813-47.644531-8.601563 10.410156-16.757813 22.609374-24.273437 36.457031zm-24.035157 57.492187c-10.238281 32.753906-16.257812 68.460938-17.554687 104.996094h-86.765625c3.210937-48.753906 21.933593-93.339844 51.292969-128.832031 16.292968 9.34375 34.136718 17.335937 53.027343 23.835937zm-17.554687 134.996094c1.296875 36.539062 7.316406 72.242188 17.554687 104.996094-18.890625 6.5-36.734375 14.492187-53.027343 23.835937-29.359376-35.492187-48.082032-80.078125-51.292969-128.832031zm27.703125 133.191406c4.191406 10.179688 8.824219 19.972656 13.886719 29.296875 7.515624 13.84375 15.671874 26.046875 24.273437 36.457031-29.992187-10.242187-57.160156-26.628906-80.003906-47.644531 13.023437-6.976562 27.070312-13.042969 41.84375-18.109375zm208.152343 29.296875c5.0625-9.324219 9.695313-19.117187 13.886719-29.296875 14.773438 5.066406 28.816407 11.132813 41.847657 18.109375-22.847657 21.015625-50.015626 37.402344-80.007813 47.644531 8.601563-10.410156 16.757813-22.609374 24.273437-36.457031zm24.035157-57.492187c10.238281-32.753906 16.257812-68.460938 17.554687-104.996094h86.765625c-3.210937 48.753906-21.933593 93.339844-51.292969 128.832031-16.292968-9.34375-34.136718-17.335937-53.027343-23.835937zm17.554687-134.996094c-1.296875-36.539062-7.316406-72.242188-17.554687-104.996094 18.890625-6.5 36.734375-14.492187 53.027343-23.835937 29.359376 35.492187 48.082032 80.078125 51.292969 128.832031zm0 0"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "English(CA)"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mx-3 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "text-sm tracking-wide"
  }, "$CAD")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mx-3 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "text-sm tracking-wide"
  }, "Become a host")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mx-3 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "text-sm tracking-wide"
  }, "Help")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mx-3 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "text-sm tracking-wide"
  }, "Sign up")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mx-3 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "text-sm tracking-wide"
  }, "Log in"))));
});

/***/ }),

/***/ "./src/components/layout/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/layout/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FooterContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FooterContent */ "./src/components/layout/FooterContent.js");
/* harmony import */ var _FooterInducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FooterInducer */ "./src/components/layout/FooterInducer.js");
 // Component



/* harmony default export */ __webpack_exports__["default"] = (() => {
  const [display, setDisplay] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const changeDisplay = () => {
    setDisplay(!display);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, display ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FooterContent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    swap: changeDisplay
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FooterInducer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    swap: changeDisplay
  }));
});

/***/ }),

/***/ "./src/components/layout/FooterContent.js":
/*!************************************************!*\
  !*** ./src/components/layout/FooterContent.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (({
  swap
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hidden md:block fixed bottom-0 bg-white w-full border-t border-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lg:px-20 px-5 xl:px-0 lg:max-w-6xl xl:max-w-5.5xl mx-auto py-6 sm:py-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hidden md:flex md:flex-wrap md:items-start md:w-full md:justify-between md:pb-6 md:border-b md:border-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lg:w-1/4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "font-semibold text-gray-900 text-sm mb-2"
  }, "Airbnb"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "leading-relaxed"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: ""
  }, "Careers")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: ""
  }, "News")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: ""
  }, "Policies")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: ""
  }, "Diversity & Belonging")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: ""
  }, "Accessibility")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lg:w-1/4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "font-semibold text-gray-900 text-sm mb-2"
  }, "Discover"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "leading-relaxed"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: ""
  }, "Trust & Safety")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: ""
  }, "Travel Credit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: ""
  }, "Airbnb Citizen")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: ""
  }, "Business Travel")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: ""
  }, "Things To Do")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: ""
  }, "Airbnbmag")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lg:w-1/4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "font-semibold text-gray-905 text-sm mb-2"
  }, "Hosting"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "leading-relaxed"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: ""
  }, "Why Host")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: ""
  }, "Hospitality")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: ""
  }, "Responsible Hosting")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: ""
  }, "Community Centre")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: ""
  }, "Host an Experience")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: ""
  }, "Open Homes")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lg:w-1/4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "font-semibold text-sm mb-2 text-gray-900"
  }, "Support"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "leading-relaxed"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "font-semibold text-sm text-gray-650",
    href: ""
  }, "Help")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "font-semibold text-sm text-gray-650",
    href: ""
  }, "Neighbourhood Support"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap items-center justify-between sm:pt-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap items-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    viewBox: "0 0 1000 1000",
    role: "presentation",
    "aria-hidden": "true",
    focusable: "false",
    className: "h-5 w-5 block",
    style: {
      fill: '#767676'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "AirBnb"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "pl-2 text-sm  text-gray-650 font-semibold"
  }, "\xA9 2020 Airbnb, Inc. All rights reserved."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hidden md:flex md:flex-wrap md:justify-between md:items-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-sm text-gray-650 font-semibold"
  }, "\u3000\u2744\uFE0F Cloned by"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-sm text-gray-650 font-semibold",
    href: ""
  }, "\xA0Ken"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hidden lg:flex lg:items-center lg:justify-start lg:flex-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "h-5 w-5",
    viewBox: "0 0 512 512",
    width: "512pt",
    style: {
      fill: '#767676'
    },
    xmlns: "http://www.w3.org/2000/svg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m297.277344 508.667969c-2.132813.347656-4.273438.667969-6.421875.960937 2.148437-.292968 4.289062-.613281 6.421875-.960937zm0 0"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m302.398438 507.792969c-1.019532.1875-2.039063.359375-3.058594.535156 1.019531-.175781 2.039062-.347656 3.058594-.535156zm0 0"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m285.136719 510.339844c-2.496094.28125-5.007813.53125-7.527344.742187 2.519531-.210937 5.03125-.460937 7.527344-.742187zm0 0"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m290.054688 509.738281c-1.199219.160157-2.40625.308594-3.609376.449219 1.203126-.140625 2.410157-.289062 3.609376-.449219zm0 0"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m309.367188 506.410156c-.898438.191406-1.800782.382813-2.703126.566406.902344-.183593 1.804688-.375 2.703126-.566406zm0 0"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m326.664062 502.113281c-.726562.207031-1.453124.402344-2.179687.605469.726563-.203125 1.453125-.398438 2.179687-.605469zm0 0"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m321.433594 503.542969c-.789063.207031-1.582032.417969-2.375.617187.792968-.199218 1.585937-.40625 2.375-.617187zm0 0"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m314.589844 505.253906c-.835938.195313-1.679688.378906-2.523438.566406.84375-.1875 1.6875-.371093 2.523438-.566406zm0 0"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m277.527344 511.089844c-1.347656.113281-2.695313.214844-4.046875.304687 1.351562-.089843 2.699219-.191406 4.046875-.304687zm0 0"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m512 256c0-141.363281-114.636719-256-256-256s-256 114.636719-256 256 114.636719 256 256 256c1.503906 0 3-.03125 4.5-.058594v-199.285156h-55v-64.097656h55v-47.167969c0-54.703125 33.394531-84.476563 82.191406-84.476563 23.367188 0 43.453125 1.742188 49.308594 2.519532v57.171875h-33.648438c-26.546874 0-31.6875 12.617187-31.6875 31.128906v40.824219h63.476563l-8.273437 64.097656h-55.203126v189.453125c107.003907-30.675781 185.335938-129.257813 185.335938-246.109375zm0 0"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m272.914062 511.429688c-2.664062.171874-5.339843.308593-8.023437.398437 2.683594-.089844 5.359375-.226563 8.023437-.398437zm0 0"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m264.753906 511.835938c-1.414062.046874-2.832031.082031-4.25.105468 1.417969-.023437 2.835938-.058594 4.25-.105468zm0 0"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "h-5 w-5 ml-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    style: {
      fill: '#767676',
      marginRight: 1
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016 c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992 c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056 c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152 c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792 c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44 C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568 C480.224,136.96,497.728,118.496,512,97.248z"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "w-5 h-5 ml-3",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    style: {
      fill: '#767676'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192c88.352,0,160-71.648,160-160V160 C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112V160C48,98.24,98.24,48,160,48 h192c61.76,0,112,50.24,112,112V352z"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128S326.688,128,256,128z M256,336 c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80C336,300.096,300.096,336,256,336z"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "393.6",
    cy: "118.4",
    r: "17.056"
  }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: swap,
    className: "flex items-center justify-start hover:bg-gray-100 bg-white z-10 shadow-xl fixed bottom-0 lg:right-0 ml-4 lg:mr-4 mb-3 rounded-lg py-2 px-4 font-semibold text-sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    style: {
      marginBottom: 1
    },
    className: "h-3 w-3 mt-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892 L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999 c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998 c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850 ml-3"
  }, "Close")));
});

/***/ }),

/***/ "./src/components/layout/FooterInducer.js":
/*!************************************************!*\
  !*** ./src/components/layout/FooterInducer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (({
  swap
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: swap,
    className: "hidden md:block hover:bg-gray-100 md:flex md:items-center justify-start fixed bottom-0 md:ml-3 md:mb-3 lg:right-0  lg:mr-3 z-10 bg-white text-sm font-semibold py-2 px-4 rounded-lg shadow-xl"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    style: {
      marginBottom: 1
    },
    className: "h-4 w-4 mt-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M256,0C114.51,0,0,114.497,0,256c0,141.49,114.497,256,256,256c141.49,0,256-114.497,256-256C512,114.51,397.503,0,256,0z M256,477.867c-122.337,0-221.867-99.529-221.867-221.867S133.663,34.133,256,34.133S477.867,133.663,477.867,256 S378.337,477.867,256,477.867z"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M255.997,209.777c-9.425,0-17.067,7.641-17.067,17.067v143.969c0,9.425,7.641,17.067,17.067,17.067 s17.067-7.641,17.067-17.067V226.843C273.063,217.417,265.422,209.777,255.997,209.777z"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M256,124.122c-18.821,0-34.133,15.312-34.133,34.133s15.312,34.133,34.133,34.133s34.133-15.312,34.133-34.133 S274.821,124.122,256,124.122z"
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750 ml-3"
  }, "Terms, privacy, & more"));
});

/***/ }),

/***/ "./src/components/presentational/CharacteristicCard.js":
/*!*************************************************************!*\
  !*** ./src/components/presentational/CharacteristicCard.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (({
  type,
  title,
  description,
  guestnumber,
  hostname,
  percentage
}) => {
  const renderIcon = type => {
    if (type === 'home') {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-3 w-3",
        viewBox: "0 0 512.001 512.001",
        style: {
          fill: '#484848'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M503.402,228.885L273.684,19.567c-10.083-9.189-25.288-9.188-35.367-0.001L8.598,228.886 c-8.077,7.36-10.745,18.7-6.799,28.889c3.947,10.189,13.557,16.772,24.484,16.772h36.69v209.721 c0,8.315,6.742,15.057,15.057,15.057h125.914c8.315,0,15.057-6.741,15.057-15.057V356.932h74.002v127.337 c0,8.315,6.742,15.057,15.057,15.057h125.908c8.315,0,15.057-6.741,15.057-15.057V274.547h36.697 c10.926,0,20.537-6.584,24.484-16.772C514.147,247.585,511.479,236.246,503.402,228.885z"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M445.092,42.73H343.973l116.176,105.636v-90.58C460.149,49.471,453.408,42.73,445.092,42.73z"
      }))));
    } else if (type === 'clean') {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-3 w-3",
        viewBox: "0 0 512 512"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M407.335,74.217l-29.654-44.481C365.295,11.159,344.445,0,322.116,0H207.595h-50.087c-9.22,0-16.696,7.475-16.696,16.696 v33.391c0,9.22,7.475,16.696,16.696,16.696H190.9v16.696c0,17.065-6.653,33.12-18.717,45.195l-9.783,9.783 c-6.521,6.521-6.521,17.087,0,23.609c3.261,3.261,7.533,4.892,11.804,4.892s8.544-1.631,11.804-4.892l9.794-9.783 c14.369-14.387,23.663-32.48,27.04-52.108h1.448c18.442,0,33.391,14.949,33.391,33.391v33.391h-5.564 c-27.619,0-50.087,22.468-50.087,50.087v66.783c0,9.206-7.49,16.696-16.696,16.696h-33.391c-27.619,0-50.087,22.468-50.087,50.087 v16.696v94.609c0,27.619,22.468,50.087,50.087,50.087h200.348c27.619,0,50.087-22.468,50.087-50.087v-94.609V217.043 c0-27.619-22.468-50.087-50.087-50.087h-27.826v-33.391c0-18.442,14.949-33.391,33.391-33.391h35.587 c6.163,0,11.804-3.38,14.718-8.826C411.074,85.912,410.759,79.348,407.335,74.217z M268.813,367.304H135.248v-16.696 c0-9.206,7.49-16.696,16.696-16.696h33.391c27.619,0,50.087-22.468,50.087-50.087v-66.783c0-9.206,7.49-16.696,16.696-16.696 h16.696V367.304z M352.291,200.348c9.206,0,16.696,7.49,16.696,16.696v150.261h-66.783V200.348H352.291z"
      }))));
    } else if (type === 'superhost') {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "h-3 w-3",
        viewBox: "0 0 511.999 511.999",
        xmlns: "http://www.w3.org/2000/svg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        "clip-rule": "evenodd",
        "fill-rule": "evenodd"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "m345.999 174.051v-52.052h-180v52.052c26.942-14.077 57.555-22.053 90-22.053s63.058 7.975 90 22.053z"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "m330.999 91.994v-76.994c0-8.284-6.716-15-15-15h-120c-8.284 0-15 6.716-15 15v76.994c-.033 0-.064.005-.097.005h150.193c-.032-.001-.064-.005-.096-.005z"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "m271.572 324.382-15.572-23.478-15.572 23.478c-1.993 3.005-5.003 5.192-8.478 6.16l-27.142 7.555 17.517 22.066c2.242 2.825 3.392 6.363 3.238 9.966l-1.201 28.147 26.398-9.841c1.689-.63 3.465-.945 5.239-.945s3.55.315 5.239.945l26.398 9.841-1.201-28.147c-.153-3.603.996-7.141 3.238-9.966l17.517-22.065-27.142-7.555c-3.474-.969-6.483-3.156-8.476-6.161z"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "m255.999 181.998c-90.879 0-165 74.121-165 165s74.121 165 165 165 165-74.121 165-165-74.121-165-165-165zm88.748 157.039-28.101 35.398 1.928 45.155c.215 5.023-2.103 9.82-6.17 12.775-2.6 1.889-5.693 2.865-8.817 2.865-1.765 0-3.538-.311-5.238-.945l-42.35-15.787-42.35 15.787c-4.707 1.755-9.987 1.036-14.056-1.92-4.067-2.955-6.385-7.752-6.17-12.775l1.928-45.155-28.101-35.398c-3.126-3.938-4.071-9.18-2.518-13.961s5.399-8.467 10.243-9.815l43.541-12.121 24.981-37.664c2.778-4.19 7.473-6.709 12.5-6.709s9.722 2.519 12.5 6.709l24.981 37.664 43.541 12.121c4.844 1.349 8.689 5.034 10.243 9.815s.611 10.023-2.515 13.961z"
      })));
    } else if (type === 'location') {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "h-3 w-3",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035 c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719 c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"
      }))));
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-start justify-start my-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      paddingTop: 5
    },
    className: "mr-4"
  }, renderIcon(type)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-gray-750"
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850"
  }, guestnumber ? guestnumber : null, percentage ? `${percentage}%` : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " "), description)));
});

/***/ }),

/***/ "./src/components/presentational/HeaderCard.js":
/*!*****************************************************!*\
  !*** ./src/components/presentational/HeaderCard.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (() => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sm:w-full md:w-100 md:pt-8 md:pb-6 md:mt-10 bg-white md:rounded md:shadow-2xl py-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mx-8"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "hidden md:inline-block md:font-sans md:text-3xl md:font-bold md:text-gray-750 md:leading-tight"
  }, "Book unique places to ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "stay and things to do."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: ""
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "block font-bold mt-5 mb-2 text-xs text-gray-750 uppercase tracking-wider",
    htmlFor: "where"
  }, "Where"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "w-full border border-gray-300 p-2 rounded placeholder-gray-900 tracking-wide",
    type: "text",
    id: "where",
    placeholder: "Anywhere"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap items-stretch justify-start"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "block font-bold mt-5 mb-2 text-xs text-gray-750 uppercase",
    htmlFor: "checkin"
  }, "Check-In"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "pl-2 w-full border border-gray-300 py-3 rounded rounded-r-none placeholder-gray-900 tracking-wide",
    type: "text",
    id: "checkin",
    placeholder: "dd-mm-yyyy"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "block font-bold mt-5 mb-2 text-xs uppercase text-gray-750",
    htmlFor: "checkout"
  }, "Check-Out"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "pl-2 w-full border border-gray-300 py-3 rounded rounded-l-none placeholder-gray-900 tracking-wide",
    type: "text",
    id: "checkout",
    placeholder: "dd-mm-yyyy"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "block font-bold mt-5 mb-2 text-xs uppercase text-gray-750",
    htmlFor: "guests"
  }, "Guests"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inline-block relative w-full"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    className: "appearance-none pl-2 w-full border border-gray-300 py-3 rounded rounded-l-none placeholder-gray-900 tracking-wide",
    id: "guests"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "1"
  }, "2 Guests"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "2"
  }, "3 Guests"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "3"
  }, "4 Guests")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pointer-events-none flex absolute inset-y-0 right-0 items-center px-2 text-gray-700 text-black"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "fill-current h-4 w-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
  })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full flex items-center md:justify-end md:flex-wrap mt-6 rounded-lg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "w-full md:w-auto md:inline-block inline-block py-3 px-6 bg-red-500 rounded text-white font-bold"
  }, "Search"))));
});

/***/ }),

/***/ "./src/components/presentational/HeartExperienceCard.js":
/*!**************************************************************!*\
  !*** ./src/components/presentational/HeartExperienceCard.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazy_progressive_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-lazy-progressive-image */ "react-lazy-progressive-image");
/* harmony import */ var react_lazy_progressive_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazy_progressive_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_img_high_todonear1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/img/high/todonear1.jpg */ "./public/img/high/todonear1.jpg");
/* harmony import */ var _public_img_high_todonear1_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_todonear1_jpg__WEBPACK_IMPORTED_MODULE_2__);

 // Images


/* harmony default export */ __webpack_exports__["default"] = (() => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-30/31"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "relative"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: 30,
      width: 30
    },
    className: "flex items-center justify-center absolute z-10 right-0 mr-2 mt-2 mr-1 bg-gray-300 shadow-lg rounded-full"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "h-4 w-4",
    viewBox: "0 -50 512 512",
    xmlns: "http://www.w3.org/2000/svg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazy_progressive_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
    src: _public_img_high_todonear1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    placeholder: _public_img_high_todonear1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a
  }, (src, loading, isVisible) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "w-full rounded",
    src: src
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap items-center justify-between"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "my-1"
  }, "Porto Taste Discoveries Tour"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-sm"
  }, "From $105 CAD/night"));
});

/***/ }),

/***/ "./src/components/presentational/HomeCard.js":
/*!***************************************************!*\
  !*** ./src/components/presentational/HomeCard.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazy_progressive_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-lazy-progressive-image */ "react-lazy-progressive-image");
/* harmony import */ var react_lazy_progressive_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazy_progressive_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_img_high_airbnb_background_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/img/high/airbnb-background.jpg */ "./public/img/high/airbnb-background.jpg");
/* harmony import */ var _public_img_high_airbnb_background_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_airbnb_background_jpg__WEBPACK_IMPORTED_MODULE_2__);

 // Images


/* harmony default export */ __webpack_exports__["default"] = (() => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-30/31"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazy_progressive_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
    src: _public_img_high_airbnb_background_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    placeholder: _public_img_high_airbnb_background_jpg__WEBPACK_IMPORTED_MODULE_2___default.a
  }, (src, loading, isVisible) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "w-full rounded",
    src: src
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap items-center justify-between"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Entire House", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " . "), "9 beds"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-center flex-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "13",
    height: "13",
    viewBox: "0 0 37.286 37.287",
    style: {
      fill: '#F5385D'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M36.683,16.339l-7.567,7.377l1.786,10.417c0.128,0.75-0.182,1.509-0.797,1.957c-0.348,0.253-0.762,0.382-1.176,0.382 c-0.318,0-0.638-0.076-0.931-0.23l-9.355-4.918l-9.355,4.918c-0.674,0.355-1.49,0.295-2.107-0.15 c-0.615-0.448-0.924-1.206-0.795-1.957l1.787-10.417L0.604,16.34c-0.547-0.531-0.741-1.326-0.508-2.05 c0.236-0.724,0.861-1.251,1.615-1.361l10.459-1.521l4.68-9.478c0.335-0.684,1.031-1.116,1.792-1.116 c0.763,0,1.456,0.432,1.793,1.115l4.68,9.478l10.461,1.521c0.752,0.109,1.379,0.637,1.611,1.361 C37.425,15.013,37.226,15.808,36.683,16.339z"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "pl-1 text-sm"
  }, "4.71"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-xs text-gray-650"
  }, "(205)"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "my-1"
  }, "Central House with garden"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "tracking-wide"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "font-bold"
  }, "$349 CAD"), "/night"));
});

/***/ }),

/***/ "./src/components/presentational/ImagePanel.js":
/*!*****************************************************!*\
  !*** ./src/components/presentational/ImagePanel.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (({
  img1,
  img2,
  img3,
  img4,
  img5
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap justify-start items-start"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      backgroundImage: `url(${img1})`
    },
    className: "border border-gray-800 w-1/2 h-2/3 relative bg-cover bg-no-repeat bg-blue"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/2 h-2/3 relative"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full h-full md:flex items-start justify-start flex-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      backgroundImage: `url(${img2})`
    },
    className: "w-full border border-gray-600 md:w-1/2 h-1/2 relative bg-cover bg-no-repeat"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      backgroundImage: `url(${img3})`
    },
    className: "w-full border border-gray-600 md:w-1/2 h-1/2 relative bg-cover bg-no-repeat"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      backgroundImage: `url(${img4})`
    },
    className: "hidden md:block border border-gray-600 w-1/2 h-1/2 relative bg-cover bg-no-repeat"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      backgroundImage: `url(${img5})`
    },
    className: "hidden md:block border border-gray-600 w-1/2 h-1/2 relative bg-cover bg-no-repeat"
  }))));
});

/***/ }),

/***/ "./src/components/presentational/Review.js":
/*!*************************************************!*\
  !*** ./src/components/presentational/Review.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_img_high_airbnb_background_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../public/img/high/airbnb-background.jpg */ "./public/img/high/airbnb-background.jpg");
/* harmony import */ var _public_img_high_airbnb_background_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_airbnb_background_jpg__WEBPACK_IMPORTED_MODULE_1__);
 // Image


/* harmony default export */ __webpack_exports__["default"] = (() => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "py-6 border-b border-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-start"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "h-12 w-12 rounded-full",
    src: _public_img_high_airbnb_background_jpg__WEBPACK_IMPORTED_MODULE_1___default.a
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "font-semibold"
  }, "Maureen"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "October 2019"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "As we pulled into the driveway, we knew it was an incredible place. Maria and Alberto were the perfect hosts and toured us around their beautiful property. I'm not sure you will believe how amazing it is. We have spent 10 days in Portugal and the time in Penafiel has been the...", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-green-500",
    href: "/#"
  }, "hello")));
});

/***/ }),

/***/ "./src/components/wrapper/DetailSection.js":
/*!*************************************************!*\
  !*** ./src/components/wrapper/DetailSection.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (({
  title,
  children
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border-b border-gray-300 pt-2 pb-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "my-4 font-semibold text-gray-750"
  }, title), children);
});

/***/ }),

/***/ "./src/components/wrapper/Section.js":
/*!*******************************************!*\
  !*** ./src/components/wrapper/Section.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (({
  title,
  phrase,
  children
}) => {
  const renderContent = () => {
    if (phrase) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        style: {
          fontFamily: 'airbnb-medium'
        },
        className: "text-2xl text-gray-850 pt-3"
      }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          fontFamily: 'airbnb-book'
        },
        className: "text-md mb-5 text-gray-850 pb-3"
      }, phrase));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        style: {
          fontFamily: 'airbnb-medium'
        },
        className: "text-gray-850 text-2xl py-3 "
      }, title));
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "px-5 md:px-10 lg:max-w-5.5xl xl:px-0 mx-auto py-5"
  }, renderContent(), children);
});

/***/ }),

/***/ "./src/pages/rooms/[id].js":
/*!*********************************!*\
  !*** ./src/pages/rooms/[id].js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/layout/ExploreHeader */ "./src/components/layout/ExploreHeader.js");
/* harmony import */ var _components_presentational_ImagePanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/presentational/ImagePanel */ "./src/components/presentational/ImagePanel.js");
/* harmony import */ var _components_presentational_HeaderCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/presentational/HeaderCard */ "./src/components/presentational/HeaderCard.js");
/* harmony import */ var _components_wrapper_DetailSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/wrapper/DetailSection */ "./src/components/wrapper/DetailSection.js");
/* harmony import */ var _components_containers_Reviews__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/containers/Reviews */ "./src/components/containers/Reviews.js");
/* harmony import */ var _components_layout_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/layout/Footer */ "./src/components/layout/Footer.js");
/* harmony import */ var _components_containers_HostedBy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/containers/HostedBy */ "./src/components/containers/HostedBy.js");
/* harmony import */ var _components_containers_Neighborhood__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/containers/Neighborhood */ "./src/components/containers/Neighborhood.js");
/* harmony import */ var _components_containers_KeepInMind__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/containers/KeepInMind */ "./src/components/containers/KeepInMind.js");
/* harmony import */ var _components_containers_MoreHomes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/containers/MoreHomes */ "./src/components/containers/MoreHomes.js");
/* harmony import */ var _components_containers_Characteristics__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/containers/Characteristics */ "./src/components/containers/Characteristics.js");
/* harmony import */ var _components_wrapper_Section__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/wrapper/Section */ "./src/components/wrapper/Section.js");
/* harmony import */ var _components_containers_ToDoNear__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/containers/ToDoNear */ "./src/components/containers/ToDoNear.js");
/* harmony import */ var _components_containers_MoreLocations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/containers/MoreLocations */ "./src/components/containers/MoreLocations.js");
/* harmony import */ var _public_img_high_staydetail1_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../public/img/high/staydetail1.jpg */ "./public/img/high/staydetail1.jpg");
/* harmony import */ var _public_img_high_staydetail1_jpg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_staydetail1_jpg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _public_img_high_staydetail2_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../public/img/high/staydetail2.jpg */ "./public/img/high/staydetail2.jpg");
/* harmony import */ var _public_img_high_staydetail2_jpg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_staydetail2_jpg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _public_img_high_staydetail3_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../public/img/high/staydetail3.jpg */ "./public/img/high/staydetail3.jpg");
/* harmony import */ var _public_img_high_staydetail3_jpg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_staydetail3_jpg__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _public_img_high_staydetail4_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../public/img/high/staydetail4.jpg */ "./public/img/high/staydetail4.jpg");
/* harmony import */ var _public_img_high_staydetail4_jpg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_staydetail4_jpg__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _public_img_high_staydetail5_jpg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../public/img/high/staydetail5.jpg */ "./public/img/high/staydetail5.jpg");
/* harmony import */ var _public_img_high_staydetail5_jpg__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_public_img_high_staydetail5_jpg__WEBPACK_IMPORTED_MODULE_22__);



 // Components











 // Wrapper

 // Containers


 // Images






const staydata = apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"]`
  query Stay($id: ID!) {
    stay(where: { id: $id }) {
      id
      title
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();
  const {
    loading,
    error,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(staydata, {
    variables: {
      id: router.query.id
    }
  });
  if (loading) return 'loading...';
  if (error) return 'error...';
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_presentational_ImagePanel__WEBPACK_IMPORTED_MODULE_5__["default"], {
    img1: _public_img_high_staydetail1_jpg__WEBPACK_IMPORTED_MODULE_18___default.a,
    img2: _public_img_high_staydetail2_jpg__WEBPACK_IMPORTED_MODULE_19___default.a,
    img3: _public_img_high_staydetail3_jpg__WEBPACK_IMPORTED_MODULE_20___default.a,
    img4: _public_img_high_staydetail4_jpg__WEBPACK_IMPORTED_MODULE_21___default.a,
    img5: _public_img_high_staydetail5_jpg__WEBPACK_IMPORTED_MODULE_22___default.a
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "px-5 md:px-10 lg:max-w-4xl xl:max-w-5xl xl:px-0 mx-auto py-5 flex items-start justify-start flex-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-7/12 "
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-start justify-between border-b border-gray-200"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-3xl text-gray-750 font-semibold leading-none"
  }, "Douro Villa with swimming pool, Penafiel, Portugal"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750 py-3"
  }, "Penafiel"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750 pb-3 flex justify-start items-start flex-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mr-4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "9 guests")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mr-4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "4 bedrooms")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mr-4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "9 beds")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mr-4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "3 baths")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex flex-col justify-center items-start"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex justify-center w-full"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "h-16 w-16 rounded-full",
    src: _public_img_high_staydetail1_jpg__WEBPACK_IMPORTED_MODULE_18___default.a
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "mt-2 text-gray-650 text-center text-sm leading-snug"
  }, "Maria Henriqueta"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "my-6 border-b border-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_containers_Characteristics__WEBPACK_IMPORTED_MODULE_14__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "border-b border-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "my-8"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750"
  }, "We invite you to come and visit our beautiful countryside hourse on the shores of the Douro river. You will have a full countryside experience with our restored rustic ouse, our farm animals, a salt water 12 meter pool and a unique view for the unforgettable landscape of the Douro river."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "my-5"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-center justify-start"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "text-green-850 hover:border-green-850 border-b text-green-850 border-transparent",
    style: {
      fontFamily: 'airbnb-medium'
    }
  }, "Read more about the space"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "ml-3"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    style: {
      fill: '#008489'
    },
    viewBox: "0 0 18 18",
    className: "h-2 w-2"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z"
  })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "hover:border-green-850 border-b text-green-850 border-transparent",
    style: {
      fontFamily: 'airbnb-medium'
    },
    href: ""
  }, "Contact host")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_wrapper_DetailSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Amenities"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-start justify-start flex-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "py-1 bg-blue-500 w-1/2"
  }, "Free parking"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "bg-blue-500 w-1/2"
  }, "Free parking"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "bg-blue-500 w-1/2"
  }, "Free parking"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "bg-blue-500 w-1/2"
  }, "Free parking"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "bg-blue-500 w-1/2"
  }, "Free parking"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "bg-blue-500 w-1/2"
  }, "Free parking")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "The host hasn't reported smoke or carbon monoxide detectors on the property"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "text-green-600"
  }, "Show all 32 amenities")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_wrapper_DetailSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Sleeping arrangements"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-start justify-between my-6"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "p-4 border border-gray-500"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "p-4 border border-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 480 480",
    className: "h-6 w-6"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M472,272h-8v-24c-0.021-15.886-9.44-30.254-24-36.608V88c-0.002-3.18-1.886-6.056-4.8-7.328 c3.121-5.002,4.783-10.776,4.8-16.672c0-17.673-14.327-32-32-32c-17.673,0-32,14.327-32,32c0.033,5.634,1.569,11.157,4.448,16 H99.552c2.879-4.843,4.415-10.366,4.448-16c0-17.673-14.327-32-32-32S40,46.327,40,64c0.017,5.896,1.679,11.67,4.8,16.672 C41.886,81.944,40.002,84.82,40,88v123.392C25.44,217.746,16.021,232.114,16,248v24H8c-4.418,0-8,3.582-8,8v112 c0,4.418,3.582,8,8,8h8v40c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8v-40h352v40c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8 v-40h8c4.418,0,8-3.582,8-8V280C480,275.582,476.418,272,472,272z M408,48c8.837,0,16,7.163,16,16s-7.163,16-16,16 s-16-7.163-16-16S399.163,48,408,48z M72,48c8.837,0,16,7.163,16,16s-7.163,16-16,16s-16-7.163-16-16S63.163,48,72,48z M56,96h368 v112h-32.208c5.294-6.883,8.179-15.316,8.208-24v-16c-0.026-22.08-17.92-39.974-40-40h-64c-22.08,0.026-39.974,17.92-40,40v16 c0.029,8.684,2.914,17.117,8.208,24h-48.416c5.294-6.883,8.179-15.316,8.208-24v-16c-0.026-22.08-17.92-39.974-40-40h-64 c-22.08,0.026-39.974,17.92-40,40v16c0.029,8.684,2.914,17.117,8.208,24H56V96z M384,168v16c0,13.255-10.745,24-24,24h-64 c-13.255,0-24-10.745-24-24v-16c0-13.255,10.745-24,24-24h64C373.255,144,384,154.745,384,168z M208,168v16 c0,13.255-10.745,24-24,24h-64c-13.255,0-24-10.745-24-24v-16c0-13.255,10.745-24,24-24h64C197.255,144,208,154.745,208,168z M32,248c0-13.255,10.745-24,24-24h368c13.255,0,24,10.745,24,24v24H32V248z M48,432H32v-32h16V432z M448,432h-16v-32h16V432z M464,384H16v-96h448V384z"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M72,352H40c-4.418,0-8,3.582-8,8s3.582,8,8,8h32c4.418,0,8-3.582,8-8S76.418,352,72,352z"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M440,352H104c-4.418,0-8,3.582-8,8s3.582,8,8,8h336c4.418,0,8-3.582,8-8S444.418,352,440,352z"
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Bedroom 1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "1 double bed"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "p-4 border border-gray-500"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "p-4 border border-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 480 480",
    className: "h-6 w-6"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M472,272h-8v-24c-0.021-15.886-9.44-30.254-24-36.608V88c-0.002-3.18-1.886-6.056-4.8-7.328 c3.121-5.002,4.783-10.776,4.8-16.672c0-17.673-14.327-32-32-32c-17.673,0-32,14.327-32,32c0.033,5.634,1.569,11.157,4.448,16 H99.552c2.879-4.843,4.415-10.366,4.448-16c0-17.673-14.327-32-32-32S40,46.327,40,64c0.017,5.896,1.679,11.67,4.8,16.672 C41.886,81.944,40.002,84.82,40,88v123.392C25.44,217.746,16.021,232.114,16,248v24H8c-4.418,0-8,3.582-8,8v112 c0,4.418,3.582,8,8,8h8v40c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8v-40h352v40c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8 v-40h8c4.418,0,8-3.582,8-8V280C480,275.582,476.418,272,472,272z M408,48c8.837,0,16,7.163,16,16s-7.163,16-16,16 s-16-7.163-16-16S399.163,48,408,48z M72,48c8.837,0,16,7.163,16,16s-7.163,16-16,16s-16-7.163-16-16S63.163,48,72,48z M56,96h368 v112h-32.208c5.294-6.883,8.179-15.316,8.208-24v-16c-0.026-22.08-17.92-39.974-40-40h-64c-22.08,0.026-39.974,17.92-40,40v16 c0.029,8.684,2.914,17.117,8.208,24h-48.416c5.294-6.883,8.179-15.316,8.208-24v-16c-0.026-22.08-17.92-39.974-40-40h-64 c-22.08,0.026-39.974,17.92-40,40v16c0.029,8.684,2.914,17.117,8.208,24H56V96z M384,168v16c0,13.255-10.745,24-24,24h-64 c-13.255,0-24-10.745-24-24v-16c0-13.255,10.745-24,24-24h64C373.255,144,384,154.745,384,168z M208,168v16 c0,13.255-10.745,24-24,24h-64c-13.255,0-24-10.745-24-24v-16c0-13.255,10.745-24,24-24h64C197.255,144,208,154.745,208,168z M32,248c0-13.255,10.745-24,24-24h368c13.255,0,24,10.745,24,24v24H32V248z M48,432H32v-32h16V432z M448,432h-16v-32h16V432z M464,384H16v-96h448V384z"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M72,352H40c-4.418,0-8,3.582-8,8s3.582,8,8,8h32c4.418,0,8-3.582,8-8S76.418,352,72,352z"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M440,352H104c-4.418,0-8,3.582-8,8s3.582,8,8,8h336c4.418,0,8-3.582,8-8S444.418,352,440,352z"
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Bedroom 1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "1 double bed"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "p-4 border border-gray-500"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "p-4 border border-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 480 480",
    className: "h-6 w-6"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M472,272h-8v-24c-0.021-15.886-9.44-30.254-24-36.608V88c-0.002-3.18-1.886-6.056-4.8-7.328 c3.121-5.002,4.783-10.776,4.8-16.672c0-17.673-14.327-32-32-32c-17.673,0-32,14.327-32,32c0.033,5.634,1.569,11.157,4.448,16 H99.552c2.879-4.843,4.415-10.366,4.448-16c0-17.673-14.327-32-32-32S40,46.327,40,64c0.017,5.896,1.679,11.67,4.8,16.672 C41.886,81.944,40.002,84.82,40,88v123.392C25.44,217.746,16.021,232.114,16,248v24H8c-4.418,0-8,3.582-8,8v112 c0,4.418,3.582,8,8,8h8v40c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8v-40h352v40c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8 v-40h8c4.418,0,8-3.582,8-8V280C480,275.582,476.418,272,472,272z M408,48c8.837,0,16,7.163,16,16s-7.163,16-16,16 s-16-7.163-16-16S399.163,48,408,48z M72,48c8.837,0,16,7.163,16,16s-7.163,16-16,16s-16-7.163-16-16S63.163,48,72,48z M56,96h368 v112h-32.208c5.294-6.883,8.179-15.316,8.208-24v-16c-0.026-22.08-17.92-39.974-40-40h-64c-22.08,0.026-39.974,17.92-40,40v16 c0.029,8.684,2.914,17.117,8.208,24h-48.416c5.294-6.883,8.179-15.316,8.208-24v-16c-0.026-22.08-17.92-39.974-40-40h-64 c-22.08,0.026-39.974,17.92-40,40v16c0.029,8.684,2.914,17.117,8.208,24H56V96z M384,168v16c0,13.255-10.745,24-24,24h-64 c-13.255,0-24-10.745-24-24v-16c0-13.255,10.745-24,24-24h64C373.255,144,384,154.745,384,168z M208,168v16 c0,13.255-10.745,24-24,24h-64c-13.255,0-24-10.745-24-24v-16c0-13.255,10.745-24,24-24h64C197.255,144,208,154.745,208,168z M32,248c0-13.255,10.745-24,24-24h368c13.255,0,24,10.745,24,24v24H32V248z M48,432H32v-32h16V432z M448,432h-16v-32h16V432z M464,384H16v-96h448V384z"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M72,352H40c-4.418,0-8,3.582-8,8s3.582,8,8,8h32c4.418,0,8-3.582,8-8S76.418,352,72,352z"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M440,352H104c-4.418,0-8,3.582-8,8s3.582,8,8,8h336c4.418,0,8-3.582,8-8S444.418,352,440,352z"
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Bedroom 1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "1 double bed"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_wrapper_DetailSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Availability"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Enter your trip dates for accurate pricing and availability"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-full h-64 bg-blue-500"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_containers_Reviews__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_containers_HostedBy__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_containers_Neighborhood__WEBPACK_IMPORTED_MODULE_11__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_containers_KeepInMind__WEBPACK_IMPORTED_MODULE_12__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "ml-5 w-4/12 bg-blue-500"
  }, "what"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_wrapper_Section__WEBPACK_IMPORTED_MODULE_15__["default"], {
    title: "More homes you may like"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_containers_MoreHomes__WEBPACK_IMPORTED_MODULE_13__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_wrapper_Section__WEBPACK_IMPORTED_MODULE_15__["default"], {
    title: "Things to do near this home"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_containers_ToDoNear__WEBPACK_IMPORTED_MODULE_16__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_wrapper_Section__WEBPACK_IMPORTED_MODULE_15__["default"], {
    title: "Explore other options in and around Penafiel",
    phrase: "More place to stay in Penafiel: Apartments<span> . </span>Bed and breakfasts"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_containers_MoreLocations__WEBPACK_IMPORTED_MODULE_17__["default"], null))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], null));
});

/***/ }),

/***/ 4:
/*!***************************************!*\
  !*** multi ./src/pages/rooms/[id].js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ken/Desktop/nextbnb/frontend/src/pages/rooms/[id].js */"./src/pages/rooms/[id].js");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-lazy-progressive-image":
/*!***********************************************!*\
  !*** external "react-lazy-progressive-image" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-lazy-progressive-image");

/***/ })

/******/ });
//# sourceMappingURL=[id].js.map