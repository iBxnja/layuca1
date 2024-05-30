/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import '../../index.css';
import pan3 from '../../assets/pan3.jpg';

export function Contacto() {
    return (
        <section id="contacto" class="w-full cel:h-full sm:h-full md:h-full lg:h-full cel:pb-4 lg:pb-10 cel:flex-col sm:flex-col md:flex-col lg:flex-col h-screen bg-transparent flex items-center justify-center">
            <div class="cel:hidden sm:w-full md:w-full w-4/12 h-full sm:my-10 md:my-10 lg:my-10 grid place-items-center flex-col cel:mt-4">
                <img src={pan3} class="cel:w-40 sm:w-60 lg:w-96 cel:h-40 sm:h-60 lg:h-96 w-96 h-96 shadow-md shadow-neutral-600" />
            </div>
            <div class="cel:w-full sm:w-11/12 md:w-11/12 lg:w-10/12 sm:pb-10 md:pb-10 w-6/12 h-full flex cel:items-center cel:text-center sm:text-center md:text-center lg:text-center sm:items-center md:items-center lg:items-center items-start justify-center flex-col">
                <h2 class="text-5xl font-bold mb-4 cel:mt-4 text-white">¡Contactá con nosotros!</h2>
                <p class="w-11/12 md:w-10/12 lg:w-10/12 italic text-white cel:text-sm text-xl font-thin cel:font-light">
                Si tienes alguna pregunta o comentario, no dudes en ponerte en contacto.    
                ¡Síguenos en nuestras redes sociales 
                para mantenerte al día con nuestras últimas novedades, promociones especiales 
                y deliciosas fotos de nuestros productos!.
                </p>
                <div class="cel:w-11/12 mt-5 flex items-center justify-center text-white">
                    <i class="fa-solid fa-location-dot text-3xl"></i>
                    <span class="ml-4 cel:text-sm md:text-xl lg:text-xl">1° De mayo 434 - Concordia, Entre Rios.</span>
                </div>
                <div class="cel:w-11/12 mt-5 flex items-center justify-center text-white">
                    <i class="fa-brands fa-whatsapp text-3xl"></i>
                    <span class="ml-4 cel:text-sm md:text-xl lg:text-xl">3454260260</span>
                </div>
                <div class="cel:w-11/12 mt-5 flex items-center justify-center text-white">
                    <i class="fa-brands fa-instagram text-3xl"></i>
                    <span class="ml-4 cel:text-sm md:text-xl lg:text-xl">Layuca.mr</span>
                </div>
            </div>
        </section>
    )
}
