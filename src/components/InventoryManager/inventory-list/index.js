import React, {useState} from 'react'
import "../HomeDetails.css";
import { deleteOneItem } from "../../../api/inventoryItem";

function List() {
    const [items, setItems] = useState([]);

    async function deleteOne(id) {
        console.log("initial id", id);
        try {
        const results = await deleteOneItem(id);
        setItems(items.filter((item) => item._id !== id));
        console.log("const results from the await deleteOneItem", results);
        } catch (error) {
        console.log("sql error", error);
        }
    }

    return(
        <div className="ListContainer">
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
        </div>
    )
}

export default List