import React from "react";
import Navbar from "./components/Navbar";
import BackgroundCarousel from "./BackgroundCarousel"; // Importe o componente
import About from "./components/About";
import AboutUs from "./components/About_us";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import whatsappIcon from "./images/whats.png"; // Importe a imagem do ícone do WhatsApp
import "./App.css"; // Importe seu arquivo de estilos

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <BackgroundCarousel /> 
      <div className="content">
        <About />
        <AboutUs />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </div>
      <a
        href="https://contate.me/omelhorconsultordecomunicaovisual"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-icon" // Adicione a classe whatsapp-icon aqui
      >
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          className="whatsapp-icon-img"
        />
        <p>Faça seu Orçamento!</p>
      </a>
    </div>
  );
}
