import React from "react";
import "./drop.css"
const DropElements = ({ item , setTarget , setShowDropdown }) => {
    return(
        <div className="dropdown_div" onClick={ () => { setTarget(item); setShowDropdown(false); } } >
            <span
            className="drop_span"
            >{ item }</span>
        </div>
    );
}

export default DropElements;