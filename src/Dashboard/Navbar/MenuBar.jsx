import React from "react";
import Stylemenum from "./Menubar.module.css";
import Sidestyle from "./sidebar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { OPEN_ADD, CLOSE_ADD, OPEN_SIDEBAR } from "../Reduxstore/Action";
// import { IoMdNotificationsOutline } from "react-icons/io";
import { connect, useDispatch } from "react-redux";
import Addproducts from "./Addproducts";
import LOGO from "../../logo.png";
//import { GiHamburgerMenu } from "react-icons/gi";
// import { useState } from "react";
const MenuBar = ({ add, myshowslider, nextslider }) => {
  // const [show, setshow] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className={Stylemenum.menubar_body}>
      {/*  ${myshowslider ? "showopacity" : "hideopacity"} */}
      <div
        className={`${Stylemenum.opacityfix}  ${
          myshowslider
            ? `${Stylemenum.showopacity}`
            : `${Stylemenum.hideopacity}`
        } `}
      ></div>
      <div
        className={`${Stylemenum.opacityfix}  ${
          nextslider ? `${Stylemenum.showopacity}` : `${Stylemenum.hideopacity}`
        } `}
      ></div>
      <img
        src={LOGO}
        alt="logo"
        width="130px"
        height="50px"
        className={`ml-5 ${Stylemenum.logo}`}
      />
      <span
        className={Sidestyle.hamburger}
        onClick={() => {
          dispatch({ type: CLOSE_ADD });
          dispatch({ type: OPEN_SIDEBAR });
        }}
      >
        <GiHamburgerMenu />
      </span>
      <div className={`${Stylemenum.menu_grouped_items} mr-5`}>
        <button className={Stylemenum.add_menubtn} onClick={add}>
          Add Products
        </button>
        {/* <span
          className="notification_icon"
          style={{ fontSize: "30px" }}
          onClick={() => setshow(!show)}
        >
          <IoMdNotificationsOutline />
          <Dot />
        </span> */}
        {/* {show && <Popup />} */}
      </div>
      <Addproducts />
    </div>
  );
};
// const Dot = () => {
//   return <div className="dot"></div>;
// };
// const Popup = () => {
//   return (
//     <div className="popup ">
//       <div className="pophead d-flex justify-content-between px-3 py-2">
//         <h6
//           className="pt-3 pl-3"
//           style={{
//             color: "#30475e",
//             fontWeight: "bold",
//             fontSize: "20px",
//             fontFamily: "Roboto,sans-serif",
//           }}
//         >
//           Notification
//         </h6>
//         <p className="text-danger" style={{ fontWeight: "bold" }}>
//           Clear all
//         </p>
//       </div>
//       <div className="popbody pl-3">
//         <h6
//           className="mt-4 pl-3"
//           style={{
//             color: "#30475e",
//             fontWeight: "bold",
//             fontSize: "20px",
//             fontFamily: "Roboto,sans-serif",
//           }}
//         >
//           Delivery Sucessful
//         </h6>
//         <p
//           className="pl-3"
//           style={{ fontWeight: "bold", fontFamily: "Roboto,sans-serif" }}
//         >
//           Order #35467 has been placed sucessfully
//         </p>
//       </div>
//       <p className="text-center text-success mt-2 ">
//         <strong>More Feeds</strong>
//       </p>
//     </div>
//   );
// };
function mapStateToProps({ addslider, slider }) {
  // const {showslider} = addslider;
  return {
    myshowslider: addslider.showslider,
    nextslider: slider.showslider,
  };
}
function mapDispatchToProps(dispatch) {
  return { add: () => dispatch({ type: OPEN_ADD }) };
}
export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
