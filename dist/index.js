/*!
 * 
 *  maishu-image-components v1.6.0
 * 
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("maishu-toolkit"), require("maishu-ui-toolkit"), require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["maishu-toolkit", "maishu-ui-toolkit", "react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["image-components"] = factory(require("maishu-toolkit"), require("maishu-ui-toolkit"), require("react"), require("react-dom"));
	else
		root["image-components"] = factory(root["maishu-toolkit"], root["maishu-ui-toolkit"], root["react"], root["react-dom"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_maishu_toolkit__, __WEBPACK_EXTERNAL_MODULE_maishu_ui_toolkit__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./out/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./content/data-source-dialog.less":
/*!*****************************************!*\
  !*** ./content/data-source-dialog.less ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_data_source_dialog_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./data-source-dialog.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./content/data-source-dialog.less");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_data_source_dialog_less__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_data_source_dialog_less__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./content/image-manager.less":
/*!************************************!*\
  !*** ./content/image-manager.less ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_image_manager_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./image-manager.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./content/image-manager.less");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_image_manager_less__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_image_manager_less__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./content/image-thumber.less":
/*!************************************!*\
  !*** ./content/image-thumber.less ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_image_thumber_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./image-thumber.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./content/image-thumber.less");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_image_thumber_less__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_image_thumber_less__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./content/image-upload.less":
/*!***********************************!*\
  !*** ./content/image-upload.less ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_image_upload_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./image-upload.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./content/image-upload.less");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_image_upload_less__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_image_upload_less__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/canvas/browser.js":
/*!****************************************!*\
  !*** ./node_modules/canvas/browser.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* globals document, ImageData */

const parseFont = __webpack_require__(/*! ./lib/parse-font */ "./node_modules/canvas/lib/parse-font.js")

exports.parseFont = parseFont

exports.createCanvas = function (width, height) {
  return Object.assign(document.createElement('canvas'), { width: width, height: height })
}

exports.createImageData = function (array, width, height) {
  // Browser implementation of ImageData looks at the number of arguments passed
  switch (arguments.length) {
    case 0: return new ImageData()
    case 1: return new ImageData(array)
    case 2: return new ImageData(array, width)
    default: return new ImageData(array, width, height)
  }
}

exports.loadImage = function (src, options) {
  return new Promise(function (resolve, reject) {
    const image = Object.assign(document.createElement('img'), options)

    function cleanup () {
      image.onload = null
      image.onerror = null
    }

    image.onload = function () { cleanup(); resolve(image) }
    image.onerror = function () { cleanup(); reject(new Error('Failed to load the image "' + src + '"')) }

    image.src = src
  })
}


/***/ }),

/***/ "./node_modules/canvas/lib/parse-font.js":
/*!***********************************************!*\
  !*** ./node_modules/canvas/lib/parse-font.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Font RegExp helpers.
 */

const weights = 'bold|bolder|lighter|[1-9]00'
  , styles = 'italic|oblique'
  , variants = 'small-caps'
  , stretches = 'ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded'
  , units = 'px|pt|pc|in|cm|mm|%|em|ex|ch|rem|q'
  , string = '\'([^\']+)\'|"([^"]+)"|[\\w\\s-]+'

// [ [ <‘font-style’> || <font-variant-css21> || <‘font-weight’> || <‘font-stretch’> ]?
//    <‘font-size’> [ / <‘line-height’> ]? <‘font-family’> ]
// https://drafts.csswg.org/css-fonts-3/#font-prop
const weightRe = new RegExp('(' + weights + ') +', 'i')
const styleRe = new RegExp('(' + styles + ') +', 'i')
const variantRe = new RegExp('(' + variants + ') +', 'i')
const stretchRe = new RegExp('(' + stretches + ') +', 'i')
const sizeFamilyRe = new RegExp(
  '([\\d\\.]+)(' + units + ') *'
  + '((?:' + string + ')( *, *(?:' + string + '))*)')

/**
 * Cache font parsing.
 */

const cache = {}

const defaultHeight = 16 // pt, common browser default

/**
 * Parse font `str`.
 *
 * @param {String} str
 * @return {Object} Parsed font. `size` is in device units. `unit` is the unit
 *   appearing in the input string.
 * @api private
 */

