import React from "react";
// import "./Dashboard.css";
import Catstyles from "../Category/Categories.module.css";
import Dashstyles from "./Dashboard.module.css";
import { Singlecard } from "./Singlecard";
const Dashboard = () => {
  return (
    <div
      className={`setbody ${Catstyles.category_body} ${Dashstyles.dashboardbody}`}
    >
      <div>
        <h4>Analytics Overview</h4>
      </div>
      <div className={Dashstyles.dashboardcards}>
        <Singlecard heading="total order" amount="20" />
        <Singlecard heading="total amount" amount="4520" />
      </div>
    </div>
  );
};

export default Dashboard;
