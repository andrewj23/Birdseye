import React, { useEffect, useState } from "react";
import "./ForumCard.css";
import Post from "./Post";
import CommentsBlock from "./CommentsBlock";
import { get } from "../../../utilities";


const ForumCard = (props) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    get("/api/getPostComments", { parent : props.id }).then((comments) => {
        setComments(comments);
    })
  }, []);
  const addNewComment = (commentObj) => {
    setComments(comments.concat([commentObj]));
  };

  return (
    <div className={"forumcard-container"}>
      <Post subject={props.subject} content={props.content} author={props.author} />
      <div className="commentsblock"><CommentsBlock id={props.id} comments={comments} addNewComment={addNewComment} /></div>
    </div>
  );
};


export default ForumCard;