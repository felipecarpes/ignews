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
exports.id = "pages/api/webhook";
exports.ids = ["pages/api/webhook"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./src/pages/api/webhook.ts":
/*!**********************************!*\
  !*** ./src/pages/api/webhook.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/stripe */ \"(api)/./src/services/stripe.ts\");\n\nasync function buffer(readable) {\n    const chunks = [];\n    for await (const chunk of readable){\n        chunks.push(typeof chunk === \"string\" ? Buffer.from(chunk) : chunk);\n        return Buffer.concat(chunks);\n    }\n}\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\nconst relevantEvents = new Set([\n    \"checkout.session.completed\"\n]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (request, response)=>{\n    if (request.method === \"POST\") {\n        const buf = await buffer(request);\n        const secret = request.headers[\"stripe-signature\"];\n        let event;\n        try {\n            event = _services_stripe__WEBPACK_IMPORTED_MODULE_0__.stripe.webhooks.constructEvent(buf, secret, process.env.STRIPE_WEBHOOK_SECRET);\n        } catch (err) {\n            return response.status(400).send(`Webhook error: ${err.message}`);\n        }\n        const { type  } = event;\n        if (relevantEvents.has(type)) {\n            console.log(\"Evento recebido\", event);\n        }\n        return response.json({\n            received: true\n        });\n    } else {\n        response.setHeader(\"Allow\", \"POST\");\n        response.status(405).end(\"Method not allowed\");\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3dlYmhvb2sudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRytDO0FBRS9DLGVBQWVDLE1BQU0sQ0FBQ0MsUUFBa0IsRUFBRztJQUN6QyxNQUFNQyxNQUFNLEdBQUcsRUFBRTtJQUVqQixXQUFXLE1BQU1DLEtBQUssSUFBSUYsUUFBUSxDQUFFO1FBQ2xDQyxNQUFNLENBQUNFLElBQUksQ0FDVCxPQUFPRCxLQUFLLEtBQUssUUFBUSxHQUFHRSxNQUFNLENBQUNDLElBQUksQ0FBQ0gsS0FBSyxDQUFDLEdBQUdBLEtBQUssQ0FDdkQsQ0FBQztRQUVGLE9BQU9FLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDTCxNQUFNLENBQUMsQ0FBQztLQUM5QjtDQUNGO0FBRU0sTUFBTU0sTUFBTSxHQUFHO0lBQ3BCQyxHQUFHLEVBQUU7UUFDSEMsVUFBVSxFQUFFLEtBQUs7S0FDbEI7Q0FDRjtBQUVELE1BQU1DLGNBQWMsR0FBRyxJQUFJQyxHQUFHLENBQUM7SUFDN0IsNEJBQTRCO0NBQzdCLENBQUM7QUFFRixpRUFBZSxPQUFPQyxPQUF1QixFQUFFQyxRQUF5QixHQUFLO0lBQzNFLElBQUdELE9BQU8sQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUM1QixNQUFNQyxHQUFHLEdBQUcsTUFBTWhCLE1BQU0sQ0FBQ2EsT0FBTyxDQUFDO1FBQ2pDLE1BQU1JLE1BQU0sR0FBR0osT0FBTyxDQUFDSyxPQUFPLENBQUMsa0JBQWtCLENBQUM7UUFFbEQsSUFBSUMsS0FBSztRQUVULElBQUk7WUFDRkEsS0FBSyxHQUFHcEIsNEVBQThCLENBQUNpQixHQUFHLEVBQUVDLE1BQU0sRUFBRUssT0FBTyxDQUFDQyxHQUFHLENBQUNDLHFCQUFxQixDQUFDLENBQUM7U0FDeEYsQ0FBQyxPQUFPQyxHQUFHLEVBQUU7WUFDWixPQUFPWCxRQUFRLENBQUNZLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsZUFBZSxFQUFFRixHQUFHLENBQUNHLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDbEU7UUFFRCxNQUFNLEVBQUVDLElBQUksR0FBRSxHQUFHVixLQUFLO1FBRXRCLElBQUlSLGNBQWMsQ0FBQ21CLEdBQUcsQ0FBQ0QsSUFBSSxDQUFDLEVBQUU7WUFDNUJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixFQUFFYixLQUFLLENBQUMsQ0FBQztTQUN2QztRQUVELE9BQU9MLFFBQVEsQ0FBQ21CLElBQUksQ0FBQztZQUFFQyxRQUFRLEVBQUUsSUFBSTtTQUFDLENBQUMsQ0FBQztLQUN6QyxNQUFNO1FBQ0xwQixRQUFRLENBQUNxQixTQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDckIsUUFBUSxDQUFDWSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNVLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0tBQ2hEO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvYXBpL3dlYmhvb2sudHM/Y2M1NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgUmVhZGFibGUgfSBmcm9tIFwic3RyZWFtXCI7XHJcbmltcG9ydCBTdHJpcGUgZnJvbSBcInN0cmlwZVwiO1xyXG5pbXBvcnQgeyBzdHJpcGUgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc3RyaXBlXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBidWZmZXIocmVhZGFibGU6IFJlYWRhYmxlICkge1xyXG4gIGNvbnN0IGNodW5rcyA9IFtdO1xyXG5cclxuICBmb3IgYXdhaXQgKGNvbnN0IGNodW5rIG9mIHJlYWRhYmxlKSB7XHJcbiAgICBjaHVua3MucHVzaChcclxuICAgICAgdHlwZW9mIGNodW5rID09PSBcInN0cmluZ1wiID8gQnVmZmVyLmZyb20oY2h1bmspIDogY2h1bmtcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIEJ1ZmZlci5jb25jYXQoY2h1bmtzKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgYXBpOiB7XHJcbiAgICBib2R5UGFyc2VyOiBmYWxzZVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcmVsZXZhbnRFdmVudHMgPSBuZXcgU2V0KFtcclxuICBcImNoZWNrb3V0LnNlc3Npb24uY29tcGxldGVkXCJcclxuXSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXF1ZXN0OiBOZXh0QXBpUmVxdWVzdCwgcmVzcG9uc2U6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xyXG4gIGlmKHJlcXVlc3QubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgY29uc3QgYnVmID0gYXdhaXQgYnVmZmVyKHJlcXVlc3QpO1xyXG4gICAgY29uc3Qgc2VjcmV0ID0gcmVxdWVzdC5oZWFkZXJzW1wic3RyaXBlLXNpZ25hdHVyZVwiXTtcclxuXHJcbiAgICBsZXQgZXZlbnQ6IFN0cmlwZS5FdmVudDtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBldmVudCA9IHN0cmlwZS53ZWJob29rcy5jb25zdHJ1Y3RFdmVudChidWYsIHNlY3JldCwgcHJvY2Vzcy5lbnYuU1RSSVBFX1dFQkhPT0tfU0VDUkVUKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzKDQwMCkuc2VuZChgV2ViaG9vayBlcnJvcjogJHtlcnIubWVzc2FnZX1gKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgdHlwZSB9ID0gZXZlbnQ7XHJcblxyXG4gICAgaWYgKHJlbGV2YW50RXZlbnRzLmhhcyh0eXBlKSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkV2ZW50byByZWNlYmlkb1wiLCBldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oeyByZWNlaXZlZDogdHJ1ZX0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXNwb25zZS5zZXRIZWFkZXIoXCJBbGxvd1wiLCBcIlBPU1RcIik7XHJcbiAgICByZXNwb25zZS5zdGF0dXMoNDA1KS5lbmQoXCJNZXRob2Qgbm90IGFsbG93ZWRcIik7XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbInN0cmlwZSIsImJ1ZmZlciIsInJlYWRhYmxlIiwiY2h1bmtzIiwiY2h1bmsiLCJwdXNoIiwiQnVmZmVyIiwiZnJvbSIsImNvbmNhdCIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiLCJyZWxldmFudEV2ZW50cyIsIlNldCIsInJlcXVlc3QiLCJyZXNwb25zZSIsIm1ldGhvZCIsImJ1ZiIsInNlY3JldCIsImhlYWRlcnMiLCJldmVudCIsIndlYmhvb2tzIiwiY29uc3RydWN0RXZlbnQiLCJwcm9jZXNzIiwiZW52IiwiU1RSSVBFX1dFQkhPT0tfU0VDUkVUIiwiZXJyIiwic3RhdHVzIiwic2VuZCIsIm1lc3NhZ2UiLCJ0eXBlIiwiaGFzIiwiY29uc29sZSIsImxvZyIsImpzb24iLCJyZWNlaXZlZCIsInNldEhlYWRlciIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/webhook.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/webhook.ts"));
module.exports = __webpack_exports__;

})();