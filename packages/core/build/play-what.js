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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_theory_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/theory/config */ \"./src/modules/theory/config.js\");\n/* harmony import */ var _modules_theory_diatonic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/theory/diatonic */ \"./src/modules/theory/diatonic.js\");\n/* harmony import */ var _modules_Tuning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Tuning */ \"./src/modules/Tuning.js\");\n/* harmony import */ var _modules_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Utils */ \"./src/modules/Utils.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n\tconfig: _modules_theory_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n\tdiatonic: _modules_theory_diatonic__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n\tUtils: _modules_Utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\r\n\tTuning: _modules_Tuning__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\r\n});\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

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

/***/ "./src/modules/theory/config.js":
/*!**************************************!*\
  !*** ./src/modules/theory/config.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _diatonic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diatonic */ \"./src/modules/theory/diatonic.js\");\n/* harmony import */ var _presets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presets */ \"./src/modules/theory/presets.js\");\n\r\n\r\n\r\nconst MAX_PITCH = 12;\r\nconst MAX_DEGREE = 7\r\nconst MAX = [MAX_PITCH, MAX_DEGREE];\r\n\r\nconst ROOT_PITCH = _presets__WEBPACK_IMPORTED_MODULE_1__[\"PITCH\"].middleC.value;\r\nconst ROOT_DEGREE = [0, 0];\r\n\r\nconst DIATONIC_VALUES = Object.values(_diatonic__WEBPACK_IMPORTED_MODULE_0__[\"DIATONIC\"]);\r\n\r\nconst ROOT = DIATONIC_VALUES.map((pod, i) => (\r\n\t[\r\n\t\tROOT_PITCH + pod.value[0],\r\n\t\tROOT_DEGREE + pod.value[1]\r\n\t]\r\n));\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n\trootScale: ROOT,\r\n\tmaxPod: MAX\r\n});\r\n\n\n//# sourceURL=webpack:///./src/modules/theory/config.js?");

/***/ }),

/***/ "./src/modules/theory/diatonic.js":
/*!****************************************!*\
  !*** ./src/modules/theory/diatonic.js ***!
  \****************************************/
/*! exports provided: DIATONIC, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DIATONIC\", function() { return DIATONIC; });\nconst DIATONIC = {\r\n\ttonic: {\r\n\t\tid: 'tonic',\r\n\t\tname: 'Tonic',\r\n\t\tvalue: [0, 0]\r\n\t},\r\n\tsupertonic: {\r\n\t\tid: 'supertonic',\r\n\t\tname: 'Supertonic',\r\n\t\tvalue: [2, 1]\r\n\t},\r\n\tmediant: {\r\n\t\tid: 'mediant',\r\n\t\tname: 'Mediant',\r\n\t\tvalue: [4, 2]\r\n\t},\r\n\tsubdominant: {\r\n\t\tid: 'subdominant',\r\n\t\tname: 'Subdominant',\r\n\t\tvalue: [5, 3]\r\n\t},\r\n\tdominant: {\r\n\t\tid: 'dominant',\r\n\t\tname: 'Dominant',\r\n\t\tvalue: [7, 4]\r\n\t},\r\n\tsubmediant: {\r\n\t\tid: 'submediant',\r\n\t\tname: 'Submediant',\r\n\t\tvalue: [9, 5]\r\n\t},\r\n\tsubtonic: {\r\n\t\tid: 'subtonic',\r\n\t\tname: 'Subtonic',\r\n\t\tvalue: [11, 6]\r\n\t}\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n\tpreset: DIATONIC\r\n});\r\n\n\n//# sourceURL=webpack:///./src/modules/theory/diatonic.js?");

/***/ }),

/***/ "./src/modules/theory/presets.js":
/*!***************************************!*\
  !*** ./src/modules/theory/presets.js ***!
  \***************************************/
