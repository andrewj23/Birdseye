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

// import authentication library
const auth = require("./auth");

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

router.get("/coins",(req,res)=>{
  Coin.find({}).then((coins) => res.send(coins));
});

router.post("/coin",(req,res)=>{
  const newCoin = new Coin({
    name: req.body.name,
    img: req.body.img,
    holding: req.body.holding,
    value: req.body.value,
    percent: req.body.percent
  });

  newCoin.save().then((coin) => res.send(coin));
});

router.get("/wallets",(req,res)=>{
  Wallet.find({}).then((wallets) => res.send(wallets));
});

router.post("/wallet",(req,res)=>{
  const newWallet = new Wallet({
    name: req.body.name,
    img: req.body.img,
    holding: req.body.holding,
    value: req.body.value,
    percent: req.body.percent
  });

  newWallet.save().then((wallet) => res.send(wallet));
});

router.get("/messagegroups",(req,res)=>{
  MessageGroup.find({}).then((messagegroups) => res.send(messagegroups));
});

router.post("/messagegroup",(req,res)=>{
  const newMessageGroup = new MessageGroup({
    name: req.body.name,
    img: req.body.img,
    lastMessage: req.body.lastMessage,
    time: req.body.time,
  });

  newMessageGroup.save().then((messagegroup) => res.send(messagegroup));
});

router.get("/messages",(req,res)=>{
  Message.find({}).then((messages) => res.send(messages));
});

router.post("/message",(req,res)=>{
  const newMessage = new Message({
    creatorName: req.body.name,
    content: req.body.content,
    time: req.body.time
  });

  newMessage.save().then((message) => res.send(message));
});

router.get("/visuals",(req,res)=>{
  Visuals.find({}).then((visuals) => res.send(visuals));
});

router.get("/summary",(req,res)=>{
  Summary.find({}).then((summary) => res.send(summary));
});

router.get("/transactions"), (req,res)=>{
  Transactions.find({}).then((transactions) => res.send(transactions));
}

router.post("/transactions",(req,res)=>{
  const newTransaction = new Transactions({
    id: req.body.id,
    name: req.body.name,
    type: req.body.type,
    amount: req.body.amount,
    native_amount: req.body.native_amount,
  });

  newTransaction.save().then((transaction) => res.send(transaction));
});

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
      console.log("access token " + accessToken)
      console.log("state " + state)
      res.send({ response: response?.data });
    } catch (e) {
      console.log("Could not trade code for tokens", e.response.data)
    }
  }
});
// Gets the user details
router.get("/user", async (req, res) => {
  const config = {
    method: 'get',
    url: 'https://api.coinbase.com/v2/user',
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  };

  try {
    const response = await axios(config);
    res.send({ response: response?.data })
  } catch (e) {
    console.log("Could not get user", e.response.data)
  }
});

router.get("/account", async (req, res) => {
  const config = {
    method: 'get',
    url: 'https://api.coinbase.com/v2/accounts?limit=200',
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  };

  try {
    const response = await axios(config);
    res.send({ response: response?.data })
  } catch (e) {
    console.log("Could not get accounts", e.response.data)
  }
});


// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
