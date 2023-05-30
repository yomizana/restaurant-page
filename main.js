/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! assets/font/Roboto-Regular.woff2 */ \"./src/assets/font/Roboto-Regular.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! assets/font/Roboto-Regular.woff */ \"./src/assets/font/Roboto-Regular.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! assets/font/Roboto-Medium.woff2 */ \"./src/assets/font/Roboto-Medium.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! assets/font/Roboto-Medium.woff */ \"./src/assets/font/Roboto-Medium.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/jelly-background.jpg */ \"./src/assets/img/jelly-background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: \\\"Roboto\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"woff2\\\"),\\n    url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format(\\\"woff\\\");\\n  font-weight: normal;\\n}\\n\\n@font-face {\\n  font-family: \\\"Roboto\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format(\\\"woff2\\\"),\\n    url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") format(\\\"woff\\\");\\n  font-weight: bold;\\n}\\n\\n:root {\\n  --button-bg-color: #564d4f;\\n  --accent-color: #4c4143;\\n  --primary-bg-color: #342d2e;\\n  --font-size: 1em;\\n  --font-color: #ebd9cc;\\n}\\n\\nbody {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  background-color: whitesmoke;\\n  font-family: \\\"Roboto\\\", Arial, Helvetica, sans-serif;\\n  font-size: var(--font-size);\\n  color: var(--font-color);\\n  height: 100vh;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n.navbar-container {\\n  background-color: var(--primary-bg-color);\\n  position: relative;\\n  border: 1px solid black;\\n  box-shadow: 0px -4px 10px black;\\n  min-height: 30px;\\n}\\n\\n.navbar-ul {\\n  display: flex;\\n  justify-content: flex-end;\\n  gap: 8px;\\n  list-style: none;\\n  margin: 0;\\n  margin-right: 5%;\\n  padding: 0;\\n}\\n\\n.navbar-button {\\n  font-size: var(--navbar-font-size);\\n  background-color: var(--button-bg-color);\\n  color: var(--font-color);\\n  min-height: 30px;\\n  min-width: 80px;\\n  border: none;\\n}\\n\\n.navbar-button:hover {\\n  background-color: var(--accent-color);\\n}\\n\\n#content {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  background-color: var(--primary-bg-color);\\n  background: no-repeat url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\n  background-size: cover;\\n  gap: 10px;\\n  height: 100%;\\n  overflow: auto;\\n}\\n\\n#content > h2 {\\n  background-color: var(--primary-bg-color);\\n  color: var(--font-color);\\n  padding: 20px;\\n  border-radius: 4px;\\n  box-shadow: 0px 0px 5px black;\\n}\\n\\n.container,\\n.social-media-container {\\n  background-color: var(--primary-bg-color);\\n  box-shadow: 0px 0px 5px black;\\n  color: var(--font-color);\\n  border-radius: 4px;\\n  padding: 10px;\\n  width: 500px;\\n}\\n\\n.container > p {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n.container > h3 {\\n  margin: 0;\\n}\\n\\n.container > ul {\\n  list-style: none;\\n  margin: 5px 0 0 0;\\n}\\n\\n.menu-container {\\n  display: grid;\\n  grid-template-columns: repeat(3, 1fr);\\n  gap: 10px;\\n  margin-bottom: 10px;\\n}\\n\\n.item-container {\\n  display: flex;\\n  flex-direction: column;\\n  width: 300px;\\n  min-height: 340px;\\n  background-color: var(--primary-bg-color);\\n  color: var(--font-color);\\n  border-radius: 4px;\\n  box-shadow: 0px 0px 5px black;\\n}\\n\\n.card-name {\\n  margin: 8px 0 8px 0;\\n  text-align: center;\\n  font-size: 1.05em;\\n}\\n\\n.card-image {\\n  object-fit: cover;\\n  height: 200px;\\n  width: 300px;\\n}\\n\\n.card-description {\\n  margin: 8px 0 8px 6px;\\n  padding: 0;\\n}\\n\\n.contact-info {\\n  text-align: center;\\n}\\n\\n.social-media-container > h3 {\\n  margin: 0 0 10px 0;\\n  text-align: center;\\n}\\n\\n.social-media-icons-container {\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n.icon {\\n  width: 30px;\\n  height: 30px;\\n  padding: 0 5px;\\n}\\n\\n.footer-container {\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n  text-align: center;\\n  background-color: var(--primary-bg-color);\\n  width: 100%;\\n  height: 40px;\\n}\\n\\n.footer-container > p {\\n  font-size: 0.9em;\\n  margin: 5px;\\n  padding: 0;\\n}\\n\\np > a {\\n  color: var(--font-color);\\n}\\n\\np > a:hover {\\n  color: var(--accent-color);\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_icon_facebook_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/icon/facebook.svg */ \"./src/assets/icon/facebook.svg\");\n/* harmony import */ var _assets_icon_instagram_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/icon/instagram.png */ \"./src/assets/icon/instagram.png\");\n/* harmony import */ var _assets_icon_twitter_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/icon/twitter.png */ \"./src/assets/icon/twitter.png\");\n/* eslint-disable no-console */\n\n\n\n\nfunction contact() {\n  const contentDiv = document.getElementById(\"content\");\n  const title = document.createElement(\"h2\");\n  title.textContent = \"Contact us\";\n\n  const descriptionDiv = document.createElement(\"div\");\n  descriptionDiv.className = \"container\";\n\n  const description = document.createElement(\"p\");\n  description.textContent = `You can reach us in the following ways`;\n  description.className = \"contact-info\";\n\n  const contactDiv = document.createElement(\"div\");\n  contactDiv.className = \"container\";\n\n  const emailTitle = document.createElement(\"h3\");\n  emailTitle.textContent = \"Email\";\n\n  const emailList = document.createElement(\"ul\");\n  const firstEmail = document.createElement(\"li\");\n  firstEmail.textContent = \"inquiries@notarealrestaurant.com\";\n\n  const secondEmail = document.createElement(\"li\");\n  secondEmail.textContent = \"business@notarealrestaurant.com\";\n\n  const phoneTitle = document.createElement(\"h3\");\n  phoneTitle.textContent = \"Phone Number\";\n\n  const phoneList = document.createElement(\"ul\");\n\n  const phoneNumber = document.createElement(\"li\");\n  phoneNumber.textContent = \"+1-202-555-0181\";\n\n  const locationDiv = document.createElement(\"div\");\n  locationDiv.className = \"container\";\n\n  const locationTitle = document.createElement(\"h3\");\n  locationTitle.textContent = \"Location\";\n\n  const location = document.createElement(\"p\");\n  location.textContent = \"3105 Wescam Court, Reno, NV\";\n\n  const socialMediaDiv = document.createElement(\"div\");\n  socialMediaDiv.className = \"social-media-container\";\n\n  const socialMediaTitle = document.createElement(\"h3\");\n  socialMediaTitle.textContent = \"Social Media\";\n\n  const socialMediaIconsContainer = document.createElement(\"div\");\n  socialMediaIconsContainer.className = \"social-media-icons-container\";\n\n  const facebookIcon = document.createElement(\"img\");\n  facebookIcon.className = \"icon\";\n  facebookIcon.src = _assets_icon_facebook_svg__WEBPACK_IMPORTED_MODULE_0__;\n\n  const instagramIcon = document.createElement(\"img\");\n  instagramIcon.className = \"icon\";\n  instagramIcon.src = _assets_icon_instagram_png__WEBPACK_IMPORTED_MODULE_1__;\n\n  const twitterIcon = document.createElement(\"img\");\n  twitterIcon.className = \"icon\";\n  twitterIcon.src = _assets_icon_twitter_png__WEBPACK_IMPORTED_MODULE_2__;\n\n  contentDiv.appendChild(title);\n  contentDiv.appendChild(descriptionDiv);\n  descriptionDiv.appendChild(description);\n  contentDiv.appendChild(contactDiv);\n  contactDiv.appendChild(emailTitle);\n  contactDiv.appendChild(emailList);\n  emailList.appendChild(firstEmail);\n  emailList.appendChild(secondEmail);\n  contactDiv.appendChild(phoneTitle);\n  contactDiv.appendChild(phoneList);\n  phoneList.appendChild(phoneNumber);\n  contentDiv.appendChild(socialMediaDiv);\n  socialMediaDiv.appendChild(socialMediaTitle);\n  socialMediaDiv.appendChild(socialMediaIconsContainer);\n  socialMediaIconsContainer.appendChild(facebookIcon);\n  socialMediaIconsContainer.appendChild(instagramIcon);\n  socialMediaIconsContainer.appendChild(twitterIcon);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction footer() {\n  const footerContainer = document.createElement(\"div\");\n  footerContainer.className = \"footer-container\";\n\n  const footerText = document.createElement(\"p\");\n  footerText.textContent = \"Tomás Caraballo \";\n\n  const githubLink = document.createElement(\"a\");\n  githubLink.target = \"_blank\";\n  githubLink.textContent = \"@yomizana\";\n  githubLink.href = \"https://github.com/yomizana\";\n  githubLink.title = \"Github\";\n\n  const credits = document.createElement(\"p\");\n  credits.className = \"credits\";\n  credits.textContent = \"Background image by \";\n\n  const creditsLink = document.createElement(\"a\");\n  creditsLink.target = \"_blank\";\n  creditsLink.textContent = \"Vino Li\";\n  creditsLink.href = \"https://unsplash.com/photos/gGX1fJkmw3k\";\n  creditsLink.title = \"Unsplash\";\n\n  document.body.appendChild(footerContainer);\n  footerContainer.appendChild(footerText);\n  footerText.appendChild(githubLink);\n  footerContainer.appendChild(credits);\n  credits.appendChild(creditsLink);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);\n\n\n//# sourceURL=webpack://restaurant-page/./src/footer.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-console */\nfunction homepage() {\n  const contentDiv = document.getElementById(\"content\");\n  const title = document.createElement(\"h2\");\n  title.textContent = \"Yomi's Restaurant Page\";\n\n  const descriptionDiv = document.createElement(\"div\");\n  descriptionDiv.className = \"container\";\n\n  const description = document.createElement(\"p\");\n  description.textContent =\n    \"If you were looking for a mockup restaurant page, \" +\n    \"you found it! Here we sell the absolute best mockup meals your mockup pallate \" +\n    \"will ever taste!\";\n\n  const hoursDiv = document.createElement(\"div\");\n  hoursDiv.className = \"container\";\n\n  const hoursTitle = document.createElement(\"h3\");\n  hoursTitle.textContent = \"Hours\";\n\n  const hoursList = document.createElement(\"ul\");\n  hoursList.className = \"content-list\";\n  const monSatHours = document.createElement(\"li\");\n  monSatHours.textContent = \"Monday - Saturday: 8am - 10pm\";\n\n  const sunHours = document.createElement(\"li\");\n  sunHours.textContent = \"Sunday: 8am - 8pm\";\n\n  const locationDiv = document.createElement(\"div\");\n  locationDiv.className = \"container\";\n\n  const locationTitle = document.createElement(\"h3\");\n  locationTitle.textContent = \"Location\";\n\n  const location = document.createElement(\"p\");\n  location.textContent = \"3105 Wescam Court, Reno, NV\";\n\n  contentDiv.appendChild(title);\n  contentDiv.appendChild(descriptionDiv);\n  descriptionDiv.appendChild(description);\n  contentDiv.appendChild(hoursDiv);\n  hoursDiv.appendChild(hoursTitle);\n  hoursDiv.appendChild(hoursList);\n  hoursList.appendChild(monSatHours);\n  hoursList.appendChild(sunHours);\n  contentDiv.appendChild(locationDiv);\n  locationDiv.appendChild(locationTitle);\n  locationDiv.appendChild(location);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homepage);\n\n\n//# sourceURL=webpack://restaurant-page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utilities */ \"./src/utilities.js\");\n/* eslint-disable no-console */\n\n\n\n\n\n\n\n\n(0,_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_homepage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\nconst buttons = Array.from(document.getElementsByClassName(\"navbar-button\"));\n\nbuttons.forEach((button) => {\n  button.addEventListener(\"click\", () => {\n    if (buttons.indexOf(button) === 0) {\n      (0,_utilities__WEBPACK_IMPORTED_MODULE_6__.clearContent)();\n      (0,_homepage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    }\n    if (buttons.indexOf(button) === 1) {\n      (0,_utilities__WEBPACK_IMPORTED_MODULE_6__.clearContent)();\n      (0,_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    }\n    if (buttons.indexOf(button) === 2) {\n      (0,_utilities__WEBPACK_IMPORTED_MODULE_6__.clearContent)();\n      (0,_contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    }\n  });\n});\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu-items.js":
/*!***************************!*\
  !*** ./src/menu-items.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ \"./src/utilities.js\");\n/* harmony import */ var _assets_img_friedcatfish_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/img/friedcatfish.png */ \"./src/assets/img/friedcatfish.png\");\n/* harmony import */ var _assets_img_paella_mixta_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/img/paella-mixta.jpg */ \"./src/assets/img/paella-mixta.jpg\");\n/* harmony import */ var _assets_img_shrimp_avocado_taco_salad_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/img/shrimp-avocado-taco-salad.jpg */ \"./src/assets/img/shrimp-avocado-taco-salad.jpg\");\n/* harmony import */ var _assets_img_parmesan_tilapia_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/img/parmesan-tilapia.jpg */ \"./src/assets/img/parmesan-tilapia.jpg\");\n/* harmony import */ var _assets_img_baked_fish_sticks_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/img/baked-fish-sticks.jpg */ \"./src/assets/img/baked-fish-sticks.jpg\");\n/* harmony import */ var _assets_img_salmon_burger_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/img/salmon-burger.jpg */ \"./src/assets/img/salmon-burger.jpg\");\n\n\n\n\n\n\n\n\nfunction menuItem(name, image, description) {\n  return { name, image, description };\n}\n\nconst dish1 = menuItem(\n  (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createName)(\"Fried Catfish\"),\n  (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createImage)(_assets_img_friedcatfish_png__WEBPACK_IMPORTED_MODULE_1__),\n  (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createDescription)(\n    \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet sagittis dui. Duis nec odio eros.\"\n  )\n);\n\nconst dish2 = menuItem(\n  (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createName)(\"Paella Mixta\"),\n  (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createImage)(_assets_img_paella_mixta_jpg__WEBPACK_IMPORTED_MODULE_2__),\n  (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createDescription)(\n    \"Praesent convallis mauris eu mauris vestibulum tincidunt. Integer condimentum, erat et bibendum fermentum.\"\n  )\n);\n\nconst dish3 = menuItem(\n  (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createName)(\"Shrimp and Avocado Taco Salad\"),\n  (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createImage)(_assets_img_shrimp_avocado_taco_salad_jpg__WEBPACK_IMPORTED_MODULE_3__),\n  (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createDescription)(\n    \"Cras sit amet nunc sed turpis lacinia pulvinar ut vitae neque. Maecenas fringilla neque ex, feugiat ornare sapien.\"\n  )\n);\n\nconst dish4 = menuItem(\n  (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createName)(\"Parmesan Crusted Tilapia\"),\n  (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createImage)(_assets_img_parmesan_tilapia_jpg__WEBPACK_IMPORTED_MODULE_4__),\n  (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createDescription)(\n    \"Morbi rutrum lacinia risus vel lacinia. Nam risus eros, sodales sed odio a, ullamcorper accumsan quam. Nam posuere.\"\n  )\n);\n\nconst dish5 = menuItem(\n  (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createName)(\"Baked Fish Sticks\"),\n  (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createImage)(_assets_img_baked_fish_sticks_jpg__WEBPACK_IMPORTED_MODULE_5__),\n  (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createDescription)(\n    \"Etiam convallis lectus ante, in consequat tortor cursus vel. Pellentesque sollicitudin volutpat leo nec fermentum.\"\n  )\n);\n\nconst dish6 = menuItem(\n  (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createName)(\"Salmon Burger\"),\n  (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createImage)(_assets_img_salmon_burger_jpg__WEBPACK_IMPORTED_MODULE_6__),\n  (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createDescription)(\n    \"Duis dictum magna sapien, ac consectetur risus pulvinar commodo. Vestibulum sit amet urna sed erat auctor gravida tempus.\"\n  )\n);\n\nconst menuItems = [dish1, dish2, dish3, dish4, dish5, dish6];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuItems);\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu-items.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _menu_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-items */ \"./src/menu-items.js\");\n/* eslint-disable no-console */\n\n\nfunction menu() {\n  const contentDiv = document.getElementById(\"content\");\n  const title = document.createElement(\"h2\");\n  title.textContent = \"Menu\";\n\n  const menuDiv = document.createElement(\"div\");\n  menuDiv.className = \"menu-container\";\n\n  contentDiv.appendChild(title);\n  contentDiv.appendChild(menuDiv);\n\n  _menu_items__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((item) => {\n    const card = document.createElement(\"div\");\n    card.className = \"item-container\";\n\n    card.appendChild(item.name);\n    card.appendChild(item.image);\n    card.appendChild(item.description);\n\n    menuDiv.appendChild(card);\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction navbar() {\n  const contentContainer = document.getElementById(\"content\");\n  const navbarContainer = document.createElement(\"div\");\n  navbarContainer.className = \"navbar-container\";\n\n  const pageList = document.createElement(\"ul\");\n  pageList.className = \"navbar-ul\";\n  const homeItem = document.createElement(\"li\");\n  const homeButton = document.createElement(\"button\");\n  homeButton.textContent = \"Home\";\n  homeButton.className = \"navbar-button\";\n\n  const menuItem = document.createElement(\"li\");\n  const menuButton = document.createElement(\"button\");\n  menuButton.textContent = \"Menu\";\n  menuButton.className = \"navbar-button\";\n\n  const contactItem = document.createElement(\"li\");\n  const contactButton = document.createElement(\"button\");\n  contactButton.textContent = \"Contact\";\n  contactButton.className = \"navbar-button\";\n\n  document.body.insertBefore(navbarContainer, contentContainer);\n  navbarContainer.appendChild(pageList);\n\n  pageList.appendChild(homeItem);\n  homeItem.appendChild(homeButton);\n\n  pageList.appendChild(menuItem);\n  menuItem.appendChild(menuButton);\n\n  pageList.appendChild(contactItem);\n  contactItem.appendChild(contactButton);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navbar);\n\n\n//# sourceURL=webpack://restaurant-page/./src/navbar.js?");

