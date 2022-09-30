/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/SubscribeButton/styles.module.scss":
/*!***********************************************************!*\
  !*** ./src/components/SubscribeButton/styles.module.scss ***!
  \***********************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"subscribeButton\": \"styles_subscribeButton__52c6u\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vc3R5bGVzLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL2NvbXBvbmVudHMvU3Vic2NyaWJlQnV0dG9uL3N0eWxlcy5tb2R1bGUuc2Nzcz9kYmU1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInN1YnNjcmliZUJ1dHRvblwiOiBcInN0eWxlc19zdWJzY3JpYmVCdXR0b25fXzUyYzZ1XCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/styles.module.scss\n");

/***/ }),

/***/ "./src/pages/home.module.scss":
/*!************************************!*\
  !*** ./src/pages/home.module.scss ***!
  \************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"contentContainer\": \"home_contentContainer__HYuN8\",\n\t\"hero\": \"home_hero__lhpWS\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL2hvbWUubW9kdWxlLnNjc3M/ZTRjMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250ZW50Q29udGFpbmVyXCI6IFwiaG9tZV9jb250ZW50Q29udGFpbmVyX19IWXVOOFwiLFxuXHRcImhlcm9cIjogXCJob21lX2hlcm9fX2xocFdTXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/home.module.scss\n");

/***/ }),