module.exports = function (str) {
  // Cached
  if (cache[str]) return cache[str]

  // Try for required properties first.
  const sizeFamily = sizeFamilyRe.exec(str)
  if (!sizeFamily) return // invalid

  // Default values and required properties
  const font = {
    weight: 'normal',
    style: 'normal',
    stretch: 'normal',
    variant: 'normal',
    size: parseFloat(sizeFamily[1]),
    unit: sizeFamily[2],
    family: sizeFamily[3].replace(/["']/g, '').replace(/ *, */g, ',')
  }

  // Optional, unordered properties.
  let weight, style, variant, stretch
  // Stop search at `sizeFamily.index`
  let substr = str.substring(0, sizeFamily.index)
  if ((weight = weightRe.exec(substr))) font.weight = weight[1]
  if ((style = styleRe.exec(substr))) font.style = style[1]
  if ((variant = variantRe.exec(substr))) font.variant = variant[1]
  if ((stretch = stretchRe.exec(substr))) font.stretch = stretch[1]

  // Convert to device units. (`font.unit` is the original unit)
  // TODO: ch, ex
  switch (font.unit) {
    case 'pt':
      font.size /= 0.75
      break
    case 'pc':
      font.size *= 16
      break
    case 'in':
      font.size *= 96
      break
    case 'cm':
      font.size *= 96.0 / 2.54
      break
    case 'mm':
      font.size *= 96.0 / 25.4
      break
    case '%':
      // TODO disabled because existing unit tests assume 100
      // font.size *= defaultHeight / 100 / 0.75
      break
    case 'em':
    case 'rem':
      font.size *= defaultHeight / 0.75
      break
    case 'q':
      font.size *= 96 / 25.4 / 4
      break
  }

  return (cache[str] = font)
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./content/data-source-dialog.less":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./content/data-source-dialog.less ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".data-source-dialog .modal-footer .pagination {\n  float: left;\n  margin: 0;\n}\n.data-source-dialog .modal-body {\n  min-height: 300px;\n}\n.data-source-dialog .empty {\n  text-align: center;\n  padding: 120px;\n  width: 100%;\n}\n", "",{"version":3,"sources":["webpack://./content/data-source-dialog.less"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,SAAS;AACX;AACA;EACE,iBAAiB;AACnB;AACA;EACE,kBAAkB;EAClB,cAAc;EACd,WAAW;AACb","sourcesContent":[".data-source-dialog .modal-footer .pagination {\n  float: left;\n  margin: 0;\n}\n.data-source-dialog .modal-body {\n  min-height: 300px;\n}\n.data-source-dialog .empty {\n  text-align: center;\n  padding: 120px;\n  width: 100%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./content/image-manager.less":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./content/image-manager.less ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".image-manager {\n  z-index: 800;\n}\n.image-manager .modal-body {\n  clear: both;\n  display: table;\n  width: 100%;\n}\n.image-manager .modal-body .col-xs-2 {\n  margin-top: 6px;\n  margin-bottom: 6px;\n}\n.image-manager .modal-footer .pagination {\n  margin: 0;\n}\n.image-manager .modal-header h4 {\n  margin: 0;\n}\n.image-manager .image-thumber {\n  margin: 10px;\n  float: left;\n  position: relative;\n  height: 120px;\n  width: 120px;\n  cursor: pointer;\n}\n.image-manager .image-upload {\n  margin: 10px;\n  float: left;\n}\n", "",{"version":3,"sources":["webpack://./content/image-manager.less"],"names":[],"mappings":"AAAA;EACE,YAAY;AACd;AACA;EACE,WAAW;EACX,cAAc;EACd,WAAW;AACb;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,SAAS;AACX;AACA;EACE,SAAS;AACX;AACA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,eAAe;AACjB;AACA;EACE,YAAY;EACZ,WAAW;AACb","sourcesContent":[".image-manager {\n  z-index: 800;\n}\n.image-manager .modal-body {\n  clear: both;\n  display: table;\n  width: 100%;\n}\n.image-manager .modal-body .col-xs-2 {\n  margin-top: 6px;\n  margin-bottom: 6px;\n}\n.image-manager .modal-footer .pagination {\n  margin: 0;\n}\n.image-manager .modal-header h4 {\n  margin: 0;\n}\n.image-manager .image-thumber {\n  margin: 10px;\n  float: left;\n  position: relative;\n  height: 120px;\n  width: 120px;\n  cursor: pointer;\n}\n.image-manager .image-upload {\n  margin: 10px;\n  float: left;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./content/image-thumber.less":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./content/image-thumber.less ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".image-thumber {\n  position: relative;\n}\n.image-thumber .item {\n  border: solid 1px #ccc;\n  height: calc(100% - 2px);\n}\n.image-thumber .item .bottom {\n  display: block;\n  overflow: hidden;\n  white-space: nowrap;\n  -webkit-text-overflow: ellipsis;\n  -ms-text-overflow: ellipsis;\n  -o-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  position: absolute;\n  bottom: 0;\n  padding: 4px 8px 0px 8px;\n  font-size: 12px;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.55);\n  color: white;\n  width: calc(100% - 2px);\n  height: 24px;\n}\n.image-thumber .item .bottom button {\n  color: white;\n}\n.image-thumber .item .top {\n  position: absolute;\n  height: 18px;\n  margin-top: -18px;\n  padding-top: 18px;\n  color: white;\n  font-size: 12px;\n  font-weight: bold;\n  text-align: right;\n  width: calc(100% - 2px);\n}\n.image-thumber .item.selected {\n  border-color: blue;\n}\n.image-thumber .item.selected .triangle {\n  position: relative;\n  top: 19px;\n  left: calc(100% - 19px);\n  width: 20px;\n  height: 20px;\n  margin-top: -40px;\n  background: transparent;\n  border-top: 20px solid transparent;\n  border-bottom: 20px solid blue;\n  border-left: 20px solid transparent;\n  border-right: 20px solid transparent;\n  transform: rotate(45deg);\n}\n.image-thumber .item.selected:hover .remove {\n  display: none;\n}\n.image-thumber .item .remove {\n  display: none;\n}\n.image-thumber .item:hover .remove {\n  position: relative;\n  left: calc(100% - 20px);\n  top: 20px;\n  width: 20px;\n  height: 20px;\n  border-radius: 10px;\n  margin-top: -20px;\n  display: block;\n  background-color: rgba(0, 0, 0, 0.55);\n}\n.image-thumber .item:hover .remove i {\n  color: white;\n}\n.image-thumber .item .disabled {\n  position: absolute;\n  width: calc(100% - 2px);\n  height: calc(100% - 2px);\n  background-color: gray;\n  top: 0px;\n  opacity: 0.3;\n}\n", "",{"version":3,"sources":["webpack://./content/image-thumber.less"],"names":[],"mappings":"AAAA;EACE,kBAAkB;AACpB;AACA;EACE,sBAAsB;EACtB,wBAAwB;AAC1B;AACA;EACE,cAAc;EACd,gBAAgB;EAChB,mBAAmB;EACnB,+BAA+B;EAC/B,2BAA2B;EAC3B,0BAA0B;EAC1B,uBAAuB;EACvB,kBAAkB;EAClB,SAAS;EACT,wBAAwB;EACxB,eAAe;EACf,kBAAkB;EAClB,qCAAqC;EACrC,YAAY;EACZ,uBAAuB;EACvB,YAAY;AACd;AACA;EACE,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,iBAAiB;EACjB,uBAAuB;AACzB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,uBAAuB;EACvB,kCAAkC;EAClC,8BAA8B;EAC9B,mCAAmC;EACnC,oCAAoC;EACpC,wBAAwB;AAC1B;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,SAAS;EACT,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;EACjB,cAAc;EACd,qCAAqC;AACvC;AACA;EACE,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,wBAAwB;EACxB,sBAAsB;EACtB,QAAQ;EACR,YAAY;AACd","sourcesContent":[".image-thumber {\n  position: relative;\n}\n.image-thumber .item {\n  border: solid 1px #ccc;\n  height: calc(100% - 2px);\n}\n.image-thumber .item .bottom {\n  display: block;\n  overflow: hidden;\n  white-space: nowrap;\n  -webkit-text-overflow: ellipsis;\n  -ms-text-overflow: ellipsis;\n  -o-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  position: absolute;\n  bottom: 0;\n  padding: 4px 8px 0px 8px;\n  font-size: 12px;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.55);\n  color: white;\n  width: calc(100% - 2px);\n  height: 24px;\n}\n.image-thumber .item .bottom button {\n  color: white;\n}\n.image-thumber .item .top {\n  position: absolute;\n  height: 18px;\n  margin-top: -18px;\n  padding-top: 18px;\n  color: white;\n  font-size: 12px;\n  font-weight: bold;\n  text-align: right;\n  width: calc(100% - 2px);\n}\n.image-thumber .item.selected {\n  border-color: blue;\n}\n.image-thumber .item.selected .triangle {\n  position: relative;\n  top: 19px;\n  left: calc(100% - 19px);\n  width: 20px;\n  height: 20px;\n  margin-top: -40px;\n  background: transparent;\n  border-top: 20px solid transparent;\n  border-bottom: 20px solid blue;\n  border-left: 20px solid transparent;\n  border-right: 20px solid transparent;\n  transform: rotate(45deg);\n}\n.image-thumber .item.selected:hover .remove {\n  display: none;\n}\n.image-thumber .item .remove {\n  display: none;\n}\n.image-thumber .item:hover .remove {\n  position: relative;\n  left: calc(100% - 20px);\n  top: 20px;\n  width: 20px;\n  height: 20px;\n  border-radius: 10px;\n  margin-top: -20px;\n  display: block;\n  background-color: rgba(0, 0, 0, 0.55);\n}\n.image-thumber .item:hover .remove i {\n  color: white;\n}\n.image-thumber .item .disabled {\n  position: absolute;\n  width: calc(100% - 2px);\n  height: calc(100% - 2px);\n  background-color: gray;\n  top: 0px;\n  opacity: 0.3;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./content/image-upload.less":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./content/image-upload.less ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".image-upload .item {\n  border: 1px solid #cccccc;\n  text-align: center;\n  height: 120px;\n  width: 120px;\n}\n.image-upload input[type=\"file\"] {\n  opacity: 0;\n  position: relative;\n  height: 120px;\n  width: 120px;\n  top: -100px;\n  cursor: pointer;\n}\n.image-upload i {\n  margin-top: 20px;\n}\n", "",{"version":3,"sources":["webpack://./content/image-upload.less"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,aAAa;EACb,YAAY;AACd;AACA;EACE,UAAU;EACV,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,WAAW;EACX,eAAe;AACjB;AACA;EACE,gBAAgB;AAClB","sourcesContent":[".image-upload .item {\n  border: 1px solid #cccccc;\n  text-align: center;\n  height: 120px;\n  width: 120px;\n}\n.image-upload input[type=\"file\"] {\n  opacity: 0;\n  position: relative;\n  height: 120px;\n  width: 120px;\n  top: -100px;\n  cursor: pointer;\n}\n.image-upload i {\n  margin-top: 20px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/maishu-chitu-service/dist/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/maishu-chitu-service/dist/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*!
 * ~
 *  maishu-chitu-service v1.32.0
 *  
 *  Copyright (c) 2016-2018, shu mai <ansiboy@163.com>
 *  Licensed under the MIT License.
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(typeof window === 'undefined' ? global : window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./out/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./out/callback.js":
/*!*************************!*\
  !*** ./out/callback.js ***!
  \*************************/
/*! exports provided: Callback, Callbacks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Callback", function() { return Callback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Callbacks", function() { return Callbacks; });
class Callback {
    constructor() {
        this.funcs = new Array();
    }
    add(func) {
        this.funcs.push(func);
    }
    remove(func) {
        this.funcs = this.funcs.filter(o => o != func);
    }
    fire(...args) {
        this.funcs.forEach(o => o(...args));
    }
}
function Callbacks() {
    return new Callback();
}
//# sourceMappingURL=callback.js.map

/***/ }),

/***/ "./out/errors.js":
/*!***********************!*\
  !*** ./out/errors.js ***!
  \***********************/
/*! exports provided: Errors, errors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Errors", function() { return Errors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errors", function() { return errors; });
class Errors {
    unexpectedNullValue(name) {
        let msg = `variable ${name} is unexpected null value.`;
        return new Error(msg);
    }
    parseJSONFail(text) {
        let msg = `Parse json string fail:\r\n${text}`;
        return new Error(msg);
    }
}
let errors = new Errors();
//# sourceMappingURL=errors.js.map

/***/ }),

/***/ "./out/index.js":
/*!**********************!*\
  !*** ./out/index.js ***!
  \**********************/
/*! exports provided: Service, formatData, Callback, Callbacks, ValueStore, LocalValueStore, CookieValueStore, StatusCodes, StatusCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service */ "./out/service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return _service__WEBPACK_IMPORTED_MODULE_0__["Service"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatData", function() { return _service__WEBPACK_IMPORTED_MODULE_0__["formatData"]; });

