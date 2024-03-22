import React from "react";
import "./content.css";
import Header from "./header/header";
import ModelItem from "./ModalItem";

import vec from "../../../public/Group2.svg";
import arrow_loop from "../../../public/Vector49.svg";
import arrow_main from "../../../public/Vector50.svg";

const item1 = {
  icon: vec.src,
  arrowIcon1: arrow_loop,
  arrowIcon2: arrow_main,
  text1: "ХОБЛ болеют преимущественно мужчины?",
  text2:
    "В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено преобладание...",
};


const Content = () => {
  return (
    <div className="container">
      {/* <div className="wrapper"> */}
      <div className="part1" style={{ boxSizing: "border-box" }}>
        <Header text={"ХОБЛ: мифы и реальность"} />
        <ModelItem item1={item1} />
        <ModelItem />
      </div>
      <div className="part2"></div>
      {/* </div> */}
    </div>
  );
};

export default Content;
