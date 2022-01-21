import React, { Component } from "react";
import "./WalletCard.css"
import TransactionFeed from "./TransactionFeed";

const WalletCard = (props) => {
  let coinsList = null;
  const hasCoins = props.tokens.length !== 0;
  if (hasCoins) {
    coinsList = props.tokens.map((tokenObj) => (
      <div>{tokenObj.balance} {tokenObj.token}</div>
    ));
  } else {
    coinsList = <div>No coins in wallet!</div>;
  }
  return (
  <div className={"walletCard-container"}>
    <div className="walletCard-type">{props.name}</div>
    <div className="walletCard-holdings">
      Holdings:
      <div className="walletCard-balance">{coinsList}</div>
    </div>
    <div className="walletCard-transactions">
      Transaction History:
      <TransactionFeed allTransactions={props.allTransactions}/>
    </div>
  </div>
  );
};

export default WalletCard;