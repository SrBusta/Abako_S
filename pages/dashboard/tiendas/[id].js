import { useRouter } from "next/router";
import Sidebar from '../../../components/Dashboard/sidebar';
import FetcherGet from '../../../lib/FetcherGet';
import useSWR from 'swr';
import VerficacionTokenUsuario from '../../../lib/VerficacionTokenUsuario';

import { useState } from 'react'
import ListEmpleado from "../../../components/Dashboard/Tiendas/Empleados/ListEmpleado";
import ListProductos from "../../../components/Dashboard/Productos/ListProductos";
import NewEmpleados from '../../../components/Dashboard/Tiendas/newEmpleados';
import ViewDatos from "../../../components/Dashboard/Tiendas/Datos/viewDatos";
import ListMovimientos from "../../../components/Dashboard/Tiendas/Movimientos/ListMovimientos";

export default function OneShop() {

    const [menuopciones, setMenuopciones] = useState("Productos");
    const [modal, setModal] = useState("");

    const router = useRouter();
    const { id } = router.query;

    const { data, error } = useSWR(`https://api.abako.xyz/api/user/shop/${id}`, url => FetcherGet(url));
    if (error) return 'Error: '
    if (!data) return 'Loading'


    const viewModal = () => {
        setModal("true")
    }

    const handleModal = () => {
        setModal("")
    }
    const change = function (event) {

        const opcion = event.target.value

        if (opcion) {

            setMenuopciones(event.target.value);


        } else {

            setMenuopciones(event.target.innerHTML);

        }

    }


    return (<Sidebar active='Tiendas' color='green'>
        <div className='flex-1 md:py-5 md:px-10 p-10 mb-10'>
            <div className='grid grid-cols-1 h-full py-4'>
                <div className="h-full border rounded-xl shadow-md dark:border-prueba">
                    {/*
                            !------------------------- Tittle ---------------------------!
                        */}
                    <div className="inline-flex w-full">
                        <div className="w-14 h-14 bg-white -my-8 ml-5 mr-3 rounded-xl shadow-lg grid grid-cols-1 cursor-pointer dark:bg-pruebaA3" onClick={() => router.back()}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500 justify-self-center self-center" viewBox="0 0 20 20" fill="currentColor">

                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
                            </svg>
                        </div>
                        <span className=" font-sans font-bold">{data.name}</span>
                    </div>

                    <div className="mt-5 flex">
                        <div className="w-full xl:block hidden">
                            <div className="grid grid-cols-4 text-center justify-items-center justify-center justify-self-center items-center">
                                <div className={`w-full  text-center cursor-pointer ${menuopciones == 'Productos' ? ( 'dark:border-prueba border-b border-t border-gray-200') : ''}`}>
                                    <div className="text-center p-2" onClick={change} >Productos</div>
                                </div>
                                <div className={`w-full  text-center cursor-pointer ${menuopciones == 'Empleados' ? ('dark:border-prueba border-b border-t border-gray-200') : ''}`}>
                                    <div className="text-center p-2" onClick={change}>Empleados</div>
                                </div>
                                <div className={`w-full  text-center cursor-pointer ${menuopciones == 'Movimientos' ? ('dark:border-prueba border-b border-t border-gray-200') : ''}`}>
                                    <div className="text-center p-2" onClick={change}>Movimientos</div>
                                </div>
                                <div className={`w-full  text-center cursor-pointer ${menuopciones == 'Datos' ? ('dark:border-prueba border-b border-t border-gray-200') : ''}`}>
                                    <div className="text-center p-2" onClick={change}>Datos</div>
                                </div>

                            </div>
                        </div>
                        <div className="xl:hidden  grid grid-cols-1 justify-self-center w-full p-2">
                            <select value={menuopciones} onChange={change} className="shadows  dark:bg-pruebaA3 dark:shadow-md text-center cursor-pointer text-gray-900 dark:text-gray-200 p-2">
                                <option>Productos</option>
                                <option>Empleados</option>
                                <option>Movimientos</option>
                                <option>Datos</option>
                            </select>
                        </div>

                        {modal == "" ? (<></>) : (<NewEmpleados shop_id={id} handleModal={handleModal} />)}
                    </div>
                    <div className="grid grid-cols-1 rounded-2xl h-full">

                        {menuopciones == 'Productos' ? <ListProductos shop_id={id} /> : (menuopciones == 'Movimientos' ? <ListMovimientos shop_id={id} /> : (menuopciones == 'Empleados' ?

                            <>
                                <ListEmpleado shop_id={id} />
                            </>

                            : <ViewDatos shop_id={id} />))}

                    </div>
                </div>



            </div>
        </div>




        {/* <div className="w-full md:pb-0 pb-16 pt-4 px-7 dark:text-white text-gray-900">
            <div className=" justify-center justify-items-center justify-self-center">
                <div className="grid md:grid-cols-4 grid-cols-1 justify-center justify-items-center justify-self-center">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => router.back()} className="h-10 w-10 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
                        </svg>
                    </div>
                    <div className="xl:col-start-2">
                        <img className="bg-cover bg-center rounded-full" src="/edited2.png" alt="Sunset in the mountains" />
                    </div>
                    <div className="xl:col-start-3 self-center text-center xl:text-left">
                        <h3 className="text-2xl mb-2">{data.name}</h3>
                        <h4 className="mb-2">{data.address}</h4>
                    </div>
                </div>



                <div className="w-full h-24 my-10 xl:block hidden">
                    <div className="">
                        <h5 className="text-center mb-5 font-bold text-2xl">Menu de opciones</h5>
                        <div className="grid grid-cols-4 text-center justify-items-center justify-center justify-self-center items-center">
                            <div className="w-3/4 rounded-2xl shadow-md fondo5 bg-gray-100 dark:bg-gray-600 dark:shadow-md text-center cursor-pointer dark:text-gray-200 text-gray-900">
                                <div className="text-center p-2" onClick={change} >Productos</div>
                            </div>
                            <div className=" w-3/4 rounded-2xl shadow-md fondo5 bg-gray-100 dark:bg-gray-600 dark:shadow-md text-center cursor-pointer dark:text-gray-200 text-gray-900">
                                <div className="text-center p-2" onClick={change}>Empleados</div>
                            </div>
                            <div className="w-3/4 rounded-2xl shadow-md fondo5 bg-gray-100 dark:bg-gray-600 dark:shadow-md text-center cursor-pointer dark:text-gray-200 text-gray-900">
                                <div className="text-center p-2" onClick={change}>Movimientos</div>
                            </div>
                            <div className="w-3/4 rounded-2xl shadow-md fondo5 bg-gray-100 dark:bg-gray-600 dark:shadow-md text-center cursor-pointer dark:text-gray-200 text-gray-900">
                                <div className="text-center p-2" onClick={change}>Datos</div>
                            </div>
                        </div>
                    </div>
                    {modal == "" ? (<></>) : (<NewEmpleados shop_id={id} handleModal={handleModal}  />)}
                </div>

                <div className="xl:hidden  my-10 grid grid-cols-1 justify-self-center">
                    <h5 className="text-center mb-5 font-bold text-2xl">Menu de opciones</h5>
                    <select value={menuopciones} onChange={change} className="rounded-2xl shadows fondo5 dark:bg-gray-300 dark:shadow-md text-center cursor-pointer text-gray-900 dark:text-gray-200 p-2">
                        <option>Productos</option>
                        <option>Empleados</option>
                        <option>Movimientos</option>
                        <option>Datos</option>
                    </select>
                </div>


                <div className="grid grid-cols-1 shadows dark:shadow-lg rounded-2xl overflow-auto max-h-72">

                {menuopciones == 'Productos' ? <ListProductos shop_id={id}/> : (menuopciones == 'Movimientos' ? <ListMovimientos shop_id={id}/> : (menuopciones == 'Empleados' ?

                    <>  
                        
                        <ListEmpleado shop_id={id} />
                    </>

                    : <ViewDatos shop_id={id}/>))}



            </div>
            </div>
        </div> */}
    </Sidebar >)
};

export async function getServerSideProps({ req, res }) {

    /*   Verificacion Token Usuario */
    const token = req.cookies.accessToken;
    const token2 = req.cookies.refreshToken;
    VerficacionTokenUsuario(token, token2);


    return {
        props: {
        }
    }
}

