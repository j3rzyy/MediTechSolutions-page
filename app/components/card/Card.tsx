import styles from "./card.module.css";
import img1 from "../../../public/Group7.svg";
import Image from "next/image";

const Card = ({ data }) => {
  return (
    <div className={styles.container}>
      {/* <div>{data.icon.src}</div> */}
      {data.icon ? (
        <>
          <Image src={data.icon} alt={data.icon.src}></Image>{" "}
          <div className={styles.wrap}>
            <div className={styles.header}>{data.header}</div>
            <div className={styles.text}>{data.text}</div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.wrap}>
            <div className={styles.text}>{data.text}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
