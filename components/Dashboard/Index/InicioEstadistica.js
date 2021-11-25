import { Bar,Pie,Doughnut} from "react-chartjs-2"
import useSWR from "swr"
import FetcherGet from "../../../lib/FetcherGet"

export default function InicioEstadistica() {

    const {data,error} = useSWR(`https://abakoapi.herokuapp.com/api/user/product`,url => FetcherGet(url))
    if(error) return 'error'
    if(!data) return 'loading'
   

    let products=[];
    let stock=[];
    data.map(product=>(product.stock<10?products.push(product.type):''))
    data.map(product=>(product.stock<10?stock.push(product.stock):''))
   
    return (<>
        <div className="p-3">
            <Bar
                data={{
                    labels: products,
                    datasets: [
                        {
                            label: 'Instrumentos con Stock < 10',
                            data: stock,
                            backgroundColor: [
                                'rgba(255, 205, 86,0.5)',
                                'rgba(62, 124, 23, 0.4)',
                                'rgba(195, 106, 45, 0.6)'
                            ],
                        },
                    ],
                }}

                options={{
                    maintainAspectRatio: false,
                    responsive: true,
                }}
            />
        </div>
        
    </>)
}