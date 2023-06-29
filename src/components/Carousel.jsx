import React, { useState } from "react";
import ImagenUno from "../assets/uno.png";
import ImagenDos from "../assets/dos.png";
import ImagenTres from "../assets/tres.png";
import ImagenCuatro from "../assets/cuatro.png";
//Estilos
import "../estilos/carousel.css";

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const images = [
    { src: ImagenUno, title: "Nuevos motores Toyota", text: "Dos alternativas disel con turbo de geometria variable,1GD () y 2GD()." },
    { src: ImagenDos, title: "Suspensión mejorada", text: "Mayor confort de marcha,estabilidad y capacidad Off Road." },
    { src: ImagenTres, title: "Transmisión automática", text: "Posibilidad de elección de caja automática de manejo." },
    { src: ImagenCuatro, title: "Transmisión manual", text: "Posibilidad de elección de caja automática de manejo." },
  ];
  const totalImages = images.length;
  const visibleImages = [];

  const nextSlide = () => {
    const nextIndex = (slideIndex + 1) % totalImages;
    setSlideIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (slideIndex - 1 + totalImages) % totalImages;
    setSlideIndex(prevIndex);
  };

  for (let i = 0; i < 4; i++) {
    const imageIndex = (slideIndex + i) % totalImages;
    visibleImages.push(images[imageIndex]);
  }

  return (
    <div className="carousel-container">
      <div className="carousel">
        {visibleImages.map((image, index) => (
          <div key={index} className="slide">
            <img src={image.src} alt={`Imagen ${index + 1}`} />
            <div className="slide-content">
              <h3 className="image-title">{image.title}</h3>
              <p className="image-text">{image.text}</p>
            </div>
          </div>
        ))}
      </div>
      <a className="prev" onClick={prevSlide} >&#10094;</a>
      <a className="next" onClick={nextSlide} >&#10095;</a>
    </div>
  );
};

export default Carousel;