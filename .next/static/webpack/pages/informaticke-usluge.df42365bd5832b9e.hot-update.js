"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/informaticke-usluge",{

/***/ "./components/Navigation.js":
/*!**********************************!*\
  !*** ./components/Navigation.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _class; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\n\n\n\n\n\n\n\nvar _class = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_class, Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_class);\n    function _class() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, _class);\n        return _super.apply(this, arguments);\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_class, [\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Navigation, {}, void 0, false, {\n                            fileName: \"D:\\\\mali-car\\\\components\\\\Navigation.js\",\n                            lineNumber: 22,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"Stranice\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\mali-car\\\\components\\\\Navigation.js\",\n                            lineNumber: 23,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: this.props.posts.map(function(post) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: post.title.rendered\n                                }, post.id, false, {\n                                    fileName: \"D:\\\\mali-car\\\\components\\\\Navigation.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 17\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"D:\\\\mali-car\\\\components\\\\Navigation.js\",\n                            lineNumber: 24,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\mali-car\\\\components\\\\Navigation.js\",\n                    lineNumber: 21,\n                    columnNumber: 7\n                }, this);\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: // Resolve promise and set initial props.\n            function getInitialProps() {\n                return (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(function() {\n                    var response;\n                    return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(this, function(_state) {\n                        switch(_state.label){\n                            case 0:\n                                return [\n                                    4,\n                                    axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"https://headless.mali-car.hr/wp-json/wp/v2/pages\")\n                                ];\n                            case 1:\n                                response = _state.sent();\n                                // Return response to posts object in props.\n                                return [\n                                    2,\n                                    {\n                                        posts: response.data\n                                    }\n                                ];\n                        }\n                    });\n                })();\n            }\n        }\n    ]);\n    return _class;\n}(react__WEBPACK_IMPORTED_MODULE_2__.Component);\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmlnYXRpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztBQUE0QjtBQUNzQjtBQUN6QjtBQUVWOzs7Ozs7Ozs7O1lBY2JLLEdBQU0sRUFBTkEsUUFBTTttQkFBTkEsU0FBQUEsTUFBTSxHQUFHOztnQkFDUCxxQkFDRSw4REFBQ0YsMkNBQVE7O3NDQUNQLDhEQUFDRyxVQUFVOzs7O2dDQUFFO3NDQUNiLDhEQUFDQyxJQUFFO3NDQUFDLFVBQVE7Ozs7O2dDQUFLO3NDQUNqQiw4REFBQ0MsSUFBRTtzQ0FFQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsS0FBSyxDQUFDQyxHQUFHLENBQUVDLFNBQUFBLElBQUksRUFBSTtnQ0FDNUIscUJBQ0UsOERBQUNDLElBQUU7OENBQW1CRCxJQUFJLENBQUNFLEtBQUssQ0FBQ0MsUUFBUTttQ0FBL0JILElBQUksQ0FBQ0ksRUFBRTs7Ozt5Q0FBK0IsQ0FDakQ7NEJBQ0gsQ0FBQyxDQUFDOzs7OztnQ0FFRDs7Ozs7O3dCQUNJLENBQ1o7WUFDSCxDQUFDOzs7O1lBM0JZQyxHQUFlLEVBQWZBLGlCQUFlO21CQUE1Qix5Q0FEeUM7WUFDekMsU0FBYUEsZUFBZTt1QkFBNUIsK0ZBQStCO3dCQUd2QkMsUUFBUTs7OztnQ0FBRzs7b0NBQU1kLGlEQUFTLENBQUUsa0RBQWtELENBQUU7a0NBQUE7O2dDQUFoRmMsUUFBUSxHQUFHLGFBQXFFO2dDQUV0Riw0Q0FBNEM7Z0NBQzVDOztvQ0FBTzt3Q0FDTFIsS0FBSyxFQUFFUSxRQUFRLENBQUNFLElBQUk7cUNBQ3JCO2tDQUFBOzs7Z0JBQ0gsQ0FBQzthQUFBOzs7O0NBbUJGLENBL0I0QmxCLDRDQUFTLENBK0JyQztBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2aWdhdGlvbi5qcz9iMDViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAvLyBSZXNvbHZlIHByb21pc2UgYW5kIHNldCBpbml0aWFsIHByb3BzLlxyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XHJcblxyXG4gICAgLy8gTWFrZSByZXF1ZXN0IGZvciBwb3N0cy5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCAnaHR0cHM6Ly9oZWFkbGVzcy5tYWxpLWNhci5oci93cC1qc29uL3dwL3YyL3BhZ2VzJyApXHJcblxyXG4gICAgLy8gUmV0dXJuIHJlc3BvbnNlIHRvIHBvc3RzIG9iamVjdCBpbiBwcm9wcy5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBvc3RzOiByZXNwb25zZS5kYXRhXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgPE5hdmlnYXRpb24vPlxyXG4gICAgICAgIDxoMT5TdHJhbmljZTwvaDE+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnBvc3RzLm1hcCggcG9zdCA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9eyBwb3N0LmlkIH0+eyBwb3N0LnRpdGxlLnJlbmRlcmVkIH08L2xpPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwiQ29tcG9uZW50IiwiRnJhZ21lbnQiLCJheGlvcyIsInJlbmRlciIsIk5hdmlnYXRpb24iLCJoMSIsInVsIiwicHJvcHMiLCJwb3N0cyIsIm1hcCIsInBvc3QiLCJsaSIsInRpdGxlIiwicmVuZGVyZWQiLCJpZCIsImdldEluaXRpYWxQcm9wcyIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navigation.js\n"));

/***/ })

});