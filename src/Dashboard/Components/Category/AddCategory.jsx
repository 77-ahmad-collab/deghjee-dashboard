import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiFillCloseCircle } from "react-icons/ai";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Catstyles from "./Categories.module.css";
import Addprostyles from "../../Navbar/addproducts.module.css";
//commenting this css file
// import "../../Navbar/Menubar.css";
import { connect } from "react-redux";
import { CLOSE } from "../../Reduxstore/Action";
const AddCategory = ({ myshowslider, close }) => {
  return (
    <div
      className={`${Catstyles.addproducts} ${
        myshowslider ? `${Catstyles.hideslider}` : `${Catstyles.hideslider}`
      }`}
    >
      {/* <div
        className={`opacitycatfix  ${
          myshowslider ? "showcatopacity" : "hidecatopacity"
        } `}
      >
        aaa
      </div> */}
      <Container fluid>
        {/* --Header */}
        <Row className={Catstyles.addproducts_header}>
          <Col className="d-flex justify-content-md-between">
            <h5 style={{ color: " rgb(22, 31, 106)" }}>Add Category</h5>
            <span className={Catstyles.sliderclose} onClick={close}>
              <AiFillCloseCircle />
            </span>
          </Col>
        </Row>
        {/* --------close ----------of header----row */}
        {/* --------start of update products form */}
        <Row className="">
          {/* this form details is from navbar components */}
          <div className={`${Addprostyles.formdetails} px-4 pb-3`}>
            {/* editing of add product slider left column */}
            <div className={Addprostyles.leftcol}>
              <p style={{ color: " rgb(22, 31, 106)" }} className="mt-5 p-4">
                Add your category description and necessary informations from
                here
              </p>
            </div>
            {/* editing of add product slider right column   */}
            <div className={`${Addprostyles.rightcol} px-5 pt-1 pb-5`}>
              <form>
                <h6
                  style={{ color: " rgb(22, 31, 106)" }}
                  className={Catstyles.addform_heading}
                >
                  Name
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
                  Description
                </h6>
                <textarea
                  className={`${Addprostyles.textarea} px-2 pt-2`}
                  cols="5s0"
                  rows="10"
                ></textarea>
                <h6
                  style={{ color: " rgb(22, 31, 106)" }}
                  className={Catstyles.addform_heading}
                >
                  Unit
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
                  Price
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
                  Sales Price
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
                {/* <div className="select_box">
                  <select className="addselect" id="inputGroupSelect04">
                    <option selected>Category Type</option>
                    <option value="Grocery">Grocery</option>
                    <option value="cloth">Women Cloth</option>
                    <option value="Bag">Bag</option>
                    <option value="Make up">Make up</option>
                  </select>
                </div> */}
                <h6
                  style={{ color: " rgb(22, 31, 106)" }}
                  className={Catstyles.addform_heading}
                >
                  Categories
                </h6>
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
        <Row className="footer_slider">
          <Col xl={6} lg={6} md={6}>
            <span onClick={close}>
              <Button variant="danger" size="md" block>
                Cancel
              </Button>
            </span>
          </Col>
          <Col xl={6} lg={6} md={6}>
            <Button variant="success" size="md" block>
              Create Category
            </Button>
          </Col>
        </Row>
        {/* end of footer of update product slider */}
      </Container>
    </div>
  );
};
function mapStateToProps({ slider: { showslider } }) {
  return {
    myshowslider: showslider,
  };
}
function mapDispatchToProps(dispatch) {
  return { close: () => dispatch({ type: CLOSE }) };
}
export default connect(mapStateToProps, mapDispatchToProps)(AddCategory);
