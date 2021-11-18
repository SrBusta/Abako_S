"use strict";
(() => {
var exports = {};
exports.id = 351;
exports.ids = [351];
exports.modules = {

/***/ 4487:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ viewDatos)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(549);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_FetcherGet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4285);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_FetcherGet__WEBPACK_IMPORTED_MODULE_2__]);
_lib_FetcherGet__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



function viewDatos({ shop_id  }) {
    const { data , error , message  } = swr__WEBPACK_IMPORTED_MODULE_1___default()(`http://159.223.97.216/api/user/shop/${shop_id}`, (url)=>(0,_lib_FetcherGet__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(url)
    );
    if (error) return 'Error ';
    if (!data) return 'Loading';
    console.log(message);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "grid grid-cols-1 md:grid-cols-2 m-5 p-5",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "font-bold text-xl",
                        children: "Datos Generales :"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "p-3",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "my-3",
                                children: [
                                    "Nombre de la tienda : ",
                                    data.name
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    "Direccion de la tienda : ",
                                    data.address
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "font-bold text-xl",
                        children: "Numeros de telefono:"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "p-3",
                        children: data.phone[0] ? data.phone.map((phone)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "my-3",
                                        children: [
                                            "Nombre : ",
                                            phone.name
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "my-3",
                                        children: [
                                            "Telf : ",
                                            phone.number
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "my-3",
                                        children: [
                                            "Descripcion : ",
                                            phone.description
                                        ]
                                    })
                                ]
                            }, phone.id)
                        ) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: "no hay ni verga"
                        })
                    })
                ]
            })
        ]
    }));
};
;

});

/***/ }),

/***/ 7288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ VerficacionTokenUsuario)
/* harmony export */ });
function VerficacionTokenUsuario(token, token2) {
    if (!token && !token2) {
        console.log(!token && !token2);
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        };
    }
};
;


/***/ }),

