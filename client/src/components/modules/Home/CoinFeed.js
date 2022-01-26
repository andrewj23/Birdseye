import React, { Component, useEffect, useState } from "react";
import CoinCard from "./CoinCard";
import AddWalletPopup from "../AddWalletPopup";
import './CoinFeed.css'


const CoinFeed = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const hasCoins = props.allCoins.length !== 0;

  if (!props.userId) {
    return (<div>Log in with Google!</div>);
  }
  

  return hasCoins ? (
    <div className='coinfeed-total'>
    <div className='coinfeed-topContainer'>
      <div className="coinfeed-search">
        <input type="text" placeholder="Search" className="coinfeed-input" 
          onChange={(event) => { setSearchTerm(event.target.value); }} />
      </div>
      <AddWalletPopup />
    </div>
    <div className="coinfeed-coins">
      {props.allCoins.filter((CoinObj) => {
        if (searchTerm === "") {
          return CoinObj
        } else if (CoinObj.token.toLowerCase().includes(searchTerm.toLowerCase())) {
          return CoinObj
        } else if (CoinObj.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return CoinObj
        }
      }).map((CoinObj) => (
          <CoinCard
            token={CoinObj.token}
            balance={CoinObj.balance.amount}
            curval={(CoinObj.balance*props.priceData[CoinObj.token]).toFixed(2)}
            totalVal={props.totalVal}
          />
        )
      )}
    </div>
    </div>
  ) : (
    <div>
    <div className='coinfeed-topContainer'>
      <div className="coinfeed-search">
        <input type="text" placeholder="Search" className="coinfeed-input" 
          onChange={(event) => { setSearchTerm(event.target.value); }} />
      </div>
      <AddWalletPopup />
    </div>
    <div className='notConnected'>No coins or no wallet connected!</div>
    </div>
  );
};


export default CoinFeed;