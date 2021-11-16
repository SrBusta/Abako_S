import useSWR from 'swr';
import FetcherGet from '../../../../lib/FetcherGet';
import { useState } from 'react'
import NewMovimiento from './newMovimiento';

export default function ListMovimientos({ shop_id }) {

    const [modal, setModal] = useState("");

    const { data, error } = useSWR(!shop_id ? `http://159.223.97.216/api/user/movement` : `http://159.223.97.216/api/user/shop/${shop_id}/movement`, url => FetcherGet(url))
    if (error) return 'error'
    if (!data) return 'Loading'

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [day, month, year].join('/') + " " + [d.toLocaleTimeString()];

    }

    const viewModal = () => {
        setModal("true")
    }
    const handleModal = () => {
        setModal("")
    }

    return (<div>
        {shop_id ? <button onClick={viewModal} className="p-4 "> + Añadir</button> : <></>}
        {modal == "" ? (<></>) : (<NewMovimiento shop_id={shop_id} handleModal={handleModal} />)}
        <table className="items-center bg-transparent w-full border-collapse text-center">
            <thead>
                <tr >
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                        Tipo
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                        Marca
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                        Modelo
                    </th>

                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                        Encargado
                    </th>

                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold">
                        Fecha
                    </th>

                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                        Cantidad
                    </th>

                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold">

                    </th>

                </tr>
            </thead>


            <tbody>



                {
                    data && data.length > 0 ?



                        data.map(movimientos => (
                            <tr key={movimientos._id}>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-blueGray-700 ">
                                    {movimientos.product.type}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                    {movimientos.product.brand}
                                </td>
                                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    {movimientos.product.model}
                                </td>

                                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    {movimientos.createdBy.username}
                                </td>

                                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    {formatDate(movimientos.createdAt)}
                                </td>

                                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    {movimientos.quantity}
                                </td>

                                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    {movimientos.type === true ? (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
                                    </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                                    </svg>)}
                                </td>

                            </tr>


                        ))
                        :
                        <tr colSpan="10">

                            <td colSpan="10" className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-blueGray-700 ">
                                NO HAY PRODUCTOS
                            </td>

                        </tr>





                }


            </tbody>
        </table>

    </div>)
};
