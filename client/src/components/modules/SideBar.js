import React, { Component } from "react";
import './SideBar.css'
// import { div } from "react-router-dom";
import { Link } from "@reach/router";

const SideBar = (props) => {
  return (
    <div className='sideBar-graphic'>
    <nav className='sideBar-container'>
      <div className="SideBar-flex">
          <div className='SideBar-logo' />
          <Link to='/' className='SideBar-link'>Home</Link>
          <Link to='/wallets/' className='SideBar-link'>Wallets</Link>
          <Link to='/messages/' className='SideBar-link'>Messages</Link>
          <div className='SideBar-name' />
      </div>
    </nav>
    </div>
  );
};

export default SideBar;