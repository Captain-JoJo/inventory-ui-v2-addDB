import React, {Fragment, useState, useEffect} from "react";
import {NavLink, Link} from "react-router-dom";
import {
  insertItem,
  getAllItems,
  deleteAllItems,
  deleteOneItem,
  updateOneItem,
} from "../../../api/inventoryItem";

function Favorites() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("run one time to get the starting data");
    displayItems(setItems);
    displayFavs()
  }, []);

  useEffect(() => {
    console.log("second useEffect runs whenever the dataArray changes");
  }, [displayFavs]);

  async function displayItems() {
    try {
      const results = await getAllItems();
      setItems(results);
      console.log('testing results',results);
    } catch (error) {
      console.log("getAllItems sql error", error);
    }
  }
  function displayFavs() {
    const updatedFavItems = items.filter((item) => item.fav !== false);
    setItems(updatedFavItems);
    console.log("fav items", updatedFavItems);
  }
  return (
    <div className="grid-container">
      <table className="TableContainer">
        <thead>
          <tr className="trHead">
            <th className="tdFav">Fav</th>
            <th>Qty</th>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        {items.map((itemRow) => (
          <Fragment>
          <tr>
          <tbody key={itemRow._id}>
            <td className="tdQty">{itemRow.qty}</td>
            <td className="tdName">{itemRow.name}</td>
          </tbody>
          </tr>
          </Fragment>
         ))} 
      </table>
    </div>
  );
}
export default Favorites;
