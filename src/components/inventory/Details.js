import React, { useState } from 'react'
import axios from 'axios'

export default function GetInventoryData() {
const [items, setItems] = useState([])

const getItems = async () => {
    axios.get("http://localhost:4000/getData").then(res => {
        setItems(res.data)
        console.log(res.data);
    })
}

    return (
        <div className="grid-container">
            <div>
                <button className="fetch-button" onClick={getItems}>
                    Get Items
                </button>
            </div>
            <div>
                <ul>
                    {items.map(item =>(
                        <li>
                            {`${item.name} ${item.rating} ${item.review}`}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}   