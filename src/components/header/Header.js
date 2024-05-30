/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import '../../index.css';
import logo from '../../assets/layuca.png';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {

    if (menuOpen) {
      // navbar.classList.add('w-full', 'h-screen');
      // cerrar.classList.remove('hidden');
    } else {
      // navbar.classList.remove('w-full', 'h-screen');
      // cerrar.classList.add('hidden');
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header id="header" className={`w-full h-20 bg-transparent flex items-center justify-center cel:flex ${menuOpen ? 'cel:w-full cel:h-screen sm:w-full sm:h-screen' : ''}`}>
      <div class={`cel:w-7/12 sm:w-3/12 w-3/12 h-14 flex items-center justify-center ${menuOpen ? 'cel:hidden sm:hidden' : 'cel:flex cel:items-center cel:justify-center'}`}>
        <a href="#inicio" class="flex items-center justify-center">
          <img src={logo} class="w-14 h-14 cel:w-14 cel:h-14 rounded-full" />
        <span id="fontLogo" class="cel:hidden sm:hidden md:hidden ml-3 text-white 2xl:mt-2 xl:mt-2 text-2xl">La yuca</span>
        </a>
      </div>

      <nav id="navbar" className={`flex lg:gap-6 gap-12 text-white w-9/12 h-16 items-center justify-center ${menuOpen ? 'cel:h-screen sm:h-screen cel:rounded-none cel:flex-col sm:flex-col' : 'cel:text-3xl cel:w-full sm:w-full cel:ml-0 cel:flex sm:flex cel:items-center sm:items-center sm:justify-center cel:justify-start'}`} onClick={toggleMenu}>
        <i className={`fa-solid fa-bars text-white cel:text-3xl sm:text-4xl lg:hidden xl:hidden md:hidden 2xl:hidden ${menuOpen ? 'cel:hidden sm:hidden' : 'cel:block cel:absolute cel:top-5 cel:right-5 sm:absolute sm:top-5 sm:right-5'}`} id="cerrar" onClick={toggleMenu}></i>
        <i className={`fa-solid fa-xmark text-white cel:text-4xl sm:text-4xl lg:hidden xl:hidden md:hidden 2xl:hidden ${menuOpen ? 'cel:block sm:block cel:absolute cel:top-5 cel:right-5 sm:absolute sm:top-5 sm:right-5' : 'cel:hidden sm:hidden'}`} id="cerrar" onClick={toggleMenu}></i>
        <a href='#banner' className={`${menuOpen ? 'cel:block cel:text-2xl sm:text-xl sm:block' : 'cel:hidden sm:hidden'} transition duration-200 ease-in-out text-white w-36 h-16 hover:border-b-4 hover:border-b-white cel:h-12 sm:h-12 grid place-items-center text-center text-base hover:text-xl font-bold `}>Inicio</a>
        <a href='#nosotros' className={`${menuOpen ? 'cel:block cel:text-2xl sm:text-xl sm:block' : 'cel:hidden sm:hidden'} transition duration-200 ease-in-out text-white w-36 h-16  hover:border-b-4 hover:border-b-white cel:h-12 sm:h-12 grid place-items-center text-center text-base hover:text-xl font-bold `}>Nosotros</a>
        <a href='#productos' className={`${menuOpen ? 'cel:block cel:text-2xl sm:text-xl sm:block' : 'cel:hidden sm:hidden'} transition duration-200 ease-in-out text-white w-36 h-16 hover:border-b-4 hover:border-b-white cel:h-12 sm:h-12 grid place-items-center text-center text-base hover:text-xl font-bold `}>Productos</a>
        <a href='#promociones' className={`${menuOpen ? 'cel:block cel:text-2xl sm:text-xl sm:block' : 'cel:hidden sm:hidden'} transition duration-200 ease-in-out text-white w-36 h-16 hover:border-b-4 hover:border-b-white cel:h-12 sm:h-12 grid place-items-center text-center text-base hover:text-xl font-bold `}>Promociones</a>
        <a href='#contacto' className={`${menuOpen ? 'cel:block cel:text-2xl sm:text-xl sm:block' : 'cel:hidden sm:hidden'} transition duration-200 ease-in-out text-white w-36 h-16 hover:border-b-4 hover:border-b-white cel:h-12 sm:h-12 grid place-items-center text-center text-base hover:text-xl font-bold md:mr-7`}>Contacto</a>
      </nav>
    </header>
  );
}