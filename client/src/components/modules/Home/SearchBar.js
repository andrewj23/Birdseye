import React, { Component } from "react";
import './SearchBar.css'
import SearchField from "./SearchField";

const SearchBar = (props) => {
  return (
    <div className='searchbar-container'>
      <SearchField />
    </div>
  );
};

export default SearchBar;