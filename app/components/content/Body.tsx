"use client";
import styles from "./body.module.css";
import Card from "../card/Card";
import arrowImg from "../../../public/Group8.svg";

import imgCard1 from "../../../public/Group7_1.svg";
import imgCard2 from "../../../public/Group7_2.svg";
import imgCard3 from "../../../public/Group7_3.svg";

import { getWindowSize } from "../getWindowSize";

const cardInfo = [
  {
    icon: imgCard1,
    header: "Ингаляционный антихолинергик",
    text: "Ингибирует бронхоконстрикторные эффекты ацетилхолина, вступая с ним в конкурентный антагонизм за взаимодействие с эффекторными мускариновыми рецепторами, дополняет и потенцирует эффект β2-агонистов1",
  },
  {
    icon: imgCard2,
    header: "Ингаляционный β2-агонист",
    text: "Вызывает бронходилатацию посредством релаксации гладкомышечных клеток бронхов независимо от характера констриктивных стимулов, т. е. выступают в качестве функциональных антагонистов бронхоконстрикции",
  },
  {
    icon: imgCard3,
    header: "Ингаляционный глюкокортикостероид (ИГКС)",
    text: "Снижает частоту обострений, особенно в сочетании с ДДБА, подавляют хроническое воспаление при астме и снижают гиперреактивность дыхательных путей",
  },
  {
    text: "Пациентам с ХОБЛ рекомендуется комбинирование бронходилататоров с разными механизмами действия; Назначение 2-х бронходилататоров из группы длительнодействующих β2-агонистов (ДДБА) и длительнодействующих антихолинергиков (ДДАХ), действие которых дополняет и усиливает друг друга1.",
  },
  {
    text: "Пациентам с ХОБЛ и частыми обострениями (≥2 среднетяжелых обострений в течение 1 года/1 тяжелое обострение, потребовавшее госпитализации) рекомендуется назначение ИГКС в дополнение к ДДБА; Последние исследования показали, что амбулаторное применение ИГКС/ДДБА у пациентов с ХОБЛ снижает госпитальную летальность по сравнению с пациентами, принимавшими только ДДБА (8,1% vs 13,2%)1.",
  },
];

const header1 =
  "Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии";

const header2 =
  "Приоритетные направления фармакотерапевтической стратегии при ХОБЛ1:";

const Body = () => {
  const [width, height] = getWindowSize();

  return (
    <div className={styles.container}>
      <div className={styles.banner1}>
        <h1 className={styles.text1}>{header1}</h1>
      </div>
      <div className={styles.banner2}>
        <h1 className={styles.text2}>{header2}</h1>
        <div className={styles.wrap}>
          <div className={styles.cardType1}>
            <Card data={cardInfo[0]} />
          </div>
          <div className={styles.cardType1}>
            <Card data={cardInfo[1]} />
          </div>
          <div className={styles.cardType1}>
            <Card data={cardInfo[2]} />
          </div>
        </div>

        <div className={styles.wrapArrow}>
          {width > 1398 && (
            <>
              <img src={arrowImg.src} alt={arrowImg.src}></img>
              <img src={arrowImg.src} alt={arrowImg.src}></img>
            </>
          )}
        </div>

        <div className={styles.wrap}>
          <div className={styles.cardType2}>
            <Card data={cardInfo[3]} />
          </div>
          <div className={styles.cardType2}>
            <Card data={cardInfo[4]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
