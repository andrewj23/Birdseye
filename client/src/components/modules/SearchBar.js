import React, { Component, useState} from "react";
import './SearchBar.css'
import SearchField from "./SearchField";
import AddWalletPopup from "./AddWalletPopup";



const SearchBar = (props) => {
  return (
    <div className='searchbar-container'>
      <SearchField />
      <AddWalletPopup/>
    </div>
  );
};

export default SearchBar;