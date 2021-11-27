import Head from 'next/head'
import { useState, useEffect } from 'react'
import { Dark, Light } from '../../lib/icons/DarkLight'
import { IconConfiguracion, IconInicio, IconLogout, IconProductos, IconTiendas } from '../../lib/icons/OptionsIcons';
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

    const { data, error, mutate } = useSWR(`https://api.abako.xyz/api/user`, url => FetcherGet(url));

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

        <div className="flex md:flex-row flex-col">

            <div className="sidebar-abako scroll">

                {/*Btn-DarkMode */}
                <button className="btn-darkmode"
                    type="button"
                    aria-label="Toggle Dark Mode"
                    onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>

                    {mounted && (resolvedTheme === 'dark' ? (<Dark />) : (<Light />))}
                </button>

                {/*Image-Business */}
                <div className="image-business-sidebar">

                    <div className="mb-2">
                        <img className="relative left-1/2 transform -translate-x-1/2 block w-14 h-14" src='/google.png'></img>
                    </div>

                </div>


                {/*option-menu */}
                <div className="flex md:flex-row justify-center flex-col">

                    <ul className="my-10 flex flex-row md:flex-col w-screen">

                        {data.rol === 'employee'
                            ? <></>
                            : <li
                                className={`list-option-sidebar efectohover hover:border-red-500
                                        ${activeOption == 'Inicio'
                                        ? ('border-red-500 active-option-sidebar')
                                        : ('border-transparent border-2')}`}

                                onClick={() => { router.push('/dashboard') }}
                            >
                                <IconInicio />
                            </li>
                        }

                        <li
                            className={`list-option-sidebar efectohover hover:border-yellow-400
                             ${activeOption == 'Productos'
                                    ? ('border-yellow-400 active-option-sidebar')
                                    : ('border-transparent border-2')}`}
                            onClick={() => { router.push('/dashboard/productos') }}
                        >
                            <IconProductos />
                        </li>


                        {data.rol === 'employee'
                            ? <></>
                            : <li className={`list-option-sidebar efectohover hover:border-green-700 
                                    ${activeOption == 'Tiendas'
                                    ? ('border-green-800 active-option-sidebar')
                                    : ('border-transparent border-2')}`}
                                onClick={() => { router.push('/dashboard/tiendas') }}
                            >
                                <IconTiendas />
                            </li>
                        }

                        {data.rol === 'employee'
                            ? <></>
                            : <li className={`list-option-sidebar efectohover hover:border-blue-700 
                                    ${activeOption == 'Config'
                                    ? ('border-blue-700 active-option-sidebar')
                                    : ('border-transparent border-2')}`}
                                onClick={() => { router.push('/dashboard/configuracion') }}
                            >
                                <IconConfiguracion />
                            </li>
                        }

                    </ul>

                </div>

                {/*Btn-Logout */}
                <div
                    className="btn-logout"
                    onClick={() => { { removeCookie() } router.push("/login") }}>
                    <div>
                        <IconLogout />
                    </div>
                </div>
            </div>



            <div className="main-sidebar">

                <div className="navbar-sidebar">
                    <Navbar colors={color} name={active} user={data.username} />
                </div>
               
                    {children}
                
            </div>
        </div>



    </>)

};
