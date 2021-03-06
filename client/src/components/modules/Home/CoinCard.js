import React, { Component } from "react";
import "./CoinCard.css";
import tokenSlugs from "../tokenSlugs";


const CoinCard = (props) => {
  let imgFile = "../logo.svg";
  if (tokenSlugs[props.token]){
    imgFile = "../icons/" + tokenSlugs[props.token] + ".png";
  }
  let percentage = ((props.curval / props.totalVal) * 100).toFixed(2);

  return (
    <div className="card-container">
      <div className="card-coin">
        <div className="card-icon"><img src={imgFile} alt="icon" className="card-img" /></div>
        <div className="card-ticker">{props.token}</div>
      </div>
      <div className="card-data">
        <div className="card-balance">{props.balance}</div>
        <span className="card-currval">Current Value: ${props.curval}</span>
        <div className="card-percentage">{percentage}% of Portfolio Value</div>
      </div>
    </div>
  );
};


export default CoinCard;