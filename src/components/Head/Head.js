import React from "react";
import styled from "styled-components";
import "./Head.css"
const Div = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  min-height:10vh;
 
  padding:5px;
  box-sizing:border-box;
  color:white;
  & > div:nth-child(1){
    color:yellow;
 
    margin-top:80px;
  }
`;
const Head = ({ score }) => {
  return (
      <Div>
          <div
          className="heading"
       
          >STONE PAPER SCISSOR</div>
          <div 
          className="score"
          style={{
              fontSize:"1.3rem",
              fontStyle:" Open Sans, sans-serif"
          }}
          ><p className="p_game_">SCORE</p> : <p className="p_game_">{score[0]} </p> <p className="p_game_">-</p>  <p className="p_game_">{score[1]} </p> </div>
      </Div>
  );
}

export default Head;