import React, { useState } from "react";
import "./Footer.css";
import { post } from "../../../utilities";


const Footer = (props) => {
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

    const addLike = () => {
        if (props.hasLiked) {
            return
        }
        const body = {
            parent: props.id,
        };
        post("/api/newLike", body).then((like) => {
            props.addNewLike(like);
        })
    };

    if (props.hasLiked) {
        document.getElementById("likeButton").style.color = "#E55451";
    }

    return (
        <>
        <span className="footer-likeContainer">
            <div id="likeButton" className="footer-likeButton" onClick={addLike}>&hearts;</div>
            <div className="footer-likes">{props.numLikes}</div>
        </span>
        <span className="footer-inputContainer">
            <input id="buttonId" type="text" className="comment-input" placeholder="New Comment" onChange={(event) => { setContent(event.target.value); }}></input>
            <button className="comment-submit" onClick={addComment}>Submit</button>
        </span>
        </>
    );
};


export default Footer;