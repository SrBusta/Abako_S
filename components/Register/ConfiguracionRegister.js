import router from "next/router";
import { useState } from 'react';
import cookie from 'js-cookie'

export default function ConfiguracionRegister() {

    const [state,setState]=useState({email:'',password:''});
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


        const res = await fetch('https://abakoapi.herokuapp.com/api/user/business', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', accessToken: cookie.get('accessToken'), refreshToken: cookie.get('refreshToken') },
            body: JSON.stringify(state),
            credentials:'include'

        })

        cookie.remove('accessToken')
        cookie.remove('refreshToken')

        router.push('/login')

    }
        return (<form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 grid-cols-1 mt-6  dark:text-white text-gray-900 gap-2 p-4">

                <div className="text-center lg:text-left">
                    <span className="font-semibold">Nombre de Empresa :</span>
                </div>
                <div className="xl:col-span-2 text-center lg:text-left">
                    <input onChange={handleChange} className="bg-transparent border-b-2  w-3/4 xl:text-left text-center focus:outline-none" type="text" id="name" name="name" />
                </div>
                <div className="text-center lg:text-left">
                    <span className="font-semibold">Ruc :</span>
                </div>
                <div className="xl:col-span-2 text-center lg:text-left">
                    <input onChange={handleChange} className=" bg-transparent border-b-2  w-3/4 xl:text-left text-center focus:outline-none" type="number" id="ruc" name="ruc" />
                </div>
                <div className="text-center lg:text-left">
                    <span className="font-semibold">Descripcion :</span>
                </div>
                <div className="xl:col-span-2 text-center lg:text-left">
                    <input onChange={handleChange} className="bg-transparent border-b-2 w-3/4 xl:text-left text-center focus:outline-none" type="text" id="description" name="description" />
                </div>
                <div className="xl:col-start-2 col-start-1 grid grid-cols-2 gap-2">
                    <button type="submit" className=" bg-gray-300  hover:bg-gray-700 hover:text-gray-200 text-gray-700 p-2 rounded-md  tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-300">
                        Guardar
                    </button>

                </div>

            </div>
        </form>)
    }
