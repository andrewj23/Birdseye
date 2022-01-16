import { get, post } from "../client/src/utilities";
const clientID = "1b64cf309a86bd5f5a4d817e728c4dc5682463397d23b24a8f2f06f4ab433678";
const clientSecret = "4514e203850ae432ce980d16ba56b7c06b2c5726ac7bb7c28a50bc8aaea721d0";
const redirectURL = "http://localhost:3000/api/callback/"
const SECRET = "134ef5504a94"
const authURL = "https://www.coinbase.com/oauth/authorize?response_type=code&client_id="+clientID+"&redirect_uri="+redirectURL+"&state=134ef5504a94&scope=wallet:accounts:read&account=all";


async function refreshAccessToken(tokenObj) {
  return await get("/api/newCoinbaseToken", { refreshToken: tokenObj.refreshToken});
}

async function getWalletsHelper() {
  return await get("/api/allWallets");
  }

async function getCoinsHelper(walletObj) {
    const response = await post("/api/coinbaseAccount", {accessToken: walletObj.accessToken});
    console.log(JSON.stringify(response))
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


export {getCoins};