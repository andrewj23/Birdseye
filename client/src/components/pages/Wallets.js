import React, { Component } from "react";
import "../../utilities.css";
import "./Wallets.css";
import WalletFeed from "../modules/Wallets/WalletFeed";


const Wallets = ({ userId, handleLogin, handleLogout }) => {
    return (
        <div className={"wallets-container"}>
            <WalletFeed userId={userId} />
        </div>
    );
};


export default Wallets;