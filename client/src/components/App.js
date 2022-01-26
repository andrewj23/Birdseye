import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Home from "./pages/Home.js";
import Wallets from "./pages/Wallets";
import Forum from "./pages/Forum";
import "../utilities.css";
import { socket } from "../client-socket.js";
import { get, post } from "../utilities";
import SideBar from "./modules/SideBar";
import TopTab from "./modules/TopTab";
import { getCoins, getWallets, getTotalDeposited, verifyCoinbaseWallet, getTransactions} from "../../../server/coinImports";
import {checkMetaMaskProvider , MetaMaskEthBalances} from "./modules/MetamaskConnect";
const axios = require('axios')


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
  const [MetaMaskInstalled, setMetaMaskInstalled] = useState(false)
  const [allCoins, setAllCoins] = useState([])
  const [demo, setDemo] = useState(false)

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registered in the database, and currently logged in.
        setUserId(user._id);
        setUserName(user.name);
      }
    });
  }, []);

  useEffect(() => {
    if (userId) {
      verifyCoinbaseWallet().then((walletStatus) => {
        setValidCoinbaseWallet(walletStatus);
      })
    }
    // console.log("App/useEffect: Coinbase Verification status: "+ValidCoinbaseWallet);
  }); // Constantly checking if coinbase wallet is connected/valid

  useEffect(() => {
    if (userId) {
      checkMetaMaskProvider().then((metamaskStatus) => {
        setMetaMaskInstalled(metamaskStatus)
      })
    }
    // console.log("App/useEffect: MetaMask Installed status: "+MetaMaskInstalled);
  }); // Constantly checking if metamask is connected

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
        // wallets.push(walletsObj)
        setWallets([...wallets, walletsObj])
        return walletsObj.tokens
      }).then((tokens)=>{
        if (tokens === []) {
          return
        }
        // console.log("COINBASE TOKENS: "+JSON.stringify(tokens))
        setAllCoins([...allCoins, ...tokens])
      });
    }
  }, [userId, ValidCoinbaseWallet]);

  useEffect(()=>{
    let prices={}
    axios.get(`https://api.nomics.com/v1/currencies/ticker?key=m_be3c899ce66f1684d94cb70100d9d58bdce71222&convert=USD`)
      .then((response)=>{
        for (const coin of response.data){
          prices[coin.symbol]=coin.price
        }
      }).then(()=>{
        prices["WLUNA"]=prices["LUNA"];
      });
    setPriceData(prices)
  }, [])

  let totalVal = 0
  for (const coin of filteredCoins){
    totalVal+=priceData[coin.currency.code]*coin.balance.amount;
    // console.log('Portfolio Value: '+ JSON.stringify(totalVal))
  };

  useEffect(() => {
    if (userId && MetaMaskInstalled) {
      MetaMaskEthBalances().then((walletObj) => {
        // console.log("walletobj: "+JSON.stringify(walletObj))
        if (walletObj === {}) {
          return
        }
        setWallets([...wallets, walletObj])
        return walletObj.tokens;
      }).then((tokens)=>{
        if (tokens === []) {
          return
        }
        // console.log("METAMASK TOKENS: "+JSON.stringify(tokens))
        setAllCoins([...allCoins, ...tokens])
      });
    }
  }, [userId, MetaMaskInstalled]);

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

  const handleLoginDemo = (res) => {
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      setUserName(user.name);
      setDemo(true)
      post("/api/initsocket", { socketid: socket.id }).then(()=>{
        post("/api/demoLogin")
      });
    });
  };

  const handleLogoutDemo = () => {
    setDemo(false)
    setUserId(undefined);
    setUserName(undefined);
    post("/api/demoLogout").then(()=>{
    post("/api/logout");
    })
  };


  return (
    <div className='wrapper'>
      <div className='SideBar-name'/>
      <SideBar/>
      <TopTab
      userId={userId}
      userName = {userName}
      handleLogin={handleLogin}
      handleLogout={handleLogout}
      handleLogoutDemo={handleLogoutDemo}
      demo={demo}/>
      <Router>
        <Home path="/" userId={userId} principal={principal}
              allCoins={allCoins} coins={filteredCoins} priceData={priceData} totalVal={totalVal} netChange={netChange}
          percentChange={percentChange} handleLoginDemo={handleLoginDemo} classname='content'/>
        <Wallets path="/wallets/" handleLogin={handleLogin} handleLogout={handleLogout} userId={userId}
          priceData={priceData} wallets={wallets} allTransactions={allTransactions} totalVal={totalVal} coins={filteredCoins} />
        <Forum path="/forum/" userId={userId} userName = {userName} />
        <NotFound default />
      </Router>
    </div>
  );
};


export default App;
