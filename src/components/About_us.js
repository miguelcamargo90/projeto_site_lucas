import React, { useState } from "react";
import { BookOpenIcon } from "@heroicons/react/solid";

export default function AboutUs() {
  const [setIsHighlightModalOpen] = useState(false);
  const openHighlightModal = () => {
    setIsHighlightModalOpen(true);
  };

  return (
    <section id="about_us" className="bg-gray-500 text-white">
      <div className="container mx-auto flex justify-center md:flex-row flex-col items-center">
      <div className="container px-5 py-7 mx-auto text-center lg:px-90">
          <BookOpenIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-7xl text-3xl font-medium title-font text-white mb-4">
            <span
              className="text-white-1000 cursor-pointer shadow-lg"
              onClick={openHighlightModal}
            >
              Sobre nós
            </span>{" "}
          </h1>
          <p className="leading-relaxed ml-4 md:ml-0">
            Tenho 19 anos de experiência em Comunicação Visual, para você ter a certeza em contratar o serviço certo.
          </p>
          <p className="leading-relaxed ml-4 md:ml-0">
            Empresa de Comunicação Visual, onde fazemos para você desde o layout até a instalação!
          </p>
          <p className="leading-relaxed ml-4 md:ml-0">
            Empresa de Comunicação Visual, onde fazemos para você desde o layout até a instalação!
          </p>
          <p className="leading-relaxed ml-4 md:ml-0">
            Empresa de Comunicação Visual, onde fazemos para você desde o layout até a instalação!
          </p>
          <p className="leading-relaxed ml-4 md:ml-0">
            Empresa de Comunicação Visual, onde fazemos para você desde o layout até a instalação!
          </p>
          <p className="leading-relaxed ml-4 md:ml-0">
            Empresa de Comunicação Visual, onde fazemos para você desde o layout até a instalação!
          </p>
        </div>
        <div className="md:w-1/2 text-right mb-4 p-6 rounded-lg">
          <img
            className="object-cover object-center rounded"
            alt="logo"
            src="./logo_lateral.png"
            width="150"
            height="auto"
          />
        </div>
      </div>
    </section>
  );
}
