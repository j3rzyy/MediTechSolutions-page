"use client";

import { useEffect, useState } from "react";
import vec from "../../../../public/Vector48.svg";
import Image from "next/image";
import styles from "./header.module.css";

// const useWindowSize = () => {
//   const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

//   useEffect(() => {
//     const resizeHandler = () => setSize([window.innerWidth, window.innerHeight]);
//     window.addEventListener('resize', resizeHandler);
//     return () => window.removeEventListener('resize', resizeHandler);
//   }, []);

//   return size;
// };

const Header = ({ text }) => {
  // const [width, height] = useWindowSize();
  return (
    <div className={styles.wrap}>
      <div className={styles.text}>{text}</div>
      <Image
        src={vec}
        alt={vec.src}
        width={vec.width}
        height={vec.height}
        className={styles.pic}
        priority={false}
      />
    </div>
  );
};

export default Header;
