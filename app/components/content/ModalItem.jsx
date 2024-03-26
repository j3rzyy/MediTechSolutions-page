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

  return (
    <div style={{ position: "relative" }}>
      <Image
        key={data.clickIcon.src}
        priority={false}
        alt={data.clickIcon.src}
        src={data.clickIcon}
        style={{
          position: "absolute",
          right: "2%",
          top: "-10%",
          cursor: "pointer",
        }}
        onClick={toggleModal}
      />

      <div className={style.container}>
        <Image
          priority={false}
          alt={data.icon.src}
          src={data.icon}
        />

        <div className={style.arrowWrap}>
          <Image
            priority={false}
            alt={data.arrowIcon1.src}
            src={data.arrowIcon1}
            style={{ position: "relative", zIndex: "1" }}
          />
          <Image
            priority={false}
            alt={data.arrowIcon2.src}
            src={data.arrowIcon2}
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
    </div>
  );
};

export default ModalItem;
