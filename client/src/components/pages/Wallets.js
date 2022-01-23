import React, { Component } from "react";
import "../../utilities.css";
import "./Wallets.css";
import WalletFeed from "../modules/Wallets/WalletFeed";


const Wallets = (props) => {
    return (
        <div className={"wallets-container"}>
            <WalletFeed userId={props.userId} wallets={props.wallets} allTransactions={props.allTransactions} coins={props.coins}/>
        </div>
    );
};


export default Wallets;