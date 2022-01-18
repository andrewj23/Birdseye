import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";
import "./Messages.css";
import SearchBar from "../modules/Messages/SearchBar";

const Messages = ({ userId, handleLogin, handleLogout }) => {
  return (
    <div>
      {/*<SearchBar />*/}
      <p>hi</p>
    </div>
  );
};

export default Messages;