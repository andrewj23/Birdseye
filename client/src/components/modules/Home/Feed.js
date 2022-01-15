import React, { Component, useEffect, useState } from "react";
import CoinCard from "./CoinCard";
import { get, post } from "../../../utilities";
import { div } from "react-router-dom";
import getCoins from "../../../../../server/coinImports";
// const CoinGecko = require('coingecko-api');

//2. Initiate the CoinGecko API Client
// const CoinGeckoClient = new CoinGecko();

//3. Make calls
// var func = async() => {
//   let data = await CoinGeckoClient.ping();
// };

const coins = [
  {
  token: "ETH",
  balance: 23.234,
  currentPrice: 3000,
  wallets: ["Coinbase","MetaMask"]
},
{
  token: "BTC",
  balance: 1.2,
  currentPrice: 40000,
  wallets: ["Coinbase"]
},
  {
    token: "BTC",
    balance: 1.2,
    currentPrice: 40000,
    wallets: ["Coinbase"]
  },
  {
    token: "BTC",
    balance: 1.2,
    currentPrice: 40000,
    wallets: ["Coinbase"]
  },
  {
    token: "BTC",
    balance: 1.2,
    currentPrice: 40000,
    wallets: ["Coinbase"]
  },
  {
    token: "BTC",
    balance: 1.2,
    currentPrice: 40000,
    wallets: ["Coinbase"]
  },
  {
    token: "BTC",
    balance: 1.2,
    currentPrice: 40000,
    wallets: ["Coinbase"]
  },
]

const CoinFeed = (props) => {
  const [coins, setCoins] = useState([]);

  // called when the "Feed" component "mounts", i.e.
  // when it shows up on screen
  useEffect(() => {
    if (props.userId)
    {
      getCoins().then((coinsObj)=>{
        const cleanedCoinObj = coinsObj.map((coinObj)=>(coinObj.response.data))
        console.log(JSON.stringify(cleanedCoinObj))
        setCoins(cleanedCoinObj[0])
    });
      //////////WORKS
    //   get("/api/allWallets").then((walletCodeObjs) => {
    //     const body = {
    //       accessToken: walletCodeObjs.accessToken,
    //     };
    //     post("/api/coinbaseAccount", body).then((coinObjs) => {
    //       setCoins(coinObjs.response.data);
    //     });
    //   });
      ////////////////////
    }
  }, [props.userId]);

  let coinsList = null;
  const hasCoins = coins.length !== 0;
  if (hasCoins && props.userId) {
    const filteredCoins = coins.filter((CoinObj)=>(parseFloat(CoinObj.balance.amount)!==0))
    coinsList = filteredCoins.map((CoinObj) => (
      <CoinCard
      token={CoinObj.currency.code}
      balance={CoinObj.balance.amount}
      // currentPrice={CoinObj.currentPrice}
      // wallets={CoinObj.wallets}
      />
    ));
  } else {
    coinsList = <div>No coins!</div>;
  }
  if (!props.userId) {
    return (<div> Log in! </div>);
  }
  return (
    <div className={"Feed-container"}>
      {/*{props.userId && <NewStory addNewStory={addNewStory} />}*/}
      {coinsList}
    </div>
  );



  // return (
  //   <CoinCard/>
  // );
};

export default CoinFeed;