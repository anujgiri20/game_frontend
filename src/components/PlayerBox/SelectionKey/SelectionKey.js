import React from "react";
import styled from "styled-components";
import stone from "./images/icon-rock.png"
import paper from "./images/icon-paper.png"
import scissor from "./images/icon-scissors.png"
import "./selection.css"

var  stone_var  = "STONE"
var  paper_var  = "PAPER"
var  SCISSOR_var = "SCISSOR"
const SelectionKey = ({ value , resultMode , validator }) => {
    return (
        <div className="player_div" onClick={ () => !resultMode.value && validator(value) } >
            {
             (stone_var == value) ? <div><img src={stone} /></div> : ((paper_var == value) ? <div><img src={paper} /></div> : ((SCISSOR_var == value) ? <div><img src={scissor} /></div> : "")) 
            }
        </div>
    );
}

export default SelectionKey;