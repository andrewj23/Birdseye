import { get, post } from "../client/src/utilities";
// const Wallet = require("./models/wallet");
const clientID = "1b64cf309a86bd5f5a4d817e728c4dc5682463397d23b24a8f2f06f4ab433678";
const clientSecret = "4514e203850ae432ce980d16ba56b7c06b2c5726ac7bb7c28a50bc8aaea721d0";
const redirectURL = "http://localhost:3000/api/callback/"
const SECRET = "134ef5504a94"
const authURL = "https://www.coinbase.com/oauth/authorize?response_type=code&client_id="+clientID+"&redirect_uri="+redirectURL+"&state=134ef5504a94&scope=wallet:accounts:read&account=all";

async function verifyCoinbaseWallet() {
  // checks if wallet list is empty. Returns false if empty. If not, checks if access token is expired. If expired,
  // exchanges refresh token for new access token and updates wallet.
  const wallets = await get("/api/allWallets");
  if (wallets) {
    try {
      await verifyToken(wallets[0]);
      return true
    }
    catch (e) {
      console.log("verifyCoinbaseWallet: verification failed. See error: "+e)
      return false
    }
  }
  console.log("verifyCoinbaseWallet: wallet list empty. Re-authorize Coinbase.")
  return false
}

async function refreshAccessToken(walletObj) {
  return await get("/api/newCoinbaseToken",{refreshToken: walletObj.refreshToken});
}

async function verifyToken(walletObj) {
  const response = await get("/api/coinbaseUser",{accessToken: walletObj.accessToken});
  if (response.expired) {
    console.log("verifyToken: token has expired. Trying to refresh...")
   const refreshResponse = await refreshAccessToken(walletObj)
    console.log("refreshResponse: "+JSON.stringify(refreshResponse))
    let body = {
      _id: walletObj._id,
      accessToken: refreshResponse.response.access_token,
      refreshToken: refreshResponse.response.refresh_token,
    }
    await get("/api/updateWallet",body);
    console.log("verifyToken: used refresh token and added new wallet.");
    return
  }
  console.log("verifyToken: access token is not expired.")
}

async function getTransactionsHelper(walletObj) {
  const transactionsById = {};
  let allTransactions = [];
  console.log('started')
  const accountIDs = await post("/api/coinbaseAccount", {accessToken: walletObj.accessToken});
  for (const accountID of accountIDs.response.data) {
    // console.log(accountID)
    const body = {
      accessToken: walletObj.accessToken,
      accountID: accountID.id,
    }
    await get("/api/coinbaseTransactions", body).then((trans)=>{
        transactionsById[accountID.id] = trans.response.data;
      if (trans.response.data.length !== 0) {
        allTransactions = allTransactions.concat(trans.response.data);
      }
    });
  }
  return [transactionsById, allTransactions]
}

async function getTransactions() {
  let walletTransactions = {};
  const tokens = await getWalletsHelper();
  // console.log("wallets: " + JSON.stringify(tokens));
  if (!tokens) {
    return walletTransactions
  }

  // const helper = async(tokens,walletTransactions)=>{
  //   for (const token of tokens) {
  //     const [transactionsById, allTransactions] = await getTransactionsHelper(token);
  //     walletTransactions[token.googleName] = allTransactions;
  //   }}

  // await helper(tokens,walletTransactions)
  // console.log(walletTransactions)
  const [transactionsById, allTransactions] = await getTransactionsHelper(tokens[0]);
  return [transactionsById, allTransactions];
}

async function getTotalDeposited() {
  const [transactionsById, allTransactions] = await getTransactions();
  let deposited = 0.0;
  for (const transaction of allTransactions){
    if (transaction.type === "buy"){
      deposited = deposited + parseFloat(transaction.native_amount.amount);
    };
  };
  return deposited
}

async function getWalletsHelper() {
  return await get("/api/allWallets");
  }

  //TODO fix refresh token exchange
async function getCoinsHelper(walletObj) {
    const response = await post("/api/coinbaseAccount", {accessToken: walletObj.accessToken});
    if(response.expired) {
      return
    }
    return response
  }

async function getCoins() {
    let coins = [];
    const tokens = await getWalletsHelper();
  // console.log("wallets: " + JSON.stringify(tokens));
    if (!tokens) {
      return coins
    }

    const helper = async(tokens,coins)=>{
    for (const token of tokens) {
      const coinObj = await getCoinsHelper(token);
      await coins.push(coinObj);
    }}

    await helper(tokens,coins)
    return coins
}

async function getWallets() {
  let structWallets = [];
  const wallets = await getWalletsHelper();
  if (!wallets) { return structWallets }
  
  const helper = async (wallets, structWallets) => {
    for (const wallet of wallets) {
      let name = "Coinbase";  // set to Coinbase because currently only supported wallet type
      let tokens = [];
      const tokensObj = await getCoinsHelper(wallet);
      const cleanedTokensObj = tokensObj.response.data
      const filteredTokens = cleanedTokensObj.filter((tokenObj) => (parseFloat(tokenObj.balance.amount) !== 0))
      tokens = filteredTokens.map((TokenObj) => (
        { token: TokenObj.currency.code, balance: TokenObj.balance.amount }
      ));
      let structWallet = { name: name, tokens: tokens }
      await structWallets.push(structWallet);
    }
  }

  await helper (wallets, structWallets)
  return structWallets
}

export { getCoins,
  getWallets,
  getTransactions,
  getTotalDeposited,
  verifyCoinbaseWallet,
};