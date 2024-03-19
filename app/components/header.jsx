import Image from "next/image";
import React from "react";
import img1 from "../../public/Vector45.svg";

const Header = () => {
  return (
    <div>
      Header
      <Image src={img1} alt="" width={1247} height={77} />
    </div>
  );
};

export default Header;
