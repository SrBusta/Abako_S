import { useState } from "react"
import GeneralContent from './configGeneral/confGeneralContent'
import GeneralForm from './configGeneral/confGeneralForm' 


export default function configuracionGeneral(props) {
    const [editg, setEdit] = useState({ state: 'off' })
    const btnEditar = () => {
        setEdit({ state: 'onEmpresa' })
        window.setTimeout(() => {
            document.getElementById("firstname").value = props.data.firstName
            document.getElementById("lastname").value = props.data.lastName
            document.getElementById("user").value = props.data.username
            document.getElementById("email").value = props.data.email
        }, 1)
    }
    const handleSearch = () => {
        setEdit({state:'off'})
     }

    return (<div  className="row-span-2 rounded-2xl shadow-md dark:shadow-lg lg:h-60">
        <div className="flex flex-warp rounded-t-2xl">
            <div className="px-5 w-full font-semibold flex-1 text-gray-900 dark:text-white" >Datos Generales</div>
            <div className="text-gray-700 font-bold mx-6 dark:text-gray-200">
                <a className="cursor-pointer hover:text-gray-300 dark:hover:text-gray-900" onClick={btnEditar}>Editar</a>
            </div>
        </div>
       {editg.state == 'off' ? (<GeneralContent data={props.data} />) : (<GeneralForm data={props.data} handleSearch={handleSearch} />)}
    </div>)
}