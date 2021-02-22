/*!
 * 
 *  maishu-image-components v1.0.0
 * 
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("maishu-chitu"), require("maishu-ui-toolkit"), require("maishu-wuzhui-helper"), require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["maishu-chitu", "maishu-ui-toolkit", "maishu-wuzhui-helper", "react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["image-components"] = factory(require("maishu-chitu"), require("maishu-ui-toolkit"), require("maishu-wuzhui-helper"), require("react"), require("react-dom"));
	else
		root["image-components"] = factory(root["maishu-chitu"], root["maishu-ui-toolkit"], root["maishu-wuzhui-helper"], root["react"], root["react-dom"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_maishu_chitu__, __WEBPACK_EXTERNAL_MODULE_maishu_ui_toolkit__, __WEBPACK_EXTERNAL_MODULE_maishu_wuzhui_helper__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../out/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../content/image-manager.less":
/*!*************************************!*\
  !*** ../content/image-manager.less ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_image_manager_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./image-manager.less */ "../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!../content/image-manager.less");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_image_manager_less__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_image_manager_less__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "../content/image-thumber.less":
/*!*************************************!*\
  !*** ../content/image-thumber.less ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_image_thumber_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./image-thumber.less */ "../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!../content/image-thumber.less");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_image_thumber_less__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_image_thumber_less__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "../content/image-upload.less":
/*!************************************!*\
  !*** ../content/image-upload.less ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_image_upload_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./image-upload.less */ "../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!../content/image-upload.less");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_image_upload_less__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_image_upload_less__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!../content/image-manager.less":
