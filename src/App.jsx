import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//Pages
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Homepage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
