import axios from "axios";
import api from "./api";

const BASE_URL = "http://localhost:5000";
const HEROKU_URL = "https://inventoryv2api.herokuapp.com";

export async function insertItem(itemName, itemQty) {
  const payload = {
    name: itemName,
    qty: itemQty,
  };
  // try/catch here for an error on ID
  // - if replacing axios with and "api" wrapper 
  //   it allows for a SOFT error instead of a HARD error to the user
  try {
    let results = await axios.post(`${HEROKU_URL}/insertData`, payload);
    return results.data._id;
  } catch (error) {
    console.log('Need to catch error here', error);
  }
}

export async function getAllItems() {
  return await axios.get(`${HEROKU_URL}/getData`).then((res) => {
    return res.data;
  });
}

export async function deleteAllItems() {
  axios.delete(`${HEROKU_URL}/deleteAll`).then((res) => {
    console.log(res.data);
  });
}

export async function deleteOneItem(id) {
  return axios.delete(`${HEROKU_URL}/deleteOne/${id}`).then((res) => {

    console.log("I am trying to remove this one", id);
    console.log("This is the res.data in deleteOneItem function", res.data);
    return res.data;
  });
}
export async function updateOneItem(id, itemName, itemQty, itemFav) {
  const payload = { name: itemName, qty: itemQty, fav: itemFav };
  return axios.put(`${HEROKU_URL}/updateOne/${id}`, payload).then((res) => {
    console.log("I am trying to update this one", id);
    console.log("This is the res.data in updateOneItem function", res.data);
    return res.data;
  });
}

// NOT used yet
// export async function updateAllItems() {
//   axios.put(`${BASE_URL}/updateAll`).then((res) => {
//     console.log(res.data);
//   });
// }

