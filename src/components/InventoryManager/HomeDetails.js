import React, { useState, useInputState } from 'react'
import './HomeDetails.css'
import InputForm from './input-form'
import { insertItem, getAllItems, deleteAllItems, deleteOneItem } from '../../api/inventoryItem'

export default function GetInventoryData() {

    const BASE_URL = "http://localhost:5000"
    const HEROKU_URL = "https://inventoryv2api.herokuapp.com"

    //const [inputText, setInputText] = useState("")
    const [items, setItems] = useState([])


    async function addNewItem(item) {
        const updatedItems = [ ...items, { name: item } ]
        console.log(updatedItems);

        try {
            await insertItem(item)
            setItems(updatedItems)
        } catch (error) {
            console.log('sql error', error);
        }
    }

    async function displayItems(){
        const results = await getAllItems()
        setItems(results)
    }

    async function deleteAll() {
        try {
            await deleteAllItems()
            setItems([])
        } catch (error) {
            console.log('sql error', error);
        }
    }
    
    async function deleteOne(id) {
        console.log('initial id', id);
        const removingId = items.filter(item => item.id !== id)
        console.log('this is the result of items.filter and the IDs found', removingId);
        try {
            const results = await deleteOneItem(removingId)
            console.log('const results from the await deleteOneItem', results);
            //setItems(removingId)

        } catch (error) {
            console.log('sql error', error);
        }
    }

    //These 2 need to combine or figure out which one to use
    const remove = (id) => {
        setItems(items.filter(item => item.id !== id))
        console.log('regular id', id[0]._id);
        
    }
    function deleteItem(id) {
        setItems(prevItems => {
            return prevItems.filter((item, index) => {
                console.log('deleting items', item);
                return item.id !== id
            })
        })
    }
    
    return (
        <div className="grid-container">
            <div>
                <InputForm addNewItem={addNewItem} className="InputForm" />
            </div>
            <div>
                <button onClick={displayItems}>
                    <span>Get Items</span>    
                </button>
                <button onClick={deleteAll}>
                    <span>Delete All Items</span>
                </button>
            </div>                
            <div>
                {items.map(item =>(
                    <div>
                        <span className="delete-one-item" name={item.name} onClick={() => deleteOne(item._id) }>X</span>
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}   

//extra 
{/* {console.log(item._id)} */}
{/* <span>
    <button
        aria-label="DeleteOne"
        onClick={() => remove(item.id)}
    >
        Delete
    </button>
</span> */}