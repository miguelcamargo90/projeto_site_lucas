import React from "react";
import About from "./components/About";
import AboutUs from "./components/About_us";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import headerBackground from "./images/background.jpg";
import Navbar from "./components/Navbar";

export default function App() {
  const appStyle = {
    backgroundImage: `url(${headerBackground})`,
    backgroundSize: "auto",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  };

  return (
    <main className="text-gray-400 bg-gray-900 body-font" style={appStyle}>
      <Navbar />
      <About />
      <AboutUs />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}