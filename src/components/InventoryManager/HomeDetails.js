import React, { useState, useInputState } from 'react'
import axios from 'axios'
import './HomeDetails.css'
import InputForm from './input-form'
import { insertItem, getAllItems, deleteAllItems } from '../../api/inventoryItem'

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

    const getItems = async () => {
        //axiosCallFile.getItems2()
        axios.get(`${BASE_URL}/getData`).then(res => {
            setItems(res.data)
        })
    }

    // const insertItems = async (item) => {
    //     const pearItem = setItems()
    //     console.log(pearItem);
    //     //api call with sending item="Pear"
    //     axiosCallFile.insertItems2(pearItem)
    //     // setInputText("")
    //     // getItems()
    // }
   
    const deleteAll = async () => {
        //axiosCallFile.deleteAll2()
        axios.get(`${BASE_URL}/deleteAll`).then(res => {
            if (setItems > 0) {
                setItems(res.data)
            } else {
                deleteItem()            
                console.log('deleteItems function called');
            }
            console.log(res.data);
        })
    }
    function deleteItem(id) {
        setItems(prevItems => {
            return prevItems.filter((item, index) => {
                console.log('deleting items', item);
                return item.id !== id
            })
        })
    }
    const deleteOne = async (id) => {
        axios.get(`${BASE_URL}/deleteOne`).then(res => {
            remove(items.filter(item => item.id !== id))
            getItems()
            console.log('Only deleting one');
        })
    }
    const remove = (id) => {
        setItems(items.filter(item => item.id !== id))
        console.log('regular id', id);
    }
    
    return (
        <div className="grid-container">
            <div>
                <InputForm addNewItem={addNewItem} className="InputForm" />
            </div>
            <div>
                <button onClick={getItems}>
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