import useSWR from 'swr';
import cookie from 'js-cookie';



const fetcher = (url) => {

    return fetch(url, {
        headers: { accessToken: cookie.get('accessToken'), refreshToken: cookie.get('refreshToken') },
        credentials:'include'
    })
        .then(res => res.json())
        .then(json => json.data);

}

export default function ListEmpleado({ shop_id }) {


    const { data, error, mutate} = useSWR(`http://159.223.97.216/api/user/shop/${shop_id}/employee`, fetcher);



    


    return (<>


        <div className="">

            <table className="items-center bg-transparent w-full border-collapse text-center">
                <thead>
                    <tr >
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                            Nombre de usuario
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                            Nombre
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                            Apellido
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                            Correo
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                            Activo
                        </th>

                    </tr>
                </thead>

                <tbody>



                    {




                        data && data.length > 0 ?


                            data.map(empleado => (


                                <tr key={empleado.id}>
                                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-blueGray-700 ">
                                        {empleado.username}
                                    </th>
                                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-blueGray-700 ">
                                        {empleado.firstName}
                                    </th>
                                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-blueGray-700 ">
                                        {empleado.lastName}
                                    </th>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                        {empleado.email}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                        {empleado.active ? 'SI' : 'NO'}
                                    </td>


                                </tr>


                            ))
                            :
                            <tr colSpan="10">

                                <th colSpan="10" className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-blueGray-700 ">
                                    NO HAY PRODUCTOS
                                </th>

                            </tr>





                    }


                </tbody>

            </table>


        </div>

    </>)
}
