import React, { Component } from "react";
import './SideBar.css'
import { div } from "react-router-dom";
import { Link } from "@reach/router";

const SideBar = (props) => {
  return (
    <div className='flex-container'>
      <div className='SideBar-logo' />
      <Link className='SideBar-link' to='/' exact>Home</Link>
      <Link className='SideBar-link' to='/Wallets' exact>Wallets</Link>
      <Link className='SideBar-link' to='/Messages' exact>Messages</Link>
      <div className='SideBar-name'>BIRDSEYE</div>
    </div>
  );
};

export default SideBar;