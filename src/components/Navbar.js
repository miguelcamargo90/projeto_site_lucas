import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import logo from "../images/logo.png";

export default function Navbar() {
  return (
    <header className="bg-white sticky top-0 z-10 md:shadow-lg">
      <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
        <a href="#about" className="ml-3 text-xl">
          <img src={logo} alt="Logo" className="w-60 h-40 md:w-400 md:h-250" />
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <a href="#about_us" className="mr-5 hover:text-black text-lg">
            Sobre nós
          </a>
          <a href="#projects" className="mr-5 hover:text-black text-lg">
            Trabalhos Executados
          </a>
          <a href="#skills" className="mr-5 hover:text-black text-lg">
            Nossos Diferenciais
          </a>
          <a href="#testimonials" className="mr-5 hover:text-black text-lg">
            Depoimentos
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-white"
        >
          Fale Conosco
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
