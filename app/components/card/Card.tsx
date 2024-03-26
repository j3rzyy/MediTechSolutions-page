import styles from "./card.module.css";
import img1 from "../../../public/Group7.svg";
import Image from "next/image";

const Card = () => {
  return (
    <div className={styles.container}>
      <Image src={img1} alt="img1"></Image>
      <div className={styles.wrap}>
        <div>Ингаляционный <strong>антихолинергик</strong></div>
        <div className={styles.text}>
          Ингибирует бронхоконстрикторные эффекты ацетилхолина, вступая с ним в
          конкурентный антагонизм за взаимодействие с эффекторными мускариновыми
          рецепторами, дополняет и потенцирует эффект β2-агонистов1
        </div>
      </div>
    </div>
  );
};

export default Card;
