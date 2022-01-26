import React from "react";
import Web3 from "web3/dist/web3.min";
import {erc20Addresses, tokenABI} from "./erc20Addresses";
import { get, post } from "../../utilities";

async function checkMetaMaskProvider() {
  if (typeof window.ethereum !== 'undefined') {
    return true
  } else {
    return false
  }
}

async function getMetaMaskAccounts() {
  const MetaMaskAccounts = await get("/api/allMetaMaskWallets");
  console.log("getWallets: "+ MetaMaskAccounts)
  const accountsRes = await ethereum.request({ method: 'eth_requestAccounts' })
    .catch((err) => {
      if (err.code === 4001) {
        // EIP-1193 userRejectedRequest error
        // If this happens, the user rejected the connection request.
        console.log('Please connect to MetaMask.');
      } else {
        console.error(err);
      }
    });
  if (MetaMaskAccounts.includes(accountsRes[0])) {
    console.log("MetaMask account already associated with user...");
  }
  else {
    await post("/api/addMetaMaskWallet", { address: accountsRes[0] });
  }
}
  /**********************************************************/
  /* Handle chain (network) and chainChanged (per EIP-1193) */
  /**********************************************************/

  async function MetaMaskChain() {
    await ethereum.request({ method: 'eth_chainId' }).then((chain) => {
      console.log(chain)
    })
  }

  async function MetaMaskEthBalances() {
    const tokens = [];
    const MetaMaskAccounts = await get("/api/allMetaMaskWallets");
    if (MetaMaskAccounts === []) {
      console.log("EMPTY METAMASK WALLETS");
      return {}
    }
    const web3 = new Web3(window.ethereum)
    const balance = await web3.eth.getBalance(MetaMaskAccounts[0].address)
    const etherBalance = parseFloat(balance) * Math.pow(10, -18)
    if (etherBalance !== 0) {
      tokens.push({ "name": "Ethereum", "token": "ETH", "balance": parseFloat(etherBalance) });
    }
    for (const erc20token of erc20Addresses) {
      const tokenInst = new web3.eth.Contract(tokenABI, erc20token.contract_address);
      const erc20balance = await tokenInst.methods.balanceOf(MetaMaskAccounts[0].address).call()
      if (parseFloat(erc20balance) !== 0) {
        tokens.push({ "name": erc20token.token, "token": erc20token.code, "balance": parseFloat(erc20balance) });
      }
    }
    return { "name": "MetaMask", "tokens": tokens }
  }

export {checkMetaMaskProvider, MetaMaskEthBalances, getMetaMaskAccounts};