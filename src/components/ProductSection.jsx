import Table from "./Table";
import Modal from "./Modal";
import Message from "./Message";

import { useState, useEffect } from "react";

const ProductSection = () => {
  const tableHeaders = ["Name", "Cost", "Quantity", ""];

  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")) || []);
  const [product, setProduct] = useState({});

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [message, setMessage] = useState({ active: false, type: null });

  useEffect(() => {
    setTimeout(() => {
      
      const timer = setTimeout(() => setMessage({ active: false, type: null }), 4000);
      return () => clearTimeout(timer);
    }, 4000);
  }, [message]);

  return (
    <section id="product-section">
      <h2>Products</h2> {" "}
 
      <i className="bi bi-plus-circle-fill" id="add-product" onClick={() => setModalIsOpen(true)}></i>

      <Table tableHeaders={tableHeaders} products={products} setProducts={setProducts} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} setProduct={setProduct}/>

      <Modal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} products={products} setProducts={setProducts} message={message} setMessage={setMessage} product={product} setProduct={setProduct}/>
      
      {message && message.type === "success" ? <Message backgroundColor={"#D1E7DD"} textColor={"green"} iconClass={"bi bi-check-circle-fill"}  text={"Product Added!"}  /> : null}
    </section>
  );
};

export default ProductSection;