/*!********************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!../content/image-manager.less ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".image-manager {\n  z-index: 800;\n}\n.image-manager .modal-body .col-xs-2 {\n  margin-top: 6px;\n  margin-bottom: 6px;\n}\n.image-manager .modal-footer .pagination {\n  margin: 0;\n}\n.image-manager .modal-header h4 {\n  margin: 0;\n}\n", "",{"version":3,"sources":["webpack://./../content/image-manager.less"],"names":[],"mappings":"AAAA;EACE,YAAY;AACd;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,SAAS;AACX;AACA;EACE,SAAS;AACX","sourcesContent":[".image-manager {\n  z-index: 800;\n}\n.image-manager .modal-body .col-xs-2 {\n  margin-top: 6px;\n  margin-bottom: 6px;\n}\n.image-manager .modal-footer .pagination {\n  margin: 0;\n}\n.image-manager .modal-header h4 {\n  margin: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!../content/image-thumber.less":
/*!********************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!../content/image-thumber.less ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".image-thumber .item {\n  border: solid 1px #ccc;\n}\n.image-thumber .item .bottom {\n  display: block;\n  overflow: hidden;\n  white-space: nowrap;\n  -webkit-text-overflow: ellipsis;\n  -ms-text-overflow: ellipsis;\n  -o-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  position: absolute;\n  bottom: 0;\n  padding: 4px 8px 0px 8px;\n  font-size: 12px;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.55);\n  color: white;\n  width: 120px;\n  height: 24px;\n}\n.image-thumber .item .bottom button {\n  color: white;\n}\n.image-thumber .item .top {\n  position: absolute;\n  height: 18px;\n  margin-top: -18px;\n  padding-top: 18px;\n  color: white;\n  font-size: 12px;\n  font-weight: bold;\n  text-align: right;\n  width: 120px;\n}\n.image-thumber .item.selected {\n  border-color: blue;\n}\n.image-thumber .item.selected .triangle {\n  position: relative;\n  top: 16px;\n  left: calc(100% - 8px);\n  width: 16px;\n  height: 16px;\n  margin-top: -32px;\n  background: transparent;\n  border-top: 16px solid transparent;\n  border-bottom: 16px solid blue;\n  border-left: 16px solid transparent;\n  border-right: 16px solid transparent;\n  transform: rotate(45deg);\n}\n.image-thumber .item.selected:hover .remove {\n  display: none;\n}\n.image-thumber .item .remove {\n  display: none;\n}\n.image-thumber .item:hover .remove {\n  position: relative;\n  left: calc(100% - 14px);\n  top: 20px;\n  width: 20px;\n  height: 20px;\n  border-radius: 10px;\n  margin-top: -20px;\n  display: block;\n  background-color: rgba(0, 0, 0, 0.55);\n}\n.image-thumber .item:hover .remove i {\n  color: white;\n}\n.image-thumber .item img {\n  width: 120px;\n  height: 120px;\n}\n.image-thumber .item .disabled {\n  position: absolute;\n  width: 120px;\n  height: 120px;\n  background-color: gray;\n  top: 0px;\n  opacity: 0.3;\n}\n", "",{"version":3,"sources":["webpack://./../content/image-thumber.less"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;AACA;EACE,cAAc;EACd,gBAAgB;EAChB,mBAAmB;EACnB,+BAA+B;EAC/B,2BAA2B;EAC3B,0BAA0B;EAC1B,uBAAuB;EACvB,kBAAkB;EAClB,SAAS;EACT,wBAAwB;EACxB,eAAe;EACf,kBAAkB;EAClB,qCAAqC;EACrC,YAAY;EACZ,YAAY;EACZ,YAAY;AACd;AACA;EACE,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;AACd;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,uBAAuB;EACvB,kCAAkC;EAClC,8BAA8B;EAC9B,mCAAmC;EACnC,oCAAoC;EACpC,wBAAwB;AAC1B;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,SAAS;EACT,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;EACjB,cAAc;EACd,qCAAqC;AACvC;AACA;EACE,YAAY;AACd;AACA;EACE,YAAY;EACZ,aAAa;AACf;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,YAAY;AACd","sourcesContent":[".image-thumber .item {\n  border: solid 1px #ccc;\n}\n.image-thumber .item .bottom {\n  display: block;\n  overflow: hidden;\n  white-space: nowrap;\n  -webkit-text-overflow: ellipsis;\n  -ms-text-overflow: ellipsis;\n  -o-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  position: absolute;\n  bottom: 0;\n  padding: 4px 8px 0px 8px;\n  font-size: 12px;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.55);\n  color: white;\n  width: 120px;\n  height: 24px;\n}\n.image-thumber .item .bottom button {\n  color: white;\n}\n.image-thumber .item .top {\n  position: absolute;\n  height: 18px;\n  margin-top: -18px;\n  padding-top: 18px;\n  color: white;\n  font-size: 12px;\n  font-weight: bold;\n  text-align: right;\n  width: 120px;\n}\n.image-thumber .item.selected {\n  border-color: blue;\n}\n.image-thumber .item.selected .triangle {\n  position: relative;\n  top: 16px;\n  left: calc(100% - 8px);\n  width: 16px;\n  height: 16px;\n  margin-top: -32px;\n  background: transparent;\n  border-top: 16px solid transparent;\n  border-bottom: 16px solid blue;\n  border-left: 16px solid transparent;\n  border-right: 16px solid transparent;\n  transform: rotate(45deg);\n}\n.image-thumber .item.selected:hover .remove {\n  display: none;\n}\n.image-thumber .item .remove {\n  display: none;\n}\n.image-thumber .item:hover .remove {\n  position: relative;\n  left: calc(100% - 14px);\n  top: 20px;\n  width: 20px;\n  height: 20px;\n  border-radius: 10px;\n  margin-top: -20px;\n  display: block;\n  background-color: rgba(0, 0, 0, 0.55);\n}\n.image-thumber .item:hover .remove i {\n  color: white;\n}\n.image-thumber .item img {\n  width: 120px;\n  height: 120px;\n}\n.image-thumber .item .disabled {\n  position: absolute;\n  width: 120px;\n  height: 120px;\n  background-color: gray;\n  top: 0px;\n  opacity: 0.3;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!../content/image-upload.less":
/*!*******************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!../content/image-upload.less ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".image-upload .item {\n  border: 1px solid #cccccc;\n  text-align: center;\n  height: 120px;\n  width: 120px;\n}\n.image-upload input[type=\"file\"] {\n  opacity: 0;\n  position: absolute;\n  height: 120px;\n  width: 120px;\n  top: 0;\n}\n.image-upload i {\n  margin-top: 20px;\n}\n", "",{"version":3,"sources":["webpack://./../content/image-upload.less"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,aAAa;EACb,YAAY;AACd;AACA;EACE,UAAU;EACV,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,MAAM;AACR;AACA;EACE,gBAAgB;AAClB","sourcesContent":[".image-upload .item {\n  border: 1px solid #cccccc;\n  text-align: center;\n  height: 120px;\n  width: 120px;\n}\n.image-upload input[type=\"file\"] {\n  opacity: 0;\n  position: absolute;\n  height: 120px;\n  width: 120px;\n  top: 0;\n}\n.image-upload i {\n  margin-top: 20px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
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

/***/ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!*************************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \*************************************************************************/
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

/***/ "../node_modules/maishu-toolkit/dist/index.js":
/*!****************************************************!*\
  !*** ../node_modules/maishu-toolkit/dist/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*!
 * ~
 *  maishu-toolkit v1.6.0
 *  https://github.com/ansiboy/toolkit
 *  
 *  Copyright (c) 2016-2018, shu mai <ansiboy@163.com>
 *  Licensed under the MIT License.
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else { var i, a; }
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

/***/ "./out/assign-deep.js":
/*!****************************!*\
  !*** ./out/assign-deep.js ***!
  \****************************/
