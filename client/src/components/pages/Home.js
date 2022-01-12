import React, { Component } from "react";

import "../../utilities.css";
import "./Home.css";
import Summary from "../modules/Home/Summary";
import CoinFeed from "../modules/Home/Feed";
import Visuals from "../modules/Home/Visuals";
import TopTab from "../modules/TopTab";
import SearchBar from "../modules/Home/SearchBar";
import SideBar from "../modules/SideBar";
import Coinbase from "../modules/coinbase";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID

const Home = ({ userId, handleLogin, handleLogout }) => {
  return (
    <div className={"home-container"}>
        {/*<div className='Home-greeting'>Welcome, Andrew!</div>*/}
        <Summary/>
        <Visuals/>
      <div className="coinFeed-container">
        <SearchBar/>
        <CoinFeed/>
      </div>
    </div>
  );
};

export default Home;
