import React from "react";

const handleSubmit = (evt) => {
  evt.preventDefault();
};

const Form = ({ setModalIsOpen, products }) => {
 
  return (
    <div className="modal">
      <form action="" className="form-new-product" onSubmit={(evt) => handleSubmit(evt)}>
        <h2 id="form-header">New product</h2>

        <label htmlFor="name">
          Name
          <input type="text" id="name" placeholder="Product name" autoComplete="off"  />
        </label>

        <label htmlFor="name">
          Cost
          <input type="number" min="1" id="cost" placeholder="Cost per item" autoComplete="off"  />
        </label>

        <label htmlFor="quantity">
          Quantity
          <input type="number" min="1" id="quantity" placeholder="How many of this product?" autoComplete="off"  />
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
