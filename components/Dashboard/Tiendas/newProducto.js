import React, { useState } from 'react';
import cookie from 'js-cookie';
import useSWR, { mutate } from 'swr'
import FetcherGet from '../../../lib/FetcherGet';



export default function NewProductos({ handleModal, shop_id }) {

    const [newproducto, setNewproducto] = useState('desactive')
    const [newmarca, setNewmarca] = useState('desactive')

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

        const res = await fetch(`https://api.abako.xyz/api/user/shop/${shop_id}/product`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(employeeState),
            credentials: 'include'
        })

        mutate(`https://api.abako.xyz/api/user/shop/${shop_id}/product`)
        handleModal()
    }

    const { data, error } = useSWR(`https://api.abako.xyz/api/user/shop/${shop_id}/product`, url => FetcherGet(url))





    if (error) return 'asd'
    if (!data) return 'Loading'

    let result = [];
    let result2 = [];
    data.map((item) => {
        result.push(item.type)
        result2.push(item.brand)
    })

    const productos = result.reduce((acc, item) => {
        if (!acc.includes(item)) {
            acc.push(item);
        }
        return acc;
    }, [])

    const marcas = result2.reduce((acc, item) => {
        if (!acc.includes(item)) {
            acc.push(item);
        }
        return acc;
    }, [])


    return (<>

        <div className="modal open md:py-32 px-10 min-h-screen">
            <div className="bg-white dark:bg-pruebaA3 rounded-3xl p-10 md:w-3/4 lg:w-1/2 mx-auto">
                <h2 className="dark:text-white font-bold text-gray-600 ">Nuevo Producto</h2>

                <form className="modal-conteiner" onSubmit={handleSubmit}>



                    <div className="flex items-center mb-5 md:flex-row flex-col">
                        <label htmlFor="name" className="inline-block w-20 md:mr-6 mr-0 md:text-right text-center font-bold dark:text-white text-gray-600">Tipo</label>
                        {newproducto == 'desactive' ? (<select type="text" id="firts" name="type"
                            className="md:text-left text-center flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                              text-gray-600 dark:text-white outline-none dark:bg-pruebaA3" onChange={handleChange}>
                            <option >Seleccione un producto</option>
                            {productos.map(producto => (<option key={producto} value={producto}>{producto}</option>))}
                        </select>) : (<input type="text" id="firts" name="type"
                            className="md:text-left text-center flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                              text-gray-600 dark:text-white outline-none dark:bg-pruebaA3" onChange={handleChange}>
                        </input>)}
                        <button className="md:text-left text-center  py-2 border-b-2 border-transparent" type="button" aria-label="Toogle" onClick={() => setNewproducto(newproducto === 'active' ? 'desactive' : 'active')}>
                            {newproducto === 'active' ? 'Seleccionar' : 'Nuevo?'}
                        </button>
                    </div>



                    <div className="flex items-center mb-5 md:flex-row flex-col">
                        <label htmlFor="name" className="inline-block w-20 md:mr-6 mr-0 md:text-right text-center font-bold dark:text-white text-gray-600">Marca</label>
                        {newmarca == 'desactive' ? (<select type="text" id="last" name="brand"
                            className="md:text-left text-center flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                              text-gray-600 dark:text-white outline-none dark:bg-pruebaA3">
                            <option >Seleccione un producto</option>
                            {marcas.map(marca => (<option key={marca} value={marca}>{marca}</option>))}
                        </select>) : (<input type="text" id="last" name="brand"
                            className="md:text-left text-center flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                            text-gray-600 dark:text-white outline-none dark:bg-pruebaA3" onChange={handleChange}></input>)}


                        <button className="md:text-left text-center  py-2 border-b-2 border-transparent" type="button" aria-label="Toogle" onClick={() => setNewmarca(newmarca === 'active' ? 'desactive' : 'active')}>
                            {newmarca === 'active' ? 'Seleccionar' : 'Nuevo?'}
                        </button>
                    </div>



                    <div className="flex items-center mb-5 md:flex-row flex-col">
                        <label htmlFor="name" className="inline-block w-20 md:mr-6 mr-0 md:text-right text-center font-bold dark:text-white text-gray-600">Modelo</label>
                        <input type="text" id="user" name="model"
                            className="md:text-left text-center flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                            text-gray-600 dark:text-white outline-none dark:bg-pruebaA3" onChange={handleChange}></input>
                    </div>
                    <div className="flex items-center mb-5 md:flex-row flex-col">
                        <label htmlFor="name" className="inline-block md:w-20 w-full md:mr-6 mr-0 md:text-right text-center font-bold dark:text-white text-gray-600">Precio de Compra</label>
                        <input type="number" id="pass" name="priceBuy"
                            className="md:text-left text-center flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                            text-gray-600 dark:text-white outline-none dark:bg-pruebaA3" onChange={handleChange} min="0.00" max="1000000.00" step="0.01"></input>
                    </div>
                    <div className="flex items-center mb-5 md:flex-row flex-col">
                        <label htmlFor="name" className="inline-block md:w-20 w-full md:mr-6 mr-0 md:text-right text-center font-bold dark:text-white text-gray-600">Precio de Venta</label>
                        <input type="number" id="email" name="priceSell"
                            className="md:text-left text-center flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                            text-gray-600 dark:text-white outline-none dark:bg-pruebaA3" onChange={handleChange} min="0.00" max="1000000.00" step="0.01"></input>
                    </div>

                    <div className="flex items-center mb-5 md:flex-row flex-col">
                        <label htmlFor="name" className="inline-block w-20 md:mr-6 mr-0 md:text-right text-center font-bold dark:text-white text-gray-600">Stock</label>
                        <input type="number" id="email" name="stock"
                            className="md:text-left text-center flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                            text-gray-600 dark:text-white outline-none dark:bg-pruebaA3" onChange={handleChange}></input>
                    </div>

                    <div className="text-right mx-2 flex flex-row md:block">
                        <button className="py-3 px-8 bg-green-400 text-white font-bold mx-2" type='submit' >Agregar</button>
                        <button className="py-3 px-8 bg-red-400 text-white font-bold" onClick={handleModal} >Cerrar</button>
                    </div>

                </form>
            </div>
        </div>

    </>)
}