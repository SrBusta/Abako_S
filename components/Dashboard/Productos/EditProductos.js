
import Cookies from 'js-cookie';
import { useState,useEffect } from 'react';
import { mutate } from 'swr';


export default function EditProductos({ editar, handleModal,shop_id }) {
 
    const [state, setState] = useState({

        type: editar.data.type,
        brand: editar.data.brand,
        model: editar.data.model,
        priceBuy: editar.data.priceBuy,
        priceSell: editar.data.priceSell


    })

    const handleChange = async (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setState((prevState) => ({
            ...prevState,
            [name]: value
        }))

    }

    const handleSubmit = async event => {
        event.preventDefault();

        const res = await fetch(`https://api.abako.xyz/api/user/shop/${shop_id}/product/${editar.data.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(state),
            credentials: 'include'
        })

        mutate(`https://api.abako.xyz/api/user/shop/${shop_id}/product`)
        handleModal()
    }

    useEffect(() => {
        document.getElementById('type').value=state.type
        document.getElementById('brand').value=state.brand
        document.getElementById('model').value=state.model
        document.getElementById('priceBuy').value=state.priceBuy
        document.getElementById('priceSell').value=state.priceSell

    },[])

    return (<>

        <div className="modal open md:py-32 px-10 min-h-screen">

            <div className="bg-white dark:bg-pruebaA3 rounded-3xl p-10 md:w-3/4 lg:w-1/2 mx-auto">
                <h2 className="dark:text-white font-bold text-gray-600 ">Nuevo Producto</h2>

                <form className="modal-conteiner" onSubmit={handleSubmit}>

                    <div className="flex items-center mb-5 md:flex-row flex-col">
                        <label htmlFor="name" className="inline-block w-20 md:mr-6 mr-0 md:text-right text-center font-bold dark:text-white text-gray-600">Tipo</label>
                        <input type="text" id="type" name="type"
                            className="md:text-left text-center flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                              text-gray-600 dark:text-white outline-none dark:bg-pruebaA3" onChange={handleChange}>
                        </input>
                    </div>

                    <div className="flex items-center mb-5 md:flex-row flex-col">
                        <label htmlFor="name" className="inline-block w-20 md:mr-6 mr-0 md:text-right text-center font-bold dark:text-white text-gray-600">Marca</label>
                        <input type="text" id="brand" name="brand"
                            className="md:text-left text-center flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                            text-gray-600 dark:text-white outline-none dark:bg-pruebaA3" onChange={handleChange}>
                        </input>
                    </div>

                    <div className="flex items-center mb-5 md:flex-row flex-col">
                        <label htmlFor="name" className="inline-block w-20 md:mr-6 mr-0 md:text-right text-center font-bold dark:text-white text-gray-600">Modelo</label>
                        <input type="text" id="model" name="model"
                            className="md:text-left text-center flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                            text-gray-600 dark:text-white outline-none dark:bg-pruebaA3" onChange={handleChange}></input>
                    </div>

                    <div className="flex items-center mb-5 md:flex-row flex-col">
                        <label htmlFor="name" className="inline-block md:w-20 w-full md:mr-6 mr-0 md:text-right text-center font-bold dark:text-white text-gray-600">Precio de Compra</label>
                        <input type="number" id="priceBuy" name="priceBuy"
                            className="md:text-left text-center flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                            text-gray-600 dark:text-white outline-none dark:bg-pruebaA3" onChange={handleChange} min="0.00" max="1000000.00" step="0.01"></input>
                    </div>


                    <div className="flex items-center mb-5 md:flex-row flex-col">
                        <label htmlFor="name" className="inline-block md:w-20 w-full md:mr-6 mr-0 md:text-right text-center font-bold dark:text-white text-gray-600">Precio de Venta</label>
                        <input type="number" id="priceSell" name="priceSell"
                            className="md:text-left text-center flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                            text-gray-600 dark:text-white outline-none dark:bg-pruebaA3" onChange={handleChange} min="0.00" max="1000000.00" step="0.01"></input>
                    </div>

                    
                    <div className="text-right mx-2 flex flex-row md:block">
                        <button className="py-3 px-8 bg-green-400 text-white font-bold mx-2" type='submit' >Editar</button>
                        <button className="py-3 px-8 bg-red-400 text-white font-bold" onClick={handleModal} >Cerrar</button>
                    </div>

                </form>
            </div>

        </div>

    </>)
}