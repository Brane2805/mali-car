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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _class; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\n\n\n\n\n\n\nvar _class = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_class, Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_class);\n    function _class(props) {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, _class);\n        var _this;\n        _this = _super.call(this, props);\n        _this.state = {\n            data: [\n                {}\n            ],\n            sub_menu: [\n                {}\n            ],\n            sub_menu_items: [\n                {}\n            ],\n            menu_items: [\n                {}\n            ]\n        };\n        return _this;\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_class, [\n        {\n            key: \"componentDidMount\",\n            value: function componentDidMount() {\n                var _this = this;\n                var self = this;\n                axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"https://headless.mali-car.hr/wp-json/hme/v1/menus/2\").then(function(res) {\n                    var _loop = function(i) {\n                        if (polje[i].classes[0] === \"sub_menu\") {\n                            _this.setState(function(prevState) {\n                                return {\n                                    sub_menu: (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(prevState.sub_menu).concat([\n                                        polje[i]\n                                    ])\n                                };\n                            });\n                        } else if (polje[i].classes[0] === \"sub_menu_item\") {\n                            _this.setState(function(prevState) {\n                                return {\n                                    sub_menu_items: (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(prevState.sub_menu_items).concat([\n                                        polje[i]\n                                    ])\n                                };\n                            });\n                        } else {\n                            _this.setState(function(prevState) {\n                                return {\n                                    menu_items: (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(prevState.menu_items).concat([\n                                        polje[i]\n                                    ])\n                                };\n                            });\n                        }\n                        console.log(polje[i].classes[0]);\n                        console.log(menu_items);\n                    };\n                    self.setState({\n                        data: res.data\n                    });\n                    var polje = res.data;\n                    for(var i = 0; i < polje.length; i++)_loop(i);\n                });\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: this.state.data.map(function(result, index) {\n                            if (result.classes === [\n                                \"sub_menu\"\n                            ]) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    children: result.title\n                                }, index, false, {\n                                    fileName: \"D:\\\\mali-car\\\\components\\\\Navigation.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 16\n                                }, _this);\n                            }\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\mali-car\\\\components\\\\Navigation.js\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\mali-car\\\\components\\\\Navigation.js\",\n                    lineNumber: 58,\n                    columnNumber: 8\n                }, this);\n            }\n        }\n    ]);\n    return _class;\n}(react__WEBPACK_IMPORTED_MODULE_2__.Component);\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0gsQ0FBQzs7OztDQUNGLENBcEUwQjVCLDRDQUFTLENBb0VuQztBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2aWdhdGlvbi5qcz9iMDViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgXHJcbiAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgZGF0YTogW3t9XSxcclxuICAgICAgICAgIHN1Yl9tZW51OiBbe31dLFxyXG4gICAgICAgICAgc3ViX21lbnVfaXRlbXM6IFt7fV0sXHJcbiAgICAgICAgICBtZW51X2l0ZW1zOiBbe31dXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICBheGlvcy5nZXQoJ2h0dHBzOi8vaGVhZGxlc3MubWFsaS1jYXIuaHIvd3AtanNvbi9obWUvdjEvbWVudXMvMicpLnRoZW4ocmVzID0+IFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBzZWxmLnNldFN0YXRlKHtkYXRhOiByZXMuZGF0YX0pXHJcbiAgICAgICAgICBjb25zdCBwb2xqZSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgZm9yIChsZXQgaT0wOyBpPHBvbGplLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHBvbGplW2ldLmNsYXNzZXNbMF09PT0nc3ViX21lbnUnKXtcclxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgc3ViX21lbnU6IFsuLi5wcmV2U3RhdGUuc3ViX21lbnUsIHBvbGplW2ldXVxyXG4gICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmKHBvbGplW2ldLmNsYXNzZXNbMF09PT0nc3ViX21lbnVfaXRlbScpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xyXG4gICAgICAgICAgICAgIHN1Yl9tZW51X2l0ZW1zOiBbLi4ucHJldlN0YXRlLnN1Yl9tZW51X2l0ZW1zLCBwb2xqZVtpXV1cclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XHJcbiAgICAgICAgICAgICAgbWVudV9pdGVtczogWy4uLnByZXZTdGF0ZS5tZW51X2l0ZW1zLCBwb2xqZVtpXV1cclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKHBvbGplW2ldLmNsYXNzZXNbMF0pO1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKG1lbnVfaXRlbXMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgICAgfSAgICAgXHJcbiAgICAgICAgXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICBcclxuICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAge3RoaXMuc3RhdGUuZGF0YS5tYXAoKHJlc3VsdCwgaW5kZXgpID0+IHtcclxuXHJcbiAgICAgICAgaWYocmVzdWx0LmNsYXNzZXM9PT1bJ3N1Yl9tZW51J10pe1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICA8dWwga2V5PXtpbmRleH0+e3Jlc3VsdC50aXRsZX08L3VsPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICB9KX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgIClcclxuICAgIH1cclxuICB9XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJDb21wb25lbnQiLCJGcmFnbWVudCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJwcm9wcyIsInN0YXRlIiwiZGF0YSIsInN1Yl9tZW51Iiwic3ViX21lbnVfaXRlbXMiLCJtZW51X2l0ZW1zIiwiY29tcG9uZW50RGlkTW91bnQiLCJzZWxmIiwiZ2V0IiwidGhlbiIsInJlcyIsInBvbGplIiwiaSIsImNsYXNzZXMiLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJyZW5kZXIiLCJ1bCIsIm1hcCIsInJlc3VsdCIsImluZGV4IiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navigation.js\n"));

/***/ })

});