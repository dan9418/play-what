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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Fretboard/Fretboard.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Fretboard/Fretboard.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"/* Fretboard */\\r\\n\\r\\n.fretboard {\\r\\n\\tdisplay: inline-block;\\r\\n\\tdisplay: inline-grid;\\r\\n\\twidth: 100%;\\r\\n\\tbackground-image: radial-gradient(ellipse, #E8DBB8 0%, #D0B27C 100%);\\r\\n\\tfont-size: 12px;\\r\\n\\ttext-align: center;\\r\\n\\tfont-family: sans-serif;\\r\\n\\tbox-sizing: border-box;\\r\\n}\\r\\n\\r\\n/* Fret */\\r\\n\\r\\n.fret {\\r\\n\\tdisplay: inline-flex;\\r\\n\\tjustify-content: center;\\r\\n\\talign-items: center;\\r\\n\\tposition: relative;\\r\\n\\tborder-right: 2px solid darkgrey;\\r\\n}\\r\\n\\r\\n.fret.open {\\r\\n\\tborder-right: 3px solid grey;\\r\\n}\\r\\n\\r\\n/* Used to maintain aspect ratio */\\r\\n\\r\\n.fret::before {\\r\\n\\tcontent: \\\"\\\";\\r\\n\\tdisplay: block;\\r\\n\\theight: 0;\\r\\n\\twidth: 0;\\r\\n\\tmargin-top: calc(1/2 * 100%);\\r\\n}\\r\\n\\r\\n/* Fret String */\\r\\n\\r\\n.fret-string {\\r\\n\\tbackground-color: grey;\\r\\n\\theight: 1px;\\r\\n\\twidth: 100%;\\r\\n}\\r\\n\\r\\n/* Fret Numbers */\\r\\n\\r\\n.fret-number {\\r\\n\\tposition: absolute;\\r\\n\\tbottom: 105%;\\r\\n}\\r\\n\\r\\n/* Fret Dots */\\r\\n\\r\\n.fret-dots {\\r\\n\\tposition: absolute;\\r\\n\\ttop: 100%;\\r\\n\\tfont-size: 16px;\\r\\n\\twhite-space: nowrap;\\r\\n}\\r\\n\\r\\n.fret-number, .fret-dots {\\r\\n\\tcolor: #555;\\r\\n}\\r\\n\\r\\n/* Fret Label */\\r\\n\\r\\n.fret-label {\\r\\n\\tposition: absolute;\\r\\n\\twidth: 90%;\\r\\n\\theight: 90%;\\r\\n\\tdisplay: flex;\\r\\n\\tjustify-content: center;\\r\\n\\talign-items: center;\\r\\n\\tborder-radius: 100%;\\r\\n}\\r\\n\\r\\n.fret-label:hover {\\r\\n\\twidth: 100%;\\r\\n\\theight: 100%;\\r\\n\\tcursor: pointer;\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/Fretboard/Fretboard.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    for (var i = 0; i < modules.length; i++) {\n      var item = [].concat(modules[i]);\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/Chart/Chart.js":
/*!****************************!*\
  !*** ./src/Chart/Chart.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\src\\\\Chart\\\\Chart.js: Unexpected token (13:12)\\n\\n  11 |     const sections = chart.sections.map((s, i) => {\\n  12 |         return (\\n> 13 |             <div className=\\\"section\\\">\\n     |             ^\\n  14 |                 <List list={s.concepts} viewer={viewer} name={`Section ${i}`}/>\\n  15 |             </div>\\n  16 |         );\\n    at Parser.raise (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6983:17)\\n    at Parser.unexpected (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8376:16)\\n    at Parser.parseExprAtom (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9637:20)\\n    at Parser.parseExprSubscripts (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9213:23)\\n    at Parser.parseMaybeUnary (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9193:21)\\n    at Parser.parseExprOps (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9059:23)\\n    at Parser.parseMaybeConditional (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9032:23)\\n    at Parser.parseMaybeAssign (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8978:21)\\n    at Parser.parseParenAndDistinguishExpression (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9775:28)\\n    at Parser.parseExprAtom (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9558:21)\\n    at Parser.parseExprSubscripts (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9213:23)\\n    at Parser.parseMaybeUnary (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9193:21)\\n    at Parser.parseExprOps (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9059:23)\\n    at Parser.parseMaybeConditional (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9032:23)\\n    at Parser.parseMaybeAssign (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8978:21)\\n    at Parser.parseExpression (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8928:23)\\n    at Parser.parseReturnStatement (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11035:28)\\n    at Parser.parseStatementContent (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10714:21)\\n    at Parser.parseStatement (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10666:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11242:25)\\n    at Parser.parseBlockBody (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11229:10)\\n    at Parser.parseBlock (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11213:10)\\n    at Parser.parseFunctionBody (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10232:24)\\n    at Parser.parseArrowExpression (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10173:10)\\n    at Parser.parseParenAndDistinguishExpression (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9799:12)\\n    at Parser.parseExprAtom (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9558:21)\\n    at Parser.parseExprSubscripts (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9213:23)\\n    at Parser.parseMaybeUnary (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9193:21)\\n    at Parser.parseExprOps (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9059:23)\\n    at Parser.parseMaybeConditional (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9032:23)\");\n\n//# sourceURL=webpack:///./src/Chart/Chart.js?");

/***/ }),

