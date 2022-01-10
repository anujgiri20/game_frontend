import React from "react";
import styled from "styled-components";
import SelectionKey from "../PlayerBox/SelectionKey/SelectionKey";
import "./computer.css"

const ComputerBox = ({ resultMode }) => {
    return (
        <div className="computer" change={resultMode.value} >
            {
                resultMode.value === false ? 
                <> 
                    <div > <p style={{
                        marginTop:"20px"
                    }} className="p_game">Computer Selected one.</p></div> 
                    <div><p className="p_game">It's your turn</p></div>
                </> :
                <>
                    <div><p style={{
                        marginTop:"20px"
                    }} className="p_game">COMPUTER</p></div>
                    <SelectionKey value={resultMode.computer} resultMode={resultMode} />
                    <div>
                        {
                            resultMode.result=== "PASS" ? <p className="p_game">FAIL</p> :
                                resultMode.result=== "FAIL" ? <p className="p_game">PASS</p>:<p className="p_game">DRAW</p>
                        }
                    </div>
                </>
            }
        </div>
    );
}

export default ComputerBox;