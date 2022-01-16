import React, { Component, useEffect, useState } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { div } from "react-router-dom";
import './TopTab.css'
import { get } from "../../utilities";
import CoinbaseWallet from "./CoinbaseWallet";

const clientID = "1b64cf309a86bd5f5a4d817e728c4dc5682463397d23b24a8f2f06f4ab433678";
const clientSecret = "4514e203850ae432ce980d16ba56b7c06b2c5726ac7bb7c28a50bc8aaea721d0";
const redirectURL = "http://localhost:3000/api/callback/"
const GOOGLE_CLIENT_ID = "121479668229-t5j82jrbi9oejh7c8avada226s75bopn.apps.googleusercontent.com";
const authURL = "https://www.coinbase.com/oauth/authorize?response_type=code&client_id="+clientID+"&redirect_uri="+redirectURL+"&state=134ef5504a94&scope=wallet:accounts:read&account=all";

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
      <span className={'coinbaseLogin'}><CoinbaseWallet/></span>
    </div>
  );
};

export default TopTab;