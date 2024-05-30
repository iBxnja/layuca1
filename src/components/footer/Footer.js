/* eslint-disable jsx-a11y/anchor-is-valid */
import '../../index.css';

export function Footer() {
    return (
        <footer class="w-full cel:h-full sm:h-full md:h-full lg:h-full h-32 flex cel:flex-col sm:flex-col md:flex-col lg:flex-col items-center justify-center">
            <div class="w-4/12 cel:w-full sm:w-full md:w-full lg:w-full sm:my-10 md:my-10 lg:my-10 cel:h-28 h-full flex items-center justify-center cel:gap-10 gap-20">
                <a href="https://www.instagram.com/layuca.mr?igsh=azB6Z2d4NzZjOWlz" class="w-14 h-14 grid place-items-center border-2 border-amber-600 rounded-full"><i class="fa-brands fa-instagram text-3xl text-amber-600"></i></a>
                {/* <a href="#" class="w-14 h-14 grid place-items-center border-2 border-amber-600 rounded-full"><i class="fa-brands fa-facebook text-3xl text-amber-600"></i></a> */}
                <a href="https://wa.link/hzdmn7" class="w-14 h-14 grid place-items-center border-2 border-amber-600 rounded-full"><i class="fa-brands fa-whatsapp text-3xl text-amber-600"></i></a>
            </div>
            <div class="cel:w-full sm:w-full md:w-full lg:w-full sm:items-center md:items-center lg:items-center w-2/12 cel:h-16 h-full flex cel:items-center items-start justify-center flex-col">
                <h2 class="text-sm font-thin text-amber-600">@ La Yuca - Marca registrada.</h2>
                <h4 class="text-sm font-thin text-amber-600">1° De mayo 434 - Concordia.</h4>
            </div>
            <div class="w-6/12 cel:w-full h-full sm:py-10 md:py-10 lg:py-10 cel:flex-col flex items-center justify-center gap-7 cel:gap-5 sm:gap-10 md:gap-16 lg:gap-24 text-amber-600">
                <span class="hidden cel:block cel:w-10/12 h-1 mb-4 bg-amber-600"></span>
                    <a href="#banner" class="text-lg md:text-xl lg:text-xl font-medium underline">Inicio</a>
                    <a href="#nosotros" class="text-lg md:text-xl lg:text-xl font-medium underline">Nosotros</a>
                    <a href="#productos" class="text-lg md:text-xl lg:text-xl font-medium underline">Productos</a>
                    <a href="#promociones" class="text-lg md:text-xl lg:text-xl font-medium underline">Promociones</a>
                    <a href="#contacto" class="text-lg md:text-xl lg:text-xl font-medium underline">Contacto</a>
                    <span class="hidden cel:block cel:w-10/12 h-1 my-4 bg-amber-600"></span>
                </div>
        </footer>
    )
}