/***/ "./src/Chart/_module.js":
/*!******************************!*\
  !*** ./src/Chart/_module.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chart */ \"./src/Chart/Chart.js\");\n/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Chart__WEBPACK_IMPORTED_MODULE_1__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'play-what'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  component: _Chart__WEBPACK_IMPORTED_MODULE_1___default.a\n});\n\n//# sourceURL=webpack:///./src/Chart/_module.js?");

/***/ }),

/***/ "./src/Explorer/Explorer.js":
/*!**********************************!*\
  !*** ./src/Explorer/Explorer.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\src\\\\Explorer\\\\Explorer.js: Unexpected token (34:8)\\n\\n  32 | \\n  33 |     return (\\n> 34 |         <div className='out'>\\n     |         ^\\n  35 |             <Concept\\n  36 |                 name={name}\\n  37 |                 keyCenterData={keyCenterData}\\n    at Parser.raise (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6983:17)\\n    at Parser.unexpected (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8376:16)\\n    at Parser.parseExprAtom (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9637:20)\\n    at Parser.parseExprSubscripts (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9213:23)\\n    at Parser.parseMaybeUnary (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9193:21)\\n    at Parser.parseExprOps (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9059:23)\\n    at Parser.parseMaybeConditional (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9032:23)\\n    at Parser.parseMaybeAssign (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8978:21)\\n    at Parser.parseParenAndDistinguishExpression (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9775:28)\\n    at Parser.parseExprAtom (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9558:21)\\n    at Parser.parseExprSubscripts (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9213:23)\\n    at Parser.parseMaybeUnary (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9193:21)\\n    at Parser.parseExprOps (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9059:23)\\n    at Parser.parseMaybeConditional (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9032:23)\\n    at Parser.parseMaybeAssign (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8978:21)\\n    at Parser.parseExpression (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8928:23)\\n    at Parser.parseReturnStatement (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11035:28)\\n    at Parser.parseStatementContent (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10714:21)\\n    at Parser.parseStatement (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10666:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11242:25)\\n    at Parser.parseBlockBody (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11229:10)\\n    at Parser.parseBlock (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11213:10)\\n    at Parser.parseFunctionBody (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10232:24)\\n    at Parser.parseArrowExpression (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10173:10)\\n    at Parser.parseParenAndDistinguishExpression (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9799:12)\\n    at Parser.parseExprAtom (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9558:21)\\n    at Parser.parseExprSubscripts (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9213:23)\\n    at Parser.parseMaybeUnary (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9193:21)\\n    at Parser.parseExprOps (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9059:23)\\n    at Parser.parseMaybeConditional (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9032:23)\");\n\n//# sourceURL=webpack:///./src/Explorer/Explorer.js?");

/***/ }),

/***/ "./src/Explorer/_module.js":
/*!*********************************!*\
  !*** ./src/Explorer/_module.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Explorer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Explorer */ \"./src/Explorer/Explorer.js\");\n/* harmony import */ var _Explorer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Explorer__WEBPACK_IMPORTED_MODULE_1__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'play-what'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  component: _Explorer__WEBPACK_IMPORTED_MODULE_1___default.a\n});\n\n//# sourceURL=webpack:///./src/Explorer/_module.js?");

/***/ }),

