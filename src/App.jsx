import "./sass/main.scss";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.scss";
import DesktopNavbar from "./components/DesktopNavbar";
import MobileNavbar from "./components/MobileNavbar";
import Home from "./components/Home";
import ProductSection from "./components/ProductSection";
import SaleSection from "./components/SaleSection";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  return (
    <div className="App">
      <BrowserRouter>
        <DesktopNavbar />
        <MobileNavbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<ProductSection modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />}></Route>
          <Route path="/sale" element={<SaleSection modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
