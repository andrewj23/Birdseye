import React from "react";
import Web3 from "web3/dist/web3.min";
import {erc20Addresses, tokenABI} from "./erc20Addresses";
import detectEthereumProvider from '@metamask/detect-provider';

async function checkMetaMaskProvider(setMetaMaskInstalled) {
  if (typeof window.ethereum !== 'undefined') {
    setMetaMaskInstalled(true)
  } else {
    setMetaMaskInstalled(false)
  }
}

async function getMetaMaskAccounts(MetaMaskAccounts, setMetaMaskAccounts) {
  await ethereum.request({ method: 'eth_requestAccounts' }).then((accountsRes)=>{
    if (MetaMaskAccounts.includes(accountsRes[0])) {
      console.log("MetaMask account already associated with user...");
    }
    else {
      setMetaMaskAccounts(MetaMaskAccounts.push(accountsRes[0]));
    }
  })
    .catch((err) => {
      if (err.code === 4001) {
        // EIP-1193 userRejectedRequest error
        // If this happens, the user rejected the connection request.
        console.log('Please connect to MetaMask.');
      } else {
        console.error(err);
      }
    });
  /**********************************************************/
  /* Handle chain (network) and chainChanged (per EIP-1193) */
  /**********************************************************/

  async function MetaMaskChain() {
    await ethereum.request({ method: 'eth_chainId' }).then((chain) => {
      console.log(chain)
    })
  }

  async function MetaMaskEthBalances(MetaMaskInstalled, MetaMaskAccounts) {
    if (MetaMaskInstalled) {
      const web3 = new Web3(window.ethereum)
      const balance = await web3.eth.getBalance(MetaMaskAccounts[0])
      const etherBalance = parseFloat(balance)*Math.pow(10,-18)
      for (const token of erc20Addresses) {
        const tokenInst = new web3.eth.Contract(tokenABI, token.contract_address);
        const erc20balance = await tokenInst.methods.balanceOf(accounts[0]).call()
        console.log(token.code+' balance: '+parseFloat(erc20balance)*Math.pow(10,-9))
      }
      // console.log(await web3.eth.getTransactionCount(accounts[0]))
      console.log(etherBalance)
      console.log(erc20balance)
    }
  }
  // const chainId = await ethereum.request({ method: 'eth_chainId' });
  // console.log(chainId)
  // handleChainChanged(chainId);
  //
  // ethereum.on('chainChanged', handleChainChanged);
  //
  // function handleChainChanged(_chainId) {
  //   // We recommend reloading the page, unless you must do otherwise
  //   console.log(chainId)
  //   // window.location.reload();
  // }
}

