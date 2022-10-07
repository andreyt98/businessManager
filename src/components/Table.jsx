import { useEffect } from "react";
const Table = ({ tableHeaders, products, setProducts, setModalIsOpen, setProduct }) => {

  useEffect(() => {
    localStorage.removeItem("products");
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  function handleDelete(id) {
    products.forEach((element) => {
      if (id === element.id) {
        const newArray = products.filter((e) => e.id !== element.id);

        setProducts(newArray);
      }
    });
  }

  function handleEdit(id){

    products.forEach((product) => {
      if(product.id===id){
        setModalIsOpen(true);
        setProduct(product)
      }
    })

  }
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {tableHeaders.map((element) => {
              return <th key={Math.random().toString(36) + 2000}>{element}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {products.map((element) => {
            return (
              <tr key={element.id} data-id={element.id}>
                <td>{element.name}</td>
                <td>{element.cost}</td>
                <td>{element.quantity}</td>
                <td>
                  <i className="bi bi-pencil-fill" id="edit-product" onClick={()=>{handleEdit(element.id)}}></i>
                  <i className="bi bi-trash3-fill" id="delete-product" onClick={() => handleDelete(element.id)}></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
