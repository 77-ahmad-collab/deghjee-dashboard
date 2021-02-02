import React from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { IoBasketSharp } from "react-icons/io5";
import Dashstyles from "./Dashboard.module.css";
export const Singlecard = ({ heading, amount }) => {
  return (
    <div
      className={`${Dashstyles.singlecard_das} d-flex flex-column justify-content-center align-items-center`}
    >
      <div className=" text-success text-center" style={{ fontSize: "40px" }}>
        <IoBasketSharp />
        <br />
        <span>21.2k</span>
      </div>
      <span className="text-success">Impressions</span>
    </div>
  );
};
