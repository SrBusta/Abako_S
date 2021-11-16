

export function Tooltip({name,nameTooltip}){

    return(<div className="ml-10 bg-gray-900 text-gray-100 px-2 py-1.5 absolute rounded-lg shadow-xl tooltip" id={nameTooltip}>
            {name}
    </div>)
}