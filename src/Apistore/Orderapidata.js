import axios from "axios";
import { ORDERDATA } from "../Dashboard/Reduxstore/Action";
export const Fetchorderdata = () => {
  return async (dispatch, getState) => {
    const response = await axios.get(
      "http://damp-headland-05751.herokuapp.com/show/orders"
    );
    // console.log(response, "coupon api data");
    // console.log(response, "response");

    const data = await response.data;
    console.log(data, "order  api data");
    dispatch({ type: ORDERDATA, payload: data });
  };
};
