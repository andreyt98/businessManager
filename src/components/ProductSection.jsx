import Table from "./Table";
import Modal from "./Modal";
import Message from "./Message";
import Form from "./Form";

import { useEffect, useContext } from "react";
import { Context } from "../context/Context";

const ProductSection = () => {
  const { products, successMessage, setSuccessMessage, setModalIsOpen } = useContext(Context);

  const tableHeaders = ["Name", "Cost", "Quantity", ""];

  useEffect(() => {
    setTimeout(() => {
      setSuccessMessage(false);
    }, 3000);
  }, [products]);

  return (
    <section id="product-section">
      {successMessage && <Message type={"success"} />}
      
      <h2>Products</h2> <i className="bi bi-plus-circle-fill section-btn " id="add-product" onClick={() => setModalIsOpen(true)}></i>
      
      {Object.keys(products).length > 0 ?
       <Table tableHeaders={tableHeaders} /> 
        :
       <Message type={"warning"} />
      }

      <Modal elementToAdd={<Form />} />
    
    </section>
  );
};

export default ProductSection;
