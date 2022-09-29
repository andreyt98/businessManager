const Table = ({ tableHeaders, products }) => {
  const headersArray = [];
  const productsArray = [];

  tableHeaders.forEach((element) => {
    headersArray.push(<th key={Math.random().toString(36) + 2000}>{element}</th>);
  });

  products.forEach((element) => {
    productsArray.push(
      <tr key={element.id} data-id={element.id}>
        <td>{element.name}</td>
        <td>{element.cost}</td>
        <td>{element.quantity}</td>
        <td>
          <i className="bi bi-pencil-fill" id="edit-product"></i>
          <i className="bi bi-trash3-fill" id="delete-product"></i>
        </td>
      </tr>
    );
  });

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>{headersArray}</tr>
        </thead>
        <tbody>{productsArray}</tbody>
      </table>
    </div>
  );
};

export default Table;
