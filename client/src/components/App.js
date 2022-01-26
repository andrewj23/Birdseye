import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Home from "./pages/Home.js";
import Wallets from "./pages/Wallets";
import Forum from "./pages/Forum";
import { getAllPrices } from "../../../server/nomics";
import "../utilities.css";
import { socket } from "../client-socket.js";
import { get, post } from "../utilities";
import SideBar from "./modules/SideBar";
import TopTab from "./modules/TopTab";
import { getCoins, getWallets, getTotalDeposited, verifyCoinbaseWallet, getTransactions} from "../../../server/coinImports";


const App = () => {
  const [ValidCoinbaseWallet, setValidCoinbaseWallet] = useState(false)
  const [userId, setUserId] = useState(undefined);
  const [userName, setUserName] = useState(undefined);
  const [principal, setPrincipal] = useState("$0.00");
  const [priceData, setPriceData] = useState({})
  const [coins, setCoins] = useState([]);
  const [wallets, setWallets] = useState([]);
  const [netChange, setNetChange] = useState(0);
  const [percentChange, setPercentChange] = useState(0);
  const [transactionsByID, setTransactionsByID] = useState({});
  const [allTransactions, setAllTransactions] = useState([]);

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registered in the database, and currently logged in.
        setUserId(user._id);
        setUserName(user.name)
      }
    });
  }, []);

  useEffect(() => {
    if (userId) {
      verifyCoinbaseWallet().then((walletStatus) => {
        setValidCoinbaseWallet(walletStatus);
      })
    }
    console.log("App/useEffect: Coinbase Verification status: "+ValidCoinbaseWallet);
  }); // Constantly checking if coinbase wallet is connected/valid

  useEffect(()=>{
    if (userId && ValidCoinbaseWallet){
      setPrincipal("Loading...")
      getTotalDeposited().then((response) => {
        setPrincipal("$" + String((Math.round(response[0] * 100) / 100).toFixed(2)));
        setTransactionsByID(response[1]);
        setAllTransactions(response[2])
      })
    }
  },[userId, ValidCoinbaseWallet])

  useEffect(() => {
    if (userId && ValidCoinbaseWallet) {
      getCoins().then((coinsObj)=>{
        if (coinsObj.length === 0) {
          return
        }
        // const cleanedCoinObj = coinsObj.map((coinObj)=>(coinObj.response.data))
        setCoins(coinsObj.response.data)
      });
    }
  }, [userId, ValidCoinbaseWallet]);

  const filteredCoins = coins.filter((CoinObj)=>(parseFloat(CoinObj.balance.amount)!==0))

  useEffect(() => {
    if (userId && ValidCoinbaseWallet) {
      getWallets().then((walletsObj) => {
        if (walletsObj.length === 0) {
          return
        }
        console.log(JSON.stringify(walletsObj))
        setWallets([walletsObj])
      });
    }
  }, [userId, ValidCoinbaseWallet]);

  useEffect(()=>{
    getAllPrices().then((prices)=>{
      prices["WLUNA"] = prices["LUNA"];
      setPriceData(prices);
    })
  }, [])

  let totalVal = 0
  for (const coin of filteredCoins){
    totalVal+=priceData[coin.currency.code]*coin.balance.amount;
  };

  useEffect(()=>{
    if (principal!=="Loading...") {
      let princNumber = parseFloat(principal.slice(1))
      setNetChange((totalVal-princNumber).toFixed(2))
    }
  }, [principal])

  useEffect(()=>{
    if (principal!=="Loading...") {
      let princNumber = parseFloat(principal.slice(1))
      setPercentChange((100*netChange/princNumber).toFixed(2))
    }
  }, [netChange])

  const handleLogin = (res) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      setUserName(user.name);
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  const handleLogout = () => {
    setUserId(undefined);
    setUserName(undefined);
    post("/api/logout");
  };


  return (
    <div className='wrapper'>
      <div className='SideBar-name'/>
      <SideBar/>
      <TopTab
      userId={userId}
      userName = {userName}
      handleLogin={handleLogin}
      handleLogout={handleLogout}/>
      <Router>
        <Home path="/" handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} principal={principal}
          coins={filteredCoins} priceData={priceData} totalVal={totalVal} netChange={netChange}
          percentChange={percentChange} classname='content'/>
        <Wallets path="/wallets/" handleLogin={handleLogin} handleLogout={handleLogout} coins={filteredCoins} userId={userId} 
          priceData={priceData} wallets={wallets} allTransactions={allTransactions} totalVal={totalVal} />
        <Forum path="/forum/" userId={userId} userName = {userName} />
        <NotFound default />
      </Router>
    </div>
  );
};


export default App;
