import React, { Component, useState, useEffect} from "react";
import "../../utilities.css";
import "./Forum.css";
import ForumFeed from "../modules/Forum/ForumFeed";
import {get} from "../../utilities";


const Forum = (props) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        document.title = "Forum Feed";
        get("/api/allForumPosts").then((postObjs) => {
            let reversedPostObjs = postObjs.reverse();
            setPosts(reversedPostObjs);
        });
    }, []);
    const addNewPost = (postObj) => {
        setPosts([postObj].concat(posts));
    };
    // let posts = [
    //     {subject: "Subject", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", author: "Nicholas Gustafson"}
    // ]
    return (
        <div className={"forum-container"}>
            <ForumFeed posts={posts} addNewPost={addNewPost}/>
        </div>
    );
};


export default Forum;