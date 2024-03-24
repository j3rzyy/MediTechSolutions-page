import React from "react";
import styles from "./body.module.css";

const Body = () => {
  return (
    <div className={styles.container}>
      <div className={styles.banner1}>
        Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии
      </div>
      <div className={styles.banner2}>
        <div className={styles.temp}></div>
      </div>
    </div>
  );
};

export default Body;
