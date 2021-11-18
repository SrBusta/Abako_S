"use strict";
(() => {
var exports = {};
exports.id = 26;
exports.ids = [26];
exports.modules = {

/***/ 2202:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InicioEstadistica)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7051);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(549);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_FetcherGet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4285);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_FetcherGet__WEBPACK_IMPORTED_MODULE_3__]);
_lib_FetcherGet__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




function InicioEstadistica() {
    const { data , error  } = swr__WEBPACK_IMPORTED_MODULE_2___default()(`http://159.223.97.216/api/user/product`, (url)=>(0,_lib_FetcherGet__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(url)
    );
    if (error) return 'error';
    if (!data) return 'loading';
    console.log(data);
    let products = [];
    let stock = [];
    data.map((product)=>product.stock < 10 ? products.push(product.type) : ''
    );
    data.map((product)=>product.stock < 10 ? stock.push(product.stock) : ''
    );
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__.Bar, {
                data: {
                    labels: products,
                    datasets: [
                        {
                            label: 'Instrumentos con Stock < 10',
                            data: stock,
                            backgroundColor: [
                                'rgba(255, 205, 86,0.5)',
                                'rgba(62, 124, 23, 0.4)',
                                'rgba(195, 106, 45, 0.6)'
                            ]
                        }, 
                    ]
                },
                options: {
                    maintainAspectRatio: false,
                    responsive: true
                }
            })
        })
    }));
};

});

/***/ }),

/***/ 3021:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InicioTienda)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(549);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_FetcherGet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4285);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_FetcherGet__WEBPACK_IMPORTED_MODULE_2__]);
_lib_FetcherGet__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



function InicioTienda() {
    const { data , error  } = swr__WEBPACK_IMPORTED_MODULE_1___default()(`http://159.223.97.216/api/user/shop`, (url)=>(0,_lib_FetcherGet__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(url)
    );
    if (error) return 'Ocurrio un error:';
    if (!data) return 'Loading';
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: data.map((shops)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "rounded-lg text-gray-900 font-sans cursor-default mb-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-row text-md border-b-2 border-red-700 pb-1 mx-2 font-sans justify-items-stretch",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex-grow",
                                children: shops.name
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `text-sm mx-4`,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    "Direccion: ",
                                    shops.address
                                ]
                            })
                        })
                    ]
                })
            }, shops.id)
        )
    }));
};
;

});

/***/ }),

/***/ 1006:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ inicio),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Dashboard_Index_InicioEstadistica__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2202);
/* harmony import */ var _components_Dashboard_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7894);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(549);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Dashboard_Index_InicioTienda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3021);
/* harmony import */ var _lib_FetcherGet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4285);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Dashboard_Tiendas_Movimientos_ListMovimientos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1145);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Dashboard_Tiendas_Movimientos_ListMovimientos__WEBPACK_IMPORTED_MODULE_7__, _components_Dashboard_Index_InicioTienda__WEBPACK_IMPORTED_MODULE_4__, _components_Dashboard_Index_InicioEstadistica__WEBPACK_IMPORTED_MODULE_1__, _components_Dashboard_sidebar__WEBPACK_IMPORTED_MODULE_2__, _lib_FetcherGet__WEBPACK_IMPORTED_MODULE_5__]);
([_components_Dashboard_Tiendas_Movimientos_ListMovimientos__WEBPACK_IMPORTED_MODULE_7__, _components_Dashboard_Index_InicioTienda__WEBPACK_IMPORTED_MODULE_4__, _components_Dashboard_Index_InicioEstadistica__WEBPACK_IMPORTED_MODULE_1__, _components_Dashboard_sidebar__WEBPACK_IMPORTED_MODULE_2__, _lib_FetcherGet__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);








function inicio() {
    const { data , error , mutate  } = swr__WEBPACK_IMPORTED_MODULE_3___default()(`http://159.223.97.216/api/user`, (url)=>(0,_lib_FetcherGet__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(url)
    );
    if (error) return 'Ocurrio un error:';
    if (!data) return 'Loading';
    if (!data.business) next_router__WEBPACK_IMPORTED_MODULE_6___default().push('/dashboard/configuracion');
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Dashboard_sidebar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        active: "Inicio",
        color: "red",
        username: data.username,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex-1 md:py-10 md:px-20 p-10 mb-10",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid md:grid-cols-4 grid-cols-1 h-full gap-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "rounded-xl md:col-span-3 col-span-1 shadow-md h-52",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Dashboard_Index_InicioEstadistica__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "rounded-xl shadow-md p-2 overflow-hidden overflow-y-scroll h-52",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Dashboard_Index_InicioTienda__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "rounded-xl md:col-span-4 col-span-1 shadow-md h-52 overflow-auto",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Dashboard_Tiendas_Movimientos_ListMovimientos__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        })
                    })
                ]
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

/***/ 7051:
/***/ ((module) => {

module.exports = require("react-chartjs-2");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,894,424,145], () => (__webpack_exec__(1006)));
module.exports = __webpack_exports__;

})();