/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./callback */ "./out/callback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Callback", function() { return _callback__WEBPACK_IMPORTED_MODULE_1__["Callback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Callbacks", function() { return _callback__WEBPACK_IMPORTED_MODULE_1__["Callbacks"]; });

/* harmony import */ var _value_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./value-store */ "./out/value-store.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValueStore", function() { return _value_store__WEBPACK_IMPORTED_MODULE_2__["ValueStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalValueStore", function() { return _value_store__WEBPACK_IMPORTED_MODULE_2__["LocalValueStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CookieValueStore", function() { return _value_store__WEBPACK_IMPORTED_MODULE_2__["CookieValueStore"]; });

/* harmony import */ var _status_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./status-code */ "./out/status-code.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatusCodes", function() { return _status_code__WEBPACK_IMPORTED_MODULE_3__["StatusCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatusCode", function() { return _status_code__WEBPACK_IMPORTED_MODULE_3__["StatusCode"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./out/service.js":
/*!************************!*\
  !*** ./out/service.js ***!
  \************************/
/*! exports provided: Service, formatData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatData", function() { return formatData; });
/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./callback */ "./out/callback.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors */ "./out/errors.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class Service {
    constructor(handleError) {
        this.error = Object(_callback__WEBPACK_IMPORTED_MODULE_0__["Callbacks"])();
        this.headers = {};
        if (handleError) {
            this.error.add((sender, err) => {
                handleError(err, this);
            });
        }
    }
    ajax(url, options) {
        if (options === undefined)
            options = {};
        let data = options.data;
        let method = options.method;
        let headers = Object.assign({}, Service.headers, this.headers, options.headers || {});
        let body;
        if (data != null) {
            let is_json = (headers['content-type'] || '').indexOf('json') >= 0;
            if (is_json) {
                body = JSON.stringify(data);
            }
            else {
                body = new URLSearchParams();
                for (let key in data) {
                    body.append(key, data[key]);
                }
            }
        }
        return new Promise((reslove, reject) => {
            let options = { headers: headers, body, method };
            let timeId;
            if (options == null)
                throw _errors__WEBPACK_IMPORTED_MODULE_1__["errors"].unexpectedNullValue('options');
            if (method == 'get') {
                timeId = setTimeout(() => {
                    console.warn(`timeout url: ${url}`);
                    let err = new Error(); //new AjaxError(options.method);
                    err.name = 'timeout';
                    err.message = '网络连接超时';
                    reject(err);
                    this.error.fire(this, err);
                    clearTimeout(timeId);
                }, Service.settings.ajaxTimeout * 1000);
            }
            ajax(url, options)
                .then(data => {
                reslove(data);
                if (timeId)
                    clearTimeout(timeId);
            })
                .catch(err => {
                reject(err);
                this.error.fire(this, err);
                if (timeId)
                    clearTimeout(timeId);
            });
        });
    }
    /**
     * 创建服务
     * @param type 服务类型
     */
    createService(type) {
        type = type || Service;
        let service = new type();
        service.error.add((sender, error) => {
            this.error.fire(service, error);
        });
        return service;
    }
    getByJson(url, data, headers) {
        if (data && Object.getOwnPropertyNames(data).length > 0) {
            url = `${url}?${encodeURIComponent(JSON.stringify(data))}`;
        }
        headers = headers || {};
        headers["content-type"] = "application/json";
        return this.ajax(url, { headers, method: 'get' });
    }
    putByJson(url, data, headers) {
        headers = headers || {};
        headers["content-type"] = "application/json";
        return this.ajax(url, { headers, data, method: 'put' });
    }
    postByJson(url, data, headers) {
        headers = headers || {};
        headers["content-type"] = "application/json";
        return this.ajax(url, { headers, data, method: 'post' });
    }
    deleteByJson(url, data, headers) {
        headers = headers || {};
        headers["content-type"] = "application/json";
        return this.ajax(url, { headers, data, method: 'delete' });
    }
    isEncoded(uri) {
        try {
            uri = uri || '';
            return uri !== decodeURIComponent(uri);
        }
        catch (e) {
            return false;
        }
    }
    get(url, data, headers) {
        data = data || {};
        let params = "";
        for (let key in data) {
            if (data[key] == null)
                continue;
            let value = `${data[key]}`;
            if (!this.isEncoded(value)) {
                value = encodeURIComponent(value);
            }
            params = params ? `${params}&${key}=${value}` : `${key}=${value}`;
        }
        if (params) {
            url = `${url}?${params}`;
        }
        return this.ajax(url, { headers, method: 'get' });
    }
    put(url, data, headers) {
        headers = headers || {};
        headers["content-type"] = "application/x-www-form-urlencoded";
        return this.ajax(url, { headers, data, method: 'put' });
    }
    post(url, data, headers) {
        headers = headers || {};
        headers["content-type"] = "application/x-www-form-urlencoded";
        return this.ajax(url, { headers, data, method: 'post', });
    }
    delete(url, data, headers) {
        headers = headers || {};
        headers["content-type"] = "application/x-www-form-urlencoded";
        return this.ajax(url, { headers, data, method: 'delete' });
    }
}
Service.settings = {
    ajaxTimeout: 30,
};
Service.headers = {};
function formatData(data) {
    if (typeof data == "object") {
        for (let key in data) {
            data[key] = formatData(data[key]);
        }
        return data;
    }
    let datePattern = /\d{4}-\d{1,2}-\d{1,2}T\d{1,2}:\d{1,2}:\d{1,2}/;
    if (typeof data == "string" && datePattern.test(data)) {
        return new Date(data);
    }
    return data;
}
function ajax(url, options) {
    return __awaiter(this, void 0, void 0, function* () {
        let response;
        if (typeof window === 'undefined') {
            // 使用 global['require'] 而不是 require ，避免 webpack 处理 node-fetch
            response = yield eval('require')('node-fetch')(url, options);
        }
        else {
            response = yield fetch(url, options);
        }
        let responseText = response.text();
        let p;
        if (typeof responseText == 'string') {
            p = new Promise((reslove, reject) => {
                reslove(responseText);
            });
        }
        else {
            p = responseText;
        }
        let text = yield responseText;
        let textObject;
        let isJSONContextType = (response.headers.get('content-type') || '').indexOf('json') >= 0;
        if (isJSONContextType) {
            try {
                textObject = text ? JSON.parse(text) : {};
            }
            catch (_a) {
                let err = _errors__WEBPACK_IMPORTED_MODULE_1__["errors"].parseJSONFail(text);
                console.error(err);
                textObject = text;
            }
        }
        else {
            textObject = text;
        }
        if (response.status >= 300) {
            let err = new Error();
            err.method = options.method;
            err.name = `${response.status}`;
            err.message = typeof textObject == "string" ? textObject : (textObject.Message || textObject.message || '');
            err.message = err.message || response.statusText;
            throw err;
        }
        textObject = formatData(textObject);
        return textObject;
    });
}
//# sourceMappingURL=service.js.map

/***/ }),

/***/ "./out/status-code.js":
/*!****************************!*\
  !*** ./out/status-code.js ***!
  \****************************/
/*! exports provided: StatusCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusCode", function() { return StatusCode; });
var StatusCode;
(function (StatusCode) {
    //=============================================
    // 成功的状态码，必须大于 200
    StatusCode[StatusCode["Login"] = 282] = "Login";
    StatusCode[StatusCode["Logout"] = 283] = "Logout";
    //=============================================
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["OK"] = 200] = "OK";
    StatusCode[StatusCode["Redirect"] = 301] = "Redirect";
    StatusCode[StatusCode["BadRequest"] = 400] = "BadRequest";
    StatusCode[StatusCode["Forbidden"] = 403] = "Forbidden";
    //=============================================
    // 失败的状态码，必须小于或等于 700
    StatusCode[StatusCode["CustomError"] = 700] = "CustomError";
    StatusCode[StatusCode["ArgumentNull"] = 705] = "ArgumentNull";
    /** 字段为空 */
    StatusCode[StatusCode["FieldNull"] = 709] = "FieldNull";
    StatusCode[StatusCode["ArgumentTypeIncorrect"] = 710] = "ArgumentTypeIncorrect";
    /** 用户未登录 */
    StatusCode[StatusCode["UserNotLogin"] = 718] = "UserNotLogin";
    /** 没有权限 */
    StatusCode[StatusCode["NoPermission"] = 726] = "NoPermission";
    StatusCode[StatusCode["UserIdNull"] = 727] = "UserIdNull";
    /** 指定 ID 的对象不存在 */
    StatusCode[StatusCode["ObjectNotExistWithId"] = 728] = "ObjectNotExistWithId";
})(StatusCode || (StatusCode = {}));
//# sourceMappingURL=status-code.js.map

/***/ }),

/***/ "./out/value-store.js":
/*!****************************!*\
  !*** ./out/value-store.js ***!
  \****************************/
/*! exports provided: ValueStore, LocalValueStore, CookieValueStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueStore", function() { return ValueStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalValueStore", function() { return LocalValueStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieValueStore", function() { return CookieValueStore; });
/**
 * 实现数据的存储，以及数据修改的通知
 */
class ValueStore {
    constructor(value) {
        this.items = new Array();
        this._value = value;
    }
    attach(func, sender) {
        if (this.value !== undefined) {
            func(this.value, sender);
        }
        return this.add(func, sender);
    }
    add(func, sender) {
        this.items.push({ func, sender });
        return func;
    }
    remove(func) {
        this.items = this.items.filter(o => o.func != func);
    }
    fire(value) {
        this.items.forEach(o => o.func(value, o.sender));
    }
    get value() {
        if (this._value === undefined)
            return null;
        return this._value;
    }
    set value(value) {
        this._value = value;
        this.fire(value);
    }
}
class LocalValueStore extends ValueStore {
    constructor(storageName) {
        super(LocalValueStore.loadValue(storageName));
        this.storageName = storageName;
    }
    get value() {
        return super.value;
    }
    set value(value) {
        super.value = value;
        LocalValueStore.saveValue(this.storageName, value);
    }
    static loadValue(storageName) {
        let text = localStorage.getItem(storageName);
        if (text == null)
            return null;
        return JSON.parse(text);
    }
    static saveValue(storageName, value) {
        if (value == null) {
            localStorage.removeItem(storageName);
            return;
        }
        localStorage.setItem(storageName, JSON.stringify(value));
    }
}
class CookieValueStore extends ValueStore {
    constructor(storageName) {
        super(CookieValueStore.loadValue(storageName));
        this.storageName = storageName;
    }
    get value() {
        return super.value;
    }
    set value(value) {
        super.value = value;
        CookieValueStore.saveValue(this.storageName, value);
    }
    static loadValue(storageName) {
        let text = CookieValueStore.getCookie(storageName);
        if (text == null)
            return null;
        return JSON.parse(text);
    }
    static saveValue(storageName, value) {
        if (value == null) {
            CookieValueStore.removeCookie(storageName);
            return;
        }
        // localStorage.setItem(this.storageName, JSON.stringify(value));
        CookieValueStore.setCookie(storageName, JSON.stringify(value));
    }
    static setCookie(name, value, days) {
        // nodejs 没有 document
        if (typeof document == 'undefined')
            return;
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }
    static getCookie(name) {
        if (typeof document == 'undefined')
            return null;
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0)
                return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    static removeCookie(name) {
        // document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        this.setCookie(name, '');
    }
}
//# sourceMappingURL=value-store.js.map

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./out/dialogs/data-source-dialog.js":
/*!*******************************************!*\
  !*** ./out/dialogs/data-source-dialog.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _dialog;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSourceDialog = exports.DataSourceDialogContext = void 0;
const React = __webpack_require__(/*! react */ "react");
const strings_1 = __webpack_require__(/*! ../strings */ "./out/strings.js");
const modal_dialog_1 = __webpack_require__(/*! ./modal-dialog */ "./out/dialogs/modal-dialog.js");
const paging_bar_1 = __webpack_require__(/*! ../paging-bar */ "./out/paging-bar.js");
__webpack_require__(/*! ../../content/data-source-dialog.less */ "./content/data-source-dialog.less");
let strings = strings_1.getStrings();
exports.DataSourceDialogContext = React.createContext({ dataItem: null, index: -1 });
class DataSourceDialog extends React.Component {
    constructor(props) {
        super(props);
        _dialog.set(this, void 0);
        this.state = {};
        this.props.dataSource.selecting.add(e => {
            this.setState({ items: undefined });
        });
        this.props.dataSource.selected.add(e => {
            this.setState({ items: e.selectResult.dataItems });
        });
        this.props.dataSource.inserted.add(args => {
            var _a;
            (_a = this.state.items) === null || _a === void 0 ? void 0 : _a.push(args.dataItem);
            this.setState({ items: this.state.items });
        });
    }
    get element() {
        return __classPrivateFieldGet(this, _dialog).element;
    }
    show() {
        this.props.dataSource.select({
            maximumRows: this.props.pageItemsCount,
        });
        __classPrivateFieldGet(this, _dialog).show();
    }
    hide() {
        __classPrivateFieldGet(this, _dialog).hide();
    }
    confirm() {
        if (this.props.onConfirm) {
            this.props.onConfirm(this);
        }
    }
    renderBody() {
        let { items } = this.state;
        if (items === undefined) {
            return React.createElement("div", { className: "empty" }, strings.dataLoading);
        }
        if (items == null || items.length == 0) {
            return React.createElement("div", { className: "empty" }, strings.dataEmpty);
        }
        return items.map((o, i) => React.createElement(exports.DataSourceDialogContext.Provider, { key: i, value: { dataItem: o, index: i } }, this.props.children));
    }
    componentDidMount() {
    }
    render() {
        return React.createElement(modal_dialog_1.ModalDialog, Object.assign({}, this.props, { className: "data-source-dialog", ref: e => __classPrivateFieldSet(this, _dialog, e || __classPrivateFieldGet(this, _dialog)) }),
            React.createElement("div", { className: "modal-body" }, this.renderBody()),
            React.createElement("div", { className: "modal-footer", style: { marginTop: 0 } },
                React.createElement(paging_bar_1.PagingBar, { dataSource: this.props.dataSource }),
                React.createElement("button", { type: "button", className: "btn btn-default", "data-dismiss": "modal" }, this.props.cancelButtonText || "取消"),
                React.createElement("button", { type: "button", className: "btn btn-primary", onClick: () => this.confirm() }, this.props.confirmButtonText || "确定")));
    }
}
exports.DataSourceDialog = DataSourceDialog;
_dialog = new WeakMap();


/***/ }),