/***/ "./src/Fretboard/Fretboard.api.jsx":
/*!*****************************************!*\
  !*** ./src/Fretboard/Fretboard.api.jsx ***!
  \*****************************************/
/*! exports provided: DOTTED_FRET_INDICES, STANDARD_TUNING, getDotsForFret */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DOTTED_FRET_INDICES\", function() { return DOTTED_FRET_INDICES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STANDARD_TUNING\", function() { return STANDARD_TUNING; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDotsForFret\", function() { return getDotsForFret; });\nconst DOTTED_FRET_INDICES = [true, false, false, true, false, true, false, true, false, true, false, false];\nconst STANDARD_TUNING = [16, 11, 7, 2, -3, 8]; // e B G D A E\n\nconst getDotsForFret = fretNumber => {\n  let mod = fretNumber % 12;\n  if (mod === 0) return '• •';else if (DOTTED_FRET_INDICES[mod]) return '•';\n  return '';\n};\n\n//# sourceURL=webpack:///./src/Fretboard/Fretboard.api.jsx?");

/***/ }),

/***/ "./src/Fretboard/Fretboard.css":
/*!*************************************!*\
  !*** ./src/Fretboard/Fretboard.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./Fretboard.css */ \"./node_modules/css-loader/dist/cjs.js!./src/Fretboard/Fretboard.css\");\ncontent = content.__esModule ? content.default : content;\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/Fretboard/Fretboard.css?");

/***/ }),

/***/ "./src/Fretboard/Fretboard.defaults.js":
/*!*********************************************!*\
  !*** ./src/Fretboard/Fretboard.defaults.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'play-what'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  fretRange: [0, 12],\n  tuning: [16, 11, 7, 2, -3, -8],\n  colorFn: !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'play-what'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).api.Vector.colorBy({\n    type: 'degree'\n  }),\n  textFn: !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'play-what'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).api.Vector.textBy({\n    type: 'degree'\n  }),\n  reduced: true,\n  intervals: [],\n  keyCenter: null\n});\n\n//# sourceURL=webpack:///./src/Fretboard/Fretboard.defaults.js?");

/***/ }),

/***/ "./src/Fretboard/Fretboard.jsx":
/*!*************************************!*\
  !*** ./src/Fretboard/Fretboard.jsx ***!
  \*************************************/
/*! exports provided: Fret, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Fret\", function() { return Fret; });\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'play-what'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Label_Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Label/Label */ \"./src/Label/Label.js\");\n/* harmony import */ var _Label_Label__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Label_Label__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Fretboard_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Fretboard.api */ \"./src/Fretboard/Fretboard.api.jsx\");\n/* harmony import */ var _Fretboard_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Fretboard.css */ \"./src/Fretboard/Fretboard.css\");\n/* harmony import */ var _Fretboard_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Fretboard_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Fretboard_defaults__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Fretboard.defaults */ \"./src/Fretboard/Fretboard.defaults.js\");\n\n\n\n\n\n\nconst FRET_SIZE_RATIO = Math.pow(1 / 2, 1 / 12);\nconst Fret = ({\n  context,\n  colorFn,\n  textFn\n}) => {\n  const labelProps = {\n    userStyles: colorFn(context),\n    text: textFn(context)\n  };\n  let classes = ['fret'];\n  if (context.fretIndex === 0) classes.push('open');\n  return react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n    className: classes.join(' ')\n  },  false && false, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n    className: \"fret-string\"\n  }), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](_Label_Label__WEBPACK_IMPORTED_MODULE_2___default.a, labelProps),  false && false);\n};\n\nconst getFrets = props => {\n  const {\n    fretRange,\n    tuning,\n    keyCenter,\n    intervals,\n    colorFn,\n    textFn,\n    reduced\n  } = props; //let min = config.strings.reduce((prev, current) => (prev.tuning < current.tuning) ? prev : current).tuning + config.fretLow;\n  //let max = config.strings.reduce((prev, current) => (prev.tuning > current.tuning) ? prev : current).tuning + config.fretHigh;\n\n  const allFrets = [];\n\n  for (let s = 0; s < tuning.length; s++) {\n    for (let f = fretRange[0]; f <= fretRange[1]; f++) {\n      const noteIndex = tuning[s] + f;\n      const [note, podIndex] = !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'play-what'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).api.Matrix.findVectorWithPitch({\n        matrix: intervals,\n        pitch: noteIndex,\n        pitchClass: reduced\n      });\n      const interval = intervals[podIndex];\n      const ctx = {\n        tuning,\n        stringIndex: s,\n        fretRange,\n        fretIndex: f,\n        noteIndex,\n        pod: interval,\n        podIndex\n      };\n      allFrets.push(react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](Fret, {\n        key: `s${s}-f${f}`,\n        context: ctx,\n        colorFn: colorFn,\n        textFn: textFn\n      }));\n    }\n  }\n\n  return allFrets;\n};\n\nconst getFretRatios = numFrets => {\n  let ratios = [];\n\n  for (let i = 1; i <= numFrets; i++) {\n    ratios.push(i <= 1 ? 1 : ratios[i - 2] * FRET_SIZE_RATIO);\n  }\n\n  return ratios;\n};\n\nconst Fretboard = ({\n  style,\n  ...userProps\n}) => {\n  const props = Object.assign({}, _Fretboard_defaults__WEBPACK_IMPORTED_MODULE_5__[\"default\"], userProps); // Calculate fretboard dimensions\n\n  const numFrets = props.fretRange[1] - props.fretRange[0] + 1;\n  const numStrings = props.tuning.length;\n  const gridTemplateColumns = getFretRatios(numFrets).map(n => n + 'fr').join(' ');\n  const gridTemplateRows = `repeat(${numStrings}, 1fr)`;\n  const fretboardStyles = {\n    gridTemplateColumns,\n    gridTemplateRows,\n    ...style\n  };\n  return react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n    className: \"fretboard\",\n    style: fretboardStyles\n  }, getFrets(props));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fretboard);\n\n//# sourceURL=webpack:///./src/Fretboard/Fretboard.jsx?");

