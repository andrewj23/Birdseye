import { get, post } from "../client/src/utilities";

async function onWalletLogin() {
  try {
    return await get("/api/addWallet");
  }
  catch (e) {
    console.log("Could not add wallet")
  }
}


async function refreshAccessToken(tokenObj) {
  return await get("/api/newCoinbaseToken", { refreshToken: tokenObj.refreshToken});
}

async function getWalletsHelper() {
  return await get("/api/allWallets");
  }

async function getCoinsHelper(walletObj) {
    const response = await post("/api/coinbaseAccount", {accessToken: walletObj.accessToken});
    if(response.expired) {
      console.log("token expired... Log in again")
      return
      // console.log("response.expired: "+response.expired);
      // await get("/api/deleteWallet",{accessToken: walletObj.accessToken})
      // const refreshResponse = await refreshAccessToken(walletObj);
      // console.log("refresh response: "+JSON.stringify(refreshResponse));
      // const body = {
      //   accessToken: refreshResponse.data.access_token,
      //   refreshToken: refreshResponse.data.refresh_token,
      // }
      // await get("/api/addWallet",body)
      // console.log("COMPLETED");
      // return
      // return getCoinsHelper(body)
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

export {getCoins, onWalletLogin};