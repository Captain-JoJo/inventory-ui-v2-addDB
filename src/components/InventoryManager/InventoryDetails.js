import React, {useState, useEffect} from "react";
import "./InventoryDetails.css";
import InputForm from "./input-form";
import ListItem from "./inventory-list";
import {
  insertItem,
  getAllItems,
  deleteAllItems,
  deleteOneItem,
  updateOneItem,
} from "../../api/inventoryItem";

export default function InventoryDetails() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("run one time to get the starting data");
    displayItems(setItems);
  }, []);

  // suggestion: use hook to load the inventory manager
  //             put into a reusable hook or another module
  //            - hooks are great for when using state and in future using "spinner"
  async function addNewItem(itemName, itemQty) {
    const itemFav = false;
    try {
      // take try/catch out here and put it inot the insertItem function
      // if using something like thunk later on it is helpful to seperate out operations.
      const _id = await insertItem(itemName, itemQty, itemFav);
      const updatedItems = [...items, {_id: _id, name: itemName, qty: itemQty, fav: itemFav}];
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

  // async function deleteAll() {
  //   try {
  //     await deleteAllItems();
  //     setItems([]);
  //   } catch (error) {
  //     console.log("deleteAllItems sql error", error);
  //   }
  // }

  async function deleteOne(id) {
    console.log("initial id", id);
    try {
      const results = await deleteOneItem(id);
      setItems(items.filter((item) => item._id !== id));
      console.log("const results from the await deleteOneItem", results);
    } catch (error) {
      console.log("deleteOneItem sql error", error);
    }
  }
  async function update(id, itemName, itemQty, itemFav) {
    try {
      const updatedRow = {
        _id: id,
        name: itemName,
        qty: itemQty,
        fav: itemFav,
      };
      const updatedItems = items.map((row) => {
        if (row._id === id) {
          return updatedRow;
        }
        return row;
      });
      setItems(updatedItems);
      await updateOneItem(id, itemName, itemQty, itemFav);
    } catch (error) {
      console.log("updateOneItem sql error", error);
    }
  }
  async function displayFavs() {
    const updatedFavItems = items.filter((item) => item.fav !== true);
    console.log("fav items", updatedFavItems);
  }

  return (
    <div className="grid-container">
      <div>
        <InputForm addNewItem={addNewItem} className="InputForm" />
      </div>
      {/* <div>
        <Favorites displayFavs={displayFavs} className="InputForm" />
      </div> */}
      {/* ternary if true the toggle is turned on display spinner 
if false then diplay table*/}
      <table className="TableContainer">
        <thead>
          <tr className="trHead">
            <th className="tdFav">Fav</th>
            <th>Qty</th>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        {items.map((inventoryItem) => (
          <tbody key={inventoryItem._id}>
            <ListItem inventoryItem={inventoryItem} handleRemoveOne={deleteOne} update={update} />
          </tbody>
        ))}
      </table>
    </div>
  );
}
