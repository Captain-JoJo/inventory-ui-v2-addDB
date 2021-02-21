import axios from 'axios'

const BASE_URL = "http://localhost:5000"
const HEROKU_URL = "https://inventoryv2api.herokuapp.com"

export async function getItems2() {
    axios.get(`${BASE_URL}/getData`).then(res => {
        console.log(res.data);    
        //setItems(res.data)
    })
}

export async function deleteAll2() {
    axios.get(`${BASE_URL}/deleteAll`).then(res => {
        console.log(res.data);
        //     if (setItems > 0) {
        //         setItems(res.data)
        //     } else {
        //         deleteItem()            
        //         console.log('deleteItems function called');
        //     }
        //     console.log(res.data);
    })
}

export async function insertItems2() {
    console.log("I am in insertItems2");
    //const payload = inputText
    // // const stringifiedVersion = JSON.stringify(payload)
    
    // await axios.get(`${BASE_URL}/insertData?name=` + payload, 
    //     {
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     }).then(res => {
    //     console.log(res.data);
    //     //     console.log('the UI response entire object', res);
    //     //     console.log('the UI res.data info', res.data);
    //     //     console.log('res.body id', res.data._id)
    // })
    // setInputText("")
    // getItems()
}

// const api = async () => (
//     await axios({
//         url: 'http://localhost:3000/',
//         method: 'get',
//         headers: {
//             'Authorization': '*'
//         }
//     })
// )