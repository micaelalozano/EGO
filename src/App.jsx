import React from "react";
import { Route, Routes } from "react-router";
import Inicio from "./pages/Inicio";
import SideModelo from "./pages/SideModelo";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Modelos" element={<SideModelo />} />
      </Routes>
    </>
  );
};

export default App;
