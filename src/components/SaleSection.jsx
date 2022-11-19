import { useState } from "react";
import Sale from "./Sale";
import Message from "./Message";

const SaleSection = ({ products, setModalIsOpen }) => {
  const [sales, setSales] = useState(JSON.parse(localStorage.getItem("sales")) || []);

  return (
    <section id="saleSection">
      <h2>Sale</h2>{" "}
      {Object.keys(products).length > 0 ? (
        <Sale products={products} setModalIsOpen={setModalIsOpen} sales={sales} setSales={setSales} />
      ) : (
        <Message backgroundColor={"#0059ff"} textColor={"#ffffff"} iconClass={"bi bi-exclamation-circle-fill"} text={"Add at least one product to make a sell"} />
      )}
    </section>
  );
};

export default SaleSection;
