import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//Pages
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import Contatti from "./pages/Contatti";
import Prodotti from "./pages/Prodotti";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/about-us" Component={AboutUs} />
        <Route path="/contatti" Component={Contatti} />
        <Route path="/Prodotti" Component={Prodotti} />
        <Route path="*" Component={NotFoundPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