/***/ "./out/dialogs/modal-dialog.js":
/*!*************************************!*\
  !*** ./out/dialogs/modal-dialog.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _element;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalDialog = void 0;
const maishu_ui_toolkit_1 = __webpack_require__(/*! maishu-ui-toolkit */ "maishu-ui-toolkit");
const React = __webpack_require__(/*! react */ "react");
class ModalDialog extends React.Component {
    constructor() {
        super(...arguments);
        _element.set(this, void 0);
    }
    get element() {
        return __classPrivateFieldGet(this, _element);
    }
    /** 显示对话框 */
    show() {
        maishu_ui_toolkit_1.showDialog(__classPrivateFieldGet(this, _element));
    }
    /** 隐藏对话框 */
    hide() {
        maishu_ui_toolkit_1.hideDialog(__classPrivateFieldGet(this, _element));
    }
    render() {
        return React.createElement("div", { className: `modal fade ${this.props.className || ""}`, ref: e => __classPrivateFieldSet(this, _element, e || __classPrivateFieldGet(this, _element)) },
            React.createElement("div", { className: `modal-dialog ${this.props.isLarge ? "modal-lg" : ""}` },
                React.createElement("div", { className: "modal-content" },
                    this.header(),
                    this.body(),
                    this.footer())));
    }
    findChild(filter) {
        return this.findChildren(filter)[0];
    }
    findChildren(filter) {
        if (this.props.children == null)
            return [];
        let elements = (Array.isArray(this.props.children) ? this.props.children : [this.props.children]);
        let r = elements.filter(filter);
        return r;
    }
    footer() {
        let footer = this.findChild((o) => { var _a; return ((_a = o.props) === null || _a === void 0 ? void 0 : _a.className) == "modal-footer"; });
        if (footer == null) {
            footer = React.createElement("div", { className: "modal-footer", style: { marginTop: 0 } },
                React.createElement("button", { type: "button", className: "btn btn-default", "data-dismiss": "modal" }, this.props.cancelButtonText || "取消"),
                React.createElement("button", { type: "button", className: "btn btn-primary", onClick: () => this.props.onConfirm ? this.props.onConfirm(this) : null }, this.props.confirmButtonText || "确定"));
        }
        return footer;
    }
    header() {
        let header = this.findChild((o) => { var _a; return ((_a = o.props) === null || _a === void 0 ? void 0 : _a.className) == "modal-header"; });
        if (header == null) {
            header = React.createElement("div", { className: "modal-header" },
                React.createElement("button", { type: "button", className: "btn close", "data-dismiss": "modal" },
                    React.createElement("span", { "aria-hidden": "true" }, "\u00D7"),
                    React.createElement("span", { className: "sr-only" }, "Close")),
                React.createElement("h4", { className: "modal-title" }, this.props.title || ""));
        }
        return header;
    }
    body() {
        let body = this.findChild((o) => { var _a; return o.type == "div" && ((_a = o.props) === null || _a === void 0 ? void 0 : _a.className) == "modal-body"; });
        if (body == null) {
            let excludeClassNames = ["modal-header", "modal-body", "modal-footer"];
            let children = this.findChildren((o) => { var _a; return excludeClassNames.indexOf((_a = o.props) === null || _a === void 0 ? void 0 : _a.className) < 0; });
            body = React.createElement("div", { className: "modal-body" }, children);
        }
        return body;
    }
}
exports.ModalDialog = ModalDialog;
_element = new WeakMap();


/***/ }),

/***/ "./out/error-handle.js":
/*!*****************************!*\
  !*** ./out/error-handle.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandle = void 0;
function errorHandle(err) {
    if (typeof window === "undefined") {
        throw err;
    }
    else {
        Promise.resolve().then(() => __webpack_require__(/*! maishu-ui-toolkit */ "maishu-ui-toolkit")).then((ui) => {
            ui.alert({ title: "错误", message: err.message });
        });
    }
}
exports.errorHandle = errorHandle;


