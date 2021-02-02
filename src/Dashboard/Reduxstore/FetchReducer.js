import {
  FETCHCOUPONSDATA,
  CATEGORYDATA,
  PRODUCTDATA,
  ORDERDATA,
  CUSTOMERDATA,
  EDIT,
} from "./Action";
const initialstate = {
  couponlist: [],
  categorylist: [],
  productlist: [],
  orderlist: [],
  customerlist: [],
};

export default function reducer(state = initialstate, action) {
  switch (action.type) {
    case FETCHCOUPONSDATA:
      console.log("fetch reducer is working");
      return { ...state, couponlist: action.payload };
    case CATEGORYDATA:
      return { ...state, categorylist: action.payload };
    case PRODUCTDATA:
      return { ...state, productlist: action.payload };
    case ORDERDATA:
      return { ...state, orderlist: action.payload };
    case CUSTOMERDATA:
      return { ...state, customerlist: action.payload };
    case EDIT:
      const productlist = [...state.productlist];
      productlist[action.payload.catid - 1].dishes[
        action.payload.dishindex
      ].p_name = action.payload.pname;
      productlist[action.payload.catid - 1].dishes[
        action.payload.dishindex
      ].p_description = action.payload.pdesc;
      return { ...state, productlist };
    default:
      return state;
  }
}

// else if (action.type === EDIT) {
//     const list = [...state.list];
//     list[action.payload.editid] = action.payload.value;
//     return { ...state, list };
//   }