/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearContent\": () => (/* binding */ clearContent),\n/* harmony export */   \"createDescription\": () => (/* binding */ createDescription),\n/* harmony export */   \"createImage\": () => (/* binding */ createImage),\n/* harmony export */   \"createName\": () => (/* binding */ createName)\n/* harmony export */ });\nfunction createName(name) {\n  const newName = document.createElement(\"h4\");\n  newName.textContent = name;\n  newName.className = \"card-name\";\n  return newName;\n}\n\nfunction createImage(src) {\n  const newImage = document.createElement(\"img\");\n  newImage.src = src;\n  newImage.className = \"card-image\";\n  return newImage;\n}\n\nfunction createDescription(description) {\n  const newDescription = document.createElement(\"p\");\n  newDescription.textContent = description;\n  newDescription.className = \"card-description\";\n  return newDescription;\n}\n\nfunction clearContent() {\n  const contentContainer = document.getElementById(\"content\");\n\n  while (contentContainer.firstElementChild) {\n    contentContainer.firstElementChild.remove();\n  }\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/utilities.js?");

/***/ }),

/***/ "./src/assets/font/Roboto-Medium.woff":
/*!********************************************!*\
  !*** ./src/assets/font/Roboto-Medium.woff ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cb4b0e5166805233441f.woff\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/font/Roboto-Medium.woff?");

/***/ }),