/*! exports provided: objectAssignDeep, objectAssignDeepInto, withOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectAssignDeep", function() { return objectAssignDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectAssignDeepInto", function() { return objectAssignDeepInto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withOptions", function() { return withOptions; });

/*
 * OBJECT ASSIGN DEEP
 * Allows deep cloning of plain objects that contain primitives, nested plain objects, or nested plain arrays.
 */
/*
 * A unified way of returning a string that describes the type of the given variable.
 */
function getTypeOf(input) {
    if (input === null) {
        return 'null';
    }
    else if (typeof input === 'undefined') {
        return 'undefined';
    }
    else if (typeof input === 'object') {
        return (Array.isArray(input) ? 'array' : 'object');
    }
    return typeof input;
}
/*
 * Branching logic which calls the correct function to clone the given value base on its type.
 */
function cloneValue(value) {
    // The value is an object so lets clone it.
    if (getTypeOf(value) === 'object') {
        return quickCloneObject(value);
    }
    // The value is an array so lets clone it.
    else if (getTypeOf(value) === 'array') {
        return quickCloneArray(value);
    }
    // Any other value can just be copied.
    return value;
}
/*
 * Enumerates the given array and returns a new array, with each of its values cloned (i.e. references broken).
 */
function quickCloneArray(input) {
    return input.map(cloneValue);
}
/*
 * Enumerates the properties of the given object (ignoring the prototype chain) and returns a new object, with each of
 * its values cloned (i.e. references broken).
 */
function quickCloneObject(input) {
    const output = {};
    for (const key in input) {
        if (!input.hasOwnProperty(key)) {
            continue;
        }
        output[key] = cloneValue(input[key]);
    }
    return output;
}
/*
 * Does the actual deep merging.
 */
function executeDeepMerge(target, _objects = [], _options = {}) {
    const options = {
        arrayBehaviour: _options.arrayBehaviour || 'replace',
    };
    // Ensure we have actual objects for each.
    const objects = _objects.map(object => object || {});
    const output = target || {};
    // Enumerate the objects and their keys.
    for (let oindex = 0; oindex < objects.length; oindex++) {
        const object = objects[oindex];
        const keys = Object.keys(object);
        for (let kindex = 0; kindex < keys.length; kindex++) {
            const key = keys[kindex];
            const value = object[key];
            const type = getTypeOf(value);
            const existingValueType = getTypeOf(output[key]);
            if (type === 'object') {
                if (existingValueType !== 'undefined') {
                    const existingValue = (existingValueType === 'object' ? output[key] : {});
                    output[key] = executeDeepMerge({}, [existingValue, quickCloneObject(value)], options);
                }
                else {
                    output[key] = quickCloneObject(value);
                }
            }
            else if (type === 'array') {
                if (existingValueType === 'array') {
                    const newValue = quickCloneArray(value);
                    output[key] = (options.arrayBehaviour === 'merge' ? output[key].concat(newValue) : newValue);
                }
                else {
                    output[key] = quickCloneArray(value);
                }
            }
            else {
                output[key] = value;
            }
        }
    }
    return output;
}
/*
 * Merge all the supplied objects into the target object, breaking all references, including those of nested objects
 * and arrays, and even objects nested inside arrays. The first parameter is not mutated unlike Object.assign().
 * Properties in later objects will always overwrite.
 */
function objectAssignDeep(target, ...objects) {
    return executeDeepMerge(target, objects);
}
;
/*
 * Same as objectAssignDeep() except it doesn't mutate the target object and returns an entirely new object.
 */
function objectAssignDeepInto(...objects) {
    return executeDeepMerge({}, objects);
}
;
/*
 * Allows an options object to be passed in to customise the behaviour of the function.
 */
let withOptions = function objectAssignDeepInto(target, objects, options) {
    return executeDeepMerge(target, objects, options);
};


/***/ }),

/***/ "./out/callback.js":
/*!*************************!*\
  !*** ./out/callback.js ***!
  \*************************/
/*! exports provided: Callback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Callback", function() { return Callback; });
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
    fire(args) {
        this.funcs.forEach(o => o(args));
    }
    static create() {
        return new Callback();
    }
}


/***/ }),

/***/ "./out/data.js":
/*!*********************!*\
  !*** ./out/data.js ***!
  \*********************/
/*! exports provided: DataSource, DataSourceSelectArguments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return DataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSourceSelectArguments", function() { return DataSourceSelectArguments; });
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ "./out/errors.js");
/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./callback */ "./out/callback.js");


