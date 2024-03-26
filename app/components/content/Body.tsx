import React from "react";
import styles from "./body.module.css";
import Card from "../card/Card";

const Body = () => {
  return (
    <div className={styles.container}>
      <div className={styles.banner1}>
        <h1 className={styles.text1}>
          Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии
        </h1>
      </div>
      <div className={styles.banner2}>
        <h1 className={styles.text2}>
          Приоритетные направления фармакотерапевтической стратегии при ХОБЛ1:
        </h1>
        <div className={styles.wrap}>
          <div className={styles.card}><Card /></div>
          <div className={styles.card}><Card /></div>
          <div className={styles.card}><Card /></div>
        </div>
      </div>
    </div>
  );
};

export default Body;
