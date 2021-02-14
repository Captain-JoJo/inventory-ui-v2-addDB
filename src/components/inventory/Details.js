import React, { useState } from 'react'
import axios from 'axios'

export default function GetInventoryData() {

    const [inputText, setInputText] = useState("")
    const [items, setItems] = useState([])

    function handleChange(event) {
        const newValue = event.target.value
        console.log('new Value', newValue);
        setInputText(newValue)
    }

    const insertItems = async (event) => {
        axios.get("https://inventoryv2api.herokuapp.com/insertData").then(res => {
            console.log('the body', res.body);
            console.log('the data', res.data);
        //setItems(res.data)
        })
    }

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
            console.log('Only deleting one');
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
                <input 
                    onChange={handleChange}
                    type="text"
                    placeholder="Add Item"
                    value={inputText}
                />
                <button onClick={insertItems}>
                    <span>Add Item</span>
                </button>
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