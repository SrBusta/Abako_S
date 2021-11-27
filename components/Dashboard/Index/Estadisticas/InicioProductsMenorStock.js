import { Bar, Pie, Doughnut } from "react-chartjs-2"
import useSWR from "swr"
import FetcherGet from "../../../../lib/FetcherGet"

export default function InicioProductsMenorStock() {

    const { data, error } = useSWR(`https://api.abako.xyz/api/user/product`, url => FetcherGet(url))
    if (error) return 'error'
    if (!data) return 'loading'




    data.sort(function (a, b) {
        return a.stock - b.stock;
    });

    console.log(data)




    return (<div className="m-3 h-100 flex-grow grid grid-rows-5  justify-around gap-3">

        {


            data.map((producto, i) =>
                i < 5 ?
                    (


                        <div className="text-white p-4 border rounded-xl border-prueba grid grid-cols-3 gap-3 overflow-clip overflow-hidden" key={producto.id}>
                            <span className="absolute text-sm">
                                STOCK
                            </span>
                            <div className="uppercase m-auto text-7xl">



                                {producto.stock}

                            </div>

                            <div className="uppercase m-auto" >

                                {producto.shop.name}

                            </div>

                            <div className="uppercase m-auto font-extralight truncate w-min text-center" >

                                <p >
                                    {producto.type}
                                </p>

                                <p >
                                    {producto.brand}
                                </p>

                                <p >
                                    {producto.model}
                                </p>

                            </div>


                        </div>


                    ) : ''






            )


        }

    </div >)
}