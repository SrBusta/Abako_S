import ListProductos from '../../components/Dashboard/Productos/ListProductos';
import Sidebar from '../../components/Dashboard/sidebar';
import VerficacionTokenUsuario from '../../lib/VerficacionTokenUsuario';
import useSWR from 'swr';
import FetcherGet from '../../lib/FetcherGet';



export default function productos() {

    

    return (<Sidebar active='Productos' color='yellow'>
        <div className='flex-1 md:py-10 md:px-20  p-10 mb-10'>
            <div className='grid grid-cols-1 h-full'>

                <div className='rounded-xl overflow-auto shadow-md'>


                    <ListProductos/>
                        

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

