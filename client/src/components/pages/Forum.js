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
    return props.userId ? (
        <div className={"forum-container"}>
            <ForumFeed posts={posts} addNewPost={addNewPost}/>
        </div>
    ) : (
      <div className={"forum-container"}>Log in to Google to view Forum!</div>
    );
};


export default Forum;