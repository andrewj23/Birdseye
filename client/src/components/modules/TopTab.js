import React, { Component } from "react";
import { div } from "react-router-dom";
import './TopTab.css'

const TopTab = (props) => {
  return (
    <div className='topTab-container'>
      <div className='Home-greeting'>Welcome, Andrew!</div>
    </div>
  );
};

export default TopTab;