import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

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
const GOOGLE_CLIENT_ID = "121479668229-t5j82jrbi9oejh7c8avada226s75bopn.apps.googleusercontent.com";

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
