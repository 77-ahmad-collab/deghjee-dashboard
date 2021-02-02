import { COUPONPUTAPI } from "./Action";
const initialstate = {
  postdata: "",
};
export default function reducer(state = initialstate, action) {
  switch (action.type) {
    case COUPONPUTAPI:
      return { ...state, postdata: action.payload };

    default:
      return state;
  }
}
