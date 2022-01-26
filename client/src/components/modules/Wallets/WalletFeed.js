import React, { useState } from "react";
import WalletCard from "./WalletCard";
import AddWalletPopup from "../AddWalletPopup";
import "./WalletFeed.css"

const WalletFeed = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const hasWallets = props.wallets.length !== 0;

  if (!props.userId) {
    return (<div>Log in!</div>);
  }

  return hasWallets ? (
    <>
    <div className="walletfeed-topContainer">
      <div className="walletfeed-search">
        <input type="text" placeholder="Search" className="walletfeed-input" 
          onChange={(event) => { setSearchTerm(event.target.value); }} />
      </div>
      <AddWalletPopup />
    </div>
    <div className={"walletfeed-container"}>
      {props.wallets.filter((walletObj) => {
        if (searchTerm === "") { 
          return walletObj 
        } else if (walletObj.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return walletObj
        }
      }).map((walletObj) => (
        <WalletCard name={walletObj.name} tokens={walletObj.tokens} allTransactions={props.allTransactions}
                    priceData={props.priceData} totalVal={props.totalVal} coins={props.coins} />
      ))}
    </div>
    </>
  ) : (
    <>
    <div className="walletfeed-topContainer">
      <div className="walletfeed-search">
        <input type="text" placeholder="Search" className="walletfeed-input" 
          onChange={(event) => { setSearchTerm(event.target.value); }} />
      </div>
      <AddWalletPopup />
    </div>
    <div>No wallets!</div>
    </>
  );
};


export default WalletFeed;