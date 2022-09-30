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
exports.id = "pages/api/subscribe";
exports.ids = ["pages/api/subscribe"];
exports.modules = {

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("faunadb");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./src/pages/api/subscribe.ts":
/*!************************************!*\
  !*** ./src/pages/api/subscribe.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/fauna */ \"(api)/./src/services/fauna.ts\");\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/stripe */ \"(api)/./src/services/stripe.ts\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (request, response)=>{\n    if (request.method === \"POST\") {\n        var ref;\n        const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n            req: request\n        });\n        const user = await _services_fauna__WEBPACK_IMPORTED_MODULE_2__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Casefold(session === null || session === void 0 ? void 0 : (ref = session.user) === null || ref === void 0 ? void 0 : ref.email))));\n        let customerId = user.data.stripe_customer_id;\n        if (!customerId) {\n            var ref1, ref2;\n            const stripeCustumer = await _services_stripe__WEBPACK_IMPORTED_MODULE_3__.stripe.customers.create({\n                email: session === null || session === void 0 ? void 0 : (ref1 = session.user) === null || ref1 === void 0 ? void 0 : ref1.email\n            });\n            await _services_fauna__WEBPACK_IMPORTED_MODULE_2__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Update(faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Ref(faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Collection(\"users\"), user === null || user === void 0 ? void 0 : (ref2 = user.ref) === null || ref2 === void 0 ? void 0 : ref2.id), {\n                data: {\n                    stripe_customer_id: stripeCustumer.id\n                }\n            }));\n            customerId = stripeCustumer.id;\n        }\n        const stripeCheckoutSession = await _services_stripe__WEBPACK_IMPORTED_MODULE_3__.stripe.checkout.sessions.create({\n            customer: customerId,\n            payment_method_types: [\n                \"card\"\n            ],\n            billing_address_collection: \"required\",\n            line_items: [\n                {\n                    price: \"price_1Ll1eEIeHn4rztoxl4J1in3E\",\n                    quantity: 1\n                }\n            ],\n            mode: \"subscription\",\n            allow_promotion_codes: true,\n            success_url: process.env.STRIPE_SUCCESS_URL,\n            cancel_url: process.env.STRIPE_CANCEL_URL\n        });\n        return response.status(200).json({\n            sessionId: stripeCheckoutSession.id\n        });\n    } else {\n        response.setHeader(\"Allow\", \"POST\");\n        response.status(405).end(\"Method not allowed\");\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWdlcy9hcGkvc3Vic2NyaWJlLnRzPzA1OGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCB7IHF1ZXJ5IGFzIHEgfSBmcm9tICdmYXVuYWRiJztcclxuaW1wb3J0IHsgZmF1bmEgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZmF1bmFcIjtcclxuaW1wb3J0IHsgc3RyaXBlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3N0cmlwZVwiO1xyXG5cclxudHlwZSBVc2VyID0ge1xyXG4gIHJlZjoge1xyXG4gICAgaWQ6IHN0cmluZ1xyXG4gIH1cclxuICBkYXRhOiB7IFxyXG4gICAgc3RyaXBlX2N1c3RvbWVyX2lkOiBzdHJpbmdcclxuICB9XHJcbn0gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxdWVzdDogTmV4dEFwaVJlcXVlc3QsIHJlc3BvbnNlOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcclxuICBpZihyZXF1ZXN0Lm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxOiByZXF1ZXN0IH0pXHJcblxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGZhdW5hLnF1ZXJ5PFVzZXI+KFxyXG4gICAgICBxLkdldChcclxuICAgICAgICBxLk1hdGNoKFxyXG4gICAgICAgICAgcS5JbmRleChcInVzZXJfYnlfZW1haWxcIiksXHJcbiAgICAgICAgICBxLkNhc2Vmb2xkKHNlc3Npb24/LnVzZXI/LmVtYWlsKVxyXG4gICAgICAgIClcclxuICAgICAgKVxyXG4gICAgKVxyXG5cclxuICAgIGxldCBjdXN0b21lcklkID0gdXNlci5kYXRhLnN0cmlwZV9jdXN0b21lcl9pZFxyXG5cclxuICAgIGlmKCFjdXN0b21lcklkKSB7XHJcbiAgICAgIGNvbnN0IHN0cmlwZUN1c3R1bWVyID0gIGF3YWl0IHN0cmlwZS5jdXN0b21lcnMuY3JlYXRlKHtcclxuICAgICAgICBlbWFpbDogc2Vzc2lvbj8udXNlcj8uZW1haWwsXHJcbiAgICAgICAgLy8gbWV0YWRhdGE6IFxyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgYXdhaXQgZmF1bmEucXVlcnkoXHJcbiAgICAgICAgcS5VcGRhdGUoXHJcbiAgICAgICAgICBxLlJlZihxLkNvbGxlY3Rpb24oXCJ1c2Vyc1wiKSwgdXNlcj8ucmVmPy5pZCksXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGRhdGE6IHsgXHJcbiAgICAgICAgICAgICAgc3RyaXBlX2N1c3RvbWVyX2lkOiBzdHJpcGVDdXN0dW1lci5pZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICApXHJcblxyXG4gICAgICBjdXN0b21lcklkID0gc3RyaXBlQ3VzdHVtZXIuaWRcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3Qgc3RyaXBlQ2hlY2tvdXRTZXNzaW9uID0gYXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLmNyZWF0ZSh7XHJcbiAgICAgIGN1c3RvbWVyOiBjdXN0b21lcklkLFxyXG4gICAgICBwYXltZW50X21ldGhvZF90eXBlczogWydjYXJkJ10sXHJcbiAgICAgIGJpbGxpbmdfYWRkcmVzc19jb2xsZWN0aW9uOiAncmVxdWlyZWQnLFxyXG4gICAgICBsaW5lX2l0ZW1zOiBbXHJcbiAgICAgICAgeyBwcmljZTogXCJwcmljZV8xTGwxZUVJZUhuNHJ6dG94bDRKMWluM0VcIiwgcXVhbnRpdHk6IDEgfVxyXG4gICAgICBdLFxyXG4gICAgICBtb2RlOiBcInN1YnNjcmlwdGlvblwiLFxyXG4gICAgICBhbGxvd19wcm9tb3Rpb25fY29kZXM6IHRydWUsXHJcbiAgICAgIHN1Y2Nlc3NfdXJsOiBwcm9jZXNzLmVudi5TVFJJUEVfU1VDQ0VTU19VUkwsXHJcbiAgICAgIGNhbmNlbF91cmw6IHByb2Nlc3MuZW52LlNUUklQRV9DQU5DRUxfVVJMLFxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzKDIwMCkuanNvbih7IHNlc3Npb25JZDogc3RyaXBlQ2hlY2tvdXRTZXNzaW9uLmlkIH0pXHJcbiAgfSBlbHNlIHtcclxuICAgIHJlc3BvbnNlLnNldEhlYWRlcihcIkFsbG93XCIsIFwiUE9TVFwiKTtcclxuICAgIHJlc3BvbnNlLnN0YXR1cyg0MDUpLmVuZChcIk1ldGhvZCBub3QgYWxsb3dlZFwiKTtcclxuICB9XHJcbn07Il0sIm5hbWVzIjpbImdldFNlc3Npb24iLCJxdWVyeSIsInEiLCJmYXVuYSIsInN0cmlwZSIsInJlcXVlc3QiLCJyZXNwb25zZSIsIm1ldGhvZCIsInNlc3Npb24iLCJyZXEiLCJ1c2VyIiwiR2V0IiwiTWF0Y2giLCJJbmRleCIsIkNhc2Vmb2xkIiwiZW1haWwiLCJjdXN0b21lcklkIiwiZGF0YSIsInN0cmlwZV9jdXN0b21lcl9pZCIsInN0cmlwZUN1c3R1bWVyIiwiY3VzdG9tZXJzIiwiY3JlYXRlIiwiVXBkYXRlIiwiUmVmIiwiQ29sbGVjdGlvbiIsInJlZiIsImlkIiwic3RyaXBlQ2hlY2tvdXRTZXNzaW9uIiwiY2hlY2tvdXQiLCJzZXNzaW9ucyIsImN1c3RvbWVyIiwicGF5bWVudF9tZXRob2RfdHlwZXMiLCJiaWxsaW5nX2FkZHJlc3NfY29sbGVjdGlvbiIsImxpbmVfaXRlbXMiLCJwcmljZSIsInF1YW50aXR5IiwibW9kZSIsImFsbG93X3Byb21vdGlvbl9jb2RlcyIsInN1Y2Nlc3NfdXJsIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9TVUNDRVNTX1VSTCIsImNhbmNlbF91cmwiLCJTVFJJUEVfQ0FOQ0VMX1VSTCIsInN0YXR1cyIsImpzb24iLCJzZXNzaW9uSWQiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/subscribe.ts\n");

