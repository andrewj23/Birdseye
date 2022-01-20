import React, { Component } from "react";
import "./ForumCard.css"


const ForumCard = (props) => {
  return (
    <div className={"forumcard-container"}>
      <div className="forumcard-summary">{ props.summary }</div>
      <div className="forumcard-content">{ props.content }</div>  
    </div>
  );
};


export default ForumCard;