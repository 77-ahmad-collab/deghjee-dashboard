import axios from "axios";
import { CATEGORYDATA } from "../Dashboard/Reduxstore/Action";
export const Fetchcategorydata = () => {
  return async (dispatch, getState) => {
    const response = await axios.get(
      "http://damp-headland-05751.herokuapp.com/show/category"
    );
    // console.log(response, "coupon api data");
    // console.log(response, "response");

    const data = await response.data;
    // console.log(data, "Category  api data");
    dispatch({ type: CATEGORYDATA, payload: data });
  };
};
