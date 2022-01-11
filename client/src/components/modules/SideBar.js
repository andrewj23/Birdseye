import React, { Component } from "react";
import './SideBar.css'
// import { div } from "react-router-dom";
import { Link } from "@reach/router";

const SideBar = (props) => {
  return (
    <nav className='flex-container'>
      <div className='SideBar-logo' />
      <ul>
      <li><Link to='/' className='SideBar-link'>Home</Link></li>
        <li><Link to='/wallets/' className='SideBar-link'>Wallets</Link></li>
        <li><Link to='/messages/' className='SideBar-link'>Messages</Link></li>
      </ul>
      <div className='SideBar-name'>BIRDSEYE</div>
    </nav>
  );
};

export default SideBar;