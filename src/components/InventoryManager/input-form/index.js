import React, { useState } from "react";

function InputForm({ addNewItem }) {
  const [itemName, handleNameChange, resetNameField] = useInputState("");
  const [itemQty, handleChangeQty, resetQtyField] = useInputStateQty("1");

  function useInputState(initialValue) {
    const [newValue, setValue] = useState(initialValue);
    const handleChange = (event) => setValue(event.target.value);
    const reset = () => setValue("");
    console.log(newValue);
    return [newValue, handleChange, reset];
  }
  function useInputStateQty(initialValue) {
    const [newValue, setValue] = useState(initialValue);
    const handleChange = (event) => setValue(event.target.value);
    const reset = () => setValue("1");
    console.log(newValue);
    return [newValue, handleChange, reset];
  }

  return (
    <form
      className="InputForm"
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
        addNewItem(itemName, itemQty);
        resetNameField();
        resetQtyField();
      }}
    >
      <input
        className="tdInputFormName"
        name="nameInputForm"
        type="text"
        value={itemName}
        placeholder="Add New Item"
        onChange={handleNameChange}
        label="Add New Item"
        required
      />
      <input
        className="tdInputFormQty"
        name="qtyInputForm"
        type="number"
        value={itemQty}
        placeholder="Qty"
        onChange={handleChangeQty}
        label="Qty"
        required
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default InputForm;
