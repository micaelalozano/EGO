import React from "react";
import Imagen from "../assets/car.png";
import Carousel from "../components/Carousel";
import Titulo20px from "../components/Titulo20px";
//Estilos
import "../estilos/fichaDeModelo.css";

const FichaDeModelo = () => {
  return (
    <>
      <div className="fm-contenedor-general">
        <img src={Imagen} alt="car" className="img-car"/>
        <div className="texto-contenedor">
          <p className="hilux">Hilux DX/SR</p>
          <h1 className="title-h1">Preparada para</h1>
          <h1 className="title-h1">cualquier desafio</h1>
          <p className="h-texto">
            Texto Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Minima eos, distinctio nobis perferendis dolor aliquid
            excepturi provident quas est, blanditiis doloremque animi ipsa omnis
            ad, saepe officia eveniet.
          </p>
        </div>
      </div>
      <Carousel />
      <Titulo20px />
    </>
  );
};

export default FichaDeModelo;
