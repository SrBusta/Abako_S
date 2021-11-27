import { Bar, Pie, Doughnut } from "react-chartjs-2"
import useSWR from "swr"
import FetcherGet from "../../../../lib/FetcherGet"

export default function InicioProductsMasVendidos() {

    const { data, error } = useSWR(`https://api.abako.xyz/api/user/movement`, url => FetcherGet(url))
    if (error) return 'error'
    if (!data) return 'loading'



    let salida30d = [];

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [day, month, year].join('/');

    }

    function Last30Days() {
        var result = [];
        for (var i = 0; i < 30; i++) {
            var d = new Date();
            d.setDate(d.getDate() - i);
            result.push(formatDate(d))
        }

        return (result);
    }



    let dates = Last30Days();



    data.forEach(movimiento => {

        if (movimiento.type === false) {

            const date = formatDate(movimiento.createdAt);

            dates.forEach((dia) => {
                if (date === dia) {




                    salida30d.push(movimiento)


                }

            })


        }


    });

    let dataquantity = [];
    let id = [];



    salida30d.forEach(salida => {

        if (!id.includes(salida.product.id)) {

            id.push(salida.id)

            dataquantity.push(0)

            salida30d.forEach(salidaBusqueda => {

                if (salidaBusqueda.product.id === salida.product.id) {

                    dataquantity[id.indexOf(salidaBusqueda.product.id)] = dataquantity[id.indexOf(salidaBusqueda.product.id)] + salidaBusqueda.quantity;

                }

            })

        }

    })

    let datafinal;

    dataquantity.forEach((valor, i) => {

        

    })





   








    return (<>

    </>)
}