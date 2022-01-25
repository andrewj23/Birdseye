import React, { useState } from "react";
import "./NewComment.css";
import { post } from "../../../utilities";


const NewComment = (props) => {
    const [content, setContent] = useState("");

    const addComment = () => {
        if (content === "") {
            return
        }
        const body = {
            parent: props.id,
            content: content,
        };
        post("/api/newComment", body).then((comment) => {
            props.addNewComment(comment);
            setContent("");
            document.getElementById("buttonId").value = "";
        });
    };

    return (
        <>
        <span className="newcomment-container">
            <input id="buttonId" type="text" className="comment-input" placeholder="New Comment" onChange={(event) => { setContent(event.target.value); }}></input>
            <button className="comment-submit" onClick={addComment}>Submit</button>
        </span>
        </>
    );
};


export default NewComment;