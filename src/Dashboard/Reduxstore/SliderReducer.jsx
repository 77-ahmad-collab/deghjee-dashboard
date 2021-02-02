import { OPEN, CLOSE } from "./Action";
const initialstate = {
  showslider: false,
  modal: false,
};
export default function reducer(state = initialstate, action) {
  switch (action.type) {
    case OPEN:
      return { ...state, showslider: true, modal: true };
    case CLOSE:
      return { ...state, showslider: false, modal: false };
    default:
      return state;
  }
}
