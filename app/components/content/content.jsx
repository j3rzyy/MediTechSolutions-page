import "./content.css";
import Header from "./header/header";
import ModelItem from "./ModalItem";

import vec1 from "../../../public/Group2.svg";
import vec2 from "../../../public/Group1.svg";
import arrow_loop from "../../../public/Vector49.svg";
import arrow_main from "../../../public/Vector50.svg";
import diagram1 from "../../../public/Diagram1.png";
import diagram2 from "../../../public/Diagram2.png";
import Body from "./Body";

const data = [
  {
    icon: vec1,
    arrowIcon1: arrow_loop,
    arrowIcon2: arrow_main,
    arrowIconLoop: arrow_loop,
    arrowIconMain: arrow_main,
    text1: "ХОБЛ болеют преимущественно мужчины?",
    text2:
      "В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено преобладание...",
    content: diagram1,
  },
  {
    icon: vec2,
    arrowIcon1: arrow_loop,
    arrowIcon2: arrow_main,
    text1: "Опасно не наличие заболевания, а обострения?",
    text2:
      "Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение...",
    content: diagram2,
  },
];

const textHeader1 = "ХОБЛ: мифы и реальность";
const textHeader2 = "Терапия ХОБЛ: что в фокусе?";

const Content = () => {
  return (
    <div className="container">
      <div className="part1" style={{ boxSizing: "border-box" }}>
        <Header text={textHeader1} />
        {data && data.map((el) => <ModelItem data={el} />)}
      </div>
      <div className="part2">
        <Header text={textHeader2} />
        <Body />
      </div>
    </div>
  );
};

export default Content;
