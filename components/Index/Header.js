import { useState } from "react";


import { faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
    const [showMe, setShowMe] = useState(false);


    function toggle() {
        setShowMe(!showMe);
    };


    return (


        <section className="h-screen" id="inicio" style={{scrollSnapAlign:"start"}} >

            <div style={{ backgroundImage: 'url(mainheader.png)' }} className="absolute h-screen bg-cover bg-center inset-0 z-0 filter brightness-50 blur-sm" />


            <div className="flex flex-col h-full relative">


                <div className="flex justify-end mt-3 mr-7">

                    <a href="#" className="filter brightness-75 absolute w-14 left-0 mt-8 ml-14 text-white font-test z-50 text-center select-none" id="mobile-menu" >
                        <img src="logo.png" className="" />
                        ABAKO
                    </a>

                </div>


                <nav className="flex justify-between lg:justify-end p-4 pr-7">

                    <div className="lg:block hidden w-auto mt-10 mr-10 xl:mr-20">

                        <ul className="menu flex items-center justify-center gap-20 font-test subpixel-antialiased uppercase text-sm lg:text-base select-none">

                            <li>
                                <a href="#ofrecemos" className="link hover:underline">características</a>
                            </li>
                            <li>
                                <a href="#planes" className="link hover:underline">Planes</a>
                            </li>
                            
                            <li>
                                <a href="/login" className="link" onClick={toggle}>
                                    <FontAwesomeIcon icon={faUserCircle} size="2x" className="text-gray-300 hover:text-yellow-400 " />
                                </a>
                            </li>
                        </ul>

                    </div>

                    <div className="" className={!showMe ? "lg:hidden absolute w-screen inset-0 flex flex-col justify-items-end transition transform duration-500 " : "lg:hidden mobile-links absolute w-screen inset-0 bg-primary  flex flex-col transition transform duration-500 overflow-y-hidden"}>
                        <div className="flex justify-end mt-3 mr-7">

                            <a href="#" className="m-7 mt-10 w-min flex-shrink " id="mobile-menu" onClick={toggle}>
                                <FontAwesomeIcon icon={faBars} size="3x" className="text-gray-200 opacity-70" />
                            </a>

                        </div>

                        <ul className={!showMe ? "hidden mobile-links " : "mobile-links  opacity-70 text-center w-screen h-full flex flex-col items-center justify-center gap-16 flex-1 text-2xl uppercase"}>

                            <li>
                                <a href="#ofrecemos" className="link" onClick={toggle}>características</a>
                            </li>
                            <li>
                                <a href="#planes" className="link" onClick={toggle}>Planes</a>
                            </li>
                            {/* <li>
                                <a href="/login" className="link" onClick={toggle}>Login</a>
                            </li> */}
                            <li>
                                {/* <a href="/register" className="link" onClick={toggle}>Register</a> */}
                                <a href="/login" className="link" onClick={toggle}>
                                    <FontAwesomeIcon icon={faUserCircle} size="2x" className="text-gray-200 opacity-70" />
                                </a>
                            </li>
                        </ul>

                    </div>

                </nav>

                <div className="flex flex-col flex-1 items-center justify-center px-20">
                    <h1 className=" text-white text-center uppercase font-bold subpixel-antialiased text-xl md:text-4xl xl:text-5xl select-none">
                        Aumenta la productividad de tu tienda
                    </h1>

                    <a href="/register" className=" text-xs lg:text-lg font-semibold subpixel-antialiased uppercase block  mt-8 p-3 border-yellow-400 text-yellow-400 rounded-bl-lg  border-2 cursor-pointer hover:bg-yellow-400 hover:text-black duration-300 focus:bg-white">
                        Comienza ahora
                    </a>

                </div>

            </div>


        </section>

    )

}