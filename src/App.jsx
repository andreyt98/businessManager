import "./sass/main.scss";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.scss";
import DesktopNavbar from "./components/DesktopNavbar";
import MobileNavbar from "./components/MobileNavbar";
import Home from "./components/Home";
import ProductSection from "./components/ProductSection";
import SaleSection from "./components/SaleSection";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";
import { Context } from "./context/Context";

function App() {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")) || []);
  const [product, setProduct] = useState({});

  const [sales, setSales] = useState(JSON.parse(localStorage.getItem("sales")) || []);
  const [sale, setSale] = useState({});

  const [successMessage, setSuccessMessage] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="App">
      <Context.Provider
        value={{
          products,
          setProducts,
          product,
          setProduct,
          successMessage,
          setSuccessMessage,
          modalIsOpen,
          setModalIsOpen,
        }}
      >
        <BrowserRouter>
          <DesktopNavbar />
          <MobileNavbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products" element={<ProductSection />}></Route>
            <Route path="/sale" element={<SaleSection products={products} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />}></Route>
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