/***/ }),

/***/ "./out/errors.js":
/*!***********************!*\
  !*** ./out/errors.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.errors = void 0;
const maishu_toolkit_1 = __webpack_require__(/*! maishu-toolkit */ "maishu-toolkit");
class Errors extends maishu_toolkit_1.Errors {
    serviceHostNotConfig() {
        return new Error(`Service host is not config.`);
    }
    notImplemented(message) {
        message = message || "Not implemented";
        return new Error(message);
    }
}
exports.errors = new Errors();


/***/ }),

/***/ "./out/image-manager.js":
/*!******************************!*\
  !*** ./out/image-manager.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showImageDialog = void 0;
const image_thumber_1 = __webpack_require__(/*! ./image-thumber */ "./out/image-thumber.js");
const React = __webpack_require__(/*! react */ "react");
const ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
const image_service_1 = __webpack_require__(/*! ./image-service */ "./out/image-service.js");
const strings_1 = __webpack_require__(/*! ./strings */ "./out/strings.js");
const maishu_toolkit_1 = __webpack_require__(/*! maishu-toolkit */ "maishu-toolkit");
__webpack_require__(/*! ../content/image-manager.less */ "./content/image-manager.less");
const data_source_dialog_1 = __webpack_require__(/*! ./dialogs/data-source-dialog */ "./out/dialogs/data-source-dialog.js");
let strings = strings_1.getStrings();
class ImageManager extends React.Component {
    constructor(props) {
        super(props);
        this.selectedItems = [];
        this.state = { images: [] };
        this.dataSource = createImageDataSource();
        this.dataSource.selected.add(args => {
            this.setState({ images: args.selectResult.dataItems });
        });
        this.dataSource.inserted.add(args => {
            this.state.images.push(args.dataItem);
            this.setState({ images: this.state.images });
        });
    }
    show(selectedMax, callback) {
        var _a;
        this.selectedMax = selectedMax;
        this.showCallback = callback;
        this.selectedItems = [];
        (_a = this.dialog) === null || _a === void 0 ? void 0 : _a.show();
    }
    saveImage(data) {
        return __awaiter(this, void 0, void 0, function* () {
            this.dataSource.insert({ data });
        });
    }
    removeImage(item) {
        this.dataSource.delete(item);
        let images = this.state.images;
        images = images.filter(o => o.id != item.id);
        this.setState({ images });
    }
    onConfirm() {
        var _a;
        if (this.showCallback) {
            let imageIds = this.selectedItems.map(o => o.props.imagePath);
            this.showCallback(imageIds);
        }
        (_a = this.dialog) === null || _a === void 0 ? void 0 : _a.hide();
    }
    componentDidMount() {
        var _a, _b;
        let footerElement = (_a = this.dialog) === null || _a === void 0 ? void 0 : _a.element.querySelector(".modal-footer");
        let cancelElement = (_b = this.dialog) === null || _b === void 0 ? void 0 : _b.element.querySelector(".btn-default");
        let tipsElement = document.createElement("div");
        tipsElement.style.float = "left";
        footerElement.insertBefore(tipsElement, cancelElement);
        if (this.selectedMax) {
            tipsElement.innerHTML = maishu_toolkit_1.formatString(strings.imageSelectMax);
        }
    }
    render() {
        let props = this.props;
        return React.createElement(data_source_dialog_1.DataSourceDialog, { dataSource: this.dataSource, pageItemsCount: 17, isLarge: true, title: props.title, onConfirm: () => this.onConfirm(), ref: e => this.dialog = e || this.dialog },
            React.createElement(data_source_dialog_1.DataSourceDialogContext.Consumer, null, args => {
                let dataItem = args.dataItem;
                return React.createElement(image_thumber_1.default, { key: `${dataItem.id}`, id: dataItem.id, imagePath: image_service_1.ImageService.imageSource(dataItem.id, 120, 120), onClick: e => {
                        let selecteIds = this.selectedItems.map(o => o.props.id);
                        let exists = selecteIds.indexOf(dataItem.id) >= 0;
                        if (exists) {
                            this.selectedItems = this.selectedItems.filter(o => o.props.id != dataItem.id);
                            e.setState({ selectedText: "" });
                        }
                        else {
                            this.selectedItems.push(e);
                        }
                        for (let i = 0; i < this.selectedItems.length; i++) {
                            this.selectedItems[i].setState({ selectedText: `${i + 1}` });
                        }
                    } });
            }));
    }
}
let element = document.createElement("div");
element.className = "image-manager";
document.body.append(element);
let instance = ReactDOM.render(React.createElement(ImageManager, null), element);
exports.default = {
    show(callback) {
        instance.show(undefined, callback);
    }
};
function showImageDialog(maxImagesCount, callback) {
    if (typeof maxImagesCount == 'function') {
        maxImagesCount = null;
        callback = maxImagesCount;
    }
    instance.show(maxImagesCount, callback);
}
exports.showImageDialog = showImageDialog;
function createImageDataSource() {
    let station = new image_service_1.ImageService();
    let dataSource = new maishu_toolkit_1.DataSource({
        primaryKeys: ['id'],
        select(args) {
            return __awaiter(this, void 0, void 0, function* () {
                let result = yield station.list(args); //, 140, 140
                return result;
            });
        },
        delete(item) {
            return __awaiter(this, void 0, void 0, function* () {
                let result = yield station.remove(item.id);
                return result;
            });
        },
        insert(item) {
            return __awaiter(this, void 0, void 0, function* () {
                console.assert(item.data != null);
                let result = yield station.upload(item.data);
                Object.assign(item, result);
                return result;
            });
        }
    });
    return dataSource;
}


/***/ }),

