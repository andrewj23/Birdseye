import React, { Component, useState } from "react";
import "./WalletCard.css"
import TransactionFeed from "./TransactionFeed";
import tokenSlugs from "../tokenSlugs";

const HoldingCard = (props) => {
  let imgFile = "../logo.svg";
  if (tokenSlugs[props.tokenObj.token]){
    imgFile = "../icons/" + tokenSlugs[props.tokenObj.token] + ".png";
  }
  return (
    <div className={"holdingCard"}>
      <img src={imgFile} className={"coinHolding-img"}/>
      <div className={"holdingText"}>
        <div className={"holdingAmount"}>{props.tokenObj.balance} {props.tokenObj.token}</div>
        <div className={"holdingPerc"}>{(((props.tokenObj.balance*props.priceData[props.tokenObj.token]) / props.totalWalletVal) * 100).toFixed(2)}% of wallet value</div>
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
    holdings.classList.toggle("hide");
      transactions.classList.toggle("hide");
      if (expanded) {
        walletCard.style.height = "150px";
        button.innerHTML = "▼";
        setExpanded(false)
      }
      else {
        walletCard.style.height = "300px";
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
  <div id={`${props.name}-walletCard`} className={"walletCard-container"}>
    <img src={imgFile} alt="icon" className="wallet-img" />
    <div className={"walletType"}>
      <div className="walletCard-type">{props.name}</div>
      <div className={"totalValue"}>Total: ${totalWalletVal.toFixed(2)}</div>
      <div className={"totalPerc"}>{((totalWalletVal / props.totalVal) * 100).toFixed(2)}% of Portfolio Value</div>
    </div>
    <div id={`${props.name}-holdings`} className="walletCard-holdings hide">
      <div className="holdings-title">Holdings:</div>
      <div className="walletCard-balance">{coinsList}</div>
    </div>
    <div id={`${props.name}-transactions`} className="walletCard-transactions hide">
      <div className="transactions-title">Transaction History:</div>
      <div className="transactions-feed"><TransactionFeed allTransactions={props.allTransactions} /></div>
    </div>
    <button id={`${props.name}-dropdown`} onClick={clickToExpandCards} className={"expand"}>▼</button>
  </div>
  );
};


export default WalletCard;