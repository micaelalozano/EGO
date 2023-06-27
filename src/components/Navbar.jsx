import React, { useState } from "react";
import Logo from "../assets/favicon-32x32.png";
import { FiMenu } from "react-icons/fi";
import Modelos from "../pages/Modelos";
import FichaDeModelo from "../pages/FichaDeModelo";
//Estilos
import "../estilos/navbar.css";

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState("Modelos");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
      <div className="nav-contenedor-general">
        <div className="div-contenedor-uno">
          <img src={Logo} alt="logo" className="logo" />
          <li
            className={`navbar-li ${
              selectedItem === "Modelos" ? "selected" : ""
            }`}
            onClick={() => handleItemClick("Modelos")}
          >
            Modelos
          </li>
          <li
            className={`navbar-li ${
              selectedItem === "Ficha de modelo" ? "selected" : ""
            }`}
            onClick={() => handleItemClick("Ficha de modelo")}
          >
            Ficha de modelo
          </li>
          <div className="tab"></div>
        </div>
        <div className="div-contenedor-dos">
          <p className="menu">Menú</p>
          <FiMenu size={24} cursor="pointer" color="#222"/>
        </div>
      </div>
      {selectedItem === "Modelos" && <Modelos />}
      {selectedItem === "Ficha de modelo" && <FichaDeModelo />}
    </>
  );
};

export default Navbar;
