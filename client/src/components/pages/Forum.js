import React, { Component } from "react";
import "../../utilities.css";
import "./Forum.css";
import ForumFeed from "../modules/Forum/ForumFeed";


const Forum = (props) => {
    //tests
    let posts = [
        {subject: "Subject", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", author: "Nicholas Gustafson"}
    ]
    return (
        <div className={"forum-container"}>
            <ForumFeed posts={/* props.posts */posts}/>
        </div>
    );
};


export default Forum;