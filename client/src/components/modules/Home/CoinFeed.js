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
  const [coins, setCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // called when the "Feed" component "mounts", i.e.
  // when it shows up on screen
  useEffect(() => {
    if (props.userId) {
      getCoins().then((coinsObj)=>{
        console.log("HEREEEE: "+JSON.stringify(coinsObj))
        if (coinsObj.length === 0) {
          return
        }
        const cleanedCoinObj = coinsObj.map((coinObj)=>(coinObj.response.data))
        console.log(JSON.stringify(cleanedCoinObj))
          setCoins(cleanedCoinObj[0])
      });
    }
  }, [props.userId]);

  const hasCoins = coins.length !== 0;

  if (!props.userId) {
    return (<div>Log in!</div>);
  }
  
  const filteredCoins = coins.filter((CoinObj)=>(parseFloat(CoinObj.balance.amount)!==0))
  return hasCoins ? (
    <>
    <div className='coinfeed-topContainer'>
      <div className="coinfeed-search">
        <input type="text" placeholder="Search" className="coinfeed-input" 
          onChange={(event) => { setSearchTerm(event.target.value); }} />
      </div>
      <AddWalletPopup />
    </div>
    <div className="coinfeed-coins">
      {filteredCoins.filter((CoinObj) => {
        if (searchTerm === "") { 
          return CoinObj 
        } else if (CoinObj.currency.code.toLowerCase().includes(searchTerm.toLowerCase())) {
          return CoinObj
        }
      }).map((CoinObj) => (
        <CoinCard
        token={CoinObj.currency.code}
        balance={CoinObj.balance.amount}
        slug={CoinObj.currency.slug}
        />
        )
      )}
    </div>
    </>
  ) : (
    <>
    <div className='coinfeed-topContainer'>
      <div className="coinfeed-search">
        <input type="text" placeholder="Search" className="coinfeed-input" 
          onChange={(event) => { setSearchTerm(event.target.value); }} />
      </div>
      <AddWalletPopup />
    </div>
    <div>No coins!</div>
    </>
  );
};


export default CoinFeed;