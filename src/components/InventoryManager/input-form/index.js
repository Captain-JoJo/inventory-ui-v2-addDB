import React, { useState } from "react";

function InputForm({ addNewItem }) {
  const [itemName, handleNameChange, resetNameField] = useInputState("");
  const [itemQty, handleChangeQty, resetQtyField] = useInputState("");

  function useInputState(initialValue) {
    const [newValue, setValue] = useState(initialValue);
    const handleChange = (event) => setValue(event.target.value);
    const reset = () => setValue("");
    console.log(newValue);
    return [newValue, handleChange, reset];
  }

  return (
    <form
      className="InputForm"
      onSubmit={(e) => {
        e.preventDefault();
        addNewItem(itemName, itemQty);
        console.log("name value", itemName);
        resetNameField();
        resetQtyField()
      }}
    >
      <input
        type="text"
        value={itemName}
        placeholder="Add New Item"
        onChange={handleNameChange}
        label="Add New Item"
      />
      <input
        type="text"
        value={itemQty}
        placeholder="Add Quantity"
        onChange={handleChangeQty}
        label="Add Quantity"
      />
      <button type="submit">Add New Item</button>
    </form>
  );
}

export default InputForm;
