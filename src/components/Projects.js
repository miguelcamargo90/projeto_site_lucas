import { PencilIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { projects } from "../data";
import images from "../fotos/importImages.js";
import "./Projects.css"; // Importe apenas o arquivo CSS de estilo

window.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});


export default function Projects() {
  const [selectedType, setSelectedType] = useState(null);

  const openProjectModal = (type) => {
    setSelectedType(type);
  };

  const closeProjectModal = () => {
    setSelectedType(null);
  };

  return (
    <section
      id="projects"
      className="text-gray-400 bg-gray-900 body-font"
      style={{ position: "relative" }}
    >
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <PencilIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4 project-title">
            Trabalhos Executados
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`sm:w-1/2 w-full p-4 cursor-pointer`}
            onClick={() => openProjectModal(project.type)}
          >
            <div className="relative group">
              <img
                alt="projetos"
                src={project.image["capa_" + project.type] || images.capa_default}
                className={`w-full h-full object-cover object-center rounded-lg mt-12`}
                style={{ maxHeight: "300px" }}
              />
              <h2 className="absolute top-0 left-0 text-white bg-red-500 px-4 py-2 rounded-lg title-image">
                {project.title}
              </h2>
              <div className="absolute inset-0 border-4 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        ))}
        </div>
      </div>
  
      {/* Carousel de Projeto */}
      {selectedType && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <div className="p-3 max-w-3xl mx-auto rounded-lg modal">
            <button
              onClick={closeProjectModal}
              className="text-white bg-red-500 px-4 py-2 rounded-lg mt-4 close-button"
            >
              Fechar
            </button>
            {/* Usando o Carousel da react-responsive-carousel */}
            <Carousel autoPlay infiniteLoop showThumbs={false}>
              <div>
                <img
                  src={
                    images[selectedType]["capa_" + selectedType] ||
                    images.capa_default
                  }
                  alt="projetos"
                  className="carousel-image" // Aplicando a classe CSS
                />
              </div>
              {Array.isArray(images[selectedType].images) &&
                images[selectedType].images.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt="projetos"
                      className="carousel-image" // Aplicando a classe CSS
                    />
                  </div>
                ))}
            </Carousel>
          </div>
        </div>
      )}
    </section>
  );
}