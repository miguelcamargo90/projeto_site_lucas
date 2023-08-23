import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import headerBackground from "./images/background.jpg"; // Importe a imagem de fundo

export default function App() {

  const appStyle = {
    backgroundImage: `url(${headerBackground})`, // Defina a imagem de fundo
    backgroundSize: "contain", // Ajuste o tamanho da imagem de fundo
    backgroundPosition: "center center", // Centralize a imagem vertical e horizontalmente.
    backgroundRepeat: "no-repeat", // Evite repetição da imagem
    backgroundAttachment: "fixed",
  };

  return (
    <main className="text-gray-400 bg-gray-900 body-font" style={appStyle}>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}