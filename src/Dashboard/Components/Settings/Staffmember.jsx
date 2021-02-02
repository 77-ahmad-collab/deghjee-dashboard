import React, { useState } from "react";
// import "./Categories.css";
import { connect } from "react-redux";
// import AddCategory from "./AddCategory";
import { OPEN } from "../../Reduxstore/Action";
//import { HiOutlinePlus } from "react-icons/hi";
//import Selectbox from "./Select";
import Customersdata from "./Data";
const Categories = ({ add }) => {
  const [value, setvalue] = useState("");
  const [categorydata, setcategorydata] = useState(Customersdata);
  // const [listdata, setlistdata] = useState(Coupondata);

  let filteritem = categorydata.filter((contacts) => {
    return contacts.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
  });
  const handleinput = (e) => {
    setvalue(e.target.value);
  };
  console.log(value);
  return (
    <div className="setbody category_body container-fluid p-2">
      <div className="row header_body body_head d-flex justify-content-around align-items-center py-3">
        <div className=" py-4 ml-4">
          <h3>Staff Members</h3>
        </div>
        <div className="select_box">
          <select className="select" id="inputGroupSelect04">
            <option selected>Category Type</option>
            <option value="Grocery">Grocery</option>
            <option value="cloth">Women Cloth</option>
            <option value="Bag">Bag</option>
            <option value="Make up">Make up</option>
          </select>
        </div>
        <div className="">
          <form>
            <input
              type="text"
              className="form-control cat_input"
              placeholder="EX: Search By Name"
              aria-label="Large"
              value={value}
              aria-describedby="inputGroup-sizing-sm"
              onChange={handleinput}
            ></input>
          </form>
        </div>
        <div className="">
          <button className="add_catbtn" onClick={add}>
            Add Category
          </button>
        </div>
      </div>
      <div className="table_cat mb-5 ">
        <table className="table table-responsive  ">
          <thead>
            <tr>
              <th scope="col">
                <p>Id</p>
              </th>

              <th scope="col">
                <p>Name</p>
              </th>
            </tr>
          </thead>
          <tbody className="mt-0">
            {filteritem.map((val, index) => {
              const {
                id,

                name,
              } = val;
              return (
                <tr key={index}>
                  <td>{id}</td>
                  <td>{name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* <AddCategory /> */}
    </div>
  );
};
function mapStateToProps({ slider: { showslider } }) {
  return {
    myshowslider: showslider,
  };
}
function mapDispatchToProps(dispatch) {
  return { add: () => dispatch({ type: OPEN }) };
}
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
