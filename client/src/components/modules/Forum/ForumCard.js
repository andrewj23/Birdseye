import React, { Component } from "react";
import "./ForumCard.css"


const ForumCard = (props) => {
  return (
    <div className={"forumcard-container"}>
      <div className="forumcard-subject">{ props.subject }</div>
      <div className="forumcard-content">{ props.content }</div> 
      <div className="forumcard-author">{ props.author }</div> 
    </div>
  );
};


export default ForumCard;