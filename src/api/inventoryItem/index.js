import axios from 'axios'

const BASE_URL = "http://localhost:5000"
const HEROKU_URL = "https://inventoryv2api.herokuapp.com"


export async function insertItem(item, review) {
    const payload = { 
        name: item, 
        review: "review23" 
    }

    let result = await axios.post(`${BASE_URL}/insertData`, payload)
    return result.data._id
}

//Old way of before converting to a POST - will remove later
// export async function insertItem(item) {
//     return axios.get(`${BASE_URL}/insertData?name=` + item, 
//         {
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         }).then(res => {
//         console.log('the UI response entire object', res);
//         console.log('the UI res.data info', res.data);
//         console.log('res.body id', res.data._id)
//     })
// }

export async function getAllItems() {
    return (
        await axios.get(`${BASE_URL}/getData`).then(res => {
            return res.data
        })
    )
}

export async function deleteAllItems() {
    axios.get(`${BASE_URL}/deleteAll`).then(res => {
        console.log(res.data);
    })
}


export async function deleteOneItem(id) {
    return (
        axios.get(`${BASE_URL}/deleteOne`).then(res => {
            console.log('I am trying to remove this one', id);
            console.log('This is the res.data in deleteOneItem function', res.data);
            return res.data
        })
    )
}