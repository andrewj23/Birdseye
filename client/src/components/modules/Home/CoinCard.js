import React, { Component } from "react";
import "./CoinCard.css";


const CoinCard = (props) => {
  let imgFile = "./icons/" + props.slug + ".png";

  return (
    <div className="card-container">
      <div className="card-icon"><img src={imgFile} alt="icon" className="card-img" /></div>
      <div className="card-balance">{props.balance}</div>
      <div className="card-ticker">{props.token}</div>
      <div className="card-data">
        <span className="card-currval">Current Value: {props.curval}</span>
        <span className="card-changeinval">{/* api data */}-1.83%</span>
        <div className="card-percentage">{/* calculation */}23% of Portfolio Value</div>
      </div>
    </div>
  );
};


export default CoinCard;