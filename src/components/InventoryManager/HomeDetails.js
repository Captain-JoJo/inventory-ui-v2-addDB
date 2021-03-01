import React, { useState, useInputState } from "react";
import "./HomeDetails.css";
import InputForm from "./input-form";
import List from "./inventory-list";
import {
  insertItem,
  getAllItems,
  deleteAllItems,
  deleteOneItem
} from "../../api/inventoryItem";

export default function GetInventoryData() {
  const BASE_URL = "http://localhost:5000";
  const HEROKU_URL = "https://inventoryv2api.herokuapp.com";

  //const [inputText, setInputText] = useState("")
  const [items, setItems] = useState([]);

  async function addNewItem(item, review) {
    try {
      const _id = await insertItem(item, review);
      const updatedItems = [...items, { _id: _id, name: item, review: review }];
      console.log("This is the updatedItems", updatedItems);
      setItems(updatedItems);
    } catch (error) {
      console.log("sql error", error);
    }
  }

  async function displayItems() {
    const results = await getAllItems();
    setItems(results);
  }

  async function deleteAll() {
    try {
      await deleteAllItems();
      setItems([]);
    } catch (error) {
      console.log("sql error", error);
    }
  }

  async function deleteOne(id) {
    console.log("initial id", id);
    try {
    const results = await deleteOneItem(id);
    console.log('I have deleted one and then need to reset UI');
    setItems(items.filter((item) => item._id !== id));
    console.log("const results from the await deleteOneItem", results);
    } catch (error) {
    console.log("sql error", error);
    }
  }


  return (
    <div className="grid-container">
      <div>
        <InputForm addNewItem={addNewItem} className="InputForm" />

        <button onClick={displayItems}>
          <span>Get Items</span>
        </button>
        <button onClick={deleteAll}>
          <span>Delete All Items</span>
        </button>
      </div>

    <div>
        {items.map((inventoryItem, index) => (
            <List
                key={inventoryItem._id}
                _id={inventoryItem._id}
                name={inventoryItem.name}
                onChecked={deleteOne}
            />
        ))}
    </div>

      
    </div>
  );
}

// Removed this to pass to List module
{/* <div className="ListContainer">
        <ul>
          {items.map((item) => (
            <div key={item._id}>
              <li>
                <span>{item.name}</span>
                <span className="button-group">
                  <span
                    className="button"
                    name={item.name}
                    onClick={() => deleteOne(item._id)}
                  >
                    Remove
                  </span>
                </span>
              </li>
            </div>
          ))}
        </ul>
      </div> */}
