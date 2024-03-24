import styles from "./modal.module.css";
import diagram from "../../../../public/Diagram1.png";
import { useEffect, useState } from "react";

const Modal = ({ modal, setModal, content }) => {
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {modal && (
        <div className={styles.modal} onClick={toggleModal}>
          <div className={styles.wrap}>
            <div onClick={(e) => e.stopPropagation()}>
              <img className={styles.content} src={content.src}></img>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
