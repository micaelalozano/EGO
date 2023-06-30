import React, { useEffect } from "react";
import { CgClose } from "react-icons/cg";
import "../estilos/sidebar.css";

const Sidebar = ({ onClose }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".sibebar-contenedor-general")) {
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="sibebar-contenedor-general">
      <div className="div-sidebar-uno">
        <p className="close-tag" onClick={onClose}>
          Cerrar
        </p>
        <CgClose size={20} cursor="pointer" color="#333" onClick={onClose} />
      </div>
      <ul className="ul-uno">
        <li className="li-individual">Modelos</li>
        <li className="li-individual">Servicios y Accesorios</li>
        <li className="li-individual">Financiacion</li>
        <li className="li-individual">Reviews y Comunidad</li>
      </ul>
      <ul className="ul-uno">
        <li className="li-individual">Toyota Mobility Service</li>
        <li className="li-individual">Toyota Gazoo Racing</li>
        <li className="li-individual">Toyota Híbridos</li>
      </ul>
      <ul className="ul-uno">
        <li className="li-individual">Concesionarios</li>
        <li className="li-individual">Test Drive</li>
        <li className="li-individual">Contacto</li>
      </ul>
      <ul className="ul-ultimo">
        <li className="li-individual">Actividades</li>
        <li className="li-individual">Servicios al Cliente</li>
        <li className="li-individual">Ventas Especiales</li>
        <li className="li-individual">Innovación</li>
        <li className="li-individual">Prensa</li>
        <li className="li-individual">Acerca de...</li>
      </ul>
    </div>
  );
};

export default Sidebar;
