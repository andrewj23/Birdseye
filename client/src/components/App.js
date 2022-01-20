import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Home from "./pages/Home.js";
import Wallets from "./pages/Wallets";
import Messages from "./pages/Messages";
import { getAllPrices } from "../../../server/nomics";
//hello friend

import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";
import SideBar from "./modules/SideBar";
import TopTab from "./modules/TopTab";
import AddWalletPopup from "./modules/AddWalletPopup"
import { getCoins, getWallets, getTotalDeposited } from "../../../server/coinImports";

/**
 * Define the "App" component
 */
const App = () => {
  const [userId, setUserId] = useState(undefined);
  const [principal, setPrincipal] = useState("$0.00");
  const [priceData, setPriceData] = useState({})
  const [coins, setCoins] = useState([]);
  const [wallets, setWallets] = useState([]);
  const [netChange, setNetChange] = useState(0)
  const [percentChange, setPercentChange] = useState(0)

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registered in the database, and currently logged in.
        setUserId(user._id);
      }
    });
  }, []);

  useEffect(()=>{
    if (userId){
      setPrincipal("Loading...")
      getTotalDeposited().then((response) => {
        setPrincipal("$" + String((Math.round(response * 100) / 100).toFixed(2)))
      })
    }
  },[userId])

  useEffect(() => {
    if (userId) {
      getCoins().then((coinsObj)=>{
        if (coinsObj.length === 0) {
          return
        }
        const cleanedCoinObj = coinsObj.map((coinObj)=>(coinObj.response.data))
        setCoins(cleanedCoinObj[0])
      });
    }
  }, [userId]);

  const filteredCoins = coins.filter((CoinObj)=>(parseFloat(CoinObj.balance.amount)!==0))

  useEffect(() => {
    if (userId) {
      getWallets().then((walletsObj) => {
        console.log("Wallets: " + JSON.stringify(walletsObj))
        if (walletsObj.length === 0) {
          return
        }
        setWallets(walletsObj)
      });
    }
  }, [userId]);

  useEffect(()=>{
    getAllPrices().then((prices)=>{
      setPriceData(prices)
    })
  }, [])

  let totalVal = 0
  for (const coin of filteredCoins){
    totalVal+=priceData[coin.currency.code]*coin.balance.amount;
    console.log('Portfolio Value: '+ JSON.stringify(totalVal))
  };

  useEffect(()=>{
    if (principal!=="Loading...") {
      setNetChange(totalVal-principal)
      setPercentChange(netChange/principal)
    }
  }, [principal])

  const handleLogin = (res) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  const handleLogout = () => {
    setUserId(undefined);
    post("/api/logout");
  };

  return (
    <div className={"wrapper"}>
      <SideBar/>
      <TopTab
      userId={userId}
      handleLogin={handleLogin}
      handleLogout={handleLogout}/>
      <Router>
        <Home path="/" handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} principal={principal}
              coins={filteredCoins} priceData={priceData} totalVal={totalVal} netChange={netChange}
              percentChange={percentChange}/>
        <Wallets path="/wallets/" handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} wallets={wallets} />
        <Messages path="/messages/" handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} />
        <NotFound default />
      </Router>
    </div>
  );
};

export default App;
