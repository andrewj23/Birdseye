import React, { Component, useEffect, useState } from "react";
import CoinCard from "./CoinCard";
import AddWalletPopup from "../AddWalletPopup";
import { getCoins } from "../../../../../server/coinImports";
import './CoinFeed.css'
// const CoinGecko = require('coingecko-api');

//2. Initiate the CoinGecko API Client
// const CoinGeckoClient = new CoinGecko();

//3. Make calls
// var func = async() => {
//   let data = await CoinGeckoClient.ping();
// };


const CoinFeed = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const hasCoins = props.coins.length !== 0;

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
      {props.coins.filter((CoinObj) => {
        if (searchTerm === "") { 
          return CoinObj 
        } else if (CoinObj.currency.code.toLowerCase().includes(searchTerm.toLowerCase())) {
          return CoinObj
        } else if (CoinObj.currency.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return CoinObj
        }
      }).map((CoinObj) => (
        <CoinCard
        token={CoinObj.currency.code}
        balance={CoinObj.balance.amount}
        slug={CoinObj.currency.slug}
        curval={(CoinObj.balance.amount*props.priceData[CoinObj.currency.code]).toFixed(2)}
        />
        )
      )}
    </div>
    </div>
  ) : (
    <>
    <div className='coinfeed-topContainer'>
      <div className="coinfeed-search">
        <input type="text" placeholder="Search" className="coinfeed-input" 
          onChange={(event) => { setSearchTerm(event.target.value); }} />
      </div>
      <AddWalletPopup />
    </div>
    <div>No coins or no wallet connected!</div>
    </>
  );
};


export default CoinFeed;