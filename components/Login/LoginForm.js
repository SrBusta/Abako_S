import React from 'react';
import { useState } from "react";
import router from 'next/router'
import cookie from 'js-cookie'
import Link from 'next/link'
import LoadingSpinner from '../Recursos/LoadingSpinner'

function LoginForm() {
    
    /*Declaración de los state*/
    const [state,setState] = useState({
        username: '',
        password: ''
    })
    const [form, setForm] = useState(false)

    /*Declaración de las funciones */

    /*Función N°1 */    
    const handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        setState((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    /*Función N°2*/
    const handleSubmit = async (event) => {
        event.preventDefault(); //evento para que el submit no te redireccione a otra pagina

        setForm({ state: 'loading' });

        const res = await fetch('https://abakoapi.herokuapp.com/api/session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(state),
            credentials:'include'
        })
        
        const resJson = await res.json() // capturo los datos que se envia desde el API en formato Json
        const accessToken = await resJson.data.accessToken; // capturo el token que se envia desde el API
        const refreshToken = await resJson.data.refreshToken; // capturo el token que se envia desde el API
    
        cookie.set("accessToken", accessToken, { expires: 5 / 24 }); // Seteo del cookie hacia la pagina
        cookie.set("refreshToken", refreshToken, { expires: 5 / 24 }); // Seteo del cookie hacia la pagina

        if (resJson.error == false) {
            router.push('/dashboard')
            setForm({ state: 'success', message: resJson.message })
            
        } else {
            setForm({ state: 'error', message: resJson.message })
        }
       
    }
    
    /*Retorno del HTML*/
    return (
        <form onSubmit={handleSubmit}>
            <div className="space-y-5">
                <div className="space-y-2 border-b-2 border-white w-full text-center">
                    {/*<label className="text-sm font-medium text-white tracking-wide">Correo</label>*/}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <input name="username" onChange={handleChange} className="text-center text-white inline text-base px-4 content-center  py-2 bg-transparent focus:outline-none focus:border-gray-900 placeholder-gray-300" type="text" placeholder="Nombre de usuario" />
                </div>
                <div className="space-y-2 border-b-2 border-white w-full text-center">
                    {/*<label className="mb-5 text-sm font-medium text-white tracking-wide">Contraseña </label>*/}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                    <input name="password" onChange={handleChange} className="text-center text-white inline content-center text-base px-4 py-2 bg-transparent focus:outline-none focus:border-gray-900 placeholder-gray-300" type="password" placeholder="Ingresa tu contraseña" />
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center pt-3">
                        <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 bg-gray-300 focus:ring-gray-400 border-gray-300 rounded checked:bg-gray-700 text-gray-700" />
                        <label htmlFor="remember_me" className="ml-2 block text-sm text-white pr-10">
                            Recuérdeme
                        </label>
                    </div>
                    <div className="text-sm pt-3">
                        <a href="#" className="text-white hover:text-gray-300">
                            ¿Olvidaste tu contraseña?
                        </a>
                    </div>
                </div>
                <div>
                    <button type="submit" className="w-full flex justify-center bg-gray-300  hover:bg-gray-700 hover:text-gray-200 text-gray-700 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-300">
                    {form.state=='loading'?(<LoadingSpinner/>):'Ingresar'}
                    </button>
                    {form.state == 'error' ? (
                        <div className='text-sm text-red-600 text-center'>{form.message}</div>
                    ):form.state=='success'?(
                        <div className='text-sm'></div>
                    ): (<Link href="/register"><a href="#" className="hover:text-gray-300 text-sm py-2 text-white">¿Aún no te has registrado?</a></Link>)
                    }

                </div>
            </div>
        </form>
    );
}


export default LoginForm;
