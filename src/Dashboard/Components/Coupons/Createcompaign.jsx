import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { AiFillCloseCircle } from "react-icons/ai";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./Categories.css";
import { CLOSE } from "../../Reduxstore/Action";
import { connect, useDispatch } from "react-redux";
import Catstyles from "../Category/Categories.module.css";
import Addprostyles from "../../Navbar/addproducts.module.css";
const Createcompaign = ({ myshowslider, close }) => {
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
  const day = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  console.log(day, month, year);
  const [test, settestvalues] = useState({
    name: "",
    dateeee: "yyyyyy -uuu",
  });
  const [values, setvalues] = useState({
    couponname: "",
    couponcode: "",
    startdate: `yyyy-MM-DD`,
    enddate: "yyyy-MM-DD",
    totalcoupon: 0,
  });
  const [message, setmessage] = useState("");
  const [show, setshow] = useState(false);
  const handleinput = (e) => {
    console.log("your input handler is working");
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setvalues((prevval) => {
      console.log(values);
      console.log(name, value);
      return { ...prevval, [name]: value };
    });
  };
  const senddata = async () => {
    if (
      values.couponname &&
      values.couponcode &&
      values.startdate &&
      values.enddate &&
      values.totalcoupon
    ) {
      setshow(false);
      const response = await axios.post(
        "http://damp-headland-05751.herokuapp.com/show/coupons",
        values
      );
      dispatch({ type: CLOSE });
    } else {
      setshow(true);
      setmessage("Please enter a value in all fields");
    }
    console.log("senddata is working");
  };
  const dispatch = useDispatch();
  useEffect(() => {
    const timee = setTimeout(() => {
      setshow(false);
    }, 3000);
    return () => clearTimeout(timee);
  });
  const clearvalues = () => {
    console.log("you are cleaing the values");
    setvalues({
      couponname: " ",
      couponcode: "",
      startdate: `yyyy-MM-DD`,
      enddate: "yyyy-MM-DD",
      totalcoupon: 0,
    });
  };
  return (
    <div
      className={`${Catstyles.addproducts} ${
        myshowslider ? `${Catstyles.showslider}` : `${Catstyles.hideslider}`
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
            <h5 style={{ color: " rgb(22, 31, 106)" }}>Add Compaign</h5>
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
                Add your campaign description and necessary informations from
                here
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
                  Coupon Name
                </h6>
                <input
                  type="text"
                  className={`form-control ${Addprostyles.add_input}`}
                  aria-label="Large"
                  name="couponname"
                  value={values.couponname}
                  aria-describedby="inputGroup-sizing-sm"
                  onChange={handleinput}
                ></input>

                <h6
                  style={{ color: " rgb(22, 31, 106)" }}
                  className={Catstyles.addform_heading}
                >
                  Coupon Code
                </h6>
                <input
                  type="text"
                  className={`form-control ${Addprostyles.add_input}`}
                  aria-label="Large"
                  name="couponcode"
                  aria-describedby="inputGroup-sizing-sm"
                  onChange={handleinput}
                  value={values.couponcode}
                ></input>
                <h6
                  style={{ color: " rgb(22, 31, 106)" }}
                  className={Catstyles.addform_heading}
                >
                  Start Date
                </h6>
                <input
                  type="date"
                  className={`form-control ${Addprostyles.add_input}`}
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  name="startdate"
                  onChange={handleinput}
                  value={values.Startdate}
                ></input>
                <h6
                  style={{ color: " rgb(22, 31, 106)" }}
                  className={Catstyles.addform_heading}
                >
                  End date
                </h6>
                <input
                  type="date"
                  className={`form-control ${Addprostyles.add_input}`}
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  name="enddate"
                  onChange={handleinput}
                  value={values.Enddate}
                ></input>
                <h6
                  style={{ color: " rgb(22, 31, 106)" }}
                  className={Catstyles.addform_heading}
                >
                  Total Coupons
                </h6>
                <input
                  type="number"
                  className={`form-control ${Addprostyles.add_input}`}
                  s
                  aria-label="Large"
                  name="totalcoupon"
                  aria-describedby="inputGroup-sizing-sm"
                  value={values.totalcoupon}
                  onChange={handleinput}
                ></input>
              </form>
            </div>
          </div>
        </Row>
        {/* ----------------end of form */}
        {/* start of footer of update product slider */}
        <Row className="footer_slider mt-5">
          <Col xl={6} lg={6} md={6}>
            <span
              onClick={() => {
                dispatch({ type: CLOSE });
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
                if (!show) {
                  // dispatch({ type: CLOSE });
                  // setvalues((prevval) => {
                  //   console.log(values);
                  //   // console.log(name, value);
                  //   return { ...prevval, prevval.coupon_name: "" }
                  // });
                  // setvalues((valee) => {
                  //   console.log(valee);
                  // });
                }
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
function mapStateToProps({ slider: { showslider } }) {
  return {
    myshowslider: showslider,
  };
}
function mapDispatchToProps(dispatch) {
  return { close: () => dispatch({ type: CLOSE }) };
}
export default connect(mapStateToProps, mapDispatchToProps)(Createcompaign);
