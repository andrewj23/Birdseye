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
  // helper for verifyCoinbaseWallet
  return await get("/api/newCoinbaseToken",{refreshToken: walletObj.refreshToken});
}

async function verifyToken(walletObj) {
  // helper for verifyCoinbaseWallet
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

async function getTransactions() {
  // fetches all transactions (unordered) from Coinbase account
  const wallets = await get("/api/allWallets");
  if (!wallets) {
    console.log("ERROR: getTransactions: wallet list in Mongo is empty.")
    return {}
  }
  return await getTransactionsHelper(wallets[0]);
}

async function getTransactionsHelper(walletObj) {
  // helper to getTransactions
  let allTransactions = [];
  const accountIDs = await post("/api/coinbaseAccount", {accessToken: walletObj.accessToken});
  if (accountIDs.expired) {
    console.log("ERROR: getTransactionsHelper: Coinbase access token expired or invalid.")
    return
  }
  for (const accountID of accountIDs.response.data) {
    const body = {
      accessToken: walletObj.accessToken,
      accountID: accountID.id,
    }
    await get("/api/coinbaseTransactions", body).then((trans)=>{
      // transactionsById[accountID.id] = trans.response.data; IF WE WANT TRANSACTIONS BY TOKEN
      if (trans.response.data.length !== 0) {
        allTransactions = allTransactions.concat(trans.response.data);
      }
    });
  }
  return allTransactions
}

async function getTotalDeposited() {
  // returns total USD deposited to Coinbase
  const allTransactions = await getTransactions();
  let deposited = 0.0;
  for (const transaction of allTransactions){
    if (transaction.type === "buy"){
      deposited = deposited + parseFloat(transaction.native_amount.amount);
    };
  };
  return deposited
}

async function getCoins() {
  // returns list of all coin accounts on Coinbase
  const wallets = await get("/api/allWallets");
  if (!wallets) {
    return []
  }
      return await getCoinsHelper(wallets[0]);
}

async function getWallets() {
  // returns list of wallets: {Wallet name: Token list}
  const wallets = await get("/api/allWallets");
  if (!wallets) { return [] }
  let name = "Coinbase";  // set to Coinbase because currently only supported wallet type
  let tokens = [];
  const tokensObj = await getCoinsHelper(wallets[0]);
  const cleanedTokensObj = tokensObj.response.data
  const filteredTokens = cleanedTokensObj.filter((tokenObj) => (parseFloat(tokenObj.balance.amount) !== 0))
  tokens = filteredTokens.map((TokenObj) => (
    { token: TokenObj.currency.code, balance: TokenObj.balance.amount }
  ));
  return { name: name, tokens: tokens }
}

async function getCoinsHelper(walletObj) {
  // helper for getCoins and getWallets
  const response = await post("/api/coinbaseAccount", {accessToken: walletObj.accessToken});
  if(response.expired) {
    return
  }
  return response
}

export { getCoins,
  getWallets,
  getTransactions,
  getTotalDeposited,
  verifyCoinbaseWallet,
};