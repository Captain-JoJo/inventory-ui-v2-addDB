import React, { Fragment, useState } from "react";
import EditItemForm from "../edit-form";

export default function ListItem({ inventoryItem, handleRemoveOne, update }) {
  const { name, qty, _id, fav } = inventoryItem;
  const [isEditing, toggle] = useToggle(false);

  function useToggle(initialValue = false) {
    const [state, setState] = useState(initialValue);
    const toggle = () => setState(!state);
    return [state, toggle];
  }
  function handleFavChange() {
    update(_id, name, qty, !fav);
  }

  return (
    <Fragment>
      {isEditing ? (
        <EditItemForm
          inventoryItem={inventoryItem}
          update={update}
          toggle={toggle}
        />
      ) : (
        <Fragment>
          <tr>
            <td>
              <input
                className="favBox"
                type="checkbox"
                name="isFav"
                checked={fav}
                onChange={handleFavChange}
              />
            </td>
            <td className="tdQty">{qty}</td>
            <td className="tdName">{name}</td>
            <td>
              <span className="button-group">
                <button className="button" onClick={toggle}>Edit</button>
                <button className="button" onClick={() => handleRemoveOne(_id)}>Remove</button>
              </span>
            </td>
          </tr>
        </Fragment>
      )}
    </Fragment>
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
