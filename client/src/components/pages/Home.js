import React, { Component } from "react";
import "../../utilities.css";
import "./Home.css";
import Summary from "../modules/Home/Summary";
import CoinFeed from "../modules/Home/CoinFeed";



const Home = (props) => {
  console.log("WALLETS: "+JSON.stringify(props.wallets))
  let coins = [];
  props.wallets.map((wallet) => {
    coins = [...coins, ...wallet.tokens]
  })
  console.log("coins"+JSON.stringify(coins))
  return (
    <div className={"home-container"}>
      <Summary userId ={props.userId} principal={props.principal} totalVal={props.totalVal}
               netChange={props.netChange} percentChange={props.percentChange} allCoins={props.allCoins} coins={props.coins}
               priceData={props.priceData}/>
      <CoinFeed allCoins={props.allCoins} userId={props.userId} totalVal={props.totalVal} coins={props.coins} priceData={props.priceData}
                handleLoginDemo={props.handleLoginDemo} wallets={props.wallets} newCoins={coins}/>
    </div>
  );
};


export default Home;
