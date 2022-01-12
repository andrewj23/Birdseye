import React, { Component } from "react";
import './SideBar.css'
// import { div } from "react-router-dom";
import { Link } from "@reach/router";

const SideBar = (props) => {
  return (
    <nav className='sideBar-container'>
      <div className='SideBar-logo' />
      <div className={"SideBar-flex"}>
          <Link to='/' className='SideBar-link'>Home</Link>
          <Link to='/wallets/' className='SideBar-link'>Wallets</Link>
          <Link to='/messages/' className='SideBar-link'>Messages</Link>
      </div>
      <div className='SideBar-name'>BIRDSEYE</div>
    </nav>
  );
};

export default SideBar;