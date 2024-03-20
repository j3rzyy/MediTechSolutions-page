import React from "react";
import "./content.css";
import Header from "./header/header";

const Content = () => {
    return (
        <div className="container">
            {/* <div className="wrapper"> */}
            <div className="part1">
                <Header text={"ХОБЛ: мифы и реальность"} />
            </div>
            <div className="part2"></div>
            {/* </div> */}
        </div>
    );
};

export default Content;
