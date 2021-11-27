
import InicioEstadistica from '../../components/Dashboard/Index/Estadisticas/InicioEstadistica';
import Sidebar from '../../components/Dashboard/sidebar';
import useSWR from 'swr';
import FetcherGet from '../../lib/FetcherGet';
import router from 'next/router'
import ListMovimientos from '../../components/Dashboard/Tiendas/Movimientos/ListMovimientos';
import InicioProductsMasVendidos from '../../components/Dashboard/Index/Estadisticas/InicioProductsMasVendidos';
import InicioProductsMenorStock from '../../components/Dashboard/Index/Estadisticas/InicioProductsMenorStock';


export default function inicio() {



    const { data, error, mutate } = useSWR(`https://api.abako.xyz/api/user`, url => FetcherGet(url));

    if (!data) return 'Loading'



    if (data.rol === 'admin' && !data.business) router.push('/dashboard/configuracion')



    if (data.rol == 'employee') router.push('dashboard/productos')


    return (

        <Sidebar active='Inicio' color='red' username={data.username}>

            <div className='flex-1 md:py-5 md:px-10 p-10 mb-10'>

                <div className='grid grid-cols-1 lg:grid-cols-5 h-full md:gap-10 gap-12 py-4'>

                    {/*
                !------------------------- Tier 1 ---------------------------!
                    */}
                    <div className='rounded-xl lg:col-span-3 shadow-md border max-h-96 dark:border-prueba'>



                        <div className="p-2 inline-flex w-full">
                            <div className="w-14 h-14 bg-white relative -my-8 ml-5 mr-3 rounded-xl shadow-lg grid grid-cols-1 dark:bg-pruebaA3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500 justify-self-center self-center" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                                </svg>

                            </div>
                            <span className="uppercase font-sans font-bold">Estadistica</span>
                        </div>


                        <InicioEstadistica />



                    </div>
                    <div className='rounded-xl lg:row-span-2 lg:col-span-2  shadow-md h-full border dark:border-prueba flex flex-col'>



                        <div className="p-2 inline-flex w-full">
                            <div className="w-14 h-14 bg-white relative -my-8 ml-5 mr-3 rounded-xl shadow-lg grid grid-cols-1 dark:bg-pruebaA3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500 justify-self-center self-center" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                                </svg>

                            </div>
                            <span className="uppercase font-sans font-bold">Estadistica</span>
                        </div>


                        <InicioProductsMenorStock />

                    </div>
                    <div className='rounded-xl lg:col-span-3 shadow-md h-full border dark:border-prueba'>



                        <div className="p-2 inline-flex w-full">
                            <div className="w-14 h-14 bg-white relative -my-8 ml-5 mr-3 rounded-xl shadow-lg grid grid-cols-1 dark:bg-pruebaA3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500 justify-self-center self-center" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                                </svg>

                            </div>
                            <span className="uppercase font-sans font-bold">Estadistica</span>
                        </div>


                        <InicioEstadistica />



                    </div>

                    {/* <div className='rounded-xl lg:col-span-2 shadow-md h-full border dark:border-prueba'>



                        <div className="p-2 inline-flex w-full">
                            <div className="w-14 h-14 bg-white relative -my-8 ml-5 mr-3 rounded-xl shadow-lg grid grid-cols-1 dark:bg-pruebaA3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500 justify-self-center self-center" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                                </svg>

                            </div>
                            <span className="uppercase font-sans font-bold">Estadistica</span>
                        </div>


                        <InicioProductsMasVendidos />



                    </div> */}




                    {/*
                !------------------------- Tier 2 ---------------------------!
                    */}



                    {/*
                !------------------------- Tier 3 ---------------------------!
                    */}
                    <div className='rounded-xl lg:col-span-5 col-span-1 shadow-md border dark:border-prueba'>

                        <div className="p-2 inline-flex w-full">
                            <div className="w-14 h-14 bg-white relative -my-8 ml-5 mr-3 rounded-xl shadow-lg grid grid-cols-1 dark:bg-pruebaA3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500 justify-self-center self-center" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="uppercase font-sans font-bold">Movimientos</span>
                        </div>

                        <ListMovimientos />


                    </div>




                </div>

            </div>

        </Sidebar>

    )
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


