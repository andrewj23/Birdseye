import React, { Component } from "react";
// var Client = require('coinbase').Client;
import "./Summary.css";

const Summary = (props) => {
  const clientID = "1b64cf309a86bd5f5a4d817e728c4dc5682463397d23b24a8f2f06f4ab433678";
  const clientSecret = "4514e203850ae432ce980d16ba56b7c06b2c5726ac7bb7c28a50bc8aaea721d0";
  const redirectURL = "http://localhost:5000/"
  const authURL = "https://www.coinbase.com/oauth/authorize?response_type=code&client_id="+clientID+"&redirect_uri="+redirectURL+"&state=134ef5504a94&scope=wallet:accounts:read";
  console.log(authURL)
  fetch(authURL).then((something)=>{console.log(something)});
  // const myKey = 'uikHmVg1bjwSaFqr';
  // const mySecret = 'oW0fqj7qiqL08OyJ9ViFSlDCBLzfUvrx';
  // var client = new coinbase.Client({'apiKey': myKey, 'apiSecret': mySecret, strictSSL: false});
  // client.getAccounts({limit: 200}, function (err, accounts) {
  //   accounts.forEach(function (acct) {
  //     acct.getTransactions(null, function (err, txns) {
  //       if (txns !== null) {
  //         txns.forEach(function (txn) {
  //           if (txn.type === 'buy') {
  //             console.log(parseFloat(txn.native_amount.amount));
  //           }
  //         });
  //       }
  //     });
  //   });
  // })

  return (

    <div className="Summary-container">
      <span className="Summary-PV">$420,069</span>
      <span className="Summary-percentage">-1.83%</span>
      <p>insert chart here</p>
      <div className="Summary-principal">Principal: $500,000</div>
      <div className="Summary-change">Net Change: -$79,931</div>
    </div>
  
    );
};

export default Summary;