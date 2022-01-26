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
const coinbaseWallet = require("./models/coinbaseWallet");
const metamaskWallet = require("./models/metamaskWallet")
const ForumPost = require("./models/forumpost");
const ForumComment = require("./models/forumcomment");
const ForumLike = require("./models/forumlike");
const Summary = require("./models/summary");
const Visuals = require("./models/visuals");
const Transactions = require("./models/transactions");
const coinbaseUser = require("./models/coinbaseUser");

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
//


//coinbase
// const CLIENT_ID = process.env.COINBASE_CLIENT_ID;
// const CLIENT_SECRET = process.env.COINBASE_SECRET_ID;
// const SECRET = process.env.COINBASE_SECRET_STRING
//USE FOR LOCALHOST///////////////////////////
// const REDIRECT_URI = "http://localhost:3000/api/callback/"
//USE FOR HEROKU DEPLOYMENT///////////////////////////
const REDIRECT_URI = "https://birdseye-crypto.herokuapp.com/api/callback/"
const CLIENT_ID = "1b64cf309a86bd5f5a4d817e728c4dc5682463397d23b24a8f2f06f4ab433678"
const CLIENT_SECRET = "4514e203850ae432ce980d16ba56b7c06b2c5726ac7bb7c28a50bc8aaea721d0"
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
      const newWallet = new coinbaseWallet({
        parent: req.user._id,
        googleName: req.user.name,
        accessToken: response.data.access_token,
        refreshToken: response.data.refresh_token,
      });
      newWallet.save();
      // console.log("api/callback: Coinbase auth callback succeeded. Redirecting back...")
      //USE FOR LOCALHOST///////////////////////////
      // res.redirect('http://localhost:5000/');
      //USE FOR HEROKU DEPLOYMENT///////////////////////////
      res.redirect('https://birdseye-crypto.herokuapp.com/');
    } catch (e) {
      // console.log("ERROR: api/callback: Could not trade code for access token with Coinbase. See error: ", e)
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
      // console.log("api/newCoinbaseToken: Coinbase auth callback succeeded. Redirecting back...")
      res.send({ response: response?.data });
    } catch (e) {
      // console.log("ERROR: api/newCoinbaseToken: refresh token exchanged failed. See error: ", e)
    }
});

router.get("/updateCoinbaseWallet",(req,res) => {
  coinbaseWallet.findOneAndUpdate({ _id: req.query._id }, {
      accessToken: req.query.accessToken,
      refreshToken: req.query.refreshToken,
    },{useFindAndModify: false},
      function(err, result) {
        if (err) {
          // console.log("ERROR: /updateWallet: failed to add wallet to Mongo. See error: ",err);
          res.send("ERROR: /updateWallet: failed to add wallet to Mongo. See error: "+err);
        } else {
          // console.log("/updateWallet: wallet updated in Mongo.");
          res.send(result);
        }
      });
});
//PROBABLY DONT NEED////////
router.get("/deleteCoinbaseWallet", (req,res) => {
  coinbaseWallet.findOneAndDelete({accessToken: req.query.accessToken}).then(()=>{
    // console.log("wallet deleted");
  });
})

// Gets the user details
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
    // console.log("api/coinbaseUser: valid Coinbase use found.")
    res.send({ response: response?.data, expired: false })
  } catch (e) {
    // console.log("ERROR: api/coinbaseUser: Invalid or expired token.")
    return res.send({expired: true})
  }
});

router.get("/allCoinbaseWallets", (req,res) =>{
  try {
    coinbaseWallet.find({ parent: req.user._id }).then((coinbaseUsers) => {
      // console.log("api/allWallets: pulled wallet list from Mongo.")
      res.send(coinbaseUsers)
    });
  }
  catch(e) {
    // console.log("ERROR: api/allWallets: Failed to pull wallet list from Mongo. See Error: ",e)
    res.send({})
  }
});

