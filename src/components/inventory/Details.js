import React, { useState } from 'react'
import axios from 'axios'

export default function GetInventoryData() {

    const BASE_URL = "http://localhost:5000"
    const HEROKU_URL = "https://inventoryv2api.herokuapp.com"

    const [inputText, setInputText] = useState("")
    const [items, setItems] = useState([])

    function handleChange(event) {
        const newValue = event.target.value
        console.log('new Value', newValue);
        setInputText(newValue)
    }
    
    /*
    
    https://github.com/axios/axios#creating-an-instance
    
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  }); */


    const insertItems = async (event) => {
        const payload = {name: "Haley"}
        // await axios.post("http://localhost:5000/insertData").then(res => {
        //         console.log('the respone API data', res.data);
        //         console.log(payload);
        //     //setItems(res.data)
        // })
        
        axios.post("https://inventoryv2api.herokuapp.com/insertData").then(res => {
            // res.headers "Access-Control-Allow-Origin": "*"};
            // console.log('headers', res.headers);
            // res.headers({method: 'post'})
            console.log('the request UI name', res);
            console.log('the requeted UI data', res.data);
            console.log('res.body id', res.data._id)
        })

    }

    const getItems = async () => {
        const payload = {name: "Haley"}
        axios.get("http://localhost:5000/getData").then(res => {
            console.log(payload);
            setItems(res.data)
        })
    }

    const remove = (id) => {
        setItems(items.filter(item => item.id !== id))
        console.log('regular id', id);

    }

    function deleteItem(id) {
        setItems(prevItems => {
            return prevItems.filter((item, index) => {
                console.log('deleting items', item);
                return item.id !== id
            })
        })
    }

    const deleteAll = async () => {
        axios.get("http://localhost:5000/deleteAll").then(res => {
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
        axios.get("http://localhost:5000/deleteOne").then(res => {
            remove('60297c54f8facd0015281695')
            console.log('Only deleting one');
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
                        <span>
                            <button
                            aria-label="DeleteOne"
                            onClick={() => remove(item.id)}
                            >
                            Delete
                            </button>
                        </span>
                        <span name={item.name} onClick={() => deleteOne(item.id)}>X</span>
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}   
