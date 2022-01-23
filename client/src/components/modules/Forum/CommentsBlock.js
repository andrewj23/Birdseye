import { get } from "../../../utilities";
import React, { useEffect, useState } from "react";
import "./CommentsBlock.css";
import NewComment from "./NewComment";


const CommentsBlock = (props) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        get("/api/getPostComments", { parent : props.id }).then((comments) => {
            console.log(comments);
            setComments(comments);
        })
    }, []);

    let StructuredComments = comments.map((commentObj) => (
        <div className="comment-container">{commentObj.AuthorName} | {commentObj.Content}</div>
    ));

    return (
        <>
        {StructuredComments}
        <NewComment id={props.id} />
        </>
    );
};


export default CommentsBlock;