import React, { useState } from 'react'
import InventoryItem from './InventoryItem'
import '../../styles/inventory.css'

function InventoryList() {

    const [inputText, setInputText] = useState("")
    const [items, setItems] = useState([])

    function handleChange(event) {
        const newValue = event.target.value
        setInputText(newValue)
    }
    function addItem() {
        setItems(prevItems => {
            return [...prevItems, inputText]
        })
        setInputText("")
    }
    function deleteItem(id) {
        setItems(prevItems => {
            return prevItems.filter((item, index) => {
                return index !== id
            })
        })
    }


    return (
        <div className="grid-container">
            <div>
                <input 
                    onChange={handleChange}
                    type="text"
                    placeholder="Add Item"
                    value={inputText}
                />
                <button onClick={addItem}>
                    <span>Add Item</span>
                </button>
            </div>
            <div>
                <ul>
                    {items.map((inventoryItem, index) => (
                        <InventoryItem
                            key={index}
                            id={index}
                            text={inventoryItem}
                            onChecked={deleteItem}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
    
}

export default InventoryList