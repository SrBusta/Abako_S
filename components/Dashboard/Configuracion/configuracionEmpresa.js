import { useState } from "react"
import ContenidoEmpresa from './configEmpresa/confEmpresaContent'
import FormularioEmpresa from './configEmpresa/confEmpresaForm'



export default function configuracionEmpresa(props) {
    const [edit, setEdit] = useState({ state: 'off' })
    const btnEditar = () => {
        setEdit({ state: 'onEmpresa' })
        window.setTimeout(() => {

            document.getElementById("name").value = props.data.business ? props.data.business.name : ''
            document.getElementById("ruc").value = props.data.business ? props.data.business.ruc : ''
            document.getElementById("description").value = props.data.business ? props.data.business.description : ''
        }, 1)
    }
    const handleSearch = () => {
        setEdit({ state: 'off' })
    }


    return (<>
        <div className="row-span-2 rounded-2xl shadow-md dark:shadow-md border">
            <div className=" flex flex-warp rounded-t-2xl">

                <div className="w-14 h-14 bg-white -my-8 mx-5 rounded-xl shadow-lg grid grid-cols-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500 justify-self-center self-center" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>

                </div>
                <div className="w-full font-semibold flex-1 dark:text-white text-gray-900 uppercase" >Datos de la empresa</div>
                <div className="text-gray-700 font-bold mx-6 dark:text-gray-200">
                    <a className="cursor-pointer hover:text-gray-900 dark:hover:text-gray-200" onClick={btnEditar}>Editar</a>
                </div>
            </div>
            {edit.state == 'off' ? (<ContenidoEmpresa data={props.data} />) : (<FormularioEmpresa data={props.data} handleSearch={handleSearch} />)}
        </div>
    </>)
}