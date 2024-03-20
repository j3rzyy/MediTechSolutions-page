import React from "react";
import "./content.css";
import Header from "./header/header";
import InteractiveSlide from "./interactiveSlide";

const Content = () => {
  return (
    <div className="container">
      {/* <div className="wrapper"> */}
      <div className="part1" style={{boxSizing: 'border-box'}}>
        <Header text={"ХОБЛ: мифы и реальность"} />
        <InteractiveSlide />
      </div>
      <div className="part2"></div>
      {/* </div> */}
    </div>
  );
};

export default Content;
