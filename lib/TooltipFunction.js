


export function TooltipFunction() {

    if (typeof window !== "undefined") {

        //FUNCION TOOLTIP DE INICIO
        const iconInicio = document.querySelector('#iconInicio');
        const tooltipInicio = document.querySelector('#tooltipInicio');

        iconInicio.addEventListener('mouseenter', () => {
            tooltipInicio.classList.remove('hidden');
        })

        iconInicio.addEventListener('mouseleave', () => {
            tooltipInicio.classList.add('hidden');
        })


        //FUNCION TOOLTIP DE PRODUCTO
        const iconProducto = document.querySelector('#iconProducto');
        const tooltipProducto = document.querySelector('#tooltipProducto');

        iconProducto.addEventListener('mouseenter', () => {
            tooltipProducto.classList.remove('hidden');
        })

        iconProducto.addEventListener('mouseleave', () => {
            tooltipProducto.classList.add('hidden');
        })


        //FUNCION TOOLTIP DE TIENDA
        const iconTienda = document.querySelector('#iconTienda');
        const tooltipTienda = document.querySelector('#tooltipTienda');

        iconTienda.addEventListener('mouseenter', () => {
            tooltipTienda.classList.remove('hidden');
        })

        iconTienda.addEventListener('mouseleave', () => {
            tooltipTienda.classList.add('hidden');
        })


        //FUNCION TOOLTIP DE CONFIGURACION   
        const iconConfiguracion = document.querySelector('#iconConfiguracion');
        const tooltipConfiguracion = document.querySelector('#tooltipConfiguracion');

        iconConfiguracion.addEventListener('mouseenter', () => {
            tooltipConfiguracion.classList.remove('hidden');

        })

        iconConfiguracion.addEventListener('mouseleave', () => {
            tooltipConfiguracion.classList.add('hidden');
        })

    

    }

}