import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiFillCloseCircle } from "react-icons/ai";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Addprostyles from "./addproducts.module.css";
import Catstyles from "../Components/Category/Categories.module.css";
import { CLOSE_ADD } from "../Reduxstore/Action";
import { connect, useDispatch } from "react-redux";
import axios from "axios";
// import Button from "@material-ui/core/Button";
const Addproducts = ({ myshowslider, close }) => {
  const dispatch = useDispatch();
  const [message, setmessage] = useState("");
  const [show, setshow] = useState(false);
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
  const [value, setvalue] = useState({
    productname: "",
    productdesc: "",
    productcategory: "",
    price: "",
    salesprice: "",
  });
  const handleinput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setvalue((previousval) => {
      return { ...previousval, [name]: value };
    });
  };
  const senddata = () => {
    console.log("on submit is workinga absolutely fine");
    if (
      value.productname &&
      value.productdesc &&
      value.productcategory &&
      value.price &&
      value.salesprice
    ) {
      setshow(false);
      axios.post(
        "http://damp-headland-05751.herokuapp.com/show/products",
        value
      );
      clearvalues();
      dispatch({ type: CLOSE_ADD });
    } else {
      setshow(true);
      setmessage("Please enter all values");
    }
  };
  useEffect(() => {
    const timee = setTimeout(() => {
      setshow(false);
    }, 3000);
    return () => clearTimeout(timee);
  }, [show]);
  const clearvalues = () => {
    setvalue({
      productname: "",
      productdesc: "",
      productcategory: "",
      price: "",
      salesprice: "",
    });
  };
  return (
    <div
      className={`${Catstyles.addproducts} ${
        myshowslider
          ? `${Catstyles.showaddslider}`
          : `${Catstyles.hideaddslider}`
      }`}
    >
      <Container fluid>
        {/* --Header */}
        <Row className={Catstyles.addproducts_header}>
          <Col className="d-flex justify-content-md-between">
            <h5 style={{ color: " rgb(22, 31, 106)" }}>Add Products</h5>
            <span className={Catstyles.sliderclose} onClick={close}>
              <AiFillCloseCircle />
            </span>
          </Col>
        </Row>
        {/* --------close ----------of header----row */}
        {/* --------start of update products form */}
        <Row className="">
          <div className={`${Addprostyles.formdetails} px-4 pb-3`}>
            {/* editing of add product slider left column */}
            <div className={Addprostyles.leftcol}>
              <p style={{ color: " rgb(22, 31, 106)" }} className="mt-5 p-4">
                Add your Product description and necessary information from here
              </p>
            </div>
            {/* editing of add product slider right column   */}
            <div className={`${Addprostyles.rightcol} px-5 pt-1 pb-5`}>
              <form autoComplete="off">
                {show && <p style={style}> {message}</p>}
                <h6
                  style={{ color: " rgb(22, 31, 106)" }}
                  className={Catstyles.addform_heading}
                >
                  Product Name
                </h6>
                <input
                  type="text"
                  className={`form-control ${Addprostyles.add_input}`}
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  onChange={handleinput}
                  name="productname"
                  value={value.productname}
                ></input>
                <h6
                  style={{ color: " rgb(22, 31, 106)" }}
                  className={Catstyles.addform_heading}
                >
                  Product Description
                </h6>
                <textarea
                  className={`${Addprostyles.textarea} px-2 pt-2`}
                  cols="5s0"
                  rows="10"
                  onChange={handleinput}
                  name="productdesc"
                  value={value.productdesc}
                ></textarea>
                <h6
                  style={{ color: " rgb(22, 31, 106)" }}
                  className={Catstyles.addform_heading}
                >
                  Product Category
                </h6>
                <input
                  type="text"
                  className={`form-control ${Addprostyles.add_input}`}
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  name="productcategory"
                  onChange={handleinput}
                  value={value.productcategory}
                ></input>
                <h6
                  style={{ color: " rgb(22, 31, 106)" }}
                  className={Catstyles.addform_heading}
                >
                  Price
                </h6>
                <input
                  type="text"
                  className={`form-control ${Addprostyles.add_input}`}
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  name="price"
                  onChange={handleinput}
                  value={value.price}
                ></input>
                <h6
                  style={{ color: " rgb(22, 31, 106)" }}
                  className={Catstyles.addform_heading}
                >
                  Sales Price
                </h6>
                <input
                  type="text"
                  className={`form-control ${Addprostyles.add_input}`}
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  name="salesprice"
                  onChange={handleinput}
                  value={value.salesprice}
                ></input>
                {/* <h6
                  style={{ color: " rgb(22, 31, 106)" }}
                  className={Catstyles.addform_heading}
                >
                  Discount in Percent
                </h6>
                <input
                  type="text"
                  className={`form-control ${Addprostyles.add_input}`}
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                ></input>
                <h6
                  style={{ color: " rgb(22, 31, 106)" }}
                  className={Catstyles.addform_heading}
                >
                  Product Quantity
                </h6>
                <input
                  type="text"
                  className={`form-control ${Addprostyles.add_input}`}
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                ></input>
                <h6
                  style={{ color: " rgb(22, 31, 106)" }}
                  className={Catstyles.addform_heading}
                >
                  Type
                </h6>
                <div className="select_box">
                  <select className="addselect" id="inputGroupSelect04">
                    <option selected>Category Type</option>
                    <option value="Grocery">Grocery</option>
                    <option value="cloth">Women Cloth</option>
                    <option value="Bag">Bag</option>
                    <option value="Make up">Make up</option>
                  </select>
                </div>
                <h6
                  style={{ color: " rgb(22, 31, 106)" }}
                  className={Catstyles.addform_heading}
                >
                  Categories
                </h6> */}
                {/* <div className="select_box">
                  <select className="addselect" id="inputGroupSelect04">
                    <option selected>Product Tag</option>
                    <option value="Fruits and Vegetables">
                      Fruites and vegetables
                    </option>
                    <option value="Meet and Fish">Meet and Fish</option>
                    <option value="Purse">Purse</option>
                    <option value="Hand bags">Hand bags</option>
                    <option value="Shoulder Bags">Shoulder Bags</option>
                    <option value="wallet">wallet</option>
                    <option value="Laptop Bags">Laptop Bags</option>
                    <option value="Women Dress">Women Dress</option>
                    <option value="Outer wear">Outer wear</option>
                    <option value="pants">pants</option>
                  </select>
                </div> */}
              </form>
            </div>
          </div>
        </Row>
        {/* ----------------end of form */}
        {/* start of footer of update product slider */}
        <Row className={Catstyles.footer_slider}>
          <Col xl={6} lg={6} md={6}>
            <span
              onClick={() => {
                close();
                clearvalues();
              }}
            >
              <Button variant="danger" size="md" block>
                Cancel
              </Button>
            </span>
          </Col>
          <Col xl={6} lg={6} md={6}>
            <Button
              variant="success"
              size="md"
              block
              onClick={() => {
                senddata();
              }}
            >
              Create Category
            </Button>
          </Col>
        </Row>
        {/* end of footer of update product slider */}
      </Container>
    </div>
  );
};
function mapStateToProps({ addslider: { showslider } }) {
  return {
    myshowslider: showslider,
  };
}
function mapDispatchToProps(dispatch) {
  return { close: () => dispatch({ type: CLOSE_ADD }) };
}
export default connect(mapStateToProps, mapDispatchToProps)(Addproducts);
