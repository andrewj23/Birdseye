import React, { useState } from "react";
import "./AddWalletPopup.css"
import AriaModal from "react-aria-modal";
import coinbaseLogo from "../../../dist/coinbase.svg";
import MetamaskConnect from "./MetamaskConnect";
const clientID = "1b64cf309a86bd5f5a4d817e728c4dc5682463397d23b24a8f2f06f4ab433678";
//USE FOR LOCALHOST///////////////////////////
// const redirectURL = "http://localhost:3000/api/callback/"
//USE FOR HEROKU DEPLOYMENT///////////////////////////
const redirectURL = "https://birdseye-crypto.herokuapp.com/api/callback/"
const authURL = "https://www.coinbase.com/oauth/authorize?response_type=code&client_id="+clientID+"&redirect_uri="+redirectURL+"&state=134ef5504a94&scope=wallet:accounts:read,wallet:transactions:read&account=all";
const AddWalletPopup = (props) => {
  const [WalletPopup, setWalletPopup] = useState(false);

  const togglePopup = () => {
    if (WalletPopup) {
      return setWalletPopup(false);
    }
    return setWalletPopup(true)
  }

  const popup = WalletPopup ?
    <AriaModal
      titleId="AddWallet Popup"
      verticallyCenter={true}
    >
      <div className="modal">
        <header className="modal-header">
          <h2 className="modal-title">
            Choose Wallet Type to Add
          </h2>
        </header>
        <div className={"icons-container"}>
        <a href={authURL}><img className={"imgAddWallet"} src={coinbaseLogo}/></a>
        {/*<MetamaskConnect/>*/}
        </div>
        <footer className="modal-footer">
          <button onClick={togglePopup}>
            Close Window
          </button>
        </footer>
      </div>
    </AriaModal> : false;
    return (
      <div>
      <div className={"addWallet-container"} onClick={togglePopup}>+</div>
      {popup}
      </div>
    )
}

export default AddWalletPopup