import React, { useEffect, useState } from "react";
import "./ForumCard.css";
import Post from "./Post";
import CommentsBlock from "./CommentsBlock";
import { get } from "../../../utilities";


const ForumCard = (props) => {
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [numLikes, setNumLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    get("/api/getPostComments", { parent : props.id }).then((comments) => {
        setComments(comments);
    });
  }, []);
  const addNewComment = (commentObj) => {
    setComments(comments.concat([commentObj]));
  };

  useEffect(() => {
    get("/api/getPostLikes", { parent : props.id }).then((likes) => {
      setLikes(likes);
      setNumLikes(likes.length);
      setHasLiked(likes.filter(like => like.AuthorName === props.userName).length === 1);
    });
  }, []);
  const addNewLike = (likeObj) => {
    setLikes(likes.concat([likeObj]));
    setNumLikes(numLikes+1);
    setHasLiked(true);
  };


  return (
    <div className={"forumcard-container"}>
      <Post subject={props.subject} content={props.content} author={props.author} />
      <div className="commentsblock"><CommentsBlock id={props.id} comments={comments} addNewComment={addNewComment} numLikes={numLikes} hasLiked={hasLiked} addNewLike={addNewLike} /></div>
    </div>
  );
};


export default ForumCard;