import React, { Component, useEffect, useState } from "react";
import CoinCard from "./CoinCard";
import AddWalletPopup from "../AddWalletPopup";
import './CoinFeed.css'
const GOOGLE_CLIENT_ID = "950199412699-d6sfpl52prce9n34uu94qgh1f0ubd5gn.apps.googleusercontent.com";
import GoogleLogin, { GoogleLogout } from "react-google-login";


const CoinFeed = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  // const hasCoins = props.allCoins.length !== 0;
  const hasCoins = props.wallets.length !== 0;


  if (!props.userId) {
    return (
      <div className={"demo"}>
      <div>Log in with Google above and add your own wallets!</div>
        <div>Or... test Our features with a demo account below!</div>
        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          buttonText="Login Demo"
          onSuccess={props.handleLoginDemo}
          onFailure={(err) => console.log(err)}
        />
      </div>
    );
  }
  

  return hasCoins ? (
    <div className='coinfeed-total'>
    <div className='coinfeed-topContainer'>
      <div className="coinfeed-search">
        <input type="text" placeholder="Search" className="coinfeed-input" 
          onChange={(event) => { setSearchTerm(event.target.value); }} />
      </div>
      <AddWalletPopup />
    </div>
    <div className="coinfeed-coins">
      {/*{props.allCoins.filter((CoinObj) => {*/}
      {/*  if (searchTerm === "") {*/}
      {/*    return CoinObj*/}
      {/*  } else if (CoinObj.token.toLowerCase().includes(searchTerm.toLowerCase())) {*/}
      {/*    return CoinObj*/}
      {/*  } else if (CoinObj.name.toLowerCase().includes(searchTerm.toLowerCase())) {*/}
      {/*    return CoinObj*/}
      {/*  }*/}
      {/*}).map((CoinObj) => (*/}
      {/*    <CoinCard*/}
      {/*      token={CoinObj.token}*/}
      {/*      balance={CoinObj.balance}*/}
      {/*      curval={(CoinObj.balance*props.priceData[CoinObj.token]).toFixed(2)}*/}
      {/*      totalVal={props.totalVal}*/}
      {/*    />*/}
      {/*  )*/}
      {/*)}*/}


      {props.newCoins.filter((CoinObj) => {
        if (searchTerm === "") {
          return CoinObj
        } else if (CoinObj.token.toLowerCase().includes(searchTerm.toLowerCase())) {
          return CoinObj
        } else if (CoinObj.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return CoinObj
        }
      }).map((CoinObj) => (
          <CoinCard
            token={CoinObj.token}
            balance={CoinObj.balance}
            curval={(CoinObj.balance*props.priceData[CoinObj.token]).toFixed(2)}
            totalVal={props.totalVal}
          />
        )
      )}
    </div>
    </div>
  ) : (
    <div>
    <div className='coinfeed-topContainer'>
      <div className="coinfeed-search">
        <input type="text" placeholder="Search" className="coinfeed-input" 
          onChange={(event) => { setSearchTerm(event.target.value); }} />
      </div>
      <AddWalletPopup />
    </div>
    <div className='notConnected'>No coins or no wallet connected!</div>
    </div>
  );
};


export default CoinFeed;