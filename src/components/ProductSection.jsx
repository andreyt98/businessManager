import Table from "./Table";
import Modal from "./Modal";
import Message from "./Message";
import Form from "./Form";

import { useState, useEffect } from "react";

const ProductSection = ({ products, setProducts, product, setProduct, modalIsOpen, setModalIsOpen }) => {
  const tableHeaders = ["Name", "Cost", "Quantity", ""];

  const [message, setMessage] = useState({ active: false, type: null });

  useEffect(() => {
    setTimeout(() => {
      const timer = setTimeout(() => setMessage({ active: false, type: null }), 2500);
      return () => clearTimeout(timer);
    }, 2500);
  }, [ProductSection]);

  return (
    <section id="product-section">
      {message && message.type === "success" ? <Message backgroundColor={"#D1E7DD"} textColor={"green"} iconClass={"bi bi-check-circle-fill"} text={"Product Added!"} /> : null}
      
      <h2>Products</h2> <i className="bi bi-plus-circle-fill section-btn " id="add-product" onClick={() => setModalIsOpen(true)}></i>
      
      {Object.keys(products).length > 0 ? (
        <Table tableHeaders={tableHeaders} products={products} setProducts={setProducts} setProduct={setProduct} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      ) : (
        <Message backgroundColor={"#0059ff"} textColor={"#ffffff"} iconClass={"bi bi-exclamation-circle-fill"} text={"No products added yet"} />
      )}
     
      <Modal
        modalIsOpen={modalIsOpen}
        elementToAdd={<Form setModalIsOpen={setModalIsOpen} products={products} setProducts={setProducts} message={message} setMessage={setMessage} product={product} setProduct={setProduct} />}
      />
    </section>
  );
};

export default ProductSection;
