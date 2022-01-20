import React, { Component } from "react";
import "../../utilities.css";
import "./Forum.css";
import ForumFeed from "../modules/Forum/ForumFeed";


const Forum = (props) => {
    //tests
    let posts = [
        {summary: "1", content: "test1"},
        {summary: "2", content: "test2"},
        {summary: "1", content: "test1"},
        {summary: "1", content: "test1"},
        {summary: "1", content: "test1"},
        {summary: "1", content: "test1"},
        {summary: "1", content: "test1"},
        {summary: "1", content: "test1"}
    ]
    return (
        <div className={"forum-container"}>
            <ForumFeed posts={/* props.posts */posts}/>
        </div>
    );
};


export default Forum;