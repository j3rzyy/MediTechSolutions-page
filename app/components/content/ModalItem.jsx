"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Modal from "./modal/Modal.jsx";
import style from "./modalItem.module.css";

const ModalItem = (props) => {
  const data = props.data;

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  // console.log(data.icon);

  return (
    <>
      <div className={style.container} onClick={toggleModal}>
        <Image
          priority={false}
          alt={data.icon.src}
          src={data.icon}
          max-width={data.icon.width}
          max-height={data.icon.height}
        />

        <div className={style.arrowWrap}>
          <Image
            priority={false}
            alt={data.arrowIcon1.src}
            src={data.arrowIcon1}
            max-width={data.arrowIcon1.width}
            max-height={data.arrowIcon1.height}
            style={{ position: "relative", zIndex: "1" }}
          />
          <Image
            priority={false}
            alt={data.arrowIcon2.src}
            src={data.arrowIcon2}
            max-width={data.arrowIcon1.width}
            max-height={data.arrowIcon1.height}
            style={{ position: "absolute", left: "0px" }}
          />
          <div className={style.arrowText}>{data.text1}</div>
        </div>

        <div className={style.textWrap}>
          <div className={style.blockText}>{data.text2}</div>
          <div className={style.blockShadow}></div>
        </div>
      </div>
      <Modal modal={modal} setModal={setModal} content={data.content} />
    </>
  );
};

export default ModalItem;