/***/ 8493:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OneShop),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Dashboard_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7894);
/* harmony import */ var _lib_FetcherGet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4285);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(549);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_VerficacionTokenUsuario__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7288);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Dashboard_Tiendas_Empleados_ListEmpleado__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5506);
/* harmony import */ var _components_Dashboard_Productos_ListProductos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6861);
/* harmony import */ var _components_Dashboard_Tiendas_newEmpleados__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4278);
/* harmony import */ var _components_Dashboard_Tiendas_Datos_viewDatos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4487);
/* harmony import */ var _components_Dashboard_Tiendas_Movimientos_ListMovimientos__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1145);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Dashboard_Tiendas_Datos_viewDatos__WEBPACK_IMPORTED_MODULE_9__, _components_Dashboard_Tiendas_Empleados_ListEmpleado__WEBPACK_IMPORTED_MODULE_6__, _components_Dashboard_Tiendas_Movimientos_ListMovimientos__WEBPACK_IMPORTED_MODULE_10__, _components_Dashboard_Productos_ListProductos__WEBPACK_IMPORTED_MODULE_7__, _components_Dashboard_Tiendas_newEmpleados__WEBPACK_IMPORTED_MODULE_8__, _components_Dashboard_sidebar__WEBPACK_IMPORTED_MODULE_2__, _lib_FetcherGet__WEBPACK_IMPORTED_MODULE_3__]);
([_components_Dashboard_Tiendas_Datos_viewDatos__WEBPACK_IMPORTED_MODULE_9__, _components_Dashboard_Tiendas_Empleados_ListEmpleado__WEBPACK_IMPORTED_MODULE_6__, _components_Dashboard_Tiendas_Movimientos_ListMovimientos__WEBPACK_IMPORTED_MODULE_10__, _components_Dashboard_Productos_ListProductos__WEBPACK_IMPORTED_MODULE_7__, _components_Dashboard_Tiendas_newEmpleados__WEBPACK_IMPORTED_MODULE_8__, _components_Dashboard_sidebar__WEBPACK_IMPORTED_MODULE_2__, _lib_FetcherGet__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);












function OneShop() {
    const { 0: menuopciones , 1: setMenuopciones  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("Productos");
    const { 0: modal , 1: setModal  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { id  } = router.query;
    const { data , error  } = swr__WEBPACK_IMPORTED_MODULE_4___default()(`http://159.223.97.216/api/user/shop/${id}`, (url)=>(0,_lib_FetcherGet__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(url)
    );
    if (error) return 'Error: ';
    if (!data) return 'Loading';
    const viewModal = ()=>{
        setModal("true");
    };
    const handleModal = ()=>{
        setModal("");
    };
    const change = function(event) {
        const opcion = event.target.value;
        if (opcion) {
            setMenuopciones(event.target.value);
        } else {
            setMenuopciones(event.target.innerHTML);
        }
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Dashboard_sidebar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        active: "Tiendas",
        color: "green",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "w-full md:pb-0 pb-16 pt-4 px-7 dark:text-white text-gray-900",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: " justify-center justify-items-center justify-self-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid md:grid-cols-4 grid-cols-1 justify-center justify-items-center justify-self-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    onClick: ()=>router.back()
                                    ,
                                    className: "h-10 w-10 cursor-pointer",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "xl:col-start-2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "bg-cover bg-center rounded-full",
                                    src: "/edited2.png",
                                    alt: "Sunset in the mountains"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "xl:col-start-3 self-center text-center xl:text-left",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "text-2xl mb-2",
                                        children: data.name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                        className: "mb-2",
                                        children: data.address
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full h-24 my-10 xl:block hidden",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        className: "text-center mb-5 font-bold text-2xl",
                                        children: "Menu de opciones"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "grid grid-cols-4 text-center justify-items-center justify-center justify-self-center items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-3/4 rounded-2xl shadow-md fondo5 bg-gray-100 dark:bg-gray-600 dark:shadow-md text-center cursor-pointer dark:text-gray-200 text-gray-900",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-center p-2",
                                                    onClick: change,
                                                    children: "Productos"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: " w-3/4 rounded-2xl shadow-md fondo5 bg-gray-100 dark:bg-gray-600 dark:shadow-md text-center cursor-pointer dark:text-gray-200 text-gray-900",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-center p-2",
                                                    onClick: change,
                                                    children: "Empleados"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-3/4 rounded-2xl shadow-md fondo5 bg-gray-100 dark:bg-gray-600 dark:shadow-md text-center cursor-pointer dark:text-gray-200 text-gray-900",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-center p-2",
                                                    onClick: change,
                                                    children: "Movimientos"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-3/4 rounded-2xl shadow-md fondo5 bg-gray-100 dark:bg-gray-600 dark:shadow-md text-center cursor-pointer dark:text-gray-200 text-gray-900",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-center p-2",
                                                    onClick: change,
                                                    children: "Datos"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            modal == "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Dashboard_Tiendas_newEmpleados__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                shop_id: id,
                                handleModal: handleModal
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "xl:hidden my-10 grid grid-cols-1 justify-self-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                className: "text-center mb-5 font-bold text-2xl",
                                children: "Menu de opciones"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                value: menuopciones,
                                onChange: change,
                                className: "rounded-2xl shadows fondo5 dark:bg-gray-300 dark:shadow-md text-center cursor-pointer text-gray-900 dark:text-gray-200 p-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        children: "Productos"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        children: "Empleados"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        children: "Movimientos"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        children: "Datos"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grid grid-cols-1 shadows dark:shadow-lg rounded-2xl overflow-auto max-h-72",
                        children: menuopciones == 'Productos' ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Dashboard_Productos_ListProductos__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            shop_id: id
                        }) : menuopciones == 'Movimientos' ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Dashboard_Tiendas_Movimientos_ListMovimientos__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            shop_id: id
                        }) : menuopciones == 'Empleados' ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: viewModal,
                                    className: "p-4 ",
                                    children: "+"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Dashboard_Tiendas_Empleados_ListEmpleado__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    shop_id: id
                                })
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Dashboard_Tiendas_Datos_viewDatos__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            shop_id: id
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
    (0,_lib_VerficacionTokenUsuario__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(token, token2);
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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,894,424,861,145,694], () => (__webpack_exec__(8493)));
module.exports = __webpack_exports__;

})();