import React from "react";
import { PaperClipIcon, CalculatorIcon } from "@heroicons/react/solid";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 md:pr-10 text-center">
          <img
            className="w-auto h-auto object-cover object-left"
            alt="foto_fundo_topo"
            src="./foto_fundo2.jpeg"
            max-width="300"
            height="auto"
          />
        </div>
        <div className="md:w-1/2 md:pl-24 text-center md:text-right">
          <div className="bg-opacity-70 backdrop-blur-lg p-6 rounded-lg text-white">
            <h1 className="text-4xl mb-4 font-medium">
              Olá, sou o Lucas Nini!
              <br className="hidden lg:inline-block" />
              Tenho 19 anos de experiência em Comunicação Visual, onde consigo produzir desde os materiais convencionais até os grandes projetos.
            </h1>
          </div>
          <div className="flex-end items-center justify-center md:justify-end mt-4">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg mr-4">
              <CalculatorIcon className="w-6 h-6 mr-2" />
              Faça seu Orçamento!
            </a>
            <a
              href="#projects"
              className="inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              <PaperClipIcon className="w-6 h-6 mr-2" />
              Veja meus Trabalhos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