const MetamaskConnect = (props) => {
  /*****************************************/
  /* Detect the MetaMask Ethereum provider */
  /*****************************************/


  function startApp(provider) {
    // If the provider returned by detectEthereumProvider is not the same as
    // window.ethereum, something is overwriting it, perhaps another wallet.
    if (provider !== window.ethereum) {
      console.error('Do you have multiple wallets installed?');
    }
    // Access the decentralized web!
  }


  /*********************************************/
  /* Access the user's accounts (per EIP-1102) */
  /*********************************************/

// You should only attempt to request the user's accounts in response to user
// interaction, such as a button click.
// Otherwise, you popup-spam the user like it's 1999.
// If you fail to retrieve the user's account(s), you should encourage the user
// to initiate the attempt.
//   document.getElementById('connectButton', connect);

// While you are awaiting the call to eth_requestAccounts, you should disable
// any buttons the user can click to initiate the request.
// MetaMask will reject any additional requests while the first is still
// pending.
//   function connect() {
//     ethereum
//       .request({ method: 'eth_requestAccounts' })
//       .then(handleAccountsChanged)
//       .catch((err) => {
//         if (err.code === 4001) {
//           // EIP-1193 userRejectedRequest error
//           // If this happens, the user rejected the connection request.
//           console.log('Please connect to MetaMask.');
//         } else {
//           console.error(err);
//         }
//       });
//   }
  const login = async () => {
    // const provider = await detectEthereumProvider();
    //
    // if (provider) {
    //   startApp(provider); // Initialize your app
    // } else {
    //   console.log('Please install MetaMask!');
    // }

    await ethereum.request({ method: 'eth_requestAccounts' }).then(handleAccountsChanged)
      .catch((err) => {
        if (err.code === 4001) {
          // EIP-1193 userRejectedRequest error
          // If this happens, the user rejected the connection request.
          console.log('Please connect to MetaMask.');
        } else {
          console.error(err);
        }
      });
    /**********************************************************/
    /* Handle chain (network) and chainChanged (per EIP-1193) */
    /**********************************************************/

    const chainId = await ethereum.request({ method: 'eth_chainId' });
    console.log(chainId)
    handleChainChanged(chainId);

    ethereum.on('chainChanged', handleChainChanged);

    function handleChainChanged(_chainId) {
      // We recommend reloading the page, unless you must do otherwise
      console.log(chainId)
      // window.location.reload();
    }
    /***********************************************************/
    /* Handle user accounts and accountsChanged (per EIP-1193) */
    /***********************************************************/

    const accounts = await ethereum.request({ method: 'eth_accounts' }).then(handleAccountsChanged).catch((err) => {
        // Some unexpected error.
        // For backwards compatibility reasons, if no accounts are available,
        // eth_accounts will return an empty array.
        console.error(err);
      });
    console.log('accounts: '+accounts)

// Note that this event is emitted on page load.
// If the array of accounts is non-empty, you're already
// connected.
    ethereum.on('accountsChanged', handleAccountsChanged);

// For now, 'eth_accounts' will continue to always return an array
    function handleAccountsChanged(accounts) {
      if (accounts.length === 0) {
        // MetaMask is locked or the user has not connected any accounts
        console.log('Please connect to MetaMask.');
      } else {
        return accounts

        // Do any other work!
      }
    }



  //   if (typeof window.ethereum !== 'undefined') {
  //     // Instance web3 with the provided information
  //     const web3 = new Web3(window.ethereum);
    // this returns the provider, or null if it wasn't detected
    if (typeof window.ethereum !== 'undefined') {
      console.log("METAMASK INSTALLED")
      const web3 = new Web3(window.ethereum);
      try {
        // Request account access
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        console.log(ethereum.isConnected())
        ethereum.on('accountsChanged', function (accounts) {
          console.log("accounts changed!")
        });
        ethereum.on('chainChanged', (chainId) => {
          // Handle the new chain.
          // Correctly handling chain changes can be complicated.
          // We recommend reloading the page unless you have good reason not to.
          console.log("changed chain"+chainId)
          window.location.reload();
        });
        console.log(accounts)
        const balance = await web3.eth.getBalance(accounts[0])
        const etherBalance = parseFloat(balance)*Math.pow(10,-18)
        // for (const token of erc20Addresses) {
        //   // console.log(token.contract_address)
        //   const tokenInst = new web3.eth.Contract(tokenABI, token.contract_address);
        //   const erc20balance = await tokenInst.methods.balanceOf(accounts[0]).call()
        //   console.log(token.code+' balance: '+parseFloat(erc20balance)*Math.pow(10,-9))
        // }
        // console.log(await web3.eth.getTransactionCount(accounts[0]))
        console.log(etherBalance)
        // console.log(erc20balance)
      } catch (e) {
        // User denied access
        console.log(e)
        return false
      }
    }
  // }
  async function getAccount() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    console.log(accounts);
  }
  return (
    <div onClick={login}>metamask</div>
  )
}
// const MetamaskConnect = (props) => {
//   const login = async () => {
//     if (typeof window.ethereum !== 'undefined') {
//       console.log('MetaMask is installed!');
//     }
//     if (typeof window.ethereum !== 'undefined') {
//       // Instance web3 with the provided information
//       const web3 = new Web3(window.ethereum);
//       try {
//         // Request account access
//         await window.ethereum.enable();
//         const accounts = await web3.eth.getAccounts();
//         const balance = await web3.eth.getBalance(accounts[0])
//         const etherBalance = parseFloat(balance)*Math.pow(10,-18)
//         const tokenInst = new web3.eth.Contract(tokenABI, tokenAddresses[0].address);
//         const erc20balance = await tokenInst.methods.balanceOf(accounts[0]).call()
//         console.log(parseFloat(erc20balance)*Math.pow(10,-9))
//         console.log(await web3.eth.getTransactionCount(accounts[0]))
//         console.log(accounts[0])
//       } catch (e) {
//         // User denied access
//         return false
//       }
//     }
//   }
//
  return (
    <div onClick={login}>METAMASK</div>
  );
};

export default MetamaskConnect;