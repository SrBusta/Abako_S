import Head from 'next/head'
import RegisterForm from '../components/Register/RegisterForm'



const Register = () => {
    return (
        <div>
            <Head>
                <title>Registro mas probable</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-no-repeat bg-cover bg-center relative" style={{ backgroundImage: 'url(edited2.png)' }}><div className="absolute bg-gradient-to-tr from-black to-gray-600 opacity-50 inset-0 z-0" />
            
                <div className="min-h-screen grid grid-cols-2 mx-0 justify-center test2 ">
                    <div className="justify-self-center self-center text-right p-10 sm:max-w-5xl xl:max-w-2xl z-10 hidden lg:flex" >
                        <div className="self-start  text-gray-200">
                            <span className="mb-3 brightness-90 text-5xl font-test"><img src='/logo.png' width='150'/><span>ABAKO</span></span>
                        </div>
                    </div>
                    <div className=" justify-self-center self-center z-10 col-span-2 lg:col-span-1">
                        <div className="p-10 bg-gray-700 mx-auto rounded-2xl w-100 bg-opacity-50 test">
                            <div className="mb-4 justify-self-auto">
                                <h3 className="font-semibold text-3xl text-white text-center">Registrarse</h3>
                            </div>
                             <RegisterForm/> 
                            <div className="pt-5 text-center text-gray-400 text-xs">
                                <span>
                                    Copyright © Busta & Quijano 2021-2022
                                </span>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Register;