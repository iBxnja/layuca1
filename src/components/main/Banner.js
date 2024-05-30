/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import '../../index.css';

export function Banner() {
    return (
        <section id="banner" class="w-full md:w-full cel:h-screen h-screen flex items-center justify-center flex-col relative">
            <div class="cel:w-full w-10/12 flex cel:items-center items-start justify-center flex-col">
                <h2 id="fontBanner" class="font-bold text-white xl:text-white">La Yuca</h2>
                <span class="italic text-white cel:text-xl text-2xl font-thin cel:font-light cel:text-center">"Somos la mejor opción para tus mañanas. Empezá de la mejor<br />
                    manera con tu panificación favorita."</span>
                <div class="flex cel:items-center items-start justify-center cel:flex-col cel:gap-0 gap-20 cel:mt-4 mt-10">
                    <a href="https://wa.link/hzdmn7" class="cel:w-48 cel:mt-5 w-48 h-14 text-amber-500 hover:text-white font-bold text-sm transition duration-200 ease-in-out border-2 border-amber-600 hover:bg-transparent hover:border-white bg-white grid place-items-center">HACER UN PEDIDO</a>
                    <a href="#promociones" class="cel:w-48 cel:mt-5 w-48 h-14 text-white font-bold text-sm transition duration-200 ease-in-out hover:bg-white hover:text-amber-500 hover:border-amber-600 border-white border-2 grid place-items-center">VER PROMOCIONES</a>
                </div>
                <div class="w-60 cel:mt-10 sm:mt-10 md:mt-10 lg:absolute xl:absolute 2xl:absolute bottom-10 right-10 flex items-center justify-center cel:gap-14 gap-20">
                    <a href="https://www.instagram.com/layuca.mr?igsh=azB6Z2d4NzZjOWlz"><i class="fa-brands fa-instagram text-3xl text-white"></i></a>
                    <a href="https://maps.app.goo.gl/1PdUZt8ZpAcNGdKU9"><i class="fa-solid fa-location-dot text-3xl text-white"></i></a>
                    <a href="https://wa.link/hzdmn7"><i class="fa-brands fa-whatsapp text-3xl text-white"></i></a>
                </div>
            </div>
        </section>

    )
}