/*! exports provided: DEGREE, DEGREE_VALUES, PITCH, PITCH_VALUES, NOTE, NOTE_VALUES, INTERVAL, INTERVAL_VALUES, CHORD, CHORD_VALUES, SCALE, SCALE_VALUES, PRESET_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DEGREE\", function() { return DEGREE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DEGREE_VALUES\", function() { return DEGREE_VALUES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PITCH\", function() { return PITCH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PITCH_VALUES\", function() { return PITCH_VALUES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NOTE\", function() { return NOTE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NOTE_VALUES\", function() { return NOTE_VALUES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INTERVAL\", function() { return INTERVAL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INTERVAL_VALUES\", function() { return INTERVAL_VALUES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHORD\", function() { return CHORD; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHORD_VALUES\", function() { return CHORD_VALUES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SCALE\", function() { return SCALE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SCALE_VALUES\", function() { return SCALE_VALUES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PRESET_TYPES\", function() { return PRESET_TYPES; });\nconst DEGREE = {\r\n\tC: {\r\n\t\tid: 'C',\r\n\t\tname: 'C',\r\n\t\tvalue: 0\r\n\t},\r\n\tD: {\r\n\t\tid: 'D',\r\n\t\tname: 'D',\r\n\t\tvalue: 1\r\n\t},\r\n\tE: {\r\n\t\tid: 'E',\r\n\t\tname: 'E',\r\n\t\tvalue: 2\r\n\t},\r\n\tF: {\r\n\t\tid: 'F',\r\n\t\tname: 'F',\r\n\t\tvalue: 3\r\n\t},\r\n\tG: {\r\n\t\tid: 'G',\r\n\t\tname: 'G',\r\n\t\tvalue: 4\r\n\t},\r\n\tA: {\r\n\t\tid: 'A',\r\n\t\tname: 'A',\r\n\t\tvalue: 5\r\n\t},\r\n\tB: {\r\n\t\tid: 'B',\r\n\t\tname: 'B',\r\n\t\tvalue: 6\r\n\t}\r\n};\r\n\r\nconst DEGREE_VALUES = Object.values(DEGREE);\r\n\r\nconst PITCH = {\r\n\tmiddleC: {\r\n\t\tid: 'middleC',\r\n\t\tname: 'Middle C',\r\n\t\tvalue: 0\r\n\t},\r\n\tmidi: {\r\n\t\tid: 'midi',\r\n\t\tname: 'MIDI',\r\n\t\tvalue: 60\r\n\t}\r\n};\r\n\r\nconst PITCH_VALUES = Object.values(PITCH);\r\n\r\nconst NOTE = {\r\n\tAb: { id: 'Ab', name: 'Ab', value: [8, 5] },\r\n\tA: { id: 'A', name: 'A', value: [9, 5] },\r\n\t'A#': { id: 'A#', name: 'A#', value: [10, 5] },\r\n\tBb: { id: 'Bb', name: 'Bb', value: [10, 6] },\r\n\tB: { id: 'B', name: 'B', value: [11, 6] },\r\n\t'B#': { id: 'B#', name: 'B#', value: [0, 6] },\r\n\tCb: { id: 'Cb', name: 'Cb', value: [11, 0] },\r\n\tC: { id: 'C', name: 'C', value: [0, 0] },\r\n\t'C#': { id: 'C#', name: 'C#', value: [1, 0] },\r\n\tDb: { id: 'Db', name: 'Db', value: [1, 1] },\r\n\tD: { id: 'D', name: 'D', value: [2, 1] },\r\n\t'D#': { id: 'D#', name: 'D#', value: [3, 1] },\r\n\tEb: { id: 'Eb', name: 'Eb', value: [3, 2] },\r\n\tE: { id: 'E', name: 'E', value: [4, 2] },\r\n\t'E#': { id: 'E#', name: 'E#', value: [5, 2] },\r\n\tFb: { id: 'Fb', name: 'Fb', value: [4, 3] },\r\n\tF: { id: 'F', name: 'F', value: [5, 3] },\r\n\t'F#': { id: 'F#', name: 'F#', value: [6, 3] },\r\n\tGb: { id: 'Gb', name: 'Gb', value: [6, 4] },\r\n\tG: { id: 'G', name: 'G', value: [7, 4] },\r\n\t'G#': { id: 'G#', name: 'G#', value: [8, 4] }\r\n};\r\n\r\nconst NOTE_VALUES = Object.values(NOTE);\r\n\r\nconst INTERVAL = {\r\n\tP1: {\r\n\t\tid: 'P1',\r\n\t\tname: 'Perfect Unison',\r\n\t\tvalue: [0, 0]\r\n\t},\r\n\tm2: {\r\n\t\tid: 'm2',\r\n\t\tname: 'Minor 2nd',\r\n\t\tvalue: [\r\n\t\t\t1,\r\n\t\t\t1\r\n\t\t]\r\n\t},\r\n\tM2: {\r\n\t\tid: 'M2',\r\n\t\tname: 'Major 2nd',\r\n\t\tvalue: [\r\n\t\t\t2,\r\n\t\t\t1\r\n\t\t]\r\n\t},\r\n\tA2: {\r\n\t\tid: 'A2',\r\n\t\tname: 'Augmented 2nd',\r\n\t\tvalue: [\r\n\t\t\t3,\r\n\t\t\t1\r\n\t\t]\r\n\t},\r\n\td3: {\r\n\t\tid: 'd3',\r\n\t\tname: 'Diminished 3rd',\r\n\t\tvalue: [\r\n\t\t\t2,\r\n\t\t\t2\r\n\t\t]\r\n\t},\r\n\tm3: {\r\n\t\tid: 'm3',\r\n\t\tname: 'Minor 3rd',\r\n\t\tvalue: [\r\n\t\t\t3,\r\n\t\t\t2\r\n\t\t]\r\n\t},\r\n\tM3: {\r\n\t\tid: 'M3',\r\n\t\tname: 'Major 3rd',\r\n\t\tvalue: [\r\n\t\t\t4,\r\n\t\t\t2\r\n\t\t]\r\n\t},\r\n\tA3: {\r\n\t\tid: 'A3',\r\n\t\tname: 'Augmented 3rd',\r\n\t\tvalue: [\r\n\t\t\t5,\r\n\t\t\t2\r\n\t\t]\r\n\t},\r\n\td4: {\r\n\t\tid: 'd4',\r\n\t\tname: 'Diminished 4th',\r\n\t\tvalue: [\r\n\t\t\t4,\r\n\t\t\t3\r\n\t\t]\r\n\t},\r\n\tP4: {\r\n\t\tid: 'P4',\r\n\t\tname: 'Perfect 4th',\r\n\t\tvalue: [\r\n\t\t\t5,\r\n\t\t\t3\r\n\t\t]\r\n\t},\r\n\tA4: {\r\n\t\tid: 'A4',\r\n\t\tname: 'Augmented 4th',\r\n\t\tvalue: [\r\n\t\t\t6,\r\n\t\t\t3\r\n\t\t]\r\n\t},\r\n\td5: {\r\n\t\tid: 'd5',\r\n\t\tname: 'Diminished 5th',\r\n\t\tvalue: [\r\n\t\t\t6,\r\n\t\t\t4\r\n\t\t]\r\n\t},\r\n\tP5: {\r\n\t\tid: 'P5',\r\n\t\tname: 'Perfect 5th',\r\n\t\tvalue: [\r\n\t\t\t7,\r\n\t\t\t4\r\n\t\t]\r\n\t},\r\n\tA5: {\r\n\t\tid: 'A5',\r\n\t\tname: 'Augmented 5th',\r\n\t\tvalue: [\r\n\t\t\t8,\r\n\t\t\t5\r\n\t\t]\r\n\t},\r\n\td6: {\r\n\t\tid: 'd6',\r\n\t\tname: 'Diminished 6th',\r\n\t\tvalue: [\r\n\t\t\t7,\r\n\t\t\t5\r\n\t\t]\r\n\t},\r\n\tm6: {\r\n\t\tid: 'm6',\r\n\t\tname: 'Minor 6th',\r\n\t\tvalue: [\r\n\t\t\t8,\r\n\t\t\t5\r\n\t\t]\r\n\t},\r\n\tM6: {\r\n\t\tid: 'M6',\r\n\t\tname: 'Major 6th',\r\n\t\tvalue: [\r\n\t\t\t9,\r\n\t\t\t5\r\n\t\t]\r\n\t},\r\n\tA6: {\r\n\t\tid: 'A6',\r\n\t\tname: 'Augmented 6th',\r\n\t\tvalue: [\r\n\t\t\t10,\r\n\t\t\t5\r\n\t\t]\r\n\t},\r\n\td7: {\r\n\t\tid: 'd7',\r\n\t\tname: 'Diminished 7th',\r\n\t\tvalue: [\r\n\t\t\t9,\r\n\t\t\t6\r\n\t\t]\r\n\t},\r\n\tm7: {\r\n\t\tid: 'm7',\r\n\t\tname: 'Minor 7th',\r\n\t\tvalue: [\r\n\t\t\t10,\r\n\t\t\t6\r\n\t\t]\r\n\t},\r\n\tM7: {\r\n\t\tid: 'M7',\r\n\t\tname: 'Major 7th',\r\n\t\tvalue: [\r\n\t\t\t11,\r\n\t\t\t6\r\n\t\t]\r\n\t},\r\n\tP8: {\r\n\t\tid: 'P8',\r\n\t\tname: 'Octave',\r\n\t\tvalue: [\r\n\t\t\t12,\r\n\t\t\t7\r\n\t\t]\r\n\t}\r\n};\r\n\r\nconst INTERVAL_VALUES = Object.values(INTERVAL);\r\n\r\nconst CHORD = {\r\n\tMaj: { id: 'Maj', name: 'Major Triad', value: [INTERVAL.P1.value, INTERVAL.M3.value, INTERVAL.P5.value] },\r\n\tMaj6: { id: 'Maj6', name: 'Major 6th', value: [INTERVAL.P1.value, INTERVAL.M3.value, INTERVAL.P5.value, INTERVAL.M6.value] },\r\n\tMaj7: { id: 'Maj7', name: 'Major 7th', value: [INTERVAL.P1.value, INTERVAL.M3.value, INTERVAL.P5.value, INTERVAL.M7.value] },\r\n\tMin: { id: 'Min', name: 'Minor Triad', value: [INTERVAL.P1.value, INTERVAL.m3.value, INTERVAL.P5.value] },\r\n\tMin6: { id: 'Min6', name: 'Minor 6th', value: [INTERVAL.P1.value, INTERVAL.m3.value, INTERVAL.P5.value, INTERVAL.M6.value] },\r\n\tMin7: { id: 'Min7', name: 'Minor 7th', value: [INTERVAL.P1.value, INTERVAL.m3.value, INTERVAL.P5.value, INTERVAL.m7.value] },\r\n\tMinMaj7: { id: 'MinMaj7', name: 'Minor-Major 7th', value: [INTERVAL.P1.value, INTERVAL.m3.value, INTERVAL.P5.value, INTERVAL.M7.value] },\r\n\tDom7: { id: 'Dom7', name: 'Dominant 7th', value: [INTERVAL.P1.value, INTERVAL.M3.value, INTERVAL.P5.value, INTERVAL.m7.value] },\r\n\tDom7b9: { id: 'Dom7b9', name: 'Dominant 7th (b9)', value: [INTERVAL.P1.value, INTERVAL.M3.value, INTERVAL.P5.value, INTERVAL.m7.value, INTERVAL.m2.value] },\r\n\tAug: { id: 'Aug', name: 'Augmented Triad', value: [INTERVAL.P1.value, INTERVAL.M3.value, INTERVAL.A5.value] },\r\n\tAug7: { id: 'Aug7', name: 'Augmented 7th', value: [INTERVAL.P1.value, INTERVAL.M3.value, INTERVAL.A5.value, INTERVAL.m7.value] },\r\n\tAugM7: { id: 'AugM7', name: 'Augmented Major 7th', value: [INTERVAL.P1.value, INTERVAL.M3.value, INTERVAL.A5.value, INTERVAL.M7.value] },\r\n\tDim: { id: 'Dim', name: 'Diminished Triad', value: [INTERVAL.P1.value, INTERVAL.m3.value, INTERVAL.d5.value] },\r\n\tDim7: { id: 'Dim7', name: 'Diminished 7th', value: [INTERVAL.P1.value, INTERVAL.m3.value, INTERVAL.d5.value, INTERVAL.d7.value] },\r\n\tHalfDim7: { id: 'HalfDim7', name: 'Half-Diminished 7th', value: [INTERVAL.P1.value, INTERVAL.m3.value, INTERVAL.d5.value, INTERVAL.m7.value] },\r\n\tSus2: { id: 'Sus2', name: 'Suspended 2nd', value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.P5.value] },\r\n\tSus4: { id: 'Sus4', name: 'Suspended 4th', value: [INTERVAL.P1.value, INTERVAL.P4.value, INTERVAL.P5.value] }\r\n};\r\n\r\nconst CHORD_VALUES = Object.values(CHORD);\r\n\r\nconst SCALE = {\r\n\tMajor: { id: 'Major', name: 'Major', value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.M3.value, INTERVAL.P4.value, INTERVAL.P5.value, INTERVAL.M6.value, INTERVAL.M7.value] },\r\n\tNaturalMinor: { id: 'NaturalMinor', name: 'Natural Minor', value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.m3.value, INTERVAL.P4.value, INTERVAL.P5.value, INTERVAL.m6.value, INTERVAL.m7.value] },\r\n\tHarmonicMinor: { id: 'HarmonicMinor', name: 'Harmonic Minor', value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.m3.value, INTERVAL.P4.value, INTERVAL.P5.value, INTERVAL.m6.value, INTERVAL.M7.value] },\r\n\tMajorPentatonic: { id: 'MajorPentatonic', name: 'Major Pentatonic', value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.M3.value, INTERVAL.P5.value, INTERVAL.M6.value] },\r\n\tMinorPentatonic: { id: 'MinorPentatonic', name: 'Minor Pentatonic', value: [INTERVAL.P1.value, INTERVAL.m3.value, INTERVAL.P4.value, INTERVAL.P5.value, INTERVAL.m7.value] },\r\n\tChromatic: { id: 'Chromatic', name: 'Chromatic', value: [INTERVAL.P1.value, INTERVAL.m2.value, INTERVAL.M2.value, INTERVAL.m3.value, INTERVAL.M3.value, INTERVAL.P4.value, INTERVAL.A4.value, INTERVAL.P5.value, INTERVAL.m6.value, INTERVAL.M6.value, INTERVAL.m7.value, INTERVAL.M7.value] }\r\n};\r\n\r\nconst SCALE_VALUES = Object.values(SCALE);\r\n\r\nconst PRESET_TYPES = [\r\n\t{\r\n\t\tid: 'note',\r\n\t\tname: 'Note',\r\n\t\tpodType: 'note',\r\n\t\tisList: false,\r\n\t\tpresets: NOTE_VALUES\r\n\t},\r\n\t{\r\n\t\tid: 'interval',\r\n\t\tname: 'Interval',\r\n\t\tpodType: 'interval',\r\n\t\tisList: false,\r\n\t\tpresets: INTERVAL_VALUES\r\n\t},\r\n\t{\r\n\t\tid: 'chord',\r\n\t\tname: 'Chord',\r\n\t\tpodType: 'interval',\r\n\t\tisList: false,\r\n\t\tpresets: CHORD_VALUES\r\n\t},\r\n\t{\r\n\t\tid: 'scale',\r\n\t\tname: 'Scale',\r\n\t\tpodType: 'interval',\r\n\t\tisList: false,\r\n\t\tpresets: SCALE_VALUES\r\n\t}\r\n];\r\n\n\n//# sourceURL=webpack:///./src/modules/theory/presets.js?");

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