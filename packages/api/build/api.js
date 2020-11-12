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

/***/ "../core/src/index.js":
/*!****************************!*\
  !*** ../core/src/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_theory_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/theory/config */ \"../core/src/modules/theory/config.js\");\n/* harmony import */ var _modules_theory_diatonic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/theory/diatonic */ \"../core/src/modules/theory/diatonic.js\");\n/* harmony import */ var _modules_Tuning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Tuning */ \"../core/src/modules/Tuning.js\");\n/* harmony import */ var _modules_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Utils */ \"../core/src/modules/Utils.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  config: _modules_theory_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  diatonic: _modules_theory_diatonic__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  Utils: _modules_Utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  Tuning: _modules_Tuning__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n\n//# sourceURL=webpack:///../core/src/index.js?");

/***/ }),

/***/ "../core/src/modules/Tuning.js":
/*!*************************************!*\
  !*** ../core/src/modules/Tuning.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst getFrequency = p => {\n  const a = p + 3;\n  const b = a / 12;\n  const c = Math.pow(2, b);\n  const f = 440 * c;\n  return Math.round(f);\n};\n/* const getFrequencies = pitches => {\r\n    return pitches.map(p => getFrequency(p[0]));\r\n} */\n\n/*\r\nconst CALIBRATION_NOTE = {\r\n    frequency: 440,\r\n    noteIndex: 9\r\n};\r\n\r\nconst CALIBRATION_CONSTANT = Math.pow(2, 1 / 12);\r\n*/\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getFrequency\n});\n\n//# sourceURL=webpack:///../core/src/modules/Tuning.js?");

/***/ }),

/***/ "../core/src/modules/Utils.js":
/*!************************************!*\
  !*** ../core/src/modules/Utils.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst splitAt = (str, i) => [str.slice(0, i), str.slice(i)];\n\nconst rotate = (arr, count) => {\n  count -= arr.length * Math.floor(count / arr.length);\n  arr.push.apply(arr, arr.splice(0, count));\n  return arr;\n};\n\nconst modulo = (a, b) => {\n  return (a % b + b) % b;\n};\n\nconst moduloSum = (a, b, divisor) => {\n  const offset = 0;\n  const subtraction = false;\n  const dividend = subtraction ? a - offset - (b - offset) : a - offset + (b - offset);\n  return modulo(dividend, divisor) + offset;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  splitAt,\n  rotate,\n  modulo,\n  moduloSum\n});\n\n//# sourceURL=webpack:///../core/src/modules/Utils.js?");

/***/ }),

/***/ "../core/src/modules/models/index/Pitch.js":
/*!*************************************************!*\
  !*** ../core/src/modules/models/index/Pitch.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst PITCH_COLOR_SCHEME = ['#ED1C24', '#F1592A', '#F8981E', '#FCB040', '#FFF200', '#8CC63F', '#056839', '#13A89E', '#A898C8', '#662D91', '#92278F', '#C2305E'];\n\nclass Pitch {\n  static getColor(p) {\n    return PITCH_COLOR_SCHEME[p];\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pitch);\n\n//# sourceURL=webpack:///../core/src/modules/models/index/Pitch.js?");

/***/ }),

/***/ "../core/src/modules/theory/config.js":
/*!********************************************!*\
  !*** ../core/src/modules/theory/config.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_index_Pitch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/index/Pitch */ \"../core/src/modules/models/index/Pitch.js\");\n/* harmony import */ var _diatonic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./diatonic */ \"../core/src/modules/theory/diatonic.js\");\n\n\nconst p = _models_index_Pitch__WEBPACK_IMPORTED_MODULE_0__[\"default\"].preset;\nconst MAX_PITCH = 12;\nconst MAX_DEGREE = 7;\nconst MAX = [MAX_PITCH, MAX_DEGREE];\nconst ROOT_PITCH = p.middleC.value;\nconst ROOT_DEGREE = [0, 0];\nconst DIATONIC_VALUES = Object.values(_diatonic__WEBPACK_IMPORTED_MODULE_1__[\"DIATONIC\"]);\nconst ROOT = DIATONIC_VALUES.map((pod, i) => [ROOT_PITCH + pod.value[0], ROOT_DEGREE + pod.value[1]]);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  rootScale: ROOT,\n  maxPod: MAX\n});\n\n//# sourceURL=webpack:///../core/src/modules/theory/config.js?");

/***/ }),

/***/ "../core/src/modules/theory/diatonic.js":
/*!**********************************************!*\
  !*** ../core/src/modules/theory/diatonic.js ***!
  \**********************************************/
/*! exports provided: DIATONIC, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DIATONIC\", function() { return DIATONIC; });\nconst DIATONIC = {\n  tonic: {\n    id: 'tonic',\n    name: 'Tonic',\n    value: [0, 0]\n  },\n  supertonic: {\n    id: 'supertonic',\n    name: 'Supertonic',\n    value: [2, 1]\n  },\n  mediant: {\n    id: 'mediant',\n    name: 'Mediant',\n    value: [4, 2]\n  },\n  subdominant: {\n    id: 'subdominant',\n    name: 'Subdominant',\n    value: [5, 3]\n  },\n  dominant: {\n    id: 'dominant',\n    name: 'Dominant',\n    value: [7, 4]\n  },\n  submediant: {\n    id: 'submediant',\n    name: 'Submediant',\n    value: [9, 5]\n  },\n  subtonic: {\n    id: 'subtonic',\n    name: 'Subtonic',\n    value: [11, 6]\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  preset: DIATONIC\n});\n\n//# sourceURL=webpack:///../core/src/modules/theory/diatonic.js?");

/***/ }),

/***/ "../react/src/index.js":
/*!*****************************!*\
  !*** ../react/src/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///../react/src/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/call */ \"./src/modules/call.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  call: _modules_call__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/call.js":
/*!*****************************!*\
  !*** ./src/modules/call.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pw_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pw/core */ \"../core/src/index.js\");\n/* harmony import */ var _pw_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pw/react */ \"../react/src/index.js\");\n/* harmony import */ var _pw_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pw_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst DEFAULT_MODULES = [{\n  handle: '@core',\n  value: _pw_core__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n}, {\n  handle: '@react',\n  value: _pw_react__WEBPACK_IMPORTED_MODULE_1___default.a\n}];\n\nconst getApiNode = (path, root) => {\n  const tree = path.split('/');\n  let endpoint = root;\n  let attr = null;\n\n  while (tree.length > 0) {\n    attr = tree.shift();\n    if (!tree.length && attr === '') return [endpoint, true];\n    if (!endpoint) debugger;\n    endpoint = endpoint[attr];\n  }\n\n  return [endpoint, false];\n};\n\nconst call = (path, args = {}, level = 0) => {\n  console.log('\\t'.repeat(level), `API - ${path}`, args);\n  if (!path) throw Error('path required');\n  if (path[0] !== '@') throw Error('path must begin with handle');\n  const index = path.indexOf('/');\n  if (index < 1) throw Error('invalid handle');\n  const handle = path.slice(0, index);\n  const modulePath = path.slice(index + 1);\n  const module = DEFAULT_MODULES.find(m => m.handle === handle);\n  if (!module) throw Error('module not found');\n  const [endpoint, isFn] = getApiNode(modulePath, module.value);\n  const value = isFn ? endpoint(args) : endpoint;\n  return value;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (call);\n\n//# sourceURL=webpack:///./src/modules/call.js?");

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