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

/***/ "./src/components/SignInButton/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/SignInButton/index.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SignInButton\": function() { return /* binding */ SignInButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/SignInButton/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_icons_FI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/FI */ \"./node_modules/react-icons/FI/index.esm.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction SignInButton() {\n    _s();\n    var ref = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)(), session = ref.data;\n    return session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().signInButton),\n        onClick: function() {\n            return (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signOut)();\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaGithub, {\n                color: \"#03D361\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\carpe\\\\projetos\\\\estudo\\\\ignite\\\\ignews\\\\src\\\\components\\\\SignInButton\\\\index.tsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this),\n            session.user.name,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_FI__WEBPACK_IMPORTED_MODULE_4__.FiX, {\n                color: \"#737380\",\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().closeIcon)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\carpe\\\\projetos\\\\estudo\\\\ignite\\\\ignews\\\\src\\\\components\\\\SignInButton\\\\index.tsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\carpe\\\\projetos\\\\estudo\\\\ignite\\\\ignews\\\\src\\\\components\\\\SignInButton\\\\index.tsx\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().signInButton),\n        onClick: function() {\n            return (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"github\");\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaGithub, {\n                color: \"#EBA417\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\carpe\\\\projetos\\\\estudo\\\\ignite\\\\ignews\\\\src\\\\components\\\\SignInButton\\\\index.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this),\n            \"Sign in with Github\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\carpe\\\\projetos\\\\estudo\\\\ignite\\\\ignews\\\\src\\\\components\\\\SignInButton\\\\index.tsx\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this);\n}\n_s(SignInButton, \"xGqsfA9Yc4bug2CeORcyTsHwvXY=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession\n    ];\n});\n_c = SignInButton;\nvar _c;\n$RefreshReg$(_c, \"SignInButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaWduSW5CdXR0b24vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQThEO0FBRXBCO0FBRUE7QUFDTDs7QUFFOUIsU0FBU00sWUFBWSxHQUFHOztJQUMzQixJQUEwQkosR0FBWSxHQUFaQSwyREFBVSxFQUFFLEVBQTlCSyxPQUFhLEdBQUtMLEdBQVksQ0FBOUJLLElBQUk7SUFDWixPQUFPQyxPQUFPLGlCQUNWLDhEQUFDQyxRQUFNO1FBQ0hDLElBQUksRUFBQyxRQUFRO1FBQ2JDLFNBQVMsRUFBRVIseUVBQW1CO1FBQzlCVSxPQUFPLEVBQUU7bUJBQU1aLHdEQUFPLEVBQUU7U0FBQTs7MEJBRXhCLDhEQUFDRyxvREFBUTtnQkFBQ1UsS0FBSyxFQUFDLFNBQVM7Ozs7O29CQUFFO1lBQ3pCTixPQUFPLENBQUNPLElBQUksQ0FBQ0MsSUFBSTswQkFDbkIsOERBQUNYLCtDQUFHO2dCQUFDUyxLQUFLLEVBQUMsU0FBUztnQkFBQ0gsU0FBUyxFQUFFUixzRUFBZ0I7Ozs7O29CQUFHOzs7Ozs7WUFDOUMsaUJBRVQsOERBQUNNLFFBQU07UUFDSEMsSUFBSSxFQUFDLFFBQVE7UUFDYkMsU0FBUyxFQUFFUix5RUFBbUI7UUFDOUJVLE9BQU8sRUFBRTttQkFBTWIsdURBQU0sQ0FBQyxRQUFRLENBQUM7U0FBQTs7MEJBRS9CLDhEQUFDSSxvREFBUTtnQkFBQ1UsS0FBSyxFQUFDLFNBQVM7Ozs7O29CQUFFO1lBQUEscUJBRS9COzs7Ozs7WUFBUyxDQUNaO0NBQ0o7R0F0QmVSLFlBQVk7O1FBQ0VKLHVEQUFVOzs7QUFEeEJJLEtBQUFBLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2lnbkluQnV0dG9uL2luZGV4LnRzeD9jYjQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNpZ25Jbiwgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcclxuXHJcbmltcG9ydCB7IEZhR2l0aHViIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgeyBGaVggfSBmcm9tICdyZWFjdC1pY29ucy9GSSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2lnbkluQnV0dG9uKCkge1xyXG4gICAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XHJcbiAgICByZXR1cm4gc2Vzc2lvbiA/IChcclxuICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2lnbkluQnV0dG9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8RmFHaXRodWIgY29sb3I9XCIjMDNEMzYxXCIvPlxyXG4gICAgICAgICAgICB7IHNlc3Npb24udXNlci5uYW1lIH1cclxuICAgICAgICAgICAgPEZpWCBjb2xvcj1cIiM3MzczODBcIiBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZUljb259Lz4gXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApIDogKFxyXG4gICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zaWduSW5CdXR0b259XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNpZ25JbignZ2l0aHViJyl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8RmFHaXRodWIgY29sb3I9XCIjRUJBNDE3XCIvPlxyXG4gICAgICAgICAgICBTaWduIGluIHdpdGggR2l0aHViXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApXHJcbn0gIl0sIm5hbWVzIjpbInNpZ25JbiIsInNpZ25PdXQiLCJ1c2VTZXNzaW9uIiwic3R5bGVzIiwiRmFHaXRodWIiLCJGaVgiLCJTaWduSW5CdXR0b24iLCJkYXRhIiwic2Vzc2lvbiIsImJ1dHRvbiIsInR5cGUiLCJjbGFzc05hbWUiLCJzaWduSW5CdXR0b24iLCJvbkNsaWNrIiwiY29sb3IiLCJ1c2VyIiwibmFtZSIsImNsb3NlSWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SignInButton/index.tsx\n");

/***/ })

});