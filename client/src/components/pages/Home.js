import React, { Component } from "react";
import "../../utilities.css";
import "./Home.css";
import Summary from "../modules/Home/Summary";
import CoinFeed from "../modules/Home/CoinFeed";


const Home = (props) => {
  return (
    <div className={"home-container"}>
      <Summary userId ={props.userId} principal={props.principal} totalVal={props.totalVal}
               netChange={props.netChange} percentChange={props.percentChange}/>
      <div className="home-coinFeed">
        <CoinFeed userId={props.userId} coins={props.coins} priceData={props.priceData}/>
      </div>
    </div>
  );
};


export default Home;
