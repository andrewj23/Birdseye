import React, { Component, useEffect, useState } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { div } from "react-router-dom";
import './TopTab.css'
import { get } from "../../utilities";
// require('dotenv').config();

// const GOOGLE_CLIENT_ID = process.env.GOOGLE_ID;
const GOOGLE_CLIENT_ID = "950199412699-d6sfpl52prce9n34uu94qgh1f0ubd5gn.apps.googleusercontent.com";

const TopTab = ({ userId, userName, handleLogin, handleLogout }) => {

  return (
    <div className='topTab-container'>
      {userId ? (
        <span className='Home-greeting'>Welcome, {userName}!</span>
      ) : (
        <span className='Home-greeting'>Welcome to Birdseye!</span>
      )}
      <span className={"login"}>
      {userId ? (
        <GoogleLogout
          clientId={GOOGLE_CLIENT_ID}
          buttonText="Logout"
          onLogoutSuccess={handleLogout}
          onFailure={(err) => console.log(err)}
        />
      ) : (
        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          buttonText="Login"
          onSuccess={handleLogin}
          onFailure={(err) => console.log(err)}
        />
      )}
      </span>
    </div>
  );
};

export default TopTab;