import React from "react";
import { useState, useEffect, useContext } from "react";
import Message from "./Message";
import { Context } from "../context/Context";



const Form = () => {

  const {products,setProducts,product,setProduct,setModalIsOpen,setSuccessMessage} = useContext(Context);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [quantity, setQuantity] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);


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
        setSuccessMessage(true);
      } else {

        const id = Date.now().toString(36) + Math.random().toString(36).slice(2);
        setProducts([...products, { id, name, cost, quantity }]);
        
        setModalIsOpen(false);
        setName("");
        setCost("");
        setQuantity("");
        setSuccessMessage(true);
      }
    } else {
      setErrorMessage(true);
      setTimeout(() => {
        setErrorMessage(false)
      }, 3000);
    }

  };

  const handleCancel = () => {
    setModalIsOpen(false);
    setProduct({});
  };

  return (
    <>
      {errorMessage && <Message type={"error"}/>}

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

      </>
  );
};

export default Form;
