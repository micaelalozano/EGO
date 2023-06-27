import React, { useState, useEffect, useRef } from "react";
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";
//Estilos
import "../estilos/modelos.css";

const Modelos = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState("Todos");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <h1 className="h1-modelos">Descubrí todos los modelos</h1>
      <div className="modelos-contenedor-general">
        <div className="modelos-contenedor-uno">
          <li className="modelos-li-uno">
            Filtrar por
            <MdExpandMore size={14} color="#444" className="more-icon" />
          </li>
          <li
            className={`modelos-li ${
              selectedItem === "Todos" ? "selected" : ""
            }`}
            onClick={() => handleItemClick("Todos")}
          >
            Todos
          </li>
          <li
            className={`modelos-li ${
              selectedItem === "Autos" ? "selected" : ""
            }`}
            onClick={() => handleItemClick("Autos")}
          >
            Autos
          </li>
          <li
            className={`modelos-li ${
              selectedItem === "Pickups y Comerciales" ? "selected" : ""
            }`}
            onClick={() => handleItemClick("Pickups y Comerciales")}
          >
            Pickups y Comerciales
          </li>
          <li
            className={`modelos-li ${
              selectedItem === "SUVs y Crossovers" ? "selected" : ""
            }`}
            onClick={() => handleItemClick("SUVs y Crossovers")}
          >
            SUVs y Crossovers
          </li>
        </div>
        <div className="dropdown-container" ref={dropdownRef}>
          <button className="btn-more" onClick={toggleDropdown}>
            Ordenar por
            {isOpen ? (
              <MdExpandLess size={14} color="#444" className="btn-more-icon" />
            ) : (
              <MdExpandMore size={14} color="#444" className="btn-more-icon" />
            )}{" "}
          </button>
          {isOpen && (
            <ul className="dropdown-list">
              <li className="dropdown-li-x">Nada</li>
              <li className="dropdown-li">
                De <span className="dropdown-span">menor</span> a{" "}
                <span className="dropdown-span">mayor</span> precio
              </li>
              <li className="dropdown-li">
                De <span className="dropdown-span">mayor</span> a{" "}
                <span className="dropdown-span">menor</span> precio
              </li>
              <li className="dropdown-li">
                Más <span className="dropdown-span">nuevos</span> primero
              </li>
              <li className="dropdown-li-uno">
                Más <span className="dropdown-span">viejos</span> primero
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Modelos;