/***/ "./src/assets/font/Roboto-Medium.woff2":
/*!*********************************************!*\
  !*** ./src/assets/font/Roboto-Medium.woff2 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b4bc083c9cd9f27e0ee8.woff2\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/font/Roboto-Medium.woff2?");

/***/ }),

/***/ "./src/assets/font/Roboto-Regular.woff":
/*!*********************************************!*\
  !*** ./src/assets/font/Roboto-Regular.woff ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"60ef8b89613349a5f44c.woff\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/font/Roboto-Regular.woff?");

/***/ }),

/***/ "./src/assets/font/Roboto-Regular.woff2":
/*!**********************************************!*\
  !*** ./src/assets/font/Roboto-Regular.woff2 ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6ebf208d23c2f346040d.woff2\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/font/Roboto-Regular.woff2?");

/***/ }),

/***/ "./src/assets/icon/facebook.svg":
/*!**************************************!*\
  !*** ./src/assets/icon/facebook.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"845cde860a16351b36ff.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/icon/facebook.svg?");

/***/ }),

/***/ "./src/assets/icon/instagram.png":
/*!***************************************!*\
  !*** ./src/assets/icon/instagram.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"acfef33a418951bd3b6a.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/icon/instagram.png?");

/***/ }),

/***/ "./src/assets/icon/twitter.png":
/*!*************************************!*\
  !*** ./src/assets/icon/twitter.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1dc47282cde389383976.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/icon/twitter.png?");

/***/ }),

