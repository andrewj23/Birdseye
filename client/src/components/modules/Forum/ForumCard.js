import React, { Component } from "react";
import "./ForumCard.css";
import Post from "./Post";
import CommentsBlock from "./CommentsBlock";


const ForumCard = (props) => {
  return (
    <div className={"forumcard-container"}>
      <Post subject={props.subject} content={props.content} author={props.author} />
      <CommentsBlock id={props.id} />
    </div>
  );
};


export default ForumCard;