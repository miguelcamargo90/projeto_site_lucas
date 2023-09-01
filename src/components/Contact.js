import React from "react";
import instagramIcon from "../images/insta.png"; 
import whatsappIcon from "../images/whats.png"; 
import emailIcon from "../images/email.png";


export default function Contact() {
  const currentYear = new Date().getFullYear(); // Obtém o ano atual
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="text-lg mb-4 lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-end relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.9004028705235!2d-47.08844088826629!3d-22.91704413815279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c892c3ad269b%3A0x605b363d72852511!2sAv.%20Jo%C3%A3o%20Batista%20Morato%20do%20Canto%2C%201526%20-%20Vila%20Anhanguera%2C%20Campinas%20-%20SP%2C%2013031-800!5e0!3m2!1spt-BR!2sbr!4v1692710424159!5m2!1spt-BR!2sbr"
            />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md text-white">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ENDEREÇO
              </h2>
              <p className="mt-1">
                Av. João Batista Morato do Canto, 1526 <br />
                Campinas-SP - CEP 13031-800
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0 text-white">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                lucasnini@lucasnini.com.br
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                TELEFONE
              </h2>
              <p className="leading-relaxed">19 98412-1053</p>
            </div>
          </div>
        </div>
        <div className="lg:w-2/4 px-6 mt-8 lg:mt-0 text-lg mb-4">
          <div className="bg-gray-800 rounded flex p-4 h-full flex-col items-justify">
            <h1 className="title-font font-larger text-white text-center text-lg mb-4">
              Nossos Contatos:
            </h1>
            <div className="flex items-center mb-5 text-white">
              <a
                href="https://contate.me/omelhorconsultordecomunicaovisual"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-left leading-center"
              >
                <img
                  src={whatsappIcon} // Use a variável para o ícone do WhatsApp
                  alt="WhatsApp"
                  className="w-8 h-8 mr-2 text-white"
                />
                <p>Faça seu Orçamento!</p>
              </a>
            </div>
            <div className="flex items-center mb-5 text-white">
              <a
                href="https://instagram.com/lucasninicv?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center leading-center"
              >
                <img
                  src={instagramIcon} // Use a variável para o ícone do Instagram
                  alt="Instagram"
                  className="w-8 h-8 mr-2 text-white"
                />
                <p>Rede Social</p>
              </a>
            </div>
            <div className="flex justify-start mb-9 text-white">
              <a
                href="mailto:lucasnini@lucasnini.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center leading-center"
              >
                <img
                  src={emailIcon} // Use a variável para o ícone do email
                  alt="email"
                  className="w-8 h-8 mr-2 text-white"
                />
                <p>E-Mail</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center text-white py-4">
        <p>&copy; {currentYear} Miguel Camargo - Desenvolvedor - Todos os direitos reservados</p>
      </footer>
    </section>
  );
}