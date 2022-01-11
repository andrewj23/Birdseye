import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";
import "./Wallets.css";
import SearchBar from "../modules/Wallets/SearchBar";
import Feed from "../modules/Wallets/Feed";
import WalletCard from "../modules/Wallets/WalletCard";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "121479668229-t5j82jrbi9oejh7c8avada226s75bopn.apps.googleusercontent.com";

const Wallets = ({ userId, handleLogin, handleLogout }) => {
    return (
        <div className={"walletsFeed-container"}>
            <SearchBar />
            <Feed/>
        </div>
    );
};

export default Wallets;