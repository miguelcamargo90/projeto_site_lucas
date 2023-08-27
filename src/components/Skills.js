import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { skills } from "../data";

export default function Skills() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4 project-title">
          <span
            className="text-white-1000 cursor-pointer shadow-lg"
            onClick={openModal}
          >
            Nossos &amp; Diferenciais
          </span>{" "}
          </h1>
          {/* <p className="text-xl text-white leading-relaxed xl:w-3/5 lg:w-4/5 mx-auto shadow-md">
            Além de Fachadas e Painéis nós também produzimos{" "} outros produtos de outros materiais com a máxima qualidade.
          </p> */}
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-blue-900 p-8 max-w-md mx-auto rounded-lg">
            <p className="text-white">
              Aqui nessa seção tem o conteúdo destacado sobre as Tecnologias e Nossos produtos.
            </p>
            <button
              onClick={closeModal}
              className="text-white bg-red-500 px-4 py-2 rounded-lg mt-4"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
