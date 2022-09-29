import PortalReactDOM from 'react-dom'

import Form from "./Form";

const Modal = ({modalIsOpen, setModalIsOpen, products}) => {

    if(!modalIsOpen) return null;

    return (
        PortalReactDOM.createPortal( <Form setModalIsOpen={setModalIsOpen} products={products}/>,
        document.querySelector("#portal-for-modal"))    
    )
}

export default Modal;