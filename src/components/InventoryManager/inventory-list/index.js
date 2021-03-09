import React from "react";

export default function List({ inventoryItem, onChecked }) {
  const { name, qty, _id } = inventoryItem;
  return (
    <div className="ListContainer">
      <span>{name} {qty}</span>
      <button className="button-group" onClick={() => onChecked(_id)}>
        Remove
      </button>
    </div>
  );
}

// export default function List(props) {
//   const displayItem = (props) => {
//     return (
//       <div className="ListContainer">
//         <ul>
//           <li>
//             <span>{props.name}</span>
//             <span className="button-group">
//               <span
//                 className="button"
//                 _id={props._id}
//                 name={props.name}
//                 qty={props.qty}
//                 onClick={() => props.onChecked(props._id)}
//               >
//                 Remove
//               </span>
//             </span>
//           </li>
//         </ul>
//       </div>
//     );
//   };
//   return <> {displayItem(props)} </>;
// }
