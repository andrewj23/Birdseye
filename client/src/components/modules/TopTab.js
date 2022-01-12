import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { div } from "react-router-dom";
import './TopTab.css'


const GOOGLE_CLIENT_ID = "121479668229-t5j82jrbi9oejh7c8avada226s75bopn.apps.googleusercontent.com";
const TopTab = ({ userId, handleLogin, handleLogout }) => {
  return (
    <div className='topTab-container'>
      <span className='Home-greeting'>Welcome, Andrew!</span>
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