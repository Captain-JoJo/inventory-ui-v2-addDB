import React, { useState, useInputState } from "react";
import "./InventoryDetails.css";
import InputForm from "./input-form";
import List from "./inventory-list";
import {
  insertItem,
  getAllItems,
  deleteAllItems,
  deleteOneItem,
} from "../../api/inventoryItem";

export default function InventoryDetails() {

  const [items, setItems] = useState([]);

  // suggestion: use hook to load the inventory manager
  //             put into a reusable hook or another module
  //            - hooks are great for when using state and in future using "spinner"
  async function addNewItem(itemName, itemQty) {
    try {
      // take try/catch out here and put it inot the insertItem function
      // if using something like thunk later on it is helpful to seperate out operations.
      const _id = await insertItem(itemName, itemQty);
      const updatedItems = [...items, { _id: _id, name: itemName, qty: itemQty }];
      console.log("This is the updatedItems", updatedItems);
      setItems(updatedItems);
    } catch (error) {
      console.log("insertItem sql error", error);
    }
  }

  async function displayItems() {
    try {
      const results = await getAllItems();
      setItems(results);
    } catch (error) {
      console.log("getAllItems sql error", error);
    }
  }

  async function deleteAll() {
    try {
      await deleteAllItems();
      setItems([]);
    } catch (error) {
      console.log("deleteAllItems sql error", error);
    }
  }

  async function deleteOne(id) {
    console.log("initial id", id);
    try {
      const results = await deleteOneItem(id);
      console.log("setting react useState now", id);
      setItems(items.filter((item) => item._id !== id));
      console.log("const results from the await deleteOneItem", results);
    } catch (error) {
      console.log("deleteOneItem sql error", error);
    }
  }

  return (
    <div className="grid-container">
      <div>
        <InputForm addNewItem={addNewItem} className="InputForm" />

        <button className="button" onClick={displayItems}>
          Get Items
        </button>
        <button className="button" onClick={deleteAll}>
          Delete All Items
        </button>
      </div>

      <ul>
        {items.map(inventoryItem => (
          <li key={inventoryItem._id}>
            <List inventoryItem={inventoryItem} onChecked={deleteOne} />
          </li>
        ))}
      </ul>
    </div>
  );
}