import React, { Component, useState} from "react";
import './SearchBar.css'
import SearchField from "./SearchField";
import AddWalletPopup from "../../pages/AddWalletPopup";
const AriaModal = require('react-aria-modal')

const SearchBar = (props) => {
  const [WalletPopup, setWalletPopup] = useState(false);

  const togglePopup = () => {
    if (WalletPopup) {
      return setWalletPopup(false);
    }
    return setWalletPopup(true)
  }

  const popup = WalletPopup ?
    <AriaModal
      titleId="demo-two-title"
      underlayClickExits={true}
      verticallyCenter={true}
    >
      <div className="modal">
        <header className="modal-header">
          <h2 className="modal-title">
            Choose Wallet Type to Add
          </h2>
        </header>
        <div>
          <p>
            test
          </p>
        </div>
        <footer className="modal-footer">
          <button onClick={togglePopup}>
            Close Window
          </button>
        </footer>
      </div>
    </AriaModal> : false;
  return (
    <div className='searchbar-container'>
      <SearchField />
      <div className={"addWallet-container"} onClick={togglePopup}>+</div>
      {popup}
    </div>
  );
};

export default SearchBar;