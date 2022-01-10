import React from "react";
import styled from "styled-components";
import "./pop.css"
import NavElement from "./NavElement/NavElement";

import "./pop.css"



const PopUp = ({ target , setTarget , setShowPopUp , resultMode , setResultMode , gameOver , setGameOver }) => {
    const newGame = () => {
        setGameOver(false);
        setResultMode({ 
            value : false , 
            score : [0,0] ,
            user  : undefined ,
            computer: undefined ,
            result: undefined
          });
    }
    return(
        <div className="main_div">
            {
                gameOver ?
                <div className="target_div_1">
                    {
                        resultMode.score[0] > resultMode.score[1] ?
                           <div style={{padding:"20px"}}> "YOU WON THE GAME"</div> : <div style={{padding:"20px"}}>"COMPUTER WON THE GAME"</div>
                    }
                    <div>GAME OVER</div>
                    <button style={{
                        margin:"20px",
                        width:"80%",
                        marginTop:"20px",
                        marginBottom:"20px"
                    }} className="btn" onClick={ newGame } >NEWGAME</button>   
                </div>:
                <div>
                <h2
               className="head"
                >Choose the target score</h2>
                    <NavElement className="navelement" target={target} setTarget={setTarget} setShowPopUp={setShowPopUp} />
                    <button className="btn" onClick={() => setShowPopUp(false) } >OK</button>
                   
                </div> 
            }
        </div>
    );
}

export default PopUp;