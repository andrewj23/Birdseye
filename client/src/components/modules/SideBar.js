import React, { Component } from "react";
import './SideBar.css'
// import { div } from "react-router-dom";
import { Link } from "@reach/router";

const SideBar = (props) => {
  return (
    <nav>
    <div className='flex-container'>
      <div className='SideBar-logo' />
      <Link to='/' className='SideBar-link'>Home</Link>
      <Link to='/Wallets/' className='SideBar-link'>Wallets</Link>
      <Link to='/Messages/' className='SideBar-link'>Messages</Link>
      <div className='SideBar-name'>BIRDSEYE</div>
    </div>
    </nav>
  );
};

export default SideBar;