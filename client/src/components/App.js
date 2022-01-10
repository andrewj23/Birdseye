import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Home from "./pages/Home.js";
//hello friend

import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

/**
 * Define the "App" component
 */
const App = () => {
  const [userId, setUserId] = useState(undefined);

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registered in the database, and currently logged in.
        setUserId(user._id);
      }
    });
  }, []);

  const handleLogin = (res) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  const handleLogout = () => {
    setUserId(undefined);
    post("/api/logout");
  };

  return (
    <>
      <Router>
        <Home path="/" handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} />
        <Home path="/Home" handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} />
        {/*<Wallets path="/Wallets" handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} />*/}
        {/*<Messages path="/Messages" handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} />*/}
        <NotFound default />
      </Router>
    </>
  );
};

export default App;
