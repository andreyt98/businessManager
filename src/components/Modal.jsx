import { useContext } from "react";
import PortalReactDOM from "react-dom";
import { Context } from "../context/Context";

const Modal = ({elementToAdd }) => {
  const { modalIsOpen } = useContext(Context);

  if (!modalIsOpen) return null;
  
  return PortalReactDOM.createPortal(
    <div className="modal">
      <div className="modal__content">{elementToAdd}</div>
    </div>,
    document.querySelector("#portal-for-modal")
  );
};

export default Modal;
