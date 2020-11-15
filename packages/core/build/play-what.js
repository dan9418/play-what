module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Tuning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Tuning */ \"./src/modules/Tuning.js\");\n/* harmony import */ var _modules_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Utils */ \"./src/modules/Utils.js\");\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n\tUtils: _modules_Utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n\tTuning: _modules_Tuning__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\n});\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/Tuning.js":
/*!*******************************!*\
  !*** ./src/modules/Tuning.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst getFrequency = (p) => {\r\n\tconst a = p + 3;\r\n\tconst b = a / 12;\r\n\tconst c = Math.pow(2, b);\r\n\tconst f = 440 * c;\r\n\treturn Math.round(f);\r\n};\r\n\r\n/* const getFrequencies = pitches => {\r\n    return pitches.map(p => getFrequency(p[0]));\r\n} */\r\n\r\n/*\r\nconst CALIBRATION_NOTE = {\r\n    frequency: 440,\r\n    noteIndex: 9\r\n};\r\n\r\nconst CALIBRATION_CONSTANT = Math.pow(2, 1 / 12);\r\n*/\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n\tgetFrequency\r\n});\r\n\n\n//# sourceURL=webpack:///./src/modules/Tuning.js?");

/***/ }),

/***/ "./src/modules/Utils.js":
/*!******************************!*\
  !*** ./src/modules/Utils.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst splitAt = (str, i) => [str.slice(0, i), str.slice(i)];\r\n\r\nconst rotate = (arr, count) => {\r\n\tcount -= arr.length * Math.floor(count / arr.length);\r\n\tarr.push.apply(arr, arr.splice(0, count));\r\n\treturn arr;\r\n};\r\n\r\nconst modulo = (a, b) => {\r\n\treturn ((a % b) + b) % b;\r\n}\r\n\r\nconst moduloSum = (a, b, divisor) => {\r\n\tconst offset = 0;\r\n\tconst subtraction = false;\r\n\tconst dividend = (subtraction) ? ((a - offset) - (b - offset)) : ((a - offset) + (b - offset));\r\n\treturn modulo(dividend, divisor) + offset;\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n\tsplitAt,\r\n\trotate,\r\n\tmodulo,\r\n\tmoduloSum\r\n});\r\n\n\n//# sourceURL=webpack:///./src/modules/Utils.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ })

/******/ });