/***/ "./out/image-service.js":
/*!******************************!*\
  !*** ./out/image-service.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageService = exports.errors = void 0;
const maishu_chitu_service_1 = __webpack_require__(/*! maishu-chitu-service */ "./node_modules/maishu-chitu-service/dist/index.js");
const maishu_toolkit_1 = __webpack_require__(/*! maishu-toolkit */ "maishu-toolkit");
const error_handle_1 = __webpack_require__(/*! ./error-handle */ "./out/error-handle.js");
const strings_1 = __webpack_require__(/*! ./strings */ "./out/strings.js");
let strings = strings_1.getStrings();
exports.errors = {
    serviceUrlCanntNull(serviceName) {
        let msg = `Service '${serviceName}' base url can not null.`;
        return new Error(msg);
    },
    unexpectedNullResult() {
        let msg = `Null result is unexpected.`;
        return new Error(msg);
    },
    unexpectedNullValue(name) {
        let msg = `variable ${name} is unexpected null value.`;
        return new Error(msg);
    },
    argumentNull(name) {
        let msg = `Arugment ${name} cannt null or empty.`;
        return new Error(msg);
    },
    fieldNull(field, itemName) {
        let msg = `${itemName} ${field} cannt be null or empty`;
        return new Error(msg);
    },
    instanceMessangerStart() {
        let msg = `Instance messanger is start.`;
        return new Error(msg);
    },
    notSupportedInNode() {
        let msg = `Not implement in node environment.`;
        return new Error(msg);
    }
};
// export let settings = {
//     noImageText: "暂无图片"
// }
/** 图片服务，实现图片的上传，获取 */
class ImageService extends maishu_chitu_service_1.Service {
    constructor() {
        super(err => error_handle_1.errorHandle(err));
    }
    static get serviceHost() {
        return this._serviceHost;
    }
    static set serviceHost(value) {
        this._serviceHost = value;
    }
    static get imageUploadUrl() {
        if (!this._imageUploadUrl) {
            return this.url("upload");
        }
        return this._imageUploadUrl;
    }
    static set imageUploadUrl(value) {
        this._imageUploadUrl = value;
    }
    url(path) {
        return ImageService.url(path);
    }
    static url(path) {
        return maishu_toolkit_1.pathConcat(ImageService.serviceHost, path);
    }
    /** 获取图片的 URL
     * @param id 图片的 ID
     * @param width 图片的宽度，如果不指定则为实际图片的宽度
     * @param height 图片的高度，如果不指定则为实际图片的高度
     */
    imageSource(id, width, height) {
        return ImageService.imageSource(id, width, height);
    }
    /** 获取图片的 URL
     * @param id 图片的 ID
     * @param width 图片的宽度，如果不指定则为实际图片的宽度
     * @param height 图片的高度，如果不指定则为实际图片的高度
     */
    static imageSource(id, width, height) {
        if (!id) {
            width = width == null ? 200 : width;
            height = height == null ? 200 : height;
            id = this.generateImageBase64(width, height, strings.noImageText);
            return id;
        }
        let isBase64 = id.startsWith('data:image');
        if (isBase64) {
            return id;
        }
        if (id != null && (id.startsWith("http://") || id.startsWith("https://")) || id.startsWith("//"))
            return id;
        if (id != null && id.indexOf("/") >= 0) {
            let r = maishu_toolkit_1.pathConcat(ImageService.serviceHost, id);
            let q = "";
            if (width != null)
                q = q + `&width=${width}`;
            if (height != null)
                q = q + `&height=${height}`;
            if (q.length > 0) {
                q = q.substr(1);
                r = r + "?" + q;
            }
            return r;
        }
        let url = this.url('image');
        url = `${url}?id=${id}`;
        if (width != null)
            url = url + `&width=${width}`;
        if (height != null)
            url = url + `&height=${height}`;
        return url;
    }
    static generateImageBase64(width, height, obj, options) {
        if (document == null) {
            throw exports.errors.notSupportedInNode();
        }
        var canvas;
        if (typeof document != "undefined") {
            canvas = document.createElement('canvas');
            canvas.width = width; //img_width;
            canvas.height = height; //img_height;
        }
        else {
            let canvasModule = __webpack_require__(/*! canvas */ "./node_modules/canvas/browser.js");
            canvas = canvasModule.createCanvas(200, 200);
        }
        var ctx = canvas.getContext('2d');
        if (ctx == null)
            throw new Error('ccreate canvas context fail.');
        let draw = typeof obj == 'string' ? draws.text(obj, options) : obj;
        draw(ctx, width, height);
        return canvas.toDataURL();
    }
    getImageSize(imageBase64) {
        if (!imageBase64)
            throw exports.errors.argumentNull('imageBase64');
        return new Promise((resolve, reject) => {
            var i = new Image();
            i.onload = function () {
                resolve({ width: i.width, height: i.height });
            };
            i.src = imageBase64;
        });
    }
    /**
     * 对图片进行缩放
     * @param imageBase64 图片 base64 格式数据
     * @param width 目标图片的宽度
     * @param height 目标图片的高度
     */
    resize(imageBase64, width, height) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!imageBase64)
                throw exports.errors.argumentNull('imageBase64');
            if (!width)
                throw exports.errors.argumentNull('width');
            if (!height)
                throw exports.errors.argumentNull('height');
            var canvas = document.createElement('canvas'); //.getElementById("canvas");
            var ctx = canvas.getContext("2d");
            canvas.width = width;
            canvas.height = height;
            return yield new Promise((resolve, reject) => {
                var img = new Image();
                img.src = imageBase64;
                img.onload = function () {
                    // width = img.width
                    // height = img.height
                    if (ctx == null)
                        throw 'get canvas context fail';
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                    resolve(canvas.toDataURL());
                };
            });
        });
    }
    list(args) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url("list"); //`${ImageService.baseUrl}/list`;
            let result = yield this.postByJson(url, args);
            return result;
        });
    }
    /**
     * 上传图片
     * @param imageBase64 图片的 base64 数据
     */
    upload(imageBase64) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!imageBase64)
                throw exports.errors.argumentNull('imageBase64');
            let url = ImageService.imageUploadUrl; //this.url('upload')
            let imageSize = yield this.getImageSize(imageBase64);
            let maxWidth = 800;
            let maxHeight = 800;
            if (imageSize.width > maxWidth) { // || imageSize.height > maxHeight
                let height = imageSize.height / imageSize.width * maxWidth;
                imageBase64 = yield this.resize(imageBase64, maxWidth, height);
            }
            else if (imageSize.height > maxHeight) {
                let width = imageSize.width / imageSize.height * maxHeight;
                imageBase64 = yield this.resize(imageBase64, width, maxHeight);
            }
            return this.postByJson(url, { image: imageBase64 });
        });
    }
    /**
     *
     * @param id 删除图片
     */
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id)
                throw exports.errors.argumentNull('id');
            let url = this.url("remove");
            return this.postByJson(url, { id });
        });
    }
}
exports.ImageService = ImageService;
let draws = {
    text: (imageText, options) => {
        return (ctx, canvasWidth, canvasHeight) => {
            // let fontSize1 = Math.floor(canvasHeight / 3 * 0.8);
            let fontSize = Math.floor((canvasWidth / imageText.length) * 0.6);
            let bgColor = 'whitesmoke';
            let textColor = '#999';
            // let fontSize = Math.min(fontSize1, fontSize2);
            options = options || {};
            ctx.fillStyle = options.bgColor || bgColor; //'whitesmoke';
            ctx.fillRect(0, 0, canvasWidth, canvasHeight);
            // 设置字体
            ctx.font = `Bold ${options.fontSize}px Arial`;
            // 设置对齐方式
            ctx.textAlign = "left";
            // 设置填充颜色
            ctx.fillStyle = options.textColor || textColor; //"#999";
            let textWidth = fontSize * imageText.length;
            let startX = Math.floor((canvasWidth - textWidth) * 0.5);
            let startY = Math.floor((canvasHeight - (options.fontSize || fontSize)) * 0.3);
            // 设置字体内容，以及在画布上的位置
            ctx.fillText(imageText, startX, Math.floor(canvasHeight * 0.6));
        };
    }
};


/***/ }),

/***/ "./out/image-thumber.js":
/*!******************************!*\
  !*** ./out/image-thumber.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const ui = __webpack_require__(/*! maishu-ui-toolkit */ "maishu-ui-toolkit");
__webpack_require__(/*! ../content/image-thumber.less */ "./content/image-thumber.less");
const strings_1 = __webpack_require__(/*! ./strings */ "./out/strings.js");
let strings = strings_1.getStrings();
class ImageThumber extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedText: props.selectedText };
    }
    setDeleteButton(e, imagePath) {
        if (!e)
            return;
        ui.buttonOnClick(e, (e) => {
            e.stopPropagation();
            e.cancelBubble = true;
            if (this.props.remove)
                return this.props.remove(imagePath);
            return Promise.resolve();
        }, {
            confirm: strings.deleteImageConfirm
        });
    }
    render() {
        let { imagePath, onClick, title, disabled } = this.props;
        let { selectedText } = this.state;
        let className = this.props.className;
        let text = this.props.text;
        className = className || '';
        text = text || '';
        return (React.createElement("div", { className: `image-thumber ${className}`, title: title, "data-url": imagePath, onClick: (e) => {
                if (disabled)
                    return;
                onClick ? onClick(this, e) : null;
            } },
            React.createElement("div", { className: `item text-center  ${selectedText ? 'selected' : ''}` },
                React.createElement("div", { className: "triangle" }),
                React.createElement("div", { className: "top" }, selectedText),
                this.props.remove ?
                    React.createElement("div", { className: "remove" },
                        React.createElement("i", { className: "fa fa-remove", ref: (e) => this.setDeleteButton(e, imagePath) })) : null,
                React.createElement("img", { className: "img-responsive", src: imagePath }),
                text ? React.createElement("div", { className: "bottom" }, text) : null,
                disabled ? React.createElement("div", { className: "disabled" }) : null,
                this.props.children)));
    }
}
exports.default = ImageThumber;


/***/ }),

/***/ "./out/image-upload.js":
/*!*****************************!*\
  !*** ./out/image-upload.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const ui = __webpack_require__(/*! maishu-ui-toolkit */ "maishu-ui-toolkit");
