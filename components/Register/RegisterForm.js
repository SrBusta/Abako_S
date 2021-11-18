import React from 'react';
import { useState } from "react";
import router from 'next/router'
import RegisterModal from './registerModal'

import LoadingSpinner from '../Recursos/LoadingSpinner'

function RegisterForm() {

    const [state, setState] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const [form, setForm] = useState(false)
    const [modal, setModal] = useState(false)

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
        setForm({ state: 'loading' });

    
        if (state.password != state.Rpassword) {

            setForm({ state: 'error', message: 'ERROR - Las constraseñas no coinciden' })
            return false

        } else {

            const res = await fetch('https://abakoapi.herokuapp.com/api/user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(state),
                credentials:'include'
            })

            const { data, error } = await res.json()

            if (error) {
                setForm({ state: 'error', message: 'ERROR - Revise los datos' })
            } else {
                setForm({ state: 'success', message: 'Registro con éxito' })
               // router.push('/login')
                setModal(true)
            }
            
        }
        
    }

    const closeModal = () => {
        setModal(false)
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-row mx-0 justify-center">

                <div className="flex-col">

                    {/* Usuario */}
                    <div className="space-y-2 border-b-2 border-white w-full">
                        <svg className="h-5 w-5 text-white inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <input required onChange={handleChange} className=" text-center text-white inline text-base px-10 py-2 bg-transparent focus:outline-none focus:border-gray-900 placeholder-gray-300" name="username" type="text" placeholder="Ingrese Usuario" />
                    </div>
                    {/* Correo */}
                    <div className="space-y-2 border-b-2 border-white w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                        <input required onChange={handleChange} className="text-center text-white inline text-base px-10 py-2 bg-transparent focus:outline-none focus:border-gray-900 placeholder-gray-300" name="email" type="email" placeholder="Ingrese Correo" />
                    </div>
                    {/* Nombres */}
                    <div className="space-y-2 border-b-2 border-white w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                        <input required onChange={handleChange} className="text-center text-white inline text-base px-10 py-2 bg-transparent focus:outline-none focus:border-gray-900 placeholder-gray-300" name="firstName" type="text" placeholder="Ingrese Nombres" />
                    </div>
                    {/* Apellidos */}
                    <div className="space-y-2 border-b-2 border-white w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                        <input required onChange={handleChange} className="text-center text-white inline text-base px-10 py-2 bg-transparent focus:outline-none focus:border-gray-900 placeholder-gray-300" name="lastName" type="text" placeholder="Ingrese Apellidos" />
                    </div>
                    {/* Contraseña */}
                    <div className="space-y-2 border-b-2 border-white w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                        </svg>
                        <input required onChange={handleChange} id="password" className="text-center text-white inline text-base px-10 py-2 bg-transparent focus:outline-none focus:border-gray-900 placeholder-gray-300" name="password" type="password" placeholder="Ingrese Contraseña" />
                    </div>
                    {/* Repetir Contraseña */}
                    <div className="space-y-2 border-b-2 border-white w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                        </svg>
                        <input required onChange={handleChange} id="Rpassword" className="text-center text-white inline text-base px-10 py-2 bg-transparent focus:outline-none focus:border-gray-900 placeholder-gray-300" type="password" placeholder="Repita Contraseña" name="Rpassword" />
                    </div>
                    {form.state == 'error' ? (
                        <ul className="pt-2 text-center text-red-800 grid grid-cols-1 text-xm">
                            <li>{form.message}</li>
                        </ul>
                    ) : (
                        <div className="mt-2 pt-2"></div>
                    )
                    }

                    {/* Boton de Enviar */}
                    <div className="text-center pt-6">
                        <button type="submit" className="w-full flex justify-center bg-gray-300  hover:bg-gray-700 hover:text-gray-200 text-gray-700 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-300">
                            {form.state == 'loading' ? <LoadingSpinner /> : 'Registrar'}
                        </button>
                    </div>

                </div>
            </div>
            <RegisterModal closeModal={closeModal} data={modal} login={state} />
        </form>
    );

}

export default RegisterForm;