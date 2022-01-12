import React, { Component } from "react";
import CoinCard from "./CoinCard";
// const CoinGecko = require('coingecko-api');

//2. Initiate the CoinGecko API Client
// const CoinGeckoClient = new CoinGecko();

//3. Make calls
// var func = async() => {
//   let data = await CoinGeckoClient.ping();
// };

const coins = [
  {
  token: "ETH",
  balance: 23.234,
  currentPrice: 3000,
  wallets: ["Coinbase","MetaMask"]
},
{
  token: "BTC",
  balance: 1.2,
  currentPrice: 40000,
  wallets: ["Coinbase"]
},
  {
    token: "BTC",
    balance: 1.2,
    currentPrice: 40000,
    wallets: ["Coinbase"]
  },
  {
    token: "BTC",
    balance: 1.2,
    currentPrice: 40000,
    wallets: ["Coinbase"]
  },
  {
    token: "BTC",
    balance: 1.2,
    currentPrice: 40000,
    wallets: ["Coinbase"]
  },
  {
    token: "BTC",
    balance: 1.2,
    currentPrice: 40000,
    wallets: ["Coinbase"]
  },
  {
    token: "BTC",
    balance: 1.2,
    currentPrice: 40000,
    wallets: ["Coinbase"]
  },
]

const CoinFeed = (props) => {
  // const [coins, setCoins] = useState([]);
  // useEffect(() => {
  //   document.title = "Coins";
  //   get("/api/coins").then((coinObjs) => {
  //     setStories(coinObjs);
  //   });
  // }, []);

  let coinsList = null;
  const hasCoins = coins.length !== 0;
  if (hasCoins) {
    coinsList = coins.map((CoinObj) => (
      <CoinCard
      token={CoinObj.token}
      balance={CoinObj.balance}
      currentPrice={CoinObj.currentPrice}
      wallets={CoinObj.wallets}
      />
    ));
  } else {
    coinsList = <div>No coins!</div>;
  }
  return (
    <div className={"Feed-container"}>
      {/*{props.userId && <NewStory addNewStory={addNewStory} />}*/}
      {coinsList}
    </div>
  );



  // return (
  //   <CoinCard/>
  // );
};

export default CoinFeed;