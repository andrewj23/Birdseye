import React, { Component, useEffect, useState } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { div } from "react-router-dom";
import './TopTab.css'
import { get } from "../../utilities";
const GOOGLE_CLIENT_ID = "121479668229-t5j82jrbi9oejh7c8avada226s75bopn.apps.googleusercontent.com";

const TopTab = ({ userId, handleLogin, handleLogout }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    get('/api/whoami').then((userObj) => setUser(userObj));
  }, []);
  return (
    <div className='topTab-container'>
      <span className='Home-greeting'>Welcome, {user?.name}!</span>
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