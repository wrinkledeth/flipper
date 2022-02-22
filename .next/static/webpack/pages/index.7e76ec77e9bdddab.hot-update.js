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

/***/ "./components/primary-button.js":
/*!**************************************!*\
  !*** ./components/primary-button.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PrimaryButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {};\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {};\n    var target = {};\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\nfunction PrimaryButton(props) {\n    var type = props.type, children = props.children, rest = _objectWithoutProperties(props, [\n        \"type\",\n        \"children\"\n    ]);\n    var className = \"max-w-fit inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-80 disabled:pointer-events-none\";\n    if (type === \"link\") {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", _objectSpread({}, rest, {\n            className: className,\n            children: children\n        }), void 0, false, {\n            fileName: \"/mnt/c/Users/zen/dev/flipper/components/primary-button.js\",\n            lineNumber: 7,\n            columnNumber: 12\n        }, this));\n    } else {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", _objectSpread({}, rest, {\n            className: className,\n            children: children\n        }), void 0, false, {\n            fileName: \"/mnt/c/Users/zen/dev/flipper/components/primary-button.js\",\n            lineNumber: 9,\n            columnNumber: 12\n        }, this));\n    }\n};\n_c = PrimaryButton;\nvar _c;\n$RefreshReg$(_c, \"PrimaryButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3ByaW1hcnktYnV0dG9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWUsUUFBUSxDQUFDQSxhQUFhLENBQUNDLEtBQUssRUFBRSxDQUFDO0lBRTVDLEdBQUssQ0FBR0MsSUFBSSxHQUF3QkQsS0FBSyxDQUFqQ0MsSUFBSSxFQUFFQyxRQUFRLEdBQWNGLEtBQUssQ0FBM0JFLFFBQVEsRUFBS0MsSUFBSSw0QkFBS0gsS0FBSztRQUFqQ0MsQ0FBSTtRQUFFQyxDQUFROztJQUN0QixHQUFLLENBQUNFLFNBQVMsR0FBQyxDQUF5UjtJQUV6UyxFQUFFLEVBQUNILElBQUksS0FBSyxDQUFNLE9BQUUsQ0FBQztRQUNuQixNQUFNLDZFQUFFSSxDQUFDLHNCQUFLRixJQUFJO1lBQUVDLFNBQVMsRUFBRUEsU0FBUztzQkFBR0YsUUFBUTs7Ozs7O0lBQ3JELENBQUMsTUFBTSxDQUFDO1FBQ04sTUFBTSw2RUFBRUksQ0FBTSwyQkFBS0gsSUFBSTtZQUFFQyxTQUFTLEVBQUVBLFNBQVM7c0JBQUdGLFFBQVE7Ozs7OztJQUMxRCxDQUFDO0FBQ0gsQ0FBQztLQVZ1QkgsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3ByaW1hcnktYnV0dG9uLmpzPzM4OTEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpbWFyeUJ1dHRvbihwcm9wcykge1xuXG4gIGNvbnN0IHsgdHlwZSwgY2hpbGRyZW4sIC4uLnJlc3QgfSA9IHByb3BzXG4gIGNvbnN0IGNsYXNzTmFtZT1cIm1heC13LWZpdCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtNCBweS0yIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgdGV4dC1zbSBmb250LW1lZGl1bSByb3VuZGVkLW1kIHNoYWRvdy1zbSB0ZXh0LXdoaXRlIGJnLWluZGlnby02MDAgaG92ZXI6YmctaW5kaWdvLTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGRpc2FibGVkOm9wYWNpdHktODAgZGlzYWJsZWQ6cG9pbnRlci1ldmVudHMtbm9uZVwiXG5cbiAgaWYodHlwZSA9PT0gXCJsaW5rXCIpIHtcbiAgICByZXR1cm4gPGEgey4uLnJlc3R9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57Y2hpbGRyZW59PC9hPlxuICB9IGVsc2Uge1xuICAgIHJldHVybiA8YnV0dG9uIHsuLi5yZXN0fSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e2NoaWxkcmVufTwvYnV0dG9uPlxuICB9XG59XG4iXSwibmFtZXMiOlsiUHJpbWFyeUJ1dHRvbiIsInByb3BzIiwidHlwZSIsImNoaWxkcmVuIiwicmVzdCIsImNsYXNzTmFtZSIsImEiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/primary-button.js\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mnt_c_Users_zen_dev_flipper_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _mnt_c_Users_zen_dev_flipper_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mnt_c_Users_zen_dev_flipper_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_primary_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/primary-button */ \"./components/primary-button.js\");\n/* harmony import */ var _utils_Flipper_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/Flipper.json */ \"./utils/Flipper.json\");\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    // USE STATE\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(undefined), ethereum = ref[0], setEthereum = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(undefined), connectedAccount = ref1[0], setConnectedAccount = ref1[1];\n    var contractAddress = '0x42Cc4682bB4B34A4f0996b0fae09Ec9fDc972562';\n    var contractABI = _utils_Flipper_json__WEBPACK_IMPORTED_MODULE_6__.abi;\n    var handleAccounts = function(accounts) {\n        if (accounts.length > 0) {\n            var account = accounts[0];\n            console.log('We have an authorized account: ', account);\n            setConnectedAccount(account);\n        } else {\n            console.log(\"No authorized accounts yet\");\n        }\n    };\n    var getConnectedAccount = function() {\n        var _ref = _asyncToGenerator(_mnt_c_Users_zen_dev_flipper_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var accounts;\n            return _mnt_c_Users_zen_dev_flipper_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(\"getConnectedAccount\");\n                        if (window.ethereum) {\n                            setEthereum(window.ethereum); //porived by metamask\n                        }\n                        if (!ethereum) {\n                            _ctx.next = 7;\n                            break;\n                        }\n                        _ctx.next = 5;\n                        return ethereum.request({\n                            method: 'eth_accounts'\n                        });\n                    case 5:\n                        accounts = _ctx.sent;\n                        handleAccounts(accounts);\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getConnectedAccount() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        return getConnectedAccount();\n    }, []);\n    var connectAccount = function() {\n        var _ref = _asyncToGenerator(_mnt_c_Users_zen_dev_flipper_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var accounts;\n            return _mnt_c_Users_zen_dev_flipper_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log('connectAccount');\n                        if (ethereum) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        alert('MetaMask is required to connect an account');\n                        return _ctx.abrupt(\"return\");\n                    case 4:\n                        _ctx.next = 6;\n                        return ethereum.request({\n                            method: 'eth_requestAccounts'\n                        });\n                    case 6:\n                        accounts = _ctx.sent;\n                        handleAccounts(accounts);\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function connectAccount() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // RETURNS\n    if (!ethereum) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n            children: \"Please install MetaMask to connect to this site\"\n        }, void 0, false, {\n            fileName: \"/mnt/c/Users/zen/dev/flipper/pages/index.tsx\",\n            lineNumber: 56,\n            columnNumber: 12\n        }, _this));\n    }\n    if (!connectedAccount) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_primary_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            onClick: connectAccount,\n            children: \"Connect MetaMask Wallet\"\n        }, void 0, false, {\n            fileName: \"/mnt/c/Users/zen/dev/flipper/pages/index.tsx\",\n            lineNumber: 60,\n            columnNumber: 12\n        }, _this));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/Users/zen/dev/flipper/pages/index.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/Users/zen/dev/flipper/pages/index.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/Users/zen/dev/flipper/pages/index.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/mnt/c/Users/zen/dev/flipper/pages/index.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                        children: [\n                            \"Welcome to \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                href: \"https://nextjs.org\",\n                                children: \"Flipper!\"\n                            }, void 0, false, {\n                                fileName: \"/mnt/c/Users/zen/dev/flipper/pages/index.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 22\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/mnt/c/Users/zen/dev/flipper/pages/index.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                        children: [\n                            \"Get started by editing\",\n                            ' ',\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"code\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().code),\n                                children: \"pages/index.tsx\"\n                            }, void 0, false, {\n                                fileName: \"/mnt/c/Users/zen/dev/flipper/pages/index.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/mnt/c/Users/zen/dev/flipper/pages/index.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/mnt/c/Users/zen/dev/flipper/pages/index.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().footer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                    href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    children: [\n                        \"Powered by\",\n                        ' ',\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().logo),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: \"/vercel.svg\",\n                                alt: \"Vercel Logo\",\n                                width: 72,\n                                height: 16\n                            }, void 0, false, {\n                                fileName: \"/mnt/c/Users/zen/dev/flipper/pages/index.tsx\",\n                                lineNumber: 120,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/mnt/c/Users/zen/dev/flipper/pages/index.tsx\",\n                            lineNumber: 119,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/mnt/c/Users/zen/dev/flipper/pages/index.tsx\",\n                    lineNumber: 113,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/zen/dev/flipper/pages/index.tsx\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/mnt/c/Users/zen/dev/flipper/pages/index.tsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, _this));\n};\n_s(Home, \"jt+w7hUKiSeNE9N7lnt0C3phyC4=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REMsQ0FBSTt3QkFBQ0MsR0FBRyxFQUFDLENBQU07d0JBQUNDLElBQUksRUFBQyxDQUFjOzs7Ozs7Ozs7Ozs7d0ZBR3JDQyxDQUFJO2dCQUFDVCxTQUFTLEVBQUU1QixxRUFBVzs7Z0dBQ3pCc0MsQ0FBRTt3QkFBQ1YsU0FBUyxFQUFFNUIsc0VBQVk7OzRCQUFFLENBQ2hCO3dHQUFDdUMsQ0FBQztnQ0FBQ0gsSUFBSSxFQUFDLENBQW9COzBDQUFDLENBQVE7Ozs7Ozs7Ozs7OztnR0FHakRYLENBQUM7d0JBQUNHLFNBQVMsRUFBRTVCLDRFQUFrQjs7NEJBQUUsQ0FDVjs0QkFBQyxDQUFHO3dHQUN6QnlDLENBQUk7Z0NBQUNiLFNBQVMsRUFBRTVCLHFFQUFXOzBDQUFFLENBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFrQ2hEMEMsQ0FBTTtnQkFBQ2QsU0FBUyxFQUFFNUIsdUVBQWE7c0dBQzdCdUMsQ0FBQztvQkFDQUgsSUFBSSxFQUFDLENBQXdHO29CQUM3R08sTUFBTSxFQUFDLENBQVE7b0JBQ2ZSLEdBQUcsRUFBQyxDQUFxQjs7d0JBQzFCLENBQ1c7d0JBQUMsQ0FBRztvR0FDYlMsQ0FBSTs0QkFBQ2hCLFNBQVMsRUFBRTVCLHFFQUFXO2tIQUN6QkQsbURBQUs7Z0NBQUMrQyxHQUFHLEVBQUMsQ0FBYTtnQ0FBQ0MsR0FBRyxFQUFDLENBQWE7Z0NBQUNDLEtBQUssRUFBRSxFQUFFO2dDQUFFQyxNQUFNLEVBQUUsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU01RSxDQUFDO0dBbkhLNUMsSUFBSTtLQUFKQSxJQUFJO0FBcUhWLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcmltYXJ5QnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL3ByaW1hcnktYnV0dG9uXCI7XG5pbXBvcnQgYWJpIGZyb20gXCIuLi91dGlscy9GbGlwcGVyLmpzb25cIlxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgLy8gVVNFIFNUQVRFXG4gIGNvbnN0IFtldGhlcmV1bSwgc2V0RXRoZXJldW1dID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcbiAgY29uc3QgW2Nvbm5lY3RlZEFjY291bnQsIHNldENvbm5lY3RlZEFjY291bnRdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcblxuICBjb25zdCBjb250cmFjdEFkZHJlc3MgPSAnMHg0MkNjNDY4MmJCNEIzNEE0ZjA5OTZiMGZhZTA5RWM5ZkRjOTcyNTYyJztcbiAgY29uc3QgY29udHJhY3RBQkkgPSBhYmkuYWJpXG5cbiAgY29uc3QgaGFuZGxlQWNjb3VudHMgPSAoYWNjb3VudHMpID0+IHtcbiAgICBpZiAoYWNjb3VudHMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgYWNjb3VudCA9IGFjY291bnRzWzBdO1xuICAgICAgY29uc29sZS5sb2coJ1dlIGhhdmUgYW4gYXV0aG9yaXplZCBhY2NvdW50OiAnLCBhY2NvdW50KTtcbiAgICAgIHNldENvbm5lY3RlZEFjY291bnQoYWNjb3VudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiTm8gYXV0aG9yaXplZCBhY2NvdW50cyB5ZXRcIilcbiAgICB9XG4gIH07XG4gIFxuICBjb25zdCBnZXRDb25uZWN0ZWRBY2NvdW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiZ2V0Q29ubmVjdGVkQWNjb3VudFwiKTtcbiAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XG4gICAgICBzZXRFdGhlcmV1bSh3aW5kb3cuZXRoZXJldW0pOyAvL3Bvcml2ZWQgYnkgbWV0YW1hc2tcbiAgICB9XG4gIFxuICAgIGlmIChldGhlcmV1bSkge1xuICAgICAgLy8gcmVxdWVzdHMgdGhlIGFjY291bnRzIGZyb20gbWV0YW1hc2tcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9hY2NvdW50cycgfSk7XG4gICAgICBoYW5kbGVBY2NvdW50cyhhY2NvdW50cyk7XG4gICAgfVxuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4gZ2V0Q29ubmVjdGVkQWNjb3VudCgpLCBbXSk7XG4gIFxuICBjb25zdCBjb25uZWN0QWNjb3VudCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnY29ubmVjdEFjY291bnQnKTtcbiAgICBpZiAoIWV0aGVyZXVtKSB7XG4gICAgICBhbGVydCgnTWV0YU1hc2sgaXMgcmVxdWlyZWQgdG8gY29ubmVjdCBhbiBhY2NvdW50Jyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICBcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcbiAgICBoYW5kbGVBY2NvdW50cyhhY2NvdW50cyk7XG4gIH07XG5cbiAgLy8gUkVUVVJOU1xuICBpZiAoIWV0aGVyZXVtKSB7XG4gICAgcmV0dXJuIDxwPlBsZWFzZSBpbnN0YWxsIE1ldGFNYXNrIHRvIGNvbm5lY3QgdG8gdGhpcyBzaXRlPC9wPlxuICB9XG5cbiAgaWYgKCFjb25uZWN0ZWRBY2NvdW50KSB7XG4gICAgcmV0dXJuIDxQcmltYXJ5QnV0dG9uIG9uQ2xpY2s9e2Nvbm5lY3RBY2NvdW50fT5Db25uZWN0IE1ldGFNYXNrIFdhbGxldDwvUHJpbWFyeUJ1dHRvbj5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgV2VsY29tZSB0byA8YSBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnXCI+RmxpcHBlciE8L2E+XG4gICAgICAgIDwvaDE+XG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgIEdldCBzdGFydGVkIGJ5IGVkaXRpbmd7JyAnfVxuICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT17c3R5bGVzLmNvZGV9PnBhZ2VzL2luZGV4LnRzeDwvY29kZT5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvZG9jc1wiIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAgPGgyPkRvY3VtZW50YXRpb24gJnJhcnI7PC9oMj5cbiAgICAgICAgICAgIDxwPkZpbmQgaW4tZGVwdGggaW5mb3JtYXRpb24gYWJvdXQgTmV4dC5qcyBmZWF0dXJlcyBhbmQgQVBJLjwvcD5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnL2xlYXJuXCIgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgICA8aDI+TGVhcm4gJnJhcnI7PC9oMj5cbiAgICAgICAgICAgIDxwPkxlYXJuIGFib3V0IE5leHQuanMgaW4gYW4gaW50ZXJhY3RpdmUgY291cnNlIHdpdGggcXVpenplcyE8L3A+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL25leHQuanMvdHJlZS9jYW5hcnkvZXhhbXBsZXNcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDI+RXhhbXBsZXMgJnJhcnI7PC9oMj5cbiAgICAgICAgICAgIDxwPkRpc2NvdmVyIGFuZCBkZXBsb3kgYm9pbGVycGxhdGUgZXhhbXBsZSBOZXh0LmpzIHByb2plY3RzLjwvcD5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbS9uZXc/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDI+RGVwbG95ICZyYXJyOzwvaDI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgSW5zdGFudGx5IGRlcGxveSB5b3VyIE5leHQuanMgc2l0ZSB0byBhIHB1YmxpYyBVUkwgd2l0aCBWZXJjZWwuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgUG93ZXJlZCBieXsnICd9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL3ZlcmNlbC5zdmdcIiBhbHQ9XCJWZXJjZWwgTG9nb1wiIHdpZHRoPXs3Mn0gaGVpZ2h0PXsxNn0gLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJzdHlsZXMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlByaW1hcnlCdXR0b24iLCJhYmkiLCJIb21lIiwidW5kZWZpbmVkIiwiZXRoZXJldW0iLCJzZXRFdGhlcmV1bSIsImNvbm5lY3RlZEFjY291bnQiLCJzZXRDb25uZWN0ZWRBY2NvdW50IiwiY29udHJhY3RBZGRyZXNzIiwiY29udHJhY3RBQkkiLCJoYW5kbGVBY2NvdW50cyIsImFjY291bnRzIiwibGVuZ3RoIiwiYWNjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJnZXRDb25uZWN0ZWRBY2NvdW50Iiwid2luZG93IiwicmVxdWVzdCIsIm1ldGhvZCIsImNvbm5lY3RBY2NvdW50IiwiYWxlcnQiLCJwIiwib25DbGljayIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiaDEiLCJhIiwiZGVzY3JpcHRpb24iLCJjb2RlIiwiZm9vdGVyIiwidGFyZ2V0Iiwic3BhbiIsImxvZ28iLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});