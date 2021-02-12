import React, { useState } from 'react'
import axios from 'axios'

export default function GetInventoryData() {
const [items, setItems] = useState([])

const getItems = async () => {
    axios.get("https://inventoryv2api.herokuapp.com/getData").then(res => {
        setItems(res.data)
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
                            {`My fruits: ${item.name} ${item.rating} ${item.review}`}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}   