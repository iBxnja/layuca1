/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import '../../index.css';
import pan3 from '../../assets/pan3.jpg';

export function Nosotros(){
    return(
        <section id="nosotros" class="w-full cel:h-full sm:h-full md:h-full cel:pb-4 sm:py-14 md:py-14 cel:flex-col sm:flex-col md:flex-col h-screen flex items-center justify-center">
            <div class="cel:w-full sm:w-11/12 md:w-11/12 md:text-center md:items-center sm:text-center sm:items-center w-6/12 h-full flex cel:items-center cel:text-center items-start justify-center flex-col">
                <h2 class="text-5xl font-bold mb-4 cel:mt-4 sm:mt-4">¿Quienes somos?</h2>
                <p class="w-11/12 sm:w-10/12 md:w-10/12 italic text-black cel:text-sm sm:text-base md:text-xl text-xl font-thin">
                Nos apasiona la panificación y nos dedicamos a ofrecerte lo mejor para tus mañanas.
                 Desde nuestros inicios, hemos trabajado con esfuerzo y dedicación para convertirnos en tu opción favorita.
                </p>
                <p class="w-11/12 sm:w-10/12 md:w-10/12 italic text-black cel:text-sm sm:text-base md:text-xl text-xl font-thin">
                Queremos que cada bocado te haga sentir en casa. Utilizamos ingredientes frescos y seleccionados, 
                combinando técnicas tradicionales con innovación para crear una experiencia única en cada producto.
                Te invitamos a disfrutar de una nueva experiencia. Estamos seguros de que encontrarás tu 
                panificación favorita entre nuestra variedad de productos. 
                </p>
            </div>
            <div class="cel:hidden sm:w-11/12 md:w-11/12 w-4/12 h-full grid place-items-center flex-col cel:mt-4 sm:mt-10 md:mt-10">
                <img src={pan3} class="cel:w-40 sm:w-60 md:w-72 cel:h-40 sm:h-60 md:h-72 w-80 h-80 shadow-md shadow-neutral-600" />
            </div>
        </section>
    )}
