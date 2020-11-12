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

/***/ "../api/src/index.js":
/*!***************************!*\
  !*** ../api/src/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/call */ \"../api/src/modules/call.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  call: _modules_call__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\n\n//# sourceURL=webpack:///../api/src/index.js?");

/***/ }),

/***/ "../api/src/modules/call.js":
/*!**********************************!*\
  !*** ../api/src/modules/call.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pw_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pw/core */ \"../core/src/index.js\");\n/* harmony import */ var _pw_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pw/react */ \"../react/src/index.js\");\n/* harmony import */ var _pw_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pw_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst DEFAULT_MODULES = [{\n  handle: '@core',\n  value: _pw_core__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n}, {\n  handle: '@react',\n  value: _pw_react__WEBPACK_IMPORTED_MODULE_1___default.a\n}];\n\nconst getApiNode = (path, root) => {\n  const tree = path.split('/');\n  let endpoint = root;\n  let attr = null;\n\n  while (tree.length > 0) {\n    attr = tree.shift();\n    if (!tree.length && attr === '') return [endpoint, true];\n    if (!endpoint) debugger;\n    endpoint = endpoint[attr];\n  }\n\n  return [endpoint, false];\n};\n\nconst call = (path, args = {}, level = 0) => {\n  console.log('\\t'.repeat(level), `API - ${path}`, args);\n  if (!path) throw Error('path required');\n  if (path[0] !== '@') throw Error('path must begin with handle');\n  const index = path.indexOf('/');\n  if (index < 1) throw Error('invalid handle');\n  const handle = path.slice(0, index);\n  const modulePath = path.slice(index + 1);\n  const module = DEFAULT_MODULES.find(m => m.handle === handle);\n  if (!module) throw Error('module not found');\n  const [endpoint, isFn] = getApiNode(modulePath, module.value);\n  const value = isFn ? endpoint(args) : endpoint;\n  return value;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (call);\n\n//# sourceURL=webpack:///../api/src/modules/call.js?");

/***/ }),

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

/***/ "../core/src/modules/theory/config.js":
/*!********************************************!*\
  !*** ../core/src/modules/theory/config.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _diatonic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diatonic */ \"../core/src/modules/theory/diatonic.js\");\n/* harmony import */ var _presets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presets */ \"../core/src/modules/theory/presets.js\");\n\n\nconst MAX_PITCH = 12;\nconst MAX_DEGREE = 7;\nconst MAX = [MAX_PITCH, MAX_DEGREE];\nconst ROOT_PITCH = _presets__WEBPACK_IMPORTED_MODULE_1__[\"PITCH\"].middleC.value;\nconst ROOT_DEGREE = [0, 0];\nconst DIATONIC_VALUES = Object.values(_diatonic__WEBPACK_IMPORTED_MODULE_0__[\"DIATONIC\"]);\nconst ROOT = DIATONIC_VALUES.map((pod, i) => [ROOT_PITCH + pod.value[0], ROOT_DEGREE + pod.value[1]]);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  rootScale: ROOT,\n  maxPod: MAX\n});\n\n//# sourceURL=webpack:///../core/src/modules/theory/config.js?");

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

/***/ "../core/src/modules/theory/presets.js":
/*!*********************************************!*\
  !*** ../core/src/modules/theory/presets.js ***!
  \*********************************************/
