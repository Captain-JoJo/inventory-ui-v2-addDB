import React from "react";
import "../HomeDetails.css";

export default function List(props) {
  const displayItem = (props) => {
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
    );
  };
  return <> {displayItem(props)} </>;
}
