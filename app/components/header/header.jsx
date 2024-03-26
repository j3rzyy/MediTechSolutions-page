"use client";
import Image from "next/image";
import img1 from "../../../public/Vector45.svg";
import img2 from "../../../public/Vector46.svg";
import img3 from "../../../public/Vector47.svg";
import { getWindowSize } from "../getWindowSize";

const Header = () => {
  const [width] = getWindowSize();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      <Image
        className="item"
        src={img1}
        alt={img1.src}
        width={0.6 * width}
        style={{ zIndex: "3", position: "relative", maxWidth: '3000px', maxHeight: "110px" }}
        priority={false}
      />
      <Image
        className="item"
        src={img2}
        alt={img2.src}
        width={0.4 * width}
        style={{ position: "absolute", left: `${width * 0.33}px`, zIndex: "2", maxWidth: '1000px', maxHeight: "69px" }}
        priority={false}
      />
      <Image
        className="item"
        src={img3}
        alt={img3.src}
        width={0.35 * width}
        style={{ position: "absolute", left: `${width * 0.44}px`, zIndex: "1", maxWidth: '800px', maxHeight: "67px" }}
        priority={false}
      />
    </div>
  );
};

export default Header;
