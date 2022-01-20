import React, { Component } from "react";
import "../../utilities.css";
import "./Forum.css";
import ForumFeed from "../modules/Forum/ForumFeed";


const Forum = (props) => {
    return (
        <div className={"forum-container"}>
            <ForumFeed posts={props.posts}/>
        </div>
    );
};


export default Forum;