import PortalReactDOM from "react-dom";

import Form from "./Form";

const Modal = ({ modalIsOpen, setModalIsOpen, products, setProducts, message, setMessage,product, setProduct }) => {
  if (!modalIsOpen) return null;

  return PortalReactDOM.createPortal(
    <Form  setModalIsOpen={setModalIsOpen} products={products} setProducts={setProducts} message={message} setMessage={setMessage} product={product} setProduct={setProduct}/>,
    document.querySelector("#portal-for-modal")
  );
};

export default Modal;
