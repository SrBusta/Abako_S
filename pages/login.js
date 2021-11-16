import Head from 'next/head'
import LoginForm from '../components/Login/LoginForm'

const Login=()=> {

    return (
        <div>
            <Head>
                <title>Login mas probable</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url(https://cdn.discordapp.com/attachments/875566021698789386/878864142935674920/guitar_close-up_house_80963_1920x1080.jpg)' }}><div className="absolute bg-gradient-to-tl from-black to-gray-600 opacity-50 inset-0 z-0" />
                <div className="min-h-screen grid grid-cols-2 mx-0 justify-center test2">
                
                    <div className="justify-self-center self-center z-10  lg:col-span-1 col-span-2">
                        <div className="p-10 bg-gray-700 mx-auto rounded-2xl w-100 bg-opacity-50 test">
                            <div className="mb-4 justify-self-auto">
                                <h3 className="font-semibold text-3xl text-white text-center">Iniciar Sesión</h3>
                            </div>
                            <LoginForm/>
                            <div className="pt-5 text-center text-gray-400 text-xs">
                                <span>
                                    Copyright © Busta & Quijano 2021-2022
                                </span>
                            </div>  
                        </div>
                    </div>
                    <div className="justify-self-start self-center z-10 place-items-start hidden lg:flex">
                        <div className="self-start  lg:flex text-gray-200">
                            <h1 className="mb-3 font-bold text-5xl font-sans">Hola! Bienvenido a nuestra comunidad</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default Login

export async function getServerSideProps({ req, res }) {

    const token = req.cookies.accessToken;
    const token2 = req.cookies.refreshToken;
    if (token && token2 ) {
        return {
            redirect: {
                destination: '/dashboard',
                permanent: false,
            }
        }
    }
    
    return{
        props:{

        }
    }
}
