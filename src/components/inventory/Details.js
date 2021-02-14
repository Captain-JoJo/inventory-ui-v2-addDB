import React, { useState } from 'react'
import axios from 'axios'

export default function GetInventoryData() {
const [items, setItems] = useState([])

const getItems = async () => {
    axios.get("https://inventoryv2api.herokuapp.com/getData").then(res => {
        setItems(res.data)
    })
}
// const getItems = async () => {
//     axios.get("http://localhost:5000/getData").then(res => {
//         setItems(res.data)
//     })
// }

function deleteItem(id) {
    setItems(prevItems => {
        return prevItems.filter((item, index) => {
            console.log('deleting items', item);
            return item.id !== id
        })
    })
}

const deleteAll = async () => {
    axios.get("https://inventoryv2api.herokuapp.com/deleteAll").then(res => {
        if (setItems > 0) {
            setItems(res.data)
        } else {
            deleteItem()            
            console.log('deleteItems function called', deleteItem());
        }
        console.log(res.data);
    })
}

const deleteOne = async () => {
    axios.get("https://inventoryv2api.herokuapp.com/deleteOne").then(res => {

        deleteItem()
        setItems(res.data)
        console.log('Only deleting one', deleteItem());
    })
}

// const deleteItems = async () => {
//     axios.get("http://localhost:5000/deleteAll").then(res => {
//         if (setItems > 0) {
//             setItems(res.data)
//         } else {
//             deleteItem()            
//             console.log('deleteItems function called', deleteItem());
//         }
//         console.log(res.data);
//     })
// }


    return (
        <div className="grid-container">
            <div>
                <button className="fetch-button" onClick={getItems}>
                    Get Items
                </button>
                <button className="fetch-button" onClick={deleteAll}>
                    Delete All Items
                </button>
            </div>
            <div>
                {items.map(item =>(
                    <div>
                        <span name={item.name} onClick={deleteOne}>X</span>
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}   