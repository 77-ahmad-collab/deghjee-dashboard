import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { CLOSE } from "../../Reduxstore/Action";
import Catstyles from "./Categories.module.css";
import axios from "axios";
const Modal = ({ modal }) => {
  console.log("modal is here");
  const style = {
    backgroundColor: "red",
    borderRadius: "10px",
    padding: "2px",
    marginLeft: "10%",
    textAlign: "center",
    color: "white",
    opacity: 0.9,
    width: "80%",
  };
  //   const [modal, setmodal] = useState(false);
  const dispatch = useDispatch();
  const [val, setval] = useState("");
  const [show, setshow] = useState(false);
  const handleinput = (e) => {
    setval(e.target.value);
    console.log(e.target.value);
  };
  const handlesubmit = () => {
    console.log("getting clciked");
    if (val) {
      axios.post("http://damp-headland-05751.herokuapp.com/show/category", val);
      console.log("i am creating");
      setval("");
      dispatch({ type: CLOSE });
    } else {
      setshow(true);
    }
  };
  useEffect(() => {
    const mytime = setTimeout(() => {
      setshow(false);
    }, 3000);
    return () => clearTimeout(mytime);
  });
  return (
    <div
      className={`${Catstyles.modalbody} ${
        modal ? `${Catstyles.showmodal}` : `${Catstyles.hidemodal}`
      }`}
    >
      <div
        className={`${Catstyles.headingmo} d-flex justify-content-between `}
        style={{ padding: "10px" }}
      >
        <h5 style={{ color: " #30475e" }}>Add Category</h5>
        <span
          onClick={() => {
            dispatch({ type: CLOSE });
            setval("");
          }}
        >
          &#x2715;
        </span>
      </div>
      <div className={`${Catstyles.innermodal} p-3`}>
        {show ? <p style={style}>Please enter a value</p> : null}
        <h5 style={{ color: " #30475e" }}>Category name</h5>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            style={{ fontWeight: "bold" }}
            type="text"
            placeholder="Add category name"
            className={Catstyles.input}
            onChange={handleinput}
            value={val}
          />
        </form>
      </div>
      <div className="footer my-3 d-flex justify-content-end mr-3">
        <button
          className="btn btn-dark mr-3"
          onClick={() => {
            dispatch({ type: CLOSE });
            setval("");
          }}
        >
          Close
        </button>
        <button
          className="btn btn-success"
          onClick={() => {
            handlesubmit();
          }}
        >
          Create
        </button>
      </div>
    </div>
  );
};
function mapStateToProps({ slider: { modal } }) {
  return { modal: modal };
}
export default connect(mapStateToProps)(Modal);