/***/ }),

/***/ "./src/Fretboard/_module.js":
/*!**********************************!*\
  !*** ./src/Fretboard/_module.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Fretboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fretboard */ \"./src/Fretboard/Fretboard.jsx\");\n/* harmony import */ var _Fretboard_defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fretboard.defaults */ \"./src/Fretboard/Fretboard.defaults.js\");\n/* harmony import */ var _Fretboard_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Fretboard.api */ \"./src/Fretboard/Fretboard.api.jsx\");\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'play-what'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\nconst Fretboard = {\n  component: _Fretboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fretboard);\n\n//# sourceURL=webpack:///./src/Fretboard/_module.js?");

/***/ }),

/***/ "./src/Label/Label.js":
/*!****************************!*\
  !*** ./src/Label/Label.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\src\\\\Label\\\\Label.js: Unexpected token (22:8)\\n\\n  20 | \\n  21 |     return (\\n> 22 |         <div className='label' style={styles}>\\n     |         ^\\n  23 |             {text}\\n  24 |         </div>\\n  25 |     );\\n    at Parser.raise (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6983:17)\\n    at Parser.unexpected (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8376:16)\\n    at Parser.parseExprAtom (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9637:20)\\n    at Parser.parseExprSubscripts (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9213:23)\\n    at Parser.parseMaybeUnary (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9193:21)\\n    at Parser.parseExprOps (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9059:23)\\n    at Parser.parseMaybeConditional (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9032:23)\\n    at Parser.parseMaybeAssign (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8978:21)\\n    at Parser.parseParenAndDistinguishExpression (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9775:28)\\n    at Parser.parseExprAtom (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9558:21)\\n    at Parser.parseExprSubscripts (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9213:23)\\n    at Parser.parseMaybeUnary (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9193:21)\\n    at Parser.parseExprOps (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9059:23)\\n    at Parser.parseMaybeConditional (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9032:23)\\n    at Parser.parseMaybeAssign (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8978:21)\\n    at Parser.parseExpression (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8928:23)\\n    at Parser.parseReturnStatement (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11035:28)\\n    at Parser.parseStatementContent (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10714:21)\\n    at Parser.parseStatement (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10666:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11242:25)\\n    at Parser.parseBlockBody (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11229:10)\\n    at Parser.parseBlock (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11213:10)\\n    at Parser.parseFunctionBody (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10232:24)\\n    at Parser.parseArrowExpression (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10173:10)\\n    at Parser.parseParenAndDistinguishExpression (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9799:12)\\n    at Parser.parseExprAtom (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9558:21)\\n    at Parser.parseExprSubscripts (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9213:23)\\n    at Parser.parseMaybeUnary (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9193:21)\\n    at Parser.parseExprOps (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9059:23)\\n    at Parser.parseMaybeConditional (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9032:23)\");\n\n//# sourceURL=webpack:///./src/Label/Label.js?");

/***/ }),

