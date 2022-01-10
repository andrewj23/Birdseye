// import { post } from "./utilities";
import React, { Component } from "react";
const myKey = 'uikHmVg1bjwSaFqr';
const mySecret = 'oW0fqj7qiqL08OyJ9ViFSlDCBLzfUvrx';
// var coinbase = require('coinbase');
// var client = new coinbase.Client({'apiKey': myKey, 'apiSecret': mySecret, strictSSL: false});
// let deposited = 0;

// const returnDeposited = () => {
//   console.log(deposited);
// }

// client.getAccounts({limit: 200}, function (err, accounts) {
//   accounts.forEach(function (acct) {
//     if (parseFloat(acct.balance.amount)) {
//       console.log('my bal: ' + acct.balance.amount + ' for ' + acct.name + ' ' + acct.id);
//     }
//   });
// });
const Coinbase = () => {
  // let transactions = [];
  // client.getAccounts({limit: 200}, function (err, accounts) {
  //   accounts.forEach(function (acct) {
  //     acct.getTransactions(null, function (err, txns) {
  //       if (txns !== null) {
  //         txns.forEach(function (txn) {
  //           if (txn.type === 'buy') {
  //             body = {  id: txn.id,
  //               name: txn.amount.currency,
  //               type: txn.type,
  //               amount: txn.amount.amount,
  //               native_amount: txn.native_amount.amount};
  //             transactions.push(body);
  //             // post("/api/transactions",body.then((transaction)=>{
  //             //   console.log(transaction)}));
  //           }
  //         });
  //       }
  //     });
  //   });
  // })
  return (
    <p>Transactions</p>
  );
};

export default Coinbase;

//need to make in to a promise so the api call happens before deposit summation

//