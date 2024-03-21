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
        border: "solid 1px #01457A",
        boxShadow:
          "7px 7px 20px #e6e6e6, -7px 7px 20px #e6e6e6, 7px -7px 20px #e6e6e6,-7px -7px 20px #e6e6e6",
        borderRadius: "10px",
        margin: "45px",
        padding: "40px",

        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Image src={vec} width={80} height={80} style={{ flex: "1" }} />

      <div style={{ position: "relative", display: "flex", flex: "3", marginLeft: '30px' }}>
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
            fontWeight: 'bold'
          }}
        >
          ХОБЛ болеют преимущественно мужчины?
        </div>
      </div>

      <div
        style={{ position: "relative", display: "flex", marginLeft: "30px" }}
      >
        <div
          style={{
            fontSize: "23px",
            flex: "7",
            zIndex: "1",
          }}
        >
          В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ»
          (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет, было
          выявлено преобладание...
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: "3",
            boxShadow: "inset 0px -39px 20px white",
          }}
        ></div>
      </div>
    </div>
  );
};

export default InteractiveSlide;