/***/ "./src/components/SubscribeButton/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/SubscribeButton/index.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SubscribeButton\": () => (/* binding */ SubscribeButton)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api */ \"./src/services/api.ts\");\n/* harmony import */ var _services_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/stripe-js */ \"./src/services/stripe-js.ts\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/SubscribeButton/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction SubscribeButton({ priceId  }) {\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    async function handleSubscribe() {\n        if (!session) {\n            (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"github\");\n            return;\n        }\n        try {\n            const response = await _services_api__WEBPACK_IMPORTED_MODULE_2__.api.post(\"/subscribe\");\n            const { sessionId  } = response.data;\n            const stripe = await (0,_services_stripe_js__WEBPACK_IMPORTED_MODULE_3__.getStripeJs)();\n            await stripe.redirectToCheckout({\n                sessionId\n            });\n        } catch (err) {\n            alert(err.message);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().subscribeButton),\n        onClick: handleSubscribe,\n        children: \"Subscribe now\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\carpe\\\\projetos\\\\estudo\\\\ignite\\\\ignews\\\\src\\\\components\\\\SubscribeButton\\\\index.tsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQXFEO0FBQ1o7QUFDYztBQUNiO0FBTW5DLFNBQVNLLGVBQWUsQ0FBQyxFQUFFQyxPQUFPLEdBQXdCLEVBQUU7SUFDL0QsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sR0FBRSxHQUFHUCwyREFBVSxFQUFFO0lBQ3RDLGVBQWVRLGVBQWUsR0FBRztRQUM3QixJQUFHLENBQUNELE9BQU8sRUFBRTtZQUNUUix1REFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2pCLE9BQU87U0FDVjtRQUVELElBQUk7WUFDQSxNQUFNVSxRQUFRLEdBQUcsTUFBTVIsbURBQVEsQ0FBQyxZQUFZLENBQUM7WUFFN0MsTUFBTSxFQUFFVSxTQUFTLEdBQUUsR0FBR0YsUUFBUSxDQUFDSCxJQUFJO1lBRW5DLE1BQU1NLE1BQU0sR0FBRyxNQUFNVixnRUFBVyxFQUFFO1lBRWxDLE1BQU1VLE1BQU0sQ0FBQ0Msa0JBQWtCLENBQUM7Z0JBQUVGLFNBQVM7YUFBRSxDQUFDLENBQUM7U0FDbEQsQ0FBQyxPQUFPRyxHQUFHLEVBQUU7WUFDVkMsS0FBSyxDQUFDRCxHQUFHLENBQUNFLE9BQU8sQ0FBQztTQUNyQjtLQUNKO0lBQ0QscUJBQ0ksOERBQUNDLFFBQU07UUFDSEMsSUFBSSxFQUFDLFFBQVE7UUFDYkMsU0FBUyxFQUFFaEIsNEVBQXNCO1FBQ2pDa0IsT0FBTyxFQUFFYixlQUFlO2tCQUMzQixlQUVEOzs7OztZQUFTLENBQ1o7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9jb21wb25lbnRzL1N1YnNjcmliZUJ1dHRvbi9pbmRleC50c3g/OTBlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaWduSW4sIHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCB7IGFwaSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hcGlcIjtcclxuaW1wb3J0IHsgZ2V0U3RyaXBlSnMgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc3RyaXBlLWpzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xyXG5cclxuaW50ZXJmYWNlIFN1YnNjcmliZUJ1dHRvblByb3BzIHtcclxuICAgIHByaWNlSWQ6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU3Vic2NyaWJlQnV0dG9uKHsgcHJpY2VJZCB9OiBTdWJzY3JpYmVCdXR0b25Qcm9wcykge1xyXG4gICAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJzY3JpYmUoKSB7XHJcbiAgICAgICAgaWYoIXNlc3Npb24pIHtcclxuICAgICAgICAgICAgc2lnbkluKCdnaXRodWInKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChcIi9zdWJzY3JpYmVcIik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB7IHNlc3Npb25JZCB9ID0gcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN0cmlwZSA9IGF3YWl0IGdldFN0cmlwZUpzKCk7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCBzdHJpcGUucmVkaXJlY3RUb0NoZWNrb3V0KHsgc2Vzc2lvbklkIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBhbGVydChlcnIubWVzc2FnZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zdWJzY3JpYmVCdXR0b259XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1YnNjcmliZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIFN1YnNjcmliZSBub3dcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJzaWduSW4iLCJ1c2VTZXNzaW9uIiwiYXBpIiwiZ2V0U3RyaXBlSnMiLCJzdHlsZXMiLCJTdWJzY3JpYmVCdXR0b24iLCJwcmljZUlkIiwiZGF0YSIsInNlc3Npb24iLCJoYW5kbGVTdWJzY3JpYmUiLCJyZXNwb25zZSIsInBvc3QiLCJzZXNzaW9uSWQiLCJzdHJpcGUiLCJyZWRpcmVjdFRvQ2hlY2tvdXQiLCJlcnIiLCJhbGVydCIsIm1lc3NhZ2UiLCJidXR0b24iLCJ0eXBlIiwiY2xhc3NOYW1lIiwic3Vic2NyaWJlQnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/index.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SubscribeButton */ \"./src/components/SubscribeButton/index.tsx\");\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/stripe */ \"./src/services/stripe.ts\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.module.scss */ \"./src/pages/home.module.scss\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Home({ product  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Inicio | ig.news\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\carpe\\\\projetos\\\\estudo\\\\ignite\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\carpe\\\\projetos\\\\estudo\\\\ignite\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contentContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hero),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"\\uD83D\\uDC4F Hey, welcome\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\carpe\\\\projetos\\\\estudo\\\\ignite\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \"News about the \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"React\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\carpe\\\\projetos\\\\estudo\\\\ignite\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 26,\n                                        columnNumber: 40\n                                    }, this),\n                                    \" world.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\carpe\\\\projetos\\\\estudo\\\\ignite\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Get access to all the publications \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\carpe\\\\projetos\\\\estudo\\\\ignite\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 60\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: [\n                                            \" for \",\n                                            product.amount,\n                                            \" month\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\carpe\\\\projetos\\\\estudo\\\\ignite\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\carpe\\\\projetos\\\\estudo\\\\ignite\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__.SubscribeButton, {\n                                priceId: product.priceId\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\carpe\\\\projetos\\\\estudo\\\\ignite\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\carpe\\\\projetos\\\\estudo\\\\ignite\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/images/avatar.svg\",\n                        alt: \"Girl coding\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\carpe\\\\projetos\\\\estudo\\\\ignite\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\carpe\\\\projetos\\\\estudo\\\\ignite\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n};\nconst getStaticProps = async ()=>{\n    const price = await _services_stripe__WEBPACK_IMPORTED_MODULE_3__.stripe.prices.retrieve(\"price_1Ll1eEIeHn4rztoxl4J1in3E\");\n    const product = {\n        priceId: price.id,\n        amount: new Intl.NumberFormat(\"en-US\", {\n            style: \"currency\",\n            currency: \"USD\"\n        }).format(price.unit_amount / 100)\n    };\n    return {\n        props: {\n            product\n        },\n        revalidate: 60 * 60 * 24 // 24 hours\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUU2QjtBQUNtQztBQUNwQjtBQUVKO0FBU3pCLFNBQVNJLElBQUksQ0FBQyxFQUFFQyxPQUFPLEdBQWEsRUFBRTtJQUNqRCxxQkFDSTs7MEJBQ0ksOERBQUNMLGtEQUFJOzBCQUNELDRFQUFDTSxPQUFLOzhCQUFDLGtCQUFnQjs7Ozs7d0JBQVE7Ozs7O29CQUM1QjswQkFFUCw4REFBQ0MsTUFBSTtnQkFBQ0MsU0FBUyxFQUFFTCwyRUFBdUI7O2tDQUNwQyw4REFBQ08sU0FBTzt3QkFBQ0YsU0FBUyxFQUFFTCwrREFBVzs7MENBQzNCLDhEQUFDUyxNQUFJOzBDQUFDLDJCQUFjOzs7OztvQ0FBTzswQ0FDM0IsOERBQUNDLElBQUU7O29DQUFDLGlCQUFlO2tEQUFBLDhEQUFDRCxNQUFJO2tEQUFDLE9BQUs7Ozs7OzRDQUFPO29DQUFBLFNBQU87Ozs7OztvQ0FBSzswQ0FDakQsOERBQUNFLEdBQUM7O29DQUFDLHFDQUNvQztrREFBQSw4REFBQ0MsSUFBRTs7Ozs0Q0FBRztrREFDekMsOERBQUNILE1BQUk7OzRDQUFDLE9BQUs7NENBQUNQLE9BQU8sQ0FBQ1csTUFBTTs0Q0FBQyxRQUFNOzs7Ozs7NENBQU87Ozs7OztvQ0FDeEM7MENBQ0osOERBQUNmLHdFQUFlO2dDQUFDZ0IsT0FBTyxFQUFFWixPQUFPLENBQUNZLE9BQU87Ozs7O29DQUFHOzs7Ozs7NEJBQ3RDO2tDQUVWLDhEQUFDQyxLQUFHO3dCQUFDQyxHQUFHLEVBQUMsb0JBQW9CO3dCQUFDQyxHQUFHLEVBQUMsYUFBYTs7Ozs7NEJBQUU7Ozs7OztvQkFDOUM7O29CQUNSLENBQ047Q0FDSjtBQUVNLE1BQU1DLGNBQWMsR0FBbUIsVUFBWTtJQUN0RCxNQUFNQyxLQUFLLEdBQUcsTUFBTXBCLG9FQUFzQixDQUFDLGdDQUFnQyxDQUFDO0lBRTVFLE1BQU1HLE9BQU8sR0FBRztRQUNaWSxPQUFPLEVBQUVLLEtBQUssQ0FBQ0csRUFBRTtRQUNqQlQsTUFBTSxFQUFFLElBQUlVLElBQUksQ0FBQ0MsWUFBWSxDQUFDLE9BQU8sRUFBRTtZQUNuQ0MsS0FBSyxFQUFFLFVBQVU7WUFDakJDLFFBQVEsRUFBRSxLQUFLO1NBQ2xCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDUixLQUFLLENBQUNTLFdBQVcsR0FBRyxHQUFHLENBQUM7S0FDckM7SUFFRCxPQUFPO1FBQ0hDLEtBQUssRUFBRTtZQUNIM0IsT0FBTztTQUNWO1FBQ0Q0QixVQUFVLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsV0FBVztLQUN2QztDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCc7XHJcblxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBTdWJzY3JpYmVCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL1N1YnNjcmliZUJ1dHRvbic7XHJcbmltcG9ydCB7IHN0cmlwZSB9IGZyb20gJy4uL3NlcnZpY2VzL3N0cmlwZSc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaG9tZS5tb2R1bGUuc2Nzcyc7XHJcblxyXG5pbnRlcmZhY2UgSG9tZVByb3BzIHtcclxuICAgIHByb2R1Y3Q6IHtcclxuICAgICAgICBwcmljZUlkOiBzdHJpbmcsXHJcbiAgICAgICAgYW1vdW50OiBudW1iZXJcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHByb2R1Y3QgfTogSG9tZVByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkluaWNpbyB8IGlnLm5ld3M8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmhlcm99PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPvCfkY8gSGV5LCB3ZWxjb21lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT5OZXdzIGFib3V0IHRoZSA8c3Bhbj5SZWFjdDwvc3Bhbj4gd29ybGQuPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgR2V0IGFjY2VzcyB0byBhbGwgdGhlIHB1YmxpY2F0aW9ucyA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IGZvciB7cHJvZHVjdC5hbW91bnR9IG1vbnRoPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8U3Vic2NyaWJlQnV0dG9uIHByaWNlSWQ9e3Byb2R1Y3QucHJpY2VJZH0vPlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9hdmF0YXIuc3ZnXCIgYWx0PVwiR2lybCBjb2RpbmdcIi8+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHByaWNlID0gYXdhaXQgc3RyaXBlLnByaWNlcy5yZXRyaWV2ZShcInByaWNlXzFMbDFlRUllSG40cnp0b3hsNEoxaW4zRVwiKVxyXG5cclxuICAgIGNvbnN0IHByb2R1Y3QgPSB7XHJcbiAgICAgICAgcHJpY2VJZDogcHJpY2UuaWQsXHJcbiAgICAgICAgYW1vdW50OiBuZXcgSW50bC5OdW1iZXJGb3JtYXQoXCJlbi1VU1wiLCB7XHJcbiAgICAgICAgICAgIHN0eWxlOiBcImN1cnJlbmN5XCIsXHJcbiAgICAgICAgICAgIGN1cnJlbmN5OiBcIlVTRFwiXHJcbiAgICAgICAgfSkuZm9ybWF0KHByaWNlLnVuaXRfYW1vdW50IC8gMTAwKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgcHJvZHVjdFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmV2YWxpZGF0ZTogNjAgKiA2MCAqIDI0IC8vIDI0IGhvdXJzXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiSGVhZCIsIlN1YnNjcmliZUJ1dHRvbiIsInN0cmlwZSIsInN0eWxlcyIsIkhvbWUiLCJwcm9kdWN0IiwidGl0bGUiLCJtYWluIiwiY2xhc3NOYW1lIiwiY29udGVudENvbnRhaW5lciIsInNlY3Rpb24iLCJoZXJvIiwic3BhbiIsImgxIiwicCIsImJyIiwiYW1vdW50IiwicHJpY2VJZCIsImltZyIsInNyYyIsImFsdCIsImdldFN0YXRpY1Byb3BzIiwicHJpY2UiLCJwcmljZXMiLCJyZXRyaWV2ZSIsImlkIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJmb3JtYXQiLCJ1bml0X2Ftb3VudCIsInByb3BzIiwicmV2YWxpZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"/api\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUVuQixNQUFNQyxHQUFHLEdBQUdELG1EQUFZLENBQUM7SUFDOUJHLE9BQU8sRUFBRSxNQUFNO0NBQ2hCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvYXBpLnRzPzk1NmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBjb25zdCBhcGkgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IFwiL2FwaVwiXHJcbn0pIl0sIm5hbWVzIjpbImF4aW9zIiwiYXBpIiwiY3JlYXRlIiwiYmFzZVVSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/api.ts\n");

