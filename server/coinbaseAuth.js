const Client = require('coinbase').Client;
const coinbaseUser = require("./models/coinbaseUser");
const socketManager = require("./server-socket");
const clientID = "1b64cf309a86bd5f5a4d817e728c4dc5682463397d23b24a8f2f06f4ab433678";
const clientSecret = "4514e203850ae432ce980d16ba56b7c06b2c5726ac7bb7c28a50bc8aaea721d0";
const redirectURL = "http://localhost:5000/auth/coinbase/callback"
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




// const clientID = "1b64cf309a86bd5f5a4d817e728c4dc5682463397d23b24a8f2f06f4ab433678";
// const clientSecret = "4514e203850ae432ce980d16ba56b7c06b2c5726ac7bb7c28a50bc8aaea721d0";
// const passport=require('passport')
// var CoinbaseStrategy = require('passport-coinbase-oauth2').Strategy;
//
// passport.use(
//   new CoinbaseStrategy(
//     {
//       clientID: clientID,
//       clientSecret: clientSecret,
//       callbackURL: "http://localhost:5000/",
//       authorizationURL:"https://coinbase.com/oauth/authorize",
//       tokenURL: "https://api.coinbase.com/oauth/token",
//       userProfileURL: "https://api.coinbase.com/v2/user",
//     },
//     (accessToken, refreshToken,profile) => {
//       console.log("access token",accessToken)
//       console.log("refresh token", refreshToken)
//       console.log(profile)
//     }
//   ));
//
//
// app.get('/auth/coinbase',passport.authenticate("coinbase",{scope:["user","transactions"],account:['all']}),
//   function(req,res){
//   });
//
// app.get('/auth/coinbase/callback',passport.authenticate('coinbase',{failureRedirect: '/login'}),
//   function(req,res){
//     res.redirect('/')
//   });