import { PencilIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { projects } from "../data";

export default function Projects() {
  // Estados para controlar os modais
  const [isHighlightModalOpen, setIsHighlightModalOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedTitle, setSelectedTitle] = useState(null);

  const openHighlightModal = () => {
    setIsHighlightModalOpen(true);
  };

  const openProjectModal = (title) => {
    setSelectedTitle(title);
    setCurrentSlide(0);
    setIsProjectModalOpen(true);
  };

  const closeModal = () => {
    setIsHighlightModalOpen(false);
    setIsProjectModalOpen(false);
    setSelectedTitle(null);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      (prevSlide + 1) % getFilteredProjects().length
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? getFilteredProjects().length - 1 : prevSlide - 1
    );
  };

  const getFilteredProjects = () => {
    if (selectedTitle === null) {
      return projects;
    }
    return projects.filter((project) => project.title === selectedTitle);
  };

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <PencilIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            <span
              className="text-white-1000 cursor-pointer shadow-lg"
              onClick={openHighlightModal}
            >
              Trabalhos Executados
            </span>{" "}
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`sm:w-1/2 w-full p-4 cursor-pointer ${
                selectedTitle !== null &&
                selectedTitle !== project.title
                  ? "hidden"
                  : ""
              }`}
              onClick={() => openProjectModal(project.title)}
            >
              <div className="relative group">
                <div className="relative">
                  <img
                    alt="projetos"
                    src={project.image}
                    className={`w-full h-full object-cover object-center ${
                      selectedTitle !== null &&
                      selectedTitle !== project.title
                        ? "opacity-40"
                        : ""
                    }`}
                    style={{ maxHeight: "400px" }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 opacity-0 group-hover:bg-opacity-50 group-hover:opacity-100 transition-opacity">
                    <h2 className="text-white font-semibold text-lg">
                      {project.title}
                    </h2>
                  </div>
                  <div className="absolute inset-0 border-4 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Modal de Destaque */}
      {isHighlightModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-blue-900 p-8 max-w-md mx-auto rounded-lg">
            <p className="text-white">
              Nessa seção você consegue visualizar os nossos produtos aplicados em nossos clientes, e visualizar a melhor opção para o seu negócio.
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
      
      {/* Modal de Projeto */}
      {isProjectModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 max-w-xl mx-auto rounded-lg">
            <div className="flex relative">
              <img
                alt="projetos"
                src={getFilteredProjects()[currentSlide].image}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <button
                onClick={prevSlide}
                className="text-white bg-gray-800 px-4 py-2 rounded-lg"
              >
                ❮ Anterior
              </button>
              <button
                onClick={nextSlide}
                className="text-white bg-gray-800 px-4 py-2 rounded-lg"
              >
                Próxima ❯
              </button>
              <button
                onClick={closeModal}
                className="text-white bg-red-500 px-4 py-2 rounded-lg"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
