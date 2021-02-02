//  <thead>
//             <tr>
//               <th>
//                 <form>
//                   <input type="checkbox" />
//                 </form>
//               </th>
//               <th>Id</th>
//               <th>Customer Id</th>
//               <th>Name</th>
//               <th> Delivery Addres</th>
//               <th>Amount</th>
//               <th>Payement Method</th>
//               <th>Contact</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {mydata.map((val) => {
//               const {
//                 id,
//                 customerid,
//                 name,
//                 deliveryaddres,
//                 amount,
//                 paymentmethod,
//                 contact,
//                 status,
//               } = val;
//               return (
//                 <>
//                   <tr>
//                     <td>
//                       <form>
//                         <input type="checkbox" />
//                       </form>
//                     </td>
//                     <td>{id}</td>
//                     <td>{customerid}</td>
//                     <td>{name}</td>
//                     <td>{deliveryaddres}</td>
//                     <td>{amount}</td>
//                     <td>{paymentmethod}</td>
//                     <td>{contact}</td>
//                     <td>{status}</td>
//                   </tr>
//                 </>
//               );
//             })}
//           </tbody>