__webpack_require__(/*! ../content/image-upload.less */ "./content/image-upload.less");
const strings_1 = __webpack_require__(/*! ./strings */ "./out/strings.js");
const ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
let strings = strings_1.getStrings();
class ImageUpload extends React.Component {
    constructor(props) {
        var _a;
        super(props);
        this.state = { imageSource: (_a = props.displayImage) === null || _a === void 0 ? void 0 : _a.source };
    }
    updloadImage(imageFile) {
        let { width, height } = this.props;
        ui.imageFileToBase64(imageFile)
            .then(data => {
            this.props.saveImage(data);
            this.setState({ imageSource: data.base64 });
        });
    }
    setFileInput(e) {
        if (!e || e.onchange)
            return;
        this.file = e;
        e.onchange = () => {
            if (e.files != null && e.files.length > 0)
                this.updloadImage(e.files[0]);
        };
    }
    setSizes() {
        let width = this.itemElement.offsetWidth;
        //==========================================
        // 获取元素的宽带，作为高度，如果小于一个很小的数值，
        // 比如 10，则认为元素没有渲染完成，稍后再获取
        if (width < 10) {
            setTimeout(() => {
                this.setSizes();
            }, 100);
        }
        //==========================================
        let height = width;
        let itemPaddingTop = 0;
        this.itemElement.style.height = `${height}px`;
        if (height > 80) {
            itemPaddingTop = (height - 80) / 2;
            this.itemElement.style.paddingTop = `${itemPaddingTop}px`;
        }
        this.file.style.marginTop = `-${height - itemPaddingTop}px`;
        this.file.style.width = `${width}px`;
        this.file.style.height = `${height}px`;
    }
    render() {
        let { title, className } = this.props;
        let { imageSource } = this.state || {};
        title = title || strings.imageUpload;
        className = className || '';
        if (imageSource == null || this.props.displayImage == null) {
            return React.createElement("div", { className: `image-upload ${className}`, style: this.props.style },
                React.createElement("div", { className: "item", ref: e => this.itemElement = e || this.itemElement },
                    React.createElement(React.Fragment, null,
                        React.createElement("i", { className: "fa fa-plus fa-4x" }),
                        React.createElement("div", null, title)),
                    React.createElement("input", { type: "file", style: {}, ref: (e) => this.setFileInput(e) })));
        }
        if (this.props.displayImage.fixed) {
            return React.createElement("div", { className: `image-upload ${className}`, style: this.props.style },
                React.createElement("div", { className: "item", ref: e => this.itemElement = e || this.itemElement },
                    React.createElement("img", { src: imageSource, style: { width: "100%", height: "100%" } }),
                    React.createElement("input", { type: "file", style: {}, ref: (e) => this.setFileInput(e) })));
        }
        return React.createElement("div", { className: `image-upload ${className}`, ref: div => {
                if (!div)
                    return;
                let imageElement = document.createElement("img");
                imageElement.src = imageSource;
                imageElement.onload = (e) => {
                    var _a;
                    let width = e.target.width;
                    let height = e.target.height;
                    let maxWidth = (_a = this.props.displayImage) === null || _a === void 0 ? void 0 : _a.maxWidth;
                    if (maxWidth) {
                        let scale = height / width; //`${this.props.displayImage.maxWidth}px`;
                        height = maxWidth * scale;
                        width = maxWidth;
                    }
                    div.style.backgroundImage = `url(${e.target.src})`;
                    div.style.backgroundSize = `${width}px ${height}px`;
                    div.style.backgroundRepeat = "no-repeat";
                    let fileElement = div.querySelector('[type="file"]');
                    fileElement.style.width = `${width}px`;
                    fileElement.style.height = `${height}px`;
                };
                ReactDOM.render(React.createElement(React.Fragment, null,
                    React.createElement("input", { type: "file", style: { opacity: 0 }, ref: (e) => this.setFileInput(e) })), div);
            } });
    }
}
exports.default = ImageUpload;


/***/ }),

/***/ "./out/index.js":
/*!**********************!*\
  !*** ./out/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSourcePagingBar = exports.PagingBar = exports.DataSourceDialogContext = exports.DataSourceDialog = exports.ModalDialog = exports.ImageService = exports.showImageDialog = exports.ImageUpload = exports.ImageThumber = void 0;
var image_thumber_1 = __webpack_require__(/*! ./image-thumber */ "./out/image-thumber.js");
Object.defineProperty(exports, "ImageThumber", { enumerable: true, get: function () { return image_thumber_1.default; } });
var image_upload_1 = __webpack_require__(/*! ./image-upload */ "./out/image-upload.js");
Object.defineProperty(exports, "ImageUpload", { enumerable: true, get: function () { return image_upload_1.default; } });
var image_manager_1 = __webpack_require__(/*! ./image-manager */ "./out/image-manager.js");
Object.defineProperty(exports, "showImageDialog", { enumerable: true, get: function () { return image_manager_1.showImageDialog; } });
var image_service_1 = __webpack_require__(/*! ./image-service */ "./out/image-service.js");
Object.defineProperty(exports, "ImageService", { enumerable: true, get: function () { return image_service_1.ImageService; } });
var modal_dialog_1 = __webpack_require__(/*! ./dialogs/modal-dialog */ "./out/dialogs/modal-dialog.js");
Object.defineProperty(exports, "ModalDialog", { enumerable: true, get: function () { return modal_dialog_1.ModalDialog; } });
var data_source_dialog_1 = __webpack_require__(/*! ./dialogs/data-source-dialog */ "./out/dialogs/data-source-dialog.js");
Object.defineProperty(exports, "DataSourceDialog", { enumerable: true, get: function () { return data_source_dialog_1.DataSourceDialog; } });
Object.defineProperty(exports, "DataSourceDialogContext", { enumerable: true, get: function () { return data_source_dialog_1.DataSourceDialogContext; } });
var paging_bar_1 = __webpack_require__(/*! ./paging-bar */ "./out/paging-bar.js");
Object.defineProperty(exports, "PagingBar", { enumerable: true, get: function () { return paging_bar_1.PagingBar; } });
var number_paging_bar_1 = __webpack_require__(/*! ./number-paging-bar */ "./out/number-paging-bar.js");
Object.defineProperty(exports, "DataSourcePagingBar", { enumerable: true, get: function () { return number_paging_bar_1.DataSourcePagingBar; } });


/***/ }),

