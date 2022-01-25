import React from "react";
import "./CommentsBlock.css";
import Footer from "./Footer";


const CommentsBlock = (props) => {
    return (
        <>
        {props.comments.map((commentObj) => (
            <div className="comment-container">{commentObj.AuthorName}: {commentObj.Content}</div>
        ))}
        <Footer id={props.id} addNewComment={props.addNewComment} numLikes={props.numLikes} hasLiked={props.hasLiked} addNewLike={props.addNewLike} />
        </>
    );
};


export default CommentsBlock;