import React, { Component } from "react";
import './SearchField.css';

const SearchField = (props) => {
  return(
    // <>
    //   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    //   <div className="searchfield-container">
    //     <input type="text" placeholder="Search" className="searchfield-input"></input>
    //     <button type="submit" className="searchfield-button"><i class="fa fa-search"></i></button>
    //   </div>
    // </>
    <div className="searchfield-container">
      <input type="text" placeholder="Search" className="searchfield-input"></input>
    </div>
  );
};

export default SearchField;

