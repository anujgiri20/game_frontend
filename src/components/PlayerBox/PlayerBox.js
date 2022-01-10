import React from "react";
import styled from "styled-components";

import SelectionKey from "./SelectionKey/SelectionKey";


const PlayerBox = ({ validator , resultMode }) => {
    return (
        <div className="game_div">
          <h1 className="player_heading" style={{fontSize:"1rem"}}>YOU</h1>
            {
                resultMode.value === false ?
                    ["STONE","PAPER","SCISSOR"].map( (item) =>
                        <SelectionKey value={item} resultMode={resultMode} validator={validator} /> ) :
                    <>
                        <SelectionKey value={resultMode.user} resultMode={resultMode} />   
                        <div><p style={{
                            marginTop:"40px"
                        }} className="p_game">{resultMode.result}</p></div>
                    </>
            }
        </div>
    );
}

export default PlayerBox;