/***/ "./src/assets/img/baked-fish-sticks.jpg":
/*!**********************************************!*\
  !*** ./src/assets/img/baked-fish-sticks.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8566633b5efdf0a155ea.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/img/baked-fish-sticks.jpg?");

/***/ }),

/***/ "./src/assets/img/friedcatfish.png":
/*!*****************************************!*\
  !*** ./src/assets/img/friedcatfish.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cb23e94b6875944e8c62.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/img/friedcatfish.png?");

/***/ }),

/***/ "./src/assets/img/jelly-background.jpg":
/*!*********************************************!*\
  !*** ./src/assets/img/jelly-background.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"09453b51a69e558e3406.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/img/jelly-background.jpg?");

/***/ }),

/***/ "./src/assets/img/paella-mixta.jpg":
/*!*****************************************!*\
  !*** ./src/assets/img/paella-mixta.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4e60c4f08b6c8520179e.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/img/paella-mixta.jpg?");

/***/ }),

/***/ "./src/assets/img/parmesan-tilapia.jpg":
/*!*********************************************!*\
  !*** ./src/assets/img/parmesan-tilapia.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a83d2734b45580ee2c62.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/img/parmesan-tilapia.jpg?");

/***/ }),

/***/ "./src/assets/img/salmon-burger.jpg":
/*!******************************************!*\
  !*** ./src/assets/img/salmon-burger.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"35e7164761988d12f30d.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/img/salmon-burger.jpg?");

/***/ }),

/***/ "./src/assets/img/shrimp-avocado-taco-salad.jpg":
/*!******************************************************!*\
  !*** ./src/assets/img/shrimp-avocado-taco-salad.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ca9e79e5438c79103ebb.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/img/shrimp-avocado-taco-salad.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;