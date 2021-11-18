"use strict";
(() => {
var exports = {};
exports.id = 179;
exports.ids = [179];
exports.modules = {

/***/ 3942:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ cardTiendas)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(549);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_FetcherGet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4285);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_FetcherGet__WEBPACK_IMPORTED_MODULE_3__]);
_lib_FetcherGet__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




function cardTiendas() {
    const { data , error , mutate  } = swr__WEBPACK_IMPORTED_MODULE_2___default()('http://159.223.97.216/api/user/shop', (url)=>(0,_lib_FetcherGet__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(url)
    );
    if (error) return 'Error: ';
    if (!data) return 'Loading';
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: data.map((shops)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "shadow-md rounded-3xl justify-self-center w-full",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        href: `/dashboard/tiendas/${shops.id}`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            href: "",
                            children: [
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "cursor-pointer bg-cover bg-center w-full rounded-t-3xl",
                                    src: "../../../edited2.png",
                                    alt: "Sunset in the mountains",
                                    width: "300",
                                    height: "300"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "px-6 py-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "font-bold text-xl mb-2",
                                children: shops.name
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "dark:text-gray-200 text-gray-900 text-base",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            "Direccion: ",
                                            shops.address
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            "Telf: ",
                                            shops.phone[0] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: shops.phone[0].number
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }, shops.id)
        )
    }));
};

});

/***/ }),

/***/ 353:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ newTienda)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9915);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(549);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__]);
js_cookie__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





function newTienda(props) {
    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: '',
        description: 'ddd1111',
        address: '',
        namep: 'nnnnnn',
        number: '',
        descriptionp: 'Numero de emergencia'
    });
    const { 0: shopstate , 1: setShopstate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: '',
        description: '',
        address: '',
        phone: {
            name: '',
            number: '',
            description: ''
        }
    });
    const handleChange = async (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setState((prevState)=>({
                ...prevState,
                [name]: value
            })
        );
    };
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const shopState = {
            name: state.name,
            description: state.description,
            address: state.address,
            phone: {
                name: 'Telefono Principal',
                number: state.number,
                description: state.descriptionp
            }
        };
        const res = await fetch('http://159.223.97.216/api/user/shop', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                accessToken: js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get('accessToken'),
                refreshToken: js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get('refreshToken')
            },
            body: JSON.stringify(shopState),
            credentials: 'include'
        });
        console.log(await res.json());
        (0,swr__WEBPACK_IMPORTED_MODULE_3__.mutate)('http://159.223.97.216/api/user/shop');
        handleModal();
    // router.reload();
    };
    const { handleModal  } = props;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "modal open py-32 px-10 min-h-screen",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "bg-white dark:bg-gray-100 rounded-3xl p-10 md:w-3/4 lg:w-1/2 mx-auto",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "dark:text-white font-bold text-gray-600 ",
                        children: "Nueva Tienda"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        className: "modal-conteiner",
                        onSubmit: handleSubmit,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center mb-5",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "name",
                                        className: "inline-block w-20 mr-6 text-right font-bold dark:text-white text-gray-600",
                                        children: "Nombre"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        id: "name",
                                        name: "name",
                                        placeholder: "Nombre",
                                        onChange: handleChange,
                                        className: "flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center mb-5",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "name",
                                        className: "inline-block w-20 mr-6 text-right font-bold dark:text-white text-gray-600",
                                        children: "Direccion"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        id: "add",
                                        name: "address",
                                        placeholder: "Direccion",
                                        onChange: handleChange,
                                        className: "flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center mb-5",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "name",
                                        className: "inline-block w-20 mr-6 text-right font-bold dark:text-white text-gray-600",
                                        children: "Telefono"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "number",
                                        id: "num",
                                        name: "number",
                                        placeholder: "Telefono",
                                        onChange: handleChange,
                                        className: "flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "text-right mx-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "py-3 px-8 bg-green-400 text-white font-bold mx-2",
                                        type: "submit",
                                        children: "Agregar"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "py-3 px-8 bg-red-400 text-white font-bold",
                                        onClick: handleModal,
                                        children: "Cerrar"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    }));
};

});

/***/ }),