let errors = Object.assign(_errors__WEBPACK_IMPORTED_MODULE_0__["errors"], {
    dataSourceCanntInsert() {
        return new Error("DataSource can not insert.");
    },
    dataSourceCanntDelete() {
        return new Error("DataSource can not delete.");
    },
    dataSourceCanntUpdate() {
        return new Error("DataSource can not update.");
    },
    primaryKeyNull(key) {
        let msg = `Primary key named '${key}' value is null.`;
        return new Error(msg);
    },
    queryResultTypeError() {
        let msg = `Query result type error.`;
        return new Error(msg);
    }
});
class DataSource {
    constructor(args) {
        this.inserting = new _callback__WEBPACK_IMPORTED_MODULE_1__["Callback"](); //callbacks1<DataSource<T>, T, number>();
        this.inserted = new _callback__WEBPACK_IMPORTED_MODULE_1__["Callback"]();
        this.deleting = new _callback__WEBPACK_IMPORTED_MODULE_1__["Callback"](); //callbacks<DataSource<T>, T>();
        this.deleted = new _callback__WEBPACK_IMPORTED_MODULE_1__["Callback"](); //callbacks<DataSource<T>, T>();
        this.updating = new _callback__WEBPACK_IMPORTED_MODULE_1__["Callback"]();
        this.updated = new _callback__WEBPACK_IMPORTED_MODULE_1__["Callback"]();
        this.selecting = new _callback__WEBPACK_IMPORTED_MODULE_1__["Callback"]();
        this.selected = new _callback__WEBPACK_IMPORTED_MODULE_1__["Callback"](); //callbacks<DataSource<T>, DataSourceSelectResult<T>>();
        this.error = new _callback__WEBPACK_IMPORTED_MODULE_1__["Callback"](); //callbacks<this, DataSourceError>();
        this.args = args;
        this.primaryKeys = args.primaryKeys || [];
    }
    ; //callbacks<DataSource<T>, DataSourceSelectArguments>();
    get canDelete() {
        return this.args.delete != null && this.primaryKeys.length > 0;
    }
    get canInsert() {
        return this.args.insert != null && this.primaryKeys.length > 0;
    }
    get canUpdate() {
        return this.args.update != null && this.primaryKeys.length > 0;
    }
    executeInsert(item, args) {
        return this.args.insert(item, args);
    }
    executeDelete(item, args) {
        return this.args.delete(item, args);
    }
    executeUpdate(item, args) {
        return this.args.update(item, args);
    }
    executeSelect(args) {
        args = args || {};
        return this.args.select(args);
    }
    insert(item, args, index) {
        if (!this.canInsert)
            throw errors.dataSourceCanntInsert();
        if (!item)
            throw errors.argumentNull("item");
        if (typeof args == 'number') {
            index = args;
            args = null;
        }
        this.inserting.fire({ sender: this, dataItem: item, index });
        return this.executeInsert(item, args).then((data) => {
            Object.assign(item, data);
            this.inserted.fire({ sender: this, dataItem: item, index });
            return data;
        }).catch(exc => {
            this.processError(exc, 'insert');
            throw exc;
        });
    }
    delete(item, args) {
        if (!this.canDelete)
            throw errors.dataSourceCanntDelete();
        if (!item)
            throw errors.argumentNull("item");
        this.checkPrimaryKeys(item);
        this.deleting.fire({ sender: this, dataItem: item });
        return this.executeDelete(item, args).then((data) => {
            this.deleted.fire({ sender: this, dataItem: item });
            return data;
        }).catch(exc => {
            this.processError(exc, 'delete');
            throw exc;
        });
    }
    update(item, args) {
        if (!this.canUpdate)
            throw errors.dataSourceCanntUpdate();
        if (!item)
            throw errors.argumentNull("item");
        this.checkPrimaryKeys(item);
        this.updating.fire({ sender: this, dataItem: item });
        return this.executeUpdate(item, args).then((data) => {
            Object.assign(item, data);
            this.updated.fire({ sender: this, dataItem: item });
            return data;
        }).catch((exc) => {
            this.processError(exc, 'update');
            throw exc;
        });
    }
    isSameItem(theItem, otherItem) {
        if (theItem == null)
            throw errors.argumentNull('theItem');
        if (otherItem == null)
            throw errors.argumentNull('otherItem');
        if (this.primaryKeys.length == 0)
            return theItem == otherItem;
        this.checkPrimaryKeys(theItem);
        this.checkPrimaryKeys(otherItem);
        for (let pk of this.primaryKeys) {
            if (theItem[pk] != otherItem[pk])
                return false;
        }
        return true;
    }
    checkPrimaryKeys(item) {
        for (let key in item) {
            if (item[key] == null && this.primaryKeys.indexOf(key) >= 0)
                throw errors.primaryKeyNull(key);
        }
    }
    select(args) {
        args = args || {};
        // fireCallback(this.selecting, this, args);
        this.selecting.fire({ sender: this, selectArguments: args });
        return this.executeSelect(args).then((data) => {
            let dataItems;
            let totalRowCount;
            if (Array.isArray(data)) {
                dataItems = data;
                totalRowCount = data.length;
            }
            else if (data.dataItems !== undefined && data.totalRowCount !== undefined) {
                dataItems = data.dataItems;
                totalRowCount = data.totalRowCount;
            }
            else {
                throw errors.queryResultTypeError();
            }
            this.selected.fire({ sender: this, selectResult: { totalRowCount, dataItems }, selectArguments: args });
            return { totalRowCount, dataItems };
        }).catch(exc => {
            this.processError(exc, 'select');
            throw exc;
        });
    }
    processError(exc, method) {
        exc.method = method;
        this.error.fire({ sender: this, error: exc });
        if (!exc.handled)
            throw exc;
    }
}
class DataSourceSelectArguments {
    constructor() {
        this.startRowIndex = 0;
        this.maximumRows = 2147483647;
    }
}


