"use client";

import { useEffect, useState } from "react";
import vec from "../../../../public/Vector48.svg";
import Image from "next/image";
import styles from "./header.module.css";

const Header = ({ text }) => {


  return (
    <div className={styles.wrap}>
      <div className={styles.text}>{text}</div>
      <Image
        src={vec}
        alt={vec.src}
        className={styles.pic}
        priority={false}
      />
    </div>
  );
};

export default Header;
