import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//Layouts
import DefaultLayout from "./layouts/DefaultLayout";
//Pages
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import Contatti from "./pages/Contatti";
import Prodotti from "./pages/Prodotti";
import NotFoundPage from "./pages/NotFoundPage";
//Context
import { AlertProvider } from "./context/AlertContext";

function App() {
  return (
    <AlertProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index element={<Homepage />} />
            <Route path="/about-us" Component={AboutUs} />
            <Route path="/contatti" Component={Contatti} />
            <Route path="/Prodotti" Component={Prodotti} />
          </Route>
          <Route path="*" Component={NotFoundPage} />
        </Routes>
      </BrowserRouter>
    </AlertProvider>
  );
}

export default App;
