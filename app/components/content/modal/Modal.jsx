import "./modal.css";
import diagram from "../../../../public/Diagram1.png";
import { useEffect, useState } from "react";


const Modal = ({ modal, setModal }) => {
    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }


    return (
        <>
            {modal && <div className="modal" onClick={toggleModal}>
                <div className="wrap">
                    <div className="content" onClick={e => e.stopPropagation()}><img src={diagram.src}></img></div>
                </div>
            </div>}

        </>
    );
};

export default Modal;
