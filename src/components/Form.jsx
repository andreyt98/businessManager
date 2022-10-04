import React from "react";
import { useState, useEffect } from "react";
import Message from "./Message";

const Form = ({ setModalIsOpen, products, setProducts, message, setMessage }) => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleSubmit = (evt, name, cost, quantity) => {
    evt.preventDefault();

    if (![name, cost, quantity].includes("")) {
      const id = Date.now().toString(36) + Math.random().toString(36).slice(2);

      setProducts([...products, { id, name, cost, quantity }]);

      setName("");
      setCost("");
      setQuantity("");
      setModalIsOpen(false);
      setMessage({ active: true, type: "success" });

    } else {
      setMessage({ active: true, type: "error" });
    }
  };

  return (
    <div className="modal">
      <form action="" className="form-new-product" onSubmit={(evt) => handleSubmit(evt, name, cost, quantity)}>
        <h2 id="form-header">New product</h2>

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
            Create
          </button>
          <button type="button" id="cancel" onClick={() => setModalIsOpen(false)}>
            Cancel
          </button>
        </div>
      </form>

      {message && message.type === "error" ? <Message backgroundColor={"#F8D7DA"} textColor={"brown"} iconClass={"bi bi-x-circle-fill"} text={"Please fill all fields"} /> : null}
    </div>
  );
};

export default Form;