/***/ }),

/***/ "./out/deep-equal.js":
/*!***************************!*\
  !*** ./out/deep-equal.js ***!
  \***************************/
/*! exports provided: deepEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepEqual", function() { return deepEqual; });
function deepEqual(x, y) {
    if (x === y) {
        return true;
    }
    if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
        if (Object.keys(x).length != Object.keys(y).length)
            return false;
        for (var prop in x) {
            if (y.hasOwnProperty(prop)) {
                if (!deepEqual(x[prop], y[prop]))
                    return false;
            }
            else
                return false;
        }
        return true;
    }
    return false;
}


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
    argumentNull(argumentName) {
        let error = new Error(`Argument ${argumentName} cannt be null or emtpy.`);
        let name = "argumentNull";
        error.name = name;
        return error;
    }
    routeDataFieldNull(fieldName) {
        let msg = `The ${fieldName} field of route data cannt be null.`;
        let error = new Error(msg);
        let name = "routeDataFieldNull";
        error.name = name;
        return error;
    }
    argumentFieldNull(fieldName, argumentName) {
        let msg = `The ${fieldName} field of ${argumentName} cannt be null.`;
        let error = new Error(msg);
        let name = "argumentFieldNull";
        error.name = name;
        return error;
    }
    argumentTypeIncorrect(argumentName, expectedType) {
        let msg = `Argument ${argumentName} type error, expected type is ${expectedType}.`;
        let error = new Error(msg);
        let name = "argumentTypeIncorrect";
        error.name = name;
        return error;
    }
}
let errors = new Errors();


/***/ }),

/***/ "./out/format-date.js":
/*!****************************!*\
  !*** ./out/format-date.js ***!
  \****************************/
/*! exports provided: formatDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
function formatDate(date, showHourMinutes) {
    if (typeof date == "string")
        return date;
    let d = date;
    if (showHourMinutes)
        return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()} ${d.getHours() + 1}:${d.getMinutes()}`;
    return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
}


/***/ }),

/***/ "./out/guid.js":
/*!*********************!*\
  !*** ./out/guid.js ***!
  \*********************/
/*! exports provided: guid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guid", function() { return guid; });
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}


/***/ }),

/***/ "./out/html.js":
/*!*********************!*\
  !*** ./out/html.js ***!
  \*********************/
/*! exports provided: HTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTML", function() { return HTML; });
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ "./out/errors.js");

class HTML {
    static addClassName(element, addonClassName) {
        if (element == null)
            throw _errors__WEBPACK_IMPORTED_MODULE_0__["errors"].argumentNull('element');
        if (!addonClassName)
            throw _errors__WEBPACK_IMPORTED_MODULE_0__["errors"].argumentNull('addonClassName');
        let sourceClassName;
        if (typeof element == 'string')
            sourceClassName = element;
        else
            sourceClassName = element.className;
        sourceClassName = sourceClassName || '';
        console.assert(addonClassName != null);
        if (sourceClassName.indexOf(addonClassName) >= 0)
            return sourceClassName;
        let className = `${sourceClassName} ${addonClassName}`;
        if (typeof element != 'string')
            element.className = className;
        return className;
    }
    static removeClassName(element, targetClassName) {
        let sourceClassName;
        if (typeof element == 'string')
            sourceClassName = element;
        else
            sourceClassName = element.className || '';
        if (sourceClassName.indexOf(targetClassName) < 0)
            return sourceClassName;
        sourceClassName = sourceClassName || '';
        sourceClassName = sourceClassName.replace(new RegExp(targetClassName, 'g'), '');
        sourceClassName = sourceClassName.trim();
        if (typeof element != 'string')
            element.className = sourceClassName;
        return sourceClassName;
    }
}


/***/ }),

