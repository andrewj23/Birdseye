import React, { useState, Component } from "react";
import "./ForumFeed.css";
import ForumCard from "./ForumCard";


const ForumFeed = (props) => {
    const [searchTerm, setSearchTerm] = useState("");
    const hasPosts = props.posts.length !== 0;

    return hasPosts ? (
      <div className='forum-topContainer'>
        <div className="forum-search">
          <input type="text" placeholder="Search" className="forum-input" 
            onChange={(event) => { setSearchTerm(event.target.value); }} />
        </div>
        <div className={"forumfeed-container"}>
          {props.posts.filter((postObj) => {
            if (searchTerm === "") { 
              return postObj 
            } else if (postObj.summary.toLowerCase().includes(searchTerm.toLowerCase())) {
              return postObj
            } else if (postObj.content.toLowerCase().includes(searchTerm.toLowerCase())) {
              return postObj
            }
          }).map((postObj) => (
            <ForumCard summary={postObj.summary} content={postObj.content} />
          ))}
        </div>
      </div>
    ) : (
      <div className='forum-topContainer'>
        <div className="forum-search">
          <input type="text" placeholder="Search" className="forum-input" 
            onChange={(event) => { setSearchTerm(event.target.value); }} />
        </div>
        <div>No Posts!</div>
      </div>
    );
};
    
    
export default ForumFeed;