import React from "react";
import { BookOpenIcon } from "@heroicons/react/solid";
import "./About_us.css"; // Importe o arquivo CSS

export default function AboutUs() {

  return (
    <section id="about_us" className="bg-gray-500 text-white">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
      <BookOpenIcon className="mx-auto inline-block w-10 mb-4" />
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4 project-title">
            Sobre nós
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="md:w-1/2 px-4">
            <p className="leading-relaxed">
            Somos uma empresa de Comunicação Visual com foco na Consultoria para cada trabalho.
            São mais de 19 anos de experiência que trazem para o cliente mais segurança na contratação dos nossos serviços e produtos.
            Somos especializados em encontrar os melhores produtos e acabamentos para cada tipo de trabalho.
            </p>
            <p className="leading-relaxed">
            Sabemos que por trás de cada contratação existe a realização de um sonho ou um esforço de investimento e por isso prezamos pela excelência no atendimento e qualidade na entrega de todos os itens produzidos.
            Nossa missão é fazer com que o nosso trabalho traga o retorno esperado a cada cliente.
            </p>
            <p className="leading-relaxed">
            Temos orgulho em saber que participamos da história de cada empresa, o que nos faz ter a certeza de que devemos nos dedicar em cada trabalho!
            </p>
      </div>
      <div className="md:w-1/2 px-4 flex justify-end items-center">
        <img
          className="object-cover object-center rounded logo-image"
          alt="logo"
          src="./logo_lateral.png"
          width="150"
          height="auto"
        />
      </div>
    </div>
  </div>
</section>
  );
}
