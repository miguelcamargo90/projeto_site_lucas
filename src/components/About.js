import React from "react";
import { PaperClipIcon, CalculatorIcon } from "@heroicons/react/solid";
import "./About.css"; // Importe o arquivo CSS para estilização personalizada

export default function About() {
  return (
    <section id="about" >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-start md:py-20">
        <div className="md:w-1/2 md:pr-10 md:flex md:flex-col">
          <div className="image-container">
            <img
              className="w-full h-full object-cover"
              alt="foto_fundo_topo"
              src="./foto_fundo2.png"
            />
          </div>
        </div>
        <div className="md:w-1/2 md:pl-8 md:pr-20 text-align: justify md:text-right">
          <div className="bg-opacity-80 backdrop-blur-lg p-6 rounded-lg text-white">
            <h1 className="text-5xl mb-4 font-bold text-align: justify">
              Olá, sou o Lucas Nini!
              <br className="hidden lg:inline-block text-align: justify" />
              Tenho 19 anos de experiência em Comunicação Visual, produzindo desde materiais convencionais até grandes projetos.
            </h1>
          </div>
          <div className="items-right justify-right md:justify-right mt-6 space-x-4">
            <a
              href="#contact"
              className="inline-flex text-white bg-gradient-to-r from-green-400 to-blue-500 border-0 py-2 px-6 focus:outline-none hover:from-green-500 hover:to-blue-600 rounded text-lg shadow-md">
              <CalculatorIcon className="w-6 h-6 mr-2" />
              Faça seu Orçamento!
            </a>
            <a
              href="#projects"
              className="inline-flex text-white bg-gradient-to-r from-gray-700 to-gray-900 border-0 py-2 px-6 focus:outline-none hover:from-gray-800 hover:to-gray-700 rounded text-lg shadow-md">
              <PaperClipIcon className="w-6 h-6 mr-2" />
              Veja meus Trabalhos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
