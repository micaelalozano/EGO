import React from "react";
import ImaUno from "../assets/image1x.png";
import ImaDos from "../assets/image2x.png";
//Estilos
import "../estilos/titulo20px.css";

const Titulo20px = () => {
  return (
    <>
      <div className="titulo-contenedor-general">
        <div className="contenedor-x1">
          <p className="t-20px">Titulo de 20px</p>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            magni deleniti rerum quos delectus voluptatum accusamus facilis,
            laudantium similique! Ipsam non labore exercitationem aperiam cum
            ducimus quidem veniam.
          </p>
        </div>
        <img src={ImaUno} alt="x1" className="img-x1" />
      </div>

      <div className="titulo-contenedor-general">
        <img src={ImaDos} alt="x1" className="img-x1" />
        <div className="contenedor-x2">
          <p className="t-20px">Titulo de 20px</p>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            magni deleniti rerum quos delectus voluptatum accusamus facilis,
            laudantium similique! Ipsam non labore exercitationem aperiam cum
            ducimus quidem veniam.
          </p>
        </div>
      </div>
    </>
  );
};

export default Titulo20px;