/***/ "./out/index.js":
/*!**********************!*\
  !*** ./out/index.js ***!
  \**********************/
/*! exports provided: guid, pathConcat, Errors, errors, Callback, DataSource, DataSourceSelectArguments, parseUrl, deepEqual, objectAssignDeep, formatDate, HTML, ValueStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _guid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guid */ "./out/guid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "guid", function() { return _guid__WEBPACK_IMPORTED_MODULE_0__["guid"]; });

/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./path */ "./out/path.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pathConcat", function() { return _path__WEBPACK_IMPORTED_MODULE_1__["pathConcat"]; });

/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors */ "./out/errors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Errors", function() { return _errors__WEBPACK_IMPORTED_MODULE_2__["Errors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "errors", function() { return _errors__WEBPACK_IMPORTED_MODULE_2__["errors"]; });

/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./callback */ "./out/callback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Callback", function() { return _callback__WEBPACK_IMPORTED_MODULE_3__["Callback"]; });

/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ "./out/data.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return _data__WEBPACK_IMPORTED_MODULE_4__["DataSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSourceSelectArguments", function() { return _data__WEBPACK_IMPORTED_MODULE_4__["DataSourceSelectArguments"]; });

/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./url */ "./out/url.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseUrl", function() { return _url__WEBPACK_IMPORTED_MODULE_5__["parseUrl"]; });

/* harmony import */ var _deep_equal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deep-equal */ "./out/deep-equal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deepEqual", function() { return _deep_equal__WEBPACK_IMPORTED_MODULE_6__["deepEqual"]; });

/* harmony import */ var _assign_deep__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assign-deep */ "./out/assign-deep.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "objectAssignDeep", function() { return _assign_deep__WEBPACK_IMPORTED_MODULE_7__["objectAssignDeep"]; });

/* harmony import */ var _format_date__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./format-date */ "./out/format-date.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return _format_date__WEBPACK_IMPORTED_MODULE_8__["formatDate"]; });

/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./html */ "./out/html.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML", function() { return _html__WEBPACK_IMPORTED_MODULE_9__["HTML"]; });

/* harmony import */ var _value_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./value-store */ "./out/value-store.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValueStore", function() { return _value_store__WEBPACK_IMPORTED_MODULE_10__["ValueStore"]; });














/***/ }),

/***/ "./out/path.js":
/*!*********************!*\
  !*** ./out/path.js ***!
  \*********************/
/*! exports provided: pathConcat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathConcat", function() { return pathConcat; });
/** 连接多个路径 */
function pathConcat(...paths) {
    paths = paths || [];
    if (paths.length == 0)
        return "";
    if (paths.length == 1) {
        return paths[0];
    }
    let str = paths.join("/");
    // 将一个或多个的 / 或者 变为一个 /，例如：/shop/test// 转换为 /shop/test/
    // 或者 D:\shop\test\  转换为 D:/shop/test/
    str = str.replace(/(\/+|\\+)/g, '/');
    //======================================================
    // fixed 把 http:// https:// 变为 http:/ https:/ 的 BUG
    str = str.replace("http:/", "http://");
    str = str.replace("https:/", "https://");
    //======================================================
    return str;
}


/***/ }),

/***/ "./out/url.js":
/*!********************!*\
  !*** ./out/url.js ***!
  \********************/
/*! exports provided: parseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseUrl", function() { return parseUrl; });
function parseUrl(url) {
    let i = url.indexOf("?");
    if (i < 0)
        return {};
    let query = url.substr(i + 1);
    return pareeUrlQuery(query);
}
function pareeUrlQuery(query) {
    let match, pl = /\+/g, // Regex for replacing addition symbol with a space
    search = /([^&=]+)=?([^&]*)/g, decode = function (s) {
        return decodeURIComponent(s.replace(pl, " "));
    };
    let urlParams = {};
    while (match = search.exec(query))
        urlParams[decode(match[1])] = decode(match[2]);
    return urlParams;
}


/***/ }),

/***/ "./out/value-store.js":
/*!****************************!*\
  !*** ./out/value-store.js ***!
  \****************************/
/*! exports provided: ValueStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueStore", function() { return ValueStore; });
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


/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
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

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
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

/***/ "../out/common.js":
/*!************************!*\
  !*** ../out/common.js ***!
  \************************/
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

/***/ "../out/config.js":
/*!************************!*\
  !*** ../out/config.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const ui = __webpack_require__(/*! maishu-ui-toolkit */ "maishu-ui-toolkit");
