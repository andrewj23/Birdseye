/*
|--------------------------------------------------------------------------
| server.js -- The core of your server
|--------------------------------------------------------------------------
|
| This file defines how your server starts up. Think of it as the main() of your server.
| At a high level, this file does the following things:
| - Connect to the database
| - Sets up server middleware (i.e. addons that enable things like json parsing, user login)
| - Hooks up all the backend routes specified in api.js
| - Fowards frontend routes that should be handled by the React router
| - Sets up error handling in case something goes wrong when handling a request
| - Actually starts the webserver
*/

// validator runs some basic checks to make sure you've set everything up correctly
// this is a tool provided by staff, so you don't need to worry about it
const validator = require("./validator");
validator.checkSetup();

//import libraries needed for the webserver to work!
const http = require("http");
const express = require("express"); // backend framework for our node server.
const session = require("express-session"); // library that stores info about each connected user
const mongoose = require("mongoose"); // library to connect to MongoDB
const path = require("path"); // provide utilities for working with file and directory paths

const api = require("./api");
const auth = require("./auth");

const clientID = "1b64cf309a86bd5f5a4d817e728c4dc5682463397d23b24a8f2f06f4ab433678";
const clientSecret = "4514e203850ae432ce980d16ba56b7c06b2c5726ac7bb7c28a50bc8aaea721d0";
const passport=require('passport')
var CoinbaseStrategy = require('passport-coinbase-oauth2').Strategy;

passport.use(
  new CoinbaseStrategy(
  {
    clientID: clientID,
    clientSecret: clientSecret,
    callbackURL: "http://localhost:5000/",
    authorizationURL:"https://coinbase.com/oauth/authorize",
    tokenURL: "https://api.coinbase.com/oauth/token",
    userProfileURL: "https://api.coinbase.com/v2/user",
  },
  (accessToken, refreshToken,profile) => {
    console.log("access token",accessToken)
    console.log("refresh token", refreshToken)
    console.log(profile)
  }
));


// socket stuff
const socketManager = require("./server-socket");

// Server configuration below
// TODO change connection URL after setting up your team database
const mongoConnectionURL = "mongodb+srv://apj23:xIMGO5ay02p0Ij7D@cluster0.71f0p.mongodb.net/BirdseyeDB?retryWrites=true&w=majority";
// TODO change database name to the name you chose
const databaseName = "Birdseye";

// connect to mongodb
mongoose
  .connect(mongoConnectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: databaseName,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(`Error connecting to MongoDB: ${err}`));

// create a new express server
const app = express();

app.use(validator.checkRoutes);

// allow us to process POST requests
app.use(express.json());

// set up a session, which will persist login data across requests
app.use(
  session({
    secret: "session-secret",
    resave: false,
    saveUninitialized: false,
  })
);

// this checks if the user is logged in, and populates "req.user"
app.use(auth.populateCurrentUser);

// connect user-defined routes
app.use("/api", api);

// load the compiled react files, which will serve /index.html and /bundle.js
const reactPath = path.resolve(__dirname, "..", "client", "dist");
app.use(express.static(reactPath));

app.get('/auth/coinbase',passport.authenticate("coinbase",{scope:["user","transactions"],account:['all']}),
  function(req,res){
  });

app.get('/auth/coinbase/callback',passport.authenticate('coinbase',{failureRedirect: '/login'}),
  function(req,res){
    res.redirect('/')
  });

// for all other routes, render index.html and let react router handle it
app.get("*", (req, res) => {
  res.sendFile(path.join(reactPath, "index.html"));
});

// any server errors cause this function to run
app.use((err, req, res, next) => {
  const status = err.status || 500;
  if (status === 500) {
    // 500 means Internal Server Error
    console.log("The server errored when processing a request!");
    console.log(err);
  }

  res.status(status);
  res.send({
    status: status,
    message: err.message,
  });
});


// hardcode port to 3000 for now
const port = 3000;
const server = http.Server(app);
socketManager.init(server);

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
