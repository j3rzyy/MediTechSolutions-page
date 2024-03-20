import Image from "next/image";
import React from "react";
import vec from "../../../public/Group2.svg";
import arrow_loop from "../../../public/Vector49.svg";
import arrow_main from "../../../public/Vector50.svg";

const InteractiveSlide = () => {
  return (
    // <div
    //   style={{
    //     width: "1290px",
    //     border: "solid 1px #01457A",
    //     borderRadius: "10px",
    //     margin: "45px",
    //     display: "flex",
    //     justifyContent: 'space-around'
    //   }}
    // >
    //   <Image
    //     src={vec}
    //     width={80}
    //     height={80}
    //     style={{ margin: "45px", marginRight: "30px" }}
    //   />

    //   <div
    //     style={{ padding: "45px", paddingLeft: "0px", position: "relative" }}
    //   >
    //     <Image
    //       src={arrow_loop}
    //       width={297}
    //       height={116}
    //       style={{ position: "relative", zIndex: "1" }}
    //     />
    //     <Image
    //       src={arrow_main}
    //       width={295}
    //       height={115}
    //       style={{ position: "absolute", left: "0px" }}
    //     />
    //     <div
    //       style={{
    //         fontSize: "25px",
    //         width: "250px",
    //         position: "absolute",
    //         top: "50px",
    //       }}
    //     >
    //       ХОБЛ болеют преимущественно мужчины?
    //     </div>
    //   </div>

    //   <div
    //     style={{
    //       marginTop: "45px",
    //       marginRight: "45px",
    //       marginBottom: "45px",
    //       fontSize: "",
    //       flex: "4",
    //     }}
    //   >
    //     В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene)
    //     среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено
    //     преобладание...
    //   </div>
    // </div>
    <div
      style={{
        width: "1290px",
        border: "solid 1px #01457A",
        borderRadius: "10px",
        margin: "45px",
        padding: '45px',

        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Image src={vec} width={80} height={80} style={{flex: '1'}} />

      <div
        style={{ position: "relative", display: 'flex',flex: '3' }}
      >
        <Image
          src={arrow_loop}
          width={297}
          height={116}
          style={{ position: "relative", zIndex: "1" }}
        />
        <Image
          src={arrow_main}
          width={295}
          height={115}
          style={{ position: "absolute", left: "0px" }}
        />
        <div
          style={{
            fontSize: "25px",
            width: "250px",
            position: "absolute",
          }}
        >
          ХОБЛ болеют преимущественно мужчины?
        </div>
      </div>

      <div
        style={{
          fontSize: "",
          flex: '5'
        }}
      >
        В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene)
        среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено
        преобладание...
      </div>
    </div>
  );
};

export default InteractiveSlide;
