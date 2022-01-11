import React, { Component } from "react";
import './SideBar.css'

const SideBar = (props) => {
  return (
    <div className='sidebar'>
      <div className='SideBar-logo' />
      <div className='SideBar-link'>Coins</div>
      <div className='SideBar-link'>Wallets</div>
      <div className='SideBar-link'>Messages</div>
    </div>
  );
};

export default SideBar;