import useSWR from 'swr';
import FetcherGet from '../../../../lib/FetcherGet';

export default function viewDatos({ shop_id }) {

    const { data, error, message } = useSWR(`https://api.abako.xyz/api/user/shop/${shop_id}`, url => FetcherGet(url));
    if (error) return 'Error '
    if (!data) return 'Loading'


    return (<div className="grid  grid-cols-1 md:grid-cols-2 m-5 p-5">

        <div>
            <div className="font-bold text-xl text-center md:text-left">Datos Generales :</div>

            <div className="grid lg:grid-cols-3 grid-cols-1 mt-6  dark:text-white text-gray-900 gap-2 p-4">
                <div className="text-center lg:text-left">
                    <span className="font-semibold">Nombre :</span>
                </div>
                <div className="lg:col-span-2 text-center lg:text-left border-b-2 border-transparent">
                    <span>{data.name}</span>
                </div>
                <div className="text-center lg:text-left">
                    <span className="font-semibold">Direccion :</span>
                </div>
                <div className="lg:col-span-2 text-center lg:text-left border-b-2 border-transparent">
                    <span>{data.address}</span>
                </div>
            </div>
            


        </div>

        <div>
            <div className="font-bold text-xl text-center md:text-left">Numeros de telefono:</div>
            {data.phone[0] ? (data.phone.map(phone => (
                <div className="grid lg:grid-cols-3 grid-cols-1 mt-6  dark:text-white text-gray-900 gap-2 p-4" key={phone.id}>

                    <div className="text-center lg:text-left">
                        <span className="font-semibold">Nombre :</span>
                    </div>
                    <div className="lg:col-span-2 text-center lg:text-left border-b-2 border-transparent">
                        <span>{phone.name}</span>
                    </div>
                    <div className="text-center lg:text-left">
                        <span className="font-semibold">Telf :</span>
                    </div>
                    <div className="lg:col-span-2 text-center lg:text-left border-b-2 border-transparent">
                        <span>{phone.number}</span>
                    </div>
                    <div className="text-center lg:text-left">
                        <span className="font-semibold">Descripcion :</span>
                    </div>
                    <div className="lg:col-span-2 text-center lg:text-left border-b-2 border-transparent">
                        <span>{phone.description}</span>
                    </div>
                </div>

            ))) : <div>no hay numero</div>}


        </div>

    </div>)


};