/***/ 54:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Productos_ListProductos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6861);
/* harmony import */ var _Empleados_ListEmpleado__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5506);
/* harmony import */ var _newEmpleados__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4278);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_newEmpleados__WEBPACK_IMPORTED_MODULE_4__, _Empleados_ListEmpleado__WEBPACK_IMPORTED_MODULE_3__, _Productos_ListProductos__WEBPACK_IMPORTED_MODULE_2__]);
([_newEmpleados__WEBPACK_IMPORTED_MODULE_4__, _Empleados_ListEmpleado__WEBPACK_IMPORTED_MODULE_3__, _Productos_ListProductos__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);





function viewTienda(props) {
    const { handleSearch  } = props;
    const { 0: menuopciones , 1: setMenuopciones  } = useState("Productos");
    const { 0: modal , 1: setModal  } = useState("");
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
    return(/*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsxs("div", {
            className: " justify-center justify-items-center justify-self-center",
            children: [
                /*#__PURE__*/ _jsxs("div", {
                    className: "grid md:grid-cols-4 grid-cols-1 justify-center justify-items-center justify-self-center",
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            children: /*#__PURE__*/ _jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                onClick: handleSearch,
                                className: "h-10 w-10 cursor-pointer",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ _jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"
                                })
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "xl:col-start-2",
                            children: /*#__PURE__*/ _jsx("img", {
                                className: "bg-cover bg-center rounded-full",
                                src: "/edited2.png",
                                alt: "Sunset in the mountains"
                            })
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "xl:col-start-3 self-center text-center xl:text-left",
                            children: [
                                /*#__PURE__*/ _jsx("h3", {
                                    className: "text-2xl mb-2",
                                    children: props.shop.name
                                }),
                                /*#__PURE__*/ _jsx("h4", {
                                    className: "mb-2",
                                    children: props.shop.direccion
                                }),
                                /*#__PURE__*/ _jsx("h4", {
                                    children: "Numero de la tienda"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: "w-full h-24 my-10 xl:block hidden",
                    children: [
                        /*#__PURE__*/ _jsxs("div", {
                            className: "",
                            children: [
                                /*#__PURE__*/ _jsx("h5", {
                                    className: "text-center mb-5 font-bold text-2xl",
                                    children: "Menu de opciones"
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "grid grid-cols-5 text-center justify-items-center",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "w-3/4 rounded-2xl shadow-md fondo5 bg-gray-100 dark:bg-gray-600 dark:shadow-md text-center cursor-pointer dark:text-gray-200 text-gray-900",
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "text-center p-2",
                                                onClick: change,
                                                children: "Productos"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "w-3/4 rounded-2xl shadow-md fondo5 bg-gray-100 dark:bg-gray-600 dark:shadow-md text-center cursor-pointer dark:text-gray-200 text-gray-900",
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "text-center p-2",
                                                onClick: change,
                                                children: "Kardex"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: " w-3/4 rounded-2xl shadow-md fondo5 bg-gray-100 dark:bg-gray-600 dark:shadow-md text-center cursor-pointer dark:text-gray-200 text-gray-900",
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "text-center p-2",
                                                onClick: change,
                                                children: "Empleados"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "w-3/4 rounded-2xl shadow-md fondo5 bg-gray-100 dark:bg-gray-600 dark:shadow-md text-center cursor-pointer dark:text-gray-200 text-gray-900",
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "text-center p-2",
                                                onClick: change,
                                                children: "Movimientos"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "w-3/4 rounded-2xl shadow-md fondo5 bg-gray-100 dark:bg-gray-600 dark:shadow-md text-center cursor-pointer dark:text-gray-200 text-gray-900",
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "text-center p-2",
                                                onClick: change,
                                                children: "Productos"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        modal == "" ? /*#__PURE__*/ _jsx(_Fragment, {
                        }) : /*#__PURE__*/ _jsx(NewEmpleados, {
                            handleModal: handleModal,
                            data: props
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: "xl:hidden my-10 grid grid-cols-1 justify-self-center",
                    children: [
                        /*#__PURE__*/ _jsx("h5", {
                            className: "text-center mb-5 font-bold text-2xl",
                            children: "Menu de opciones"
                        }),
                        /*#__PURE__*/ _jsxs("select", {
                            value: menuopciones,
                            onChange: change,
                            className: "rounded-2xl shadows fondo5 dark:bg-gray-300 dark:shadow-md text-center cursor-pointer text-gray-900 dark:text-gray-200 p-2",
                            children: [
                                /*#__PURE__*/ _jsx("option", {
                                    children: "Productos"
                                }),
                                /*#__PURE__*/ _jsx("option", {
                                    children: "Kardex"
                                }),
                                /*#__PURE__*/ _jsx("option", {
                                    children: "Empleados"
                                }),
                                /*#__PURE__*/ _jsx("option", {
                                    children: "Movimientos"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "grid grid-cols-1 shadows dark:shadow-lg rounded-2xl overflow-auto max-h-72",
                    children: menuopciones == 'Productos' ? /*#__PURE__*/ _jsx(ListProductos, {
                        shop_id: props.shop.id
                    }) : menuopciones == 'Kardex' ? 'KARDEX' : menuopciones == 'Empleados' ? /*#__PURE__*/ _jsxs(_Fragment, {
                        children: [
                            /*#__PURE__*/ _jsx("button", {
                                onClick: viewModal,
                                className: "p-4 ",
                                children: "+"
                            }),
                            /*#__PURE__*/ _jsx(ListEmpleado, {
                                shop_id: props.shop.id
                            })
                        ]
                    }) : ''
                })
            ]
        })
    }));
};

});

/***/ }),

/***/ 9085:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ tiendas),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Dashboard_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7894);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Dashboard_Tiendas_viewTienda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54);
/* harmony import */ var _components_Dashboard_Tiendas_newTienda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(353);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(549);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_FetcherGet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4285);
/* harmony import */ var _components_Dashboard_Tiendas_cardTiendas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3942);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Dashboard_Tiendas_newTienda__WEBPACK_IMPORTED_MODULE_4__, _components_Dashboard_Tiendas_cardTiendas__WEBPACK_IMPORTED_MODULE_7__, _components_Dashboard_sidebar__WEBPACK_IMPORTED_MODULE_1__, _lib_FetcherGet__WEBPACK_IMPORTED_MODULE_6__, _components_Dashboard_Tiendas_viewTienda__WEBPACK_IMPORTED_MODULE_3__]);
([_components_Dashboard_Tiendas_newTienda__WEBPACK_IMPORTED_MODULE_4__, _components_Dashboard_Tiendas_cardTiendas__WEBPACK_IMPORTED_MODULE_7__, _components_Dashboard_sidebar__WEBPACK_IMPORTED_MODULE_1__, _lib_FetcherGet__WEBPACK_IMPORTED_MODULE_6__, _components_Dashboard_Tiendas_viewTienda__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);









function tiendas() {
    const { 0: menu , 1: setMenu  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: modal , 1: setModal  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: shop , 1: setShop  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        id: '',
        name: '',
        direccion: ''
    });
    const handleSearch = ()=>{
        setMenu("");
    };
    const viewModal = ()=>{
        setModal("true");
    };
    const handleModal = ()=>{
        setModal("");
    };
    const { data , error  } = swr__WEBPACK_IMPORTED_MODULE_5___default()('http://159.223.97.216/api/user', (url)=>(0,_lib_FetcherGet__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(url)
    );
    if (error) return 'ERROR';
    if (!data) return 'Loading';
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Dashboard_sidebar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        active: "Tiendas",
        color: "green",
        username: data.username,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex-1 md:py-5 md:px-20 p-10 mb-10",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid grid-cols-1 h-full",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full md:pb-0 pb-16 pt-4 px-7 dark:text-white text-gray-900",
                        children: menu == "" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-12 ",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Dashboard_Tiendas_cardTiendas__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "shadow-md rounded-3xl grid grid-cols-1 justify-self-center w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "self-center justify-self-center text-center cursor-pointer",
                                        onClick: viewModal,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "h-12 w-12 text-gray-500",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "font-semibold text-gray-500",
                                                children: "A\xf1adir"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        })
                    }),
                    modal == "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Dashboard_Tiendas_newTienda__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        handleModal: handleModal
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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,894,424,861,694], () => (__webpack_exec__(9085)));
module.exports = __webpack_exports__;

})();