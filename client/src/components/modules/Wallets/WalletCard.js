import React, { useState } from "react";
import "./WalletCard.css"
import TransactionFeed from "./TransactionFeed";


const HoldingCard = (props) => {
  let imgFile = "../icons/" + props.tokenObj.slug + ".png";
  return (
    <div className={"holdingCard-container"}>
      <img src={imgFile} className={"holdingCard-img"}/>
      <div className={"holdingCard-text"}>
        <div className={"holdingCard-amount"}>{props.tokenObj.balance} {props.tokenObj.token}</div>
        <div className={"holdingCard-percent"}>{(((props.tokenObj.balance*props.priceData[props.tokenObj.token]) / props.totalWalletVal) * 100).toFixed(2)}% of wallet value</div>
      </div>
    </div>
  )
}


const WalletCard = (props) => {
  const [expanded, setExpanded] = useState(false)

  function clickToExpandCards(){
    let holdings = document.getElementById("walletCard-holdingsContainer");
    let transactions = document.getElementById("walletCard-transactionsContainer");
    let walletCard = document.getElementById("walletCard-container");
    let button = document.getElementById("walletCard-button");
    let pieChart = document.getElementById("walletCard-pieChart");
    holdings.classList.toggle("hide");
    transactions.classList.toggle("hide");
    pieChart.classList.toggle("hide");
    if (expanded) {
      walletCard.style.height = "125px";
      button.innerHTML = "▼";
      setExpanded(false)
    }
    else {
      walletCard.style.height = "320px";
      button.innerHTML = "▲";
      setExpanded(true)
    }
  };

  let coinsList = null;
  let totalWalletVal = 0;
  const hasCoins = props.tokens.length !== 0;
  if (hasCoins) {
    for (const token of props.tokens) {
      totalWalletVal += token.balance*props.priceData[token.token]
    }
    coinsList = props.tokens.map((tokenObj) => (
      <HoldingCard tokenObj={tokenObj} totalWalletVal={totalWalletVal} priceData={props.priceData} />
    ));
  } else {
    coinsList = <div>No coins in wallet!</div>;
  }
  let imgFile = "../" + props.name.toLowerCase() + ".svg";
  
  return (
  <div id="walletCard-container" className={"walletCard-container"}>
    <div className="walletCard-description">
      <div className="walletCard-descriptionTop">
        <img src={imgFile} alt="icon" className="walletCard-img" />
        <div className={"walletCard-info"}>
          <div className="walletCard-type">{props.name}</div>
          <div className={"walletCard-totalVal"}>Total: ${totalWalletVal.toFixed(2)}</div>
          <div className={"walletCard-totalPercent"}>{((totalWalletVal / props.totalVal) * 100).toFixed(2)}% of Portfolio Value</div>
        </div>
      </div>
      <div id= "walletCard-pieChart" className="walletCard-pieChart hide">
        <p>chart</p>
      </div>
    </div>
    <div id="walletCard-holdingsContainer" className="walletCard-holdingsContainer hide">
      <div className="walletCard-holdingsTitle">Holdings:</div>
      <div className="walletCard-holdingsFeed">{coinsList}</div>
    </div>
    <div id="walletCard-transactionsContainer" className="walletCard-transactionsContainer hide">
      <div className="walletCard-transactionsTitle">Transaction History:</div>
      <div className="walletCard-transactionsFeed"><TransactionFeed allTransactions={props.allTransactions} /></div>
    </div>
    <button id="walletCard-button" onClick={clickToExpandCards} className="walletCard-button">▼</button>
  </div>
  );
};


export default WalletCard;