import React from "react";
import { useState, useEffect } from "react";
import Message from "./Message";

const Form = ({ setModalIsOpen, products, setProducts, message, setMessage, product, setProduct }) => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    if (Object.keys(product).length > 0) {
      setName(product.name);
      setCost(product.cost);
      setQuantity(product.quantity);
    }
  }, [product]);

  const handleSubmit = (evt, name, cost, quantity) => {
    evt.preventDefault();

    if (![name, cost, quantity].includes("")) {
      if (Object.keys(product).length > 0) {
        const actualizacion = products.map((elemento) => (elemento.id === product.id ? { id: product.id, name, cost, quantity } : elemento));

        setProducts(actualizacion);
        setModalIsOpen(false);
        setName("");
        setCost("");
        setQuantity("");
        setMessage({ active: true, type: "success" });
      } else {

        const id = Date.now().toString(36) + Math.random().toString(36).slice(2);
        setProducts([...products, { id, name, cost, quantity }]);
        
        setModalIsOpen(false);
        setName("");
        setCost("");
        setQuantity("");
        setMessage({ active: true, type: "success" });
      }
    } else {
      setMessage({ active: true, type: "error" });
    }

  };

  const handleCancel = () => {
    setModalIsOpen(false);
    setProduct({});
  };

  return (
    <>
      <form action="" className="form-new-product" onSubmit={(evt) => handleSubmit(evt, name, cost, quantity)}>
        <h2 id="form-header"> {product.name ? "Edit Product" : "New product"}</h2>

        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            placeholder="Product name"
            autoComplete="off"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>

        <label htmlFor="name">
          Cost
          <input
            type="number"
            min="1"
            id="cost"
            placeholder="Cost per item"
            autoComplete="off"
            value={cost}
            onChange={(e) => {
              setCost(e.target.value);
            }}
          />
        </label>

        <label htmlFor="quantity">
          Quantity
          <input
            type="number"
            min="1"
            id="quantity"
            placeholder="How many of this product?"
            autoComplete="off"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
        </label>

        <div className="form__options">
          <button type="submit" id="create-product">
            {Object.keys(product).length > 0 ? "Update" : " Create"}
          </button>
          <button type="button" id="cancel" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>

      {message && message.type === "error" ? <Message backgroundColor={"#F8D7DA"} textColor={"brown"} iconClass={"bi bi-x-circle-fill"} text={"Please fill all fields"} /> : null}
      </>
  );
};

export default Form;