/***/ "./src/List/List.js":
/*!**************************!*\
  !*** ./src/List/List.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\src\\\\List\\\\List.js: Unexpected token (14:12)\\n\\n  12 |         const { a: keyCenter, B: intervals, name } = c;\\n  13 |         return (\\n> 14 |             <>\\n     |             ^\\n  15 |                 <h4>{name}</h4>\\n  16 |                 <div className=\\\"subcard\\\">\\n  17 |                     <Comp {...viewer.props} keyCenter={keyCenter} intervals={intervals} name={name} key={i} />\\n    at Parser.raise (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6983:17)\\n    at Parser.unexpected (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8376:16)\\n    at Parser.parseExprAtom (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9637:20)\\n    at Parser.parseExprSubscripts (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9213:23)\\n    at Parser.parseMaybeUnary (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9193:21)\\n    at Parser.parseExprOps (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9059:23)\\n    at Parser.parseMaybeConditional (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9032:23)\\n    at Parser.parseMaybeAssign (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8978:21)\\n    at Parser.parseParenAndDistinguishExpression (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9775:28)\\n    at Parser.parseExprAtom (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9558:21)\\n    at Parser.parseExprSubscripts (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9213:23)\\n    at Parser.parseMaybeUnary (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9193:21)\\n    at Parser.parseExprOps (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9059:23)\\n    at Parser.parseMaybeConditional (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9032:23)\\n    at Parser.parseMaybeAssign (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8978:21)\\n    at Parser.parseExpression (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8928:23)\\n    at Parser.parseReturnStatement (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11035:28)\\n    at Parser.parseStatementContent (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10714:21)\\n    at Parser.parseStatement (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10666:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11242:25)\\n    at Parser.parseBlockBody (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11229:10)\\n    at Parser.parseBlock (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11213:10)\\n    at Parser.parseFunctionBody (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10232:24)\\n    at Parser.parseArrowExpression (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10173:10)\\n    at Parser.parseParenAndDistinguishExpression (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9799:12)\\n    at Parser.parseExprAtom (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9558:21)\\n    at Parser.parseExprSubscripts (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9213:23)\\n    at Parser.parseMaybeUnary (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9193:21)\\n    at Parser.parseExprOps (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9059:23)\\n    at Parser.parseMaybeConditional (C:\\\\_dev\\\\play-what\\\\packages\\\\react\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9032:23)\");\n\n//# sourceURL=webpack:///./src/List/List.js?");

/***/ }),

/***/ "./src/List/_module.js":
/*!*****************************!*\
  !*** ./src/List/_module.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List */ \"./src/List/List.js\");\n/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_List__WEBPACK_IMPORTED_MODULE_1__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'play-what'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  component: _List__WEBPACK_IMPORTED_MODULE_1___default.a\n});\n\n//# sourceURL=webpack:///./src/List/_module.js?");

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! exports provided: Fretboard, Explorer, Chart, List, element */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Fretboard\", function() { return Fretboard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Explorer\", function() { return Explorer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Chart\", function() { return Chart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"List\", function() { return List; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"element\", function() { return element; });\n/* harmony import */ var _Fretboard_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fretboard/_module */ \"./src/Fretboard/_module.js\");\n/* harmony import */ var _Explorer_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Explorer/_module */ \"./src/Explorer/_module.js\");\n/* harmony import */ var _Chart_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chart/_module */ \"./src/Chart/_module.js\");\n/* harmony import */ var _List_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./List/_module */ \"./src/List/_module.js\");\n\n\n\n\nconst Fretboard = _Fretboard_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nconst Explorer = _Explorer_module__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nconst Chart = _Chart_module__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nconst List = _List_module__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\nconst element = {\n  from: ({\n    component,\n    children,\n    props\n  }) => {\n    if (typeof component !== 'string') throw 'only string component defs allowed';\n    return {\n      component,\n      children,\n      props\n    };\n  }\n};\n\n//# sourceURL=webpack:///./src/api.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  PW_React: { ..._api__WEBPACK_IMPORTED_MODULE_0__\n  }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ })

/******/ });