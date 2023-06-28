import React, { useState, useEffect } from "react";
import { Spinner } from "./Spinner";
import axios from "axios";
//Estilos
import "../estilos/listaDeAutos.css";

const ListaDeAutos = () => {
  const [autos, setAutos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://challenge.egodesign.dev/api/models/`)
      .then((res) => res.data)
      .then((autos) => {
        setAutos(autos);
        setIsLoading(false);
      })
      .catch();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <ul>
        <div className="card-list-contenedor">
          {autos.map(function (e, i) {
            return (
              <li key={i}>
                <div className="card-item">
                  <div className="card-content">
                    <p className="autos-name">{e.name}</p>
                    <p className="autos-price">
                      {" "}
                      {e.year} | ${e.price}{" "}
                    </p>
                    <img
                      src={e.photo}
                      alt="car"
                      className={i === 2 ? "img-autos-large" : "img-autos"}
                    />{" "}
                  </div>
                </div>
              </li>
            );
          })}
        </div>
      </ul>
    </>
  );
};

export default ListaDeAutos;