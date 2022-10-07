import PortalReactDOM from "react-dom";

const Modal = ({ modalIsOpen, elementToAdd }) => {
  if (!modalIsOpen) return null;

  return PortalReactDOM.createPortal(
    <div className="modal">
      <div className="modal__content">{elementToAdd}</div>
    </div>,
    document.querySelector("#portal-for-modal")
  );
};

export default Modal;
