import React, { useState } from "react";
import Sidestyle from "./sidebar.module.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

import { AiOutlineAppstore } from "react-icons/ai";
import { IoBasketSharp } from "react-icons/io5";
import { BiCube } from "react-icons/bi";
import { MdNoteAdd } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { RiCouponFill } from "react-icons/ri";
import { AiOutlineSetting } from "react-icons/ai";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";
import { CLOSE, CLOSE_ADD, CLOSE_SIDEBAR } from "../Reduxstore/Action";
import { connect, useDispatch } from "react-redux";

const Sidebaritems = ({ show }) => {
  const dispatch = useDispatch();
  return (
    <section
      className="body_bar"
      onClick={() => {
        dispatch({ type: CLOSE });
        dispatch({ type: CLOSE_ADD });
        dispatch({ type: CLOSE_SIDEBAR });
      }}
    >
      <div
        className={`${Sidestyle.sidebar} ${
          show ? `${Sidestyle.show}` : `${Sidestyle.hide}`
        }`}
      >
        <div className={Sidestyle.close}>
          <span
            style={{ fontSize: "40px" }}
            onClick={() => dispatch({ type: CLOSE_SIDEBAR })}
          >
            <IoMdCloseCircle />
          </span>
        </div>
        <div className={`${Sidestyle.side_menuitems} pt-3`}>
          <NavLink
            activeClassName={Sidestyle.active_menu_item}
            className={`${Sidestyle.single_menuitem} py-3  pl-4"`}
            exact
            to="/dashboard"
          >
            <span className={`ml-3 mr-4 ${Sidestyle.menu_icon}`}>
              <AiOutlineAppstore />
            </span>
            Dashboard
          </NavLink>
          <NavLink
            activeClassName={Sidestyle.active_menu_item}
            className={`${Sidestyle.single_menuitem} py-3  pl-4"`}
            exact
            to="/products"
          >
            <span className={`mr-4 ml-3 ${Sidestyle.menu_icon}`}>
              <IoBasketSharp />
            </span>
            Product
          </NavLink>
          <NavLink
            activeClassName={Sidestyle.active_menu_item}
            className={`${Sidestyle.single_menuitem} py-3  pl-4"`}
            exact
            to="/category"
          >
            <span className={`mr-4 ml-3 ${Sidestyle.menu_icon}`}>
              <BiCube />
            </span>
            Category
          </NavLink>
          <NavLink
            activeClassName={Sidestyle.active_menu_item}
            className={`${Sidestyle.single_menuitem} py-3  pl-4"`}
            exact
            to="/orders"
          >
            <span className={`mr-4 ml-3 ${Sidestyle.menu_icon}`}>
              <MdNoteAdd />
            </span>
            Orders
          </NavLink>
          <NavLink
            activeClassName={Sidestyle.active_menu_item}
            className={`${Sidestyle.single_menuitem} py-3  pl-4"`}
            exact
            to="/customers"
          >
            <span className={`mr-4 ml-3 ${Sidestyle.menu_icon}`}>
              <IoIosPeople />
            </span>
            Customers
          </NavLink>
          <NavLink
            activeClassName={Sidestyle.active_menu_item}
            className={`${Sidestyle.single_menuitem} py-3  pl-4"`}
            exact
            to="/coupons"
          >
            <span className={`mr-4 ml-3 ${Sidestyle.menu_icon}`}>
              <RiCouponFill />
            </span>
            Coupons
          </NavLink>
          {/* <NavLink
            activeClassName="active_menu_item"
            className="single_menuitem py-4  pl-4 "
            exact
            to="/settings"
          >
            <span className="mr-4 menu_icon">
              <AiOutlineSetting />
            </span>
            Settings
          </NavLink> */}
        </div>
        <NavLink
          to=""
          className={`${Sidestyle.single_menuitem} py-3 ${Sidestyle.logout} pl-4  `}
          style={{ marginLeft: "20px" }}
        >
          <span className={`mr-2 ${Sidestyle.menu_icon}`}>
            <RiLogoutBoxRLine />
          </span>
          Logout
        </NavLink>
      </div>
    </section>
  );
};
function mapStateToProps({ addslider: { isopensidebar } }) {
  return {
    show: isopensidebar,
  };
}
export default connect(mapStateToProps)(Sidebaritems);
