import React, { useState } from "react";
import "./NewComment.css";
import { post } from "../../../utilities";


const NewComment = (props) => {
    const [content, setContent] = useState("");

    const addNewComment = () => {
        if (content === ""){
            return
        }

        const body = {
            parent: props.id,
            content: content
        }
        post("/api/newComment", body);
    }

    return (
        <>
        <span>
            <input type="text" className="input" onChange={(event) => { setContent(event.target.value); }}></input>
            <button className="button" onClick={addNewComment}></button>
        </span>
        </>
    );
};


export default NewComment;