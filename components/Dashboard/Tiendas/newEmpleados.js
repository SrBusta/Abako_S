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

        const res = await fetch(`https://api.abako.xyz/api/user/shop/${shop_id}/employee`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(employeeState),
            credentials:'include'
        })

        mutate(`https://api.abako.xyz/api/user/shop/${shop_id}/employee`)
        handleModal()
    }

    return (<>
        <div className="modal open py-32 px-10 min-h-screen">
            <div className="bg-white dark:bg-pruebaA3 rounded-3xl p-10 md:w-3/4 lg:w-1/2 mx-auto">
                <h2 className="dark:text-white font-bold text-gray-600 ">Nuevo Empleado</h2>

                <form className="modal-conteiner" onSubmit={handleSubmit}>
                    <div className="flex items-center mb-5 md:flex-row flex-col">
                        <label htmlFor="name" className="inline-block w-20 md:mr-6 mr-0 md:text-right text-center font-bold dark:text-white text-gray-600">Nombre</label>
                        <input type="text" id="firts" name="firstName" 
                            className="md:text-left text-center flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                            text-gray-600 dark:text-white outline-none dark:bg-pruebaA3" onChange={handleChange}></input>
                    </div>
                    <div className="flex items-center mb-5 md:flex-row flex-col">
                        <label htmlFor="name" className="inline-block w-20 md:mr-6 mr-0 md:text-right text-center font-bold dark:text-white text-gray-600">Apellido</label>
                        <input type="text" id="last" name="lastName" 
                            className="md:text-left text-center flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                            text-gray-600 dark:text-white outline-none dark:bg-pruebaA3" onChange={handleChange}></input>
                    </div>
                    <div className="flex items-center mb-5 md:flex-row flex-col">
                        <label htmlFor="name" className="inline-block w-20 md:mr-6 mr-0 md:text-right text-center font-bold dark:text-white text-gray-600">Usuario</label>
                        <input type="text" id="user" name="username" 
                            className="md:text-left text-center flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                            text-gray-600 dark:text-white outline-none dark:bg-pruebaA3" onChange={handleChange}></input>
                    </div>
                    <div className="flex items-center mb-5 md:flex-row flex-col">
                        <label htmlFor="name" className="inline-block w-20 md:mr-6 mr-0 md:text-right text-center font-bold dark:text-white text-gray-600">Contraseña</label>
                        <input type="text" id="pass" name="password" 
                            className="md:text-left text-center flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                            text-gray-600 dark:text-white outline-none dark:bg-pruebaA3" onChange={handleChange}></input>
                    </div>
                    <div className="flex items-center mb-5 md:flex-row flex-col">
                        <label htmlFor="name" className="inline-block w-20 md:mr-6 mr-0 md:text-right text-center font-bold dark:text-white text-gray-600">Correo</label>
                        <input type="email" id="email" name="email" 
                            className="md:text-left text-center flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                            text-gray-600 dark:text-white outline-none dark:bg-pruebaA3" onChange={handleChange}></input>
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