/*! exports provided: DEGREE, DEGREE_VALUES, PITCH, PITCH_VALUES, NOTE, NOTE_VALUES, INTERVAL, INTERVAL_VALUES, CHORD, CHORD_VALUES, SCALE, SCALE_VALUES, PRESET_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DEGREE\", function() { return DEGREE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DEGREE_VALUES\", function() { return DEGREE_VALUES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PITCH\", function() { return PITCH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PITCH_VALUES\", function() { return PITCH_VALUES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NOTE\", function() { return NOTE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NOTE_VALUES\", function() { return NOTE_VALUES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INTERVAL\", function() { return INTERVAL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INTERVAL_VALUES\", function() { return INTERVAL_VALUES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHORD\", function() { return CHORD; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHORD_VALUES\", function() { return CHORD_VALUES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SCALE\", function() { return SCALE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SCALE_VALUES\", function() { return SCALE_VALUES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PRESET_TYPES\", function() { return PRESET_TYPES; });\nconst DEGREE = {\n  C: {\n    id: 'C',\n    name: 'C',\n    value: 0\n  },\n  D: {\n    id: 'D',\n    name: 'D',\n    value: 1\n  },\n  E: {\n    id: 'E',\n    name: 'E',\n    value: 2\n  },\n  F: {\n    id: 'F',\n    name: 'F',\n    value: 3\n  },\n  G: {\n    id: 'G',\n    name: 'G',\n    value: 4\n  },\n  A: {\n    id: 'A',\n    name: 'A',\n    value: 5\n  },\n  B: {\n    id: 'B',\n    name: 'B',\n    value: 6\n  }\n};\nconst DEGREE_VALUES = Object.values(DEGREE);\nconst PITCH = {\n  middleC: {\n    id: 'middleC',\n    name: 'Middle C',\n    value: 0\n  },\n  midi: {\n    id: 'midi',\n    name: 'MIDI',\n    value: 60\n  }\n};\nconst PITCH_VALUES = Object.values(PITCH);\nconst NOTE = {\n  Ab: {\n    id: 'Ab',\n    name: 'Ab',\n    value: [8, 5]\n  },\n  A: {\n    id: 'A',\n    name: 'A',\n    value: [9, 5]\n  },\n  'A#': {\n    id: 'A#',\n    name: 'A#',\n    value: [10, 5]\n  },\n  Bb: {\n    id: 'Bb',\n    name: 'Bb',\n    value: [10, 6]\n  },\n  B: {\n    id: 'B',\n    name: 'B',\n    value: [11, 6]\n  },\n  'B#': {\n    id: 'B#',\n    name: 'B#',\n    value: [0, 6]\n  },\n  Cb: {\n    id: 'Cb',\n    name: 'Cb',\n    value: [11, 0]\n  },\n  C: {\n    id: 'C',\n    name: 'C',\n    value: [0, 0]\n  },\n  'C#': {\n    id: 'C#',\n    name: 'C#',\n    value: [1, 0]\n  },\n  Db: {\n    id: 'Db',\n    name: 'Db',\n    value: [1, 1]\n  },\n  D: {\n    id: 'D',\n    name: 'D',\n    value: [2, 1]\n  },\n  'D#': {\n    id: 'D#',\n    name: 'D#',\n    value: [3, 1]\n  },\n  Eb: {\n    id: 'Eb',\n    name: 'Eb',\n    value: [3, 2]\n  },\n  E: {\n    id: 'E',\n    name: 'E',\n    value: [4, 2]\n  },\n  'E#': {\n    id: 'E#',\n    name: 'E#',\n    value: [5, 2]\n  },\n  Fb: {\n    id: 'Fb',\n    name: 'Fb',\n    value: [4, 3]\n  },\n  F: {\n    id: 'F',\n    name: 'F',\n    value: [5, 3]\n  },\n  'F#': {\n    id: 'F#',\n    name: 'F#',\n    value: [6, 3]\n  },\n  Gb: {\n    id: 'Gb',\n    name: 'Gb',\n    value: [6, 4]\n  },\n  G: {\n    id: 'G',\n    name: 'G',\n    value: [7, 4]\n  },\n  'G#': {\n    id: 'G#',\n    name: 'G#',\n    value: [8, 4]\n  }\n};\nconst NOTE_VALUES = Object.values(NOTE);\nconst INTERVAL = {\n  P1: {\n    id: 'P1',\n    name: 'Perfect Unison',\n    value: [0, 0]\n  },\n  m2: {\n    id: 'm2',\n    name: 'Minor 2nd',\n    value: [1, 1]\n  },\n  M2: {\n    id: 'M2',\n    name: 'Major 2nd',\n    value: [2, 1]\n  },\n  A2: {\n    id: 'A2',\n    name: 'Augmented 2nd',\n    value: [3, 1]\n  },\n  d3: {\n    id: 'd3',\n    name: 'Diminished 3rd',\n    value: [2, 2]\n  },\n  m3: {\n    id: 'm3',\n    name: 'Minor 3rd',\n    value: [3, 2]\n  },\n  M3: {\n    id: 'M3',\n    name: 'Major 3rd',\n    value: [4, 2]\n  },\n  A3: {\n    id: 'A3',\n    name: 'Augmented 3rd',\n    value: [5, 2]\n  },\n  d4: {\n    id: 'd4',\n    name: 'Diminished 4th',\n    value: [4, 3]\n  },\n  P4: {\n    id: 'P4',\n    name: 'Perfect 4th',\n    value: [5, 3]\n  },\n  A4: {\n    id: 'A4',\n    name: 'Augmented 4th',\n    value: [6, 3]\n  },\n  d5: {\n    id: 'd5',\n    name: 'Diminished 5th',\n    value: [6, 4]\n  },\n  P5: {\n    id: 'P5',\n    name: 'Perfect 5th',\n    value: [7, 4]\n  },\n  A5: {\n    id: 'A5',\n    name: 'Augmented 5th',\n    value: [8, 5]\n  },\n  d6: {\n    id: 'd6',\n    name: 'Diminished 6th',\n    value: [7, 5]\n  },\n  m6: {\n    id: 'm6',\n    name: 'Minor 6th',\n    value: [8, 5]\n  },\n  M6: {\n    id: 'M6',\n    name: 'Major 6th',\n    value: [9, 5]\n  },\n  A6: {\n    id: 'A6',\n    name: 'Augmented 6th',\n    value: [10, 5]\n  },\n  d7: {\n    id: 'd7',\n    name: 'Diminished 7th',\n    value: [9, 6]\n  },\n  m7: {\n    id: 'm7',\n    name: 'Minor 7th',\n    value: [10, 6]\n  },\n  M7: {\n    id: 'M7',\n    name: 'Major 7th',\n    value: [11, 6]\n  },\n  P8: {\n    id: 'P8',\n    name: 'Octave',\n    value: [12, 7]\n  }\n};\nconst INTERVAL_VALUES = Object.values(INTERVAL);\nconst CHORD = {\n  Maj: {\n    id: 'Maj',\n    name: 'Major Triad',\n    value: [INTERVAL.P1.value, INTERVAL.M3.value, INTERVAL.P5.value]\n  },\n  Maj6: {\n    id: 'Maj6',\n    name: 'Major 6th',\n    value: [INTERVAL.P1.value, INTERVAL.M3.value, INTERVAL.P5.value, INTERVAL.M6.value]\n  },\n  Maj7: {\n    id: 'Maj7',\n    name: 'Major 7th',\n    value: [INTERVAL.P1.value, INTERVAL.M3.value, INTERVAL.P5.value, INTERVAL.M7.value]\n  },\n  Min: {\n    id: 'Min',\n    name: 'Minor Triad',\n    value: [INTERVAL.P1.value, INTERVAL.m3.value, INTERVAL.P5.value]\n  },\n  Min6: {\n    id: 'Min6',\n    name: 'Minor 6th',\n    value: [INTERVAL.P1.value, INTERVAL.m3.value, INTERVAL.P5.value, INTERVAL.M6.value]\n  },\n  Min7: {\n    id: 'Min7',\n    name: 'Minor 7th',\n    value: [INTERVAL.P1.value, INTERVAL.m3.value, INTERVAL.P5.value, INTERVAL.m7.value]\n  },\n  MinMaj7: {\n    id: 'MinMaj7',\n    name: 'Minor-Major 7th',\n    value: [INTERVAL.P1.value, INTERVAL.m3.value, INTERVAL.P5.value, INTERVAL.M7.value]\n  },\n  Dom7: {\n    id: 'Dom7',\n    name: 'Dominant 7th',\n    value: [INTERVAL.P1.value, INTERVAL.M3.value, INTERVAL.P5.value, INTERVAL.m7.value]\n  },\n  Dom7b9: {\n    id: 'Dom7b9',\n    name: 'Dominant 7th (b9)',\n    value: [INTERVAL.P1.value, INTERVAL.M3.value, INTERVAL.P5.value, INTERVAL.m7.value, INTERVAL.m2.value]\n  },\n  Aug: {\n    id: 'Aug',\n    name: 'Augmented Triad',\n    value: [INTERVAL.P1.value, INTERVAL.M3.value, INTERVAL.A5.value]\n  },\n  Aug7: {\n    id: 'Aug7',\n    name: 'Augmented 7th',\n    value: [INTERVAL.P1.value, INTERVAL.M3.value, INTERVAL.A5.value, INTERVAL.m7.value]\n  },\n  AugM7: {\n    id: 'AugM7',\n    name: 'Augmented Major 7th',\n    value: [INTERVAL.P1.value, INTERVAL.M3.value, INTERVAL.A5.value, INTERVAL.M7.value]\n  },\n  Dim: {\n    id: 'Dim',\n    name: 'Diminished Triad',\n    value: [INTERVAL.P1.value, INTERVAL.m3.value, INTERVAL.d5.value]\n  },\n  Dim7: {\n    id: 'Dim7',\n    name: 'Diminished 7th',\n    value: [INTERVAL.P1.value, INTERVAL.m3.value, INTERVAL.d5.value, INTERVAL.d7.value]\n  },\n  HalfDim7: {\n    id: 'HalfDim7',\n    name: 'Half-Diminished 7th',\n    value: [INTERVAL.P1.value, INTERVAL.m3.value, INTERVAL.d5.value, INTERVAL.m7.value]\n  },\n  Sus2: {\n    id: 'Sus2',\n    name: 'Suspended 2nd',\n    value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.P5.value]\n  },\n  Sus4: {\n    id: 'Sus4',\n    name: 'Suspended 4th',\n    value: [INTERVAL.P1.value, INTERVAL.P4.value, INTERVAL.P5.value]\n  }\n};\nconst CHORD_VALUES = Object.values(CHORD);\nconst SCALE = {\n  Major: {\n    id: 'Major',\n    name: 'Major',\n    value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.M3.value, INTERVAL.P4.value, INTERVAL.P5.value, INTERVAL.M6.value, INTERVAL.M7.value]\n  },\n  NaturalMinor: {\n    id: 'NaturalMinor',\n    name: 'Natural Minor',\n    value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.m3.value, INTERVAL.P4.value, INTERVAL.P5.value, INTERVAL.m6.value, INTERVAL.m7.value]\n  },\n  HarmonicMinor: {\n    id: 'HarmonicMinor',\n    name: 'Harmonic Minor',\n    value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.m3.value, INTERVAL.P4.value, INTERVAL.P5.value, INTERVAL.m6.value, INTERVAL.M7.value]\n  },\n  MajorPentatonic: {\n    id: 'MajorPentatonic',\n    name: 'Major Pentatonic',\n    value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.M3.value, INTERVAL.P5.value, INTERVAL.M6.value]\n  },\n  MinorPentatonic: {\n    id: 'MinorPentatonic',\n    name: 'Minor Pentatonic',\n    value: [INTERVAL.P1.value, INTERVAL.m3.value, INTERVAL.P4.value, INTERVAL.P5.value, INTERVAL.m7.value]\n  },\n  Chromatic: {\n    id: 'Chromatic',\n    name: 'Chromatic',\n    value: [INTERVAL.P1.value, INTERVAL.m2.value, INTERVAL.M2.value, INTERVAL.m3.value, INTERVAL.M3.value, INTERVAL.P4.value, INTERVAL.A4.value, INTERVAL.P5.value, INTERVAL.m6.value, INTERVAL.M6.value, INTERVAL.m7.value, INTERVAL.M7.value]\n  }\n};\nconst SCALE_VALUES = Object.values(SCALE);\nconst PRESET_TYPES = [{\n  id: 'note',\n  name: 'Note',\n  podType: 'note',\n  isList: false,\n  presets: NOTE_VALUES\n}, {\n  id: 'interval',\n  name: 'Interval',\n  podType: 'interval',\n  isList: false,\n  presets: INTERVAL_VALUES\n}, {\n  id: 'chord',\n  name: 'Chord',\n  podType: 'interval',\n  isList: false,\n  presets: CHORD_VALUES\n}, {\n  id: 'scale',\n  name: 'Scale',\n  podType: 'interval',\n  isList: false,\n  presets: SCALE_VALUES\n}];\n\n//# sourceURL=webpack:///../core/src/modules/theory/presets.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/json */ \"./src/modules/json.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  json: _modules_json__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/json.js":
/*!*****************************!*\
  !*** ./src/modules/json.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pw_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pw/api */ \"../api/src/index.js\");\n\n\nconst parseJson = (rawSource, parentProps = {}, attr = 'root', level = 0) => {\n  const type = typeof rawSource;\n\n  switch (type) {\n    case 'number':\n    case 'boolean':\n      console.log('\\t'.repeat(level), 'IN/OUT', attr, type, rawSource);\n      return rawSource;\n\n    case 'string':\n      const levelStr = rawSource;\n      const path = levelStr.split('/'); // immediate string value\n\n      if (path.length < 2) return levelStr; // parent value\n\n      if (path[0] === 'parent') {\n        console.log('\\t'.repeat(level), 'IN', attr, 'parent', rawSource);\n        const par = parentProps[path[1]]; // TODO recursive\n\n        console.log('\\t'.repeat(level), 'OUT', attr, 'parent', par);\n        return par;\n      } // other fn value\n\n\n      console.log('\\t'.repeat(level), 'IN', attr, 'fn', rawSource);\n      const apiRes = _pw_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call(levelStr, {}, level + 1);\n      console.log('\\t'.repeat(level), 'OUT', attr, 'fn', apiRes);\n      return apiRes;\n\n    case 'object':\n      const levelObj = rawSource; // Null\n\n      if (levelObj === null) throw 'Invalid raw source type'; // Array\n\n      if (Array.isArray(levelObj)) {\n        console.log('\\t'.repeat(level), 'IN', attr, 'arr', rawSource);\n        const arr = levelObj.map(x => parseJson(x, parentProps, `${attr}.arr`, level + 1));\n        console.log('\\t'.repeat(level), 'OUT', attr, 'arr', arr);\n        return arr;\n      } // Get reserved attributes\n\n\n      const {\n        fn,\n        args,\n        ...props\n      } = levelObj;\n      const numProps = Object.values(props).length;\n\n      if (fn && numProps || args && numProps) {\n        debugger;\n        throw 'cannot mix fn defs with props';\n      }\n\n      let parsedLocalProps = {};\n      let parsedFnOut = {}; // Calculate props\n\n      if (numProps) {\n        if (typeof props !== 'object') throw 'Invalid props type';\n        console.log('\\t'.repeat(level), 'IN', attr, 'props', rawSource);\n        const localOut = Object.entries(props).reduce((acc, [key, value], i, arr) => {\n          if (key === 'children') return acc;\n          const attr = parseJson(value, parentProps, key, level + 1);\n          return { ...acc,\n            [key]: attr\n          };\n        }, {});\n        console.log('\\t'.repeat(level), 'OUT', attr, 'props', localOut);\n\n        if (props.children) {\n          console.log('\\t'.repeat(level), 'IN', attr, 'children', rawSource);\n          const mergedProps = { ...parentProps,\n            ...localOut\n          };\n          localOut.children = props.children.map((c, i) => parseJson(c, mergedProps, `${attr}.children`, level + 1));\n          console.log('\\t'.repeat(level), 'OUT', attr, 'children', localOut.children);\n        }\n\n        parsedLocalProps = localOut;\n        return parsedLocalProps;\n      } // Execute function\n\n\n      if (fn) {\n        if (typeof fn !== 'string') throw 'Invalid fn type';\n        console.log('\\t'.repeat(level), 'IN', attr, 'fn', rawSource);\n        const argsOut = parseJson(args, parentProps, 'args', level + 1);\n        /* Object.entries(args).reduce((acc, [key, value], i, arr) => {\r\n                         if (key === 'children') console.warn('children for fn args is experimental')\r\n                         const attr = parseJson(value, parentProps, key, level + 1);\r\n                         return { ...acc, [key]: attr };\r\n                     }, {}); */\n\n        parsedFnOut = _pw_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call(fn, argsOut, level + 2);\n        console.log('\\t'.repeat(level), 'OUT', attr, 'fn', parsedFnOut);\n        return parsedFnOut;\n      }\n\n      throw 'unexpected config';\n\n    default:\n      debugger;\n      throw 'Invalid raw source type';\n  }\n};\n\nconst json = rawSource => {\n  return parseJson(rawSource, {}, 'root', 0);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (json);\n\n//# sourceURL=webpack:///./src/modules/json.js?");

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