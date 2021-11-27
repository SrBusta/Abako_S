


export default function EditProductos({editar,handleModal}) {




 

    return (<>

        <div className="modal open md:py-32 px-10 min-h-screen">
            
                <div className="bg-white">{editar.data.stock}</div>
                <button className="py-3 px-8 bg-red-400 text-white font-bold" onClick={handleModal} >Cerrar</button>
           

        </div>

    </>)
}
