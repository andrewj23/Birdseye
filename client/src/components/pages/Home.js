import React, { Component } from "react";
import "../../utilities.css";
import "./Home.css";
import Summary from "../modules/Home/Summary";
import CoinFeed from "../modules/Home/CoinFeed";


const Home = ({ userId, handleLogin, handleLogout }) => {
  return (
    <div className={"home-container"}>
      <Summary/>
      <div className="home-coinFeed">
        <CoinFeed userId={userId}/>
      </div>
    </div>
  );
};


export default Home;
