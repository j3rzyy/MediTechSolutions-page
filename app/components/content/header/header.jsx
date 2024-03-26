"use client";

import vec from "../../../../public/Vector48.svg";
import Image from "next/image";
import styles from "./header.module.css";
import { getWindowSize } from "../../getWindowSize";

const Header = ({ text }) => {
  const [width, height] = getWindowSize();

  return (
    <div className={styles.wrap}>
      <div className={styles.text}>{text}</div>
      {width > 1100 ? (
        <Image
          src={vec}
          alt={vec.src}
          width={width * 0.85}
          className={styles.pic}
          priority={false}
          style={{ maxWidth: "1335px", maxHeight: "110px" }}
        />
      ) : <Image
        src={vec}
        alt={vec.src}
        className={styles.pic}
        priority={false}
        style={{ maxWidth: "1335px", maxHeight: "110px" }}
      />}
    </div>
  );
};

export default Header;
