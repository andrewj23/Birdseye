import React from "react";
// import Web3 from "web3/dist/web3.min";
// import { MoralisProvider } from "react-moralis";
// const Moralis = require('moralis');
const serverUrl = "https://dy3uthh5jfkf.usemoralis.com:2053/server";
const appId = "ft3ZqRMe79xbTPBDmu9aZtY443Lgu7EHNMSpvhOh";
// Moralis.start({ serverUrl, appId });
// async function login() {
//   let user = Moralis.User.current();
//   if (!user) {
//     user = await Moralis.authenticate({ signingMessage: "Log in using Moralis" })
//       .then((user) => {
//         console.log("logged in user:", user);
//         console.log(user.get("ethAddress"));
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
// }
//
// async function logOut() {
//   await Moralis.User.logOut();
//   console.log("logged out");
// }

const tokenABI = [{
    "constant": true,
    "inputs": [
      {
        "name": "_owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "name": "balance",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  }];
const tokenAddresses = [{
  address: '0x04f2694c8fcee23e8fd0dfea1d4f5bb8c352111f',
  token: 'sOhm'
}, {
  address: '0x3d658390460295fb963f54dc0899cfb1c30776df',
  token: 'COVAL'
}, {
  address: '0x6b175474e89094c44da98b954eedeac495271d0f',
  token: 'DAI'
}]

const MetamaskConnect = (props) => {
  const onClick = async () => {
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
    }
    if (typeof window.ethereum !== 'undefined') {
      // Instance web3 with the provided information
      const web3 = new Web3(window.ethereum);
      try {
        // Request account access
        await window.ethereum.enable();
        const accounts = await web3.eth.getAccounts();
        const balance = await web3.eth.getBalance(accounts[0])
        const etherBalance = parseFloat(balance)*Math.pow(10,-18)
        const tokenInst = new web3.eth.Contract(tokenABI, tokenAddresses[0].address);
        const erc20balance = await tokenInst.methods.balanceOf(accounts[0]).call()
        console.log(parseFloat(erc20balance)*Math.pow(10,-9))
        console.log(await web3.eth.getTransactionCount(accounts[0]))
        console.log(accounts[0])
      } catch (e) {
        // User denied access
        return false
      }
    }
  }

  return (
    <div onClick={login}>METAMASK</div>
  );
};

export default MetamaskConnect;