exports.config = {
    serviceHost: null,
    errorHandle: (err) => {
        ui.alert({ title: "错误", message: err.message });
    }
};


/***/ }),

/***/ "../out/image-manager.js":
/*!*******************************!*\
  !*** ../out/image-manager.js ***!
  \*******************************/
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
const image_upload_1 = __webpack_require__(/*! ./image-upload */ "../out/image-upload.js");
const image_thumber_1 = __webpack_require__(/*! ./image-thumber */ "../out/image-thumber.js");
const wuzhui = __webpack_require__(/*! maishu-wuzhui-helper */ "maishu-wuzhui-helper");
const React = __webpack_require__(/*! react */ "react");
const ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
const common_1 = __webpack_require__(/*! ./common */ "../out/common.js");
const ui = __webpack_require__(/*! maishu-ui-toolkit */ "maishu-ui-toolkit");
const image_service_1 = __webpack_require__(/*! ./image-service */ "../out/image-service.js");
const config_1 = __webpack_require__(/*! ./config */ "../out/config.js");
__webpack_require__(/*! ../content/image-manager.less */ "../content/image-manager.less");
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
        this.imageService = new image_service_1.ImageService((err) => config_1.config.errorHandle(err));
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            new wuzhui.DataSourcePagingBar({
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
            ul.className = "pagination";
            // dataSource.select(this.selectArguments);
        });
    }
    show(selectedMax, callback) {
        this.showDialogCallback = callback;
        // this.state.selectedItems = [];
        // this.setState(this.state);
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
    }
    render() {
        let { images, selectedItems, selectedMax } = this.state;
        let element = this.props.element;
        return (React.createElement("div", { className: "modal-dialog modal-lg" },
            React.createElement("div", { className: "modal-content" },
                React.createElement("div", { className: "modal-header" },
                    React.createElement("button", { type: "button", className: "btn close", onClick: () => ui.hideDialog(element) },
                        React.createElement("span", { "aria-hidden": "true" }, "\u00D7")),
                    React.createElement("h4", { className: "modal-title" }, "\u9009\u62E9\u56FE\u7247")),
                React.createElement("div", { className: "modal-body" },
                    images.map((o) => {
                        let selectedText = selectedItems.indexOf(o.id) >= 0 ? `${selectedItems.indexOf(o.id) + 1}` : '';
                        let selectedAll = selectedItems.length == selectedMax;
                        let thumber = React.createElement(image_thumber_1.default, { key: o.id, imagePath: this.imageService.imageSource(o.id, 150, 150), className: "col-xs-2", remove: () => this.removeImage(o), selectedText: selectedText, disabled: selectedAll && !selectedText, text: o.width != null && o.height != null ? `${o.width} X ${o.height}` : " ", onClick: () => {
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
                    React.createElement(image_upload_1.default, { className: "col-xs-2", saveImage: (data) => this.saveImage(data.base64), width: 400 }),
                    React.createElement("div", { className: "clearfix" })),
                React.createElement("div", { className: "modal-footer" },
                    React.createElement("div", { className: "pull-left", ref: (e) => this.pagingBarElement = e || this.pagingBarElement }),
                    selectedMax ? React.createElement("div", { className: "pull-left", style: { paddingTop: 8, paddingLeft: 10 } },
                        "\u6700\u591A\u53EF\u9009",
                        React.createElement("b", { style: { padding: '0 2px 0 2px' } }, selectedMax),
                        "\u5F20") : null,
                    React.createElement("button", { name: "cancel", type: "button", className: "btn btn-default", onClick: () => ui.hideDialog(element) }, "\u53D6\u6D88"),
                    React.createElement("button", { name: "ok", type: "button", className: "btn btn-primary", disabled: selectedItems.length == 0, onClick: () => {
                            if (this.showDialogCallback) {
                                let imageIds = this.state.selectedItems.map(o => o);
                                this.showDialogCallback(imageIds);
                            }
                            ui.hideDialog(element);
                        } }, "\u786E\u5B9A")))));
    }
}
let element = common_1.createDialogElement('image-manager');
let instance = ReactDOM.render(React.createElement(ImageManager, { element: element }), element);
exports.default = {
    show(callback) {
        instance.show(null, callback);
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
    let station = new image_service_1.ImageService(err => config_1.config.errorHandle(err));
    let dataSource = new wuzhui.DataSource({
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

/***/ "../out/image-service.js":
/*!*******************************!*\
  !*** ../out/image-service.js ***!
  \*******************************/
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
exports.ImageService = exports.settings = exports.errors = void 0;
const maishu_chitu_1 = __webpack_require__(/*! maishu-chitu */ "maishu-chitu");
const maishu_toolkit_1 = __webpack_require__(/*! maishu-toolkit */ "../node_modules/maishu-toolkit/dist/index.js");
const config_1 = __webpack_require__(/*! ./config */ "../out/config.js");
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
exports.settings = {
    noImageText: "暂无图片"
};
/** 图片服务，实现图片的上传，获取 */
class ImageService extends maishu_chitu_1.Service {
    // static baseUrl: string
    url(path) {
        return maishu_toolkit_1.pathConcat(config_1.config.serviceHost, path);
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
            id = this.generateImageBase64(width, height, exports.settings.noImageText);
            return id;
        }
        let isBase64 = id.startsWith('data:image');
        if (isBase64) {
            return id;
        }
        if (id != null && (id.startsWith("http://") || id.startsWith("https://")))
            return id;
        if (id != null && id.indexOf("/") >= 0) {
            let r = maishu_toolkit_1.pathConcat(config_1.config.serviceHost, id);
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

/***/ "../out/image-thumber.js":
/*!*******************************!*\
  !*** ../out/image-thumber.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const ui = __webpack_require__(/*! maishu-ui-toolkit */ "maishu-ui-toolkit");
__webpack_require__(/*! ../content/image-thumber.less */ "../content/image-thumber.less");
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
            return this.props.remove(imagePath);
        }, {
            confirm: '确定删除该图片吗？'
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
                        React.createElement("i", { className: "icon-remove", ref: (e) => this.setDeleteButton(e, imagePath) })) : null,
                React.createElement("img", { src: imagePath, ref: (e) => e ? ui.renderImage(e, { imageSize: { width: 150, height: 150 } }) : null }),
                React.createElement("div", { className: "bottom" }, text),
                disabled ? React.createElement("div", { className: "disabled" }) : null)));
    }
}
exports.default = ImageThumber;


/***/ }),

/***/ "../out/image-upload.js":
/*!******************************!*\
  !*** ../out/image-upload.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const ui = __webpack_require__(/*! maishu-ui-toolkit */ "maishu-ui-toolkit");
