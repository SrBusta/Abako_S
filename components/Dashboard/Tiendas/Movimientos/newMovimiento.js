import { useState } from 'react'
import useSWR from 'swr';
import cookie from 'js-cookie';
import {mutate} from 'swr'
import FetcherGet from '../../../../lib/FetcherGet';

export default function newMovimiento({ handleModal, shop_id }) {

    const [employeeState, setEmployeeState] = useState({

    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setEmployeeState((prevState) => ({
            ...prevState,
            [name]: value
        }))
  

    }


    const handleSubmit = async event => {
        event.preventDefault();

        const res = await fetch(`https://abakoapi.herokuapp.com/api/user/shop/${shop_id}/movement`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', accessToken: cookie.get('accessToken'), refreshToken: cookie.get('refreshToken') },
            body: JSON.stringify(employeeState),
            credentials: 'include'
        })
        
        mutate(`https://abakoapi.herokuapp.com/api/user/shop/${shop_id}/movement`)
        handleModal()
    }

    const { data, error } = useSWR(`https://abakoapi.herokuapp.com/api/user/shop/${shop_id}/product`, url => FetcherGet(url))
    if(error) return 'asd'
    if (!data) return 'Loading'
    

    return (<>
        <div className="modal open py-32 px-10 min-h-screen">
            <div className="bg-white dark:bg-gray-100 rounded-3xl p-10 md:w-3/4 lg:w-1/2 mx-auto">
                <h2 className="dark:text-white font-bold text-gray-600 ">Nuevo Movimiento</h2>

                <form className="modal-conteiner" onSubmit={handleSubmit}>
                    <div className="flex items-center mb-5">
                        <label htmlFor="name" className="inline-block w-20 mr-6 text-right font-bold dark:text-white text-gray-600">Producto</label>
                        <select id="firts" name="product"
                            className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400
                              text-gray-600 placeholder-gray-400 outline-none" onChange={handleChange}>
                                  <option >Seleccione un producto</option>
                            {data.map(producto => (<option key={producto.id} value={producto.id}>{producto.type} - {producto.brand} - {producto.model}</option>))}
                        </select>
                    </div>
                    <div className="flex items-center mb-5">
                        <label htmlFor="name" className="inline-block w-20 mr-6 text-right font-bold dark:text-white text-gray-600">Cantidad</label>
                        <input type="number" id="pass" name="quantity" placeholder="Cantidad"
                            className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                              text-gray-600 placeholder-gray-400 outline-none" onChange={handleChange}></input>
                    </div>
                    
                    <div className="flex items-center mb-5">
                        <label htmlFor="name" className="inline-block w-20 mr-6 text-right font-bold dark:text-white text-gray-600">Tipo</label>
                        <select  name="type"
                            className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                              text-gray-600 placeholder-gray-400 outline-none" onChange={handleChange}>
                                  <option>Seleccione el tipo de movimiento</option>
                                  <option value={true}>Entrada</option>
                                  <option value={false}>Salida</option>
                              </select>
                    </div>

                    <div className="text-right mx-2">
                        <button className="py-3 px-8 bg-green-400 text-white font-bold mx-2" type='submit' >Agregar</button>
                        <button className="py-3 px-8 bg-red-400 text-white font-bold" onClick={handleModal} >Cerrar</button>
                    </div>

                </form>
            </div>
        </div>

    </>)
};
