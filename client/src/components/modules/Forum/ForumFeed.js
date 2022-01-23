import React, { useState, Component } from "react";
import "./ForumFeed.css";
import ForumCard from "./ForumCard";
import {NewPost} from "../ComposeButton";


const ForumFeed = (props) => {
    const [searchTerm, setSearchTerm] = useState("");
    const hasPosts = props.posts.length !== 0;

    return hasPosts ? (
      <>
      <div className='forum-topContainer'>
        <div className="forum-search">
          <input type="text" placeholder="Search" className="forum-input" 
            onChange={(event) => { setSearchTerm(event.target.value); }} />
        </div>
        <NewPost addNewPost={props.addNewPost} />
      </div>
      <div className={"forum-feedcontainer"}>
          {props.posts.filter((postObj) => {
            if (searchTerm === "") { 
              return postObj 
            } else if (postObj.Subject.toLowerCase().includes(searchTerm.toLowerCase())) {
              return postObj
            } else if (postObj.Content.toLowerCase().includes(searchTerm.toLowerCase())) {
              return postObj
            } else if (postObj.AuthorName.toLowerCase().includes(searchTerm.toLowerCase())) {
              return postObj
            }
          }).map((postObj) => (
            <ForumCard subject={postObj.Subject} content={postObj.Content} author={postObj.AuthorName} id={postObj._id} />
          ))}
      </div>
      </>
    ) : (
      <div className='forum-topContainer'>
        <div className="forum-search">
          <input type="text" placeholder="Search" className="forum-input" 
            onChange={(event) => { setSearchTerm(event.target.value); }} />
        </div>
        <NewPost addNewPost={props.addNewPost} />
        <div>No Posts!</div>
      </div>
    );
};
    
    
export default ForumFeed;