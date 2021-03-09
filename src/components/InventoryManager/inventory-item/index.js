// import React, { useState } from "react";
// import {
//     insertItem,
//     getAllItems,
//     deleteAllItems,
//     deleteOneItem,
//   } from "../../../api/inventoryItem";
    
//   export async function addNewItem(item, setItems, items) {
//     try {
//       const _id = await insertItem(item);

//       const updatedItems = [...items, { _id: _id, name: item}];
//       setItems(updatedItems);
//     } catch (error) {
//       console.log("sql error", error);
//     }
//   }

//   export async function displayItems(setItems) {
//     const results = await getAllItems();
//     setItems(results);
//   }

//   export async function deleteAll(setItems) {
//     try {
//       await deleteAllItems();
//       setItems([]);
//     } catch (error) {
//       console.log("sql error", error);
//     }
//   }

//   export async function deleteOne(id, setItems, items) {
//     try {
//       const results = await deleteOneItem(id);
//       setItems(items.filter((item) => item._id !== id));
//     } catch (error) {
//       console.log("sql error", error);
//     }
//   }
// //}