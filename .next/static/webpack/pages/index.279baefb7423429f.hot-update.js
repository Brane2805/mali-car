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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _class; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\n\n\n\n\n\nvar _class = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_class, Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_class);\n    function _class(props) {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, _class);\n        var _this;\n        _this = _super.call(this, props);\n        _this.state = {\n            data: [\n                {}\n            ]\n        };\n        return _this;\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_class, [\n        {\n            key: \"componentDidMount\",\n            value: function componentDidMount() {\n                var self = this;\n                axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"https://headless.mali-car.hr/wp-json/hme/v1/menus/2\").then(function(res) {\n                    self.setState({\n                        data: res.data\n                    });\n                });\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: this.state.data.map(function(result, index) {\n                            var slug = result.url;\n                            var slugSplit = slug.split(\":\");\n                            console.log(slugSplit);\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: result.classes,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/pages/\".concat(result.url),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"/pages/\".concat(result.url),\n                                        children: result.title\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\mali-car\\\\components\\\\Navigation.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 19\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\mali-car\\\\components\\\\Navigation.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 19\n                                }, _this)\n                            }, index, false, {\n                                fileName: \"D:\\\\mali-car\\\\components\\\\Navigation.js\",\n                                lineNumber: 40,\n                                columnNumber: 17\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\mali-car\\\\components\\\\Navigation.js\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\mali-car\\\\components\\\\Navigation.js\",\n                    lineNumber: 32,\n                    columnNumber: 8\n                }, this);\n            }\n        }\n    ]);\n    return _class;\n}(react__WEBPACK_IMPORTED_MODULE_2__.Component);\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmlnYXRpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBQTRCO0FBQzJDO0FBQzlDO0FBRVY7Ozs7b0JBQ0NPLEtBQUs7OztrQ0FFVEEsS0FBSyxFQUFFO1FBQ1gsTUFBS0MsS0FBSyxHQUFHO1lBQ1hDLElBQUksRUFBRTtnQkFBQyxFQUFFO2FBQUM7U0FDSDs7Ozs7WUFJVEMsR0FBaUIsRUFBakJBLG1CQUFpQjttQkFBakJBLFNBQUFBLGlCQUFpQixHQUFHO2dCQUNsQixJQUFNQyxJQUFJLEdBQUcsSUFBSTtnQkFDakJMLGlEQUFTLENBQUMscURBQXFELENBQUMsQ0FBQ08sSUFBSSxDQUFDQyxTQUFBQSxHQUFHLEVBQ3pFO29CQUVBSCxJQUFJLENBQUNJLFFBQVEsQ0FBQzt3QkFBQ04sSUFBSSxFQUFFSyxHQUFHLENBQUNMLElBQUk7cUJBQUMsQ0FBQztnQkFDL0IsQ0FBQyxDQUFDLENBQUM7WUFJTCxDQUFDOzs7WUFHTE8sR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLEdBQUc7O2dCQUVQLHFCQUVDLDhEQUFDYiwyQ0FBUTs4QkFDTiw0RUFBQ2MsSUFBRTtrQ0FDSCxJQUFJLENBQUNULEtBQUssQ0FBQ0MsSUFBSSxDQUFDUyxHQUFHLENBQUMsU0FBQ0MsTUFBTSxFQUFFQyxLQUFLLEVBQUs7NEJBQ3RDLElBQUlDLElBQUksR0FBR0YsTUFBTSxDQUFDRyxHQUFHOzRCQUNyQixJQUFJQyxTQUFTLEdBQUdGLElBQUksQ0FBQ0csS0FBSyxDQUFDLEdBQUcsQ0FBQzs0QkFDL0JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxTQUFTLENBQUM7NEJBQ25CLHFCQUVFLDhEQUFDSSxJQUFFO2dDQUFhQyxTQUFTLEVBQUVULE1BQU0sQ0FBQ1UsT0FBTzswQ0FFdkMsNEVBQUM3QixrREFBSTtvQ0FBQzhCLElBQUksRUFBRyxTQUFRLENBQWUsT0FBWlgsTUFBTSxDQUFDRyxHQUFHLENBQUc7OENBQ3JDLDRFQUFDUyxHQUFDO3dDQUFDRCxJQUFJLEVBQUcsU0FBUSxDQUFlLE9BQVhYLE1BQU0sQ0FBQ0csR0FBRyxDQUFFO2tEQUNqQ0gsTUFBTSxDQUFDYSxLQUFLOzs7Ozs2Q0FBSzs7Ozs7eUNBQU87K0JBSmxCWixLQUFLOzs7O3FDQUtQLENBRVA7d0JBS1IsQ0FBQyxDQUFDOzs7Ozs0QkFDRzs7Ozs7d0JBQ00sQ0FDWjtZQUNILENBQUM7Ozs7Q0FDRixDQXBEMEJsQiw0Q0FBUyxDQW9EbkM7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdmlnYXRpb24uanM/YjA1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIFxyXG4gICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgIGRhdGE6IFt7fV1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICAgIGF4aW9zLmdldCgnaHR0cHM6Ly9oZWFkbGVzcy5tYWxpLWNhci5oci93cC1qc29uL2htZS92MS9tZW51cy8yJykudGhlbihyZXMgPT4gXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe2RhdGE6IHJlcy5kYXRhfSlcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIFxyXG5cclxuICAgICAgICB9ICAgICBcclxuICAgICAgICBcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICBcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgIFxyXG4gICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhLm1hcCgocmVzdWx0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgIGxldCBzbHVnID0gcmVzdWx0LnVybDtcclxuICAgICAgICAgICBsZXQgc2x1Z1NwbGl0ID0gc2x1Zy5zcGxpdCgnOicpXHJcbiAgICAgICAgICAgY29uc29sZS5sb2coc2x1Z1NwbGl0KVxyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3Jlc3VsdC5jbGFzc2VzfT5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eyBgL3BhZ2VzLyR7IHJlc3VsdC51cmwgfWAgfT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IGAvcGFnZXMvJHsgIHJlc3VsdC51cmx9YCB9PlxyXG4gICAgICAgICAgICAgICAgICB7cmVzdWx0LnRpdGxlfTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICBcclxuICAgICAgICB9KX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgIClcclxuICAgIH1cclxuICB9XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJDb21wb25lbnQiLCJGcmFnbWVudCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJwcm9wcyIsInN0YXRlIiwiZGF0YSIsImNvbXBvbmVudERpZE1vdW50Iiwic2VsZiIsImdldCIsInRoZW4iLCJyZXMiLCJzZXRTdGF0ZSIsInJlbmRlciIsInVsIiwibWFwIiwicmVzdWx0IiwiaW5kZXgiLCJzbHVnIiwidXJsIiwic2x1Z1NwbGl0Iiwic3BsaXQiLCJjb25zb2xlIiwibG9nIiwibGkiLCJjbGFzc05hbWUiLCJjbGFzc2VzIiwiaHJlZiIsImEiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navigation.js\n"));

/***/ })

});