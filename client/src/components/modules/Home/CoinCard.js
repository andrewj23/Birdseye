import React, { Component } from "react";
import "./CoinCard.css"

const CoinCard = (props) => {
  return (
    <div className="Card-container">
{/*<img />*/}
<span className={"coin-name"}>{props.token}</span>
<span>
<span className={"coin-holding"}>{props.balance}</span>
  <div className={"coin-info"}>
<span>{props.currentPrice}</span>
    <span className={"coin-change"}>-1.83</span>
<p>23% of portfolio value</p>
    </div>
</span>
    </div>
  );
};

export default CoinCard;