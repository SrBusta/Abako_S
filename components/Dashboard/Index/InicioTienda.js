import useSWR from 'swr';
import FetcherGet from '../../../lib/FetcherGet';



export default function InicioTienda() {

    const { data, error } = useSWR(`https://abakoapi.herokuapp.com/api/user/shop`, url => FetcherGet(url));
    if (error) return 'Ocurrio un error:'
    if (!data) return 'Loading'
    return (<>

        {data.map(shops => (
            <div key={shops.id} >

                <div className="rounded-lg  text-gray-900 font-sans cursor-default mb-4">
                    <div className="flex flex-row text-md border-b-2 border-red-700 pb-1 mx-2 font-sans justify-items-stretch" >
                        <div className="flex-grow">{shops.name}</div>
                    </div>
                    <div className={`text-sm mx-4`}>
                        <p>Direccion: {shops.address}</p>
                    </div>
                </div>
                
            </div>
        ))

        }
    </>)
};
