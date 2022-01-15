import React, { useState,useEffect,Component } from "react";
import WalletCard from "./WalletCard";
import {get} from "../../../utilities";
import "./Feed.css"

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

const Feed = (props) => {

  let walletsList = null;
  const hasWallets = wallets.length !== 0;
  if (hasWallets) {
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

export default Feed