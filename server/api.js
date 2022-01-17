/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");
// import models so we can interact with the database
const User = require("./models/user");
const Coin = require("./models/coin");
const Wallet = require("./models/wallet");
const MessageGroup = require("./models/messagegroup");
const Message = require("./models/message");
const Summary = require("./models/summary");
const Visuals = require("./models/visuals");
const Transactions = require("./models/transactions");
const coinbaseUser = require("./models/coinbaseUser");

// import authentication library
const auth = require("./auth");
const coinbaseAuth = require("./coinbaseAuth")

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socketManager = require("./server-socket");
const qs = require("qs");
const axios = require("axios");

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user) socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

// |------------------------------|
// | write your API methods below!|
// |------------------------------|
//


//coinbase
const CLIENT_ID = "1b64cf309a86bd5f5a4d817e728c4dc5682463397d23b24a8f2f06f4ab433678";
const CLIENT_SECRET = "4514e203850ae432ce980d16ba56b7c06b2c5726ac7bb7c28a50bc8aaea721d0";
const REDIRECT_URI = "http://localhost:3000/api/callback/"
const SECRET = "134ef5504a94"

// User gets redirected to this endpoint on successful login
router.get("/callback", async (req, res) => {
  const { code, state } = req.query;
  if (state==SECRET) {
    const data = qs.stringify({
      'grant_type': 'authorization_code',
      'code': code,
      'client_id': CLIENT_ID,
      'client_secret': CLIENT_SECRET,
      'redirect_uri': REDIRECT_URI,
    });
    const config = {
      method: 'post',
      url: 'https://api.coinbase.com/oauth/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data
    };
    try {
      const response = await axios(config);
      // saving tokens for other requests
      accessToken = response.data.access_token;
      refreshToken = response.data.refresh_token;
      const newWallet = new Wallet({
        parent: req.user._id,
        googleName: req.user.name,
        accessToken: response.data.access_token,
        refreshToken: response.data.refresh_token,
      });
      newWallet.save();
      res.redirect('http://localhost:5000/');
      // res.send({ response: response?.data });
    } catch (e) {
      console.log("Could not trade code for tokens", e)
    }
  }
});

router.get("/newCoinbaseToken", async (req, res) => {
  const data = qs.stringify({
      'grant_type': 'refresh_token',
      'client_id': CLIENT_ID,
      'client_secret': CLIENT_SECRET,
      'refresh_token': req.query.refreshToken,
    });
    const config = {
      method: 'post',
      url: 'https://api.coinbase.com/oauth/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data
    };
    console.log(config)
    try {
      const response = await axios(config);
      // saving tokens for other requests
      // accessToken = response.data.access_token;
      // refreshToken = response.data.refresh_token;
      console.log('LOOK HERE'+JSON.stringify(response))
      // res.send(response);
      // res.send({ response: response?.data });
    } catch (e) {
      console.log("Could not trade refresh token for new token",e)
    }
});

//PROBABLY DONT NEED////////
// router.get("/addWallet",(req,res) => {
//   if (!req.user) {
//     // not logged in
//     console.log("User not logged in. Cannot add wallet.")
//     return res.send({});
//   }
//     const newWallet = new Wallet({
//       parent: req.user._id,
//     // accessToken: req.query.accessToken,
//     // refreshToken: req.query.refreshToken,
//       accessToken: accessToken,
//       refreshToken: refreshToken,
//   });
//   newWallet.save().then((wallet) => res.send(wallet));
//   console.log("Added wallet")
// });
////////////////////////////
router.get("/deleteWallet", (req,res) => {
  Wallet.findOneAndDelete({accessToken: req.query.accessToken}).then(()=>{
    console.log("wallet deleted");
  });
})

// Gets the user details TODO: ADD BODY WITH TOKEN
router.get("/coinbaseUser", async (req, res) => {
  try {
    const config = {
      method: 'get',
      url: 'https://api.coinbase.com/v2/user',
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    };
    const response = await axios(config);
    res.send({ response: response?.data })
  } catch (e) {
    console.log("No coinbase user")
    return res.send({})
  }
});

router.get("/allWallets", (req,res) =>{
  try {
    Wallet.find({ parent: req.user._id }).then((coinbaseUsers) => {
      res.send(coinbaseUsers)
    });
  }
  catch(e) {
    console.log("Could not pull wallets.: "+e)
    res.send("Could not pull wallets.: "+e)
  }
})

router.post("/coinbaseAccount", async (req, res) => {
  const config = {
    method: 'get',
    url: 'https://api.coinbase.com/v2/accounts?limit=200',
    headers: {
      'Authorization': `Bearer ${req.body.accessToken}`
    }
  };

  try {
    const response = await axios(config);
    res.send({ response: response?.data, expired: false })
  } catch (e) {
    console.log("Could not get accounts")
    res.send({expired:true})
  }
})

///////// METAMASK
router.get("/ethTransactions",(req,res) =>{

})
// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
