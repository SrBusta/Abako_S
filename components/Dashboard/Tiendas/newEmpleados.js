import React, { useState } from 'react';
import cookie from 'js-cookie';
import {mutate} from 'swr'



export default function NewEmpleados({ handleModal, shop_id }) {

    

    const [employeeState, setEmployeeState] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        email: ''
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

        const res = await fetch(`https://abakoapi.herokuapp.com/api/user/shop/${shop_id}/employee`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', accessToken: cookie.get('accessToken'), refreshToken: cookie.get('refreshToken') },
            body: JSON.stringify(employeeState),
            credentials:'include'
        })

        mutate(`https://abakoapi.herokuapp.com/api/user/shop/${shop_id}/employee`)
        handleModal()
    }

    return (<>
        <div className="modal open py-32 px-10 min-h-screen">
            <div className="bg-white dark:bg-gray-100 rounded-3xl p-10 md:w-3/4 lg:w-1/2 mx-auto">
                <h2 className="dark:text-white font-bold text-gray-600 ">Nuevo Empleado</h2>

                <form className="modal-conteiner" onSubmit={handleSubmit}>
                    <div className="flex items-center mb-5">
                        <label htmlFor="name" className="inline-block w-20 mr-6 text-right font-bold dark:text-white text-gray-600">Nombre</label>
                        <input type="text" id="firts" name="firstName" placeholder="Nombre"
                            className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                              text-gray-600 placeholder-gray-400 outline-none" onChange={handleChange}></input>
                    </div>
                    <div className="flex items-center mb-5">
                        <label htmlFor="name" className="inline-block w-20 mr-6 text-right font-bold dark:text-white text-gray-600">Apellido</label>
                        <input type="text" id="last" name="lastName" placeholder="Apellido"
                            className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                              text-gray-600 placeholder-gray-400 outline-none" onChange={handleChange}></input>
                    </div>
                    <div className="flex items-center mb-5">
                        <label htmlFor="name" className="inline-block w-20 mr-6 text-right font-bold dark:text-white text-gray-600">Usuario</label>
                        <input type="text" id="user" name="username" placeholder="Usuario"
                            className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                              text-gray-600 placeholder-gray-400 outline-none" onChange={handleChange}></input>
                    </div>
                    <div className="flex items-center mb-5">
                        <label htmlFor="name" className="inline-block w-20 mr-6 text-right font-bold dark:text-white text-gray-600">Contraseña</label>
                        <input type="number" id="pass" name="password" placeholder="Contraseña"
                            className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                              text-gray-600 placeholder-gray-400 outline-none" onChange={handleChange}></input>
                    </div>
                    <div className="flex items-center mb-5">
                        <label htmlFor="name" className="inline-block w-20 mr-6 text-right font-bold dark:text-white text-gray-600">Correo</label>
                        <input type="email" id="email" name="email" placeholder="Correo"
                            className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                              text-gray-600 placeholder-gray-400 outline-none" onChange={handleChange}></input>
                    </div>

                    <div className="text-right mx-2">
                        <button className="py-3 px-8 bg-green-400 text-white font-bold mx-2" type='submit' >Agregar</button>
                        <button className="py-3 px-8 bg-red-400 text-white font-bold" onClick={handleModal} >Cerrar</button>
                    </div>

                </form>
            </div>
        </div>

    </>)
}