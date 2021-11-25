import Sidebar from '../../components/Dashboard/sidebar';
import VerficacionTokenUsuario from '../../lib/VerficacionTokenUsuario';
import { useState } from 'react';
import ViewTienda from '../../components/Dashboard/Tiendas/viewTienda'
import NewTienda from '../../components/Dashboard/Tiendas/newTienda'
import useSWR, { mutate } from 'swr';
import FetcherGet from '../../lib/FetcherGet';
import CardTiendas from '../../components/Dashboard/Tiendas/cardTiendas';
import Image from 'next/image'

export default function tiendas() {

    const [menu, setMenu] = useState("");

    const [modal, setModal] = useState("");

    const handleSearch = () => {
        setMenu("")
    }

    const viewModal = () => {
        setModal("true")

    }


    const handleModal = () => {
        setModal("")
    }



    return (
        <Sidebar active="Tiendas" color='green'>
            
                        {menu == "" ? (
                            <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-12 md:py-9 md:px-10 p-10 mb-10 " >


                                <CardTiendas />


                                <div className="shadow-md rounded-xl grid grid-cols-1 justify-self-center w-full border h-28 md:h-36">
                                    <div className="self-center justify-self-center text-center cursor-pointer" onClick={viewModal}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="font-semibold text-gray-500">Añadir</span>
                                    </div>
                                </div>

                            </div>
                        ) : (<div></div>)}

                    {modal == "" ? (<></>) : (<NewTienda handleModal={handleModal} />)}

        </Sidebar >)
};

export async function getServerSideProps({ req, res }) {

    /*   Verificacion Token Usuario */
    const token = req.cookies.accessToken;
    const token2 = req.cookies.refreshToken;

    if (!token && !token2) {

        
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            }
        }
    }

    return {
        props: {

        }
    }
}

