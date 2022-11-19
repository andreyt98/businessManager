import React from "react";
import { useState, useEffect } from "react";
const Sale = ({ products, sales, setSales }) => {
  
  const [currentProduct, setCurrentProduct] = useState({});

  const [productQuantity, setProductQuantity] = useState(1);
  let [productTotal, setProductTotal] = useState(0);

  function handleSelectingProduct(e) {
    products.forEach((element) => {
      if (element.id == e.target.value) {
        setCurrentProduct(element);
        setProductQuantity(1);
        setProductTotal(Number(element.cost));
      }
    });
  }

  function handleSell(){
    if(Object.keys(currentProduct).length>0){

      const newSale = {
        id: Date.now().toString(36) + Math.random().toString(36).slice(2),
        name: currentProduct.name, 
        productQuantity,
        productTotal
      }
      setSales([...sales,newSale])
  
    }
  }

  useEffect(()=>{
    localStorage.setItem("sales", JSON.stringify(sales))
  },[sales])

  return (
    <div className="sale">

      <label htmlFor="currentSale">
        Select a product{" "}
        <select
          name="sales"
          id="currentSale"
          onChange={(event) => {
            handleSelectingProduct(event);
          }}
        >
          <option value="" selected disabled>
            ...
          </option>
          {products.map((e) => {
            return (
              <option value={e.id} key={e.id}>
                {" "}
                {e.name}{" "}
              </option>
            );
          })}
        </select>
      </label>

      {Object.keys(currentProduct).length > 0 ? (
        <>
        <label htmlFor="productQuantity">
          Choose quantity ({currentProduct.quantity} in stock): {" "} 
          <span>
            <i className="bi bi-dash-circle-fill section-btn"
              onClick={() => {
                if (productQuantity > 1) {
                  setProductQuantity(productQuantity - 1);
                  if (productTotal > currentProduct.cost) {
                    setProductTotal((productTotal -= Number(currentProduct.cost)));
                  }
                }
              }}
            ></i>
            <span className="marked"> {productQuantity} </span>
            <i className="bi bi-plus-circle-fill section-btn"
              onClick={() => {
                if (productQuantity < currentProduct.quantity) {
                  setProductQuantity(productQuantity + 1);
                  setProductTotal((productTotal += Number(currentProduct.cost)));
                }
              }}
              ></i>
            </span>
            </label>
        </>
      ) : null}

      <h2>TOTAL: {"$" + productTotal} </h2>

      <div className="form__options">
        <button id="create-product" onClick={() => {handleSell()}}>Confirm</button>
      </div>
    </div>
  );
};

export default Sale;
