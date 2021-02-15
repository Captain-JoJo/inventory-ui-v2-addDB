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
        const payload = {name: "Haley, rating: 9, review: "I am here"}
        axios.post("https://inventoryv2api.herokuapp.com/insertData", payload).then(res => {
            res.headers({method: 'post'})
            console.log('headers', res.headers);
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
            remove('60297c54f8facd0015281695')
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