/***/ }),

/***/ "./src/services/stripe-js.ts":
/*!***********************************!*\
  !*** ./src/services/stripe-js.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStripeJs\": () => (/* binding */ getStripeJs)\n/* harmony export */ });\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stripe/stripe-js */ \"@stripe/stripe-js\");\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function getStripeJs() {\n    const stripeJs = (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__.loadStripe)(\"pk_test_51Ll1a7IeHn4rztoxEW2Yij4ixRIuzlpmvV9UcpVsSwaz5FtBNJILim9pAAmKNlwUmKr2zBpVzEz99OFMuYAqixHp00UrdHRiSL\");\n    return stripeJs;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvc3RyaXBlLWpzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQztBQUV4QyxlQUFlQyxXQUFXLEdBQUc7SUFDbEMsTUFBTUMsUUFBUSxHQUFHRiw2REFBVSxDQUFDRyw2R0FBeUMsQ0FBQztJQUV0RSxPQUFPRCxRQUFRLENBQUM7Q0FDakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvc3RyaXBlLWpzLnRzPzU5OGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9hZFN0cmlwZSB9IGZyb20gXCJAc3RyaXBlL3N0cmlwZS1qc1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0cmlwZUpzKCkge1xyXG4gIGNvbnN0IHN0cmlwZUpzID0gbG9hZFN0cmlwZShwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJJUEVfUFVCTElDX0tFWSk7XHJcblxyXG4gIHJldHVybiBzdHJpcGVKcztcclxufSJdLCJuYW1lcyI6WyJsb2FkU3RyaXBlIiwiZ2V0U3RyaXBlSnMiLCJzdHJpcGVKcyIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVFJJUEVfUFVCTElDX0tFWSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/stripe-js.ts\n");

