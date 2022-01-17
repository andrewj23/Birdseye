import React, { useState,useEffect,Component } from "react";
import WalletCard from "./WalletCard";
import {get} from "../../../utilities";
import "./WalletFeed.css"
import { getWallets } from "../../../../../server/coinImports";

const wallets = [
  {
    name: "Coinbase",
    tokens: [{
      token:"ETH",
      balance:1.3
    },
      {token: "BTC",
      balance: 0.5
      },
      {token: "SOL",
      balance: 1000
      },
    ],
  },
  {
    name: "MetaMask",
    tokens: [{
      token:"ETH",
      balance:3.6
    },
    ],
  },
  {
    name: "MetaMask",
    tokens: [{
      token:"ETH",
      balance:3.6
    },
    ],
  },
  {
    name: "MetaMask",
    tokens: [{
      token:"ETH",
      balance:3.6
    },
    ],
  },
]

const WalletFeed = (props) => {
  const [wallets, setWallets] = useState([]);

  useEffect(() => {
    if (props.userId) {
      getWallets().then((walletsObj) => {
        console.log("Wallets: " + JSON.stringify(walletsObj))
        if (walletsObj.length === 0) {
          return
        }
        setWallets(walletsObj)
      });
    }
  }, [props.userId]);

  let walletsList = null;
  const hasWallets = wallets.length !== 0;
  if (hasWallets && props.userId) {
    walletsList = wallets.map((WalletObj) => (
      <WalletCard
        name={WalletObj.name}
        tokens={WalletObj.tokens}
      />
    ));
  } else {
    walletsList = <div>No wallets!</div>;
  }
  return (
    <div className={"walletFeed-container"}>
      {/*{props.userId && <NewStory addNewStory={addNewStory} />}*/}
      {walletsList}
    </div>
  );
};

export default WalletFeed;