router.get("/allForumPosts", (req,res) =>{
  try {
    ForumPost.find({}).then((posts) => {
      // console.log("api/allForumPosts: pulled all forum posts from Mongo.")
      res.send(posts)
    });
  }
  catch(e) {
    // console.log("ERROR: api/allForumPosts: Failed to pull forum posts from Mongo. See Error: ", e)
    res.send({})
  }
});

router.post("/newForumPost", (req, res) => {
  const newForumPost = new ForumPost({
    AuthorID: req.user._id,
    AuthorName: req.user.name,
    Subject: req.body.subject,
    Content: req.body.content
  });
  newForumPost.save().then((post) => res.send(post));
});

router.get("/getPostComments", (req, res) => {
  ForumComment.find({ Parent: req.query.parent }).then((comments) => {
    res.send(comments);
  });
});

router.post("/newComment", (req, res) => {
  const newForumComment = new ForumComment({
    AuthorID: req.user._id,
    AuthorName: req.user.name,
    Parent: req.body.parent,
    Content: req.body.content
  });
  newForumComment.save().then((comment) => res.send(comment));
});

router.get("/getPostLikes", (req, res) => {
  ForumLike.find({ Parent: req.query.parent }).then((likes) => {
    res.send(likes);
  });
});

router.post("/newLike", (req, res) => {
  const newForumLike = new ForumLike({
    AuthorID: req.user._id,
    AuthorName: req.user.name,
    Parent: req.body.parent
  });
  newForumLike.save().then((like) => res.send(like));
});

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
    // console.log("api/coinbaseAccount: pulled accounts from Coinbase.")
    res.send({ response: response?.data, expired: false })
  } catch (e) {
    // console.log("ERROR: api/coinbaseAccount: could not get accounts from Coinbase. See error: ",e)
    res.send({response:"ERROR: api/coinbaseAccount: could not get accounts from Coinbase. See error: ",e, expired:true})
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
    // console.log("api/coinbaseTransactions: pulled transactions from Coinbase.")
    res.send({ response: response?.data })
  } catch (e) {
    // console.log("ERROR: api/coinbaseTransactions: could not get transactions from Coinbase. See error: ",e)
    res.send("ERROR: api/coinbaseTransactions: could not get transactions from Coinbase. See error: "+e)
  }
})

///////// METAMASK
router.post("/addMetaMaskWallet", (req,res) => {
  const newWallet = new metamaskWallet({
    parent: req.user._id,
    googleName: req.user.name,
    address: req.body.address,
  });
  newWallet.save();
})

router.get("/allMetaMaskWallets", (req,res) =>{
  try {
    metamaskWallet.find({ parent: req.user._id }).then((metamaskUsers) => {
      // console.log("api/allMetaMaskWallets: pulled wallet list from Mongo.")
      //  may need to send [] if empty
      if (!metamaskUsers){
        res.send([])
      }
      res.send(metamaskUsers)
    });
  }
  catch(e) {
    // console.log("ERROR: api/allMetaMaskWallets: Failed to pull wallet list from Mongo. See Error: ",e)
    res.send([])
  }
});

router.post("/demoLogin", (req,res) => {
  const newMetaMaskWallet = new metamaskWallet({
    parent: req.user._id,
    googleName: req.user.name,
    address: "0x81eb795906d1ec8ef6de3495492bea3c67c94826",
  });
  newMetaMaskWallet.save();
  const newCoinbaseWallet = new coinbaseWallet({
    parent: req.user._id,
    googleName: req.user.name,
    accessToken: "cd984e3ee28297d8466d879aaef96c8dbb02dfd9b69c03e596f86c1a5799bb8c",
    refreshToken: "82882703ff7d8f3f9d2bf29ec19d30315e6c1b63e7605a2512b868d4d9af5709",
  });
  newCoinbaseWallet.save().then(()=>{res.send(["Delete demo"])});
})
router.post("/demoLogout", (req,res) => {
  coinbaseWallet.findOneAndDelete({ parent: req.user._id }).then((response)=>{
    metamaskWallet.findOneAndDelete({ parent: req.user._id })
  })
})

module.exports = router;
