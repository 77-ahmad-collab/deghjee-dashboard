import React, { useEffect, useRef, useState } from "react";
import Productstyles from "./product.module.css";
import { connect, useDispatch } from "react-redux";
// import Singleproduct from "./Singleproduct";
// import { AiOutlinePlusCircle } from "react-icons/ai";
import Modal from "./Modal";
import { OPEN } from "../../Reduxstore/Action";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";
import { EDIT } from "../../Reduxstore/Action";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Fetchproductdata } from "../../../Apistore/Productapidata";
const Products = ({ productdata, add }) => {
  const [clickeditem, setitem] = useState(-1);
  const [s_data, sets_data] = useState("");
  const [ids, setids] = useState({
    product_id: 0,
    id: 0,
    index: 0,
  });
  // const snedd = [{ name: "ahmad", age: 20 }];
  const deleteref = useRef(null);
  const [productlist, setproductdata] = useState(productdata);
  const [toggle, setoggle] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Fetchproductdata());
  }, []);
  useEffect(() => {
    dispatch(Fetchproductdata());
    console.log("i am updated");
  }, [clickeditem]);
  useEffect(() => {
    setproductdata(productdata);
    console.log(productdata, "i am the product data that you are getting");
  }, [productdata]);
  useEffect(() => {
    setproductdata(productdata);
    //  console.log(productdata, "i am the product data that you are getting");
    console.log("its toggling functionality");
  }, [toggle]);
  // console.log(productlist);
  const deletehandler = (dishid, catid) => {
    // const filteritem = productlist.filter((val) => {
    //   const newdishes = val.dishes.filter((val2) => {
    //     return val2.product_id !== dishid;
    //   });
    //   return newdishes;
    // });
    // console.log(filteritem, "i am filteritem");
    /////=========logic 2 start here=
    // console.log(dishid.target);
    // console.log(dishid, "dish id", catid);
    // console.log(this);
    // console.log(productlist[catid - 1].dishes);
    const newitem = productlist[catid - 1].dishes.filter((val) => {
      console.log(val.product_id !== dishid);
      return val.product_id === dishid;
    });
    // console.log(productlist, "i am the product list");
    const upitem = productlist.filter((preval) => {
      return preval.id === catid;
    });
    // console.log(upitem, "i am the up item");
    const delitem = upitem[0].dishes.filter((prev) => {
      return prev.product_id === dishid;
    });
    // console.log(delitem, "hurray you are getting the delted item");

    // console.log("i am new item ", newitem);
    axios.delete(
      "http://damp-headland-05751.herokuapp.com/show/products",
      delitem
    );
    setoggle(!toggle);
    // setproductdata(
    //   productlist[catid - 1].dishes.filter((val) => {
    //     console.log(val.product_id !== dishid);
    //     return val.product_id !== dishid;
    //   })
    // );
    ////===============logic 2 end
    // setproductdata(
    //   productlist[catid].filter((val) => {
    //     const filterdishes = val.dishes.filter((val) => {
    //       return val.product_id !== dishid;
    //     });
    //     console.log(filterdishes, "filter");
    //     return filterdishes;
    //   })
    // );
  };
  const handleedit = (dishid, catid, dindex) => {
    console.log("here you wil send mes");
    const newitem = productlist[catid - 1].dishes.find((val) => {
      console.log(val.product_id !== dishid);
      return val.product_id === dishid;
    });
    // console.log(newitem, "i am new item in edi handler");

    //updated logic
    const upitem = productlist.filter((preval) => {
      return preval.id === catid;
    });
    // console.log(upitem, "i am the up item");
    const edititem = upitem[0].dishes.filter((prev) => {
      return prev.product_id === dishid;
    });

    // console.log(edititem[0], "i am the edited item");
    //end of updated logic

    sets_data(edititem[0]);
    setids({
      product_id: dishid,
      id: catid,
      index: dindex,
    });
  };

  console.log(s_data, "sended data");
  return (
    // main body of product is starting here
    <div className={`setbody ${Productstyles.product_body} p-4`}>
      {/*   const deletehandler = (id, e) => {
    const filtereditem = productlist.filter((val) => {
      const filterdishes = val.dishes.filter((val) => {
        return val.product_id !== id;
      });
      console.log(filterdishes, "filter");
      return filterdishes;
    });
    console.log(filtereditem, "hhdhdhh");
  }; */}
      <div className={Productstyles.singlemenucomponent}>
        {productdata.length !== 0 ? (
          productlist.map((val) => {
            const { category, dishes, id } = val;
            // return <Singleproduct productapidata={productlist} heading={category} />;
            //start
            return (
              <>
                <div className="singleproduct">
                  <div className={`${Productstyles.productheader} py-4`}>
                    <div className={Productstyles.dotspro}>
                      <div className={Productstyles.singledot}></div>
                      <div className={Productstyles.singledot}></div>
                      <div className={Productstyles.singledot}></div>
                    </div>
                    {/* ----your menu heading */}
                    <h5>{category}</h5>
                    {/* end of your meanu heaing */}
                    <div className={Productstyles.dotspro}>
                      <div className={Productstyles.singledot}></div>
                      <div className={Productstyles.singledot}></div>
                      <div className={Productstyles.singledot}></div>
                    </div>
                  </div>
                  {/* start of product discription */}
                  {dishes.map((dish, index) => {
                    const { p_name, p_description, product_id } = dish;
                    return (
                      <>
                        <div
                          className={`${Productstyles.productbody} ${
                            product_id === clickeditem
                              ? `${Productstyles.ffff}`
                              : null
                          } py-4`}
                        >
                          <div className={Productstyles.productdetails}>
                            <h6 className="bold">{p_name}</h6>
                            <p>{p_description}</p>
                          </div>
                          <div className={Productstyles.productpr}>
                            {/* product price setup here */}
                            <p
                              className={`${Productstyles.price} text-success`}
                            >
                              $5
                            </p>
                            {/* end of product price setup here */}
                            <div className={Productstyles.productbtns}>
                              <div>
                                {/* <span className="iconstyle-add">
                          <AiOutlinePlusCircle />
                          </span> */}
                                <span
                                  className={Productstyles.iconstyledelete}
                                  // ref={deleteref}
                                  onClick={(e) => {
                                    setitem(product_id);
                                    // console.log(e.target.parentElement);
                                    // console.log(deleteref.current, "i am ref");
                                    deletehandler(product_id, id);
                                  }}
                                >
                                  <AiOutlineDelete />
                                </span>
                              </div>
                              <span
                                className={Productstyles.editpro}
                                onClick={() => {
                                  add();
                                  handleedit(product_id, id, index);
                                }}
                                // onClick={() => {

                                //   // dispatch({
                                //   //   type: EDIT,
                                //   //   payload: {
                                //   //     catid: id,
                                //   //     product_id: product_id,
                                //   //     dishindex: index,
                                //   //   },
                                //   // });
                                // }}
                              >
                                Edit
                              </span>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </>
            );

            // end
          })
        ) : (
          <div className="text-center loadingproduct">
            <div>
              <h4>Loading...</h4>
            </div>
            <div class="spinner-border text-primary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
      <Modal dat={s_data} ids={ids} />
    </div>
    // end of product body
  );
};
function mapStateToProps({ fetchdata }) {
  return { productdata: fetchdata.productlist };
}

function mapDispatchToProps(dispatch) {
  return { add: () => dispatch({ type: OPEN }) };
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);
