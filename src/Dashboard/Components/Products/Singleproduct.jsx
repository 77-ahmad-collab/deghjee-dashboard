// import React from "react";
// import "./product.css";
// import { AiOutlinePlusCircle } from "react-icons/ai";
// import { AiOutlineDelete } from "react-icons/ai";
// const Singleproduct = ({ productapidata, heading }) => {
//   return (
//     //start of single product item body
//     <div className="singleproduct">
//       <div className="productheader py-4">
//         <div className="dotspro">
//           <div className="singledot"></div>
//           <div className="singledot"></div>
//           <div className="singledot"></div>
//         </div>
//         {/* ----your menu heading */}
//         <h5>{heading}</h5>
//         {/* end of your meanu heaing */}
//         <div className="dotspro">
//           <div className="singledot"></div>
//           <div className="singledot"></div>
//           <div className="singledot"></div>
//         </div>
//       </div>
//       {/* start of product discription */}
//       <div className="productbody py-4">
//         <div className="productdetails">
//           <h6 className="bold">{pname}</h6>
//           <p>{pdesc}</p>
//         </div>
//         <div className="productpr">
//           {/* product price setup here */}
//           <p className="price text-success">$5</p>
//           {/* end of product price setup here */}
//           <div className="productbtns">
//             <div>
//               {/* <span className="iconstyle-add">
//                 <AiOutlinePlusCircle />
//               </span> */}
//               <span className="iconstyle-delete">
//                 <AiOutlineDelete />
//               </span>
//             </div>
//             <span className="editpro">Edit</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Singleproduct;

{
  /* {dishes.map((dish)=>{
                    const {p_name,p_description}=dish;
                    return <>
//                     </>;
//                   })} */
// }


// // 
// {/* <div className="productbody py-4">
//   <div className="productdetails">
//     <h6 className="bold">djjd</h6>
//     <p>dndj</p>
//   </div>
//   <div className="productpr">
//     {/* product price setup here */}
//     <p className="price text-success">$5</p>
//     {/* end of product price setup here */}
//     <div className="productbtns">
//       <div>
//         {/* <span className="iconstyle-add">
//                           <AiOutlinePlusCircle />
//                           </span> */}
//         <span className="iconstyle-delete">
//           <AiOutlineDelete />
//         </span>
//       </div>
//       <span className="editpro">Edit</span>
//     </div>
//   </div>
// </div>; */}





//

// const deletehandler = (id, e) => {
//     // console.log("i am delete handler", id);
//     // console.log(productlist, "i am product list");
//     const filtereditem = productlist.filter((val) => {
//       // console.log(val.dishes, "i am in filter");
//       // const fil = val.dishes.filter((invalue) => {
//       //   // console.log(invalue, "i am in value");
//       //   const { product_id } = invalue;
//       //   // console.log("the product id is", product_id);
//       //   return id !== product_id;
//       // });
//       // console.log(fil, "i ma fil");
//       // console.log(val.dishes);
//       // fil.filter((val)=>{
//       //   const
//       // })
//       // console.log(val.dishes.filter((e) => id !== e.product_id));
//       const dishes = val.dishes;

//       const filterdishes = dishes.filter((val) => {
//         // console.log(val);
//         return val.product_id !== id;
//       });
//       // console.log(filterdishes, "i am the final filtered dishes");
//       return val.dishes.product_id === filterdishes.product_id;
//     });
//     console.log(filtereditem, "hhdhdhh");
//   };