/***/ }),

/***/ "./src/services/stripe.ts":
/*!********************************!*\
  !*** ./src/services/stripe.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ \"./package.json\");\n\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_KEY, {\n    apiVersion: \"2022-08-01\",\n    appInfo: {\n        name: \"Ignews\",\n        version: _package_json__WEBPACK_IMPORTED_MODULE_1__.version\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNEI7QUFDaUI7QUFFdEMsTUFBTUUsTUFBTSxHQUFHLElBQUlGLCtDQUFNLENBQzVCRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsY0FBYyxFQUMxQjtJQUNJQyxVQUFVLEVBQUUsWUFBWTtJQUN4QkMsT0FBTyxFQUFFO1FBQ0xDLElBQUksRUFBRSxRQUFRO1FBQ2RQLE9BQU87S0FDVjtDQUNKLENBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzP2FiOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0cmlwZSBmcm9tIFwic3RyaXBlXCI7XHJcbmltcG9ydCB7IHZlcnNpb24gfSBmcm9tIFwiLi4vLi4vcGFja2FnZS5qc29uXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc3RyaXBlID0gbmV3IFN0cmlwZShcclxuICAgIHByb2Nlc3MuZW52LlNUUklQRV9BUElfS0VZLFxyXG4gICAge1xyXG4gICAgICAgIGFwaVZlcnNpb246IFwiMjAyMi0wOC0wMVwiLFxyXG4gICAgICAgIGFwcEluZm86IHtcclxuICAgICAgICAgICAgbmFtZTogXCJJZ25ld3NcIixcclxuICAgICAgICAgICAgdmVyc2lvblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuKSJdLCJuYW1lcyI6WyJTdHJpcGUiLCJ2ZXJzaW9uIiwic3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9BUElfS0VZIiwiYXBpVmVyc2lvbiIsImFwcEluZm8iLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/stripe.ts\n");

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@stripe/stripe-js");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stripe");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"ignews","version":"0.1.0","private":true,"scripts":{"dev":"next dev","build":"next build","start":"next start","lint":"next lint"},"dependencies":{"@stripe/stripe-js":"^1.38.1","axios":"^0.27.2","faunadb":"^4.7.0","next":"12.1.5","next-auth":"^4.12.0","react":"18.0.0","react-dom":"18.0.0","react-icons":"^4.3.1","sass":"^1.50.1","stripe":"^10.11.0"},"devDependencies":{"@types/node":"^17.0.27","@types/react":"^18.0.7","typescript":"^4.6.3"}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();