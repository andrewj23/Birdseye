import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";
import "./Home.css";
import Summary from "../modules/Home/Summary";
import Feed from "../modules/Home/Feed";
import Visuals from "../modules/Home/Visuals";
import TopTab from "../modules/TopTab";
import SearchBar from "../modules/Home/SearchBar";
import SideBar from "../modules/SideBar";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "121479668229-t5j82jrbi9oejh7c8avada226s75bopn.apps.googleusercontent.com";

const Home = ({ userId, handleLogin, handleLogout }) => {
  return (
    <>
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
      <h1>BIRDSEYE</h1>
      <div>
        <SideBar/>
      <div>
        <TopTab/>
        <div>
        <div>
          <Summary/>
          <Visuals/>
        </div>
        <div>
          <SearchBar/>
          <Feed/>
        </div>
        </div>
      </div>
      </div>
      </>
      );
        };

export default Home;
