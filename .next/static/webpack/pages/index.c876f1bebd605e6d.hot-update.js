"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Navigation.js":
/*!**********************************!*\
  !*** ./components/Navigation.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _class; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\n\n\n\n\n\nvar _class = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_class, Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_class);\n    function _class(props) {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, _class);\n        var _this;\n        _this = _super.call(this, props);\n        _this.state = {\n            data: [\n                {}\n            ],\n            sub_menu: [\n                {}\n            ],\n            sub_menu_items: [\n                {}\n            ],\n            menu_items: [\n                {}\n            ]\n        };\n        return _this;\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_class, [\n        {\n            key: \"componentDidMount\",\n            value: function componentDidMount() {\n                var self = this;\n                axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"https://headless.mali-car.hr/wp-json/hme/v1/menus/2\").then(function(res) {\n                    self.setState({\n                        data: res.data\n                    });\n                    var polje = res.data;\n                    for(var i = 0; i < polje.length; i++){\n                        if (polje[i].classes[0] === \"sub_menu\") {\n                            console.log(paha);\n                            self.setState({\n                                sub_menu: polje[i]\n                            });\n                        }\n                        console.log(polje[i].classes);\n                    }\n                });\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: this.state.data.map(function(result, index) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: result.title\n                            }, index, false, {\n                                fileName: \"D:\\\\mali-car\\\\components\\\\Navigation.js\",\n                                lineNumber: 51,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\mali-car\\\\components\\\\Navigation.js\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\mali-car\\\\components\\\\Navigation.js\",\n                    lineNumber: 45,\n                    columnNumber: 8\n                }, this);\n            }\n        }\n    ]);\n    return _class;\n}(react__WEBPACK_IMPORTED_MODULE_2__.Component);\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmlnYXRpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBQTRCO0FBQzJDO0FBQzlDO0FBRVY7Ozs7b0JBQ0NPLEtBQUs7OztrQ0FFVEEsS0FBSyxFQUFFO1FBQ1gsTUFBS0MsS0FBSyxHQUFHO1lBQ1hDLElBQUksRUFBRTtnQkFBQyxFQUFFO2FBQUM7WUFDVkMsUUFBUSxFQUFFO2dCQUFDLEVBQUU7YUFBQztZQUNkQyxjQUFjLEVBQUU7Z0JBQUMsRUFBRTthQUFDO1lBQ3BCQyxVQUFVLEVBQUU7Z0JBQUMsRUFBRTthQUFDO1NBQ1Q7Ozs7O1lBSVRDLEdBQWlCLEVBQWpCQSxtQkFBaUI7bUJBQWpCQSxTQUFBQSxpQkFBaUIsR0FBRztnQkFDbEIsSUFBTUMsSUFBSSxHQUFHLElBQUk7Z0JBQ2pCUixpREFBUyxDQUFDLHFEQUFxRCxDQUFDLENBQUNVLElBQUksQ0FBQ0MsU0FBQUEsR0FBRyxFQUN6RTtvQkFFQUgsSUFBSSxDQUFDSSxRQUFRLENBQUM7d0JBQUNULElBQUksRUFBRVEsR0FBRyxDQUFDUixJQUFJO3FCQUFDLENBQUM7b0JBQy9CLElBQU1VLEtBQUssR0FBR0YsR0FBRyxDQUFDUixJQUFJO29CQUN0QixJQUFLLElBQUlXLENBQUMsR0FBQyxDQUFDLEVBQUVBLENBQUMsR0FBQ0QsS0FBSyxDQUFDRSxNQUFNLEVBQUVELENBQUMsRUFBRSxDQUFDO3dCQUNoQyxJQUFHRCxLQUFLLENBQUNDLENBQUMsQ0FBQyxDQUFDRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUcsVUFBVSxFQUFDOzRCQUNsQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQzs0QkFDakJYLElBQUksQ0FBQ0ksUUFBUSxDQUFDO2dDQUFDUixRQUFRLEVBQUVTLEtBQUssQ0FBQ0MsQ0FBQyxDQUFDOzZCQUFDLENBQUM7d0JBQ3JDLENBQUM7d0JBRUZHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxLQUFLLENBQUNDLENBQUMsQ0FBQyxDQUFDRSxPQUFPLENBQUMsQ0FBQztvQkFDL0IsQ0FBQztnQkFFRCxDQUFDLENBQUMsQ0FBQztZQUlMLENBQUM7OztZQUdMSSxHQUFNLEVBQU5BLFFBQU07bUJBQU5BLFNBQUFBLE1BQU0sR0FBRzs7Z0JBRVAscUJBRUMsOERBQUN2QiwyQ0FBUTs4QkFDTiw0RUFBQ3dCLElBQUU7a0NBQ0gsSUFBSSxDQUFDbkIsS0FBSyxDQUFDQyxJQUFJLENBQUNtQixHQUFHLENBQUMsU0FBQ0MsTUFBTSxFQUFFQyxLQUFLLEVBQUs7NEJBR3JDLHFCQUNFLDhEQUFDQyxJQUFFOzBDQUFjRixNQUFNLENBQUNHLEtBQUs7K0JBQXBCRixLQUFLOzs7O3FDQUFxQixDQUNsQzt3QkFFUCxDQUFDLENBQUM7Ozs7OzRCQUNHOzs7Ozt3QkFDTSxDQUNaO1lBQ0gsQ0FBQzs7OztDQUNGLENBdEQwQjVCLDRDQUFTLENBc0RuQztBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2aWdhdGlvbi5qcz9iMDViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgXHJcbiAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgZGF0YTogW3t9XSxcclxuICAgICAgICAgIHN1Yl9tZW51OiBbe31dLFxyXG4gICAgICAgICAgc3ViX21lbnVfaXRlbXM6IFt7fV0sXHJcbiAgICAgICAgICBtZW51X2l0ZW1zOiBbe31dXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICBheGlvcy5nZXQoJ2h0dHBzOi8vaGVhZGxlc3MubWFsaS1jYXIuaHIvd3AtanNvbi9obWUvdjEvbWVudXMvMicpLnRoZW4ocmVzID0+IFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBzZWxmLnNldFN0YXRlKHtkYXRhOiByZXMuZGF0YX0pXHJcbiAgICAgICAgICBjb25zdCBwb2xqZSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgZm9yIChsZXQgaT0wOyBpPHBvbGplLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgaWYocG9samVbaV0uY2xhc3Nlc1swXT09PSdzdWJfbWVudScpe1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhaGEpXHJcbiAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7c3ViX21lbnU6IHBvbGplW2ldfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICBjb25zb2xlLmxvZyhwb2xqZVtpXS5jbGFzc2VzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgIH0gICAgIFxyXG4gICAgICAgIFxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgIFxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgXHJcbiAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGEubWFwKChyZXN1bHQsIGluZGV4KSA9PiB7XHJcblxyXG4gICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+e3Jlc3VsdC50aXRsZX08L2xpPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgXHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfVxyXG4iXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwiQ29tcG9uZW50IiwiRnJhZ21lbnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwicHJvcHMiLCJzdGF0ZSIsImRhdGEiLCJzdWJfbWVudSIsInN1Yl9tZW51X2l0ZW1zIiwibWVudV9pdGVtcyIsImNvbXBvbmVudERpZE1vdW50Iiwic2VsZiIsImdldCIsInRoZW4iLCJyZXMiLCJzZXRTdGF0ZSIsInBvbGplIiwiaSIsImxlbmd0aCIsImNsYXNzZXMiLCJjb25zb2xlIiwibG9nIiwicGFoYSIsInJlbmRlciIsInVsIiwibWFwIiwicmVzdWx0IiwiaW5kZXgiLCJsaSIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navigation.js\n"));

/***/ })

});