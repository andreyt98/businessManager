import { useContext } from "react";
import Sale from "./Sale";
import Message from "./Message";
import { Context } from "../context/Context";

const SaleSection = () => {
  const { products } = useContext(Context);

  return (
    <section id="saleSection">
      <h2>Sale</h2>
      {Object.keys(products).length > 0 ? <Sale /> : <Message type={"warning"} />}
    </section>
  );
};

export default SaleSection;
