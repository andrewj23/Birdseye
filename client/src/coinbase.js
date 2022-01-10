const myKey = 'uikHmVg1bjwSaFqr';
const mySecret = 'oW0fqj7qiqL08OyJ9ViFSlDCBLzfUvrx';

var coinbase = require('coinbase');
var client = new coinbase.Client({'apiKey': myKey, 'apiSecret': mySecret, strictSSL: false});
let deposited = 0;

const returnDeposited = () => {
  console.log(deposited);
}

client.getAccounts({limit: 200}, function (err, accounts) {
  accounts.forEach(function (acct) {
    if (parseFloat(acct.balance.amount)) {
      console.log('my bal: ' + acct.balance.amount + ' for ' + acct.name + ' ' + acct.id);
    }
  });
});

// client.getAccounts({limit: 200},function(err,accounts){
//   accounts.push(accounts)
// });
let accountsArray = [];
client.getAccounts({limit: 200}, function(err,accounts){console.log(typeof(accounts))});
  // .then((accountsArray)=>{console.log(accountsArray)}));

//   .then((accountsArray) =>{
//   console.log(accountsArray.push("worked"))
// });

//need to make in to a promise so the api call happens before deposit summation
// const getDeposited = () => {
//   client.getAccounts({limit: 200}, function (err, accounts) {
//     accounts.forEach(function (acct) {
//       acct.getTransactions(null, function (err, txns) {
//         if (txns !== null) {
//           txns.forEach(function (txn) {
//             if (txn.type === 'buy') {
//               console.log(parseFloat(txn.native_amount.amount));
//             }
//           });
//         }
//       })
//     });
//   })
// };
//
// getDeposited()