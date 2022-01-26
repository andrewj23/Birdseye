import React, { useState } from "react";
import "./WalletCard.css"
import TransactionFeed from "./TransactionFeed";
import PieRechartComponent from "../Home/PieChart";
import tokenSlugs from "../tokenSlugs";

const HoldingCard = (props) => {
  let imgFile = "../logo.svg";
  if (tokenSlugs[props.tokenObj.token]){
    imgFile = "../icons/" + tokenSlugs[props.tokenObj.token] + ".png";
  }
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
      let holdings = document.getElementById(`${props.name}-holdings`);
    let transactions = document.getElementById(`${props.name}-transactions`);
    let walletCard = document.getElementById(`${props.name}-walletCard`);
    let button = document.getElementById(`${props.name}-dropdown`);
    let pieChart = document.getElementById(`${props.name}-pieChart`);
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
    coinsList = <div className="walletCard-noCoins">No coins in wallet!</div>;
  }
  let imgFile = "../" + props.name.toLowerCase() + ".svg";

  const chartCoins = props.tokens.map((coinObj) => {
    return {name: coinObj.token, balance: coinObj.balance}
  });

  return (
  <div id={`${props.name}-walletCard`} className={"walletCard-container"}>
    <div className="walletCard-description">
      <div className="walletCard-descriptionTop">
        <img src={imgFile} alt="icon" className="walletCard-img" />
        <div className={"walletCard-info"}>
          <div className="walletCard-type">{props.name}</div>
          <div className={"walletCard-totalVal"}>Total: ${totalWalletVal.toFixed(2)}</div>
          <div className={"walletCard-totalPercent"}>{((totalWalletVal / props.totalVal) * 100).toFixed(2)}% of Portfolio Value</div>
        </div>
      </div>
      <div id={`${props.name}-pieChart`} className="walletCard-pieChart hide">
        <PieRechartComponent coins={chartCoins} priceData={props.priceData} totalVal={totalWalletVal}
          width={335} height={210} outerRadius={75} />
      </div>
    </div>
    <div id={`${props.name}-holdings`} className="walletCard-holdingsContainer hide">
      <div className="walletCard-holdingsTitle">Holdings:</div>
      <div className="walletCard-holdingsFeed">{coinsList}</div>
    </div>
    <div id={`${props.name}-transactions`} className="walletCard-transactionsContainer hide">
      <div className="walletCard-transactionsTitle">Transaction History:</div>
      <div className="walletCard-transactionsFeed"><TransactionFeed allTransactions={props.allTransactions} /></div>
    </div>
    <button id={`${props.name}-dropdown`} onClick={clickToExpandCards} className="walletCard-button">▼</button>
  </div>
  );
};


export default WalletCard;