"use strict";
(() => {
var exports = {};
exports.id = 918;
exports.ids = [918];
exports.modules = {

/***/ 8085:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ productos),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Dashboard_Productos_ListProductos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6861);
/* harmony import */ var _components_Dashboard_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7894);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(549);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_FetcherGet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4285);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Dashboard_Productos_ListProductos__WEBPACK_IMPORTED_MODULE_1__, _components_Dashboard_sidebar__WEBPACK_IMPORTED_MODULE_2__, _lib_FetcherGet__WEBPACK_IMPORTED_MODULE_4__]);
([_components_Dashboard_Productos_ListProductos__WEBPACK_IMPORTED_MODULE_1__, _components_Dashboard_sidebar__WEBPACK_IMPORTED_MODULE_2__, _lib_FetcherGet__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);






function productos() {
    const { data , error , mutate  } = swr__WEBPACK_IMPORTED_MODULE_3___default()(`http://159.223.97.216/api/user`, (url)=>(0,_lib_FetcherGet__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(url)
    );
    if (error) return 'ERROR ';
    if (!data) return 'Loading';
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Dashboard_sidebar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        active: "Productos",
        color: "yellow",
        username: data.username,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex-1 md:py-10 md:px-20 p-10 mb-10",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid grid-cols-1 h-full",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "rounded-xl overflow-auto shadow-md",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Dashboard_Productos_ListProductos__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    })
                })
            })
        })
    }));
};
;
async function getServerSideProps({ req , res  }) {
    /*   Verificacion Token Usuario */ const token = req.cookies.accessToken;
    const token2 = req.cookies.refreshToken;
    if (!token && !token2) {
        console.log(!token && !token2);
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        };
    }
    return {
        props: {
        }
    };
}

});

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2154:
/***/ ((module) => {

module.exports = require("react-table");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 549:
/***/ ((module) => {

module.exports = require("swr");

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,894,424,861], () => (__webpack_exec__(8085)));
module.exports = __webpack_exports__;

})();