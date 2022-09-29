import React from "react";
import { useState } from "react";

const handleSubmit = (evt) => {
  evt.preventDefault();
};

const Form = ({ setModalIsOpen, products }) => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [quantity, setQuantity] = useState("");

  return (
    <div className="modal">
      <form action="" className="form-new-product" onSubmit={(evt) => handleSubmit(evt, name,cost,quantity)}>
        <h2 id="form-header">New product</h2>

        <label htmlFor="name">
          Name
          <input type="text" id="name" placeholder="Product name" autoComplete="off" value={name} onChange={(e) => {setName(e.target.value)}} />
        </label>

        <label htmlFor="name">
          Cost
          <input type="number" min="1" id="cost" placeholder="Cost per item" autoComplete="off" value={cost} onChange={(e) => {setCost(e.target.value)}} />
        </label>

        <label htmlFor="quantity">
          Quantity
          <input type="number" min="1" id="quantity" placeholder="How many of this product?" autoComplete="off" value={quantity} onChange={(e) => {setQuantity(e.target.value)}} />
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
    </div>
  );
};

export default Form;
