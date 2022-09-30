"use strict";
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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("faunadb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/fauna */ \"(api)/./src/services/fauna.ts\");\n\n\n\n\nconst authOptions = {\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET,\n            authorization: {\n                params: {\n                    scope: \"read:user\"\n                }\n            }\n        }), \n    ],\n    callbacks: {\n        async signIn ({ user , account , profile  }) {\n            const { email  } = user;\n            try {\n                await _services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.If(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Not(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Exists(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(email)))), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Create(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Collection(\"users\"), {\n                    data: {\n                        email\n                    }\n                }), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(email)))));\n                return true;\n            } catch  {\n                return false;\n            }\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBcUM7QUFFSjtBQUN1QjtBQUVSO0FBRXpDLE1BQU1LLFdBQVcsR0FBRztJQUN6QixpREFBaUQ7SUFDakRDLFNBQVMsRUFBRTtRQUNUSCxpRUFBYyxDQUFDO1lBQ2JJLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFNBQVM7WUFDL0JDLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLGFBQWE7WUFDdkNDLGFBQWEsRUFBRTtnQkFDYkMsTUFBTSxFQUFFO29CQUNOQyxLQUFLLEVBQUUsV0FBVztpQkFDbkI7YUFDRjtTQUNGLENBQUM7S0FDSDtJQUNEQyxTQUFTLEVBQUU7UUFDVCxNQUFNQyxNQUFNLEVBQUMsRUFBRUMsSUFBSSxHQUFFQyxPQUFPLEdBQUVDLE9BQU8sR0FBRSxFQUFFO1lBQ3ZDLE1BQU0sRUFBRUMsS0FBSyxHQUFFLEdBQUdILElBQUk7WUFFdEIsSUFBSTtnQkFDRixNQUFNZCx3REFBVyxDQUNmSCw2Q0FBSSxDQUNGQSw4Q0FBSyxDQUNIQSxpREFBUSxDQUNOQSxnREFBTyxDQUNMQSxnREFBTyxDQUFDLGVBQWUsQ0FBQyxFQUN4QkEsbURBQVUsQ0FBQ29CLEtBQUssQ0FBQyxDQUNsQixDQUNGLENBQ0YsRUFDRHBCLGlEQUFRLENBQ05BLHFEQUFZLENBQUMsT0FBTyxDQUFDLEVBQ3JCO29CQUFFNkIsSUFBSSxFQUFFO3dCQUFFVCxLQUFLO3FCQUFFO2lCQUFFLENBQ3BCLEVBQ0RwQiw4Q0FBSyxDQUNIQSxnREFBTyxDQUNMQSxnREFBTyxDQUFDLGVBQWUsQ0FBQyxFQUN4QkEsbURBQVUsQ0FBQ29CLEtBQUssQ0FBQyxDQUNsQixDQUNGLENBQ0YsQ0FDRixDQUFDO2dCQUVGLE9BQU8sSUFBSSxDQUFDO2FBQ2IsQ0FBQyxPQUFNO2dCQUNOLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtLQUNGO0NBQ0Y7QUFFRCxpRUFBZW5CLGdEQUFRLENBQUNHLFdBQVcsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/NTBhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBxdWVyeSBhcyBxIH0gZnJvbSAnZmF1bmFkYic7IFxyXG5cclxuaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IEdpdGh1YlByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiO1xyXG5cclxuaW1wb3J0IHsgZmF1bmEgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvZmF1bmFcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcclxuICAvLyBDb25maWd1cmUgb25lIG9yIG1vcmUgYXV0aGVudGljYXRpb24gcHJvdmlkZXJzXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBHaXRodWJQcm92aWRlcih7XHJcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfSUQsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX1NFQ1JFVCxcclxuICAgICAgYXV0aG9yaXphdGlvbjoge1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgc2NvcGU6ICdyZWFkOnVzZXInXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBjYWxsYmFja3M6IHtcclxuICAgIGFzeW5jIHNpZ25Jbih7IHVzZXIsIGFjY291bnQsIHByb2ZpbGUgfSkge1xyXG4gICAgICBjb25zdCB7IGVtYWlsIH0gPSB1c2VyO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBmYXVuYS5xdWVyeShcclxuICAgICAgICAgIHEuSWYoXHJcbiAgICAgICAgICAgIHEuTm90KFxyXG4gICAgICAgICAgICAgIHEuRXhpc3RzKFxyXG4gICAgICAgICAgICAgICAgcS5NYXRjaChcclxuICAgICAgICAgICAgICAgICAgcS5JbmRleCgndXNlcl9ieV9lbWFpbCcpLFxyXG4gICAgICAgICAgICAgICAgICBxLkNhc2Vmb2xkKGVtYWlsKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgcS5DcmVhdGUoXHJcbiAgICAgICAgICAgICAgcS5Db2xsZWN0aW9uKCd1c2VycycpLFxyXG4gICAgICAgICAgICAgIHsgZGF0YTogeyBlbWFpbCB9IH1cclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgcS5HZXQoXHJcbiAgICAgICAgICAgICAgcS5NYXRjaChcclxuICAgICAgICAgICAgICAgIHEuSW5kZXgoJ3VzZXJfYnlfZW1haWwnKSxcclxuICAgICAgICAgICAgICAgIHEuQ2FzZWZvbGQoZW1haWwpXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucyk7Il0sIm5hbWVzIjpbInF1ZXJ5IiwicSIsIk5leHRBdXRoIiwiR2l0aHViUHJvdmlkZXIiLCJmYXVuYSIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR0lUSFVCX0lEIiwiY2xpZW50U2VjcmV0IiwiR0lUSFVCX1NFQ1JFVCIsImF1dGhvcml6YXRpb24iLCJwYXJhbXMiLCJzY29wZSIsImNhbGxiYWNrcyIsInNpZ25JbiIsInVzZXIiLCJhY2NvdW50IiwicHJvZmlsZSIsImVtYWlsIiwiSWYiLCJOb3QiLCJFeGlzdHMiLCJNYXRjaCIsIkluZGV4IiwiQ2FzZWZvbGQiLCJDcmVhdGUiLCJDb2xsZWN0aW9uIiwiZGF0YSIsIkdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "(api)/./src/services/fauna.ts":
/*!*******************************!*\
  !*** ./src/services/fauna.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fauna\": () => (/* binding */ fauna)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__.Client({\n    secret: process.env.FAUNABD_KEY\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmljZXMvZmF1bmEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlDO0FBRTFCLE1BQU1DLEtBQUssR0FBRyxJQUFJRCwyQ0FBTSxDQUFDO0lBQzVCRSxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXO0NBQ2xDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9zZXJ2aWNlcy9mYXVuYS50cz8zMjNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudCB9IGZyb20gJ2ZhdW5hZGInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZhdW5hID0gbmV3IENsaWVudCh7XHJcbiAgICBzZWNyZXQ6IHByb2Nlc3MuZW52LkZBVU5BQkRfS0VZXHJcbn0pOyJdLCJuYW1lcyI6WyJDbGllbnQiLCJmYXVuYSIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJGQVVOQUJEX0tFWSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/services/fauna.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();