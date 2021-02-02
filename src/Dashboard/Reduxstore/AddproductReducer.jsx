import { OPEN_ADD, CLOSE_ADD, CLOSE_SIDEBAR, OPEN_SIDEBAR } from "./Action";
const initialstate = {
  showslider: false,
  isopensidebar: false,
};
function test() {
  console.log("it is  a  test");
}
export default function reducer(state = initialstate, action) {
  switch (action.type) {
    case OPEN_ADD:
      test();
      return { ...state, showslider: true };
    case CLOSE_ADD:
      return { ...state, showslider: false };
    case CLOSE_SIDEBAR:
      return { ...state, isopensidebar: false };
    case OPEN_SIDEBAR:
      return { ...state, isopensidebar: true };
    default:
      return state;
  }
}
