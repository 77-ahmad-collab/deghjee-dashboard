import React from "react";
import Singlebox from "./Singlebox";
import { IoIosPeople } from "react-icons/io";
import { RiListSettingsLine } from "react-icons/ri";
import { IoBasketSharp } from "react-icons/io5";
import { BiCube } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { RiCouponFill } from "react-icons/ri";
import "./Settings.css";
import { NavLink } from "react-router-dom";
const Settings = () => {
  return (
    <div className="setting_body category_body  container-fluid p-2">
      {/* start of setings chil container */}
      <div className="setting_box">
        {/* all single setting boxes as  a components */}
        <NavLink exact to="/staffmember">
          <Singlebox
            title="Staff Members"
            description="Manage your employees and there permission"
            icon={<IoIosPeople />}
          />
        </NavLink>

        <Singlebox
          title="Site Settings"
          description="View and update your Site settingss"
          icon={<RiListSettingsLine />}
        />
        <Singlebox
          title="Add Products"
          description="Add Products from Here"
          icon={<IoBasketSharp />}
        />
        <Singlebox
          title="Add Categories"
          description="Add Categories From Here"
          icon={<BiCube />}
        />
        <Singlebox
          title="Staff Members"
          description="Add Your Staff Members From Here"
          icon={<BsPeopleFill />}
        />
        <Singlebox
          title="Add Coupons "
          description="Add Coupons From Here"
          icon={<RiCouponFill />}
        />

        {/* end of all single setting boxes as  a components */}
      </div>

      {/* end of settings child container */}
    </div>
  );
};

export default Settings;
