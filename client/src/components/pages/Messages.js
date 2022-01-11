import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";
import "./Messages.css";
import SearchBar from "../modules/Messages/SearchBar";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "121479668229-t5j82jrbi9oejh7c8avada226s75bopn.apps.googleusercontent.com";

const Messages = ({ userId, handleLogin, handleLogout }) => {
  return (
    <div>
      <SearchBar />
      <p>hi</p>
    </div>
  );
};

export default Messages;