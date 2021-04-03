import React, { useState } from "react";

function EditItemForm({ inventoryItem, update, toggle }) {
  function useInputState(initialVal) {
    const [value, setValue] = useState(initialVal);
    const handleChange = (e) => setValue(e.target.value);
    const reset = () => setValue("");
    console.log("value", value);
    return [value, handleChange, reset];
  }
  const { name: itemName, qty, _id, fav } = inventoryItem;
  const [valueQty, handleChangeQty, resetQty] = useInputState(qty);
  const [valueName, handleChangeName, resetName] = useInputState(itemName);

  return (
    <tr>
      <td></td>
      <td>
        <form
          className="InputForm"
          onSubmit={(e) => {
            e.preventDefault();
            update(_id, valueName, valueQty, fav);
            resetQty();
            toggle();
          }}
        >
          <input
            className="tdEditFormQty"
            name="qtyEditForm"
            type="number"
            value={valueQty}
            onChange={handleChangeQty}
            label="Update quantity"
            
          />
        </form>
      </td>

      <td>
        <form
          className="InputForm"
          onSubmit={(e) => {
            e.preventDefault();
            update(_id, valueName, valueQty, fav);
            resetName();
            toggle();
          }}
        >
          <input
            className="tdEditFormName"
            name="nameEditForm"
            type="text"
            value={valueName}
            onChange={handleChangeName}
            label="Update name"
            autoFocus={true}
          />
        </form>
      </td>
      <td>Press Enter</td>
    </tr>
  );
}

export default EditItemForm;
