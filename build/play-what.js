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

/***/ "./src/Concept.presets.js":
/*!********************************!*\
  !*** ./src/Concept.presets.js ***!
  \********************************/
/*! exports provided: INTERVALS, INTERVALS_VALUES, INTERVAL_PAIR, INTERVAL_PAIR_VALUES, CHORD, CHORD_VALUES, SCALE, SCALE_VALUES, QUICK_MODE, QUICK_MODE_VALUES, ROMAN_NUMERAL, ROMAN_NUMERAL_VALUES, ALL_CONCEPT_PRESETS, ALL_CONCEPT_PRESET_VALUES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INTERVALS\", function() { return INTERVALS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INTERVALS_VALUES\", function() { return INTERVALS_VALUES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INTERVAL_PAIR\", function() { return INTERVAL_PAIR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INTERVAL_PAIR_VALUES\", function() { return INTERVAL_PAIR_VALUES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHORD\", function() { return CHORD; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHORD_VALUES\", function() { return CHORD_VALUES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SCALE\", function() { return SCALE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SCALE_VALUES\", function() { return SCALE_VALUES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"QUICK_MODE\", function() { return QUICK_MODE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"QUICK_MODE_VALUES\", function() { return QUICK_MODE_VALUES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ROMAN_NUMERAL\", function() { return ROMAN_NUMERAL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ROMAN_NUMERAL_VALUES\", function() { return ROMAN_NUMERAL_VALUES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ALL_CONCEPT_PRESETS\", function() { return ALL_CONCEPT_PRESETS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ALL_CONCEPT_PRESET_VALUES\", function() { return ALL_CONCEPT_PRESET_VALUES; });\nconst INTERVALS = Object.freeze({\r\n    P1: {\r\n        id: 'P1',\r\n        name: 'Perfect Unison',\r\n        a: {\r\n            d: 0,\r\n            p: 0\r\n        }\r\n    },\r\n    m2: {\r\n        id: 'm2',\r\n        name: 'Minor 2nd',\r\n        a: {\r\n            d: 1,\r\n            p: 1\r\n        }\r\n    },\r\n    M2: {\r\n        id: 'M2',\r\n        name: 'Major 2nd',\r\n        a: {\r\n            d: 1,\r\n            p: 2\r\n        }\r\n    },\r\n    A2: {\r\n        id: 'A2',\r\n        name: 'Augmented 2nd',\r\n        a: {\r\n            d: 1,\r\n            p: 3\r\n        }\r\n    },\r\n    d3: {\r\n        id: 'd3',\r\n        name: 'Diminished 3rd',\r\n        a: {\r\n            d: 2,\r\n            p: 2\r\n        }\r\n    },\r\n    m3: {\r\n        id: 'm3',\r\n        name: 'Minor 3rd',\r\n        a: {\r\n            d: 2,\r\n            p: 3\r\n        }\r\n    },\r\n    M3: {\r\n        id: 'M3',\r\n        name: 'Major 3rd',\r\n        a: {\r\n            d: 2,\r\n            p: 4\r\n        }\r\n    },\r\n    A3: {\r\n        id: 'A3',\r\n        name: 'Augmented 3rd',\r\n        a: {\r\n            d: 2,\r\n            p: 5\r\n        }\r\n    },\r\n    d4: {\r\n        id: 'd4',\r\n        name: 'Diminished 4th',\r\n        a: {\r\n            d: 3,\r\n            p: 4\r\n        }\r\n    },\r\n    P4: {\r\n        id: 'P4',\r\n        name: 'Perfect 4th',\r\n        a: {\r\n            d: 3,\r\n            p: 5\r\n        }\r\n    },\r\n    A4: {\r\n        id: 'A4',\r\n        name: 'Augmented 4th',\r\n        a: {\r\n            d: 3,\r\n            p: 6\r\n        }\r\n    },\r\n    d5: {\r\n        id: 'd5',\r\n        name: 'Diminished 5th',\r\n        a: {\r\n            d: 4,\r\n            p: 6\r\n        }\r\n    },\r\n    P5: {\r\n        id: 'P5',\r\n        name: 'Perfect 5th',\r\n        a: {\r\n            d: 4,\r\n            p: 7\r\n        }\r\n    },\r\n    A5: {\r\n        id: 'A5',\r\n        name: 'Augmented 5th',\r\n        a: {\r\n            d: 4,\r\n            p: 8\r\n        }\r\n    },\r\n    d6: {\r\n        id: 'd6',\r\n        name: 'Diminished 6th',\r\n        a: {\r\n            d: 5,\r\n            p: 7\r\n        }\r\n    },\r\n    m6: {\r\n        id: 'm6',\r\n        name: 'Minor 6th',\r\n        a: {\r\n            d: 5,\r\n            p: 8\r\n        }\r\n    },\r\n    M6: {\r\n        id: 'M6',\r\n        name: 'Major 6th',\r\n        a: {\r\n            d: 5,\r\n            p: 9\r\n        }\r\n    },\r\n    A6: {\r\n        id: 'A6',\r\n        name: 'Augmented 6th',\r\n        a: {\r\n            d: 5,\r\n            p: 10\r\n        }\r\n    },\r\n    d7: {\r\n        id: 'd7',\r\n        name: 'Diminished 7th',\r\n        a: {\r\n            d: 6,\r\n            p: 9\r\n        }\r\n    },\r\n    m7: {\r\n        id: 'm7',\r\n        name: 'Minor 7th',\r\n        a: {\r\n            d: 6,\r\n            p: 10\r\n        }\r\n    },\r\n    M7: {\r\n        id: 'M7',\r\n        name: 'Major 7th',\r\n        a: {\r\n            d: 6,\r\n            p: 11\r\n        }\r\n    },\r\n    P8: {\r\n        id: 'P8',\r\n        name: 'Octave',\r\n        a: {\r\n            d: 7,\r\n            p: 12\r\n        }\r\n    }\r\n});\r\n\r\nconst INTERVALS_VALUES = Object.freeze(Object.values(INTERVALS));\r\n\r\nconst INTERVAL_PAIR = Object.freeze({\r\n    P1: { id: 'P1', name: 'P1', B: [INTERVALS.P1.a, INTERVALS.P1.a] },\r\n    m2: { id: 'm2', name: 'm2', B: [INTERVALS.P1.a, INTERVALS.m2.a] },\r\n    M2: { id: 'M2', name: 'M2', B: [INTERVALS.P1.a, INTERVALS.M2.a] },\r\n    A2: { id: 'A2', name: 'A2', B: [INTERVALS.P1.a, INTERVALS.A2.a] },\r\n    d3: { id: 'd3', name: 'd3', B: [INTERVALS.P1.a, INTERVALS.d3.a] },\r\n    m3: { id: 'm3', name: 'm3', B: [INTERVALS.P1.a, INTERVALS.m3.a] },\r\n    M3: { id: 'M3', name: 'M3', B: [INTERVALS.P1.a, INTERVALS.M3.a] },\r\n    P4: { id: 'P4', name: 'P4', B: [INTERVALS.P1.a, INTERVALS.P4.a] },\r\n    A4: { id: 'A4', name: 'A4', B: [INTERVALS.P1.a, INTERVALS.A4.a] },\r\n    d5: { id: 'd5', name: 'd5', B: [INTERVALS.P1.a, INTERVALS.d5.a] },\r\n    P5: { id: 'P5', name: 'P5', B: [INTERVALS.P1.a, INTERVALS.P5.a] },\r\n    A5: { id: 'A5', name: 'A5', B: [INTERVALS.P1.a, INTERVALS.A5.a] },\r\n    d6: { id: 'd6', name: 'd6', B: [INTERVALS.P1.a, INTERVALS.d6.a] },\r\n    m6: { id: 'm6', name: 'm6', B: [INTERVALS.P1.a, INTERVALS.m6.a] },\r\n    M6: { id: 'M6', name: 'M6', B: [INTERVALS.P1.a, INTERVALS.M6.a] },\r\n    d7: { id: 'd7', name: 'd7', B: [INTERVALS.P1.a, INTERVALS.d7.a] },\r\n    m7: { id: 'm7', name: 'm7', B: [INTERVALS.P1.a, INTERVALS.m7.a] },\r\n    M7: { id: 'M7', name: 'M7', B: [INTERVALS.P1.a, INTERVALS.M7.a] }\r\n});\r\n\r\nconst INTERVAL_PAIR_VALUES = Object.freeze(Object.values(INTERVAL_PAIR));\r\n\r\nconst CHORD = Object.freeze({\r\n    Maj: { id: 'Maj', name: 'Major Triad', B: [INTERVALS.P1.a, INTERVALS.M3.a, INTERVALS.P5.a] },\r\n    Maj6: { id: 'Maj6', name: 'Major 6th', B: [INTERVALS.P1.a, INTERVALS.M3.a, INTERVALS.P5.a, INTERVALS.M6.a] },\r\n    Maj7: { id: 'Maj7', name: 'Major 7th', B: [INTERVALS.P1.a, INTERVALS.M3.a, INTERVALS.P5.a, INTERVALS.M7.a] },\r\n    Min: { id: 'Min', name: 'Minor Triad', B: [INTERVALS.P1.a, INTERVALS.m3.a, INTERVALS.P5.a] },\r\n    Min6: { id: 'Min6', name: 'Minor 6th', B: [INTERVALS.P1.a, INTERVALS.m3.a, INTERVALS.P5.a, INTERVALS.M6.a] },\r\n    Min7: { id: 'Min7', name: 'Minor 7th', B: [INTERVALS.P1.a, INTERVALS.m3.a, INTERVALS.P5.a, INTERVALS.m7.a] },\r\n    MinMaj7: { id: 'MinMaj7', name: 'Minor-Major 7th', B: [INTERVALS.P1.a, INTERVALS.m3.a, INTERVALS.P5.a, INTERVALS.M7.a] },\r\n    Dom7: { id: 'Dom7', name: 'Dominant 7th', B: [INTERVALS.P1.a, INTERVALS.M3.a, INTERVALS.P5.a, INTERVALS.m7.a] },\r\n    Dom7b9: { id: 'Dom7b9', name: 'Dominant 7th (b9)', B: [INTERVALS.P1.a, INTERVALS.M3.a, INTERVALS.P5.a, INTERVALS.m7.a, INTERVALS.m2.a] },\r\n    Aug: { id: 'Aug', name: 'Augmented Triad', B: [INTERVALS.P1.a, INTERVALS.M3.a, INTERVALS.A5.a] },\r\n    Aug7: { id: 'Aug7', name: 'Augmented 7th', B: [INTERVALS.P1.a, INTERVALS.M3.a, INTERVALS.A5.a, INTERVALS.m7.a] },\r\n    AugM7: { id: 'AugM7', name: 'Augmented Major 7th', B: [INTERVALS.P1.a, INTERVALS.M3.a, INTERVALS.A5.a, INTERVALS.M7.a] },\r\n    Dim: { id: 'Dim', name: 'Diminished Triad', B: [INTERVALS.P1.a, INTERVALS.m3.a, INTERVALS.d5.a] },\r\n    Dim7: { id: 'Dim7', name: 'Diminished 7th', B: [INTERVALS.P1.a, INTERVALS.m3.a, INTERVALS.d5.a, INTERVALS.d7.a] },\r\n    HalfDim7: { id: 'HalfDim7', name: 'Half-Diminished 7th', B: [INTERVALS.P1.a, INTERVALS.m3.a, INTERVALS.d5.a, INTERVALS.m7.a] },\r\n    Sus2: { id: 'Sus2', name: 'Suspended 2nd', B: [INTERVALS.P1.a, INTERVALS.M2.a, INTERVALS.P5.a] },\r\n    Sus4: { id: 'Sus4', name: 'Suspended 4th', B: [INTERVALS.P1.a, INTERVALS.P4.a, INTERVALS.P5.a] }\r\n});\r\n\r\nconst CHORD_VALUES = Object.freeze(Object.values(CHORD));\r\n\r\nconst SCALE = Object.freeze({\r\n    Major: { id: 'Major', name: 'Major', B: [INTERVALS.P1.a, INTERVALS.M2.a, INTERVALS.M3.a, INTERVALS.P4.a, INTERVALS.P5.a, INTERVALS.M6.a, INTERVALS.M7.a] },\r\n    NaturalMinor: { id: 'NaturalMinor', name: 'Natural Minor', B: [INTERVALS.P1.a, INTERVALS.M2.a, INTERVALS.m3.a, INTERVALS.P4.a, INTERVALS.P5.a, INTERVALS.m6.a, INTERVALS.m7.a] },\r\n    HarmonicMinor: { id: 'HarmonicMinor', name: 'Harmonic Minor', B: [INTERVALS.P1.a, INTERVALS.M2.a, INTERVALS.m3.a, INTERVALS.P4.a, INTERVALS.P5.a, INTERVALS.m6.a, INTERVALS.M7.a] },\r\n    MajorPentatonic: { id: 'MajorPentatonic', name: 'Major Pentatonic', B: [INTERVALS.P1.a, INTERVALS.M2.a, INTERVALS.M3.a, INTERVALS.P5.a, INTERVALS.M6.a] },\r\n    MinorPentatonic: { id: 'MinorPentatonic', name: 'Minor Pentatonic', B: [INTERVALS.P1.a, INTERVALS.m3.a, INTERVALS.P4.a, INTERVALS.P5.a, INTERVALS.m7.a] },\r\n    Chromatic: { id: 'Chromatic', name: 'Chromatic', B: [INTERVALS.P1.a, INTERVALS.m2.a, INTERVALS.M2.a, INTERVALS.m3.a, INTERVALS.M3.a, INTERVALS.P4.a, INTERVALS.A4.a, INTERVALS.P5.a, INTERVALS.m6.a, INTERVALS.M6.a, INTERVALS.m7.a, INTERVALS.M7.a] }\r\n});\r\n\r\nconst SCALE_VALUES = Object.freeze(Object.values(SCALE));\r\n\r\nconst QUICK_MODE = {\r\n    Ionian: { id: 'Ionian', name: 'Ionian', B: [INTERVALS.P1.a, INTERVALS.M2.a, INTERVALS.M3.a, INTERVALS.P4.a, INTERVALS.P5.a, INTERVALS.M6.a, INTERVALS.M7.a] },\r\n    Dorian: { id: 'Dorian', name: 'Dorian', B: [INTERVALS.P1.a, INTERVALS.M2.a, INTERVALS.m3.a, INTERVALS.P4.a, INTERVALS.P5.a, INTERVALS.M6.a, INTERVALS.m7.a] },\r\n    Phrygian: { id: 'Phrygian', name: 'Phrygian', B: [INTERVALS.P1.a, INTERVALS.m2.a, INTERVALS.m3.a, INTERVALS.P4.a, INTERVALS.P5.a, INTERVALS.m6.a, INTERVALS.m7.a] },\r\n    Lydian: { id: 'Lydian', name: 'Lydian', B: [INTERVALS.P1.a, INTERVALS.M2.a, INTERVALS.M3.a, INTERVALS.A4.a, INTERVALS.P5.a, INTERVALS.M6.a, INTERVALS.M7.a] },\r\n    Mixolydian: { id: 'Mixolydian', name: 'Mixolydian', B: [INTERVALS.P1.a, INTERVALS.M2.a, INTERVALS.M3.a, INTERVALS.P4.a, INTERVALS.P5.a, INTERVALS.M6.a, INTERVALS.m7.a] },\r\n    Aeolian: { id: 'Aeolian', name: 'Aeolian', B: [INTERVALS.P1.a, INTERVALS.M2.a, INTERVALS.m3.a, INTERVALS.P4.a, INTERVALS.P5.a, INTERVALS.m6.a, INTERVALS.m7.a] },\r\n    Locrian: { id: 'Locrian', name: 'Locrian', B: [INTERVALS.P1.a, INTERVALS.m2.a, INTERVALS.m3.a, INTERVALS.P4.a, INTERVALS.d5.a, INTERVALS.m6.a, INTERVALS.m7.a] }\r\n};\r\n\r\nconst QUICK_MODE_VALUES = Object.freeze(Object.values(QUICK_MODE));\r\n\r\n\r\n/*export const MODE = Object.freeze({\r\n    Ionian: { id:'Ionian', name:'Ionian', scale:'Major', degree: 1 },\r\n    Dorian: { id:'Dorian', name:'Dorian', scale:'Major', degree: 2 },\r\n    Phrygian: { id:'Phrygian', name:'Phrygian', scale:'Major', degree: 3 },\r\n    Lydian: { id:'Lydian', name:'Lydian', scale:'Major', degree: 4 },\r\n    Mixolydian: { id:'Mixolydian', name:'Mixolydian', scale:'Major', degree: 5 },\r\n    Aeolian: { id:'Aeolian', name:'Aeolian', scale:'Major', degree: 6 },\r\n    Locrian: { id:'Locrian', name:'Locrian', scale:'Major', degree: 7 }\r\n});*/\r\n\r\nconst ROMAN_NUMERAL = {};\r\n\r\n/*export const ROMAN_NUMERAL = {\r\n    i: { id: 'i', name: 'i', B: Theory.addVectorsBatch(INTERVALS.P1.a, CHORD.Min7.B)},\r\n    ii: { id: 'ii', name: 'ii', B: Theory.addVectorsBatch(INTERVALS.M2.a, CHORD.Min7.B)},\r\n    iii: { id: 'iii', name: 'iii', B: Theory.addVectorsBatch(INTERVALS.M3.a, CHORD.Min7.B)},\r\n    iv: { id: 'iv', name: 'iv', B: Theory.addVectorsBatch(INTERVALS.P4.a, CHORD.Min7.B)},\r\n    v: { id: 'v', name: 'v', B: Theory.addVectorsBatch(INTERVALS.P5.a, CHORD.Min7.B)},\r\n    vi: { id: 'vi', name: 'vi', B: Theory.addVectorsBatch(INTERVALS.M6.a, CHORD.Min7.B)},\r\n    vii: { id: 'vii', name: 'vii', B: Theory.addVectorsBatch(INTERVALS.M7.a, CHORD.Min7.B)},\r\n    I: { id: 'I', name: 'I', B: Theory.addVectorsBatch(INTERVALS.P1.a, CHORD.Maj7.B)},\r\n    II: { id: 'II', name: 'II', B: Theory.addVectorsBatch(INTERVALS.M2.a, CHORD.Maj7.B)},\r\n    III: { id: 'III', name: 'III', B: Theory.addVectorsBatch(INTERVALS.M3.a, CHORD.Maj7.B)},\r\n    IV: { id: 'IV', name: 'IV', B: Theory.addVectorsBatch(INTERVALS.P4.a, CHORD.Maj7.B)},\r\n    V: { id: 'V', name: 'V', B: Theory.addVectorsBatch(INTERVALS.P5.a, CHORD.Maj7.B)},\r\n    VI: { id: 'VI', name: 'VI', B: Theory.addVectorsBatch(INTERVALS.M6.a, CHORD.Maj7.B)},\r\n    VII: { id: 'VII', name: 'VII', B: Theory.addVectorsBatch(INTERVALS.M7.a, CHORD.Maj7.B)}\r\n};*/\r\n\r\nconst ROMAN_NUMERAL_VALUES = Object.values(ROMAN_NUMERAL);\r\n\r\nconst ALL_CONCEPT_PRESETS = { ...INTERVAL_PAIR, ...CHORD, ...SCALE, ...QUICK_MODE, ...ROMAN_NUMERAL };\r\nconst ALL_CONCEPT_PRESET_VALUES = [ ...ROMAN_NUMERAL_VALUES, ...INTERVAL_PAIR_VALUES, ...CHORD_VALUES, ...SCALE_VALUES, ...QUICK_MODE_VALUES];\r\n\n\n//# sourceURL=webpack:///./src/Concept.presets.js?");

