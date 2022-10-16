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
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")) || []);
  const [product, setProduct] = useState({});

  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <DesktopNavbar />
        <MobileNavbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<ProductSection products={products} setProducts={setProducts} product={product} setProduct={setProduct} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />}></Route>
          <Route path="/sale" element={<SaleSection products={products} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
