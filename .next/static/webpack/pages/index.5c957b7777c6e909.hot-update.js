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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _class; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\n\n\n\n\n\n\n\nvar _class = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_class, Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_class);\n    function _class(props) {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, _class);\n        var _this;\n        _this = _super.call(this, props);\n        _this.state = {\n            data: [\n                {}\n            ],\n            sub_menu: [\n                {}\n            ],\n            sub_menu_items: [\n                {}\n            ],\n            menu_items: [\n                {}\n            ]\n        };\n        return _this;\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_class, [\n        {\n            key: \"componentDidMount\",\n            value: function componentDidMount() {\n                var _this = this;\n                var self = this;\n                axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"https://headless.mali-car.hr/wp-json/hme/v1/menus/2\").then(function(res) {\n                    self.setState({\n                        data: res.data\n                    });\n                    var polje = res.data;\n                    for(var i = 0; i < polje.length; i++){\n                        if (polje[i].classes[0] === \"sub_menu\") {\n                            console.log(\"paha\");\n                            self.setState({\n                                sub_menu: polje[i]\n                            });\n                        } else if (polje[i].classes[0] === \"sub_menu_item\") {\n                            console.log(\"paha\");\n                            self.setState((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\n                                sub_menu_items: polje[i]\n                            }, _this.state.sub_menu_items));\n                        } else {\n                            self.setState((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, _this.state.menu_items), {\n                                menu_items: polje[i]\n                            }));\n                        }\n                        console.log(polje[i].classes[0]);\n                    }\n                });\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: this.state.data.map(function(result, index) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: result.title\n                            }, index, false, {\n                                fileName: \"D:\\\\mali-car\\\\components\\\\Navigation.js\",\n                                lineNumber: 58,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\mali-car\\\\components\\\\Navigation.js\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\mali-car\\\\components\\\\Navigation.js\",\n                    lineNumber: 52,\n                    columnNumber: 8\n                }, this);\n            }\n        }\n    ]);\n    return _class;\n}(react__WEBPACK_IMPORTED_MODULE_2__.Component);\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmlnYXRpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztBQUE0QjtBQUMyQztBQUM5QztBQUVWOzs7O29CQUNDTyxLQUFLOzs7a0NBRVRBLEtBQUssRUFBRTtRQUNYLE1BQUtDLEtBQUssR0FBRztZQUNYQyxJQUFJLEVBQUU7Z0JBQUMsRUFBRTthQUFDO1lBQ1ZDLFFBQVEsRUFBRTtnQkFBQyxFQUFFO2FBQUM7WUFDZEMsY0FBYyxFQUFFO2dCQUFDLEVBQUU7YUFBQztZQUNwQkMsVUFBVSxFQUFFO2dCQUFDLEVBQUU7YUFBQztTQUNUOzs7OztZQUlUQyxHQUFpQixFQUFqQkEsbUJBQWlCO21CQUFqQkEsU0FBQUEsaUJBQWlCLEdBQUc7O2dCQUNsQixJQUFNQyxJQUFJLEdBQUcsSUFBSTtnQkFDakJSLGlEQUFTLENBQUMscURBQXFELENBQUMsQ0FBQ1UsSUFBSSxDQUFDQyxTQUFBQSxHQUFHLEVBQ3pFO29CQUVBSCxJQUFJLENBQUNJLFFBQVEsQ0FBQzt3QkFBQ1QsSUFBSSxFQUFFUSxHQUFHLENBQUNSLElBQUk7cUJBQUMsQ0FBQztvQkFDL0IsSUFBTVUsS0FBSyxHQUFHRixHQUFHLENBQUNSLElBQUk7b0JBQ3RCLElBQUssSUFBSVcsQ0FBQyxHQUFDLENBQUMsRUFBRUEsQ0FBQyxHQUFDRCxLQUFLLENBQUNFLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLENBQUM7d0JBQ2hDLElBQUdELEtBQUssQ0FBQ0MsQ0FBQyxDQUFDLENBQUNFLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBRyxVQUFVLEVBQUM7NEJBQ2xDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7NEJBQ25CVixJQUFJLENBQUNJLFFBQVEsQ0FBQztnQ0FBQ1IsUUFBUSxFQUFFUyxLQUFLLENBQUNDLENBQUMsQ0FBQzs2QkFBQyxDQUFDO3dCQUNyQyxPQUNHLElBQUdELEtBQUssQ0FBQ0MsQ0FBQyxDQUFDLENBQUNFLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBRyxlQUFlLEVBQUM7NEJBQzFDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7NEJBQ25CVixJQUFJLENBQUNJLFFBQVEsQ0FBQztnQ0FBQ1AsY0FBYyxFQUFFUSxLQUFLLENBQUNDLENBQUMsQ0FBQzsrQkFBSyxNQUFLWixLQUFLLENBQUNHLGNBQWMsQ0FBQyxDQUFDO3dCQUN6RSxPQUNFOzRCQUNGRyxJQUFJLENBQUNJLFFBQVEsQ0FBQyx3S0FBSSxNQUFLVixLQUFLLENBQUNJLFVBQVU7Z0NBQUVBLFVBQVUsRUFBRU8sS0FBSyxDQUFDQyxDQUFDLENBQUM7OEJBQUMsQ0FBQzt3QkFDakUsQ0FBQzt3QkFFQUcsT0FBTyxDQUFDQyxHQUFHLENBQUNMLEtBQUssQ0FBQ0MsQ0FBQyxDQUFDLENBQUNFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNsQyxDQUFDO2dCQUVELENBQUMsQ0FBQyxDQUFDO1lBSUwsQ0FBQzs7O1lBR0xHLEdBQU0sRUFBTkEsUUFBTTttQkFBTkEsU0FBQUEsTUFBTSxHQUFHOztnQkFFUCxxQkFFQyw4REFBQ3RCLDJDQUFROzhCQUNOLDRFQUFDdUIsSUFBRTtrQ0FDSCxJQUFJLENBQUNsQixLQUFLLENBQUNDLElBQUksQ0FBQ2tCLEdBQUcsQ0FBQyxTQUFDQyxNQUFNLEVBQUVDLEtBQUssRUFBSzs0QkFHckMscUJBQ0UsOERBQUNDLElBQUU7MENBQWNGLE1BQU0sQ0FBQ0csS0FBSzsrQkFBcEJGLEtBQUs7Ozs7cUNBQXFCLENBQ2xDO3dCQUVQLENBQUMsQ0FBQzs7Ozs7NEJBQ0c7Ozs7O3dCQUNNLENBQ1o7WUFDSCxDQUFDOzs7O0NBQ0YsQ0E3RDBCM0IsNENBQVMsQ0E2RG5DO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzP2IwNWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICBcclxuICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICBkYXRhOiBbe31dLFxyXG4gICAgICAgICAgc3ViX21lbnU6IFt7fV0sXHJcbiAgICAgICAgICBzdWJfbWVudV9pdGVtczogW3t9XSxcclxuICAgICAgICAgIG1lbnVfaXRlbXM6IFt7fV1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICAgIGF4aW9zLmdldCgnaHR0cHM6Ly9oZWFkbGVzcy5tYWxpLWNhci5oci93cC1qc29uL2htZS92MS9tZW51cy8yJykudGhlbihyZXMgPT4gXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe2RhdGE6IHJlcy5kYXRhfSlcclxuICAgICAgICAgIGNvbnN0IHBvbGplID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8cG9samUubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBpZihwb2xqZVtpXS5jbGFzc2VzWzBdPT09J3N1Yl9tZW51Jyl7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BhaGEnKVxyXG4gICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe3N1Yl9tZW51OiBwb2xqZVtpXX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgaWYocG9samVbaV0uY2xhc3Nlc1swXT09PSdzdWJfbWVudV9pdGVtJyl7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BhaGEnKVxyXG4gICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe3N1Yl9tZW51X2l0ZW1zOiBwb2xqZVtpXSwgLi4udGhpcy5zdGF0ZS5zdWJfbWVudV9pdGVtc30pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoey4uLnRoaXMuc3RhdGUubWVudV9pdGVtcywgbWVudV9pdGVtczogcG9samVbaV19KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICBjb25zb2xlLmxvZyhwb2xqZVtpXS5jbGFzc2VzWzBdKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgIH0gICAgIFxyXG4gICAgICAgIFxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgIFxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgXHJcbiAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGEubWFwKChyZXN1bHQsIGluZGV4KSA9PiB7XHJcblxyXG4gICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+e3Jlc3VsdC50aXRsZX08L2xpPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgXHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfVxyXG4iXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwiQ29tcG9uZW50IiwiRnJhZ21lbnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwicHJvcHMiLCJzdGF0ZSIsImRhdGEiLCJzdWJfbWVudSIsInN1Yl9tZW51X2l0ZW1zIiwibWVudV9pdGVtcyIsImNvbXBvbmVudERpZE1vdW50Iiwic2VsZiIsImdldCIsInRoZW4iLCJyZXMiLCJzZXRTdGF0ZSIsInBvbGplIiwiaSIsImxlbmd0aCIsImNsYXNzZXMiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyIiwidWwiLCJtYXAiLCJyZXN1bHQiLCJpbmRleCIsImxpIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navigation.js\n"));

/***/ })

});