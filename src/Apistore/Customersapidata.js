import axios from "axios";
import { CUSTOMERDATA } from "../Dashboard/Reduxstore/Action";
export const Fetchcustomerdata = () => {
  return async (dispatch, getState) => {
    const response = await axios.get(
      "http://damp-headland-05751.herokuapp.com/show/customers"
    );
    // console.log(response, "coupon api data");
    // console.log(response, "response");
    const data = await response.data;
    console.log(data, "custoemr data");
    dispatch({ type: CUSTOMERDATA, payload: data });
  };
};
