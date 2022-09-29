import Table from "./Table";
import Modal from "./Modal";
import { useState } from "react";

const ProductSection = () => {
  const tableHeaders = ["Name", "Cost", "Quantity", ""]; 
  let products = JSON.parse(localStorage.getItem("products")) || [];

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <section id="product-section">
      <h2>Products</h2>

      <i className="bi bi-plus-circle-fill" id="add-product" onClick={() => setModalIsOpen(true)}></i>

      <Table
        tableHeaders={tableHeaders}
        products={products}
      />

      <Modal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} products={products}/>
      
    </section>
  );
};

export default ProductSection;
