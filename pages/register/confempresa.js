import {withRouter} from 'next/router'
import { useEffect,useState } from 'react';
import cookie from 'js-cookie'
import ConfiguracionRegister from '../../components/Register/ConfiguracionRegister'


export default withRouter( function confempresa({router}) {



    const [state,setState]=useState({username:router.query.username,password:router.query.password})
    
   

    useEffect(async() => {

        const res = await fetch('https://api.abako.xyz/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(state),
            credentials:'include'
        })

        const resJson = await res.json() // capturo los datos que se envia desde el API en formato Json



      }, []);

    return(<div>

            <div className="bg-no-repeat bg-cover bg-center relative" style={{ backgroundImage: 'url(../edited2.png)' }}><div className="absolute bg-gradient-to-tr from-black to-gray-600 opacity-50 inset-0 z-0" />
            
                <div className="min-h-screen grid grid-cols-2 mx-0 justify-center test2 ">
                    <div className="justify-self-center self-center text-right p-10 sm:max-w-5xl xl:max-w-2xl z-10 hidden lg:flex" >
                        <div className="self-start  text-gray-200">
                            <span className="mb-3 brightness-90 text-5xl font-test"><img src='/logo.png' width='150'/><span>ABAKO</span></span>
                        </div>
                    </div>
                    <div className=" justify-self-center self-center z-10 col-span-2 lg:col-span-1">
                        <div className="p-10 bg-gray-700 mx-auto rounded-2xl w-100 bg-opacity-50 test">
                            <div className="mb-4 justify-self-auto">
                                <h3 className="font-semibold text-3xl text-white text-center">Configuracion de Empresa</h3>
                            </div>

           <ConfiguracionRegister/> 
                            




                            <div className="pt-5 text-center text-gray-400 text-xs">
                                <span>
                                    Copyright © Abako 2021-2022 
                                </span>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>)
});

export async function getServerSideProps({ req, res }) {

    

    return {
        props: {
           
        }
    }

}