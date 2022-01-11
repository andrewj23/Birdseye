import React, { Component } from "react";
import CoinCard from "./CoinCard";

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
    <>
      {/*{props.userId && <NewStory addNewStory={addNewStory} />}*/}
      {coinsList}
    </>
  );



  // return (
  //   <CoinCard/>
  // );
};

export default CoinFeed;