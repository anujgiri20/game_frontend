import React , { useState } from "react";
import styled from "styled-components";
import "./drop.css"
import DropDown from "./DropDown";



const NavElement = ({ target , setTarget }) => {
    const [ showDropdown , setShowDropdown ] = useState(false);
    return(
        <div className="drop_down_pop" onMouseEnter={ () => setShowDropdown(true) } 
            onMouseLeave={ () => setShowDropdown(false) } onClick={ () => setShowDropdown(!showDropdown) }>

            <span 
          
            className="drop_span_">{ target }</span>
            { showDropdown && 
                <DropDown setTarget={setTarget} setShowDropdown={setShowDropdown} /> }
        </div>
    );
}

export default NavElement;