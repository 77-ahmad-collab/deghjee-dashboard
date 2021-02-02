import axios from "axios";
import { FETCHCOUPONSDATA } from "../Dashboard/Reduxstore/Action";
export const Fetchcoupondata = () => {
  return async (dispatch, getState) => {
    const response = await axios.get(
      "http://damp-headland-05751.herokuapp.com/coupons"
    );
    // console.log(response, "coupon api data");
    // console.log(response, "response");
    const data = await response.data;
    // console.log(data, "api data");
    dispatch({ type: FETCHCOUPONSDATA, payload: data });
  };
};
