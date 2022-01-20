import React, { useState, Component } from "react";
import "./ComposeButton.css"


const ComposeButton = () => {
    const [ComposePopup, setComposePopup] = useState(false);

    const togglePopup = () => {
        if (ComposePopup) {
            setComposePopup(false);
        } else {
            setComposePopup(true);
        }
    }
    
    const Popup = ComposePopup ?
        <></>
    : false;

    return (
        <>
        <div className={"composebutton-container"} onClick={togglePopup}>+</div>
        {Popup}
        </>
    );
};


export default ComposeButton;