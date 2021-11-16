import { useState } from "react"
import ContenidoEmpresa from './configEmpresa/confEmpresaContent'
import FormularioEmpresa from './configEmpresa/confEmpresaForm'



export default function configuracionEmpresa(props) {
    const [edit, setEdit] = useState({ state: 'off' })
    const btnEditar = () => {
        setEdit({ state: 'onEmpresa' })
        window.setTimeout(() => {
        
            document.getElementById("name").value = props.data.business?props.data.business.name:''
            document.getElementById("ruc").value = props.data.business?props.data.business.ruc:''
            document.getElementById("description").value = props.data.business?props.data.business.description:''
        }, 1)
    }
    const handleSearch = () => {
       setEdit({state:'off'})
    }


    return (<>
        <div className="row-span-2 rounded-2xl shadow-md dark:shadow-md">
            <div className=" flex flex-warp rounded-t-2xl">
                <div className="px-5 w-full font-semibold flex-1 dark:text-white text-gray-900" >Datos de la empresa</div>
                <div className="text-gray-700 font-bold mx-6 dark:text-gray-200">
                    <a className="cursor-pointer hover:text-gray-900 dark:hover:text-gray-200" onClick={btnEditar}>Editar</a>
                </div>
            </div>
            {edit.state == 'off' ? (<ContenidoEmpresa data={props.data} />) : (<FormularioEmpresa data={props.data} handleSearch={handleSearch} />)}
        </div>
    </>)
}