import React, {Fragment, useState} from "react";
import EditItemForm from "../edit-form";

export default function ListItem({inventoryItem, handleRemoveOne, update}) {
  const {name, qty, _id, fav} = inventoryItem;
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
        <EditItemForm inventoryItem={inventoryItem} update={update} toggle={toggle} />
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
                <button className="button" onClick={() => handleRemoveOne(_id)}>
                  Remove
                </button>
              </span>
            </td>
          </tr>
        </Fragment>
      )}
    </Fragment>
  );
}
