import React from "react";
import { Route, Routes } from "react-router";
import Inicio from "./pages/Inicio";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
    </>
  );
};

export default App;