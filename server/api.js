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
const Visuals = require("./models/visuals")

// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socketManager = require("./server-socket");

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

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
