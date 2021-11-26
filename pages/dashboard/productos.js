import ListProductos from '../../components/Dashboard/Productos/ListProductos';
import Sidebar from '../../components/Dashboard/sidebar';
import VerficacionTokenUsuario from '../../lib/VerficacionTokenUsuario';
import useSWR from 'swr';
import FetcherGet from '../../lib/FetcherGet';



export default function productos() {



    return (<Sidebar active='Productos' color='yellow'>
        <div className='flex-1 md:py-5 md:px-10 p-10 mb-10'>
            <div className='grid grid-cols-1 h-full py-4'>

                <div className='rounded-xl shadow-md h-full border dark:border-prueba'>

                    <div className="inline-flex w-full">

                        <div className="w-14 h-14 bg-white -my-8 ml-5 mr-3 rounded-xl shadow-lg grid grid-cols-1 dark:bg-pruebaA3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-500 justify-self-center self-center" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                            </svg>
                            
                        </div>
                        <span className="uppercase font-sans font-bold">Productos</span>
                    </div>
                    <ListProductos />


                </div>



            </div>
        </div>

    </Sidebar>)
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