/***/ }),

/***/ "(api)/./src/services/fauna.ts":
/*!*******************************!*\
  !*** ./src/services/fauna.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fauna\": () => (/* binding */ fauna)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__.Client({\n    secret: process.env.FAUNABD_KEY\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmljZXMvZmF1bmEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlDO0FBRTFCLE1BQU1DLEtBQUssR0FBRyxJQUFJRCwyQ0FBTSxDQUFDO0lBQzVCRSxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXO0NBQ2xDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9zZXJ2aWNlcy9mYXVuYS50cz8zMjNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudCB9IGZyb20gJ2ZhdW5hZGInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZhdW5hID0gbmV3IENsaWVudCh7XHJcbiAgICBzZWNyZXQ6IHByb2Nlc3MuZW52LkZBVU5BQkRfS0VZXHJcbn0pOyJdLCJuYW1lcyI6WyJDbGllbnQiLCJmYXVuYSIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJGQVVOQUJEX0tFWSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/services/fauna.ts\n");

/***/ }),

/***/ "(api)/./src/services/stripe.ts":
/*!********************************!*\
  !*** ./src/services/stripe.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ \"(api)/./package.json\");\n\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_KEY, {\n    apiVersion: \"2022-08-01\",\n    appInfo: {\n        name: \"Ignews\",\n        version: _package_json__WEBPACK_IMPORTED_MODULE_1__.version\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNEI7QUFDaUI7QUFFdEMsTUFBTUUsTUFBTSxHQUFHLElBQUlGLCtDQUFNLENBQzVCRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsY0FBYyxFQUMxQjtJQUNJQyxVQUFVLEVBQUUsWUFBWTtJQUN4QkMsT0FBTyxFQUFFO1FBQ0xDLElBQUksRUFBRSxRQUFRO1FBQ2RQLE9BQU87S0FDVjtDQUNKLENBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzP2FiOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0cmlwZSBmcm9tIFwic3RyaXBlXCI7XHJcbmltcG9ydCB7IHZlcnNpb24gfSBmcm9tIFwiLi4vLi4vcGFja2FnZS5qc29uXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc3RyaXBlID0gbmV3IFN0cmlwZShcclxuICAgIHByb2Nlc3MuZW52LlNUUklQRV9BUElfS0VZLFxyXG4gICAge1xyXG4gICAgICAgIGFwaVZlcnNpb246IFwiMjAyMi0wOC0wMVwiLFxyXG4gICAgICAgIGFwcEluZm86IHtcclxuICAgICAgICAgICAgbmFtZTogXCJJZ25ld3NcIixcclxuICAgICAgICAgICAgdmVyc2lvblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuKSJdLCJuYW1lcyI6WyJTdHJpcGUiLCJ2ZXJzaW9uIiwic3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9BUElfS0VZIiwiYXBpVmVyc2lvbiIsImFwcEluZm8iLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/services/stripe.ts\n");

/***/ }),

/***/ "(api)/./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"ignews","version":"0.1.0","private":true,"scripts":{"dev":"next dev","build":"next build","start":"next start","lint":"next lint"},"dependencies":{"@stripe/stripe-js":"^1.38.1","axios":"^0.27.2","faunadb":"^4.7.0","next":"12.1.5","next-auth":"^4.12.0","react":"18.0.0","react-dom":"18.0.0","react-icons":"^4.3.1","sass":"^1.50.1","stripe":"^10.11.0"},"devDependencies":{"@types/node":"^17.0.27","@types/react":"^18.0.7","typescript":"^4.6.3"}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/subscribe.ts"));
module.exports = __webpack_exports__;

})();