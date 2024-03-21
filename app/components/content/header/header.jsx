import React from "react";
import vec from "../../../../public/Vector48.svg";
import Image from "next/image";

const Header = ({ text }) => {
  return (
    <div style={{ display: "flex", height: "110px", width: "1335px" }}>
      <div
        style={{
          width: "1335",
          height: "110",
          position: "absolute",
          zIndex: "2",
          marginTop: "20px",
          marginLeft: "45px",
          fontSize: "40px",
          fontWeight: "bold",
        }}
      >
        {text}
      </div>
      <Image
        src={vec}
        alt=""
        width={1335}
        height={110}
        style={{ zIndex: "1 ", position: "relative" }}
        priority={false}
      />
    </div>
  );
};

export default Header;
