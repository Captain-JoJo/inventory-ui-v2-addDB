import React, {useState, useEffect} from "react";
import {getAllItems} from "../../../api/inventoryItem";

function Favorites() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("run one time to get the starting data");
    displayItems(setItems);
  }, []);

  async function displayItems() {
    try {
      const results = await getAllItems();
      displayFavs(results);
      console.log("testing results", results);
      setLoading(false)
    } catch (error) {
      console.log("getAllItems sql error", error);
    }
  }
  function displayFavs(results) {
    const updatedFavItems = results.filter((item) => item.fav);
    setItems(updatedFavItems);
    console.log("fav items", updatedFavItems);
  }
  return (
    <div className="grid-container">
      {loading ? (
        <div> Loading results...</div>
      ) : (
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
              <tr>
                <td>✔️</td>
                <td className="tdQty">{inventoryItem.qty}</td>
                <td className="tdName">{inventoryItem.name}</td>
              </tr>
            </tbody>
          ))}
        </table>
      )}
    </div>
  );
}
export default Favorites;
