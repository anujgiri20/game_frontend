import React from "react";
import styled from "styled-components";
import "./drop.css"
import DropElements from "./DropElements";



const Dropdown = ({setTarget,setShowDropdown}) => {
    const dropValues = [ 5 , 10 , 15 , 20 ] ;
    return(
        <div className="drop_down">
            <div>
                { dropValues.map( (item , index) => 
                <DropElements key={index} item={item} setTarget={setTarget} setShowDropdown={setShowDropdown} />) }
            </div>
        </div>
    );
}

export default Dropdown;