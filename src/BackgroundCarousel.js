import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import imageList from "./fotos/images"; // Importe o array de imagens
import "./BackgroundCarousel.css"; // Importe um arquivo de estilo para personalizar a aparência

export default function BackgroundCarousel() {
  return (
    <div className="carousel-background">
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        {imageList.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
