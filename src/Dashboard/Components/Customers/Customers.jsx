import React, { useEffect, useState } from "react";
import Loader from "../Orders/Loader";
import Custstyles from "./Customer.module.css";
import Catstyles from "../Category/Categories.module.css";
import Orderstyles from "../Orders/Order.module.css";
import { connect, useDispatch } from "react-redux";
// import Customersdata from "./Customersdata";
import { Fetchcustomerdata } from "../../../Apistore/Customersapidata";
const Customers = ({ customerlist }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Fetchcustomerdata());
  }, []);

  const [customerdata, setcustomerdata] = useState(customerlist);
  useEffect(() => {
    setcustomerdata(customerlist);
  }, [customerlist]);
  // const [listdata, setlistdata] = useState(Coupondata);
  const [value, setvalue] = useState("");

  let filteritem = customerdata.filter((contacts) => {
    return contacts.c_name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
  });

  return (
    <div className={`setbody ${Catstyles.category_body} container-fluid pb-5`}>
      <div
        className={`row ${Catstyles.header_body} ${Catstyles.body_head} d-flex justify-content-center align-items-center py-3`}
      >
        <div className=" py-4 ml-4 mr-5">
          <h3>Customers</h3>
        </div>

        <div>
          <form>
            <input
              type="text"
              className={`form-control ${Custstyles.cus_input}`}
              placeholder="EX: Search By Name"
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              value={value}
              onChange={(e) => setvalue(e.target.value)}
            ></input>
          </form>
        </div>
        {/* <div className="select_box">
          <select className="select" id="inputGroupSelect04">
            <option selected>Order Amount</option>
            <option value="7">Heighest To Lowest</option>
            <option value="15">Lowest To Heighest</option>
          </select>
        </div> */}
      </div>
      <div className={`row ${Orderstyles.setwidth}`}>
        <table className={`table table-bordered ${Orderstyles.loadordertab}`}>
          <thead>
            <tr>
              <th>Id</th>

              <th>Name</th>
              <th>Contacts</th>
              <th>Customer Address</th>
              <th>Customer email</th>
            </tr>
          </thead>
          <tbody>
            {customerlist.length !== 0 ? (
              filteritem.map((val) => {
                const {
                  customer_id,

                  c_name,
                  c_mobile,
                  c_address,
                  c_email,
                } = val;
                return (
                  <tr key={customer_id}>
                    <td>{customer_id}</td>

                    <td>{c_name}</td>
                    <td>{c_mobile}</td>
                    <td>{c_address}</td>
                    <td className="text-success">{c_email}</td>
                  </tr>
                );
              })
            ) : (
              <div className={Orderstyles.loaderleft}>
                <Loader />
              </div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
function mapStateToProps({ fetchdata }) {
  return { customerlist: fetchdata.customerlist };
}
export default connect(mapStateToProps)(Customers);
