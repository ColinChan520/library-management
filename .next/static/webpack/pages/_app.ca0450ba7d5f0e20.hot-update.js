"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Layout/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Layout/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Layout: function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_LaptopOutlined_NotificationOutlined_UserOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=LaptopOutlined,NotificationOutlined,UserOutlined!=!@ant-design/icons */ \"__barrel_optimize__?names=LaptopOutlined,NotificationOutlined,UserOutlined!=!./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var _barrel_optimize_names_Breadcrumb_Dropdown_Layout_Menu_Space_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Breadcrumb,Dropdown,Layout,Menu,Space!=!antd */ \"__barrel_optimize__?names=Breadcrumb,Dropdown,Layout,Menu,Space!=!./node_modules/antd/es/index.js\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.module.css */ \"./src/components/Layout/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_DownOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=DownOutlined!=!@ant-design/icons */ \"__barrel_optimize__?names=DownOutlined!=!./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst { Header, Content, Sider } = _barrel_optimize_names_Breadcrumb_Dropdown_Layout_Menu_Space_antd__WEBPACK_IMPORTED_MODULE_4__.Layout;\nconst items1 = [\n    \"1\",\n    \"2\",\n    \"3\"\n].map((key)=>({\n        key,\n        label: \"nav \".concat(key)\n    }));\nconst items2 = [\n    _barrel_optimize_names_LaptopOutlined_NotificationOutlined_UserOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.UserOutlined,\n    _barrel_optimize_names_LaptopOutlined_NotificationOutlined_UserOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.LaptopOutlined,\n    _barrel_optimize_names_LaptopOutlined_NotificationOutlined_UserOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.NotificationOutlined\n].map((icon, index)=>{\n    const key = String(index + 1);\n    return {\n        key: \"sub\".concat(key),\n        icon: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(icon),\n        label: \"subnav \".concat(key),\n        children: new Array(4).fill(null).map((_, j)=>{\n            const subKey = index * 4 + j + 1;\n            return {\n                key: subKey,\n                label: \"option\".concat(subKey)\n            };\n        })\n    };\n});\nconst items3 = [\n    {\n        //icon: React.createElement(icon),\n        label: \"Library\",\n        key: \"book\",\n        children: [\n            {\n                label: \"Book List\",\n                key: \"/book\"\n            },\n            {\n                label: \"Book Adding\",\n                key: \"/book/add\"\n            }\n        ]\n    },\n    {\n        //icon: React.createElement(icon),\n        label: \"Borrowing\",\n        key: \"borrow\",\n        children: [\n            {\n                label: \"Borrowing List\",\n                key: \"/borrow\"\n            },\n            {\n                label: \"Borrowing Adding\",\n                key: \"/borrow/add\"\n            }\n        ]\n    },\n    {\n        //icon: React.createElement(icon),\n        label: \"Category\",\n        key: \"category\",\n        children: [\n            {\n                label: \"Category List\",\n                key: \"/category\"\n            },\n            {\n                label: \"Category Adding\",\n                key: \"/category/add\"\n            }\n        ]\n    },\n    {\n        //icon: React.createElement(icon),\n        label: \"User\",\n        key: \"user\",\n        children: [\n            {\n                label: \"User List\",\n                key: \"/user\"\n            },\n            {\n                label: \"User Adding\",\n                key: \"/user/add\"\n            }\n        ]\n    }\n];\nconst user_items = [\n    {\n        label: \"User centre\",\n        key: \"1\"\n    },\n    {\n        label: \"Log out\",\n        key: \"2\"\n    }\n];\nfunction Layout(param) {\n    let { children } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleMenuClick = (param)=>{\n        let { key } = param;\n        router.push(key);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/colin/Desktop/library-management/src/components/Layout/index.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/colin/Desktop/library-management/src/components/Layout/index.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/colin/Desktop/library-management/src/components/Layout/index.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/colin/Desktop/library-management/src/components/Layout/index.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/colin/Desktop/library-management/src/components/Layout/index.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex min-h-screen flex-col p-24\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Breadcrumb_Dropdown_Layout_Menu_Space_antd__WEBPACK_IMPORTED_MODULE_4__.Layout, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().header),\n                            children: [\n                                \"Library Management System\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().user),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Breadcrumb_Dropdown_Layout_Menu_Space_antd__WEBPACK_IMPORTED_MODULE_4__.Dropdown, {\n                                        menu: {\n                                            items: user_items\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            onClick: (e)=>e.preventDefault(),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Breadcrumb_Dropdown_Layout_Menu_Space_antd__WEBPACK_IMPORTED_MODULE_4__.Space, {\n                                                children: [\n                                                    \"User Name\",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_DownOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.DownOutlined, {}, void 0, false, {\n                                                        fileName: \"/Users/colin/Desktop/library-management/src/components/Layout/index.tsx\",\n                                                        lineNumber: 112,\n                                                        columnNumber: 15\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/colin/Desktop/library-management/src/components/Layout/index.tsx\",\n                                                lineNumber: 110,\n                                                columnNumber: 13\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/colin/Desktop/library-management/src/components/Layout/index.tsx\",\n                                            lineNumber: 109,\n                                            columnNumber: 11\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/colin/Desktop/library-management/src/components/Layout/index.tsx\",\n                                        lineNumber: 108,\n                                        columnNumber: 9\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/colin/Desktop/library-management/src/components/Layout/index.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 9\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/colin/Desktop/library-management/src/components/Layout/index.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 7\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Breadcrumb_Dropdown_Layout_Menu_Space_antd__WEBPACK_IMPORTED_MODULE_4__.Layout, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sider, {\n                                    width: 200,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Breadcrumb_Dropdown_Layout_Menu_Space_antd__WEBPACK_IMPORTED_MODULE_4__.Menu, {\n                                        mode: \"inline\",\n                                        defaultSelectedKeys: [\n                                            \"/book\"\n                                        ],\n                                        defaultOpenKeys: [\n                                            \"book\"\n                                        ],\n                                        style: {\n                                            height: \"100%\",\n                                            borderRight: 0\n                                        },\n                                        items: items3,\n                                        onClick: handleMenuClick\n                                    }, void 0, false, {\n                                        fileName: \"/Users/colin/Desktop/library-management/src/components/Layout/index.tsx\",\n                                        lineNumber: 121,\n                                        columnNumber: 11\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/colin/Desktop/library-management/src/components/Layout/index.tsx\",\n                                    lineNumber: 120,\n                                    columnNumber: 9\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Breadcrumb_Dropdown_Layout_Menu_Space_antd__WEBPACK_IMPORTED_MODULE_4__.Layout, {\n                                    style: {\n                                        padding: \"0 24px 24px\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Breadcrumb_Dropdown_Layout_Menu_Space_antd__WEBPACK_IMPORTED_MODULE_4__.Breadcrumb, {\n                                            style: {\n                                                margin: \"16px 0\"\n                                            },\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Breadcrumb_Dropdown_Layout_Menu_Space_antd__WEBPACK_IMPORTED_MODULE_4__.Breadcrumb.Item, {\n                                                    children: \"Home\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/colin/Desktop/library-management/src/components/Layout/index.tsx\",\n                                                    lineNumber: 132,\n                                                    columnNumber: 13\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Breadcrumb_Dropdown_Layout_Menu_Space_antd__WEBPACK_IMPORTED_MODULE_4__.Breadcrumb.Item, {\n                                                    children: \"List\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/colin/Desktop/library-management/src/components/Layout/index.tsx\",\n                                                    lineNumber: 133,\n                                                    columnNumber: 13\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Breadcrumb_Dropdown_Layout_Menu_Space_antd__WEBPACK_IMPORTED_MODULE_4__.Breadcrumb.Item, {\n                                                    children: \"App\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/colin/Desktop/library-management/src/components/Layout/index.tsx\",\n                                                    lineNumber: 134,\n                                                    columnNumber: 13\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/colin/Desktop/library-management/src/components/Layout/index.tsx\",\n                                            lineNumber: 131,\n                                            columnNumber: 11\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                                            children: [\n                                                children,\n                                                \";\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/colin/Desktop/library-management/src/components/Layout/index.tsx\",\n                                            lineNumber: 136,\n                                            columnNumber: 11\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/colin/Desktop/library-management/src/components/Layout/index.tsx\",\n                                    lineNumber: 130,\n                                    columnNumber: 9\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/colin/Desktop/library-management/src/components/Layout/index.tsx\",\n                            lineNumber: 119,\n                            columnNumber: 7\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/colin/Desktop/library-management/src/components/Layout/index.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/colin/Desktop/library-management/src/components/Layout/index.tsx\",\n                lineNumber: 103,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Layout, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NENBQUVDLE9BQU9qQjt3Q0FBVztrREFDbEMsNEVBQUNrQjs0Q0FBRUMsU0FBUyxDQUFDQyxJQUFNQSxFQUFFQyxjQUFjO3NEQUNqQyw0RUFBQzdDLG9HQUFLQTs7b0RBQUM7a0VBRUwsOERBQUNHLDhGQUFZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBT3JCLDhEQUFDTixxR0FBVUE7OzhDQUNULDhEQUFDVTtvQ0FBTXVDLE9BQU87OENBQ1osNEVBQUNoRCxtR0FBSUE7d0NBQ0hpRCxNQUFLO3dDQUNMQyxxQkFBcUI7NENBQUM7eUNBQVE7d0NBQzlCQyxpQkFBaUI7NENBQUM7eUNBQU87d0NBQ3pCaEQsT0FBTzs0Q0FBRWlELFFBQVE7NENBQVFDLGFBQWE7d0NBQUU7d0NBQ3hDVixPQUFPbEI7d0NBQ1BvQixTQUFTakI7Ozs7Ozs7Ozs7OzhDQUdiLDhEQUFDN0IscUdBQVVBO29DQUFDSSxPQUFPO3dDQUFFbUQsU0FBUztvQ0FBYzs7c0RBQzFDLDhEQUFDekQseUdBQVVBOzRDQUFDTSxPQUFPO2dEQUFFb0QsUUFBUTs0Q0FBUzs7OERBQ3BDLDhEQUFDMUQseUdBQVVBLENBQUMyRCxJQUFJOzhEQUFDOzs7Ozs7OERBQ2pCLDhEQUFDM0QseUdBQVVBLENBQUMyRCxJQUFJOzhEQUFDOzs7Ozs7OERBQ2pCLDhEQUFDM0QseUdBQVVBLENBQUMyRCxJQUFJOzhEQUFDOzs7Ozs7Ozs7Ozs7c0RBRW5CLDhEQUFDaEQ7O2dEQUNFVztnREFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPdEI7R0F2RGdCckI7O1FBQ0NNLGtEQUFTQTs7O0tBRFZOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xheW91dC9pbmRleC50c3g/OGY3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGFwdG9wT3V0bGluZWQsIE5vdGlmaWNhdGlvbk91dGxpbmVkLCBVc2VyT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5pbXBvcnQgdHlwZSB7IE1lbnVQcm9wcyB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgQnJlYWRjcnVtYiwgTGF5b3V0IGFzIEFudGRMYXlvdXQsIE1lbnUsIERyb3Bkb3duLCBTcGFjZSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vaW5kZXgubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBEb3duT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tICduZXh0L2ZvbnQvZ29vZ2xlJztcblxuY29uc3QgeyBIZWFkZXIsIENvbnRlbnQsIFNpZGVyIH0gPSBBbnRkTGF5b3V0O1xuXG5jb25zdCBpdGVtczE6IE1lbnVQcm9wc1snaXRlbXMnXSA9IFsnMScsICcyJywgJzMnXS5tYXAoKGtleSkgPT4gKHtcbiAga2V5LFxuICBsYWJlbDogYG5hdiAke2tleX1gLFxufSkpO1xuXG5jb25zdCBpdGVtczI6IE1lbnVQcm9wc1snaXRlbXMnXSA9IFtVc2VyT3V0bGluZWQsIExhcHRvcE91dGxpbmVkLCBOb3RpZmljYXRpb25PdXRsaW5lZF0ubWFwKFxuICAoaWNvbiwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBrZXkgPSBTdHJpbmcoaW5kZXggKyAxKTtcblxuICAgIHJldHVybiB7XG4gICAgICBrZXk6IGBzdWIke2tleX1gLFxuICAgICAgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChpY29uKSxcbiAgICAgIGxhYmVsOiBgc3VibmF2ICR7a2V5fWAsXG5cbiAgICAgIGNoaWxkcmVuOiBuZXcgQXJyYXkoNCkuZmlsbChudWxsKS5tYXAoKF8sIGopID0+IHtcbiAgICAgICAgY29uc3Qgc3ViS2V5ID0gaW5kZXggKiA0ICsgaiArIDE7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAga2V5OiBzdWJLZXksXG4gICAgICAgICAgbGFiZWw6IGBvcHRpb24ke3N1YktleX1gLFxuICAgICAgICB9O1xuICAgICAgfSksXG4gICAgfTtcbiAgfSxcbik7XG5cbmNvbnN0IGl0ZW1zMzogTWVudVByb3BzWydpdGVtcyddID0gW1xuICB7XG4gICAgLy9pY29uOiBSZWFjdC5jcmVhdGVFbGVtZW50KGljb24pLFxuICAgIGxhYmVsOiBgTGlicmFyeWAsXG4gICAga2V5OiBgYm9va2AsXG5cbiAgICBjaGlsZHJlbjogW1xuICAgICAgeyBsYWJlbDogYEJvb2sgTGlzdGAsIGtleTogYC9ib29rYCwgfSxcbiAgICAgIHsgbGFiZWw6IGBCb29rIEFkZGluZ2AsIGtleTogYC9ib29rL2FkZGAsIH1dXG4gIH0sXG4gIHtcbiAgICAvL2ljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoaWNvbiksXG4gICAgbGFiZWw6IGBCb3Jyb3dpbmdgLFxuICAgIGtleTogYGJvcnJvd2AsXG5cbiAgICBjaGlsZHJlbjogW1xuICAgICAgeyBsYWJlbDogYEJvcnJvd2luZyBMaXN0YCwga2V5OiBgL2JvcnJvd2AsIH0sXG4gICAgICB7IGxhYmVsOiBgQm9ycm93aW5nIEFkZGluZ2AsIGtleTogYC9ib3Jyb3cvYWRkYCwgfV1cbiAgfSxcbiAge1xuICAgIC8vaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChpY29uKSxcbiAgICBsYWJlbDogYENhdGVnb3J5YCxcbiAgICBrZXk6IGBjYXRlZ29yeWAsXG5cbiAgICBjaGlsZHJlbjogW1xuICAgICAgeyBsYWJlbDogYENhdGVnb3J5IExpc3RgLCBrZXk6IGAvY2F0ZWdvcnlgLCB9LFxuICAgICAgeyBsYWJlbDogYENhdGVnb3J5IEFkZGluZ2AsIGtleTogYC9jYXRlZ29yeS9hZGRgLCB9XVxuICB9LFxuICB7XG4gICAgLy9pY29uOiBSZWFjdC5jcmVhdGVFbGVtZW50KGljb24pLFxuICAgIGxhYmVsOiBgVXNlcmAsXG4gICAga2V5OiBgdXNlcmAsXG5cbiAgICBjaGlsZHJlbjogW1xuICAgICAgeyBsYWJlbDogYFVzZXIgTGlzdGAsIGtleTogYC91c2VyYCwgfSxcbiAgICAgIHsgbGFiZWw6IGBVc2VyIEFkZGluZ2AsIGtleTogYC91c2VyL2FkZGAsIH1dXG4gIH0sXG5dO1xuXG5jb25zdCB1c2VyX2l0ZW1zOiBNZW51UHJvcHNbJ2l0ZW1zJ10gPSBbXG4gIHtcbiAgICBsYWJlbDogXCJVc2VyIGNlbnRyZVwiLFxuICAgIGtleTogJzEnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdMb2cgb3V0JyxcbiAgICBrZXk6ICcyJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBoYW5kbGVNZW51Q2xpY2sgPSAoeyBrZXkgfSkgPT4ge1xuICAgIHJvdXRlci5wdXNoKGtleSk7XG4gIH07XG5cbiAgXG4gIHJldHVybiAoXG4gICAgPD48SGVhZD5cbiAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICA8L0hlYWQ+XG4gICAgPG1haW4gY2xhc3NOYW1lPXtgZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgcC0yNGB9PlxuICAgIDxBbnRkTGF5b3V0PlxuICAgICAgPEhlYWRlciBjbGFzc05hbWU9e3N0eWxlLmhlYWRlcn0+XG4gICAgICAgIExpYnJhcnkgTWFuYWdlbWVudCBTeXN0ZW1cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZS51c2VyfT5cbiAgICAgICAgPERyb3Bkb3duIG1lbnU9e3sgaXRlbXM6IHVzZXJfaXRlbXMgfX0+XG4gICAgICAgICAgPGEgb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0+XG4gICAgICAgICAgICA8U3BhY2U+XG4gICAgICAgICAgICAgIFVzZXIgTmFtZVxuICAgICAgICAgICAgICA8RG93bk91dGxpbmVkLz5cbiAgICAgICAgICAgICAgPC9TcGFjZT5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgXG4gICAgICA8L0hlYWRlcj5cbiAgICAgIDxBbnRkTGF5b3V0PlxuICAgICAgICA8U2lkZXIgd2lkdGg9ezIwMH0gPlxuICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICBtb2RlPVwiaW5saW5lXCJcbiAgICAgICAgICAgIGRlZmF1bHRTZWxlY3RlZEtleXM9e1snL2Jvb2snXX1cbiAgICAgICAgICAgIGRlZmF1bHRPcGVuS2V5cz17Wydib29rJ119XG4gICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgYm9yZGVyUmlnaHQ6IDAgfX1cbiAgICAgICAgICAgIGl0ZW1zPXtpdGVtczN9XG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVNZW51Q2xpY2t9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TaWRlcj5cbiAgICAgICAgPEFudGRMYXlvdXQgc3R5bGU9e3sgcGFkZGluZzogJzAgMjRweCAyNHB4JyB9fT5cbiAgICAgICAgICA8QnJlYWRjcnVtYiBzdHlsZT17eyBtYXJnaW46ICcxNnB4IDAnIH19PlxuICAgICAgICAgICAgPEJyZWFkY3J1bWIuSXRlbT5Ib21lPC9CcmVhZGNydW1iLkl0ZW0+XG4gICAgICAgICAgICA8QnJlYWRjcnVtYi5JdGVtPkxpc3Q8L0JyZWFkY3J1bWIuSXRlbT5cbiAgICAgICAgICAgIDxCcmVhZGNydW1iLkl0ZW0+QXBwPC9CcmVhZGNydW1iLkl0ZW0+XG4gICAgICAgICAgPC9CcmVhZGNydW1iPlxuICAgICAgICAgIDxDb250ZW50PlxuICAgICAgICAgICAge2NoaWxkcmVufTtcbiAgICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgIDwvQW50ZExheW91dD5cbiAgICAgIDwvQW50ZExheW91dD5cbiAgICA8L0FudGRMYXlvdXQ+PC9tYWluPjwvPlxuXG4gICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiTGFwdG9wT3V0bGluZWQiLCJOb3RpZmljYXRpb25PdXRsaW5lZCIsIlVzZXJPdXRsaW5lZCIsIkJyZWFkY3J1bWIiLCJMYXlvdXQiLCJBbnRkTGF5b3V0IiwiTWVudSIsIkRyb3Bkb3duIiwiU3BhY2UiLCJzdHlsZSIsInVzZVJvdXRlciIsIkRvd25PdXRsaW5lZCIsIkhlYWQiLCJIZWFkZXIiLCJDb250ZW50IiwiU2lkZXIiLCJpdGVtczEiLCJtYXAiLCJrZXkiLCJsYWJlbCIsIml0ZW1zMiIsImljb24iLCJpbmRleCIsIlN0cmluZyIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZHJlbiIsIkFycmF5IiwiZmlsbCIsIl8iLCJqIiwic3ViS2V5IiwiaXRlbXMzIiwidXNlcl9pdGVtcyIsInJvdXRlciIsImhhbmRsZU1lbnVDbGljayIsInB1c2giLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImNsYXNzTmFtZSIsImhlYWRlciIsInNwYW4iLCJ1c2VyIiwibWVudSIsIml0ZW1zIiwiYSIsIm9uQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJ3aWR0aCIsIm1vZGUiLCJkZWZhdWx0U2VsZWN0ZWRLZXlzIiwiZGVmYXVsdE9wZW5LZXlzIiwiaGVpZ2h0IiwiYm9yZGVyUmlnaHQiLCJwYWRkaW5nIiwibWFyZ2luIiwiSXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Layout/index.tsx\n"));

/***/ })

});