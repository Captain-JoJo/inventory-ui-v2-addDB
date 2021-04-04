import React from "react";
import {NavLink, Link} from "react-router-dom";

function Favorites() {
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
        <tbody>stuff here</tbody>
        {/* {items.map((inventoryItem) => (
          <tbody key={inventoryItem._id}>
            <ListItem
              inventoryItem={inventoryItem}
              handleRemoveOne={deleteOne}
              update={update}
            />
          </tbody>
         ))}  */}
      </table>
    </div>
  );
}
export default Favorites;
