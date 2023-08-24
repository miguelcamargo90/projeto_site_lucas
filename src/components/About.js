import React from "react";
import { PaperClipIcon, CalculatorIcon } from "@heroicons/react/solid";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex flex-col md:flex-row items-auto justify-center">
        <div className="md:w-1/2 md:pr-60 text-center">
          <img
            className="w-auto object-cover object-left"
            alt="foto_fundo_topo"
            src="./foto_fundo2.jpeg"
            width="50"
            height="50"
          />
        </div>
        <div className="md:w-1/2 md:pl-2 text-center md:text-right">
          <div className="bg-opacity-70 backdrop-blur-lg p-6 rounded-lg text-white">
            <h1 className="text-4xl mb-4 font-medium">
              Olá sou Lucas Nini!
              <br className="hidden lg:inline-block" />
              Tenho 19 anos de experiência em Comunicação Visual, para você ter a certeza em contratar o serviço certo.
            </h1>
            <p className="mb-8 leading-relaxed">
              Empresa de Comunicação Visual, onde fazemos para você desde o layout até a instalação!
            </p>
          </div>

          <div className="flex-end items-center justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              <CalculatorIcon className="w-6 h-6 mr-2" />
              Faça seu Orçamento!
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              <PaperClipIcon className="w-6 h-6 mr-2" />
              Veja meus Trabalhos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
