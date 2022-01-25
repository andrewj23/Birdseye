import React from "react";
import "./CommentsBlock.css";
import NewComment from "./NewComment";


const CommentsBlock = (props) => {
    return (
        <>
        {props.comments.map((commentObj) => (
            <div className="comment-container">{commentObj.AuthorName}: {commentObj.Content}</div>
        ))}
        <NewComment id={props.id} addNewComment={props.addNewComment} />
        </>
    );
};


export default CommentsBlock;