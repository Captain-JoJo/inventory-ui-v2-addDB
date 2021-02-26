import axios from 'axios'

const BASE_URL = "http://localhost:5000"
const HEROKU_URL = "https://inventoryv2api.herokuapp.com"


export async function insertItem(item, review) {
    console.log('simple item', item);

    const base_url2 = "http://localhost:5000/insertData2"
    const payload = { name: item , review: "review23" }

    console.log('simple payload', payload);

    let result = await axios.post(base_url2, payload)

    console.log('simple axios result', result.data._id);
    return result.data._id
}


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