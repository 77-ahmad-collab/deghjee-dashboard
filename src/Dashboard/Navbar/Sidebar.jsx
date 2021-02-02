import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Sidebaritems from "./Sidebaritems";
import Dashboard from "../Components/Dashboard/Dashboard";
import Products from "../Components/Products/Products";
import Category from "../Components/Category/Categories";
import Orders from "../Components/Orders/Orders";
import Customers from "../Components/Customers/Customers";
import Coupons from "../Components/Coupons/Coupons";
// import Settings from "../Components/Settings/Settings";
import { connect } from "react-redux";
import Addcategory from "../Components/Category/AddCategory";
import Staffmember from "../Components/Settings/Staffmember";
const Sidebar = () => {
  return (
    <div>
      <Sidebaritems />
      <Switch>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/category">
          <Category />
        </Route>
        <Route exact path="/orders">
          <Orders />
        </Route>
        <Route exact path="/customers">
          <Customers />
        </Route>
        <Route exact path="/coupons">
          <Coupons />
        </Route>
        {/* <Route exact path="/settings">
          <Settings />
        </Route> */}
        <Route exact path="/staffmember">
          <Staffmember />
        </Route>
        <Redirect to="/dashboard" />
      </Switch>
    </div>
  );
};

export default connect()(Sidebar);
