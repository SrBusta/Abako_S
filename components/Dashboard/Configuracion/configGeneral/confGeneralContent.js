


export default function confGeneralContent(props) {



    return (<>

        <div className="grid lg:grid-cols-3 grid-cols-1 mt-6  dark:text-white text-gray-900 gap-2 p-4">
            <div className="text-center lg:text-left">
                <span className="font-semibold">Nombres :</span>
            </div>
            <div className="lg:col-span-2 text-center lg:text-left border-b-2 border-transparent">
                <span>{props.data.firstName}</span>
            </div>
            <div className=" text-center lg:text-left">
                <span className="font-semibold">Apellidos :</span>
            </div>
            <div className="lg:col-span-2 text-center lg:text-left border-b-2 border-transparent">
                <span>{props.data.lastName}</span>
            </div>
            <div className="text-center lg:text-left">
                <span className="font-semibold">Usuario :</span>
            </div>
            <div className="lg:col-span-2 text-center lg:text-left border-b-2 border-transparent">
                <span>{props.data.username}</span>
            </div>
            <div className="text-center lg:text-left">
                <span className="font-semibold">Correo :</span>
            </div>
            <div className="lg:col-span-2 text-center lg:text-left border-b-2 border-transparent">
                <span>{props.data.email}</span>
            </div>
        </div>

    </>)
}