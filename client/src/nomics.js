import Nomics from "nomics";

// async function getCoinData(coins){
//   const nomics = new Nomics({
//     apiKey: 'm_be3c899ce66f1684d94cb70100d9d58bdce71222'
//   });
//   const currencies = await nomics.currenciesTicker({ids:[coins]});
//   let out = {};
//   out[coins]=parseFloat(currencies[0]['price'])
//   return out;
// };

async function getAllPrices(){
  // return await get('api/getAllPrices')
  const nomics = new Nomics({
    apiKey: 'm_be3c899ce66f1684d94cb70100d9d58bdce71222'
  });
  const currencies = await nomics.currenciesTicker();
  let out = {}
  for (const coin of currencies){
    out[coin.id] = parseFloat(coin.price)
  }
  return out;
};



export {getAllPrices};