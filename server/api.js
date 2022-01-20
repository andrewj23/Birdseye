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
const ForumPost = require("./models/forumpost");
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
//USE FOR LOCALHOST///////////////////////////
const REDIRECT_URI = "http://localhost:3000/api/callback/"
//USE FOR HEROKU DEPLOYMENT///////////////////////////
// const REDIRECT_URI = "https://birdseye-crypto.herokuapp.com/api/callback/"
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
      console.log("api/callback: Coinbase auth callback succeeded. Redirecting back...")
      res.redirect('http://localhost:5000/');
      // res.redirect('https://birdseye-crypto.herokuapp.com/');
      // res.send({ response: response?.data });
    } catch (e) {
      console.log("ERROR: api/callback: Could not trade code for access token with Coinbase. See error: ", e)
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
    try {
      const response = await axios(config);
      console.log("api/newCoinbaseToken: Coinbase auth callback succeeded. Redirecting back...")
      res.send({ response: response?.data });
    } catch (e) {
      console.log("ERROR: api/newCoinbaseToken: refresh token exchanged failed. See error: ", e)
    }
});

router.get("/updateWallet",(req,res) => {
    Wallet.findOneAndUpdate({ _id: req.query._id }, {
      accessToken: req.query.accessToken,
      refreshToken: req.query.refreshToken,
    },{useFindAndModify: false},
      function(err, result) {
        if (err) {
          console.log("ERROR: /updateWallet: failed to add wallet to Mongo. See error: ",err);
          res.send("ERROR: /updateWallet: failed to add wallet to Mongo. See error: "+err);
        } else {
          console.log("/updateWallet: wallet updated in Mongo.");
          res.send(result);
        }
      });
});
//PROBABLY DONT NEED////////
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
        'Authorization': `Bearer ${req.query.accessToken}`
      }
    };
    const response = await axios(config);
    console.log("api/coinbaseUser: valid Coinbase use found.")
    res.send({ response: response?.data, expired: false })
  } catch (e) {
    console.log("ERROR: api/coinbaseUser: Invalid or expired token.")
    return res.send({expired: true})
  }
});

router.get("/allWallets", (req,res) =>{
  try {
    Wallet.find({ parent: req.user._id }).then((coinbaseUsers) => {
      console.log("api/allWallets: pulled wallet list from Mongo.")
      res.send(coinbaseUsers)
    });
  }
  catch(e) {
    console.log("ERROR: api/allWallets: Failed to pull wallet list from Mongo. See Error: ",e)
    res.send({})
  }
})

router.get("/allForumPosts", (req,res) =>{
  try {
    ForumPost.find({}).then((posts) => {
      console.log("api/allForumPosts: pulled all forum posts from Mongo.")
      res.send(posts)
    });
  }
  catch(e) {
    console.log("ERROR: api/allForumPosts: Failed to pull forum posts from Mongo. See Error: ", e)
    res.send({})
  }
})

router.post("/forumPost", (req, res) => {
  const newForumPost = new ForumPost({
    author: req.user.name,
    subject: req.body.subject,
    content: req.body.content
  });
  newForumPost.save().then((post) => res.send(post));
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
    console.log("api/coinbaseAccount: pulled accounts from Coinbase.")
    res.send({ response: response?.data, expired: false })
  } catch (e) {
    console.log("ERROR: api/coinbaseAccount: could not get accounts from Coinbase. See error: ",e)
    res.send({response:"ERROR: api/coinbaseAccount: could not get accounts from Coinbase. See error: "+e, expired:true})
  }
})

router.get("/coinbaseTransactions",async (req,res) => {
  const config = {
    method: 'get',
    url: `https://api.coinbase.com/v2/accounts/${req.query.accountID}/transactions`,
    headers: {
      'Authorization': `Bearer ${req.query.accessToken}`
    }
  };
  try {
    const response = await axios(config);
    console.log("api/coinbaseTransactions: pulled transactions from Coinbase.")
    res.send({ response: response?.data })
  } catch (e) {
    console.log("ERROR: api/coinbaseTransactions: could not get transactions from Coinbase. See error: ",e)
    res.send("ERROR: api/coinbaseTransactions: could not get transactions from Coinbase. See error: "+e)
  }
})

///////// METAMASK
// router.get("/ethTransactions", (req,res) =>{
//
// })
// // anything else falls to this "not found" case
// router.all("*", (req, res) => {
//   console.log(`API route not found: ${req.method} ${req.url}`);
//   res.status(404).send({ msg: "API route not found" });
// });

module.exports = router;
