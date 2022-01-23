import React from "react";
import "./Post.css";


const Post = (props) => {
    return (
        <>
        <div className="post-subject">{ props.subject }</div>
        <div className="post-content">{ props.content }</div> 
        <div className="post-author">{ props.author }</div> 
        </>
    );
};


export default Post;