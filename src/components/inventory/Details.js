import React, { useState } from 'react'
import axios from 'axios'
import '../../styles/details.css'

export default function GetInventoryData() {

    const BASE_URL = "http://localhost:5000"
    const HEROKU_URL = "https://inventoryv2api.herokuapp.com"

    const [inputText, setInputText] = useState("")
    const [items, setItems] = useState([])

    
    // https://github.com/axios/axios#creating-an-instance
    // const axiosCreate = axios.create({
    //     baseURL: "http://localhost:5000/",
    //     responseType: "json"
    // });

    // const insertItemsSample = async() =>{
         //const res = await axios.post('https://httpbin.org/post', { hello: 'world' });    
    //     const res = await axios.post('http://localhost:5000/insertData');
    //     const res = await axios.post('http://localhost:5000/insertData', { hello: 'world' })
    //         .then(function (response) {
    //          console.log(response);
    //        });
        //console.log('this is the res of sample', res);
    // }


    const insertItems = async () => {
        const payload = inputText
        // const stringifiedVersion = JSON.stringify(payload)

        await axios.get(`${HEROKU_URL}/insertData?name=` + payload, 
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            ).then(res => {
            // res.headers "Access-Control-Allow-Origin": "*"};
            // console.log('headers', res.headers);
            // res.headers({method: 'post'})
            console.log('the UI response entire object', res);
            console.log('the UI res.data info', res.data);
            console.log('res.body id', res.data._id)
        })
        setInputText("")
        getItems()
    }

    const getItems = async () => {
        axios.get(`${HEROKU_URL}/getData`).then(res => {
            setItems(res.data)
        })
    }

    const deleteAll = async () => {
        axios.get(`${HEROKU_URL}/deleteAll`).then(res => {
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
        axios.get(`${HEROKU_URL}/deleteOne`).then(res => {
            remove(items.filter(item => item.id !== id))
            getItems()
            console.log('Only deleting one');
        })
    }
    const remove = (id) => {
        setItems(items.filter(item => item.id !== id))
        console.log('regular id', id);
    }

    function handleChange(event) {
        const newValue = event.target.value
        console.log('new Value', newValue);
        setInputText(newValue)
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
                   <span>Get Items</span>
                </button>
                <button className="fetch-button" onClick={deleteAll}>
                    <span>Delete All Items</span>
                </button>
            </div>
            <div>
                {items.map(item =>(
                    <div>
                        <span className="delete-me" name={item.name} onClick={() => deleteOne(item._id) }>X</span>
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