/*!
 * 
 *  maishu-image-components v1.4.3
 * 
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("maishu-chitu"), require("maishu-toolkit"), require("maishu-ui-toolkit"), require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["maishu-chitu", "maishu-toolkit", "maishu-ui-toolkit", "react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["image-components"] = factory(require("maishu-chitu"), require("maishu-toolkit"), require("maishu-ui-toolkit"), require("react"), require("react-dom"));
	else
		root["image-components"] = factory(root["maishu-chitu"], root["maishu-toolkit"], root["maishu-ui-toolkit"], root["react"], root["react-dom"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_maishu_chitu__, __WEBPACK_EXTERNAL_MODULE_maishu_toolkit__, __WEBPACK_EXTERNAL_MODULE_maishu_ui_toolkit__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__) {
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
___CSS_LOADER_EXPORT___.push([module.i, ".image-manager {\n  z-index: 800;\n}\n.image-manager .modal-body .col-xs-2 {\n  margin-top: 6px;\n  margin-bottom: 6px;\n}\n.image-manager .modal-footer .pagination {\n  margin: 0;\n}\n.image-manager .modal-header h4 {\n  margin: 0;\n}\n.image-manager .image-thumber {\n  margin: 10px;\n  float: left;\n  position: relative;\n}\n.image-manager .image-upload {\n  margin: 10px;\n  float: left;\n}\n", "",{"version":3,"sources":["webpack://./content/image-manager.less"],"names":[],"mappings":"AAAA;EACE,YAAY;AACd;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,SAAS;AACX;AACA;EACE,SAAS;AACX;AACA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,WAAW;AACb","sourcesContent":[".image-manager {\n  z-index: 800;\n}\n.image-manager .modal-body .col-xs-2 {\n  margin-top: 6px;\n  margin-bottom: 6px;\n}\n.image-manager .modal-footer .pagination {\n  margin: 0;\n}\n.image-manager .modal-header h4 {\n  margin: 0;\n}\n.image-manager .image-thumber {\n  margin: 10px;\n  float: left;\n  position: relative;\n}\n.image-manager .image-upload {\n  margin: 10px;\n  float: left;\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, ".image-thumber {\n  position: relative;\n}\n.image-thumber .item {\n  border: solid 1px #ccc;\n}\n.image-thumber .item .bottom {\n  display: block;\n  overflow: hidden;\n  white-space: nowrap;\n  -webkit-text-overflow: ellipsis;\n  -ms-text-overflow: ellipsis;\n  -o-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  position: absolute;\n  bottom: 0;\n  padding: 4px 8px 0px 8px;\n  font-size: 12px;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.55);\n  color: white;\n  width: calc(100% - 2px);\n  height: 24px;\n}\n.image-thumber .item .bottom button {\n  color: white;\n}\n.image-thumber .item .top {\n  position: absolute;\n  height: 18px;\n  margin-top: -18px;\n  padding-top: 18px;\n  color: white;\n  font-size: 12px;\n  font-weight: bold;\n  text-align: right;\n  width: calc(100% - 2px);\n}\n.image-thumber .item.selected {\n  border-color: blue;\n}\n.image-thumber .item.selected .triangle {\n  position: relative;\n  top: 19px;\n  left: calc(100% - 19px);\n  width: 20px;\n  height: 20px;\n  margin-top: -40px;\n  background: transparent;\n  border-top: 20px solid transparent;\n  border-bottom: 20px solid blue;\n  border-left: 20px solid transparent;\n  border-right: 20px solid transparent;\n  transform: rotate(45deg);\n}\n.image-thumber .item.selected:hover .remove {\n  display: none;\n}\n.image-thumber .item .remove {\n  display: none;\n}\n.image-thumber .item:hover .remove {\n  position: relative;\n  left: calc(100% - 20px);\n  top: 20px;\n  width: 20px;\n  height: 20px;\n  border-radius: 10px;\n  margin-top: -20px;\n  display: block;\n  background-color: rgba(0, 0, 0, 0.55);\n}\n.image-thumber .item:hover .remove i {\n  color: white;\n}\n.image-thumber .item .disabled {\n  position: absolute;\n  width: calc(100% - 2px);\n  height: calc(100% - 2px);\n  background-color: gray;\n  top: 0px;\n  opacity: 0.3;\n}\n", "",{"version":3,"sources":["webpack://./content/image-thumber.less"],"names":[],"mappings":"AAAA;EACE,kBAAkB;AACpB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,cAAc;EACd,gBAAgB;EAChB,mBAAmB;EACnB,+BAA+B;EAC/B,2BAA2B;EAC3B,0BAA0B;EAC1B,uBAAuB;EACvB,kBAAkB;EAClB,SAAS;EACT,wBAAwB;EACxB,eAAe;EACf,kBAAkB;EAClB,qCAAqC;EACrC,YAAY;EACZ,uBAAuB;EACvB,YAAY;AACd;AACA;EACE,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,iBAAiB;EACjB,uBAAuB;AACzB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,uBAAuB;EACvB,kCAAkC;EAClC,8BAA8B;EAC9B,mCAAmC;EACnC,oCAAoC;EACpC,wBAAwB;AAC1B;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,SAAS;EACT,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;EACjB,cAAc;EACd,qCAAqC;AACvC;AACA;EACE,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,wBAAwB;EACxB,sBAAsB;EACtB,QAAQ;EACR,YAAY;AACd","sourcesContent":[".image-thumber {\n  position: relative;\n}\n.image-thumber .item {\n  border: solid 1px #ccc;\n}\n.image-thumber .item .bottom {\n  display: block;\n  overflow: hidden;\n  white-space: nowrap;\n  -webkit-text-overflow: ellipsis;\n  -ms-text-overflow: ellipsis;\n  -o-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  position: absolute;\n  bottom: 0;\n  padding: 4px 8px 0px 8px;\n  font-size: 12px;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.55);\n  color: white;\n  width: calc(100% - 2px);\n  height: 24px;\n}\n.image-thumber .item .bottom button {\n  color: white;\n}\n.image-thumber .item .top {\n  position: absolute;\n  height: 18px;\n  margin-top: -18px;\n  padding-top: 18px;\n  color: white;\n  font-size: 12px;\n  font-weight: bold;\n  text-align: right;\n  width: calc(100% - 2px);\n}\n.image-thumber .item.selected {\n  border-color: blue;\n}\n.image-thumber .item.selected .triangle {\n  position: relative;\n  top: 19px;\n  left: calc(100% - 19px);\n  width: 20px;\n  height: 20px;\n  margin-top: -40px;\n  background: transparent;\n  border-top: 20px solid transparent;\n  border-bottom: 20px solid blue;\n  border-left: 20px solid transparent;\n  border-right: 20px solid transparent;\n  transform: rotate(45deg);\n}\n.image-thumber .item.selected:hover .remove {\n  display: none;\n}\n.image-thumber .item .remove {\n  display: none;\n}\n.image-thumber .item:hover .remove {\n  position: relative;\n  left: calc(100% - 20px);\n  top: 20px;\n  width: 20px;\n  height: 20px;\n  border-radius: 10px;\n  margin-top: -20px;\n  display: block;\n  background-color: rgba(0, 0, 0, 0.55);\n}\n.image-thumber .item:hover .remove i {\n  color: white;\n}\n.image-thumber .item .disabled {\n  position: absolute;\n  width: calc(100% - 2px);\n  height: calc(100% - 2px);\n  background-color: gray;\n  top: 0px;\n  opacity: 0.3;\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, ".image-upload .item {\n  border: 1px solid #cccccc;\n  text-align: center;\n  height: 120px;\n  width: 120px;\n}\n.image-upload input[type=\"file\"] {\n  opacity: 0;\n  position: relative;\n  height: 120px;\n  width: 120px;\n  top: -100px;\n}\n.image-upload i {\n  margin-top: 20px;\n}\n", "",{"version":3,"sources":["webpack://./content/image-upload.less"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,aAAa;EACb,YAAY;AACd;AACA;EACE,UAAU;EACV,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,WAAW;AACb;AACA;EACE,gBAAgB;AAClB","sourcesContent":[".image-upload .item {\n  border: 1px solid #cccccc;\n  text-align: center;\n  height: 120px;\n  width: 120px;\n}\n.image-upload input[type=\"file\"] {\n  opacity: 0;\n  position: relative;\n  height: 120px;\n  width: 120px;\n  top: -100px;\n}\n.image-upload i {\n  margin-top: 20px;\n}\n"],"sourceRoot":""}]);
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

/***/ "./out/common.js":
/*!***********************!*\
  !*** ./out/common.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createDialogElement = exports.imageUrl = void 0;
function imageUrl(path, width, height) {
    if (!path)
        return path;
    if (path.startsWith('data:image'))
        return path;
    if (path.indexOf(',') > 0) {
        path = path.split(',')[0];
    }
    let HTTP = 'http://';
    if (path.startsWith(HTTP)) {
        path = path.substr(HTTP.length);
        let index = path.indexOf('/');
        console.assert(index > 0);
        path = path.substr(index);
    }
    else if (path[0] == '/') {
        path = path.substr(1);
    }
    let urlParams = new Array();
    let protocol = location.protocol;
    let url = `${path}`;
    if (width) {
        // url = url + '?width=' + width;
        urlParams.push({ name: 'width', value: width.toString() });
        if (height)
            urlParams.push({ name: 'height', value: height.toString() });
    }
    if (navigator.userAgent.indexOf('chrome') < 0) {
        urlParams.push({ name: 'type', value: 'jpeg' });
    }
    if (urlParams.length > 0) {
        url = url + '?' + urlParams.map(o => `${o.name}=${o.value}`).join('&');
    }
    return url;
}
exports.imageUrl = imageUrl;
function createDialogElement(className) {
    let element = document.createElement('div');
    element.className = 'modal fade ' + className;
    element.style.zIndex = '1000';
    document.body.appendChild(element);
    return element;
}
exports.createDialogElement = createDialogElement;


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
var _pagingBarElement, _dialog;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSourceDialog = exports.DataSourceDialogContext = void 0;
const React = __webpack_require__(/*! react */ "react");
const number_paging_bar_1 = __webpack_require__(/*! ../number-paging-bar */ "./out/number-paging-bar.js");
const strings_1 = __webpack_require__(/*! ../strings */ "./out/strings.js");
const modal_dialog_1 = __webpack_require__(/*! ./modal-dialog */ "./out/dialogs/modal-dialog.js");
__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'content/data-source-dialog.less'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
let strings = strings_1.getStrings();
exports.DataSourceDialogContext = React.createContext({ dataItem: null });
class DataSourceDialog extends React.Component {
    constructor(props) {
        super(props);
        _pagingBarElement.set(this, void 0);
        _dialog.set(this, void 0);
        this.state = {};
        this.props.dataSource.selected.add(e => {
            this.setState({ items: e.selectResult.dataItems });
        });
        this.props.dataSource.inserted.add(args => {
            var _a;
            (_a = this.state.items) === null || _a === void 0 ? void 0 : _a.push(args.dataItem);
            this.setState({ items: this.state.items });
        });
    }
    show() {
        this.props.dataSource.select({
            maximumRows: this.props.pageItemsCount,
        });
        __classPrivateFieldGet(this, _dialog).show();
    }
    confirm() {
    }
    pagingBarElementRef(e) {
        if (!e || __classPrivateFieldGet(this, _pagingBarElement))
            return;
        __classPrivateFieldSet(this, _pagingBarElement, e);
        new number_paging_bar_1.DataSourcePagingBar({
            dataSource: this.props.dataSource,
            element: e,
            pagerSettings: {
                activeButtonClassName: 'active',
                buttonWrapper: 'li',
                buttonContainerWraper: 'ul',
                showTotal: false
            },
        });
        let ul = e.querySelector('ul');
        if (ul)
            ul.className = "pagination";
    }
    renderBody() {
        let { items } = this.state;
        if (items === undefined) {
            return React.createElement("div", { className: "empty" }, strings.dataLoading);
        }
        if (items == null || items.length == 0) {
            return React.createElement("div", { className: "empty" }, strings.dataEmpty);
        }
        return items.map((o, i) => React.createElement(exports.DataSourceDialogContext.Provider, { key: i, value: { dataItem: o } }, this.props.children));
    }
    componentDidMount() {
    }
    render() {
        return React.createElement(modal_dialog_1.ModalDialog, Object.assign({}, this.props, { ref: e => __classPrivateFieldSet(this, _dialog, e || __classPrivateFieldGet(this, _dialog)) }),
            React.createElement("div", { className: "modal-body" }, this.renderBody()),
            React.createElement("div", { className: "modal-footer", style: { marginTop: 0 } },
                React.createElement("div", { className: "pull-left", ref: (e) => this.pagingBarElementRef(e) }),
                React.createElement("button", { type: "button", className: "btn btn-default", "data-dismiss": "modal" }, this.props.cancelButtonText || "取消"),
                React.createElement("button", { type: "button", className: "btn btn-primary", onClick: () => this.confirm() }, this.props.confirmButtonText || "确定")));
    }
}
exports.DataSourceDialog = DataSourceDialog;
_pagingBarElement = new WeakMap(), _dialog = new WeakMap();


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
    /** 显示对话框 */
    show() {
        maishu_ui_toolkit_1.showDialog(__classPrivateFieldGet(this, _element));
    }
    /** 隐藏对话框 */
    hide() {
        maishu_ui_toolkit_1.hideDialog(__classPrivateFieldGet(this, _element));
    }
    render() {
        return React.createElement("div", { className: "modal fade", ref: e => __classPrivateFieldSet(this, _element, e || __classPrivateFieldGet(this, _element)) },
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
                React.createElement("button", { type: "button", className: "btn btn-primary", onClick: () => this.props.onConfirm ? this.props.onConfirm() : null }, this.props.confirmButtonText || "确定"));
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
const image_upload_1 = __webpack_require__(/*! ./image-upload */ "./out/image-upload.js");
const image_thumber_1 = __webpack_require__(/*! ./image-thumber */ "./out/image-thumber.js");
// import * as wuzhui from 'maishu-wuzhui-helper';
const React = __webpack_require__(/*! react */ "react");
const ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
const common_1 = __webpack_require__(/*! ./common */ "./out/common.js");
const ui = __webpack_require__(/*! maishu-ui-toolkit */ "maishu-ui-toolkit");
// import { DataSourceSelectArguments } from 'maishu-wuzhui-helper';
const image_service_1 = __webpack_require__(/*! ./image-service */ "./out/image-service.js");
const strings_1 = __webpack_require__(/*! ./strings */ "./out/strings.js");
const maishu_toolkit_1 = __webpack_require__(/*! maishu-toolkit */ "maishu-toolkit");
__webpack_require__(/*! ../content/image-manager.less */ "./content/image-manager.less");
const number_paging_bar_1 = __webpack_require__(/*! ./number-paging-bar */ "./out/number-paging-bar.js");
let strings = strings_1.getStrings();
class ImageManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = { images: [], selectedItems: [] };
        this.selectArguments = { maximumRows: 17 };
        this.dataSource = createImageDataSource();
        this.dataSource.selected.add(args => {
            this.setState({ images: args.selectResult.dataItems });
        });
        this.dataSource.inserted.add(args => {
            this.state.images.push(args.dataItem);
            this.setState({ images: this.state.images });
        });
        this.imageService = new image_service_1.ImageService();
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            new number_paging_bar_1.DataSourcePagingBar({
                dataSource: this.dataSource,
                element: this.pagingBarElement,
                pagerSettings: {
                    activeButtonClassName: 'active',
                    buttonWrapper: 'li',
                    buttonContainerWraper: 'ul',
                    showTotal: false
                },
            });
            let ul = this.pagingBarElement.querySelector('ul');
            if (ul)
                ul.className = "pagination";
        });
    }
    show(selectedMax, callback) {
        this.showDialogCallback = callback;
        this.selectArguments.startRowIndex = 0;
        this.dataSource.select(this.selectArguments);
        this.setState({ selectedItems: [], selectedMax });
        ui.showDialog(this.props.element);
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
    render() {
        let { images, selectedItems, selectedMax } = this.state;
        let element = this.props.element;
        return (React.createElement("div", { className: "modal-dialog modal-lg" },
            React.createElement("div", { className: "modal-content" },
                React.createElement("div", { className: "modal-header" },
                    React.createElement("button", { type: "button", className: "btn close", onClick: () => ui.hideDialog(element) },
                        React.createElement("span", { "aria-hidden": "true" }, "\u00D7")),
                    React.createElement("h4", { className: "modal-title" }, strings.selectImage)),
                React.createElement("div", { className: "modal-body" },
                    images.map((o) => {
                        let selectedText = selectedItems.indexOf(o.id) >= 0 ? `${selectedItems.indexOf(o.id) + 1}` : '';
                        let selectedAll = selectedItems.length == selectedMax;
                        let thumber = React.createElement(image_thumber_1.default, { key: o.id, imagePath: this.imageService.imageSource(o.id, 150, 150), remove: () => this.removeImage(o), selectedText: selectedText, disabled: selectedAll && !selectedText, text: o.width != null && o.height != null ? `${o.width} X ${o.height}` : " ", onClick: () => {
                                let selectedItems = this.state.selectedItems;
                                if (selectedItems.indexOf(o.id) >= 0) {
                                    selectedItems = selectedItems.filter(c => c != o.id);
                                }
                                else {
                                    if (selectedItems.length == selectedMax)
                                        return;
                                    selectedItems.push(o.id);
                                }
                                this.setState({ selectedItems });
                            } });
                        return thumber;
                    }),
                    React.createElement(image_upload_1.default, { saveImage: (data) => this.saveImage(data.base64), width: 400 }),
                    React.createElement("div", { className: "clearfix" })),
                React.createElement("div", { className: "modal-footer" },
                    React.createElement("div", { className: "pull-left", ref: (e) => this.pagingBarElement = e || this.pagingBarElement }),
                    selectedMax ? React.createElement("div", { className: "pull-left", style: { paddingTop: 8, paddingLeft: 10 } },
                        strings.selectMax,
                        React.createElement("b", { style: { padding: '0 2px 0 2px' } }, selectedMax),
                        "\u5F20") : null,
                    React.createElement("button", { name: "cancel", type: "button", className: "btn btn-default", onClick: () => ui.hideDialog(element) }, strings.cancel),
                    React.createElement("button", { name: "ok", type: "button", className: "btn btn-primary", disabled: selectedItems.length == 0, onClick: () => {
                            if (this.showDialogCallback) {
                                let imageIds = this.state.selectedItems.map(o => o);
                                this.showDialogCallback(imageIds);
                            }
                            ui.hideDialog(element);
                        } }, strings.confirm)))));
    }
}
let element = common_1.createDialogElement('image-manager');
let instance = ReactDOM.render(React.createElement(ImageManager, { element: element }), element);
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
const maishu_chitu_1 = __webpack_require__(/*! maishu-chitu */ "maishu-chitu");
const maishu_toolkit_1 = __webpack_require__(/*! maishu-toolkit */ "maishu-toolkit");
const ui = __webpack_require__(/*! maishu-ui-toolkit */ "maishu-ui-toolkit");
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
class ImageService extends maishu_chitu_1.Service {
    constructor() {
        super(err => ImageService.errorHandle(err));
    }
    url(path) {
        return maishu_toolkit_1.pathConcat(ImageService.serviceHost, path);
    }
    /** 获取图片的 URL
     * @param id 图片的 ID
     * @param width 图片的宽度，如果不指定则为实际图片的宽度
     * @param height 图片的高度，如果不指定则为实际图片的高度
     */
    imageSource(id, width, height) {
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
        if (id != null && (id.startsWith("http://") || id.startsWith("https://")))
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
    generateImageBase64(width, height, obj, options) {
        if (document == null) {
            throw exports.errors.notSupportedInNode();
        }
        var canvas = document.createElement('canvas');
        canvas.width = width; //img_width;
        canvas.height = height; //img_height;
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
            let url = this.url('upload');
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
ImageService.errorHandle = (err) => {
    ui.alert({ title: "错误", message: err.message });
};
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
        this.state = { selectedText: '' };
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
        let { imagePath, className, onClick, selectedText, text, title, disabled } = this.props;
        className = className || '';
        text = text || '';
        return (React.createElement("div", { className: `image-thumber ${className}`, title: title, "data-url": imagePath, onClick: (e) => {
                if (disabled)
                    return;
                this.props.onClick ? this.props.onClick(this, e) : null;
            } },
            React.createElement("div", { className: `item text-center  ${selectedText ? 'selected' : ''}` },
                React.createElement("div", { className: "triangle" }),
                React.createElement("div", { className: "top" }, selectedText),
                this.props.remove ?
                    React.createElement("div", { className: "remove" },
                        React.createElement("i", { className: "fa fa-remove", ref: (e) => this.setDeleteButton(e, imagePath) })) : null,
                React.createElement("img", { className: "img-responsive", src: imagePath, ref: (e) => e ? ui.renderImage(e, { imageSize: { width: 150, height: 150 } }) : null }),
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
        super(props);
        this.state = { imageSource: props.imageSource };
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
    componentDidMount() {
        // this.setSizes();
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
        // if (imageSource != null && !this.props.displayImage?.fixed)
        // return <div className={`image-upload ${className}`} style={this.props.style}  >
        //     <div className="item" ref={e => this.itemElement = e || this.itemElement}>
        //         {imageSource ? <img src={imageSource} style={{ width: "100%", height: "100%" }} /> : <>
        //             <i className="fa fa-plus fa-4x"></i>
        //             <div>{title}</div>
        //         </>}
        //         <input type="file" style={{}}
        //             ref={(e: HTMLInputElement) => this.setFileInput(e)} />
        //     </div>
        // </div>
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
                    React.createElement("img", { src: imageSource, style: { width: "100%", height: "100%" } })));
        }
        return React.createElement("div", { ref: div => {
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
exports.DataSourceDialogContext = exports.DataSourceDialog = exports.ModalDialog = exports.ImageService = exports.showImageDialog = exports.ImageUpload = exports.ImageThumber = void 0;
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
    dataEmpty: "暂无所要展示的数据"
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
    dataEmpty: "Data is empty"
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

/***/ "maishu-chitu":
/*!*******************************!*\
  !*** external "maishu-chitu" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_maishu_chitu__;

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