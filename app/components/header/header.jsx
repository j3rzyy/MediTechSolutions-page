import Image from "next/image";
import React from "react";
// import './style.css'
import img1 from "../../../public/Vector45.svg";
import img2 from "../../../public/Vector46.svg";
import img3 from "../../../public/Vector47.svg";

const svgImg = [
  { id: 1, url: img1, width: 1247, height: 78 },
  { id: 2, url: img2, width: 939, height: 69 },
  { id: 3, url: img3, width: 1039, height: 67 },
];

const Header = ({ params }) => {
  // console.log(params)
  return (

    <div
      style={{
        display: "flex",
        alignSelf: 'flex-start',
        width: '100%',  
      }}
    >
      <Image
        className="item"
        src={svgImg[0].url}
        alt=""
        width={svgImg[0].width}
        height={svgImg[0].height}
        style={{ zIndex: '5', position: 'relative' }}
        priority={false}
      />
      <Image
        className="item"
        src={svgImg[1].url}
        alt=""
        width={svgImg[1].width}
        height={svgImg[1].height}
        style={{ position: "relative", left: '-650px', zIndex: '2' }}
        priority={false}
      />
      <Image
        className="item"
        src={svgImg[2].url}
        alt=""
        width={svgImg[2].width}
        height={svgImg[2].height}
        style={{ position: "relative", left: '-1500px', top: '-8px', zIndex: '1' }}
        priority={false}

      />
    </div>
  );
};

export default Header;
