import Head from 'next/head'
import { useState, useEffect } from 'react'
import { Dark, Light } from '../../lib/icons/DarkLight'
import { IconConfiguracion, IconInicio, IconLogout, IconProductos, IconTiendas } from '../../lib/icons/OptionsIcons';
import Link from 'next/link'
import { useTheme } from 'next-themes';
import Navbar from './navbar';
import removeCookie from '../../lib/removeCookie';
import router from 'next/router'
import useSWR from 'swr';
import FetcherGet from '../../lib/FetcherGet'

export default function sidebar({ children, active, color }) {

    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();
    useEffect(() => setMounted(true), []);


    const [activeOption, setActiveOption] = useState(active);

    const { data, error, mutate } = useSWR(`https://abakoapi.herokuapp.com/api/user`, url => FetcherGet(url));

    if (error) return 'Ocurrio un error:'
    if (!data) return 'Loading'

    //TooltipFunction();

    return (<>
        <Head>
            <title>Dashboard</title>
        </Head>

        {/* 
        !----------------------- Dashboard -----------------------!
        */}
        <div className="flex md:flex-row h-screen flex-col dark:bg-pruebaA4">

            <div className="border md:flex-grow-0  w-full md:w-20 flex md:flex-col flex-row fixed bottom-0 md:relative h-12 md:h-auto flex-grow overflow-y-visible bg-gray-100">
                {/* 
                !----------------------- Boton Dark / Light -----------------------!
                */}
                {/* <button className="text-black w-min cursor-pointer  ml-2 mb-5 mt-2 md:block hidden absolute z-40"
                    type="button"
                    aria-label="Toggle Dark Mode"
                    onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>

                    {mounted && (resolvedTheme === 'dark' ? (<Dark />) : (<Light />))}
                </button> */}
                {/*
                !------------------------- Imagen Usuario -------------------------!
                */}
                <div className="border-b-2 md:block hidden mt-6">

                    <div className="mb-2">
                        <img className="relative left-1/2 transform -translate-x-1/2 block w-14 h-14 rounded-full" src='/user.png'></img>
                    </div>

                </div>
                {/*
                !------------------------- Menu Opciones ---------------------------!
                */}
                <div className="flex md:flex-row justify-center flex-col">

                    <ul className="my-14 flex flex-row md:flex-col w-screen">

                        {data.rol === 'employee' ? <></> : <li className={`menu-opciones efectohover hover:border-red-500  ${activeOption == 'Inicio' ? ('border-2 border-red-500 rounded-lg md:transform-none transform -translate-y-0.5') : ('border-transparent border-2')}`}>
                            <Link href="/dashboard"><a><IconInicio /></a></Link>
                            
                            <div className="ml-10 bg-gray-900 text-gray-100 px-2 py-1.5 md:absolute md:block rounded-lg shadow-xl tooltip hidden">
                                Inicio
                            </div>
                        </li>}

                        <li className={`menu-opciones efectohover hover:border-yellow-400 ${activeOption == 'Productos' ? ('border-2 border-yellow-400 rounded-lg md:transform-none transform -translate-y-0.5') : ('border-transparent border-2')}`}>
                            <Link href="/dashboard/productos"><a><IconProductos /></a></Link>
                            
                            <div className="ml-10 bg-gray-900 text-gray-100 px-2 py-1.5 md:absolute md:block rounded-lg shadow-xl tooltip hidden">
                                Productos
                            </div>
                        </li>

                        {data.rol === 'employee' ? <></> : <li className={`menu-opciones efectohover hover:border-green-700 ${activeOption == 'Tiendas' ? ('border-2 border-green-800 rounded-lg md:transform-none transform -translate-y-0.5') : ('border-transparent border-2')}`}>
                            <Link href="/dashboard/tiendas"><a><IconTiendas /></a></Link>
                            
                            <div className="ml-10 bg-gray-900 text-gray-100 px-2 py-1.5 md:absolute md:block rounded-lg shadow-xl tooltip hidden">
                                Tiendas
                            </div>
                        </li>}

                        {data.rol === 'employee' ? <></> : <li className={`menu-opciones efectohover hover:border-blue-700 ${activeOption == 'Config' ? ('border-2 border-blue-700 rounded-lg md:transform-none transform -translate-y-0.5') : ('border-transparent border-2')}`}>
                            <Link href="/dashboard/configuracion"><a><IconConfiguracion /></a></Link>
                            
                            <div className="ml-10 bg-gray-900 text-gray-100 px-2 py-1.5 md:absolute md:block rounded-lg shadow-xl tooltip hidden">
                                Configuracion
                            </div>
                        </li>}

                    </ul>

                </div>
                {/*
                !------------------------- Boton Logout ---------------------------!
                */}
                <div className="md:flex flex-row justify-center flex-grow items-end my-10 break-normal cursor-pointer hidden" onClick={() => {
                    { removeCookie() }
                    router.push("/login")
                }}>
                    <IconLogout />
                </div>
            </div>



            <div className="flex-grow flex flex-col overflow-y-auto main">

                <div className="h-max-12 flex flex-row px-6 bg-gray-100">
                    <Navbar colors={color} name={active} user={data.username} />
                </div>

                {children}

            </div>
        </div>



    </>)

};