/***/ }),

/***/ "./src/KeyCenter.js":
/*!**************************!*\
  !*** ./src/KeyCenter.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Identifier 'KEY_CENTERS' has already been declared (5:6)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| import * as Utils from './Utils';\\n| \\n> const KEY_CENTERS = {\\n|     NA: { id: 'NA', name: 'N/A', a: { p: 0, d: -1 } },\\n|     Ab: { id: 'Ab', name: 'Ab', a: { p: 8, d: 0 } },\");\n\n//# sourceURL=webpack:///./src/KeyCenter.js?");

/***/ }),

/***/ "./src/Source.js":
/*!***********************!*\
  !*** ./src/Source.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Identifier 'SCOPE' has already been declared (7:13)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| import api from './api';\\n| \\n> export const SCOPE = {\\n|     Concept: 'concept',\\n|     Progression: 'progression',\");\n\n//# sourceURL=webpack:///./src/Source.js?");

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Concept_presets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Concept.presets */ \"./src/Concept.presets.js\");\n/* harmony import */ var _Source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Source */ \"./src/Source.js\");\n/* harmony import */ var _Source__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Source__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _KeyCenter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KeyCenter */ \"./src/KeyCenter.js\");\n/* harmony import */ var _KeyCenter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_KeyCenter__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\nconst apiMap = {\r\n    pw: {\r\n        keyCenter: _KeyCenter__WEBPACK_IMPORTED_MODULE_2__,\r\n        concept: {\r\n            presets: _Concept_presets__WEBPACK_IMPORTED_MODULE_0__[\"ALL_CONCEPT_PRESETS\"]\r\n        },\r\n        source: _Source__WEBPACK_IMPORTED_MODULE_1__\r\n    }\r\n};\r\n\r\nconst api = (path, props) => {\r\n    const tree = path.split('/');\r\n    let node = apiMap;\r\n    let attr = null;\r\n    while(tree.length > 0) {\r\n        attr = tree.shift();\r\n        node = node[attr];\r\n    }\r\n    const value = typeof node === 'function' ? node(props) : node;\r\n    console.log('api', path, props, value);\r\n    return value;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (api);\n\n//# sourceURL=webpack:///./src/api.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n\r\n//import Utils from './Utils';\r\n//import * as Source from './Source';\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    //Source,\r\n    //Utils,\r\n    api: _api__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\n});\n\n//# sourceURL=webpack:///./src/index.js?");

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