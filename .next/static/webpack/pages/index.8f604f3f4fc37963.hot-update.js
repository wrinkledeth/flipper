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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mnt_c_Users_zen_dev_flipper_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _mnt_c_Users_zen_dev_flipper_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mnt_c_Users_zen_dev_flipper_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_primary_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/primary-button */ \"./components/primary-button.js\");\n/* harmony import */ var _utils_Flipper_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/Flipper.json */ \"./utils/Flipper.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    // USE STATE\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(undefined), ethereum = ref[0], setEthereum = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(undefined), connectedAccount = ref1[0], setConnectedAccount = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), bit1 = ref2[0], setBit = ref2[1];\n    var contractAddress = '0x42Cc4682bB4B34A4f0996b0fae09Ec9fDc972562';\n    var contractABI = _utils_Flipper_json__WEBPACK_IMPORTED_MODULE_5__.abi;\n    var handleAccounts = function(accounts) {\n        if (accounts.length > 0) {\n            var account = accounts[0];\n            console.log('We have an authorized account: ', account);\n            setConnectedAccount(account);\n        } else {\n            console.log(\"No authorized accounts yet\");\n        }\n    };\n    var getConnectedAccount = function() {\n        var _ref = _asyncToGenerator(_mnt_c_Users_zen_dev_flipper_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var accounts;\n            return _mnt_c_Users_zen_dev_flipper_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(\"getConnectedAccount\");\n                        if (window.ethereum) {\n                            setEthereum(window.ethereum); //porived by metamask\n                        }\n                        if (!ethereum) {\n                            _ctx.next = 7;\n                            break;\n                        }\n                        _ctx.next = 5;\n                        return ethereum.request({\n                            method: 'eth_accounts'\n                        });\n                    case 5:\n                        accounts = _ctx.sent;\n                        handleAccounts(accounts);\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getConnectedAccount() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        getConnectedAccount();\n    }, []);\n    var connectAccount = function() {\n        var _ref = _asyncToGenerator(_mnt_c_Users_zen_dev_flipper_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var accounts;\n            return _mnt_c_Users_zen_dev_flipper_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log('connectAccount');\n                        if (ethereum) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        alert('MetaMask is required to connect an account');\n                        return _ctx.abrupt(\"return\");\n                    case 4:\n                        _ctx.next = 6;\n                        return ethereum.request({\n                            method: 'eth_requestAccounts'\n                        });\n                    case 6:\n                        accounts = _ctx.sent;\n                        handleAccounts(accounts);\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function connectAccount() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getBit = function() {\n        var _ref = _asyncToGenerator(_mnt_c_Users_zen_dev_flipper_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var provider, signer, flipperContract, bit;\n            return _mnt_c_Users_zen_dev_flipper_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!(ethereum && connectedAccount)) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(ethereum);\n                        signer = provider.getSigner();\n                        flipperContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(contractAddress, contractABI, signer);\n                        _ctx.next = 6;\n                        return flipperContract.get();\n                    case 6:\n                        bit = _ctx.sent;\n                        console.log('Bit state retrieved', bit);\n                        setBit(bit);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getBit() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        getBit();\n    }, [\n        connectedAccount\n    ]);\n    var flipBit = function() {\n        var _ref = _asyncToGenerator(_mnt_c_Users_zen_dev_flipper_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var provider, signer, flipperContract, flipTx;\n            return _mnt_c_Users_zen_dev_flipper_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        if (ethereum) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        console.error('Ethereum object is required to Flip');\n                        return _ctx.abrupt(\"return\");\n                    case 4:\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(ethereum);\n                        signer = provider.getSigner();\n                        flipperContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(contractAddress, contractABI, signer);\n                        _ctx.next = 9;\n                        return flipperContract.flip();\n                    case 9:\n                        flipTx = _ctx.sent;\n                        console.log('Flip transaction started...', flipTx.hash);\n                        _ctx.next = 13;\n                        return flipTx.wait();\n                    case 13:\n                        console.log('Bit Flipped!', flipTx.hash);\n                        _ctx.next = 16;\n                        return getBit();\n                    case 16:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function flipBit(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // RETURNS\n    if (!ethereum) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n            children: \"Please install MetaMask to connect to this site\"\n        }, void 0, false, {\n            fileName: \"/mnt/c/Users/zen/dev/flipper/pages/index.tsx\",\n            lineNumber: 98,\n            columnNumber: 12\n        }, _this));\n    }\n    if (!connectedAccount) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_primary_button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            onClick: connectAccount,\n            children: \"Connect MetaMask Wallet\"\n        }, void 0, false, {\n            fileName: \"/mnt/c/Users/zen/dev/flipper/pages/index.tsx\",\n            lineNumber: 102,\n            columnNumber: 12\n        }, _this));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/Users/zen/dev/flipper/pages/index.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/Users/zen/dev/flipper/pages/index.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/Users/zen/dev/flipper/pages/index.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/mnt/c/Users/zen/dev/flipper/pages/index.tsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                        children: [\n                            \"Welcome to \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                href: \"https://nextjs.org\",\n                                children: \"Flipper!\"\n                            }, void 0, false, {\n                                fileName: \"/mnt/c/Users/zen/dev/flipper/pages/index.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 22\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/mnt/c/Users/zen/dev/flipper/pages/index.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                        children: [\n                            \"Connected Account: \",\n                            ' ',\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"code\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().code),\n                                children: connectedAccount\n                            }, void 0, false, {\n                                fileName: \"/mnt/c/Users/zen/dev/flipper/pages/index.tsx\",\n                                lineNumber: 121,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/mnt/c/Users/zen/dev/flipper/pages/index.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                        children: [\n                            \"Bit = \",\n                            String(bit1)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/mnt/c/Users/zen/dev/flipper/pages/index.tsx\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-y-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_primary_button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            type: \"submit\",\n                            onClick: flipBit,\n                            children: \"Flip!\"\n                        }, void 0, false, {\n                            fileName: \"/mnt/c/Users/zen/dev/flipper/pages/index.tsx\",\n                            lineNumber: 129,\n                            columnNumber: 9\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/Users/zen/dev/flipper/pages/index.tsx\",\n                        lineNumber: 128,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/mnt/c/Users/zen/dev/flipper/pages/index.tsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().footer),\n                children: \"Wrinkled Labs\"\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/zen/dev/flipper/pages/index.tsx\",\n                lineNumber: 165,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/mnt/c/Users/zen/dev/flipper/pages/index.tsx\",\n        lineNumber: 106,\n        columnNumber: 5\n    }, _this));\n};\n_s(Home, \"BwXE3bP1oMo661l2DvcEdZuspNY=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztHQTVKS00sSUFBSTtLQUFKQSxJQUFJO0FBOEpWLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcmltYXJ5QnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL3ByaW1hcnktYnV0dG9uXCI7XG5pbXBvcnQgYWJpIGZyb20gXCIuLi91dGlscy9GbGlwcGVyLmpzb25cIlxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuXG5kZWNsYXJlIHZhciB3aW5kb3c6IGFueVxuZGVjbGFyZSB2YXIgZXRoZXJldW06IGFueVxuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgLy8gVVNFIFNUQVRFXG4gIGNvbnN0IFtldGhlcmV1bSwgc2V0RXRoZXJldW1dID0gdXNlU3RhdGUodW5kZWZpbmVkKSBhcyBhbnk7IFxuICBjb25zdCBbY29ubmVjdGVkQWNjb3VudCwgc2V0Q29ubmVjdGVkQWNjb3VudF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpIGFzIGFueTtcbiAgY29uc3QgW2JpdCwgc2V0Qml0XSA9IHVzZVN0YXRlKGZhbHNlKSBhcyBhbnk7XG5cbiAgY29uc3QgY29udHJhY3RBZGRyZXNzID0gJzB4NDJDYzQ2ODJiQjRCMzRBNGYwOTk2YjBmYWUwOUVjOWZEYzk3MjU2Mic7XG4gIGNvbnN0IGNvbnRyYWN0QUJJID0gYWJpLmFiaVxuXG4gIGNvbnN0IGhhbmRsZUFjY291bnRzID0gKGFjY291bnRzOnN0cmluZ1tdKSA9PiB7XG4gICAgaWYgKGFjY291bnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGFjY291bnQgPSBhY2NvdW50c1swXTtcbiAgICAgIGNvbnNvbGUubG9nKCdXZSBoYXZlIGFuIGF1dGhvcml6ZWQgYWNjb3VudDogJywgYWNjb3VudCk7XG4gICAgICBzZXRDb25uZWN0ZWRBY2NvdW50KGFjY291bnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk5vIGF1dGhvcml6ZWQgYWNjb3VudHMgeWV0XCIpXG4gICAgfVxuICB9O1xuICBcbiAgY29uc3QgZ2V0Q29ubmVjdGVkQWNjb3VudCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImdldENvbm5lY3RlZEFjY291bnRcIik7XG4gICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xuICAgICAgc2V0RXRoZXJldW0od2luZG93LmV0aGVyZXVtKTsgLy9wb3JpdmVkIGJ5IG1ldGFtYXNrXG4gICAgfVxuICBcbiAgICBpZiAoZXRoZXJldW0pIHtcbiAgICAgIC8vIHJlcXVlc3RzIHRoZSBhY2NvdW50cyBmcm9tIG1ldGFtYXNrXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfYWNjb3VudHMnIH0pO1xuICAgICAgaGFuZGxlQWNjb3VudHMoYWNjb3VudHMpO1xuICAgIH1cblxuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldENvbm5lY3RlZEFjY291bnQoKTtcbiAgfSwgW10pO1xuICBcbiAgY29uc3QgY29ubmVjdEFjY291bnQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2Nvbm5lY3RBY2NvdW50Jyk7XG4gICAgaWYgKCFldGhlcmV1bSkge1xuICAgICAgYWxlcnQoJ01ldGFNYXNrIGlzIHJlcXVpcmVkIHRvIGNvbm5lY3QgYW4gYWNjb3VudCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSk7XG4gICAgaGFuZGxlQWNjb3VudHMoYWNjb3VudHMpO1xuICB9O1xuXG4gIGNvbnN0IGdldEJpdCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoZXRoZXJldW0gJiYgY29ubmVjdGVkQWNjb3VudCkge1xuICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoZXRoZXJldW0pO1xuICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICBjb25zdCBmbGlwcGVyQ29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGNvbnRyYWN0QWRkcmVzcywgY29udHJhY3RBQkksIHNpZ25lcik7XG4gICAgICBjb25zdCBiaXQgPSBhd2FpdCBmbGlwcGVyQ29udHJhY3QuZ2V0KCk7XG4gICAgICBjb25zb2xlLmxvZygnQml0IHN0YXRlIHJldHJpZXZlZCcsIGJpdCk7XG4gICAgICBzZXRCaXQoYml0KTtcbiAgICB9XG4gIH1cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRCaXQoKTtcbiAgfSxbY29ubmVjdGVkQWNjb3VudF0pXG5cbiAgY29uc3QgZmxpcEJpdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKCFldGhlcmV1bSkge1xuICAgICAgY29uc29sZS5lcnJvcignRXRoZXJldW0gb2JqZWN0IGlzIHJlcXVpcmVkIHRvIEZsaXAnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihldGhlcmV1bSk7XG4gICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgY29uc3QgZmxpcHBlckNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChjb250cmFjdEFkZHJlc3MsIGNvbnRyYWN0QUJJLCBzaWduZXIpO1xuXG4gICAgY29uc3QgZmxpcFR4ID0gYXdhaXQgZmxpcHBlckNvbnRyYWN0LmZsaXAoKTtcbiAgICBjb25zb2xlLmxvZygnRmxpcCB0cmFuc2FjdGlvbiBzdGFydGVkLi4uJywgZmxpcFR4Lmhhc2gpO1xuXG4gICAgYXdhaXQgZmxpcFR4LndhaXQoKTtcbiAgICBjb25zb2xlLmxvZygnQml0IEZsaXBwZWQhJywgZmxpcFR4Lmhhc2gpO1xuXG4gICAgYXdhaXQgZ2V0Qml0KCk7XG4gIH1cblxuICAvLyBSRVRVUk5TXG4gIGlmICghZXRoZXJldW0pIHtcbiAgICByZXR1cm4gPHA+UGxlYXNlIGluc3RhbGwgTWV0YU1hc2sgdG8gY29ubmVjdCB0byB0aGlzIHNpdGU8L3A+XG4gIH1cblxuICBpZiAoIWNvbm5lY3RlZEFjY291bnQpIHtcbiAgICByZXR1cm4gPFByaW1hcnlCdXR0b24gb25DbGljaz17Y29ubmVjdEFjY291bnR9PkNvbm5lY3QgTWV0YU1hc2sgV2FsbGV0PC9QcmltYXJ5QnV0dG9uPlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICBXZWxjb21lIHRvIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmdcIj5GbGlwcGVyITwvYT5cbiAgICAgICAgPC9oMT5cbiAgXG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgIENvbm5lY3RlZCBBY2NvdW50OiB7JyAnfVxuICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT17c3R5bGVzLmNvZGV9Pntjb25uZWN0ZWRBY2NvdW50fTwvY29kZT5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgQml0ID0ge1N0cmluZyhiaXQpfVxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAteS04XCI+XG4gICAgICAgIDxQcmltYXJ5QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXtmbGlwQml0fT5cbiAgICAgICAgICBGbGlwIVxuICAgICAgICA8L1ByaW1hcnlCdXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvZG9jc1wiIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAgPGgyPkRvY3VtZW50YXRpb24gJnJhcnI7PC9oMj5cbiAgICAgICAgICAgIDxwPkZpbmQgaW4tZGVwdGggaW5mb3JtYXRpb24gYWJvdXQgTmV4dC5qcyBmZWF0dXJlcyBhbmQgQVBJLjwvcD5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnL2xlYXJuXCIgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgICA8aDI+TGVhcm4gJnJhcnI7PC9oMj5cbiAgICAgICAgICAgIDxwPkxlYXJuIGFib3V0IE5leHQuanMgaW4gYW4gaW50ZXJhY3RpdmUgY291cnNlIHdpdGggcXVpenplcyE8L3A+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL25leHQuanMvdHJlZS9jYW5hcnkvZXhhbXBsZXNcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDI+RXhhbXBsZXMgJnJhcnI7PC9oMj5cbiAgICAgICAgICAgIDxwPkRpc2NvdmVyIGFuZCBkZXBsb3kgYm9pbGVycGxhdGUgZXhhbXBsZSBOZXh0LmpzIHByb2plY3RzLjwvcD5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbS9uZXc/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDI+RGVwbG95ICZyYXJyOzwvaDI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgSW5zdGFudGx5IGRlcGxveSB5b3VyIE5leHQuanMgc2l0ZSB0byBhIHB1YmxpYyBVUkwgd2l0aCBWZXJjZWwuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgV3JpbmtsZWQgTGFic1xuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZXMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlByaW1hcnlCdXR0b24iLCJhYmkiLCJldGhlcnMiLCJIb21lIiwidW5kZWZpbmVkIiwiZXRoZXJldW0iLCJzZXRFdGhlcmV1bSIsImNvbm5lY3RlZEFjY291bnQiLCJzZXRDb25uZWN0ZWRBY2NvdW50IiwiYml0Iiwic2V0Qml0IiwiY29udHJhY3RBZGRyZXNzIiwiY29udHJhY3RBQkkiLCJoYW5kbGVBY2NvdW50cyIsImFjY291bnRzIiwibGVuZ3RoIiwiYWNjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJnZXRDb25uZWN0ZWRBY2NvdW50Iiwid2luZG93IiwicmVxdWVzdCIsIm1ldGhvZCIsImNvbm5lY3RBY2NvdW50IiwiYWxlcnQiLCJnZXRCaXQiLCJwcm92aWRlciIsInNpZ25lciIsImZsaXBwZXJDb250cmFjdCIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsImdldFNpZ25lciIsIkNvbnRyYWN0IiwiZ2V0IiwiZmxpcEJpdCIsImUiLCJmbGlwVHgiLCJwcmV2ZW50RGVmYXVsdCIsImVycm9yIiwiZmxpcCIsImhhc2giLCJ3YWl0IiwicCIsIm9uQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImgxIiwiYSIsImRlc2NyaXB0aW9uIiwiY29kZSIsIlN0cmluZyIsInR5cGUiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});