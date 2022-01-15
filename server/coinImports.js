import { useEffect, useState } from "react";
import { get, post } from "../client/src/utilities";

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

async function getWalletsHelper() {
  return await get("/api/allWallets");
  }

async function getCoinsHelper(walletObj) {
  const body = {
    accessToken: walletObj.accessToken,
  };
  return await post("/api/coinbaseAccount", body);
}


async function getCoins() {
  try {
    let coins = [];
    const tokens = await getWalletsHelper();
    // console.log("wallets: " + JSON.stringify(tokens));

    const helper = async(tokens,coins)=>{
    for (const token of tokens) {
      const coinObj = await getCoinsHelper(token);
      await coins.push(coinObj);
    }}

    await helper(tokens,coins)
    return coins
  }
  catch(e){
    console.log("Could not get wallets: "+e);
  }
}


// async function getCoins(body) {
//   post("/api/coinbaseAccount", body).then((coinObjs) => {
//     return setCoins(coins.concat(coinObjs.response.data));
//   });
// }
// useEffect(() => {
//   if (props.userId)
//   {
//     get("/api/allWallets").then((walletCodeObjs) => {
//       const body = {
//         accessToken: walletCodeObjs.accessToken,
//       };
//     }).then();
//   }
// }, [props.userId]);

export default getCoins;