__webpack_require__(/*! ../content/image-upload.less */ "../content/image-upload.less");
class ImageUpload extends React.Component {
    updloadImage(imageFile) {
        let { width, height } = this.props;
        ui.imageFileToBase64(imageFile)
            .then(data => {
            this.props.saveImage(data);
        });
    }
    setFileInput(e) {
        if (!e || e.onchange)
            return;
        this.file = e;
        e.onchange = () => {
            if (e.files.length > 0)
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
        let itemPaddingTop;
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
        title = title || '图片上传';
        className = className || '';
        return (React.createElement("div", { className: `image-upload ${className}`, style: this.props.style },
            React.createElement("div", { className: "item", ref: (e) => this.itemElement = e || this.itemElement },
                React.createElement("i", { className: "fa fa-plus fa-4x" }),
                React.createElement("div", null, title),
                React.createElement("input", { type: "file", style: {}, ref: (e) => this.setFileInput(e) }))));
    }
}
exports.default = ImageUpload;


/***/ }),

/***/ "../out/index.js":
/*!***********************!*\
  !*** ../out/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.ImageService = exports.showImageDialog = exports.ImageUpload = exports.ImageThumber = void 0;
var image_thumber_1 = __webpack_require__(/*! ./image-thumber */ "../out/image-thumber.js");
Object.defineProperty(exports, "ImageThumber", { enumerable: true, get: function () { return image_thumber_1.default; } });
var image_upload_1 = __webpack_require__(/*! ./image-upload */ "../out/image-upload.js");
Object.defineProperty(exports, "ImageUpload", { enumerable: true, get: function () { return image_upload_1.default; } });
var image_manager_1 = __webpack_require__(/*! ./image-manager */ "../out/image-manager.js");
Object.defineProperty(exports, "showImageDialog", { enumerable: true, get: function () { return image_manager_1.showImageDialog; } });
var image_service_1 = __webpack_require__(/*! ./image-service */ "../out/image-service.js");
Object.defineProperty(exports, "ImageService", { enumerable: true, get: function () { return image_service_1.ImageService; } });
var config_1 = __webpack_require__(/*! ./config */ "../out/config.js");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return config_1.config; } });


/***/ }),

/***/ "maishu-chitu":
/*!*******************************!*\
  !*** external "maishu-chitu" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_maishu_chitu__;

/***/ }),

/***/ "maishu-ui-toolkit":
/*!************************************!*\
  !*** external "maishu-ui-toolkit" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_maishu_ui_toolkit__;

/***/ }),

/***/ "maishu-wuzhui-helper":
/*!***************************************!*\
  !*** external "maishu-wuzhui-helper" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_maishu_wuzhui_helper__;

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