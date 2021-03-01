import React from 'react'
import "../HomeDetails.css";

export default function List(props) {

 const displayItems = (props) => {
    console.log('trying to see if there are any props here', props);

    if(props.name.length > 0){
        return (
             <div className="ListContainer">
                <ul>
                    <li>
                        <span>{props.name}</span>
                        <span className="button-group">
                            <span
                                className="button"
                                _id={props._id}
                                name={props.name}
                                onClick={() => props.onChecked(props._id)}
                            >
                                Remove
                            </span>
                        </span>
                    </li>
                </ul>
            </div>
        )
    } else {
        return (<h3>I have no items to display yet</h3>)
    }
 }
 return (
     <> {(displayItems(props))} </>
 )
}





/*
const [items, setItems] = useState([]);

    async function deleteOne(id) {
        console.log("initial id", id);
        try {
        const results = await deleteOneItem(id);
        setItems(items.filter((item) => item._id !== id));
        console.log("const results from the await deleteOneItem", results);
        } catch (error) {
        console.log("sql error", error);
        }
    }

    return(
        <div className="ListContainer">
            <ul>
            {items.map((item) => (
                <div key={item._id}>
                <li>
                    <span>{item.name}</span>
                    <span className="button-group">
                    <span
                        className="button"
                        name={item.name}
                        onClick={() => deleteOne(item._id)}
                    >
                        Remove
                    </span>
                    </span>
                </li>
                </div>
            ))}
            </ul>
        </div>
    )
    */