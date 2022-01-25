import React, { Component, useState } from "react";
import "./WalletCard.css"
import TransactionFeed from "./TransactionFeed";

const HoldingCard = ({tokenObj}) => {
  let imgFile = "../icons/" + tokenObj.slug + ".png";
  return (
    <div className={"holdingCard"}>
   <img src={imgFile} className={"coinHolding-img"}/>
      <div className={"holdingText"}>
    <div className={"holdingAmount"}>{tokenObj.balance} {tokenObj.token}</div>
      <div className={"holdingPerc"}>32% of wallet value</div>
      </div>
    </div>
  )
}


const WalletCard = (props) => {
const [expanded, setExpanded] = useState(false)
  function clickToExpandCards(){
      let holdings = document.getElementById("holdings");
    let transactions = document.getElementById("transactions");
    let walletCard = document.getElementById("walletCard");
    let button = document.getElementById("dropdown");
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
  const hasCoins = props.tokens.length !== 0;
  if (hasCoins) {
    coinsList = props.tokens.map((tokenObj) => (
      <HoldingCard tokenObj={tokenObj}/>
    ));
  } else {
    coinsList = <div>No coins in wallet!</div>;
  }
  let imgFile = "../" + props.name.toLowerCase() + ".svg";
  return (
  <div id="walletCard" className={"walletCard-container"}>
    <img src={imgFile} alt="icon" className="wallet-img" />
    <div className={"walletType"}>
    <div className="walletCard-type">{props.name}</div>
      <div className={"totalValue"}>Total: $420,690</div>
      <div className={"totalPerc"}>18% of portfolio value</div>
    </div>
    <div id="holdings" className="walletCard-holdings hide">
      Holdings:
      <div className="walletCard-balance">{coinsList}</div>
    </div>
    <div id="transactions" className="walletCard-transactions hide">
      Transaction History:
      <TransactionFeed allTransactions={props.allTransactions}/>
    </div>
    <button id="dropdown" onClick={clickToExpandCards} className={"expand"}>▼</button>
  </div>
  );
};

export default WalletCard;