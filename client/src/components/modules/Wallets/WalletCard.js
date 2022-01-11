import React, { Component } from "react";
import "./WalletCard.css"

const WalletCard = (props) => {
  let coinsList = null;
  const hasCoins = props.tokens.length !== 0;
  if (hasCoins) {
    coinsList = props.tokens.map((CoinObj) => (
      <>
        {CoinObj.token} | {CoinObj.balance}</>
    ));
  } else {
    coinsList = <div>No coins in wallet!</div>;
  }
  return (
  <div className={"walletCard-container"}>
    {props.name}
    {coinsList}
  </div>
  );
};

export default WalletCard