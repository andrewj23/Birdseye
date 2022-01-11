import React, { Component } from "react";
import "./CoinCard.css"

const CoinCard = (props) => {
  return (
    <div className={"Card-container"}>
      <span>
  <div>
<img />
<h1 className={"coin-name"}>{props.token}</h1>
</div>
<div>
<h1 className={"coin-holding"}>{props.balance}</h1>
  <div className={"coin-info"}>
<p>{props.currentPrice}</p>
<p>23% of portfolio value</p>
    </div>
</div>
</span>
    </div>
  );
};

export default CoinCard;