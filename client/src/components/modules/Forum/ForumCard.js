import React, { Component } from "react";
import "./ForumCard.css";
import Post from "./Post";
import CommentsBlock from "./CommentsBlock";


const ForumCard = (props) => {
  return (
    <div className={"forumcard-container"}>
      <Post subject={props.subject} content={props.content} author={props.author} />
      <div className="commentsblock"><CommentsBlock id={props.id} /></div>
    </div>
  );
};


export default ForumCard;