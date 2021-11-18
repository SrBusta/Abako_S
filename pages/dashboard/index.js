
import InicioEstadistica from '../../components/Dashboard/Index/InicioEstadistica';
import Sidebar from '../../components/Dashboard/sidebar';
import useSWR from 'swr';
import InicioTienda from '../../components/Dashboard/Index/InicioTienda';
import FetcherGet from '../../lib/FetcherGet';
import router from 'next/router'
import ListMovimientos from '../../components/Dashboard/Tiendas/Movimientos/ListMovimientos';


export default function inicio() {

    

    const { data, error, mutate } = useSWR(`https://abakoapi.herokuapp.com/api/user`, url=>FetcherGet(url));
    
    if(!data) return 'Loading'

 

    if(data.rol==='admin' && !data.business) router.push('/dashboard/configuracion')

    

    if(data.rol=='employee') router.push('dashboard/productos')
    console.log(data.rol)
    
    return (

        <Sidebar active='Inicio' color='red' username={data.username}>

            <div className='flex-1 md:py-10 md:px-20 p-10 mb-10'>

                <div className='grid md:grid-cols-4 grid-cols-1 h-full gap-8'>

                    {/*
                !------------------------- Tier 1 ---------------------------!
                    */}
                    <div className='rounded-xl md:col-span-3 col-span-1 shadow-md h-52'>
                        <InicioEstadistica />
                    </div>


                    {/*
                !------------------------- Tier 2 ---------------------------!
                    */}
                    <div className='rounded-xl shadow-md p-2 overflow-hidden overflow-y-scroll h-52'>

                        <InicioTienda/>

                    </div>


                    {/*
                !------------------------- Tier 3 ---------------------------!
                    */}
                    <div className='rounded-xl md:col-span-4 col-span-1 shadow-md h-52 overflow-auto'>
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

        console.log(!token && !token2)
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


