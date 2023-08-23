import React from "react";
import { PaperClipIcon, CalculatorIcon } from "@heroicons/react/solid";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
  <img
    className="object-cover object-center rounded"
    alt="hero"
    src="./foto_fundo2.jpeg"
    width="450"
    height="auto"
  />
</div>

<div className="lg:max-w-lg lg:pr-24 md:w-1/2 w-5/6 text-right">
  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
    Olá sou Lucas Nini.
    <br className="hidden lg:inline-block" />São 19 anos de experiência para você contratar o serviço certo.
  </h1>
  <p className="mb-8 leading-relaxed">
    Empresa de Comunicação Visual, onde fazemos para você desde o layout até a instalação!
  </p>
  <div className="flex items-center">
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