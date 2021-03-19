import React, { useState } from "react";

function EditItemForm({ inventoryItem, update, toggle }) {
  function useInputState(initialVal) {
    const [value, setValue] = useState(initialVal);
    const handleChange = (e) => setValue(e.target.value);
    const reset = () => setValue("");
    return [value, handleChange, reset];
  }
  const { name:itemName, qty, _id } = inventoryItem
  // console.log('invetnoryItem', inventoryItem);
  const [valueQty, handleChangeQty, resetQty] = useInputState(qty);
  // console.log('qty here', inventoryItem.qty);
  // console.log('useInputState value', valueQty);
  return (
    <tr>
      <td>
        <form
          className="InputForm"
          onSubmit={(e) => {
            e.preventDefault();
            update(_id, itemName, valueQty);
            resetQty();
            toggle();
          }}
        >
          <input
            type="text"
            value={valueQty}
            onChange={handleChangeQty}
            label="Update quantity"
            autoFocus={true}
          />
          Press Enter to Update
        </form>
      </td>
    </tr>
  );
}

export default EditItemForm;
