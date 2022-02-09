import { get, post } from "../client/src/utilities";

async function verifyCoinbaseWallet() {
  // checks if wallet list is empty. Returns false if empty. If not, checks if access token is expired. If expired,
  // exchanges refresh token for new access token and updates wallet.
  const wallets = await get("/api/allCoinbaseWallets");
  if (wallets[0] !== "undefined") {
    try {
      await verifyToken(wallets[0]);
      return true
    }
    catch (e) {
      // console.log("verifyCoinbaseWallet: verification failed. See error: "+e)
      return false
    }
  }
  // console.log("verifyCoinbaseWallet: wallet list empty. Re-authorize Coinbase.")
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
    // console.log("verifyToken: token has expired. Trying to refresh...")
   const refreshResponse = await refreshAccessToken(walletObj)
    // console.log("refreshResponse: "+JSON.stringify(refreshResponse))
    let body = {
      _id: walletObj._id,
      accessToken: refreshResponse.response.access_token,
      refreshToken: refreshResponse.response.refresh_token,
    }
    await get("/api/updateCoinbaseWallet",body);
    // console.log("verifyToken: used refresh token and added new wallet.");
    return
  }
  // console.log("verifyToken: access token is not expired. User: ",
  //   JSON.stringify(response.response.data.id),
  //   JSON.stringify(response.response.data.name))
}

async function getTransactions() {
  // fetches all transactions (unordered) from Coinbase account
  const wallets = await get("/api/allCoinbaseWallets");
  if (wallets[0]==="undefined") {
    // console.log("ERROR: getTransactions: wallet list in Mongo is empty.")
    return {}
  }
  return await getTransactionsHelper(wallets[0]);
}

async function getTransactionsHelper(walletObj) {
  // helper to getTransactions
  let allTransactions = [];
  let transactionsByID = {};
  const accountIDs = await post("/api/coinbaseAccount", {accessToken: walletObj.accessToken});
  if (accountIDs.expired) {
    // console.log("ERROR: getTransactionsHelper: Coinbase access token expired or invalid.")
    return
  }
  for (const accountID of accountIDs.response.data) {
    const body = {
      accessToken: walletObj.accessToken,
      accountID: accountID.id,
    }
    await get("/api/coinbaseTransactions", body).then((trans)=>{
      transactionsByID[accountID.id] = trans.response.data;
      if (trans.response.data.length !== 0) {
        allTransactions = allTransactions.concat(trans.response.data);
      }
    });
  }
  return [allTransactions, transactionsByID]
}

async function getTotalDeposited() {
  // returns total USD deposited to Coinbase
  const [allTransactions, transactionsByID] = await getTransactions();
  let deposited = 0.0;
  for (const transaction of allTransactions){
    if (transaction.type === "buy"){
      deposited = deposited + parseFloat(transaction.native_amount.amount);
    };
  };
  return [deposited, transactionsByID, allTransactions]
}

async function getCoins() {
  // returns list of all coin accounts on Coinbase
  const wallets = await get("/api/allCoinbaseWallets");
  if (wallets[0]==="undefined") {
    return []
  }
      return await getCoinsHelper(wallets[0]);
}

async function getWallets() {
  // returns list of wallets: {Wallet name: Token list}
  const wallets = await get("/api/allCoinbaseWallets");
  if (wallets[0]==="undefined") { return undefined }
  let name = "Coinbase";  // set to Coinbase because currently only supported wallet type
  let tokens = [];
  const tokensObj = await getCoinsHelper(wallets[0]);
  const cleanedTokensObj = tokensObj.response.data
  const filteredTokens = cleanedTokensObj.filter((tokenObj) => (parseFloat(tokenObj.balance.amount) !== 0))
  tokens = filteredTokens.map((TokenObj) => (
    { name:TokenObj.currency.name, token: TokenObj.currency.code, balance: parseFloat(TokenObj.balance.amount) }
  ));
  return { "name": name, "tokens": tokens }
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