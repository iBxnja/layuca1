/* eslint-disable jsx-a11y/alt-text */
import '../../index.css';
import pan3 from '../../assets/pan3.jpg';
import datos from '../../productos.json';

export function Productos() {
    return (
        <section id="productos" class="w-full h-full flex items-center justify-center flex-col mb-20">
            <div class="grid place-items-center w-full cel:w-11/12 cel:h-32 h-20 mt-20">
                <h2 class="cel:text-center text-5xl font-bold mb-4 text-white">Nuestos productos</h2>
                <span class="w-3/6 h-1 bg-amber-400"></span>
            </div>
            <div class="w-full h-full flex items-center justify-around flex-wrap mt-10 mb-10 gap-20 lg:gap-10">
                {datos.map((producto) => (
                <div class="w-72 h-96 bg-white flex items-center justify-center flex-col shadow-md shadow-neutral-600">
                    <img src={pan3} class="w-40 h-40" />
                    <h4 class="mt-4 text-2xl font-bold">{producto.nombre}</h4>
                    <h4 class="text-2xl font-light">{producto.precio}</h4>
                    {/* <p class="w-11/12 text-center italic font-thin">Lorem lorem lorem reloasd. Lorem lorem lorem lorem lorema asdada dada lasdladka</p> */}
                    <a href="https://wa.link/hzdmn7" class="w-48 h-12 mt-2 text-white font-bold text-sm transition duration-200 ease-in-out hover:bg-white hover:border-2 hover:border-amber-600 hover:text-amber-600 bg-amber-600  grid place-items-center">PEDIR PRODUCTO</a>
                </div>
                ))}
            </div>
            <span class="w-3/6 h-1 bg-amber-400"></span>
        </section>
    )
}