/***/ "./out/number-paging-bar.js":
/*!**********************************!*\
  !*** ./out/number-paging-bar.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSourcePagingBar = exports.PagingBar = exports.PagerPosition = void 0;
const errors_1 = __webpack_require__(/*! ./errors */ "./out/errors.js");
// namespace wuzhui {
var PagerPosition;
(function (PagerPosition) {
    PagerPosition[PagerPosition["Bottom"] = 0] = "Bottom";
    PagerPosition[PagerPosition["Top"] = 1] = "Top";
    PagerPosition[PagerPosition["TopAndBottom"] = 2] = "TopAndBottom";
})(PagerPosition = exports.PagerPosition || (exports.PagerPosition = {}));
;
class PagingBar {
    init(dataSource) {
        this._pageIndex = 0;
        var pagingBar = this;
        pagingBar.totalRowCount = 1000000;
        if (dataSource) {
            dataSource.selected.add(args => {
                this._selectArguments = args.selectArguments;
                pagingBar.pageSize = args.selectArguments.maximumRows || 0;
                var totalRowCount = args.selectResult.totalRowCount;
                if (totalRowCount != null && totalRowCount >= 0) {
                    pagingBar.totalRowCount = totalRowCount;
                }
                var startRowIndex = this._selectArguments.startRowIndex;
                if (startRowIndex == null || startRowIndex <= 0)
                    startRowIndex = 0;
                pagingBar.pageIndex = Math.floor(startRowIndex / pagingBar.pageSize);
                pagingBar.render();
            });
            dataSource.deleted.add(function () {
                pagingBar.totalRowCount = pagingBar.totalRowCount - 1;
                pagingBar.render();
            });
            dataSource.inserted.add(function () {
                pagingBar.totalRowCount = pagingBar.totalRowCount + 1;
                pagingBar.render();
            });
        }
    }
    get selectArguments() {
        console.assert(this._selectArguments != null);
        return this._selectArguments;
    }
    get pageCount() {
        var pageCount = Math.ceil(this.totalRowCount / this.pageSize);
        return pageCount;
    }
    get pageSize() {
        return this._pageSize;
    }
    set pageSize(value) {
        this._pageSize = value;
    }
    get pageIndex() {
        return this._pageIndex;
    }
    set pageIndex(value) {
        this._pageIndex = value;
    }
    get totalRowCount() {
        return this._totalRowCount;
    }
    set totalRowCount(value) {
        this._totalRowCount = value;
    }
    // Virtual Method
    render() {
        throw errors_1.errors.notImplemented('The table-row render method is not implemented.');
    }
}
exports.PagingBar = PagingBar;
class DataSourcePagingBar extends PagingBar {
    constructor(params) {
        if (!params.dataSource)
            throw errors_1.errors.argumentNull('dataSource');
        if (!params.element)
            throw errors_1.errors.argumentNull('element');
        let pagerSettings = Object.assign(DataSourcePagingBar.defaultPagerSettings, params.pagerSettings || {});
        super();
        this.dataSource = params.dataSource;
        this.pagerSettings = pagerSettings;
        this.element = params.element;
        this.numberButtons = new Array();
        this.createButton = this.createPagingButton;
        this.createLabel = this.createTotalLabel;
        let buttonContainer = pagerSettings.buttonContainerWraper ?
            document.createElement(pagerSettings.buttonContainerWraper) :
            document.createElement('div');
        buttonContainer.className = pagerSettings.buttonContainerClassName || "buttons";
        this.element.appendChild(buttonContainer);
        this.createPreviousButtons(buttonContainer);
        this.createNumberButtons(buttonContainer);
        this.createNextButtons(buttonContainer);
        if (this.pagerSettings.showTotal) {
            this.totalElement = this.createLabel();
            this.totalElement.visible = false;
        }
        this.init(params.dataSource);
    }
    createPagingButton(container) {
        var pagerSettings = this.pagerSettings;
        let button = document.createElement('a');
        button.href = 'javascript:';
        if (this.pagerSettings.buttonWrapper) {
            let w = document.createElement(this.pagerSettings.buttonWrapper);
            w.appendChild(button);
            container.appendChild(w);
        }
        else {
            container.appendChild(button);
        }
        let result = {
            _button: button,
            get visible() {
                let button = this._button;
                return button.style.display != 'none';
            },
            set visible(value) {
                let button = this._button;
                let element = pagerSettings.buttonWrapper ? button.parentElement : button;
                if (element == null)
                    return;
                if (value) {
                    element.style.removeProperty('display');
                }
                else {
                    element.style.display = 'none';
                }
            },
            get pageIndex() {
                let button = this._button;
                return new Number(button.getAttribute('pageIndex')).valueOf();
            },
            set pageIndex(value) {
                let button = this._button;
                button.setAttribute('pageIndex', value);
            },
            get text() {
                let button = this._button;
                return button.innerHTML;
            },
            set text(value) {
                let button = this._button;
                button.innerHTML = value;
            },
            get active() {
                let button = this._button;
                return button.href != null;
            },
            set active(value) {
                let button = this._button;
                if (value == true) {
                    button.removeAttribute('href');
                    if (pagerSettings.activeButtonClassName) {
                        // button.className = pagerSettings.activeButtonClassName;
                        this.setClassName(pagerSettings.activeButtonClassName);
                    }
                    return;
                }
                button.href = 'javascript:';
                if (pagerSettings.buttonClassName)
                    this.setClassName(pagerSettings.buttonClassName);
                else
                    this.setClassName(null);
            },
            setClassName(value) {
                let button = this._button;
                let element = pagerSettings.buttonWrapper ? button.parentElement : button;
                if (element == null)
                    return;
                if (value)
                    element.className = value;
                else
                    element.removeAttribute('class');
            },
            onclick: null
        };
        button.onclick = () => {
            if (result.onclick) {
                result.onclick(result, this);
            }
        };
        return result;
    }
    createTotalLabel() {
        let totalElement = document.createElement('div');
        totalElement.className = 'total';
        let textElement = document.createElement('span');
        textElement.className = 'text';
        textElement.innerHTML = '总记录：';
        totalElement.appendChild(textElement);
        let numberElement = document.createElement('span');
        numberElement.className = 'number';
        totalElement.appendChild(numberElement);
        this.element.appendChild(totalElement);
        return {
            get text() {
                return numberElement.innerHTML;
            },
            set text(value) {
                numberElement.innerHTML = value;
            },
            get visible() {
                let display = totalElement.style.display;
                return display != 'none';
            },
            set visible(value) {
                if (value == true)
                    totalElement.style.display = 'block';
                else
                    totalElement.style.display = 'node';
            }
        };
    }
    createPreviousButtons(buttonContainer) {
        this.firstPageButton = this.createButton(buttonContainer);
        this.firstPageButton.onclick = DataSourcePagingBar.on_buttonClick;
        this.firstPageButton.text = this.pagerSettings.firstPageText;
        this.firstPageButton.visible = false;
        this.previousPageButton = this.createButton(buttonContainer);
        this.previousPageButton.onclick = DataSourcePagingBar.on_buttonClick;
        this.previousPageButton.text = this.pagerSettings.previousPageText;
        this.previousPageButton.visible = false;
    }
    createNextButtons(buttonContainer) {
        this.nextPageButton = this.createButton(buttonContainer);
        this.nextPageButton.onclick = DataSourcePagingBar.on_buttonClick;
        this.nextPageButton.text = this.pagerSettings.nextPageText;
        this.nextPageButton.visible = false;
        this.lastPageButton = this.createButton(buttonContainer);
        this.lastPageButton.onclick = DataSourcePagingBar.on_buttonClick;
        this.lastPageButton.text = this.pagerSettings.lastPageText;
        this.lastPageButton.visible = false;
    }
    createNumberButtons(buttonContainer) {
        let pagingBar = this;
        let buttonCount = this.pagerSettings.pageButtonCount;
        for (let i = 0; i < buttonCount; i++) {
            let button = this.createButton(buttonContainer);
            button.onclick = DataSourcePagingBar.on_buttonClick;
            this.numberButtons[i] = button;
        }
        this.numberButtons.forEach(btn => {
            btn.onclick = () => DataSourcePagingBar.on_buttonClick(btn, pagingBar);
        });
    }
    static on_buttonClick(button, pagingBar) {
        let pageIndex = button.pageIndex;
        if (!pageIndex == null) {
            return;
        }
        let args = pagingBar.selectArguments;
        args.maximumRows = pagingBar.pageSize;
        args.startRowIndex = pageIndex * pagingBar.pageSize;
        pagingBar.pageIndex = pageIndex;
        pagingBar.dataSource.select(pagingBar.selectArguments);
    }
    render() {
        var pagerSettings = this.pagerSettings;
        var buttonCount = pagerSettings.pageButtonCount;
        let pagingBarIndex = Math.floor(this.pageIndex / buttonCount);
        let pagingBarCount = Math.ceil(this.pageCount / buttonCount);
        this.previousPageButton.pageIndex = (pagingBarIndex - 1) * buttonCount;
        this.nextPageButton.pageIndex = (pagingBarIndex + 1) * buttonCount;
        this.firstPageButton.pageIndex = 0;
        this.lastPageButton.pageIndex = this.pageCount - 1;
        for (let i = 0; i < this.numberButtons.length; i++) {
            let pageIndex = pagingBarIndex * buttonCount + i;
            if (pageIndex < this.pageCount) {
                this.numberButtons[i].pageIndex = pageIndex;
                this.numberButtons[i].text = (pagingBarIndex * buttonCount + i + 1).toString();
                this.numberButtons[i].visible = true;
                this.numberButtons[i].active = pageIndex == this.pageIndex;
            }
            else {
                this.numberButtons[i].visible = false;
            }
        }
        if (this.totalElement) {
            this.totalElement.text = this.totalRowCount;
            this.totalElement.visible = true;
        }
        this.firstPageButton.visible = false;
        this.previousPageButton.visible = false;
        this.lastPageButton.visible = false;
        this.nextPageButton.visible = false;
        if (pagingBarIndex > 0) {
            this.firstPageButton.visible = true;
            this.previousPageButton.visible = true;
        }
        if (pagingBarIndex < pagingBarCount - 1) {
            this.lastPageButton.visible = true;
            this.nextPageButton.visible = true;
        }
    }
}
exports.DataSourcePagingBar = DataSourcePagingBar;
DataSourcePagingBar.defaultPagerSettings = {
    pageButtonCount: 10,
    firstPageText: '<<',
    lastPageText: '>>',
    nextPageText: '...',
    previousPageText: '...',
    showTotal: true,
};


/***/ }),

/***/ "./out/paging-bar.js":
/*!***************************!*\
  !*** ./out/paging-bar.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _pagingBar;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagingBar = void 0;
const React = __webpack_require__(/*! react */ "react");
const number_paging_bar_1 = __webpack_require__(/*! ./number-paging-bar */ "./out/number-paging-bar.js");
class PagingBar extends React.Component {
    constructor() {
        super(...arguments);
        _pagingBar.set(this, void 0);
    }
    pagingBarRef(e) {
        if (!e || __classPrivateFieldGet(this, _pagingBar))
            return;
        __classPrivateFieldSet(this, _pagingBar, new number_paging_bar_1.DataSourcePagingBar({
            dataSource: this.props.dataSource,
            element: e,
            pagerSettings: {
                activeButtonClassName: 'active',
                buttonWrapper: 'li',
                buttonContainerWraper: 'ul',
                showTotal: false
            },
        }));
        let ul = e.querySelector('ul');
        if (ul)
            ul.className = "pagination";
    }
    render() {
        return React.createElement("div", { ref: e => this.pagingBarRef(e) });
    }
}
exports.PagingBar = PagingBar;
_pagingBar = new WeakMap();


/***/ }),

/***/ "./out/strings.js":
/*!************************!*\
  !*** ./out/strings.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setLanguage = exports.getStrings = void 0;
let chinese = {
    selectImage: "选择图片",
    selectMax: "最多可选",
    cancel: "取消",
    confirm: "确定",
    deleteImageConfirm: "确定删除该图片吗？",
    imageUpload: "图片上传",
    noImageText: "暂无图片",
    dataLoading: "数据正在加载中...",
    dataEmpty: "暂无所要展示的数据",
    imageSelectMax: "最多选择 {0} 张图片"
};
let english = {
    selectImage: "Select Image",
    selectMax: "Select Max",
    cancel: "Cancel",
    confirm: "Confirm",
    deleteImageConfirm: "Are you sure delete the image?",
    imageUpload: "Image Upload",
    noImageText: "NO IMAGE",
    dataLoading: "Data is loading...",
    dataEmpty: "Data is empty",
    imageSelectMax: "Choose up to {0} pictures"
};
let strings = { chinese, english, };
function getStrings(language) {
    language = language || getLanguage();
    let r = strings[language];
    return r;
}
exports.getStrings = getStrings;
let language = "chinese";
function setLanguage(value) {
    language = value;
}
exports.setLanguage = setLanguage;
function getLanguage() {
    return language;
}


/***/ }),

/***/ "maishu-toolkit":
/*!*********************************!*\
  !*** external "maishu-toolkit" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_maishu_toolkit__;

/***/ }),

/***/ "maishu-ui-toolkit":
/*!************************************!*\
  !*** external "maishu-ui-toolkit" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_maishu_ui_toolkit__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map